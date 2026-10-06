import {
  Box,
  Button,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Shoe from "../assets/images/shoes.png";
import PowerBank from "../assets/images/Power-Bank.png";
import GoldenRing from "../assets/images/Golden-Ring.png";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Vitality vibeshoes",
    image: Shoe,
    price: "AED 500",
    qty: "1",
    size: "40",
    color: "Pink / Rose",
  },
  {
    id: 2,
    name: "Power Bank 20,000mAh",
    image: PowerBank,
    price: "AED 350",
    qty: "1",
    size: "Compact",
    color: "Matte Black",
  },
  {
    id: 3,
    name: "Golden Ring 18K Elegance",
    image: GoldenRing,
    price: "AED 350",
    qty: "1",
    size: "7 (US)",
    color: "Yellow Gold",
  },
];

const Detail = () => {
  const [orderStatus, setOrderStatus] = useState("Pending Review");

  return (
    <Box sx={{ width: "100%", py: 1 }}>
      {/* Page Title */}
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#EEE692",
              fontWeight: 700,
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Order Details: ALREEM-1
          </Typography>
          <Typography sx={{ color: "#9E9E9E", fontSize: "13.5px", mt: 0.5 }}>
            Placed on 14 Nov 2024 • Total: 1,044.00 AED
          </Typography>
        </Box>

        <Chip
          label={orderStatus}
          sx={{
            backgroundColor: "rgba(222, 209, 132, 0.15)",
            color: "#EEE692",
            fontWeight: 700,
            fontSize: "13px",
            border: "1px solid rgba(222, 209, 132, 0.3)",
            px: 1,
            py: 2,
          }}
        />
      </Box>

      {/* Responsive 2-Column Split */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2.5, md: 3 },
          width: "100%",
        }}
      >
        {/* Left Column: Ordered Items List */}
        <Box
          sx={{
            flex: { xs: "1", lg: "1.4" },
            backgroundColor: "#1E1E1E",
            border: "1px solid #333333",
            borderRadius: "16px",
            p: { xs: 2, sm: 2.5 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, pb: 1, borderBottom: "1px solid #2B2B2B" }}>
            <ShoppingBagRoundedIcon sx={{ color: "#EEE692" }} />
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: { xs: "17px", sm: "19px" },
                fontWeight: 700,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Purchased Items ({products.length})
            </Typography>
          </Box>

          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#171717",
                border: "1px solid #2D2D2D",
                borderRadius: "12px",
                padding: "16px",
                gap: "12px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#121212",
                    border: "1px solid #333",
                    p: 0.5,
                    boxSizing: "border-box",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    noWrap
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: 600,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: "#EEE692", fontSize: "15px", fontWeight: 700, mt: 0.3 }}>
                    {item.price}
                  </Typography>
                </Box>
              </Box>

              {/* Specs Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 1,
                  backgroundColor: "#202020",
                  p: 1.2,
                  borderRadius: "8px",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#888", fontSize: "11.5px" }}>Quantity</Typography>
                  <Typography sx={{ color: "#FFF", fontSize: "13.5px", fontWeight: 600 }}>
                    {item.qty}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#888", fontSize: "11.5px" }}>Size</Typography>
                  <Typography sx={{ color: "#FFF", fontSize: "13.5px", fontWeight: 600 }}>
                    {item.size}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#888", fontSize: "11.5px" }}>Color / Variant</Typography>
                  <Typography sx={{ color: "#FFF", fontSize: "13.5px", fontWeight: 600 }}>
                    {item.color}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Right Column: Customer & Shipping & Payment Info */}
        <Box
          sx={{
            flex: { xs: "1", lg: "1" },
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          {/* Buyer Details */}
          <Box
            sx={{
              backgroundColor: "#1E1E1E",
              border: "1px solid #333333",
              borderRadius: "16px",
              p: { xs: 2, sm: 2.5 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.5 }}>
              <PersonRoundedIcon sx={{ color: "#EEE692" }} />
              <Typography sx={{ color: "#EEE692", fontSize: "17px", fontWeight: 700 }}>
                Buyer Details
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "13.5px" }}>Customer Name:</Typography>
                <Typography sx={{ color: "#FFF", fontSize: "13.5px", fontWeight: 500 }}>
                  Michael Jordan
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "13.5px" }}>Phone Number:</Typography>
                <Typography sx={{ color: "#FFF", fontSize: "13.5px", fontWeight: 500 }}>
                  +971 4 876 4985
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "13.5px" }}>Email Address:</Typography>
                <Typography sx={{ color: "#EEE692", fontSize: "13.5px", fontWeight: 500 }}>
                  michaeljordan@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Payment Info */}
          <Box
            sx={{
              backgroundColor: "#1E1E1E",
              border: "1px solid #333333",
              borderRadius: "16px",
              p: { xs: 2, sm: 2.5 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.5 }}>
              <PaymentRoundedIcon sx={{ color: "#EEE692" }} />
              <Typography sx={{ color: "#EEE692", fontSize: "17px", fontWeight: 700 }}>
                Payment & Billing
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "13.5px" }}>Item Total:</Typography>
                <Typography sx={{ color: "#FFF", fontSize: "13.5px", fontWeight: 500 }}>
                  1,024.00 AED
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#8E8E8E", fontSize: "13.5px" }}>Delivery Charges:</Typography>
                <Typography sx={{ color: "#FFF", fontSize: "13.5px", fontWeight: 500 }}>
                  20.00 AED
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "#2D2D2D" }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700 }}>
                  Total Paid:
                </Typography>
                <Typography sx={{ color: "#EEE692", fontSize: "16px", fontWeight: 700 }}>
                  1,044.00 AED
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Shipping Address */}
          <Box
            sx={{
              backgroundColor: "#1E1E1E",
              border: "1px solid #333333",
              borderRadius: "16px",
              p: { xs: 2, sm: 2.5 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.5 }}>
              <LocalShippingRoundedIcon sx={{ color: "#EEE692" }} />
              <Typography sx={{ color: "#EEE692", fontSize: "17px", fontWeight: 700 }}>
                Shipping Address
              </Typography>
            </Box>

            <Typography sx={{ color: "#DDD", fontSize: "14px", lineHeight: 1.6 }}>
              96 Church Way, Bradbury, Sector 4<br />
              Abu Dhabi, United Arab Emirates (UAE)<br />
              Postal Code: 62100
            </Typography>
          </Box>

          {/* Order Actions */}
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ flex: 1 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setOrderStatus("Cancelled")}
                sx={{
                  py: 1.2,
                  borderColor: "#FF5252",
                  color: "#FF5252",
                  fontWeight: 600,
                  fontSize: "14px",
                  borderRadius: "10px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(255, 82, 82, 0.1)",
                    borderColor: "#FF5252",
                  },
                }}
              >
                Cancel Order
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ flex: 1 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setOrderStatus("Accepted & Processing")}
                sx={{
                  py: 1.2,
                  backgroundColor: "#DED184",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "14px",
                  borderRadius: "10px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#EEE692",
                  },
                }}
              >
                Accept Order
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
