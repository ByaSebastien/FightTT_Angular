export interface LinkModel {
    title: string;
    url?: string;
    children?: LinkModel[];
    isVisible?: boolean;
}