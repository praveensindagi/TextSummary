import * as React from 'react';
import './summary.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography ,Button, Input ,Divider, IconButton  } from '@mui/material';
import TextField from '@mui/material/TextField';
import UploadFileIcon from '@mui/icons-material/UploadFile';


export default function Usecase() {
    return (
        <>
       
   
      <Grid  mt={2} container direction="row"  justifyContent="center" alignItems="center"  spacing={6}>
         <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designx">
           <Box id="head"> <Typography variant="h5" mt={2}> Focus your research </Typography></Box>
                <Typography mt={2} mb={2}>
                Read through the clutter and zoom back into the sections where the details matter most.
                </Typography>
          </Box>
       </Paper>
       
</Grid>   
<Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designx">
           <Box id="head">   <Typography variant="h5" mt={2}> Save Time</Typography></Box>
                <Typography  mt={2} mb={2}>
                When key points are clearly highlighted, you can stay informed without compromising your time.
                </Typography>
          </Box>
       </Paper>
       
</Grid>
  <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designx">
           <Box id="head">   <Typography id='typo' variant="h5" mt={2}> Understand more</Typography></Box>
                <Typography mt={2} mb={2}>
                Summaries help you quickly decipher and understand the meaning of complex texts.
                </Typography>
          </Box>
       </Paper>
       
</Grid>
      </Grid>



       
        </>
    )
}

