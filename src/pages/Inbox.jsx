import { Box, Grid } from '@mui/material'
import React from 'react'

const Inbox = () => {
  return (
    <>
      <Box sx={{display:"flex", gap:"10px"}}>
          <Grid size={8}>Images</Grid>
          <Grid size={4}>RGB Colors</Grid>
      </Box>
    </>
  )
}

export default Inbox;
