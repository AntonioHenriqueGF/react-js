import { RepositoryList } from './components/RepositoryList';
import { RecipeList } from './components/RecipeList';
import './styles/global.scss';
import './styles/recipes.scss';

export function App() {
    return (
        <>
            <RecipeList />
        </>
    );
}