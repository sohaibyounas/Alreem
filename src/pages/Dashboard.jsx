import { Box, Typography } from "@mui/material";
import React from "react";
import TotalOrder from "../assets/images/totalorder.png";
import TotalSales from "../assets/images/totalsales.png";
import Orderinque from '../assets/images/orderinque.png';
import Inventorybox from '../assets/images/inventorybox.png';

const Dashboard = () => {
  return (
    <>
      {/* main box */}
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Box
          sx={{
            border: "1px solid #3D4348",
            borderRadius: "20px",
            width: "50%",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", padding: "20px" }}>
            <Box>
              <img src={TotalOrder} alt="Total Order" style={{ width: "80px" }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: "34px",
                  paddingTop: "20px",
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                Total Order
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              padding: "20px",
              flexDirection: "column",
              paddingLeft: "20px"
            }}
          >
            <Box>
              <Typography sx={{ color: "#fff", lineHeight: "0px" }}>
                This month amount of total sold Product
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", lineHeight: "40px" }}>
                0.00 AED
              </Typography>
            </Box>
          </Box>
        </Box>       
        <Box
        sx={{
          border: "1px solid #3D4348",
          borderRadius: "20px",
          width: "50%",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", padding: "20px" }}>
          <Box>
            <img src={TotalSales} alt="Total Order" style={{ width: "80px" }} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                lineHeight: "34px",
                paddingTop: "20px",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              Total Sales
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            padding: "20px",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography sx={{ color: "#fff", lineHeight: "0px" }}>
              This month amount of total completed orders.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#fff", lineHeight: "40px" }}>
              0
            </Typography>
          </Box>
        </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "20px", marginTop: "15px" }}>
        <Box
          sx={{
            border: "1px solid #3D4348",
            borderRadius: "20px",
            width: "50%",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", padding: "20px" }}>
            <Box>
              <img src={Orderinque} alt="Total Order" style={{ width: "80px" }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: "34px",
                  paddingTop: "20px",
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                Order in Que
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              padding: "20px",
              flexDirection: "column",
              paddingLeft: "20px"
            }}
          >
            <Box>
              <Typography sx={{ color: "#fff", lineHeight: "0px" }}>
                This month amount of total sold Product
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff", lineHeight: "40px" }}>
                0
              </Typography>
            </Box>
          </Box>
        </Box>       
        <Box
        sx={{
          border: "1px solid #3D4348",
          borderRadius: "20px",
          width: "50%",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", padding: "20px" }}>
          <Box>
            <img src={Inventorybox} alt="Total Order" style={{ width: "80px" }} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                lineHeight: "34px",
                paddingTop: "20px",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              Inventory
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            padding: "20px",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography sx={{ color: "#fff", lineHeight: "0px" }}>
              Number of Products remaining in the inventory section
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#fff", lineHeight: "40px" }}>
              0
            </Typography>
          </Box>
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
