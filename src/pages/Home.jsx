import { Box, Typography } from "@mui/material";
import Shoping from "../assets/images/shoping.jfif";

const Home = () => {
  return (
    <>
      {/* main box */}
      <Box
        sx={{
          border: "1px solid #3D4348",
          borderRadius: "20px",
          display: "flex",
          padding: "20px",
          gap: "10px",
        }}
      >
        <img
          src={Shoping}
          alt="Shoping"
          style={{ width: "100px", borderRadius: "10px" }}
        />
        <Box>
          <Typography sx={{ color: "#EEE692", lineHeight: "30px" }}>
            Grado Labs
          </Typography>
          <Typography sx={{ color: "#fff", lineHeight: "50px" }}>
            headphones or audio equipments, possibly offering unique feature
          </Typography>
        </Box>
      </Box>
      {/*  */}
      <Box sx={{ display: "flex", marginTop: "20px", gap: "10px" }}>
        <Box
          sx={{
            border: "1px solid #3D4348",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "10px",
            width: "50%",
          }}
        >
          <Typography sx={{ color: "#EEE692", lineHeight: "20px" }}>
            Address
          </Typography>
          <Typography sx={{ color: "#fff", lineHeight: "20px" }}>
            Ajman United AArab Emirates
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #3D4348",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "10px",
            width: "50%",
          }}
        >
          <Typography sx={{ color: "#EEE692", lineHeight: "20px" }}>
            Category
          </Typography>
          <Typography sx={{ color: "#fff", lineHeight: "20px" }}>
            Indoor Outdoor
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", marginTop: "20px", gap: "10px" }}>
        <Box
          sx={{
            border: "1px solid #3D4348",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "10px",
            width: "50%",
          }}
        >
          <Typography sx={{ color: "#EEE692", lineHeight: "20px" }}>
            Website
          </Typography>
          <Typography sx={{ color: "#fff", lineHeight: "20px" }}>
            www.gradolabmail.com
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #3D4348",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "10px",
            width: "50%",
          }}
        >
          <Typography sx={{ color: "#EEE692", lineHeight: "20px" }}>
            Contact Number
          </Typography>
          <Typography sx={{ color: "#fff", lineHeight: "20px" }}>
            +97 3123 8797123
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          border: "1px solid #3D4348",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        <Typography sx={{ color: "#EEE692", lineHeight: "35px" }}>
          Shop Description
        </Typography>
        <Typography sx={{ color: "#fff", lineHeight: "35px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus. Quisquam, voluptatibus.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
