import React from "react";
import {
   Avatar,
   Box,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Checkbox,
   IconButton,
   Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ImageCity from "../images/portada-img.png";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Feed = () => {
   return (
      <Box flex={4} p={2}>
         <Card>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                     R
                  </Avatar>
               }
               action={
                  <IconButton aria-label="settings">
                     <MoreVertIcon />
                  </IconButton>
               }
               title="Shrimp and Chorizo Paella"
               subheader="September 14, 2016"
            />
            <CardMedia
               component="img"
               height="20%"
               image={ImageCity}
               alt="City"
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                  <Checkbox
                     icon={<FavoriteBorder />}
                     checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
               </IconButton>
               <IconButton aria-label="share">
                  <ShareIcon />
               </IconButton>
            </CardActions>
         </Card>
      </Box>
   );
};

export default Feed;
