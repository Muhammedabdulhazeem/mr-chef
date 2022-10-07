import { useTheme } from '../hooks/useTheme';
import './RecipeList.css'
import Trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config';

const RecipeList = ({recipes}) => {
    const { mode } = useTheme()

    if (recipes.length === 0) {
        return <div className="error">No recipes to load...</div>
    }

    const handleClick = (id) => {
        projectFirestore.collection('recipe').doc(id).delete()
    }

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div className={`card ${mode}`} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <a href={`/recipe/${recipe.id}`}>Cook this</a>
                    <img 
                        className='delete'
                        src={Trashcan}
                        onClick={() => handleClick(recipe.id)}
                     />
                </div>
            ))}
        </div>
    );
}
 
export default RecipeList;