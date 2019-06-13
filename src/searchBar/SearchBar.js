import React from "react";

class SearchBar extends React.Component{


    render(){
        
        return(

            <div className="searchBar">
                <form onSubmit={e => this.props.updateSearchTerm(e)}>
                    <label htmlFor="searchInput">Search Term:</label>
                    <input type="text" name="searchInput"></input>
                    <button type="submit">Search</button>
                </form>

            </div>


        )


    }

}

export default SearchBar;