import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom"
import { findMovieById } from "../../common/moviesData";
import "./Details.css"
import { useHistory } from "react-router-dom";
import Artists from "./Artists";
import MovieDetails from "./MovieDetails";
import Header from "../../common/Header";



export default function Details() {
    const id = useParams().id;
    const movies = findMovieById(id);
    const back = "<";
    const history = useHistory();

    function onBack() {
        history.push("/");
    }

    function toBookShow(){
        history.push("/bookShow");
    }

    return (
        <>
            <div>
              <Header/>
              <div style={{
                    position: "absolute",
                    left: "83.5%",
                    top: "8.4px",
                }}>
                    <Link to="/bookshow" style={{ textDecoration: "none" }}><Button variant="contained" color="primary" onClick={toBookShow}>BOOK SHOW</Button></Link>
                </div>
            </div>
            <Button style={{ margin: "20px 0px 0px 22px" }} onClick={onBack}>{back}  Back to Home </Button>
            <div className="details-grid">
                {/* movie-poster */}
                <div className="movie-image">
                    <img src={movies.poster_url} alt={movies.title} />
                </div>
                {/* movie-details */}
                <div className="movie-details">
                    <MovieDetails/>
                </div>
                {/* movie-rating */}
                <div className="movie-rating">
                    <Artists/>
                </div>
            </div>

        </>
    );
}