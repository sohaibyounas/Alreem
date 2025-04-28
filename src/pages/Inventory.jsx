import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, InputBase, Pagination, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MackBook from '../assets/images/laptop.jpg';
import GoldenRing from '../assets/images/Golden-Ring.png';
import HeadPhone from '../assets/images/headphone.jpg';
import Watch from '../assets/images/watch.jpg';
import AirBuds from '../assets/images/airbuds.jpg';
import Keyboard from '../assets/images/keyboard.jpg';

const Inventory = () => {
  return (
    <>
      {/* search bar & button */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "90vw",
            mx: "auto",
            backgroundColor: "#29292A",
            borderRadius: "999px",
            px: 2,
            py: 0.5,
            width: 400,
            border: "1px solid #3D4348",
          }}
        >
          <SearchIcon sx={{ color: "#aaa", fontSize: "32px" }} />
          <InputBase
            placeholder="search..."
            sx={{
              color: "#ccc",
              width: "100%",
              fontSize: "24px",
              "& input": {
                padding: 0,
              },
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        <Button sx={{
          border: "1px solid grey",
          borderRadius: "20px",
          color: "#fff",
          px: 2,
          fontSize: 16,
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          background: "transparent",
          boxShadow: "none",
          "&:hover": {
            background: "#29292A",
            boxShadow: "none",
          },

        }}>
          Add Product <AddIcon sx={{ ml: 1, fontSize: 28 }} />
        </Button>
      </Box>

      {/* Cards */}
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item size={{xs:12, sm:6, md:3, lg:3}} key={item.id}>
            <Card
              sx={{
                background: 'none',
                boxShadow: 'none',
                border: '1px solid #3D4348',
                borderRadius: '10px',
                width: '100%',
                overflow: 'hidden',
                m: 2,
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '200px', display: 'block', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '55%',
                    background: '#000',
                    color: '#fff',
                    px: 2,
                    py: 1,
                    fontSize: '24px',
                    fontWeight: 500,
                    borderTopRightRadius: '40px',
                  }}
                >
                  {item.name}
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent sx={{ color: '#fff', pb: '0 !important' }}>
                  <Typography sx={{ mb: 1 }}>Product ID:</Typography>
                  <Typography sx={{ mb: 1 }}>Status:</Typography>
                  <Typography sx={{ mb: 1 }}>Price:</Typography>
                </CardContent>
                <CardContent sx={{ color: '#EEE692', pb: '0 !important' }}>
                  <Typography sx={{ mb: 1 }}>{item.PID}</Typography>
                  <Typography sx={{ mb: 1 }}>{item.Status}</Typography>
                  <Typography sx={{ mb: 1 }}>{item.Price}</Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Grid */}
      <Box sx={{ display: "none" }}>
        <Grid sx={{ display: "flex", marginTop: "40px", gap: "10px" }}>
          <Grid size={4}></Grid>
          <Grid size={4}>
            <Pagination
              count={13}
              variant="outlined"
              shape="rounded"
              hidePrevButton
              hideNextButton
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "#212121",
                  color: "#fff",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
                "&. hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            />
          </Grid>
          <Grid
            size={4}
            sx={{ justifyContent: "end", display: "flex", gap: "10px" }}
          >
            <IconButton
              aria-label="backspacearrow"
              disabled
              sx={{
                background: "#212121",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "0px 15px",
                fontSize: "16px",
                outline: "1px solid #3D4348",
              }}
            >
              <KeyboardBackspaceIcon />
              Previous
            </IconButton>

            <IconButton
              aria-label="arrowright"
              sx={{
                background: "#212121",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "0px 15px",
                fontSize: "16px",
                outline: "1px solid #3D4348",
              }}
            >
              Next
              <ArrowRightAltIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Inventory;

const data = [
  {
    id: 1,
    PID: "1212414",
    name: "Macbook",
    Status: "Active",
    Price: "AED:500:00",
    image: MackBook,
  },
  {
    id: 2,
    PID: "12412153",
    name: "Head Phone",
    Status: "Active",
    Price: "AED:500:00",
    image: HeadPhone,
  },
  {
    id: 3,
    PID: "12412153",
    name: "Golden Ring",
    Status: "Active",
    Price: "AED:500:00",
    image: GoldenRing,
  },
  {
    id: 4,
    PID: "12412153",
    name: "Watch",
    Status: "Active",
    Price: "AED:500:00",
    image: Watch,
  },
  {
    id: 5,
    PID: "12412153",
    name: "Apple Airbuds",
    Status: "Active",
    Price: "AED:500:00",
    image: AirBuds,
  },
  {
    id: 6,
    PID: "12412153",
    name: "Keyboard",
    Status: "Active",
    Price: "AED:500:00",
    image: Keyboard,
  },
  {
    id: 7,
    PID: "12412153",
    name: "Golden Ring",
    Status: "Active",
    Price: "AED:500:00",
    image: GoldenRing,
  },
  {
    id: 8,
    PID: "12412153",
    name: "Watch",
    Status: "Active",
    Price: "AED:500:00",
    image: Watch,
  },
  {
    id: 9,
    PID: "12412153",
    name: "Apple AirBuds",
    Status: "Active",
    Price: "AED:500:00",
    image: AirBuds,
  },
  {
    id: 10,
    PID: "12412153",
    name: "Keyboard",
    Status: "Active",
    Price: "AED:500:00",
    image: Keyboard,
  },
  {
    id: 11,
    PID: "12412153",
    name: "Golden Ring",
    Status: "Active",
    Price: "AED:500:00",
    image: GoldenRing,
  },
  {
    id: 12,
    PID: "12412153",
    name: "Watch",
    Status: "Active",
    Price: "AED:500:00",
    image: Watch,
  },
];
