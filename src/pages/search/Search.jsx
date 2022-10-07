import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import useFetch from '../../hooks/useFetch';
import './Search.css'

const Search = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = "http://localhost:3001/recipes/q=" + query
    const {data, error, isPending} = useFetch(url)

    return (
        <div>
           <h2 className="page-title">Recipe including "{query}"</h2>
           {error && <p className='error'>{error}</p>}
           {isPending && <p className='loading'>Loading...</p>}
           {data && <RecipeList recipe={data}/>}
        </div>
    );
}
 
export default Search;