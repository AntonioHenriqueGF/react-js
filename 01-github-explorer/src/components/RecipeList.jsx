import { RecipeItem } from './RecipeItem';

const recipe = {
    name: 'Pizza',
    description: 'Pizza de Mussarela',
    url: 'https://www.google.com.br/'
}

export function RecipeList(){
    return (
        <section className="recipe-list">
            <h1>Lista de Receitas</h1>
            <ul>
                <RecipeItem recipe={recipe} />
                <RecipeItem recipe={recipe} />
                <RecipeItem recipe={recipe} />
            </ul>
        </section>
    )
}