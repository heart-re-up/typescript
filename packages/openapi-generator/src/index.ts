import fs from 'fs/promises';
import { generate } from 'openapi-typescript-codegen';
import path from 'path';
import { fetchOpenApiSpec } from './utils/fetchOpenApiSpec';

export interface GeneratorOptions {
    name: string;
    url: string;
    dist: string;
}

export async function openapiGenerator(dirname: string, options: GeneratorOptions): Promise<void> {
    try {
        // fetch openapi spec.
        const openApiSpec = await fetchOpenApiSpec(options.url);
        // write temporary file.
        const dir = path.join(dirname, options.dist);
        const file = path.join(dir, options.name + '.spec.json');
        await fs.mkdir(file, { recursive: true });
        await fs.writeFile(file, JSON.stringify(openApiSpec, null, 2));

        // generate api client.
        await generate({
            input: file,
            output: options.dist,
        });

        console.log('API 클라이언트가 성공적으로 생성되었습니다.');
    } catch (error) {
        console.error('API 클라이언트 생성 중 오류 발생:', error);
    }
}
