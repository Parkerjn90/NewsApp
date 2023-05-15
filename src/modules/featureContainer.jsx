import { Grid, Stack } from '@mui/material';

import FeatureStory from './featureStory.jsx'

const FeatureContainer = ({ feature, total }) => {

  return (
    <Stack container spacing={2} direction="column" sx={{ justifyContent: "center", width: "80%", margin: "auto" }}>
      <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Grid sx={6}>
          <h2>Featured Story:</h2>
        </Grid>
        <Grid sx={6}>
          <h2>Showing {total} results</h2>
        </Grid>
      </Grid>
      <a href={feature.url} style={{textDecoration: "none"}}>
        <FeatureStory feature={feature} style={{ margin: "auto" }}></FeatureStory>
      </a>
    </Stack>
  );
};

export default FeatureContainer;