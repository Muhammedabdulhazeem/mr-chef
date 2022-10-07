// import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router';
import './Recipe.css'
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';

const Recipe = () => {


    const { mode } = useTheme()
    const { id } = useParams()
    // const url = "http://localhost:3001/recipes/" + id 
    // const {data: recipe, isPending, error} = useFetch(url)

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)

        projectFirestore.collection('recipe').doc(id).get().then(doc => {
            if(doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError("Could not find that recipe")
            }
        })
    }, [ id ])

    const handleClick = () => {
        projectFirestore.collection('recipe').doc(id).update({
            title: 'Something new'
        })
    }

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul> 
                    <p className='mehtod'>{recipe.method}</p>  
                    <button onClick={handleClick}>Update me</button>               
                </>             
            )}
            
        </div>
    );
}
 
export default Recipe;