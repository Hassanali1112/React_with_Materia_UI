import "./App.css";
import TourCard from "./TourCarts/TourCard";
import { AppBar, Container, Grid2, Typography } from "@mui/material";
import {data} from "./data"
import PrimarySearchAppBar from "./AppBar/AppBar";

function App() {
  console.log(data)
  return (
    <>
    <PrimarySearchAppBar />
      <Container sx={{marginY : "1.5rem"}}>
        {data.map((tour,index)=>{
          return (
            <>
              <Typography variant="h5" component={"h6"} >{tour.name}</Typography>
            <Grid2 container spacing={3} marginY={2} key={index}>
              
              {
                tour.tours.map((tourCard,index)=>
                  {
                  return (
                    <>
                      <TourCard card={tourCard} key={index} borderRadius={5} />
                    </>
                  );
                })
              }
          </Grid2>
              
              </>
              
                

              
              
            );
          })}
        
      </Container>
    </>
  );
}

export default App;
