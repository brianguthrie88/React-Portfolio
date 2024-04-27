import myPhoto from '../assets/images/myPhoto.png';
import Nav from './Nav.jsx';
function Header(props) {
  const { setCurrentPage } = props;
  return <header>
  <div className="name-photo">
      <h1>Brian Guthrie</h1>
      <img src={ myPhoto } alt="Photo of me"/> 
  </div>
  <Nav setCurrentPage = { setCurrentPage }/>
</header>
}

export default Header;
