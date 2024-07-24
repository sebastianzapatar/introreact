import { useState } from "react";
import { Movie } from "./models/movies";
import { moviesData } from "./database/moviesdata";
import { MovieComponent } from "./components/MovieComponent";
function App() {
  let foodList:string[] = ['rice', 'pizza', 'double cheese burger','sushi'];
  const [food, setFood] = useState(foodList);
  const [meal, setMeal] = useState('');
  const [movies, setMovies] = useState<Movie[]>(moviesData);
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: '',
    director: '',
    year: 0
  });
  const addFood = (meal:string) => {
    setFood([meal, ...food]);
    setMeal('');
  };
  const changeMeal = 
  (e:React.ChangeEvent<HTMLInputElement>) => {
    setMeal(e.target.value);
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
      placeholder="Enter your favourite food" 
      onChange={changeMeal} value={meal}/>
      <button onClick={()=>addFood(meal)}>Add</button>
      <h2>I dont know</h2>
    </>
  )
}

export default App
