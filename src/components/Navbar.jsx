import React, { useState } from "react";
import {
   AppBar,
   Avatar,
   Badge,
   Box,
   InputBase,
   Menu,
   MenuItem,
   styled,
   Toolbar,
   Typography,
} from "@mui/material";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import MailIcon from "@mui/icons-material/Mail";

const StyledToolBar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
   backgroundColor: "white",
   padding: "0 10px",
   borderRadius: theme.shape.borderRadius,
   width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
   display: "none",
   alignItems: "center",
   gap: "1rem",
   [theme.breakpoints.up("sm")]: {
      display: "flex",
   },
}));

const UserBox = styled(Box)(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   gap: ".8rem",
   [theme.breakpoints.up("sm")]: {
      display: "none",
   },
}));

const Navbar = () => {
   const [open, setOpen] = useState(false);

   return (
      <AppBar position="sticky">
         <StyledToolBar>
            <Typography
               variant="h6"
               sx={{ display: { xs: "none", sm: "block" } }}
            >
               WINE APP
            </Typography>
            <NightlifeIcon sx={{ display: { xs: "block", sm: "none" } }} />
            <Search>
               <InputBase placeholder="Search" />
            </Search>
            <Icons>
               <Badge badgeContent={4} color="primary">
                  <MailIcon />
               </Badge>
               <Badge badgeContent={4} color="primary">
                  <MailIcon />
               </Badge>
               <Avatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                  onClick={() => setOpen(true)}
               />
            </Icons>
            <UserBox onClick={() => setOpen(true)}>
               <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
               <Typography variant="span">John</Typography>
            </UserBox>
         </StyledToolBar>
         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
         >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
         </Menu>
      </AppBar>
   );
};

export default Navbar;
