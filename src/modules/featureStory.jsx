import { Grid, Box, Typography } from '@mui/material';

const FeatureStory = ({ feature, getMoreDetails, stripHTML }) => {

  const sendWhichStory = (e) => {
    e.preventDefault();
    getMoreDetails();
  }

  return (
    <Grid
      container
      spacing={2}
      onClick={sendWhichStory}
      sx={{
        margin: "auto",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}>
      <Grid sx={{ margin: "auto" }}>
          <Box
            component="img"
            sx={{
              width: 1000,
              height: 600,
              maxHeight: { xs: 200, md: 300, lg: 500, xl: 600 },
              maxWidth: { xs: 350, md: 500, lg: 800, xl: 1000 },
              objectFit: "cover",
              margin: "auto",
              borderRadius: "5px"
            }}
            alt={feature.description === null ? "default news image, no image for the article provided" : `${feature.description}`}
            src={feature.urlToImage === null ? "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg" : `${feature.urlToImage}`}
          ></Box>
      </Grid>
      <Grid>
          <Typography sx={{fontSize: "30px", fontWeight: "400"}}>{feature.title}</Typography>
      </Grid>
      <Grid>
        <Typography sx={{fontSize: "20px", fontWeight: "300"}}>{`${stripHTML(feature.description)}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default FeatureStory;