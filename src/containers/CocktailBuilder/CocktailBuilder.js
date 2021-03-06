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
        shakable:false,
        checking:false,
        foundRecipe:""
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

      shakeHandler = () => {
          this.setState({checking:true});
          this.checkRecipe();
      }
      shakeCancelHandler = () => {
        this.setState({checking:false});
      }


      checkRecipe = () => {
        const recipes = [{PeachCrush:{
            sourmix:2,
            cranberry:2,
            peachliquor:1
        }}
        ]
        
        for (let i in recipes){
            let foundRecipe=""
            console.log(recipes[i]);

            const arrayToCompareIngredient=Object.keys(recipes[i]).map(key=>{
                foundRecipe=key
                return recipes[i][key]
            })

            console.log(array);

            if (JSON.stringify(arrayToCompareIngredient[0])===JSON.stringify(this.state.ingredients)){
                this.setState({foundRecipe:foundRecipe})
            }
        }
      }

      shakeContinueHandler = () => {
        alert("You continue!");
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
                <Modal show={this.state.checking} modalClosed={this.shakeCancelHandler}>
                    <Summary 
                    ingredients={this.state.ingredients}
                    foundRecipe={this.state.foundRecipe}
                    shakeCanceled={this.shakeCancelHandler}
                    shakeContinued={this.shakeContinueHandler}/>
                </Modal>
                <Cocktail ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                shakable={this.state.shakable}
                shakeClicked={this.shakeHandler}
                
                
                />
                <Recipes />
            </>
        )
    }
}

export default CocktailBuilder;