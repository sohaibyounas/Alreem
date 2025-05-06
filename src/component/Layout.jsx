import { Box, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../pages/Sidebar";
import Navbar from "./Header/Navbar";
import style from '../assets/style';

const Layout = ({ children, showLink = false, contactSupport = false, padding = "20px" }) => {
  return (
    <>
      <Box>
        <Grid container spacing={0}>
          <Grid size={2} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Sidebar />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Navbar showLink={showLink} contactSupport={contactSupport} />
            <Box
              sx={{
                ...style.mainContentBox,
                padding: padding,
                height: showLink
                  ? "calc(100vh - 150px)"
                  : contactSupport
                    ? "calc(100vh - 100px)"
                    : "calc(100vh)",
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
