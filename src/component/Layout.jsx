import { Box, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../pages/Sidebar";
import Navbar from "./Header/Navbar";
import { Navigate, useNavigate } from "react-router-dom";


const Layout = ({ children, showLink = false }) => {
  return (
    <>
      <Box>
        <Grid container spacing={0}>
          <Grid size={2}>
            <Sidebar />
          </Grid>
          <Grid size={10}>
            <Navbar showLink={showLink} />
            <Box
              sx={{
                background: "#29292A",
                padding: "20px",
                height: "calc(100vh - 110px)",
                overflowY: "auto",
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
