import React,{Component} from "react";
import Cocktail from "../../components/Cocktail/Cocktail"

class CocktailBuilder extends Component{
    state={
        ingredients:{
            sourmix:0,
            cranberry:0,
            peachliquor:0
        }
    }

    render(){
        return(
            <>
                <Cocktail ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </>
        )
    }
}

export default CocktailBuilder;