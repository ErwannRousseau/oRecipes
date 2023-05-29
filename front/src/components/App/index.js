import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import { setRecipes } from '../../actions/recipes';

import Loading from './Loading';

import './style.scss';

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const favorites = useSelector((state) => state.user.favorites);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes', {
          signal: abortController.signal,
        });
        dispatch(setRecipes(response.data));
      }
      catch (error) {
        console.log('Erreur API');
      }
    };
    fetchRecipes();

    // Cleanup
    return () => {
      abortController.abort();
    };
  }, []);

  if (recipes.length === 0) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu favorites={favorites} />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/favorites" element={<Home recipes={favorites} title="Vos recettes favorites" />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
