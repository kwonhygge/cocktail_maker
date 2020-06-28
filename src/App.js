import React from 'react';
import Layout from "./components/Layout/Layout"
import CocktailBuilder from "./containers/CocktailBuilder/CocktailBuilder";
import Main from "./components/Main/Main";
import Result from "./components/Result/Result"
import {HashRouter, Route} from "react-router-dom";

function App() {
  const Create = () => (
    <>
      <Layout>
        <CocktailBuilder />
      </Layout>
    </>
  )
  return (
    <HashRouter>
      <Route path="/" component={Main} exact={true}/>
      <Route path="/create" component={Create} />
      <Route path="/result" component={Result} />
    </HashRouter>
      
    
  );
}

export default App;
