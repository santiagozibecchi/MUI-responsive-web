import { Button, Typography, styled } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
   const BlueBotton = styled(Button)({
      backgroundColor: "skyblue",
      color: "#888",
      margin: 5,
      "&:hover": {
         backgroundColor: "lightblue",
      },
   });

   return (
      <div>
         <Button variant="text" startIcon={<AddCircleOutlineIcon />}>
            Add text
         </Button>
         <Button variant="contained" disabled>
            Contained
         </Button>
         <Button variant="contained" color="otherColor">
            Grey color
         </Button>
         <Button variant="outlined" color="success">
            Outlined
         </Button>

         <Typography variant="h3">Hola</Typography>

         <BlueBotton>Hola</BlueBotton>
      </div>
   );
}

export default App;
