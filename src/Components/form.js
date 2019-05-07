import React from "react"

class Form extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <form onSubmit={this.props.getSearchValue}>
                    <input type="text" placeholder="Enter a Recipe name" name = "searchBar"/>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

export default Form