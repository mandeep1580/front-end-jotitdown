import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 145,
  },
  color:{
      color:"#B23850",
      fontSize:11
  }
});

export default function Image({image, cardClicked}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => cardClicked({imageId: image.imageId})}>
        <CardMedia
          component="img"
          height="100"
          image={image.imageUrl}
        />
        <CardContent>
          
          <Typography  className={classes.color} variant="body3" component="p">
              {image.timeStamp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
