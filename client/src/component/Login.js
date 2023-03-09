import React from 'react'
import { Grid, Button, Typography,makestyles,Paper} from '@material-ui/core';

const Login = () => {
  return (
     <Paper elevation={3}>      
     <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Login
          </Typography>
        </Grid>
        <Grid item>
           <div className=' flex flex-col p-4  '>
                      <label >Username_</label>
                    <input className=' w-80 border relative  rounded-xl p-1 bg-gray-100' type="text" /></div>
        </Grid>
        <Grid item>
             <div className=' flex flex-col  p-4'> 
                    <label>Password</label>
                  <input className=' w-80 border relative  p-1 bg-gray-100' type="password" />
                  </div>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {}}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Login