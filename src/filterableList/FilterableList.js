import React from "react";
import ListItem from "../listItem/ListItem";

class FilterableList extends React.Component{

    render(){
        
        const list = this.props.booksList
            .filter(book => (this.props.printType === "" || book.volumeInfo.printType === this.props.printType) && (this.props.bookType === "" ||book.saleInfo.isEbook === true))
            .map((item,i) =>

            <ListItem {...item} key={i}/>

        );

        return(

            <div className="list">

                {list}

            </div>
        )
    }

}

export default FilterableList;
