import { Grid } from '@mui/material';

import Article from './articles.jsx'

const ArticleContainer = ({ stories }) => {

  console.log('stories', stories);
  return (
    <Grid container spacing={2}>
    {stories.map((story, i) => {
      return (
        <Grid size={4} sx={{border: "solid 2px red"}}>
          <Article key={i+100} story={story}></Article>
        </Grid>
      )
    })}
    </Grid>
  );
};

export default ArticleContainer;