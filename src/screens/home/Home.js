import { Component } from "react";
import "./Home.css";
import Header from "./../../common/Header";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import MoviesData from "./../../common/moviesData";

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
  ImageListItem:{
    height:250,

  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  ImageListItemR: {
    height: 550,
    width:100,
    margin:10,
  },
}));



export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="upcoming-movies">Upcoming Movies</div>
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={5}>
          {MoviesData.map((item) => (
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
              {MoviesData.map((item) => (
                <ImageListItem className={classes.ImageListItemR} key={item.id}>
                  <img id="imagelist" src={item.poster_url} alt={item.title} />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>Released On: {item.release_date}</span>}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <div className="filters"></div>
      </div>
    </div>
  );
}

