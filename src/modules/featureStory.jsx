import { Grid, Box } from '@mui/material'

const FeatureStory = ({ feature }) => {

  return (
    <Grid container spacing={2} sx={{margin: "auto", padding: "10px", display: "flex", justifyContent: "center"}}>
      <Grid sx={{margin: "auto"}}>
        <Box
          component="img"
          sx={{
            // height: 400,
            width: 1000,
            // maxHeight: {xs: 233, md: 167, lg: 800, xl: 1000},
            maxWidth: { xs: 350, md: 500, lg: 800, xl: 1000 },
            margin: "auto"
          }}
          alt={feature.description}
          src={feature.urlToImage}
        >
        </Box>
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