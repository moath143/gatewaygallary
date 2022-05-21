import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { saveAs } from "file-saver";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardStyle: {
    marginBottom: "30px",
    width: "345px",
  },
  imageStyle: {
    width: "345px",
    height: "194px",
  },
});

const CardImage = (props) => {
  const classes = useStyles();

  console.log(props.downloadUrl);
  const downloadImage = () => {
    saveAs(props.downloadUrl, "photo.jpg");
  };
  return (
    <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        // image={"https://pbs.twimg.com/media/FPWeirmVcAYR-6q.jpg"}
        image={props.img}
        alt="Paella dish"
        className={classes.imageStyle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={downloadImage} aria-label="add to favorites">
          <CloudDownloadIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardImage;
