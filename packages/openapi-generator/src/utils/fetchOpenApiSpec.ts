import OpenAPI from 'openapi-typescript-codegen';

export async function fetchOpenApiSpec(url: string): Promise<OpenAPI> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}
