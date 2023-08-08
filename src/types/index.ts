export interface IModule {
    id: string;
    title: string;
    slug: string;
    disabled?: boolean;
}

export interface ISection {
    id: string;
    title: string;
    content: string;
}
