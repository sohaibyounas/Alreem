import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import style from '../assets/style';

const Userdetail = () => {
  return (
    <Box sx={style.box}>
      <Box>
        <Typography
          sx={style.user}
        >
          User Details
        </Typography>
      </Box>
      <Box sx={style.userDetail}>
        <Box sx={style.userText}>
          <Typography sx={style.userTextItem}>Shop Name</Typography>
          <Typography sx={style.userTextItem}>Order ID:</Typography>
          <Typography sx={style.userTextItem}>Disputes Status:</Typography>
        </Box>
        <Box>
          <Typography sx={style.userTextDetail}>Burhan Judai</Typography>
          <Typography sx={style.userTextDetail}>Alreem-1</Typography>
          <Typography sx={style.userTextDetail}>Active</Typography>
        </Box>
      </Box>
      {/* divider */}
      <Divider
        sx={style.userDivider}
      />
      <Box sx={{ p: 1 }}>
        <Typography
          sx={style.userInnerBox}
        >
          Describe the Reasons
        </Typography>
        <Typography sx={style.userBoxDetail}>
          This Product Usually I am Not Use I Need to Order the New Product.
        </Typography>
      </Box>
    </Box>
  );
};

export default Userdetail;
