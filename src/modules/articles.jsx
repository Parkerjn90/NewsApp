import { Box } from '@mui/material';

const Article = ({ story }) => {

  console.log('story', story);

  return (
    <>
      <Box
        component="div"
        sx={{ width: "95%", margin: "auto" }}
      >
        <Box
        component="h3"
        sx={{
          width: 500,
          height: 45,
          overflow: "hidden"
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
            maxWidth: { xs: 350, md: 500 },
            margin: "auto"
          }}
          alt={story.description}
          src={story.urlToImage}
        ></Box>
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
      </Box>
    </>
  );
};

export default Article;