import React from "react"
import Form from "./form"
import Recipe from "./recipes"

//API Key: f2aff6224c8c1b303057c7c7ac5a40fd 

const APIKEY = "f2aff6224c8c1b303057c7c7ac5a40fd";
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            recipes: []
                }
    }



    getSearchValue = async (e) => {
        const value = e.target.elements.searchBar.value
        e.preventDefault()
        const recipeData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${APIKEY}&q=${value}&count=9`)
        const data = await recipeData.json()
        this.setState({
            recipes:data.recipes
        })
        console.log(data)

    }
    render() {

        return (
            <div>
            <Form getSearchValue={this.getSearchValue} />
            <Recipe key = {this.state.recipes.recipe_id} data = {this.state.recipes} />
            
        </div>
        )
    }

}

export default App