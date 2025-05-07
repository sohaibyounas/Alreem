import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, IconButton, TextField, Typography } from '@mui/material';
import style from '../assets/style';
import Shopping from '../assets/images/shoping.jfif';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';



const EditShop = () => {

  const [age, setAge] = useState('');


  const [city, setCity] = useState('');
  const handlecity = (event) => {
    setCity(event.target.value);
  }

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // checkbox state
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Box sx={style.editBox}>
        {/* Shoping Image */}
        <Box sx={style.imgBox}>
          <img src={Shopping} alt="Shopping"
            style={style.editImg} />
          <IconButton sx={style.imgIcon}>
            <CancelIcon />
          </IconButton>
        </Box>

        {/* Form */}
        <Box sx={style.form}>
          {/* name & tagline */}
          <Box sx={style.gridStyle}>
            <Box sx={style.gridChild}>
              <Typography sx={style.title}>
                Shop Name
              </Typography>
              <TextField
                variant="outlined"
                sx={style.field}
                placeholder="Grade Lab"
                fullWidth
              />
            </Box>

            <Box sx={style.gridChild}>
              <Typography sx={style.title}>
                Shop TagLine(opitional)
              </Typography>
              <TextField
                variant="outlined"
                sx={style.field}
                placeholder="headphones or audio equipments, possibly offering uni..."
                fullWidth
              />
            </Box>
          </Box>

          {/* dropdown & field */}
          <Box sx={style.selectGrid}>
            <FormControl sx={style.select}>
              <Typography sx={style.title}>Shop Category</Typography>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={style.selectField}
                renderValue={(selected) => selected || 'Select'}
              >
                <MenuItem value={"Indoor Outdoor"} sx={style.menuItem}>Indoor Outdoor</MenuItem>
                <MenuItem value={"Entertainment"} sx={style.menuItem}>Entertainment</MenuItem>
                <MenuItem value={"Sports"} sx={style.menuItem}>Sports</MenuItem>
                <MenuItem value={"Homemade"} sx={style.menuItem}>Homemade</MenuItem>
                <MenuItem value={"Children"} sx={style.menuItem}>Children</MenuItem>
              </Select>
            </FormControl>

            {/* website */}
            <Box sx={style.website}>
              <Typography sx={style.title}>
                Website URL (opitional)
              </Typography>
              <TextField
                variant="outlined"
                sx={style.field}
                placeholder="gradolabs@gmail.com"
                fullWidth
              />
            </Box>
          </Box>
        </Box>

        {/* country List */}
        <Box sx={style.cityList}>
          <Box
            sx={style.countryBox}
          >
            <Typography sx={style.phoneList}>
              Phone Number
            </Typography>
            <Box sx={style.country}>
              <PhoneInput
                defaultCountry="PK"
                value={value}
                onChange={setValue}
                sx={style.phoneNumber}
              />
            </Box>
          </Box>

          {/* city List */}
          <Box sx={style.city}>
            <Typography sx={style.cityTitle}>
              City
            </Typography>
            <FormControl sx={style.countryList} >
              <Select
                value={city}
                onChange={handlecity}
                displayEmpty
                sx={style.selectField2}

                renderValue={(selected) => selected || 'Ajman'}
              >
                <MenuItem value={"Ajman"}
                  sx={style.menuItem}> Ajman</MenuItem>
                <MenuItem value={"Dubai"} sx={style.menuItem}>Dubai</MenuItem>
                <MenuItem value={"Abu Dubai"} sx={style.menuItem}>Abu Dubai</MenuItem>
                <MenuItem value={"Sharjah"} sx={style.menuItem}>Sharjah</MenuItem>
                <MenuItem value={"Derah Dubai"} sx={style.menuItem}>Derah Dubai</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Desctiption */}
        <Box sx={style.description}>
          <Typography sx={style.descText}>
            Write Desctiption
          </Typography>
          <TextField
            variant="outlined"
            sx={style.descField}
            placeholder="write description about your shop..."
            fullWidth
          />
        </Box>

        {/* checkbox & text */}
        <Box sx={style.checkText}>
          <Checkbox checked={isChecked} sx={style.checkBox} />
          <Typography sx={style.checkDetail}>
            By Continuing you agree to our {' '}
            <span
              style={style.checkSpan}
              onClick={() => handleCheck()}
            >
              TERMS & CONDITION
            </span> {' '}
            regarding the
            Seller account.
          </Typography>
        </Box>

        {/* Button */}
        <Box>
          <Button
            sx={style.save}
          >
            Save
          </Button>
        </Box>

      </Box>
    </>
  )
}

export default EditShop;