import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: green[500],
    },
  },
});
const NewsItem = ({key,title,imageUrl,description,newsUrl,author,date,source}) => {
  return (
    <div className='flex items-center justify-center'>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <a href={newsUrl}>
        {/* <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        /> */}
        <CardContent className='dark:bg-gray-900'>
        <div className='flex items-center justify-between w-full mx-auto mt-4 text-gray-400 dark:text-gray-600'>
            <p>{source}</p>
            <img class="w-10 h-10 rounded-full" src={imageUrl} alt="Rounded avatar"/>
          </div>
          <Typography gutterBottom variant="h6" component="div" color="primary">
            {title.split("").slice(0,50).join("")}...
          </Typography>
          <Typography variant="body2" color="secondary">
           {description.split("").slice(0,150).join("")}...
          </Typography>
          <div className='flex items-center justify-start w-full mx-auto mt-4 text-gray-400 dark:text-gray-600'>
            <p>{date.split("").slice(0,10)} , {date.split("").slice(11,19)} GMT</p>
          </div>
        </CardContent>
        </a>
      </CardActionArea>
      <CardActions className='dark:bg-gray-900'>
        <a href={newsUrl}>
        <Button size="small" color="primary">
          read more
        </Button>
        </a>
      </CardActions>
    </Card>
    </div>
  )
}

export default NewsItem
