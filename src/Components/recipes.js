import React from "react"
import {Link} from "react-router-dom"

class Recipe extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                {
                    this.props.data.map((recipe) => {
                        return (
                            <div key ={recipe.recipe_id} className="col-md-4">
                            <div className="card" style = {{marginBottom:"2rem"}}>
                                <img src={recipe.image_url} alt={recipe.title} className = "card-img-top" style = {{height:"200px"}}></img>
                                <h5 className="card-title">
                                {recipe.title.length <20 ? recipe.title : `${recipe.title.substring(0,25)}...`}</h5>   
                                <p className="card-text">Publisher: {recipe.publisher}</p>
                                <button className="btn btn-info" style = {{color:"white"}}>
                                <Link to = "/recipe/1">View Recipe</Link>
                                </button>
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