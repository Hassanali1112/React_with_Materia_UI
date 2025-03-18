import Paper from "@mui/material/Paper";
import "./TourCard.css";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const TourCard = ({ card }) => {
  console.log(card);

  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
    },
  });

  return (
    <>
      <Grid item size={{xs : 12, sm : 6, md : 3}} >
        <ThemeProvider theme={theme}>
          <Paper>
            <img src={card.image} alt="" className="img" />
            <Box padding={1}>
              <Typography variant="body2" component={"h2"}>
                {card.name}.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTime sx={{ width: 12.5 }} />
                <Typography variant="body2" marginLeft={1} component={"h3"}>
                  {card.duration} Hours
                </Typography>
              </Box>
              <Box
                marginTop={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={card.rating}
                  precision={0.5}
                  size="small"
                />

                <Typography variant="body2" marginLeft={1} component={"h3"}>
                  {card.rating}
                </Typography>
                <Typography variant="body3" marginLeft={1} component={"h3"}>
                  ({card.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".3rem",
                }}
              >
                <Typography variant="body2" component={"h3"}>
                  From C
                </Typography>
                <Typography variant="body2" component={"h3"}>
                  $ {card.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export default TourCard;
