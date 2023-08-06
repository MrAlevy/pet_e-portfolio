export function generatePath(path: string) {
    const root = process.env.NEXT_PUBLIC_ROOT_PATH;
    return path === '/'
        ? path
        : (root?.endsWith('/') ? root.slice(0, root.length - 1) : root) + path;
}
