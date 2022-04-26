import { createTheme, styled, Grid, Card, CardMedia, CardContent } from "@mui/material";


///Getting the default App theme.
///Material ui components default setting can be chnaged here also
 export const theme = createTheme({
   components:{
       MuiButton:{
           defaultProps:{
               
           }
           ,
           styleOverrides:{
               root:{
                   marginTop: '40px'
               }
           }
       },
       
       
       
   }
});

///Creating a custom material ui div
export const MyDiv = styled('div')(({theme})=>({
    backgroundColor:theme.palette.background,
    padding:theme.spacing(8,0,6)
  
  }));

  ///Creating custom Material Button. 
export const ButtonDiv= styled('div')(({theme})=>({
      components:{
          MuiButton:{
              defaultProps:{

              }
          }
          
      }

  }));

  ///Creating custom Mui Grid 
  export const MyCardGrid=styled(Grid)(({theme})=>({
maxWidth:'md',
padding:'20px 0'


  }));

  ///Creating custom Mui Card
  export const MyCard =styled(Card)(({theme})=>({
height:'100%',
display:'flex',
flexDirection:'column'
  }));

  ///Creating custom Mui Card Media
  export const MyCardMedia=styled(CardMedia)(({theme})=>({
      paddingTop:'56.25%'
  }))
  export const MyCardContent=styled(CardContent)(({theme})=>({
      flexGrow:1
  }))


  ///Creating Custom Mui footer
  export const MyFooter =styled('footer')(({theme })=>({
    backgroundColor:theme.palette.background,
    padding:'50px 0'

  }))