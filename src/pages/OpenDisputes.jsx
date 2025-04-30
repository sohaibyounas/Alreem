import React, { useState } from 'react';
import { Avatar, Box, Button, Card, CardMedia, Dialog, Divider, Icon, TextField, Typography, IconButton } from '@mui/material';
import Logo from '../assets/images/logo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoOutlineRoundedIcon from '@mui/icons-material/InfoOutlineRounded';
import Buyer from '../assets/images/user.jpg';
import GoldenRing from '../assets/images/Golden-Ring.png';
import Shopping from '../assets/images/shoping.jfif';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import style from '../assets/style';

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

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Handle sending message logic here
            setInputValue('');
        }
    };

    return (
        <Box sx={style.openBox}>
            {/* alreem logo & text */}
            <Box>
                {/* Alreem icon & Text */}
                <Box sx={style.alreem}>
                    <Card sx={style.alreemCard}>
                        <CardMedia sx={style.alreemMedia}>
                            <img src={Logo} alt="LOGO" style={style.alreemLogo} />
                        </CardMedia>
                        {/* Text Section */}
                        <Typography sx={style.alreemText}>
                            Welcome to Alreem Chat Support. Seller and buyer are requested to resolve their dispute via chat support. In case of no solution contact admin in the chat.
                        </Typography>
                    </Card>
                    <IconButton onClick={handleOpenDialog}>
                        <MoreVertIcon sx={style.alreemIcon} />
                    </IconButton>
                </Box>

                {/* Dispute Button */}
                <Box sx={style.disputeBox}>
                    <Box sx={style.disputeButton}>
                        <Icon>
                            <InfoOutlineRoundedIcon sx={style.disputeIcon} />
                        </Icon>
                        <Typography sx={style.disputeText}>
                            Seller has opened a dispute
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Divider
                sx={style.alreemDivider}
            />

            <Box sx={style.Avatar}>
                {/* avatar + image */}
                <Box sx={style.avatarBox}>
                    <Avatar alt='Buyer' src={Buyer} sx={style.avatarIcon}>
                    </Avatar>
                    <Card sx={style.avatarCard}>
                        <CardMedia>
                            <img src={GoldenRing} alt="Golden Ring"
                                style={style.avatarMedia} />
                        </CardMedia>
                        <Typography
                            sx={style.avatarText}
                        >
                            09:01 am
                            <span style={style.avatarTextColor}>
                                Michel
                            </span>
                            <span style={style.avatarTextColor2}>
                                Buyer
                            </span>
                        </Typography>
                    </Card>
                </Box>

                {/* message */}
                <Box sx={style.message}>
                    {/* inbox */}
                    <Box>
                        <Box sx={style.inbox}>
                            <Typography sx={style.inboxText}>
                                What is any reason this product is in dispute?
                            </Typography>
                        </Box>
                        <Box sx={style.inboxSubbox}>
                            <Typography sx={style.inboxSubText}>
                                09:01 am
                                <span style={style.inboxSubTex1}>
                                    David
                                </span>
                                <span style={style.inboxSubTex2}>
                                    Seller
                                </span>
                            </Typography>
                        </Box>
                    </Box>
                    {/* avatar */}
                    <Box>
                        <Avatar sx={{ mt: 2 }}>
                            <img src={Shopping} alt="Shopping" style={style.avatarImg} />
                        </Avatar>
                    </Box>
                </Box>
            </Box>

            {/* text field */}
            <Box
                sx={style.textFieldDetail}>
                <TextField
                    placeholder="Type message..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                    sx={style.textFieldText}
                />

                {/* icon */}
                <Box sx={style.iconbox}>
                    <IconButton sx={style.iconButton}>
                        <AttachFileIcon sx={style.icon} />
                    </IconButton>
                    <IconButton onClick={handleSendMessage}
                        sx={style.iconClick}>
                        <SendIcon sx={style.sendIcon} />
                    </IconButton>
                </Box>
            </Box>
            {/* Dialog box */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                sx={style.dialog}
            >
                <Box sx={style.dialogbox}>
                    <Typography sx={style.dialogboxText}>
                        Invite Admin
                    </Typography>
                </Box>
                <Box sx={style.dialogInner}>
                    <Typography sx={style.dialogInnerText}>
                        Are you sure you want to invite the admin to this chat?
                    </Typography>
                </Box>
                <Box sx={style.dialogText}>
                    <Button
                        fullWidth
                        sx={style.dialogTextButton}
                    >
                        Yes, invite
                    </Button>
                </Box>
                <Box sx={style.dialogButton2Style}>
                    <Button
                        fullWidth
                        onClick={handleCloseDialog}
                        sx={style.dialogButton}
                    >
                        Cancel
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )
}

export default OpenDisputes;