import React from "react"
import {Link} from "react-router-dom"

const APIKEY = "f2aff6224c8c1b303057c7c7ac5a40fd";

class Recipe1 extends React.Component {
    constructor() {
        super()
        this.state = {
            activeRecipe: []
        }
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe
        const getRecipeData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${APIKEY}&q=${title}`)
        const specificRecipe = await getRecipeData.json()
        await console.log(specificRecipe.recipes[0], this.props.location.state.recipe)
        this.setState({
            activeRecipe: specificRecipe.recipes[0]
        })
    }

    render() {
        const finalData = this.state.activeRecipe
        return (

            <div className="container">
                {finalData.length !== 0 &&
                    <div>
                        <h1>${finalData.title}</h1>
                        <img src={finalData.image_url} alt="food logo" />
                        <h3>Publisher : {finalData.publisher}</h3>
                        <Link to={{pathname: `/`}} ><button className="btn btn-info" style={{ color: "white" }}>
                                Go Back</button></Link>
                    </div>
                }
            </div>
        )
    }
}

export default Recipe1