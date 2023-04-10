type Props = {
    text?: string;
}

export function PrimeiroComponente(props: Props) {
    return (
        <p>{props.text}</p>
    );
}