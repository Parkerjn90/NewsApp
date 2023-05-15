import { Grid, Box } from '@mui/material'

const FeatureStory = ({ feature }) => {

  return (
    <Grid container spacing={2} sx={{margin: "auto"}}>
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
          // alt={feature.description}
          src={feature.urlToImage}
        >
        </Box>
      </Grid>
      <Grid>
        <h2>{feature.title}</h2>
      </Grid>
      <Grid>
        <p>{feature.description}</p>
      </Grid>
    </Grid>
  );
};

export default FeatureStory;