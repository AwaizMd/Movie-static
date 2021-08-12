import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom"
import YouTube from "react-youtube";
import { findMovieById } from "../../common/moviesData";
import "./Details.css";
import moment from "moment";



const MovieDetails = () => {
    const id = useParams().id;
    const movies = findMovieById(id);
    return (
        <div>
            <Typography variant="h5">{movies.title}</Typography>
            <label style={{ fontWeight: "bold" }}>Geners: </label><span>{movies.genres}</span><br />
            <label style={{ fontWeight: "bold" }}>Duration: </label><span>{movies.duration}</span><br />
            <label style={{ fontWeight: "bold" }}>Release Date: </label><span>{moment(movies.release_date).format("ddd ll")}</span><br />
            <label style={{ fontWeight: "bold" }}>Rating: </label><span>{movies.critics_rating}</span><br /><br />
            <label style={{ fontWeight: "bold" }}>Plot: </label><a href={movies.wiki_url}> (Wiki Link)  </a>
            <span>{movies.storyline}</span><br /><br />
            <span style={{ fontWeight: "bold" }}>Trailer:</span><br />
            <YouTube videoId={movies.trailer_id} className="youtube"></YouTube>
        </div>
    );
}

export default MovieDetails;