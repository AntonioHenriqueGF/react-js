export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'unnamed-repository'}</strong>
            <p>{props.repository?.description ?? 'No Description'}</p>
            <a href={props.repository?.url ?? '#'}>Acessar Repositório</a>
        </li>
    );
}