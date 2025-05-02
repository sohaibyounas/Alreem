import React from "react";
import { Box, Button, Card, CardContent, Grid, IconButton, InputBase, Pagination, Typography } from "@mui/material";
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
import style from '../assets/style';

const Inventory = () => {
  return (
    <>
      {/* search bar & button */}
      <Box sx={style.search}>
        <Box
          sx={style.searchBox}
        >
          <SearchIcon sx={style.searchIcon} />
          <InputBase
            placeholder="search..."
            sx={style.searchText}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        <Button sx={style.searchButon}>
          Add Product <AddIcon sx={{ ml: 1, fontSize: 28 }} />
        </Button>
      </Box>

      {/* Cards */}
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item size={{ xs: 12, sm: 6, md: 3, lg: 3 }} key={item.id}>
            <Card
              sx={style.cardGrid}
            >
              <Box sx={style.cardPosition}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={style.cardImg}
                />
                <Box
                  sx={style.cardText}
                >
                  {item.name}
                </Box>
              </Box>
              <Box sx={style.productBox}>
                <CardContent sx={style.productContent}>
                  <Typography sx={style.productDetails}>Product ID:</Typography>
                  <Typography sx={style.productDetails}>Status:</Typography>
                  <Typography sx={style.productDetails}>Price:</Typography>
                </CardContent>
                <CardContent sx={style.productText}>
                  <Typography sx={style.productText}>{item.PID}</Typography>
                  <Typography sx={style.productText}>{item.Status}</Typography>
                  <Typography sx={style.productText}>{item.Price}</Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Grid */}
      <Grid sx={style.paginationGrid}>
        <Grid size={4}></Grid>
        <Grid size={4}>
          <Pagination
            count={13}
            variant="outlined"
            shape="rounded"
            hidePrevButton
            hideNextButton
            sx={style.pagination}
          />
        </Grid>
        <Grid
          size={4}
          sx={style.paginationDetail}
        >
          <IconButton
            aria-label="backspacearrow"
            disabled
            sx={style.paginationButton}
          >
            <KeyboardBackspaceIcon />
            Previous
          </IconButton>

          <IconButton
            aria-label="arrowright"
            sx={style.paginationButton}
          >
            Next
            <ArrowRightAltIcon />
          </IconButton>
        </Grid>
      </Grid>
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
