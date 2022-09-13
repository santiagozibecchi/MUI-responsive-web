import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import {
   Avatar,
   Button,
   ButtonGroup,
   Modal,
   Stack,
   styled,
   TextField,
   Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
   DateRange,
   Image,
   PersonAdd,
   VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
});

const UserBox = styled(Box)({
   display: "flex",
   alignItems: "center",
   gap: "1rem",
   marginBottom: "1rem",
});

const Add = () => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <Tooltip
            onClick={() => setOpen(true)}
            title="Add Photo"
            sx={{
               position: "fixed",
               bottom: "1.2rem",
               left: {
                  xs: "calc(50% - 1rem)",
                  sm: "calc(100% - 4.5rem)",
                  lg: "1.2rem",
               },
            }}
         >
            <Fab color="primary" aria-label="add">
               <AddIcon />
            </Fab>
         </Tooltip>
         <StyledModal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box
               width={400}
               height={280}
               bgcolor={"background.default"}
               color={"text.primary"}
               borderRadius={5}
               p={3}
            >
               <Typography variant="h6" color="gray" textAlign="center">
                  Create Post
               </Typography>
               <UserBox>
                  <Avatar src="" sx={{ width: 30, height: 30 }} />
                  <Typography fontWeight={500}>John Doe</Typography>
               </UserBox>
               <TextField
                  fullWidth
                  id="standard-multiline-static"
                  multiline
                  rows={3}
                  placeholder="What's on your mind?"
                  variant="standard"
               />
               <Stack direction="row" gap={1} mt={2} mb={3}>
                  <EmojiEmotionsIcon color="primary" />
                  <Image color="secondary" />
                  <VideoCameraBack color="success" />
                  <PersonAdd color="error" />
               </Stack>
               <ButtonGroup
                  fullWidth
                  variant="contained"
                  aria-label="outlined primary button group"
               >
                  <Button>POST</Button>
                  <Button sx={{ width: "100px" }}>
                     <DateRange />
                  </Button>
               </ButtonGroup>
            </Box>
         </StyledModal>
      </>
   );
};

export default Add;
