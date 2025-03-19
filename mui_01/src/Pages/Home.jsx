import TourCard from "../TourCarts/TourCard";
import { Container, Grid2, Typography } from "@mui/material";
import { data } from "../data";

const Home = () => {
  console.log(data)
  return (
    <>
      <Container sx={{ marginY: "1.5rem" }}>
        {data.map((tour, index) => {
          return (
            <>
              <Typography variant="h5" component={"h6"}>
                {tour.name}
              </Typography>
              <Grid2 container spacing={3} marginY={2} key={index}>
                {tour.tours.map((tourCard, index) => {
                  return (
                    <>
                      <TourCard card={tourCard} key={index} borderRadius={5} />
                    </>
                  );
                })}
              </Grid2>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
