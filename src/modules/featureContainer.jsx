import { Grid, Stack } from '@mui/material';

import FeatureStory from './featureStory.jsx'

const FeatureContainer = ({ feature, total, currentCountry }) => {

  return (
    <Stack container spacing={2} direction="column" sx={{ justifyContent: "center", width: "80%", margin: "auto", marginBotton: "5px" }}>
      <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Grid sx={6}>
          <h2>Featured Story:</h2>
        </Grid>
        <Grid sx={6}>
          <h2>Showing {total} results</h2>
        </Grid>
      </Grid>

        <FeatureStory feature={feature} style={{ margin: "auto" }}></FeatureStory>

    </Stack>
  );
};

export default FeatureContainer;