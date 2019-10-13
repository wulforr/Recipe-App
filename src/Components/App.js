import React from "react"
import Form from "./form"
import Recipe from "./recipes"


const APIKEY = Write your own API key here;
class App extends React.Component {
    constructor() {
        super()
        //Initialize State
        this.state = {
            recipes: []
                }
    }


    //Load the recipes from API
    getSearchValue = async (e) => {
        //collect data of the form input
        const value = e.target.elements.searchBar.value
        e.preventDefault()
        const recipeData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${APIKEY}&q=${value}&count=9`)
        const data = await recipeData.json()
        //Update state according to the data
        this.setState({
            recipes:data.recipes
        })

    }
    render() {

        return (
            <div>
                {/* send the getSearchValue function as a prop */}
            <Form getSearchValue={this.getSearchValue} />
            {/* send all the reciepes as data prop to Recipe component */}
            <Recipe key = {this.state.recipes.recipe_id} data = {this.state.recipes} />
            
        </div>
        )
    }

}

export default App
