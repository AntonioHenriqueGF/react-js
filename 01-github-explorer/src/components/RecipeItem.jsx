export function RecipeItem(props) {
    return (
        <li>
            <strong>{props.recipe?.name ?? 'unnamed-recipe'}</strong>
            <p>{props.recipe?.description ?? 'No Description'}</p>
            <a href={props.recipe?.url ?? '#'}>Acessar Receita</a>
        </li>
    );
}