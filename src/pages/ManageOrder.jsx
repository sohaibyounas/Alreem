import {
  Button,
  Grid,
  IconButton,
  ListItem,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Shoe from "../assets/images/shoes.png";
import PowerBank from "../assets/images/Power-Bank.png";
import WirlessHeadphone from "../assets/images/Wirless-headphone.jfif";
import Laptop from "../assets/images/laptop.png";
import SmartWatch from "../assets/images/Smart-watch.jfif";
import BluetoohSpeaker from "../assets/images/Speaker.png";
import Tablet from "../assets/images/tablet.png";
import SmartTv from "../assets/images/smart-tv.png";
import GamingConsole from "../assets/images/gaming-console.png";
import WirelessEarbuds from "../assets/images/Wireless-buds.png";
import SmartHomeDevice from "../assets/images/Home-Device.png";
import FitnessTracker from "../assets/images/Fitness-tracker.jpg";
import VRHeadset from "../assets/images/headset.png";
import DigitalCamera from "../assets/images/digital-camera.jfif";
import SmartPhone from "../assets/images/phone.png";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import style from '../assets/style';

const ManageOrder = () => {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setData(
      tab === 0 ? Pending : tab === 1 ? Completed : tab === 2 ? Cancelled : []
    );
  }, [tab]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail");
  };

  return (
    <>
      <Grid>
        {/* tabs gird */}
        <Grid
          size={12}
          sx={style.grid}
        >
          <ListItem
            sx={{
              ...style.tab, ...(tab === 0 ? style.tabActive : {}),
            }}
            onClick={() => setTab(0)}
          >
            Pending
          </ListItem>
          <ListItem
            sx={{
              ...style.tab, ...(tab === 1 ? style.tabActive : {}),
            }}
            onClick={() => setTab(1)}
          >
            Completed
          </ListItem>
          <ListItem
            sx={{
              ...style.tab, ...(tab === 2 ? style.tabActive : {}),
            }}
            onClick={() => setTab(2)}
          >
            Cancelled
          </ListItem>
        </Grid>

        {/* order list gird */}
        {data.map((item, index) => (
          <Grid
            key={index}
            size={12}
            sx={style.listGrid}
          >
            {/* item detail grid */}
            <Grid
              size={10}
              sx={style.grid1}
            >
              {/* image */}
              <Grid sx={style.imgGrid}>
                <img src={item.image} alt="ITEM" style={style.imgGridDetail} />
                <Typography
                  sx={style.imgText}
                >
                  only 1 items
                </Typography>
              </Grid>
              {/* text details */}
              <Grid
                sx={style.gridText}
              >
                <Typography
                  sx={style.gridDetail}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={style.gridLeftSideText}
                >
                  order on.
                  <span style={style.gridRightSideText}>
                    UAE-095498745
                  </span>
                </Typography>
                <Typography
                  sx={style.gridLeftSideText}
                >
                  Delivery Date:
                  <span style={style.gridRightSideText}>
                    02:09 AM Thursday 21, July 2024
                  </span>
                </Typography>
              </Grid>
            </Grid>

            {/* button grid */}
            <Grid
              size={2}
              sx={style.buttonMain}
            >
              <Button
                variant="contained"
                sx={style.button}
                onClick={handleClick}
              >
                Details
              </Button>
            </Grid>
          </Grid>
        ))}

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
      </Grid>
    </>
  );
};

export default ManageOrder;

const Pending = [
  {
    id: 1,
    name: "Vitality vibes",
    orderId: "UAE-095498745",
    date: "02:09 AM Thursday 21, July 2024",
    image: Shoe,
  },
  {
    id: 2,
    name: "Power Bank",
    orderId: "PAK-6923702",
    date: "06:39 AM Friday 1, August 2020",
    image: PowerBank,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    orderId: "IND-123456789",
    date: "12:00 PM Saturday 15, September 2023",
    image: WirlessHeadphone,
  },
  {
    id: 4,
    name: "Smart Watch",
    orderId: "USA-987654321",
    date: "03:45 PM Sunday 10, October 2021",
    image: SmartWatch,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    orderId: "CAN-456789123",
    date: "09:30 AM Monday 5, November 2022",
    image: BluetoohSpeaker,
  },
];

const Completed = [
  {
    id: 1,
    name: "Smartphone",
    orderId: "AUS-123456789",
    date: "11:15 AM Tuesday 20, December 2023",
    image: SmartPhone,
  },
  {
    id: 2,
    name: "Laptop",
    orderId: "UK-987654321",
    date: "02:30 PM Wednesday 25, January 2024",
    image: Laptop,
  },
  {
    id: 3,
    name: "Tablet",
    orderId: "GER-456789123",
    date: "08:00 AM Thursday 30, February 2024",
    image: Tablet,
  },
  {
    id: 4,
    name: "Smart TV",
    orderId: "FRA-789123456",
    date: "05:00 PM Friday 7, March 2024",
    image: SmartTv,
  },
  {
    id: 5,
    name: "Gaming Console",
    orderId: "ITA-321654987",
    date: "10:45 AM Saturday 15, April 2024",
    image: GamingConsole,
  },
];

const Cancelled = [
  {
    id: 1,
    name: "Wireless Earbuds",
    orderId: "BRA-654321789",
    date: "01:00 PM Sunday 22, May 2024",
    image: WirelessEarbuds,
  },
  {
    id: 2,
    name: "Smart Home Device",
    orderId: "ARG-987321654",
    date: "04:30 PM Monday 29, June 2024",
    image: SmartHomeDevice,
  },
  {
    id: 3,
    name: "Fitness Tracker",
    orderId: "CHL-123789456",
    date: "07:15 AM Tuesday 6, July 2024",
    image: FitnessTracker,
  },
  {
    id: 4,
    name: "VR Headset",
    orderId: "COL-456123789",
    date: "12:00 PM Wednesday 13, August 2024",
    image: VRHeadset,
  },
  {
    id: 5,
    name: "Digital Camera",
    orderId: "MEX-789456123",
    date: "03:45 PM Thursday 20, September 2024",
    image: DigitalCamera,
  },
];