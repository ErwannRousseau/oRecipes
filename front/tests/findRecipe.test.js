import { findRecipe } from '../src/selectors/recipes';

describe('findRecipe', () => {
  const recipes = [{ slug: 'recette-1' }, { slug: 'recette-2' }, { slug: 'recette-3' }];

  it('should return the correct recipe when it exists', () => {
    const searchedSlug = 'recette-2';
    const expected = recipes[1];
    const result = findRecipe(recipes, searchedSlug);
    expect(result).toEqual(expected);
  });

  it('should return undefined when the searched recipe does not exist', () => {
    const searchedSlug = 'recette-inexistante';
    const expected = undefined;
    const result = findRecipe(recipes, searchedSlug);
    expect(result).toEqual(expected);
  });
});
