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
import PowerBank from "../assets/images/Power-Bank.png";
import GoldenRing from "../assets/images/Golden-Ring.png";
import Divider from "@mui/material/Divider";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import style from "../assets/style";

const Detail = () => {
  return (
    <>
      <Box sx={style.mainDetailBox}>
        {/* Order Detail */}
        <Grid
          size={7}
          sx={style.mainGrid1}
        >
          {/* card 1 */}
          <Card sx={style.card}>
            <CardContent>
              <Typography
                sx={style.cardText}
              >
                Order Detail
              </Typography>
            </CardContent>
            <CardMedia>
              <img
                src={Shoe}
                alt="shoe"
                style={style.cardMedia}
              />
            </CardMedia>
            <Box sx={style.cardDetail}>
              <CardContent
                sx={style.cardInnerText}
              >
                <Typography sx={style.textDetail2}>Product Name</Typography>
                <Typography sx={style.textDetail2}>Price</Typography>
                <Typography sx={style.textDetail2}>Quantity</Typography>
                <Typography sx={style.textDetail2}>Size</Typography>
                <Typography sx={style.textDetail2}>Color</Typography>
              </CardContent>
              <CardContent
                sx={style.cardRightText}
              >
                <Typography sx={style.textDetail}>
                  Vitality vibeshoes
                </Typography>
                <Typography sx={style.textDetail2}>AED500</Typography>
                <Typography sx={style.textDetail2}>1</Typography>
                <Typography sx={style.textDetail2}>40</Typography>
                <Typography sx={style.textDetail2}>Pink</Typography>
              </CardContent>
            </Box>
          </Card>
          <Divider
            sx={style.divider}
          />

          {/* card 2 */}
          <Card sx={style.card1}>
            <CardMedia>
              <img
                src={PowerBank}
                alt="PowerBank"
                style={style.cardimg}
              />
            </CardMedia>
            <Box sx={style.cardDetail}>
              <CardContent
                sx={style.cardInnerText2}
              >
                <Typography sx={style.textDetail}>Product Name</Typography>
                <Typography sx={style.textDetail}>Price</Typography>
                <Typography sx={style.textDetail}>Quantity</Typography>
                <Typography sx={style.textDetail}>Size</Typography>
              </CardContent>
              <CardContent
                sx={style.card2inner}
              >
                <Typography sx={style.textDetail2}>Power Bank</Typography>
                <Typography sx={style.textDetail2}>AED350</Typography>
                <Typography sx={style.textDetail2}>1</Typography>
                <Typography sx={style.textDetail2}>40</Typography>
              </CardContent>
            </Box>
          </Card>
          <Divider
            sx={style.divider}
          />

          {/* card3 */}
          <Card sx={style.card3}>
            <CardMedia>
              <img
                src={GoldenRing}
                alt="GoldenRing"
                style={style.card3Img}
              />
            </CardMedia>
            <Box sx={style.cardDetail}>
              <CardContent
                sx={style.card3InnerText}
              >
                <Typography sx={style.textDetail2}>
                  Product Name
                </Typography>
                <Typography sx={style.textDetail2}>Price</Typography>
                <Typography sx={style.textDetail2}>Quantity</Typography>
                <Typography sx={style.textDetail2}>Size</Typography>
              </CardContent>
              <CardContent
                sx={style.card2inner}
              >
                <Typography sx={style.textDetail2}>Power Bank</Typography>
                <Typography sx={style.textDetail2}>AED350</Typography>
                <Typography sx={style.textDetail2}>1</Typography>
                <Typography sx={style.textDetail2}>40</Typography>
              </CardContent>
            </Box>
          </Card>
          <Divider
            sx={style.divider}
          />
        </Grid>

        {/* Order Info */}
        <Grid
          size={5}
          sx={style.grid2}
        >
          {/* Buyer info */}
          <Box>
            <Card
              sx={style.buyerCard}
            >
              <Typography
                sx={style.buyerCardText}
              >
                Order Info
              </Typography>
              {/*buyer details  */}
              <CardContent
                sx={style.buyerDetail}
              >
                <CardMedia sx={style.buyerMedia}>
                  <Icon sx={style.buyerIcon}>
                    <PersonRoundedIcon
                      sx={style.buyerIconDetail}
                    />
                  </Icon>
                  <Typography
                    sx={style.buyerText}
                  >
                    Buyer Details
                  </Typography>
                </CardMedia>
              </CardContent>

              {/* Buyer Text */}
              <Box sx={style.buyerBox}>
                <CardContent
                  sx={style.buyerTextCard}
                >
                  <Typography sx={style.leftText}>
                    Name
                  </Typography>
                  <Typography sx={style.leftText}>
                    Phone Number
                  </Typography>
                  <Typography sx={style.leftText}>
                    Email Address
                  </Typography>
                </CardContent>
                <CardContent
                  sx={style.rightText}
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
            <Card sx={style.card}>
              {/*payment details  */}
              <CardContent
                sx={style.buyerDetail}
              >
                <CardMedia sx={style.buyerMedia}>
                  <Icon sx={style.buyerIcon}>
                    <PaymentRoundedIcon
                      sx={style.buyerIconDetail}
                    />
                  </Icon>
                  <Typography
                    sx={style.buyerText}
                  >
                    Payment Method
                  </Typography>
                </CardMedia>
              </CardContent>

              <Box sx={style.buyerBox}>
                <CardContent
                  sx={style.buyerTextCard}
                >
                  <Typography sx={style.leftText}>
                    Total Amount
                  </Typography>
                  <Typography sx={style.leftText}>
                    Delivery Charges
                  </Typography>
                  <Typography sx={style.leftText}>
                    Order Placed on
                  </Typography>
                  <Typography sx={style.leftText}>Order Id</Typography>
                </CardContent>
                <CardContent
                  sx={style.rightText}
                >
                  <Typography sx={style.rightText}>
                    1024:00 AED
                  </Typography>
                  <Typography sx={style.rightText}>20.00 AED</Typography>
                  <Typography sx={style.rightText}>
                    2024-11-14,1447
                  </Typography>
                  <Typography sx={style.rightText}>ALREEM-1</Typography>
                </CardContent>
              </Box>
            </Card>

            {/* shipping info */}
            <Card
              sx={style.card}
            >
              {/*shipping details  */}
              <CardContent
                sx={style.buyerDetail}
              >
                <CardMedia sx={style.buyerMedia}>
                  <Icon sx={style.buyerIcon}>
                    <LocalShippingRoundedIcon
                      sx={style.buyerIconDetail}
                    />
                  </Icon>
                  <Typography
                    sx={style.buyerText}
                  >
                    Shipping Method
                  </Typography>
                </CardMedia>
              </CardContent>

              <Box
                sx={style.buyerBox}
              >
                <CardContent
                  sx={style.buyerTextCard}
                >
                  <Typography sx={style.leftText}>
                    Tracking Id
                  </Typography>
                  <Typography sx={style.leftText}>Address</Typography>
                  <Typography sx={style.leftText}>
                    alternative Address
                  </Typography>
                  <Typography sx={style.leftText}>Countary</Typography>
                  <Typography sx={style.leftText}>City</Typography>
                  <Typography sx={style.leftText}>
                    Postal Code
                  </Typography>
                </CardContent>
                <CardContent
                  sx={style.rightText}
                >
                  <Typography sx={style.rightText}>Alreem</Typography>
                  <Typography sx={style.rightText}>
                    96 church way bradbury
                  </Typography>
                  <Typography sx={style.rightText}>
                    96 church way bradbury
                  </Typography>
                  <Typography sx={style.rightText}>
                    United arab Emirates(UAE)
                  </Typography>
                  <Typography sx={style.rightText}>Abu Dhabi</Typography>
                  <Typography sx={style.rightText}>62100</Typography>
                </CardContent>
              </Box>
            </Card>

            {/* order placed details */}
            <Box
              sx={style.order}
            >
              <Card
                sx={style.orderCard}
              >
                <Box sx={style.orderCardBox}>
                  <CardMedia sx={style.orderCardMedia}>
                    <Box>
                      <CheckOutlinedIcon
                        sx={style.orderCardIcon}
                      />
                    </Box>
                    <Box>
                      <PersonRoundedIcon
                        sx={style.orderIcon}
                      />
                    </Box>
                  </CardMedia>
                  <Box sx={style.orderCardText}>
                    <Typography>Order Place by Buyer</Typography>
                    <Typography>14 November</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={style.orderText}>2:00 PM</Typography>
                </Box>
              </Card>

              {/* Accept Order Section */}
              <Box>
                <Box>
                  <Icon sx={{ color: "#EEE692" }}>
                    <MoreVertIcon />
                  </Icon>
                </Box>
              </Box>
            </Box>

            {/* cancel/accept order button */}
            <Box sx={style.orderBox}>
              <Grid>
                <Button
                  variant="outlined"
                  sx={style.orderButton}
                >
                  Cancel Order
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="outlined"
                  sx={style.acceptButton}
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
