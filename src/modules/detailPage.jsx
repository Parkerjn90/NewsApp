import { Box, Button, Grid } from '@mui/material';
import moment from 'moment';

const DetailPage = ({ selectedStory, getMoreDetails }) => {

  const closeDetails = (e) => {
    e.preventDefault();
    getMoreDetails();
  }

  return (

    <Box
      component="div"
      sx={{
        backgroundColor: "white",
        width: { xs: 400, md: 600, lg: 900, xl: 1500 },
        padding: "10px",
        zIndex: 2
      }}
    >
      <Grid
        container
        component="div"
        spacing={10}
        sx={{
          width: { xs: 350, md: 500, lg: 850, xl: 1450 },
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "flex-start",
          padding: "20px"
        }}
      >
        <Grid
          component="div"
          sx={{
            width: "100%",
            height: "5%",
            display: "inline-flex",
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={closeDetails}>
            Close
          </Button>
        </Grid>
        <Grid
          sx={{
            width: "90%",
            margin: "auto"
          }}
        >
          <h1
            style={{
              textAlign: "center"
            }}
          >
            {selectedStory.title}
          </h1>
        </Grid>
        <Grid
          sx={{
            marginBottom: "10px"
          }}>
          <Box
            component="img"
            alt={
              selectedStory.description === null ?
                "no picture available" :
                selectedStory.descriptions
            }
            src={
              selectedStory.urlToImage === null ?
                "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg" :
                selectedStory.urlToImage
            }
            sx={{
              width: 1000,
              height: 600,
              maxHeight: { xs: 200, md: 300, lg: 500, xl: 600 },
              maxWidth: { xs: 250, md: 400, lg: 800, xl: 1000 },
              objectFit: "cover",
              margin: "auto",
              borderRadius: "5px",
            }}>
          </Box>
        </Grid>
        <Grid
          sx={{
            textAlign: "center",
            width: "100%",
            marginBottom: "20px"
          }}>
          <Box
            component="p"
            sx={{ display: "inline", margin: "20px" }}
          >Author: {`${selectedStory.author}`.replace(/,/g, ', ')} via
            {/* "{selectedStory.source.name}" */}
          </Box>
          <Box
            component="p"
            sx={{ display: "inline", margin: "20px" }}
          > Published on: {moment(selectedStory.publishedAt).format('YYYY, MMM Do')}
          </Box>
        </Grid>
        <Grid
          sx={{
            marginBottom: "10px",
            width: "80%"
          }}>
          <Box
            component="span"
            sx={{ display: "inline", margin: "20px" }}
          >{selectedStory.content} <a href={selectedStory.url}>Click here to view the full story.</a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailPage;