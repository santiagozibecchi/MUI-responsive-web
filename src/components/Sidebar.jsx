import React from "react";
import {
   Box,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Sidebar = ({ setMode, mode }) => {
   return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", lg: "block" } }}>
         <Box position="fixed">
            <List>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <HomeIcon />
                     </ListItemIcon>
                     <ListItemText primary="HomePage" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <AccountBoxIcon />
                     </ListItemIcon>
                     <ListItemText primary="AccountBoxIcon" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <SettingsIcon />
                     </ListItemIcon>
                     <ListItemText primary="SettingsIcon" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <ArchitectureIcon />
                     </ListItemIcon>
                     <ListItemText primary="ArchitectureIcon" />
                  </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                     <ListItemIcon>
                        <DarkModeIcon />
                     </ListItemIcon>
                     <Switch
                        onChange={() =>
                           setMode(mode === "light" ? "dark" : "light")
                        }
                     />
                  </ListItemButton>
               </ListItem>
            </List>
         </Box>
      </Box>
   );
};

export default Sidebar;
