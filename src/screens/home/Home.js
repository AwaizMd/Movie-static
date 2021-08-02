import React from "react";
import "./Home.css";
import Header from "./../../common/Header";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import MoviesData from "./../../common/moviesData";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Gener from "./../../common/genre";
import Artists from "./../../common/artists";
import { Button } from "@material-ui/core";



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

  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  ImageListItemR: {
    minHeight:350,
    maxHeight: 350,
    width: 100,
    margin: 10,
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
  const [moviesName, setMovieName] = React.useState([]);
  const [actorsName, setActorName] = React.useState([]);

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };
  const handleChangeactor = (event) => {
    setActorName(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Header />
      <div className="upcoming-movies">Upcoming Movies</div>
      {/* Upcoming Movies */}
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
        {/* Filters */}
        <div className="filters">
          <Card className={classes.card}>
            <span id="filterHeading">FIND MOVIES BY:</span>
            <form noValidate autoComplete="off">
              <TextField id="standard-basic" label="Movie Name" />
              {/* Genres */}
              <FormControl>
                <div>
                  <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
                  <Select
                    className={classes.select}
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={moviesName}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {Gener.map((movieName) => (
                      <MenuItem key={movieName.id} value={movieName.name}>
                        <Checkbox checked={moviesName.indexOf(movieName) > -1} />
                        <ListItemText primary={movieName.name} />
                      </MenuItem>
                    ))}
                  </Select>

                </div>

              </FormControl>
              {/* Artists */}
              <FormControl>
                <div>
                  <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
                  <Select
                    className={classes.select}
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={actorsName}
                    onChange={handleChangeactor}
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {Artists.map((actorName) => (
                      <MenuItem key={actorName.id} value={actorName.first_name}>
                        <Checkbox checked={actorsName.indexOf(actorName) > -1} />
                        <ListItemText primary={actorName.first_name} />
                      </MenuItem>
                    ))}
                  </Select>

                </div>

              </FormControl>
              {/* Release Dates */}
              <div>
              {/* Release Date Start */}
                <TextField
                  id="date"
                  label="Release Date Start"
                  type="date"
                  defaultValue="dd-mm-yyyy"
                  className={classes.select}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              {/* Release Date End */}
                <TextField
                  id="date"
                  label="Release Date End"
                  type="date"
                  defaultValue="dd-mm-yyyy"
                  className={classes.select}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              {/* Apply Button */}
              <Button id="applyBtn" className={classes.select} variant="contained" color="primary">APPLY</Button>
            </form>
          </Card>
        </div>




      </div>
    </div>
  );
}

