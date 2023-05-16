import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'

const Article = ({ story, getMoreDetails, index, stripHTML }) => {

  const theme = useTheme();

  const openDetails = (e) => {
    e.preventDefault();
    getMoreDetails(index)
  }

  return (
    <>
      <Box
        component="div"
        sx={{ width: "95%", margin: "auto", display: "flex", justifyContent: "center", flexDirection: "column" }}
        onClick={openDetails}
      >
        <Box
          component="h3"
          sx={{
            width: 500,
            height: 45,
            overflow: "hidden",
            padding: "1px"
          }}
        >
          {story.title}
        </Box>
        <Box
          component="img"
          sx={{
            width: 500,
            height: 300,
            objectFit: "cover",
            maxWidth: { xs: 300, md: 400, lg: 500 },
            margin: "auto"
          }}
          alt={story.description === null ? "default news image, no image for the article provided" : `${story.description}`}
          src={story.urlToImage === null ? "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg" : `${story.urlToImage}`}
        ></Box>

        <Box
          component="h4"
          sx={{
            width: 500,
            height: 55,
            overflow: "hidden"
          }}
        >
          {story.description === null ? "No description available" : `${stripHTML(story.description)}`}
        </Box>
      </Box>
    </>
  );
};

export default Article;