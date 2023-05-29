import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

function Home({ recipes, title }) {
  return (
    <Page>
      <AppHeader />
      <Content
        title={title}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;

Home.defaultProps = {
  title: 'Les recettes oRecipes',
};
