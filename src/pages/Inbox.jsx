import React from 'react';
import Stack from '@mui/material/Stack';
import { Avatar, Box, Button, Card, CardContent, CardMedia, InputBase, Typography } from '@mui/material';
import style from '../assets/style';
import SearchIcon from "@mui/icons-material/Search";
import Jordan from '../assets/images/user.png';
import Whilson from '../assets/images/Whilson.png';
import John from '../assets/images/John.png';
import David from '../assets/images/David.png';
import Daniel from '../assets/images/Daniel.png';

const Inbox = () => {
  return (
    <>
      <Box
        sx={style.iBox}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {/* Search Field */}
        <Box
          sx={style.inboxSearch}
        >
          <SearchIcon sx={style.inboxIcon} />
          <InputBase
            placeholder="search..."
            sx={style.searchText2}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        {/* avatar, Texts, Button */}
        {data.map((item, index) => (
          <Box
            key={item.id}
            sx={style.mapData}
          >
            <Avatar
              alt={item.Name}
              src={item.image}
              sx={style.inboxImg}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={style.cardText}>{item.Name}</Typography>
              <Typography variant="body2" color="text.secondary"
                sx={style.cardText2}>
                {item.Status}
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#E4D885',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#E4D885',
                },
              }}
            >
              Go to Chat
            </Button>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Inbox;

const data = [
  {
    id: 1,
    Name: "Michal Jorden",
    Status: "Buyer",
    image: Jordan,
  },
  {
    id: 2,
    Name: "Whilson Doe",
    Status: "Buyer",
    image: Whilson,
  },
  {
    id: 3,
    Name: "John Doe",
    Status: "Buyer",
    image: John,
  },
  {
    id: 4,
    Name: "David Robert",
    Status: "Buyer",
    image: David,
  },

  {
    id: 5,
    Name: "Daniel Joseph",
    Status: "Buyer",
    image: Daniel,
  },
]

