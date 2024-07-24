import React from "react";
class MyComponent extends React.Component {
  render() {
    let food: string[] = 
    ["rice", "pizza", "double cheese burger", "sushi"];
    return(
        <>
        <h1>The oldest way</h1>
        <ul>
            {food.map((meal) => {
                return <li key={meal}>{meal.toUpperCase()}</li>;
            })}
        </ul>
        </>
    );
  }
}
export default MyComponent;