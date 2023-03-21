import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function Hero() {
  return (
    <Card className=' m-2 bg-gradient-to-r from-purple-500 to-pink-500'>
      <CardContent>
        <Typography className='py-10'>
            <p className='text-4xl font-bold text-center'>
                Welcome to 
                <br />
                myLearning 2.0
            </p>

            <br />
            <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat earum ipsum unde dolorem eaque eius illo quae quis repudiandae, adipisci ab nesciunt saepe nostrum! Soluta beatae eos tenetur quae recusandae.
            </p>
            
        </Typography>
      </CardContent>
    </Card>
  );
}