import { Box, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../pages/Sidebar";
import Navbar from "./Header/Navbar";

const Layout = ({ children, showLink = false, contactSupport = false, padding = "20px" }) => {
  return (
    <>
      <Box>
        <Grid container spacing={0}>
          <Grid size={2}>
            <Sidebar />
          </Grid>
          <Grid size={10}>
            <Navbar showLink={showLink} contactSupport={contactSupport} />
            <Box
              sx={{
                background: "#29292A",
                padding: padding,
                height: showLink
                  ? "calc(100vh - 150px)"
                  : contactSupport
                    ? "calc(100vh - 100px)"
                    : "calc(100vh - 110px)"
                ,
                overflowY: "auto",
                scrollbarWidth: "none",
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
