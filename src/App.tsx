import { useState } from "react";
import { Movie } from "./models/movies";
function App() {
  let foodList:string[] = ['rice', 'pizza', 'double cheese burger','sushi'];
  const [food, setFood] = useState(foodList);
  const [meal, setMeal] = useState('');
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
     
      <ul>
        {
          food.map((meal) => {
            return <li key={meal}>{meal.toUpperCase()}</li>
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
