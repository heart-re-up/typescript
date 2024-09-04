#!/usr/bin/env node

import { Command } from 'commander';
import { dirname } from 'path';
import { openapiGenerator } from './index';
import { extractOptions, parsePackageJsonFile, resolvePackageJsonPath } from './utils/parse';

async function main() {
    const program = new Command();
    program
        .option('-p, --path <path>', 'OpenAPI 스펙이 정의된 json 파일 경로.')
        .action(async ({ path }) => {
            const resolvedPath = resolvePackageJsonPath(path);
            const baseDir = dirname(resolvedPath);
            const json = await parsePackageJsonFile(resolvedPath);
            const items = extractOptions(json);
            for (const item of items) {
                await openapiGenerator(baseDir, item);
            }
        });
    program.parse(process.argv);
}

main().catch(console.error);
