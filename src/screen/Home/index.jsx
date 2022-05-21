import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack ";
import CardImage from "../../Components/Card";
import { makeStyles } from "@mui/styles";
import api from "../../API";
import Spinner from "../../Components/Spinner";
import Navbar from "../../Components/Navbar";

const useStyles = makeStyles({
  boxStyle: {
    marginTop: "50px",
    display: "flex",
    flexWrap: "wrap",
  },
});

const Home = () => {
  const [images, setImages] = useState([]);
  const [loadding, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  const fetchData = () => {
    api.search
      .getPhotos({ query: search || "car", orientation: "landscape" })
      .then((result) => {
        setLoading(true);
        setImages(result.response.results);
        console.log(result.response.results);
        setLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  };

  const displayImage = images.map((img, index) => {
    return (
      <CardImage
        img={img.urls.full}
        key={index}
        description={img.alt_description}
        downloadUrl={img.links.download}
      />
    );
  });


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      {loadding ? (
        <Spinner />
      ) : (
        <Box>
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              className={classes.boxStyle}
            >
              {displayImage}
            </Stack>
          </Container>
        </Box>
      )}
      <Box>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            className={classes.boxStyle}
          >
            {displayImage}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
