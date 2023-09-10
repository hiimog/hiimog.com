import styles from "./posts.module.scss";

export interface PostHeadingProps {
    text: string;
    size: number;
}
export function PostHeading(props: PostHeadingProps): JSX.Element {
    const Heading = `h${props.size}` as keyof JSX.IntrinsicElements;
    const numXl = 5 - props.size;
    const xlClass = `text-${numXl}xl`;
    return (
        <Heading className={xlClass}>{props.text}</Heading>
    )
}