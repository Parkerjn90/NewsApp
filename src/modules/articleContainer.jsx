import { Grid, Typography } from '@mui/material';

import Article from './articles.jsx'

const ArticleContainer = ({ stories, currentCountry, getMoreDetails, stripHTML }) => {


  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-around"
      }}>

      {stories.length === 0 ?
        <div>No headlines available to display</div> : (
          stories.length === 1 ?
            <div>No other headlines available to display</div> :
            stories.map((story, i) => {
              if (i > 0) {
                return (
                  <Grid size={3.5} sx={{
                    width: { sm: 400, md: 550 },
                    height: { sm: 400, md: 510 }, borderRadius: "5px",
                    backgroundColor: "#b6b8c280", marginTop: "5px", overflow: "hidden",
                    padding: "10px"
                  }}>
                    <Typography>
                      <Article
                        key={i + 100}
                        story={story}
                        index={i}
                        getMoreDetails={getMoreDetails}
                        stripHTML={stripHTML}>
                      </Article>
                    </Typography>
                  </Grid>
                )
              };

            }))}
    </Grid>
  );
};

export default ArticleContainer;