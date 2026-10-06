import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Shopping from "../assets/images/shoping.jfif";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";

const categories = [
  "Indoor Outdoor Audio",
  "Entertainment & Media",
  "Sports & Fitness",
  "Handcrafted & Bespoke",
  "Children & Family",
];

const cities = ["Ajman", "Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "Fujairah"];

const EditShop = () => {
  const [shopName, setShopName] = useState("Grado Labs");
  const [tagline, setTagline] = useState(
    "High-end headphones or audio equipments, offering unique audiophile fidelity."
  );
  const [category, setCategory] = useState("Indoor Outdoor Audio");
  const [website, setWebsite] = useState("www.gradolabmail.com");
  const [phone, setPhone] = useState("+971501234567");
  const [city, setCity] = useState("Ajman");
  const [description, setDescription] = useState(
    "Grado Labs we believe sound is a journey meant to be shared. Join our vibrant community of fashion and audio aficionados, where inspiration knows no bounds."
  );
  const [isChecked, setIsChecked] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <Box sx={{ width: "100%", py: 1 }}>
      {/* Page Title */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#EEE692",
            fontWeight: 700,
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Edit Shop Profile
        </Typography>
        <Typography sx={{ color: "#9E9E9E", fontSize: "13.5px", mt: 0.5 }}>
          Update store information, branding visuals, and contact preferences
        </Typography>
      </Box>

      {/* Main Container Card */}
      <Box
        sx={{
          backgroundColor: "#1E1E1E",
          border: "1px solid #333333",
          borderRadius: "16px",
          p: { xs: 2, sm: 3, md: 4 },
          boxSizing: "border-box",
        }}
      >
        {/* Shop Image Section */}
        <Box sx={{ mb: 3.5 }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "14.5px",
              fontWeight: 600,
              fontFamily: '"Poppins", sans-serif',
              mb: 1.5,
            }}
          >
            Storefront Banner & Logo
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "120px", sm: "160px" },
                height: { xs: "90px", sm: "120px" },
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #EEE692",
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={Shopping}
                alt="Storefront"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <IconButton
                size="small"
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "#FF5252",
                  p: 0.4,
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                }}
              >
                <CancelRoundedIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box>
              <Button
                variant="outlined"
                startIcon={<CloudUploadRoundedIcon />}
                sx={{
                  color: "#EEE692",
                  borderColor: "#3D4348",
                  textTransform: "none",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#DED184",
                    backgroundColor: "rgba(222, 209, 132, 0.08)",
                  },
                }}
              >
                Replace Image
              </Button>
              <Typography sx={{ color: "#777", fontSize: "11.5px", mt: 0.8 }}>
                Recommended: 800x600 JPG or PNG under 2MB
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Responsive Form Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2.5, sm: 3 },
            mb: 3,
          }}
        >
          {/* Shop Name */}
          <Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 500,
                mb: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Shop Name <span style={{ color: "#DED184" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              placeholder="Enter shop name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#252526",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                  "& fieldset": { borderColor: "#3D4348" },
                  "&:hover fieldset": { borderColor: "#666" },
                  "&.Mui-focused fieldset": { borderColor: "#DED184" },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  p: 1.6,
                },
              }}
            />
          </Box>

          {/* Shop Tagline */}
          <Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 500,
                mb: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Shop Tagline (Optional)
            </Typography>
            <TextField
              fullWidth
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="Enter catchphrase or subtitle"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#252526",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                  "& fieldset": { borderColor: "#3D4348" },
                  "&:hover fieldset": { borderColor: "#666" },
                  "&.Mui-focused fieldset": { borderColor: "#DED184" },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  p: 1.6,
                },
              }}
            />
          </Box>

          {/* Shop Category */}
          <Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 500,
                mb: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Shop Category <span style={{ color: "#DED184" }}>*</span>
            </Typography>
            <FormControl fullWidth>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{
                  backgroundColor: "#252526",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3D4348" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#DED184" },
                  "& .MuiSelect-icon": { color: "#EEE692" },
                  fontSize: "14px",
                  height: "51px",
                }}
              >
                {categories.map((c) => (
                  <MenuItem
                    key={c}
                    value={c}
                    sx={{
                      backgroundColor: "#1E1E1E",
                      color: "#FFFFFF",
                      "&.Mui-selected": {
                        backgroundColor: "#2E2E2E",
                        color: "#EEE692",
                      },
                      "&:hover": { backgroundColor: "#2A2A2A" },
                    }}
                  >
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Website URL */}
          <Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 500,
                mb: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Website URL (Optional)
            </Typography>
            <TextField
              fullWidth
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="e.g. www.gradolab.com"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#252526",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                  "& fieldset": { borderColor: "#3D4348" },
                  "&:hover fieldset": { borderColor: "#666" },
                  "&.Mui-focused fieldset": { borderColor: "#DED184" },
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  p: 1.6,
                },
              }}
            />
          </Box>

          {/* Phone Number */}
          <Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 500,
                mb: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Contact Phone <span style={{ color: "#DED184" }}>*</span>
            </Typography>
            <Box
              sx={{
                backgroundColor: "#252526",
                border: "1px solid #3D4348",
                borderRadius: "10px",
                p: "10px 14px",
                "&:focus-within": {
                  borderColor: "#DED184",
                },
                "& .PhoneInputInput": {
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: '"Poppins", sans-serif',
                  ml: 1,
                },
              }}
            >
              <PhoneInput
                defaultCountry="AE"
                value={phone}
                onChange={setPhone}
              />
            </Box>
          </Box>

          {/* City */}
          <Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 500,
                mb: 1,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Emirate / City <span style={{ color: "#DED184" }}>*</span>
            </Typography>
            <FormControl fullWidth>
              <Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{
                  backgroundColor: "#252526",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3D4348" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#DED184" },
                  "& .MuiSelect-icon": { color: "#EEE692" },
                  fontSize: "14px",
                  height: "51px",
                }}
              >
                {cities.map((ct) => (
                  <MenuItem
                    key={ct}
                    value={ct}
                    sx={{
                      backgroundColor: "#1E1E1E",
                      color: "#FFFFFF",
                      "&.Mui-selected": {
                        backgroundColor: "#2E2E2E",
                        color: "#EEE692",
                      },
                      "&:hover": { backgroundColor: "#2A2A2A" },
                    }}
                  >
                    {ct}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Shop Description Full Width */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "13.5px",
              fontWeight: 500,
              mb: 1,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Shop Description
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write an engaging description about your shop..."
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#252526",
                color: "#FFFFFF",
                borderRadius: "10px",
                "& fieldset": { borderColor: "#3D4348" },
                "&:hover fieldset": { borderColor: "#666" },
                "&.Mui-focused fieldset": { borderColor: "#DED184" },
              },
              "& .MuiInputBase-input": {
                fontSize: "14px",
                lineHeight: 1.6,
              },
            }}
          />
        </Box>

        {/* Terms & Conditions Checkbox (Full Width, No Squeezing) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1.5,
            mb: 3,
            p: 1.5,
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.02)",
            border: "1px solid #2B2B2B",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Checkbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            sx={{
              color: "#666",
              p: 0,
              mt: 0.3,
              "&.Mui-checked": {
                color: "#DED184",
              },
            }}
          />
          <Typography
            sx={{
              color: "#CCC",
              fontSize: "13.5px",
              lineHeight: 1.5,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            By continuing you agree to the{" "}
            <span style={{ color: "#EEE692", textDecoration: "underline", cursor: "pointer" }}>
              Terms & Conditions
            </span>{" "}
            regarding the Alreem Seller Merchant Account policies and buyer protection standards.
          </Typography>
        </Box>

        {/* Save Button */}
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <Button
            variant="contained"
            fullWidth
            disabled={!isChecked}
            onClick={handleSave}
            startIcon={<SaveRoundedIcon />}
            sx={{
              py: 1.4,
              backgroundColor: "#DED184",
              color: "#000000",
              fontWeight: 700,
              fontSize: "15px",
              borderRadius: "12px",
              textTransform: "none",
              fontFamily: '"Poppins", sans-serif',
              boxShadow: "0 4px 16px rgba(222, 209, 132, 0.25)",
              "&:hover": {
                backgroundColor: "#EEE692",
              },
              "&.Mui-disabled": {
                backgroundColor: "#333333",
                color: "#666",
              },
            }}
          >
            {saveSuccess ? "Changes Saved Successfully! ✓" : "Save Changes"}
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default EditShop;