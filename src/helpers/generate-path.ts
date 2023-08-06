import { basePath } from '../../next.config';

export function generatePath(path: string) {
    return path === '/' ? path : `${basePath || ''}${path}`;
}
