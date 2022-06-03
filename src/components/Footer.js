import * as React from 'react';
import './summary.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography ,Button, Input ,Divider, IconButton  } from '@mui/material';
import TextField from '@mui/material/TextField';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function Footer() {
    return (
        <>
       
<div className='footer'>

<Box id="fhead"> 
      <Grid mt={5} container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>
        <Grid item xs={6} mt={2} md={2} lg={2}>
       
     
<Typography id="footerhead"> TSWD</Typography>
         </Grid>
        <Grid item xs={6}  md={2} lg={2}>
        <Typography id="footerhead"> Privacy policy</Typography>
        </Grid>
        <Grid item xs={6} mt={2} md={2} lg={2}>
        <Typography id="footerhead"> Terms of use</Typography>
        </Grid>
        <Grid item xs={6} mt={2} md={2} lg={2}>
        <Typography id="footerhead"> Contact us</Typography>
        </Grid>
        <Divider id="divider" variant="middle" /> 
        <Grid item xs={12} mt={2} md={2} lg={2}>

             <IconButton > <MailOutlineIcon/></IconButton>
             <IconButton> <YouTubeIcon/></IconButton>
             <IconButton> < FacebookIcon/></IconButton>
             <IconButton> <InstagramIcon/></IconButton>
             
        </Grid>
        
      </Grid>
</Box>
       </div>
        </>
    )
}

