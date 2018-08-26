import React from 'react'

class MovieRow extends React.Component{

    viewmovie(){
     const movieurl =  "https://www.themoviedb.org/movie/" + this.props.movie.id
     window.location.href = movieurl
    }
    

    render(){
        return  <table key = {this.props.movie.id}>
        <tbody>
          <tr>
            <td>
            <img alt = "poster" width = '100' src ={this.props.movie.poster_src}/>
            </td>
            <td>
              <h2> {this.props.movie.title} </h2> 
              <p> {this.props.movie.overview} </p> 
              <input type = "button" onClick = {this.viewmovie.bind(this)} value = "view"/>  
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow 