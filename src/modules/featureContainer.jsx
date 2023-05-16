import { Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import FeatureStory from './featureStory.jsx'

const FeatureContainer = ({ feature, total, currentCountry, getMoreDetails, stripHTML }) => {

  return (
    <Stack container spacing={2} direction="column" sx={{ justifyContent: "center", width: "80%", margin: "auto", marginBotton: "5px", padding: "4px" }}>
      <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Grid sx={6}>
          <Typography sx={{fontSize: "40px", fontWeight: 400}}>Featured Story:</Typography>
        </Grid>
        <Grid sx={6}>
          <Typography sx={{fontSize: "40px", fontWeight: 400}}>Showing {total} results</Typography>
        </Grid>
      </Grid>
        {feature === undefined ?
        <Typography sx={{fontSize: "40px", fontWeight: 400}}>No Stories Available</Typography>  :
        <FeatureStory feature={feature} style={{ margin: "auto" }} getMoreDetails={getMoreDetails} stripHTML={stripHTML}></FeatureStory>
      }

    </Stack>
  );
};

export default FeatureContainer;