import React from "react";

class SearchBar extends React.Component{


    handleSubmit(e){

        e.preventDefault();
        this.props.getBooks();

    }

    render(){
        
        return(

            <div className="searchBar">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="searchInput">Search Term:</label>
                    <input type="text" name="searchInput" id="searchInput" onChange={e => this.props.updateSearchTerm(e)}/>
                    <button type="submit">Search</button>
                </form>

            </div>


        )


    }

}

export default SearchBar;