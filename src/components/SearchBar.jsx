import { useState } from 'react';
import { useHistory } from 'react-router';
import './SearchBar.css'

const SearchBar = () => {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefualt()

        history.push(`/search?q=${term}`)
    }

    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text" 
                    id='search'
                    onClick={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    );
}
 
export default SearchBar;