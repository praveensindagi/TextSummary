import * as React from 'react';
import './summary.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography ,Button, Input ,Divider  } from '@mui/material';
import TextField from '@mui/material/TextField';
import UploadFileIcon from '@mui/icons-material/UploadFile';


export default function Summarybox() {
    return (
        <>
        <Container >
        <Box  mb={5}sx={{ flexGrow: 1 }}>
      <Grid  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={6}>
        <Grid item xs={12} mt={2} md={6} lg={6}>
        <Paper id="boxdesign" elevation={3} > 
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-static "
          className='textbox'
          label="Original Text"
          multiline
          rows={7}
          defaultValue="Enter The Text"
          variant="outlined"
          style = {{width:535, height:200,borderColor:'white'}}
        />
     <Button> <UploadFileIcon /> <Input id='import' type="file" variant="outlined" ></Input>
     </Button>
      <br></br>

     
 
    </Box>
  
        </Paper>       </Grid>
        <Grid item xs={12}  mt={2}  md={6} lg={6}>
        <Paper id="boxdesign" elevation={3} > 
         <Box style = {{width:535,height:270}}>
   <div className='designtext'>

   
   <Typography id="fontstyle"> Summarized Text</Typography></div>
   <Divider id="divider" variant="middle" />          </Box>

        </Paper>
        </Grid>
        <Grid  mt={2} md={12} lg={12}>
        <Button  id="button" variant="contained" > Summarize Now </Button>
        </Grid>
        
      </Grid>
    </Box>
        </Container>
       
        </>
    )
}

