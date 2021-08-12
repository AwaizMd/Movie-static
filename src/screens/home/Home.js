import React, { useState } from "react";
import "./Home.css";
import Header from "./../../common/Header";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { moviesData } from "./../../common/moviesData";
import { Link} from "react-router-dom";
import Form from './Form';
import moment from "moment";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  ImageListItem: {
    minHeight:250,
    maxHeight: 250,
    minWidth:180,
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
    marginLeft: 10
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  ImageListItemR: {
    minHeight:350,
    maxHeight: 350,
    minWidth:280,

    margin: 10,
  },
  image:{
    minWidth:280,
    maxWidth:290,
  },
  card: {
    maxWidth: 240,
    minWidth: 240,
    padding: 20
  },
  select: {
    width: 220,
    marginTop:5
  },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};



export default function Home() {
  const classes = useStyles();
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [genre, setGenre] = React.useState([]);
  const [artist, setArtist] = React.useState([]);

  const handleGenreChange = (event) => {
    console.log(event.target.value);
    setGenre(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const getFilteredOnGenre = (movies) => {
    if (genre.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      for (let i = 0; i < movie.genres.length; i++) {
        if (genre.includes(movie.genres[i])) {
          return true;
        }
      }
      return false;
    });
  };

  const getFilteredOnArtists = (movies) => {
    if (artist.length === 0) {
      return movies;
    }

    return movies.filter((movie) => {
      let movieArtists = movie.artists.map(
        (artist) => artist.first_name + "" + artist.last_name
      );
      for (let i = 0; i < movieArtists.length; i++) {
        if (artist.includes(movieArtists[i])) {
          return true;
        }
      }
      return false;
    });
  };

  const handleFilter = () => {
    console.log(genre, artist);
    const filteredOnGenre = getFilteredOnGenre(moviesData);
    const filteredOnArtist = getFilteredOnArtists(filteredOnGenre);
    setFilteredMovies(filteredOnArtist);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  // const releaseDate=moment(moviesData.release_date);


  

  return (
    <div>
      <Header />
      <div className="upcoming-movies">Upcoming Movies</div>
      {/* Upcoming Movies */}
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={5}>
          {moviesData.map((item) => (
            <ImageListItem className={classes.ImageListItem} key={item.id}>
              <img src={item.poster_url} alt={item.title} />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="released">
        {/*ReleasedMovies */}
        <div className="releasedMovies">
          <div className={classes.root}>
            <ImageList cols={4} >
              {filteredMovies.map((item) => (
                <ImageListItem className={classes.ImageListItemR} key={item.id}>
                  <Link to={`/details/${item.id}`}>
                  <img id="imagelist" className={classes.image} src={item.poster_url} alt={item.title} />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>Released On: {moment(item.release_date).format("ddd ll")}</span>}
                    />
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        {/* Filters */}
        <div className="filters">
        <Form
            genre={genre}
            artist={artist}
            handleArtistChange={handleArtistChange}
            handleGenreChange={handleGenreChange}
            handleFilter={handleFilter}
          />
          
        </div>
      </div>
    </div>
  );
}

