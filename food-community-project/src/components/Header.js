import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-title"><b>LuisRPavanello's Foodary</b></h1>
        <p><b>"Taste the magic of your kitchen"</b></p>
      </div>
      <div className="header-links">
        <Link className="header-items" to="/"><b>Home</b></Link>
        <Link className="header-items" to="/Community"><b>Community</b></Link>
        <Link className="header-items" to="/Recipe"><b>Recipe</b></Link>
      </div>
    </div>
  );
}
 
export default Header;