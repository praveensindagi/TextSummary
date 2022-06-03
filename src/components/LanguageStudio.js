import * as React from 'react';
import './summary.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography ,Button, Input ,Divider, IconButton  } from '@mui/material';
import TextField from '@mui/material/TextField';
import UploadFileIcon from '@mui/icons-material/UploadFile';


export default function Footer() {
    return (
        <>
       <Divider id="divider" variant="middle" /> 
   
      <Grid  mt={2} container direction="row"  spacing={6}>
        <Grid item xs={6} mt={2} md={4} lg={3}>
       
                <div className='typo'>Summarize & Meaning</div>
                
                
        </Grid>
        <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}>  
           <Box id="designs">
                <Typography> Summarize </Typography>
          </Box>
       </Paper>
       
</Grid>   <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs">
                <Typography> Topics </Typography>
          </Box>
       </Paper>
       
</Grid>   
<Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs">
                <Typography> Highlights</Typography>
          </Box>
       </Paper>
       
</Grid>
  <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs">
                <Typography> Highlights</Typography>
          </Box>
       </Paper>
       
</Grid>
      </Grid>




      <Grid  container direction="row" spacing={6}>
        <Grid item xs={6} mt={2} md={4} lg={3}>
       
                <div className='typo1'>Pre-Processing</div>
                
                
        </Grid>
        <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}>  
           <Box id="designs1">
                <Typography> Proofread</Typography>
          </Box>
       </Paper>
       
</Grid>   <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs1">
                <Typography> Anonymize</Typography>
          </Box>
       </Paper>
       
</Grid>   
<Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs1">
                <Typography> Split by Sentence</Typography>
          </Box>
       </Paper>
       
</Grid>
  <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs1">
                <Typography> Split by Topic</Typography>
          </Box>
       </Paper>
       
</Grid>
      </Grid>



      <Grid  container direction="row"  spacing={6}>
        <Grid item xs={6} mt={2} md={4} lg={3}>
       
                <div className='typo2'>Data Extraction</div>
                
                
        </Grid>
        <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}>  
           <Box id="designs2">
                <Typography> Names </Typography>
          </Box>
       </Paper>
       
</Grid>   <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs2">
                <Typography> Numbers & Time </Typography>
          </Box>
       </Paper>
       
</Grid>   
<Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs2">
                <Typography> Pricing</Typography>
          </Box>
       </Paper>
       
</Grid>
 
      </Grid>


      <Grid  container direction="row" spacing={6}>
        <Grid item xs={6} mt={2} md={4} lg={3}>
       
                <div className='typo4'>Insights</div>
                
                
        </Grid>
        <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}>  
           <Box id="designs4">
                <Typography> Sentiments </Typography>
          </Box>
       </Paper>
       
</Grid>   <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs4">
                <Typography> Emotions</Typography>
          </Box>
       </Paper>
       
</Grid>   
<Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs4">
                <Typography> Sales Insights</Typography>
          </Box>
       </Paper>
       
</Grid>
  <Grid item xs={6} mt={2} md={2} lg={2}>
       
       <Paper elevation={3}  > 
           <Box id="designs4">
                <Typography>  Action Items</Typography>
          </Box>
       </Paper>
       
</Grid>
      </Grid>

       
        </>
    )
}

