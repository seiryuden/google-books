import React from "react";
import "./ListItem.css";

class ListItem extends React.Component{


    render(){
        
        const authors = this.props.volumeInfo.authors ? this.props.volumeInfo.authors.toString().replace(/,/g,", ") : this.props.volumeInfo.authors;
        const price = this.props.hasOwnProperty("saleInfo") && this.props.saleInfo.hasOwnProperty("retailPrice") ? ` ${this.props.saleInfo.retailPrice.amount} ${this.props.saleInfo.retailPrice.currencyCode}` : " Not for sale/Not available";
        const thumbnail = (this.props.volumeInfo.hasOwnProperty("imageLinks") && this.props.volumeInfo.imageLinks.hasOwnProperty("smallThumbnail"))?  this.props.volumeInfo.imageLinks.smallThumbnail : null;

        

        return(

            <div className="listItem">

                <img className="thumbnail" src={thumbnail} alt="thumbnail"></img>
                <h1>{this.props.volumeInfo.title}</h1>
                <p>Author(s): {authors} </p>
                <p>Price:{price}</p>
                <p>Description: {this.props.volumeInfo.description}</p>


            </div>


        )

    }

}

export default ListItem;