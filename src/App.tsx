import { useState } from "react";
import { Movie } from "./models/movies";
import { moviesData } from "./database/moviesdata";
import { MovieComponent } from "./components/MovieComponent";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
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
      id: movies.length + 2
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
      <div className="container">
        <div className="row">
        {
          movies.map((movie) => {
            return <MovieComponent key={movie.id} movie={movie} />
          })
        }
        </div>
      </div>
      
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
      onChange={handleChange}
      className="input"/>
      <Button onClick={addMovie} className="button button-primary">Add</Button>
      <button className="btn btn-success">Click Me</button>
      <h2>I dont know</h2>
    </>
  )
}

export default App
