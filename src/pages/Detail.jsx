import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Shoe from "../assets/images/shoes.png";
import PowerBank from "../assets/images/Power Bank.png";
import GoldenRing from "../assets/images/Golden Ring.png";
import Divider from "@mui/material/Divider";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const Detail = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "25px", width: "100%" }}>
        {/* Order Detail */}
        <Grid
          size={7}
          sx={{ border: "1px solid #3D4348", borderRadius: "10px" }}
        >
          {/* card */}
          <Card sx={{ background: "none", padding: "10px", boxShadow: "none" }}>
            <CardContent>
              <Typography
                sx={{ color: "#EEE692", fontSize: "20px", fontWeight: "bold" }}
              >
                Order Detail
              </Typography>
            </CardContent>
            <CardMedia>
              <img
                src={Shoe}
                alt="shoe"
                style={{ width: "65px", paddingLeft: "10px" }}
              />
            </CardMedia>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardContent
                sx={{ textAlign: "start", color: "#909090", fontSize: "14px" }}
              >
                <Typography sx={{ lineHeight: "30px" }}>
                  Product Name
                </Typography>
                <Typography sx={{ lineHeight: "30px" }}>Price</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Quantity</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Size</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Color</Typography>
              </CardContent>
              <CardContent
                sx={{ textAlign: "end", color: "#fff", fontSize: "14px" }}
              >
                <Typography sx={{ lineHeight: "30px" }}>
                  Vitality vibeshoes
                </Typography>
                <Typography sx={{ lineHeight: "30px" }}>AED500</Typography>
                <Typography sx={{ lineHeight: "30px" }}>1</Typography>
                <Typography sx={{ lineHeight: "30px" }}>40</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Pink</Typography>
              </CardContent>
            </Box>
          </Card>
          <Divider
            sx={{ background: "#3D4348", margin: "0px", height: "3px" }}
          />
          <Card sx={{ background: "none", p: 2, boxShadow: "none" }}>
            <CardMedia>
              <img
                src={PowerBank}
                alt="PowerBank"
                style={{ width: "65px", paddingLeft: "10px" }}
              />
            </CardMedia>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardContent
                sx={{ textAlign: "start", color: "#909090", fontSize: "14px" }}
              >
                <Typography sx={{ lineHeight: "30px" }}>
                  Product Name
                </Typography>
                <Typography sx={{ lineHeight: "30px" }}>Price</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Quantity</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Size</Typography>
              </CardContent>
              <CardContent
                sx={{ textAlign: "end", color: "#fff", fontSize: "14px" }}
              >
                <Typography sx={{ lineHeight: "30px" }}>Power Bank</Typography>
                <Typography sx={{ lineHeight: "30px" }}>AED350</Typography>
                <Typography sx={{ lineHeight: "30px" }}>1</Typography>
                <Typography sx={{ lineHeight: "30px" }}>40</Typography>
              </CardContent>
            </Box>
          </Card>
          <Divider
            sx={{ background: "#3D4348", margin: "0px", height: "3px" }}
          />
          <Card sx={{ background: "none", p: 2, boxShadow: "none" }}>
            <CardMedia>
              <img
                src={GoldenRing}
                alt="GoldenRing"
                style={{ width: "65px", paddingLeft: "10px" }}
              />
            </CardMedia>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardContent
                sx={{ textAlign: "start", color: "#909090", fontSize: "14px" }}
              >
                <Typography sx={{ lineHeight: "30px" }}>
                  Product Name
                </Typography>
                <Typography sx={{ lineHeight: "30px" }}>Price</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Quantity</Typography>
                <Typography sx={{ lineHeight: "30px" }}>Size</Typography>
              </CardContent>
              <CardContent
                sx={{ textAlign: "end", color: "#fff", fontSize: "14px" }}
              >
                <Typography sx={{ lineHeight: "30px" }}>Power Bank</Typography>
                <Typography sx={{ lineHeight: "30px" }}>AED350</Typography>
                <Typography sx={{ lineHeight: "30px" }}>1</Typography>
                <Typography sx={{ lineHeight: "30px" }}>40</Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>

        {/* Order Info */}
        <Grid
          size={5}
          sx={{ border: "1px solid #3D4348", borderRadius: "10px" }}
        >
          {/* Buyer info */}
          <Box>
            <Card
              sx={{
                background: "none",
                boxShadow: "none",
                paddingBottom: "0px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#EEE692",
                  padding: "10px 0px 0px 15px",
                }}
              >
                Order Info
              </Typography>
              {/*buyer details  */}
              <CardContent
                sx={{ padding: "10px 0px 0px 10px", alignItems: "center" }}
              >
                <CardMedia sx={{ display: "flex", gap: "10px" }}>
                  <Icon sx={{ width: "2rem", height: "2rem" }}>
                    <PersonRoundedIcon
                      sx={{
                        color: "#EEE692",
                        fontSize: "20px",
                        backgroundColor: "#5E5C43",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </Icon>
                  <Typography
                    sx={{ fontSize: "20px", color: "#fff", fontWeight: "bold" }}
                  >
                    Buyer Details
                  </Typography>
                </CardMedia>
              </CardContent>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardContent
                  sx={{
                    textAlign: "start",
                    color: "#909090",
                    fontSize: "14px",
                    padding: "10px 0px 0px 10px",
                  }}
                >
                  <Typography sx={{ lineHeight: "35px" }}> Name </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    Phone Number
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    Email Address
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    textAlign: "end",
                    color: "#fff",
                    fontSize: "14px",
                    padding: "10px 0px 0px 10px",
                    paddingBottom: "0 !important",
                  }}
                >
                  <Typography sx={{ lineHeight: "35px" }}>
                    Michael Jorden
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    +9914876498562
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    micheljordan@gmail.com
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            {/* Payment info */}
            <Card sx={{ background: "none", boxShadow: "none" }}>
              {/*payment details  */}
              <CardContent
                sx={{ padding: "10px 0px 0px 10px", alignItems: "center" }}
              >
                <CardMedia sx={{ display: "flex", gap: "10px" }}>
                  <Icon sx={{ width: "2rem", height: "2rem" }}>
                    <PaymentRoundedIcon
                      sx={{
                        color: "#EEE692",
                        fontSize: "20px",
                        backgroundColor: "#5E5C43",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </Icon>
                  <Typography
                    sx={{ fontSize: "20px", color: "#fff", fontWeight: "bold" }}
                  >
                    Payment Method
                  </Typography>
                </CardMedia>
              </CardContent>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CardContent
                  sx={{
                    textAlign: "start",
                    color: "#909090",
                    fontSize: "14px",
                    padding: "10px 0px 0px 10px",
                    paddingBottom: "0 !important",
                  }}
                >
                  <Typography sx={{ lineHeight: "35px" }}>
                    Total Amount
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    Delivery Charges
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    Order Placed on
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>Order Id</Typography>
                </CardContent>
                <CardContent
                  sx={{
                    textAlign: "end",
                    color: "#fff",
                    fontSize: "14px",
                    padding: "10px 0px 0px 10px",
                    paddingBottom: "0 !important",
                  }}
                >
                  <Typography sx={{ lineHeight: "35px" }}>
                    1024:00 AED
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>20.00 AED</Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    2024-11-14,1447
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>ALREEM-1</Typography>
                </CardContent>
              </Box>
            </Card>
            {/* shipping info */}
            <Card
              sx={{
                background: "none",
                boxShadow: "none",
              }}
            >
              {/*shipping details  */}
              <CardContent
                sx={{ padding: "10px 0px 0px 10px", alignItems: "center" }}
              >
                <CardMedia sx={{ display: "flex", gap: "10px" }}>
                  <Icon sx={{ width: "2rem", height: "2rem" }}>
                    <LocalShippingRoundedIcon
                      sx={{
                        color: "#EEE692",
                        fontSize: "20px",
                        backgroundColor: "#5E5C43",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </Icon>
                  <Typography
                    sx={{ fontSize: "20px", color: "#fff", fontWeight: "bold" }}
                  >
                    Shipping Method
                  </Typography>
                </CardMedia>
              </CardContent>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "start",
                    color: "#909090",
                    fontSize: "14px",
                    padding: "10px 0px 0px 10px",
                    paddingBottom: "0 !important",
                  }}
                >
                  <Typography sx={{ lineHeight: "35px" }}>
                    {" "}
                    Tracking Id{" "}
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>Address</Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    alternative Address
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>Countary</Typography>
                  <Typography sx={{ lineHeight: "35px" }}>City</Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    Postal Code
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    textAlign: "end",
                    color: "#fff",
                    fontSize: "14px",
                    padding: "10px 0px 0px 10px",
                  }}
                >
                  <Typography sx={{ lineHeight: "35px" }}>Alreem</Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    96 church way bradbury
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    96 church way bradbury
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>
                    United arab Emirates(UAE)
                  </Typography>
                  <Typography sx={{ lineHeight: "35px" }}>Abu Dhabi</Typography>
                  <Typography sx={{ lineHeight: "35px" }}>62100</Typography>
                </CardContent>
              </Box>
            </Card>
            {/* order placed details */}
            <Box
              sx={{
                border: "1px solid #3D4348",
                borderRadius: "10px",
                p: 1,
                m: 1.5,
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  gap: "10px",
                  background: "none",
                  boxShadow: "none",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <CardMedia sx={{ display: "flex", gap: "8px" }}>
                    <Box>
                      <CheckOutlinedIcon
                        sx={{
                          color: "#000",
                          fontSize: "18px",
                          backgroundColor: "#EEE692",
                          borderRadius: "50%",
                          padding: "5px",
                          border: "2px solid #73704e",
                        }}
                      />
                    </Box>
                    <Box>
                      <PersonRoundedIcon
                        sx={{
                          color: "#EEE692",
                          fontSize: "30px",
                          backgroundColor: "#5E5C43",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                  </CardMedia>

                  <Box sx={{ color: "#fff" }}>
                    <Typography>Order Place by Buyer</Typography>
                    <Typography>14 November</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>2:00 PM</Typography>
                </Box>
              </Card>
            </Box>
            {/* cancel/accept order button */}
            <Box sx={{ p: 2, display: "flex", gap: "10px" }}>
              <Grid>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #3D4348",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "5px 38px",
                  }}
                >
                  Cancel Order
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid #3D4348",
                    backgroundColor: "#E1D481",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "14px",
                    lineHeight: "25px",
                    padding: "5px 38px",
                  }}
                >
                  Accept Order
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Detail;
