import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import genres from "./../../common/genre";
import artists from "./../../common/artists";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240,
    maxWidth: 240,
    margin: theme.spacing(1),
    width: "25ch"
  },
  Control: {
    margin: theme.spacing(1),
    minWidth: 195,
    maxWidth: 300
  },

  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
    marginLeft: 10
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    display: "flex",
    padding: 25,
    flexDirection: "column"
  }
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

function Form(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Movie Name" />
        </form>
        <FormControl className={classes.Control}>
          <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={props.genre}
            onChange={props.handleGenreChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {genres.map((names) => (
              <MenuItem key={names.name} value={names.name}>
                <Checkbox checked={props.genre.indexOf(names.name) > -1} />
                <ListItemText primary={names.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.Control}>
          <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={props.artist}
            onChange={props.handleArtistChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {artists.map((names) => (
              <MenuItem
                key={names.first_name + names.last_name}
                value={names.first_name + names.last_name}
              >
                <Checkbox
                  checked={
                    props.artist.indexOf(names.first_name + names.last_name) >
                    -1
                  }
                />
                <ListItemText
                  primary={names.first_name + " " + names.last_name}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Release Date Start"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
        <form
          className={classes.container}
          noValidate
          style={{ marginTop: "8px" }}
        >
          <TextField
            id="date"
            label="Release Date End"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      </CardContent>
      <div className={classes.button}>
        <Button
          variant="contained"
          color="primary"
          onClick={props.handleFilter}
        >
          APPLY
        </Button>
      </div>
    </Card>
  );
}
export default Form;

