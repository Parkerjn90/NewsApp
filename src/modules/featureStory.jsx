import { Grid, Box } from '@mui/material'

const FeatureStory = ({ feature }) => {

  return (
    <Grid container spacing={2} sx={{margin: "auto", padding: "10px", display: "flex", justifyContent: "center"}}>
      <Grid sx={{margin: "auto"}}>
      {feature.urlToImage === null ?
        <Box
        component="img"
        sx={{
          width: 1000,
          height: 600,
          maxHeight: {xs: 200, md: 300, lg: 500, xl: 600},
          maxWidth: { xs: 350, md: 500, lg: 800, xl: 1000 },
          objectFit: "cover",
          margin: "auto"
        }}
        alt="default news image, no image for the article provided"
        src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg"
        ></Box> :
        <Box
          component="img"
          sx={{
            // height: 400,
            width: 1000,
            height: 600,
            objectFit: "cover",
            maxHeight: {xs: 200, md: 300, lg: 500, xl: 600},
            maxWidth: { xs: 350, md: 500, lg: 800, xl: 1000 },
            margin: "auto"
          }}
          alt={feature.description}
          src={feature.urlToImage}
        >
        </Box>
}
      </Grid>
      <Grid>
      <a href={feature.url} style={{textDecoration: "none"}}>
        <h2>{feature.title}</h2>
      </a>
      </Grid>
      <Grid>
        <p>{feature.description}</p>
      </Grid>
    </Grid>
  );
};

export default FeatureStory;