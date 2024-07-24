import { useState } from "react";
import { Movie } from "./models/movies";
import { moviesData } from "./database/moviesdata";
import { MovieComponent } from "./components/MovieComponent";
function App() {
  
  const [movies, setMovies] = useState<Movie[]>(moviesData);
  const [movie, setMovie] = useState<Movie>({
    id: movies.length + 1,
    title: '',
    director: '',
    year: 0
  });
  const {title, director, year} = movie;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  }
  const addMovie = () => {
    setMovie({
      ...movie,
      id: movies.length + 1
    });
    setMovies([...movies, movie]);
    /*setMovie({
      id: 0,
      title: '',
      director: '',
      year: 0
    });*/
  }
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
       name="director"
       onChange={handleChange}/>
      <input type="text"
      placeholder="Enter title"
       value={title}
       id="title"
       name="title"
       onChange={handleChange}/>
      <input type="number" 
      name="year"
      id="year"
      placeholder="enter year"  
      value={year}
      onChange={handleChange}/>
      <button onClick={addMovie}>Add</button>
      <h2>I dont know</h2>
    </>
  )
}

export default App
