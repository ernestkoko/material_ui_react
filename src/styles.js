import { createTheme, styled, Grid, Card, CardMedia, CardContent } from "@mui/material";

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

export const MyDiv = styled('div')(({theme})=>({
    backgroundColor:theme.palette.background,
    padding:theme.spacing(8,0,6)
  
  }));

  export const ButtonDiv= styled('div')(({theme})=>({
      components:{
          MuiButton:{
              defaultProps:{

              }
          }
          
      }

  }));
  export const MyCardGrid=styled(Grid)(({theme})=>({
maxWidth:'md',
padding:'20px 0'


  }));

  export const MyCard =styled(Card)(({theme})=>({
height:'100%',
display:'flex',
flexDirection:'column'
  }));

  export const MyCardMedia=styled(CardMedia)(({theme})=>({
      paddingTop:'56.25%'
  }))
  export const MyCardContent=styled(CardContent)(({theme})=>({
      flexGrow:1
  }))

  export const MyFooter =styled('footer')(({theme })=>({
    backgroundColor:theme.palette.background,
    padding:'50px 0'

  }))