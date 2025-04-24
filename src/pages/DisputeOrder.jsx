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
import { useNavigate } from "react-router-dom";

const DisputeOrder = () => {
  const [state, setState] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setState(tab === 0 ? "Active" : tab === 1 ? "Closed" : []);
  }, [tab]);

  const navigate = useNavigate();
  // navigate('');

  return (
    <Box sx={{ margin: "0 auto", padding: 2 }}>
      {/* Tabs Section */}
      <Box
        sx={{
          border: "1px solid #3D4348",
          borderRadius: "10px",
          display: "flex",
          gap: "10px",
          padding: 2,
        }}
      >
        <Typography
          sx={{
            // color: tab === 0 && "#000",
            // background: tab === 0 && "#fff",
            color: tab === 0 ? "#000" : "#fff",
            background: tab === 0 ? "#fff" : "transparent",
            width: "50%",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: 1,
            cursor: "pointer",
          }}
          onClick={() => setTab(0)}
        >
          Active
        </Typography>
        <Box
          sx={{
            color: tab === 0 ? "#fff" : "#000",
            background: tab === 0 ? "#29292A": "#fff",
            width: "50%",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "10px",
            padding: 1,
            cursor: "pointer",
          }}
          onClick={() => setTab(1)}
        >
          Closed
        </Box>
      </Box>

      {/* Dispute Section */}
      <Box
        sx={{
          border: "1px solid #3D4348",
          borderRadius: "10px",
          padding: 2,
          marginTop: 3,
        }}
      >
        {/* Dispute Header */}
        <Box sx={{ paddingBottom: 1 }}>
          <Typography
            sx={{ color: "#EEE692", fontSize: "20px", fontWeight: "bold" }}
          >
            Order Disputes
          </Typography>
        </Box>

        {/* Dispute Details */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 1,
          }}
        >
          {/* Left Column: Labels */}
          <Box>
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: "16px",
                paddingTop: 0.5,
              }}
            >
              Dispute Status:
            </Typography>
            <Typography
              sx={{ color: "#fff", fontSize: "16px", paddingTop: 0.5 }}
            >
              Order ID:
            </Typography>
            <Typography
              sx={{ color: "#fff", fontSize: "16px", paddingTop: 0.5 }}
            >
              Reason of Dispute:
            </Typography>
          </Box>

          {/* Right Column: Values */}
          <Box>
            <Typography
              sx={{
                color: tab === 0 ? "#EEE692" : "red",
                fontSize: "16px",
                paddingTop: 0.5,
                textAlign: "end",
              }}
            >
              {tab === 0 ? "Active" : "Closed"}
            </Typography>
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: "16px",
                paddingTop: 0.5,
                textAlign: "end",
              }}
            >
              Alreem-1
            </Typography>
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: "16px",
                paddingTop: 0.5,
                textAlign: "end",
              }}
            >
              Not Recognized
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ background: "#3D4348", margin: "0px", height: "2px", mt: 3 }}
        />
        <Box>
          <Typography
            sx={{
              color: "#EEE692",
              fontSize: "20px",
              fontWeight: "bold",
              pt: 2.5,
            }}
          >
            Describe the Reasons
          </Typography>
          <Typography sx={{ color: "#fff", pt: 1, fontSize: "16px" }}>
            This Product Usually I am Not Use I Need to Order the New Product.
          </Typography>
        </Box>
      </Box>

      {/* Dispute Section */}
      <Box
        sx={{
          border: "1px solid #3D4348",
          borderRadius: "10px",
          padding: 2,
          marginTop: 3,
        }}
      >
        {/* Dispute Header */}
        <Box sx={{ paddingBottom: 1 }}>
          <Typography
            sx={{ color: "#EEE692", fontSize: "20px", fontWeight: "bold" }}
          >
            Order Disputes
          </Typography>
        </Box>

        {/* Dispute Details */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 1,
          }}
        >
          {/* Left Column: Labels */}
          <Box>
            <Typography
              sx={{ color: "#fff", fontSize: "16px", paddingTop: 0.5 }}
            >
              Dispute Status:
            </Typography>
            <Typography
              sx={{ color: "#fff", fontSize: "16px", paddingTop: 0.5 }}
            >
              Order ID:
            </Typography>
            <Typography
              sx={{ color: "#fff", fontSize: "16px", paddingTop: 0.5 }}
            >
              Reason of Dispute:
            </Typography>
          </Box>

          {/* Right Column: Values */}
          <Box>
            <Typography
              sx={{
                color: tab === 0 ? "#EEE692" : "red",
                fontSize: "16px",
                paddingTop: 0.5,
                textAlign: "end",
              }}
            >
              {tab === 0 ? "Active" : "Closed"}
            </Typography>
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: "16px",
                paddingTop: 0.5,
                textAlign: "end",
              }}
            >
              Alreem-1
            </Typography>
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: "16px",
                paddingTop: 0.5,
                textAlign: "end",
              }}
            >
              Not Recognized
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ background: "#3D4348", margin: "0px", height: "2px", mt: 3 }}
        />
        <Box>
          <Typography
            sx={{
              color: "#EEE692",
              fontSize: "20px",
              fontWeight: "bold",
              pt: 2.5,
            }}
          >
            Describe the Reasons
          </Typography>
          <Typography sx={{ color: "#fff", pt: 1, fontSize: "16px" }}>
            This Product Usually I am Not Use I Need to Order the New Product.
          </Typography>
        </Box>
      </Box>

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
    </Box>
  );
};

export default DisputeOrder;
