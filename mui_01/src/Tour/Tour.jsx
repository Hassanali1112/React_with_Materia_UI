import { BottomNavigation, Box, Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import QuiltedImageList from "../ImageCollection/imageCollections";
import ControlledAccordions from "../Accordian/ControledAccordians";
import BasicModal from "../Modal/BasicModal";
// import BottomNavigation from "@mui/material";

const Tour = () => {
  return (
    <>
      <Container sx={{ width: 1100, marginY: 3 }}>
        <Typography variant="h3" component={"h1"}>
          Explore the world!
        </Typography>
        <Box sx={{ display: "flex", gap: 2, marginY: 2 }}>
          <img
            height={450}
            width={650}
            src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          />
          <QuiltedImageList />
        </Box>
        <Box>
          <Typography variant="h5" component={"h3"}>
            About this Ticket
          </Typography>
          <Typography variant="paraghap" component={"p"} marginY={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error odio
            quo commodi sapiente fugiat obcaecati voluptate vitae dolorum
            similique possimus! Placeat quae consequatur iure sequi amet nihil,
            quia necessitatibus voluptatibus inventore, itaque harum rem facere,
            aliquam deleniti eos a temporibus libero distinctio? Corrupti harum
            animi consectetur pariatur dolorum soluta consequatur.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component={"h3"} sx={{ marginY: 3 }}>
            Frequently Asked Questions
          </Typography>
          <ControlledAccordions />
        </Box>
      </Container>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </>
  );
};
export default Tour;
