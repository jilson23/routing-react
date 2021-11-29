import {Link} from 'react-router-dom'

const menu = () =>{
    return(
        <nav> 
            <Link to="/">Home</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default menu
