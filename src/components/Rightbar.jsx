import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
   return (
      <Box
         bgcolor="lightblue"
         flex={2}
         p={2}
         sx={{ display: { xs: "none", sm: "block" } }}
      >
         <h2>Rightbar</h2>
      </Box>
   );
};

export default Rightbar;
