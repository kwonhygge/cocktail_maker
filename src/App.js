import React from 'react';
import Layout from "./components/Layout/Layout"
import CocktailBuilder from "./containers/CocktailBuilder/CocktailBuilder"

function App() {
  return (
    <div>
      <Layout>
        <CocktailBuilder />
      </Layout>
    </div>
  );
}

export default App;
