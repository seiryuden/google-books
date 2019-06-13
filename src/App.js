import React from 'react';
import SearchTools from "./searchTools/SearchTools";
import FilterableList from "./filterableList/FilterableList";


class App extends React.Component{
  
  constructor(props){

    super(props);
    this.state = {
      searchTerm: "cooking",
      booksList: [],
      printTypeFilter: "",
      bookTypeFilter: ""
      
    }


  }

  updateSearchTerm(e){
    console.log(e);
    
    this.setState({

      searchTerm: e.target.value

    })


  }

  handlePrintType(value){

    this.setState({
      printTypeFilter: `${value}`
    })
    
  }

  handleBookType(value){

    this.setState({

      bookTypeFilter: `${value}`

    })

  }



  getBooks(){
    
    console.log(this.state.searchTerm);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&maxResults=40&key=AIzaSyD3zsfyGfYi8nJcdJva2ceV-6clAQhXEnw`;

    fetch(url)
      .then(res => {

        if(!res.ok){
          throw new Error("Something went worng, please try again later.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data =>{
        
        this.setState({

          booksList: data.items,
          error: null

        });
        console.log(data.items)
      }) 
      .catch(err =>{
        this.setState({ 
          error: err.message
        })
      })
  }

  
  render(){

    console.log(this.state)
    
    return (
      <main className='App'>
        <h1 className="header">Google Book Search</h1>
        <SearchTools updateSearchTerm={(e)=> this.updateSearchTerm(e)} handlePrintType={value=> this.handlePrintType(value)} handleBookType={value=> this.handleBookType(value)} getBooks={e => this.getBooks(e)}/>
        <FilterableList booksList={this.state.booksList} printType={this.state.printTypeFilter} bookType={this.state.bookTypeFilter}/>
        
      </main>
    );
      
  }
    
}

export default App;