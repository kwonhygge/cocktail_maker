import React,{Component} from "react";
import Cocktail from "../../components/Cocktail/Cocktail"

class CocktailBuilder extends Component{
    state={
        ingredients:{
            cherry:false,
            lemon:false,
            sourMix:0,
            cranberry:0,
            peachLiquor:1
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