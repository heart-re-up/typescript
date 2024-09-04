import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { GeneratorOptions } from '..';

const KEY = 'openapi-generator';

export async function parseJsonFile(path: string): Promise<Record<string, any>> {
    const packageJsonContent = readFileSync(path, 'utf-8');
    return JSON.parse(packageJsonContent);
}

export function resolvePackageJsonPath(packageJsonPath?: string): string {
    return packageJsonPath
        ? path.resolve(process.cwd(), packageJsonPath)
        : path.resolve(process.cwd(), 'package.json');
}

export async function parsePackageJsonFile(resolvedPath: string): Promise<Record<string, any>> {
    console.log('Trying to read package.json from:', resolvedPath);
    const exists = existsSync(resolvedPath);
    if (!exists) {
        throw new Error(`package.json 파일을 찾을 수 없습니다: ${resolvedPath}`);
    }
    return await parseJsonFile(resolvedPath);
}

export function extractOptions(json: Record<string, any>): GeneratorOptions[] {
    // console.log('json', json);
    // console.log('json[KEY]', json[KEY]);
    const v: unknown[] = json[KEY];
    console.log('v', v);
    if (!Array.isArray(v) || v.length === 0) {
        console.error(`package.json에 "${KEY}" 배열이 없거나 비어 있습니다.`);
        process.exit(1);
    }

    for (const each of v) {
        if (typeof each !== 'object' || each === null) {
            throw new Error('각 OpenAPI 설정은 객체여야 합니다.');
        }

        const hasUrl = 'url' in each && typeof (each as any).url === 'string';
        const hasDist = 'dist' in each && typeof (each as any).dist === 'string';

        if (!hasUrl || !hasDist) {
            throw new Error('각 OpenAPI 설정에는 url과 outputDir이 필요합니다.');
        }
    }
    return v as GeneratorOptions[];
}
