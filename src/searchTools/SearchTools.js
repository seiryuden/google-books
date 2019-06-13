import React from "react";
import SearchBar from "../searchBar/SearchBar";
import FilterOptions from "../filterOptions/FilterOptions";
import "./SearchTools.css";

class SearchTools extends React.Component{

    render(){

        return (

            <div className="searchTools">
                
                <SearchBar updateSearchTerm={this.props.updateSearchTerm}/>
                <FilterOptions handlePrintType={this.props.handlePrintType} handleBookType={this.props.handleBookType}/>
            
            </div> 


        )



    }
}

export default SearchTools;