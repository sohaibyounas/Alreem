import {
  Box,
  Divider,
  Grid,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import style from '../assets/style';

const DisputeOrder = () => {
  const [state, setState] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setState(tab === 0 ? "Active" : tab === 1 ? "Closed" : []);
  }, [tab]);

  return (
    <Box sx={style.pageBox}>
      {/* Tabs Section */}
      <Box
        sx={style.disputeTabs}
      >
        <Typography
          sx={[
            style.disputeTextTabs,
            tab === 0 && style.disputeActiveTab
          ]}
          onClick={() => setTab(0)}
        >
          Active
        </Typography>
        <Box
          sx={[
            style.disputeTextTabs,
            tab === 1 && style.disputeActiveTab
          ]}
          onClick={() => setTab(1)}
        >
          Closed
        </Box>
      </Box>

      {/* Dispute Section */}
      <Link to="/Userdetail" style={style.link}>
        <Box
          sx={style.linkText}
        >
          {/* Dispute Header */}
          <Box sx={style.disputeHeader}>
            <Typography
              sx={style.disputeHeaderText}
            >
              Order Disputes
            </Typography>
          </Box>

          {/* Dispute Details */}
          <Box
            sx={style.disputeDetails}
          >
            {/* Left Column: Labels */}
            <Box>
              <Typography
                sx={style.disputeLeftText}
              >
                Dispute Status:
              </Typography>
              <Typography
                sx={style.disputeLeftText}
              >
                Order ID:
              </Typography>
              <Typography
                sx={style.disputeLeftText}
              >
                Reason of Dispute:
              </Typography>
            </Box>

            {/* Right Column: Values */}
            <Box>
              <Typography
                sx={[
                  style.disputeRightText,
                  tab === 0 && style.disputeRightTextActive
                ]}
              >
                {tab === 0 ? "Active" : "Closed"}
              </Typography>
              <Typography
                sx={style.disputeRight}
              >
                Alreem-1
              </Typography>
              <Typography
                sx={style.disputeRight}
              >
                Not Recognized
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={style.disputeDivider}
          />
          <Box>
            <Typography
              sx={style.disputeInnerBox}
            >
              Describe the Reasons
            </Typography>
            <Typography sx={style.disputeInnerText}>
              This Product Usually I am Not Use I Need to Order the New Product.
            </Typography>
          </Box>
        </Box>
      </Link>

      {/* Dispute Section */}
      <Link to="/Userdetail" style={style.link}>
        <Box
          sx={style.linkText}
        >
          {/* Dispute Header */}
          <Box sx={style.disputeHeader}>
            <Typography
              sx={style.disputeHeaderText}
            >
              Order Disputes
            </Typography>
          </Box>

          {/* Dispute Details */}
          <Box
            sx={style.disputeDetails}
          >
            {/* Left Column: Labels */}
            <Box>
              <Typography
                sx={style.disputeLeftText}
              >
                Dispute Status:
              </Typography>
              <Typography
                sx={style.disputeLeftText}
              >
                Order ID:
              </Typography>
              <Typography
                sx={style.disputeLeftText}
              >
                Reason of Dispute:
              </Typography>
            </Box>

            {/* Right Column: Values */}
            <Box>
              <Typography
                sx={[
                  style.disputeRightText,
                  tab === 0 && style.disputeRightTextActive
                ]}
              >
                {tab === 0 ? "Active" : "Closed"}
              </Typography>
              <Typography
                sx={style.disputeRight}
              >
                Alreem-1
              </Typography>
              <Typography
                sx={style.disputeRight}
              >
                Not Recognized
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={style.disputeDivider}
          />
          <Box>
            <Typography
              sx={style.disputeInnerBox}
            >
              Describe the Reasons
            </Typography>
            <Typography sx={style.disputeInnerText}>
              This Product Usually I am Not Use I Need to Order the New Product.
            </Typography>
          </Box>
        </Box>
      </Link>

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
    </Box>
  );
};

export default DisputeOrder;
