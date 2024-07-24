import { Movie } from "../models/movies"
interface MovieProps {
    movie: Movie;
}
export const MovieComponent = ({movie}:MovieProps) => {
    const {title, director, year} = movie;
    return (
        <div className="col">
    <div className="card">
        <div className="card-header">
            <h3>{title}</h3>
        </div>
        <div className="card-body">
            <h3>Directed by {director}</h3>
            <h3>Released in {year}</h3>
        </div>
    </div>
    </div>
  )
}
