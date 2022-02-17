interface RepositoryItemProps{
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href="https://github.com/unform/unform">{props.repository.html_url}</a>
        </li>
    );
}