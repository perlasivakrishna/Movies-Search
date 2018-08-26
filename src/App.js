import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
 constructor(props){
   super(props)
  //  console.log('this is my initialization')
  //  const movies = [{id:0, poster_src:"", title:"title1",overview:"overview1"},
  //                  {id:1,  poster_src:"",  title:"title2",overview:"overview2"}
  //  ]

  //  var movierRows = []

  // movies.forEach((movie) => {
  //  console.log('movie title is ' +movie.title)
  //  const movieRow = <MovieRow movie = {movie}/>
  //  movierRows.push(movieRow)
  // })
  this.performSearch("avengers")
  this.state = {}
 }

 searchchangehandler(event){
   console.log(event.target.value)
   const searchterm = event.target.value
   this.performSearch(searchterm)
 }

 performSearch(searchterm){
   const urlstring = "https://api.themoviedb.org/3/search/movie?&api_key=a4d18542b2cd5d649c402a48395ea8cb&language=en-US&page=1&include_adult=false&query=" + searchterm
  $.ajax({
    url:urlstring,
    success:(searchresults) =>{

     console.log('fetched data successfully')
     console.log(searchresults)
     const results = searchresults.results
     var movierRows = []
     results.forEach(movie => {
       movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
      const movieRow = <MovieRow key = {movie.id} movie = {movie}/>
       movierRows.push(movieRow)
     });
     this.setState({rows:movierRows})
    },
    error:(xhr,status,err) =>{
     console.log('failed to fecth data')
    }
  })


 }

  render() {
    return (
      <div>
        <table className = "titleBar">
          <tbody>
           <tr>
             <td>
               <img alt = "Title Bar" width = '100' src ="movie search icon.svg"/>
             </td>
             <td width = '8'/>
             <td>
               <h1> MoviesDB Serach</h1>
             </td>
           </tr>
          </tbody>
        </table>
          
        <input style = {{
          fontSize:24,
          display:'block',
          width:'99%',
          paddingLeft:16,
          paddingTop:8,
          paddingBottom:8
        }
        } onChange = {this.searchchangehandler.bind(this)} placeholder = "Enter Search Term"/>

      {this.state.rows}





      </div>
    );
  }
}

export default App;
