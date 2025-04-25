import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Inventory = () => {
  return (
    <>
      <Box sx={{ border: "1px solid grey", borderRadius: "10px", p: 1 }}>
        <Box>
          <Typography
            sx={{
              p: 1,
              color: "#EEE692",
              fontSize: "20px",
              fontWeight: "bold",
              px: 2,
            }}
          >
            User Details
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ p: 2, color: "#fff" }}>
            <Typography>Shop Name</Typography>
            <Typography>Order ID:</Typography>
            <Typography>Disputes Status:</Typography>
          </Box>
          <Box sx={{ p: 2, color: "#EEE692", textAlign:"end" }}>
            <Typography>Burhan Judai</Typography>
            <Typography>Alreem-1</Typography>
            <Typography>Active</Typography>
          </Box>
        </Box>
        {/* divider */}
        <Divider
          sx={{ background: "#3D4348", margin: "0px", height: "2.5px", mx: 2 }}
        />
        <Box sx={{p: 1}}>
          <Typography sx={{
              p: 1,
              color: "#EEE692",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            >
              Describe the Reasons
          </Typography>
          <Typography sx={{p: 1, color: "#fff"}}>
            This Product Usually I am Not Use I Need to Order the New Product.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Inventory;
