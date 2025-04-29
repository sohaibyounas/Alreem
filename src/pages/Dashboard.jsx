import { Box, Typography } from "@mui/material";
import React from "react";
import TotalOrder from "../assets/images/totalorder.png";
import TotalSales from "../assets/images/totalsales.png";
import Orderinque from '../assets/images/orderinque.png';
import Inventorybox from '../assets/images/inventorybox.png';
import style from '../assets/style';

const Dashboard = () => {
  return (
    <>
      {/* main box */}
      <Box sx={style.dashMain}>
        <Box
          sx={style.dashBox}
        >
          <Box sx={style.dashInnerBox1}>
            <Box>
              <img src={TotalOrder} alt="Total Order"
                style={style.dashInnerBox1Img} />
            </Box>
            <Box>
              <Typography
                sx={style.dashInnerBox1Text}
              >
                Total Order
              </Typography>
            </Box>
          </Box>
          <Box
            sx={style.dashTextBox}
          >
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
                This month amount of total sold Product
              </Typography>
            </Box>
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
                0.00 AED
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={style.dashSubBox}
        >
          <Box sx={style.dashInnerBox1}>
            <Box>
              <img src={TotalSales} alt="Total Order" style={style.dashInnerBox1Img} />
            </Box>
            <Box>
              <Typography
                sx={style.dashInnerBox1Text}
              >
                Total Sales
              </Typography>
            </Box>
          </Box>
          <Box
            sx={style.dashTextBox}
          >
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
                This month amount of total completed orders.
              </Typography>
            </Box>
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
                0
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={style.dashSubBox1Main}>
        <Box
          sx={style.dashSubBox}
        >
          <Box sx={style.dashInnerBox1}>
            <Box>
              <img src={Orderinque} alt="Total Order" style={style.dashInnerBox1Img} />
            </Box>
            <Box>
              <Typography
                sx={style.dashInnerBox1Text}
              >
                Order in Que
              </Typography>
            </Box>
          </Box>
          <Box
            sx={style.dashTextBox}
          >
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
                This month amount of total sold Product
              </Typography>
            </Box>
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
                0
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={style.dashSubBox}
        >
          <Box sx={style.dashInnerBox1}>
            <Box>
              <img src={Inventorybox} alt="Total Order" style={style.dashInnerBox1Img} />
            </Box>
            <Box>
              <Typography
                sx={style.dashInnerBox1Text}
              >
                Inventory
              </Typography>
            </Box>
          </Box>
          <Box
            sx={style.dashTextBox}
          >
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
                Number of Products remaining in the inventory section
              </Typography>
            </Box>
            <Box>
              <Typography sx={style.dashTextBoxDetails}>
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