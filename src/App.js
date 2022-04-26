
import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Paper, Grow } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { MyDiv, MyCardGrid, MyCardContent, MyCardMedia, MyFooter } from './styles.js';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  //const classes = ;


  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera color="green" />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <MyDiv>
          <Container maxWidth='sm'>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone this is a photo album and I am trying to make this sentence as long as possible

            </Typography>
            <div>
              <Grid container spacing={2} justifyContent='center' >
                <Grid item >
                  <Button variant="contained" color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant="outlined" color='primary'>
                    Secondary action
                  </Button>
                </Grid>

              </Grid>
            </div>

          </Container>
        </MyDiv>
        <Container maxWidth='md'>
          <MyCardGrid container spacing={4}>
            {
              ///map through the card and return each
              cards.map((card) => (
                <Grow in key={card}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card>
                      <MyCardMedia
                        image="https://source.unsplash.com/random"
                        title='Image title'
                      />
                      <MyCardContent>
                        <Typography gutterBottom variant="h5">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this ection to describe the content.
                        </Typography>
                      </MyCardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grow>
              ))

            }


          </MyCardGrid>

        </Container>
        <MyFooter>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color='textSecondary'>
           Something here to give the footer a purpose..
          </Typography>

        </MyFooter>

      </main>
    </>
  );
}

export default App;
