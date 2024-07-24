import { Movie } from "../models/movies"
interface MovieProps {
    movie: Movie;
}
export const MovieComponent = ({movie}:MovieProps) => {
    const {title, director, year} = movie;
    return (
    <>
        <h1>{title}</h1>
        <h2>Directed by {director}</h2>
        <h3>Released in {year}</h3>
    </>
  )
}
