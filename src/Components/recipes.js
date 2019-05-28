import React from "react"
import { Link } from "react-router-dom"

class Recipe extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        //Map each recipe into their own component and render it
                        this.props.data.map((recipe) => {
                            return (
                                <div key={recipe.recipe_id} className="col-md-4">
                                    <div className="card" style={{ marginBottom: "2rem" }}>
                                        <img src={recipe.image_url} alt={recipe.title} className="card-img-top" style={{ height: "200px" }}></img>
                                        <h5 className="card-title">
                                            {recipe.title.length < 20 ? recipe.title : `${recipe.title.substring(0, 25)}...`}</h5>
                                        <p className="card-text">Publisher: {recipe.publisher}</p>
                                        {/* linked the button to the Recipe1 component and sent recipe's title as a react router's prop  */}
                                        <Link to= {{pathname:`/recipe/${recipe.recipe_id}`,
                                                    state : {recipe : recipe.title}
                                                     }} ><button className="btn btn-info" style={{ color: "white" }}>
                                            View Recipe</button></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Recipe