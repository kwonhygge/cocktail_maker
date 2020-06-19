import React,{Component} from "react";
import Cocktail from "../../components/Cocktail/Cocktail"

class CocktailBuilder extends Component{
    state={
        ingredients:{
            sourmix:3,
            cranberry:1,
            peachliquor:1
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