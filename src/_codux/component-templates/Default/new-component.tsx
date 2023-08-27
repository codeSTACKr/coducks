export interface NewComponentProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({
    children = 'NewComponent',
}: NewComponentProps) => {
    return <div className="text-center">{children}</div>;
};
