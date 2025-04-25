import React, { useState } from 'react';
import { Avatar, Box, Button, Card, CardMedia, Dialog, Divider, Icon, TextField, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoOutlineRoundedIcon from '@mui/icons-material/InfoOutlineRounded';
import Buyer from '../assets/images/user.jpg';
import GoldenRing from '../assets/images/Golden Ring.png';
import Shopping from '../assets/images/shoping.jfif';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const OpenDisputes = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // dialog box state
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Box sx={{ border: "1px solid #3D4348", borderRadius: "10px" }}>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", py: 2, }}>
                    <Card sx={{ background: "none", boxShadow: "none", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <CardMedia sx={{ background: "#111111", width: "200px", height: "200px", borderRadius: "50%", }}>
                            <img src={Logo} alt="LOGO" style={{ width: "180px", height: "auto", padding: "40px 25px 20px 11px" }} />
                        </CardMedia>
                        {/* Text Section */}
                        <Typography sx={{
                            color: "#fff", textAlign: 'center',
                            marginTop: '20px',
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: "24px",
                            width: "50%",
                        }}>
                            Welcome to Alreem Chat Support. Seller and buyer are requested to resolve their dispute via chat support. In case of no solution contact admin in the chat.
                        </Typography>
                    </Card>
                    <MoreVertIcon sx={{ color: "#fff", fontSize: "20px" }} />
                </Box>
                {/* Dispute Button */}
                <Box sx={{
                    margin: '10px 0px 20px 350px',
                    backgroundColor: '#29292A',
                    borderRadius: '20px',
                    border: "1px solid #3D4348",
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    width: "25%",
                }}>
                    <Box sx={{
                        height: '20px',
                        borderRadius: '50%',
                        display: "flex",
                        alignItems: "center",
                        justifyItems: "center",
                        paddingLeft: "30px"
                    }}>
                        <Icon>
                            <InfoOutlineRoundedIcon sx={{ color: "#fff", fontSize: "20px" }} />
                        </Icon>
                        <Typography sx={{ color: '#fff', fontSize: '14px' }}>
                            Seller has opened a dispute
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Divider
                sx={{ background: "#3D4348", margin: "0px", height: "3px" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* avatar + image */}
                <Box sx={{ padding: "30px  0px 20px 7px", display: "flex", gap: "10px" }}>
                    <Avatar alt='Buyer' src={Buyer} sx={{ mt: 17 }}>
                    </Avatar>
                    <Card sx={{ background: "none", boxShadow: "none" }}>
                        <CardMedia>
                            <img src={GoldenRing} alt="Golden Ring"
                                style={{
                                    width: "170px",
                                }} />
                        </CardMedia>
                        <Typography sx={{ color: "grey" }}>
                            09:01 am <span style={{ color: "#fff" }}>Michel</span> <span style={{ color: "#EEE692" }}>Buyer</span>
                        </Typography>
                    </Card>
                </Box>
                {/* message */}
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "12px", pt: 30 }}>
                    {/* inbox */}
                    <Box>
                        <Box sx={{ border: "1px solid #3D4348", borderRadius: "10px", p: 1 }}>
                            <Typography sx={{ color: "#fff" }}>
                                What is any reason this product is in dispute?
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: "#fff", textAlign: "end", pt: 1 }}>
                                09:01 am <span style={{ color: "#fff" }}>David</span> <span style={{ color: "#EEE692" }}>Seller</span>
                            </Typography>
                        </Box>
                    </Box>
                    {/* avatar */}
                    <Box>
                        <Avatar sx={{ mt: 2 }}>
                            <img src={Shopping} alt="Shopping" style={{ width: "50px" }} />
                        </Avatar>
                    </Box>
                </Box>
            </Box>
            {/* text field */}
            <Box
                sx={{
                    background: "#111111", display: "flex", pt: 2, alignItems: "center", justifyContent: "space-between", gap: "10px", pr: 1
                }}>
                <TextField
                    placeholder="Type message..."
                    value={inputValue}
                    onChange={handleInputChange}
                    sx={{
                        background: "#000", color: "#fff", width: "100%", height: "40px", m: 1.5, borderRadius: "10px", borderRadius: "10px",
                        '& .MuiInputBase-input': {
                            color: "#fff",
                            padding: "10px",
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: "#fff",
                            opacity: 0.7,
                        },
                    }}
                />

                {/* icon */}
                <Box sx={{ display: "flex", gap: "5px" }}>
                    <Icon sx={{ border: "1px solid grey", borderRadius: "10px", p: 1 }}>
                        <AttachFileIcon sx={{ color: "#EEE692", fontSize: "20px" }} />
                    </Icon>
                    <Icon sx={{ border: "1px solid grey", borderRadius: "10px", p: 1 }}>
                        <SendIcon sx={{ color: "#EEE692" }} />
                    </Icon>
                </Box>
            </Box>
            {/* Dialog box */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}

                sx={{
                    bgcolor: '#29292A',
                    color: '#fff',
                    borderRadius: 2,
                    minWidth: 320,
                    maxWidth: 380
                }}

            >
                <Box sx={{ textAlign: 'center', py: 2 }}>
                    <Typography sx={{ color: '#EEE677', fontWeight: 500 }}>
                        Invite Admin
                    </Typography>
                </Box>
                <Box sx={{
                    borderTop: '1px solid #3d4348',
                    borderBottom: '1px solid #3d4348',
                    p: 2,

                }}>
                    <Typography align="center" sx={{ fontSize: "14px" }}>
                        Are you sure you want the admin to invite in this chat?
                    </Typography>
                </Box>
                <Box sx={{
                    borderBottom: '1px solid #3d4348',
                    py: 2
                }}>
                    <Button
                        fullWidth

                        sx={{
                            color: '#fff',
                            fontSize: "14px",
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.08)'
                            }
                        }}
                    >
                        Yes, invite
                    </Button>
                </Box>
                <Box sx={{ py: 2 }}>
                    <Button
                        fullWidth
                        onClick={handleCloseDialog}
                        sx={{
                            color: '#f44336',
                            fontSize: "14px",
                            '&:hover': {
                                bgcolor: 'rgba(244, 67, 54, 0.08)'
                            }
                        }}
                    >
                        cancel
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )
}

export default OpenDisputes;