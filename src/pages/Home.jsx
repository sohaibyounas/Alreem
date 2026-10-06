import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import Shoping from "../assets/images/shoping.jfif";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useNavigate } from "react-router-dom";

const infoCards = [
  {
    icon: LocationOnRoundedIcon,
    title: "Address",
    value: "Ajman, United Arab Emirates",
  },
  {
    icon: CategoryRoundedIcon,
    title: "Category",
    value: "Indoor & Outdoor Audio",
  },
  {
    icon: LanguageRoundedIcon,
    title: "Website",
    value: "www.gradolabmail.com",
    isLink: true,
  },
  {
    icon: PhoneRoundedIcon,
    title: "Contact Number",
    value: "+971 3123 8797123",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", py: 1 }}>
      {/* Hero Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 2, sm: 3 },
            p: { xs: 2, sm: 3 },
            backgroundColor: "#1E1E1E",
            border: "1px solid #333333",
            borderRadius: "16px",
            mb: { xs: 2.5, sm: 3 },
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          }}
        >
          {/* Shop Image */}
          <Box
            sx={{
              width: { xs: "80px", sm: "110px" },
              height: { xs: "80px", sm: "110px" },
              minWidth: { xs: "80px", sm: "110px" },
              borderRadius: "14px",
              overflow: "hidden",
              border: "2px solid #EEE692",
              boxShadow: "0 0 16px rgba(222, 209, 132, 0.2)",
            }}
          >
            <img
              src={Shoping}
              alt="Grado Labs Storefront"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Shop Details */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1.5,
                mb: 0.8,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#EEE692",
                  fontWeight: 700,
                  fontSize: { xs: "22px", sm: "28px" },
                  fontFamily: '"Poppins", sans-serif',
                  lineHeight: 1.2,
                }}
              >
                Grado Labs
              </Typography>
              <Chip
                label="Verified Merchant"
                size="small"
                sx={{
                  backgroundColor: "rgba(222, 209, 132, 0.15)",
                  color: "#EEE692",
                  fontWeight: 600,
                  fontSize: "11px",
                  border: "1px solid rgba(222, 209, 132, 0.3)",
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#CCCCCC",
                fontSize: { xs: "13.5px", sm: "15px" },
                lineHeight: 1.5,
                maxWidth: "750px",
              }}
            >
              High-end headphones and bespoke acoustic audio equipment, offering audiophile sound engineering and handcrafted design.
            </Typography>
          </Box>

          {/* Edit Shop Quick Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outlined"
              onClick={() => navigate("/editshop")}
              startIcon={<EditRoundedIcon />}
              sx={{
                borderColor: "#DED184",
                color: "#EEE692",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "13px",
                px: 2,
                py: 0.8,
                "&:hover": {
                  borderColor: "#EEE692",
                  backgroundColor: "rgba(222, 209, 132, 0.08)",
                },
              }}
            >
              Edit Shop
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      {/* Info Cards Grid (Fully Responsive) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {infoCards.map((item, index) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -4,
                borderColor: "rgba(222, 209, 132, 0.4)",
              }}
              style={{
                backgroundColor: "#1E1E1E",
                borderRadius: "14px",
                padding: "18px 20px",
                border: "1px solid #333333",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    backgroundColor: "rgba(222, 209, 132, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#EEE692",
                  }}
                >
                  <IconComp fontSize="small" />
                </Box>
                <Typography
                  sx={{
                    color: "#EEE692",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: 400,
                  wordBreak: "break-word",
                  lineHeight: 1.4,
                  pl: 0.5,
                }}
              >
                {item.value}
              </Typography>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Shop Description Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
      >
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            backgroundColor: "#1E1E1E",
            border: "1px solid #333333",
            borderRadius: "16px",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <StorefrontRoundedIcon sx={{ color: "#EEE692" }} />
            <Typography
              sx={{
                color: "#EEE692",
                fontSize: { xs: "16px", sm: "18px" },
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Shop Description
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#DDDDDD",
              fontSize: { xs: "13.5px", sm: "15px" },
              lineHeight: 1.7,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            At Grado Labs, we believe sound and style is an immersive journey meant to be shared. Join our vibrant community of discerning audiophiles and music aficionados, where craftsmanship meets innovation and audio inspiration knows no bounds. Each piece in our collection is precision-tuned to elevate your everyday listening experience.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home;
