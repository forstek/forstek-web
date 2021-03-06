import Navmenu from '../Navigation/Navmenu'
import Logo from 'components/Company/Logo'
import 'styles/Navbar.css'

const Navbar = () => (
  <nav className='navbar d-flex'>
    <Logo size='large' />
    <Navmenu />
  </nav>
)

export default Navbar
