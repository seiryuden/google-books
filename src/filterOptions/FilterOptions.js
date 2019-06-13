import React from "react";
import "./FilterOptions.css";

class filterOptions extends React.Component{

    render(){

        return(

            <div className="filterOptions">
                <label htmlFor="printType">Print Type</label>
                <select name="printType" onChange={e => this.props.handlePrintType(e.target.value)}>
                    <option value="">All</option>
                    <option value="BOOK">
                        Books
                    </option>
                    <option value="MAGAZINE">
                        Magazines
                    </option>

                </select>

                <label htmlFor="bookType">Book Type</label>

                <select name="bookType" onChange={e=> this.props.handleBookType(e.target.value)}>
                    <option value="">
                        Any
                    </option>
                    <option value="true">
                        Ebook
                    </option>
                </select>



            </div>


        )


    }


}

export default filterOptions;