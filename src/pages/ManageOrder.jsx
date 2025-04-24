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
import PowerBank from "../assets/images/Power Bank.png";
import WirlessHeadphone from "../assets/images/Wirless headphone.jfif";
import Laptop from "../assets/images/laptop.png";
import SmartWatch from "../assets/images/Smart watch.jfif";
import BluetoohSpeaker from "../assets/images/speaker.jfif";
import Tablet from "../assets/images/tablet.png";
import SmartTv from "../assets/images/smart tv.png";
import GamingConsole from "../assets/images/gaming console.png";
import WirelessEarbuds from "../assets/images/Wireless buds.png";
import SmartHomeDevice from "../assets/images/smart home device.png";
import FitnessTracker from "../assets/images/Fitness tracker.jpg";
import VRHeadset from "../assets/images/vr headset.png";
import DigitalCamera from "../assets/images/digital camera.jfif";
import SmartPhone from "../assets/images/phone.png";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

const ManageOrder = () => {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    // console.log(tab);
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
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "16px",
            lineHeight: "18px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#fff",
            border: "1px solid #3D4348",
            borderRadius: "10px",
            padding: "7px",
            gap: "10px",
          }}
        >
          <ListItem
            sx={{
              color: tab === 0 && "#000",
              background: tab === 0 && "#fff",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              justifyContent: "center",
            }}
            onClick={() => setTab(0)}
          >
            Pending
          </ListItem>
          <ListItem
            sx={{
              color: tab === 1 && "#000",
              background: tab === 1 && "#fff",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              justifyContent: "center",
            }}
            onClick={() => setTab(1)}
          >
            Completed
          </ListItem>
          <ListItem
            sx={{
              color: tab === 2 && "#000",
              background: tab === 2 && "#fff",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              justifyContent: "center",
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
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #3D4348",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            {/* item detail grid */}
            <Grid
              size={10}
              sx={{ display: "flex", padding: "20px", gap: "10px" }}
            >
              {/* image */}
              <Grid sx={{ borderRadius: "10px" }}>
                <img src={item.image} alt="Shoe" style={{ width: "100px" }} />
                <Typography
                  sx={{ color: "#fff", lineHeight: "21px", fontSize: "14px" }}
                >
                  only 1 items
                </Typography>
              </Grid>
              {/* text details */}
              <Grid
                sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    lineHeight: "21px",
                    fontSize: "20px",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{ color: "#fff", lineHeight: "21px", fontSize: "14px" }}
                >
                  order on.{" "}
                  <span style={{ color: "#EEE692" }}>UAE-095498745</span>
                </Typography>
                <Typography
                  sx={{ color: "#fff", lineHeight: "21px", fontSize: "14px" }}
                >
                  Delivery Date:{" "}
                  <span style={{ color: "#EEE692" }}>
                    02:09 AM Thursday 21, July 2024
                  </span>
                </Typography>
              </Grid>
            </Grid>
            {/* button grid */}
            <Grid
              size={2}
              sx={{
                display: "flex",
                padding: "20px",
                justifyContent: "end",
                width: "150px",
                height: "75px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #bba051, #ece490, #bba052)",
                  color: "#000",
                  border: "none",
                  borderRadius: "10px",
                  padding: "6px 30px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                onClick={handleClick}
              >
                Details
              </Button>
            </Grid>
          </Grid>
        ))}

        {/* Pagination Grid */}
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
