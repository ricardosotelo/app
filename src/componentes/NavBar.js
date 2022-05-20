import CartWidget from './CartWidget';
import './NavBar.css';
import Logo from './logo';
function Navbar () {

return(
    <ul>
    <Logo/>
    <li>home</li>  
    <li>img</li>  
    <li>vids</li>
    <li>contact</li>
    <CartWidget/>
    </ul>

    
)

}

export default Navbar;