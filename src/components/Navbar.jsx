import './Navbar.css'
// import { Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import { useTheme } from '../hooks/useTheme';
// import { useContext } from 'react';
// import { ThemeContext } from '../context/ThemeContext';


const Navbar = () => {
    // const {color} = useContext(ThemeContext)

    const { color } = useTheme()


    return (
        <div className="navbar" style={{background: color}}>
            <nav>
                <a href='/' className='brand'><h1>Mr Chef</h1></a>
                <SearchBar />
                <a href="/create">Create Recipe</a>
            </nav>
        </div>

    );
}
 
export default Navbar;