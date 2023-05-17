import { Box } from '@mui/material';

const Article = ({ story, getMoreDetails, index, stripHTML }) => {

  const openDetails = (e) => {
    e.preventDefault();
    getMoreDetails(index)
  }

  return (
    <>
      <Box
        component="div"
        sx={{ width: "95%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
        onClick={openDetails}
      >
        <Box
          component="h3"
          sx={{
            width: "90%",
            height: 60,
            overflow: "hidden",
            padding: "1px",
            fontSize: {xs: "15px", md: "25px"},
            fontWeight: 300,
            lineHeight: 1.2
          }}
        >
          {story.title}
        </Box>
        <Box
          component="img"
          sx={{
            width: "90%",
            height: {xsm: 200, md: 250, lg: 300},
            objectFit: "cover",
            maxWidth: { xs: 300, md: 400, lg: 500 },
            margin: "auto"
          }}
          alt={story.description === null ?
            "default news image, no image for the article provided" :
            `${story.description}`}
          src={story.urlToImage === null ?
            "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg"
            : `${story.urlToImage}`}
        ></Box>
        <Box
          component="h4"
          sx={{
            width: "90%",
            height: 60,
            overflow: "hidden",
            fontSize: {sm: "12px", lg: "16px"},
            fontWeight: 200,
            lineHeight: 1.5
          }}
        >
          {story.description === null ? "No description available" : `${stripHTML(story.description)}`}
        </Box>
      </Box>
    </>
  );
};

export default Article;