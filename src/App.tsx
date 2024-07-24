import { useState } from "react";
import { Movie } from "./models/movies";
import { moviesData } from "./database/moviesdata";
import { MovieComponent } from "./components/MovieComponent";
function App() {
  
  const [movies, setMovies] = useState<Movie[]>(moviesData);
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: '',
    director: '',
    year: 0
  });
  const {title, director, year} = movie;
  
   return (
    <>
      <h1>My Favourite Movies ( ´･･)ﾉ(._.`)</h1>
      <ul>
        {
          movies.map((movie) => {
            return <MovieComponent key={movie.id} movie={movie}/>
          })
        }
      </ul>
      
      <input type="text" 
      placeholder="Enter director" 
       value={director}
       id="director"
       name="director"/>
      <input type="text"
      placeholder="Enter title"
       value={title}
       id="title"
       name="title"/>
      <input type="number" 
      name="year"
      id="year"
      placeholder="enter year"  
      value={year}/>
      <button >Add</button>
      <h2>I dont know</h2>
    </>
  )
}

export default App
