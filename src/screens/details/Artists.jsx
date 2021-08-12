import { colors, ImageList, ImageListItem, ImageListItemBar, makeStyles, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom"
import { findMovieById } from "../../common/moviesData";
import "./Details.css"
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
    },
    imageList: {
        width: 500,
        height: 450
    },
}));

function Artists() {
    const classes = useStyles();
    const id = useParams().id;
    const movies = findMovieById(id);

    function onStarClick() {
        <StarBorderIcon style={{backgroundColor:"yellow"}} />
    }

    return (

        <Typography>
            <div>
                <strong>Rate this movie:</strong>
                <p><StarBorderIcon onClick={onStarClick} /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /></p>
            </div>
            <div style={{ marginTop: "16px", marginBottom: "16px" }}><strong>Artists:</strong></div>
            <div className={classes.root}>
                <ImageList cols={2} className={classes.imageList}>
                    {
                        movies.artists.map((item) => (
                            <ImageListItem key={item.profile_url}>
                                <img src={item.profile_url}></img>
                                <ImageListItemBar
                                    title={item.first_name + " " + item.last_name}
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </div>
        </Typography>

    );
}

export default Artists;