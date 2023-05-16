import { Box } from '@mui/material';

const Article = ({ story, getMoreDetails, index }) => {

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
        {story.urlToImage === null ?
        <Box
        component="img"
        sx={{
          width: 500,
          height: 300,
          objectFit: "cover",
          maxWidth: { xs: 300, md: 400, lg: 500},
          margin: "auto"
        }}
        alt="default news image, no image for the article provided"
        src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg"
        ></Box> :
        <Box
        component="img"
        sx={{
          width: 500,
          height: 300,
          objectFit: "cover",
          maxWidth: { xs: 300, md: 400, lg: 500 },
          margin: "auto"
        }}
        alt={story.description}
        src={story.urlToImage}
        ></Box>
      }
      {story.description === null ?
        <Box
        component="h4"
        sx={{
          width: 500,
          height: 55,
          overflow: "hidden"
        }}
        >
         No description available
        </Box> :
        <Box
        component="h4"
        sx={{
          width: 500,
          height: 55,
          overflow: "hidden"
        }}
        >
         {story.description}
        </Box>
        }
      </Box>
    </>
  );
};

export default Article;