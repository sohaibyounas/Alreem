import React from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { motion } from "framer-motion";

const Userdetail = () => {
  return (
    <Box sx={{ width: "100%", py: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Box
          sx={{
            backgroundColor: "#1E1E1E",
            border: "1px solid #333333",
            borderRadius: "16px",
            p: { xs: 2, sm: 3 },
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <PersonRoundedIcon sx={{ color: "#EEE692" }} />
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: { xs: "18px", sm: "22px" },
                fontWeight: 700,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              User & Claim Details
            </Typography>
          </Box>

          {/* Details Table / Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              backgroundColor: "#161616",
              p: 2,
              borderRadius: "12px",
              border: "1px solid #292929",
              mb: 2.5,
            }}
          >
            <Box>
              <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>Shop Name:</Typography>
              <Typography sx={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 600 }}>
                Burhan Judai Store
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>Order ID:</Typography>
              <Typography sx={{ color: "#EEE692", fontSize: "15px", fontWeight: 600 }}>
                ALREEM-1
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>Customer Contact:</Typography>
              <Typography sx={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 500 }}>
                +971 50 982 3411
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "#8E8E8E", fontSize: "12.5px" }}>Dispute Status:</Typography>
              <Box sx={{ mt: 0.5 }}>
                <Chip
                  label="Active Claim"
                  size="small"
                  sx={{
                    backgroundColor: "rgba(244, 67, 54, 0.15)",
                    color: "#FF5252",
                    fontWeight: 700,
                    fontSize: "11px",
                    border: "1px solid rgba(244, 67, 54, 0.3)",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "#2D2D2D", mb: 2 }} />

          {/* Reason Section */}
          <Box>
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: "15px",
                fontWeight: 600,
                mb: 0.8,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Description of Claim
            </Typography>
            <Typography
              sx={{
                color: "#CCCCCC",
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "#161616",
                p: 2,
                borderRadius: "10px",
                border: "1px solid #292929",
              }}
            >
              This product usually I am not using, I need to order the new updated version. The box was opened to inspect contents only.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Userdetail;
