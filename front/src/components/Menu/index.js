import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Menu({ favorites }) {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <nav className="menu">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
      >
        Accueil
      </NavLink>
      {favorites.length !== 0 && (
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        >
          Recettes favorites
        </NavLink>
      )}
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          to={`/recipe/${recipe.slug}`}
          className={({ isActive }) => (isActive ? 'menu-link menu-link--active' : 'menu-link')}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
