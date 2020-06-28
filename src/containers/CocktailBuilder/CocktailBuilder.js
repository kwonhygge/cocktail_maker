import React,{Component} from "react";
import Cocktail from "../../components/Cocktail/Cocktail"
import BuildControls from "../../components/Cocktail/BuildControls/BuildControls"
import Recipes from "../../components/Cocktail/Recipes/Recipes";
import Modal from "../../components/UI/Modal/Modal";
import Summary from "../../components/Cocktail/Summary/Summary";

class CocktailBuilder extends Component{
    state={
        ingredients:{
            sourmix:0,
            cranberry:0,
            peachliquor:0
        },
        shakable:false
    }

    addIngredientHandler = type => {
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type]+1;

        this.setState((prevState,props)=>{
            return {
                ingredients: updatedIngredients
            }
        })
        this.updateShakeState(updatedIngredients);
    }

    removeIngredientHandler = type => {
        if(this.state.ingredients[type]<=0){
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type]-1;

        this.setState((prevState,props)=>{
            return{
                ingredients: updatedIngredients
            }
        })
        this.updateShakeState(updatedIngredients);

    }

    updateShakeState (ingredients){
        const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum+el
        },0)
  
        this.setState({shakable: sum>0})
      }

    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0
        }
        return(
            <>
                <Modal>
                    <Summary ingredients={this.state.ingredients}/>
                </Modal>
                <Cocktail ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                shakable={this.state.shakable}
                />
                <Recipes />
            </>
        )
    }
}

export default CocktailBuilder;