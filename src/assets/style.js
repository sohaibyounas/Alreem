const style = {
    // Navbar
    navBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#212121",
        color: "#fff",
        height: "70px",
        padding: "0 20px",
        width: '100%',
        // position: { xs: 'fixed', md: 'static' },
        top: 0,
        left: 0,
        zIndex: 1200,
    },

    navHead: {
        color: "#DED184",
        fontSize: "28px",
        fontWeight: "600",
        fontFamily: '"Poppins", sans-serif !important',
        paddingTop: "10px",
        marginLeft: "0px",
        lineHeight: "34px",
        textTransform: "uppercase",
        backgroundColor: "linear-gradient(180deg, #f3ef9c, #d9cb7f, #bea963, #a3884a, #876832)",
        display: {
            xs: "none", sm: "none", md: "block",
        },
    },

    navHeadText: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    navAvatar: {
        width: "39px",
        height: "39px",
        border: "1px solid #eee692",
    },

    navImg: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
    },

    // avatar text
    avatarTextBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        display: {
            xs: "none", sm: "none", md: "block",
        },
    },

    avatarHeadText: {
        color: "#fff",
        lineHeight: "30px",
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: '"Poppins", sans-serif !important',
    },

    avatarHeadText2: {
        fontSize: "16px",
        color: "#bbb",
        fontSize: "16px",
        fontWeight: "400",
        fontFamily: '"Poppins", sans-serif !important',
    },

    // contact-chat-support (page => userdetail-linked)
    contactChatSupport: {
        width: "100%",
        background: "#212121",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
    },

    contactChatText: {
        background: "#212121",
        color: "#EEE692",
        fontSize: "16px",
        py: 2,
    },

    contactChatTextIcon: {
        background: "#212121",
        color: "#fff",
    },

    showContactSupportDivider: {
        background: "#3D4348",
        height: "2.5px",
    },

    showLink: {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        backgroundColor: "#212121",
        cursor: "pointer",
        padding: "10px",
        "&:hover .back-icon": {
            color: "#EEE692",
            transform: "translateX(-5px)",
            transition: "color 0.3s, transform 0.3s",
        },
    },

    showLinkIcon: {
        color: "#fff",
        transition: "color 0.3s, transform 0.3s",
    },

    chatSupportText: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif !important',
    },

    // Layout Page
    mainContentBox: {
        background: "#29292A",
        overflowY: "auto",
        scrollbarWidth: "none",
    },


    // SideBar Page
    sideMainBox: {
        width: "100%",
        height: "100vh",
        backgroundColor: "#212121",

    },

    siteLogo: {
        width: "200px",
        height: "100px",
        textDecoration: "none",
    },

    // sidebar lists
    sideMenuLink: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
    },

    sideMenuList: {
        mr: 1,
        minWidth: 30,
    },

    sideMenuListImg: {
        width: 24,
        height: 24,
    },

    sideMenuListText: {
        color: "#EEE692",
        '& .css-rizt0-MuiTypography-root': {
            fontSize: "16px !important",
            fontWeight: "700 !important",
            fontFamily: '"Poppins", sans-serif !important',
        },
    },


    // Home Page
    mainBox: {
        display: "flex",
        gap: "10px",
        padding: "20px",
        border: "1px solid #3d4348",
        borderRadius: "20px",
    },

    shopingImg: {
        width: "100px",
        height: '50%',
        borderRadius: "10px",
    },

    /* inner text */
    mainBox1: {
        display: 'flex',
        gap: '10px',
        marginTop: '20px',
    },

    imgDetails: {
        color: '#EEE692',
        paddingBottom: '25px',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '18px',
        fontFamily: '"Poppins", sans-serif',
    },

    headText: {
        width: '90%',
        color: '#fff',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        paddingTop: '5px',
        fontFamily: '"Poppins", sans-serif',
    },
    /* inner text */
    mainbox1: {
        display: 'flex',
        gap: '10px',
        marginTop: '20px',
    },

    innerBox: {
        display: 'flex',
        marginTop: '20px',
        gap: '10px',
    },

    innerBox1: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        width: '50%',
        border: '1px solid #3D4348',
        borderRadius: '10px',
    },

    innerText: {
        color: '#eee692',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '18px',
        fontFamily: '"Poppins", sans-serif',
    },

    innerPara: {
        color: '#fff',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: '"Poppins", sans-serif',
    },

    innerBox2: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        width: '96%',
        marginTop: '20px',
        border: '1px solid #3D4348',
        borderRadius: '10px',
    },

    innerPara1: {
        paddingTop: '20px',
        width: '95%',
        color: '#fff',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: '"Poppins", sans-serif',
    },

    // Dashboard Page
    dashMain: {
        display: 'flex',
        gap: '20px',
    },

    dashBox: {
        width: '50%',
        border: '1px solid #3D4348',
        borderRadius: '20px',
    },

    dashInnerBox1: {
        display: 'flex',
        gap: '10px',
        padding: '20px',
    },

    dashInnerBox1Img: {
        width: '80px',
        display: 'block',
    },

    dashInnerBox1Text: {
        color: '#fff',
        lineHeight: '34px',
        paddingTop: '20px',
        fontSize: '28px',
        fontWeight: 700,
        fontFamily: '"Poppins", sans-serif',
    },

    dashTextBox: {
        display: 'flex',
        gap: '10px',
        padding: '20px',
        flexDirection: 'column',
    },

    dashTextBoxDetails: {
        color: '#fff',
        lineHeight: '24px',
        fontSize: '16px',
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    dashSubBox: {
        width: '50%',
        border: '1px solid #3D4348',
        borderRadius: '20px',
    },

    dashSubBox1Main: {
        display: 'flex',
        gap: '20px',
        marginTop: '15px',
    },

    // Manage Order Page
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '20px',
        padding: '7px',
        color: '#fff',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 700,
        border: '1px solid #3D4348',
        borderRadius: '10px',
        fontFamily: '"Poppins", sans-serif',
    },

    tab: {
        color: "#fff",
        background: "transparent",
        cursor: 'pointer',
        padding: '10px',
        justifyContent: "center",
        borderRadius: '10px',
    },

    tabActive: {
        color: "#000",
        background: "#fff",
    },

    // order list grid
    listGrid: {
        display: 'flex',
        justifyContent: "space-between",
        border: "1px solid #3D4348",
        borderRadius: "10px",
        marginBottom: "20px",
    },

    grid1: {
        display: 'flex',
        padding: '20px',
        gap: '10px',
    },

    imgGrid: {
        borderRadius: '10px',
    },

    imgGridDetail: {
        width: '100px',
        display: 'block',
    },

    imgText: {
        color: '#fff',
        lineHeight: '21px',
        fontSize: '14px',
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    gridText: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },

    gridDetail: {
        color: '#fff',
        lineHeight: '24px',
        fontSize: '20px',
        fontWeight: 500,
        fontFamily: '"Poppins", sans-serif',
    },

    gridLeftSideText: {
        color: '#fff',
        lineHeight: '21px',
        fontSize: '14px',
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    gridRightSideText: {
        color: '#EEE692',
        paddingLeft: '5px',
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    // Button Grid
    buttonMain: {
        display: 'flex',
        padding: '20px',
        justifyContent: 'end',
        width: '150px',
        height: '75px',
    },

    button: {
        color: "#000",
        border: "none",
        borderRadius: "10px",
        padding: "6px 30px",
        fontSize: "16px",
        fontWeight: "700",
        fontFamily: '"Poppins", sans-serif',
        background: 'linear-gradient(90deg, #bba051, #ece490, #bba052)',
    },

    // Paination
    paginationGrid: {
        display: 'flex',
        marginTop: '40px',
        gap: '10px',
    },

    pagination: {
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
    },

    paginationDetail: {
        justifyContent: 'end',
        display: 'flex',
        gap: '10px',
    },

    paginationButton: {
        background: '#212121',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '0px 15px',
        fontSize: '16px',
        outline: '1px solid #3D4348',
    },

    // Details Page
    mainDetailBox: {
        display: 'flex',
        gap: '25px',
        width: '100%',
    },

    // Grid 1 
    mainGrid1: {
        border: '1px solid #3D4348',
        borderRadius: '10px',
    },

    // Cards
    card: {
        background: "none",
        boxShadow: "none",
    },

    cardText: {
        color: "#EEE692",
        fontSize: "20px",
        fontWeight: 700,
        fontFamily: '"Poppins", sans-serif',
    },

    cardMedia: {
        width: "65px",
        paddingLeft: "15px",
        display: "block",
    },

    cardDetail: {
        display: "flex",
        justifyContent: "space-between",
    },

    cardInnerText: {
        textAlign: "start",
        color: "#909090",
    },

    // left side text
    textDetail: {
        padding: "0px 0px 10px 10px",
        fontSize: "14px",
        lineHeight: "21px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    // right side text
    textDetail2: {
        padding: "0px 10px 0px 0px",
        fontSize: "14px",
        lineHeight: "21px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    cardRightText: {
        textAlign: "end",
        color: "#fff",
        fontSize: "14px",
    },

    divider: {
        background: "#3D4348",
        margin: "0px",
        height: "3px",
        mx: 2,
    },

    card1: {
        background: "none",
        boxShadow: "none",
        padding: "10px",
    },

    cardimg: {
        width: "65px",
        paddingLeft: "5px",
        display: "block",
    },

    cardInnerText2: {
        textAlign: "start",
        color: "#909090",
        fontSize: "14px",
        p: "10px 0px",
    },

    card2inner: {
        textAlign: "end",
        color: "#fff",
        fontSize: "14px",
        pr: "0",
    },

    card3: {
        p: 2,
        background: "none",
        boxShadow: "none",
    },

    card3Img: {
        width: "65px",
        display: "block",
    },

    card3InnerText: {
        textAlign: "start",
        color: "#909090",
        fontSize: "14px",
        p: "10px 0px 0px 0px",
    },

    textDetail2: {
        padding: "0px 0px 10px 0px",
        fontSize: "14px",
        lineHeight: "21px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    // Grid 2 Order Info
    grid2: {
        ps: 1,
        pr: 2,
        borderRadius: "10px",
        border: "1px solid #3D4348",
    },

    buyerCard: {
        background: "none",
        boxShadow: "none",
        paddingBottom: "0px",
    },

    buyerCardText: {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "700",
        color: "#EEE692",
        padding: "10px 0px 0px 15px",
        fontFamily: '"Poppins", sans-serif',
    },

    buyerDetail: {
        padding: "10px 0px 0px 10px",
        alignItems: "center",
    },

    buyerMedia: {
        display: "flex",
        gap: "10px",
    },

    buyerIcon: {
        width: "2rem",
        height: "2rem",
    },

    buyerIconDetail: {
        color: "#EEE692",
        fontSize: "20px",
        backgroundColor: "#5E5C43",
        borderRadius: "50%",
        padding: "5px",
    },

    buyerText: {
        fontSize: "20px",
        lineHeight: "24px",
        color: "#fff",
        fontWeight: 500,
        fontFamily: '"Poppins", sans-serif',
    },

    buyerBox: {
        display: "flex",
        justifyContent: "space-between",
    },

    buyerTextCard: {
        textAlign: "start",
        color: "#909090",
    },

    leftText: {
        padding: "10px 0px 0px 0px",
        lineHeight: "21px",
        fontSize: "14px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    rightText: {
        textAlign: "end",
        color: "#fff",
        fontSize: "14px",
        padding: "10px 0px 0px 10px",
        paddingBottom: "0 !important",
    },

    // Order Placed
    order: {
        p: 1,
        m: 1.5,
        border: "1px solid #3D4348",
        borderRadius: "10px",
    },

    orderCard: {
        display: "flex",
        gap: "10px",
        background: "none",
        boxShadow: "none",
        alignItems: "center",
        justifyContent: "space-between",
    },

    orderCardBox: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },

    orderCardMedia: {
        display: "flex",
        gap: "8px",
    },

    orderCardIcon: {
        color: "#000",
        fontSize: "18px",
        backgroundColor: "#EEE692",
        borderRadius: "50%",
        padding: "5px",
        border: "2px solid #73704e",
    },

    orderIcon: {
        color: "#EEE692",
        fontSize: "30px",
        backgroundColor: "#5E5C43",
        borderRadius: "50%",
    },

    orderCardText: {
        color: "#fff",
        fontSize: "14px",
        lineHeight: "21px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    orderText: {
        color: "#fff",
    },

    // Order Accept/Reject
    orderBox: {
        p: 2,
        display: "flex",
        gap: "10px",
    },

    orderButton: {
        color: "#fff",
        fontWeight: "bold",
        padding: "10px 33px",
        borderRadius: "10px",
        border: "1px solid #3D4348",
        fontFamily: '"Poppins", sans-serif',
    },

    acceptButton: {
        color: "#000",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "25px",
        padding: "10px 36px",
        borderRadius: "10px",
        border: "1px solid #3D4348",
        backgroundColor: "#E1D481",
    },

    // Dispute Order Page
    pageBox: {
        padding: 2,
        margin: "0 auto",
    },

    disputeTabs: {
        display: "flex",
        gap: "10px",
        padding: '6px',
        border: "1px solid #3d4348",
        borderRadius: "6px",
        background: "#29292A",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
    },

    disputeTextTabs: {
        width: "50%",
        textAlign: "center",
        fontSize: "16px !important",
        fontWeight: "700 !important",
        borderRadius: "10px",
        padding: "10px 0px",
        cursor: "pointer",
        color: "#fff",
        background: "transparent",
        transition: "all 0.3s",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    disputeActiveTab: {
        color: "#000",
        background: "#fff",
        fontWeight: "600 !important",
    },

    // Dispute section

    link: {
        textDecoration: "none",
    },

    linkText: {
        padding: 2,
        marginTop: 3,
        borderRadius: "10px",
        border: "1px solid #3D4348",
    },

    disputeHeader: {
        paddingBottom: 1,
    },

    disputeHeaderText: {
        color: "#EEE692",
        fontSize: "20px",
        lineHeight: "29px",
        fontWeight: 500,
        fontFamily: '"Poppins", sans-serif',
    },

    disputeDetails: {
        pt: 1,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },

    disputeLeftText: {
        color: "#fff",
        paddingTop: 0.5,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "21px",
        fontFamily: '"Poppins", sans-serif',
    },

    disputeRightText: {
        fontSize: "16px",
        paddingTop: 0.5,
        textAlign: "end",
        color: "#F8080F",
    },

    disputeRightTextActive: {
        color: "#EEE692",
    },

    disputeRight: {
        color: "#EEE692",
        fontSize: "14px",
        paddingTop: 0.5,
        textAlign: "end",
        fontWeight: 400,
        lineHeight: "21px",
        fontFamily: '"Poppins", sans-serif',
    },

    disputeDivider: {
        mt: 3,
        margin: "0px",
        height: "2px",
        background: "#3D4348",
    },

    disputeInnerBox: {
        pt: 2.5,
        color: "#EEE692",
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "21px",
        fontFamily: '"Poppins", sans-serif',
    },

    disputeInnerText: {
        pt: 1,
        color: "#fff",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "21px",
        fontFamily: '"Poppins", sans-serif',
    },

    // User Detail Page
    box: {
        p: 1,
        border: "1px solid #3D4348",
        borderRadius: "10px",
    },

    user: {
        py: 1,
        px: 2,
        color: "#EEE692",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "21px",
        fontFamily: '"Poppins", sans-serif',
    },

    userDetail: {
        display: "flex",
        justifyContent: "space-between",
    },

    userText: {
        p: 2,
        color: "#fff",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
    },

    userTextItem: {
        pb: 1,
        color: "#fff",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
    },

    userTextDetail: {
        pb: 1,
        textAlign: "end",
        color: "#eee692",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
    },

    userDivider: {
        mx: 2,
        margin: "0px",
        height: "2.5px",
        background: "#3D4348",
    },

    userInnerBox: {
        p: 1,
        color: "#EEE692",
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
    },

    userBoxDetail: {
        p: 1,
        color: "#fff",
    },


    // Open Dispute Page
    openBox: {
        borderRadius: "10px",
        border: "1px solid #3D4348",
    },

    alreem: {
        p: 2,
        display: "flex",
        justifyContent: "space-between",
    },

    alreemCard: {
        background: "none",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },

    alreemMedia: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "#111111",
    },

    alreemLogo: {
        width: "180px",
        height: "auto",
        padding: "40px 25px 20px 11px",
    },

    alreemText: {
        color: "#fff",
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: "24px",
        width: "50%",
    },

    alreemIcon: {
        position: "absolute",
        top: 8,
        right: 8,
        color: "#fff", fontSize: "20px",
        '&:hover': { backgroundColor: 'transparent' },
    },

    disputeBox: {
        width: "25%",
        margin: '10px 0px 20px 350px',
        backgroundColor: '#29292A',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
        border: "1px solid #3D4348",
    },

    disputeButton: {
        gap: "10px",
        height: '20px',
        borderRadius: '50%',
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        paddingLeft: "30px",
    },

    disputeIcon: {
        color: "#fff",
        fontSize: "20px",
    },

    disputeText: {
        color: '#fff',
        fontSize: '13px',
        fontWeight: "400",
        lineHeight: "18px",
        fontFamily: '"Poppins", sans-serif',
    },

    alreemDivider: {
        margin: "0px",
        height: "3px",
        background: "#3D4348",
    },

    Avatar: {
        display: "flex",
        justifyContent: "space-between",
    },

    avatarBox: {
        gap: "10px",
        display: "flex",
        padding: "30px  0px 20px 7px",
    },

    avatarIcon: {
        mt: 17,
    },

    avatarCard: {
        background: "none",
        boxShadow: "none",
    },

    avatarMedia: {
        width: "170px",
    },

    avatarText: {
        color: "grey",
    },

    avatarTextColor: {
        color: "#fff",
    },

    avatarTextColor2: {
        color: "#EEE692",
    },

    message: {
        pt: 30,
        gap: "12px",
        display: "flex",
        justifyContent: "space-between",
    },

    inbox: {
        p: 1,
        borderRadius: "10px",
        border: "1px solid #3D4348",
    },

    inboxText: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "18px",
        fontFamily: '"Poppins", sans-serif',
    },

    inboxSubbox: {
        textAlign: "end",
    },

    inboxSubText: {
        pt: 1,
        color: "#909090",
        textAlign: "end",
        fontFamily: '"Poppins", sans-serif',
    },

    inboxSubTex1: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: '"Poppins", sans-serif',
    },

    inboxSubTex2: {
        color: "#EEE692",
        fontSize: "14px",
        fontWeight: "400",
        fontFamily: '"Poppins", sans-serif',
    },

    avatarImg: {
        width: "50px",
    },

    textField: {
        pt: 2,
        pr: 1,
        gap: "10px",
        background: "#111111",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    textFieldDetail: {
        pr: 1,
        pt: 2,
        gap: "10px",
        background: "#111111",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    textFieldText: {
        background: "#000", color: "#fff", width: "100%", height: "40px", m: 1.5, borderRadius: "10px",
        '& .MuiInputBase-input': {
            color: "#fff",
            padding: "10px",
        },
        '& .MuiInputBase-input::placeholder': {
            color: "#fff",
            opacity: 0.7,
        },
    },

    iconbox: {
        display: "flex",
        gap: "5px",
    },

    iconButton: {
        p: 1,
        border: "1px solid grey",
        borderRadius: "10px",
    },

    icon: {
        color: "#EEE692",
        fontSize: "20px",
    },

    iconClick: {
        p: 1,
        border: "1px solid grey",
        borderRadius: "10px",
    },

    sendIcon: {
        color: "#EEE692",
    },

    // Dialog Box
    dialog: {
        '& .MuiPaper-root': {
            bgcolor: '#29292A',
            color: '#fff',
            borderRadius: "10px",
            minWidth: 320,
            maxWidth: 450,
            ml: 30,
        }
    },

    dialogbox: {
        py: 2,
        textAlign: 'center',
    },

    dialogboxText: {
        color: '#EEE677',
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
    },

    dialogInner: {
        p: 2,
        borderTop: '1px solid #3d4348',
        borderBottom: '1px solid #3d4348',
    },

    dialogInnerText: {
        align: "center",
        fontSize: "14px",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
    },

    dialogText: {
        py: 2,
        borderBottom: '1px solid #3d4348',
    },

    dialogTextButton: {
        color: '#fff',
        fontSize: "14px",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
        '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.08)',
        },
    },

    dialogButton2Style: {
        py: 2,
    },

    dialogButton: {
        color: '#f44336',
        fontSize: "14px",
        lineHeight: "24px",
        fontFamily: '"Poppins", sans-serif',
        '&:hover': {
            bgcolor: 'rgba(244, 67, 54, 0.08)',
        },
    },

    // Inventory Page
    search: {
        display: "flex",
        justifyContent: "space-between",
    },

    searchBox: {
        px: 2,
        py: 0.5,
        mx: "auto",
        width: 400,
        maxWidth: "90vw",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#29292A",
        justifyContent: "space-between",
        borderRadius: "999px",
        border: "1px solid #3D4348",
    },


    searchIcon: {
        color: "#aaa",
        fontSize: "30px",
    },

    searchText: {
        color: "#ccc",
        width: "100%",
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
        "& input": {
            padding: 0,
        },
    },

    searchButon: {
        px: 2,
        border: "1px solid grey",
        borderRadius: "20px",
        color: "#fff",
        fontSize: 16,
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        background: "transparent",
        boxShadow: "none",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
        "&:hover": {
            background: "#29292A",
            boxShadow: "none",
        },
    },

    // Product Grid
    cardGrid: {
        m: 2,
        width: '100%',
        background: 'none',
        overflow: 'hidden',
        boxShadow: 'none',
        borderRadius: '10px',
        border: '1px solid #3D4348',
    },

    cardPosition: {
        position: 'relative',
    },

    cardImg: {
        width: '100%',
        height: '200px',
        display: 'block',
        objectFit: 'cover',
    },

    cardText: {
        px: 2,
        py: 1,
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '50%',
        background: '#000',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 500,
        borderTopRightRadius: '40px',
    },

    productBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    productContent: {
        pb: '0',
        color: '#fff',
    },

    productDetails: {
        mb: 1,
        fontSize: '16px',
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    productText: {
        pb: '0',
        mb: 1,
        pr: 1,
        color: '#EEE692',
        textAlign: "end",
        fontSize: '16px',
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    // Inbox Page
    iBox: {
        width: '100%',
    },

    inboxSearch: {
        py: 1,
        px: 1,
        my: 2,
        width: "98%",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        borderRadius: "10px",
        border: "1px solid #3D4348",
    },

    inboxIcon: {
        color: "#FFFFFF",
        fontSize: "25px",
    },

    searchText2: {
        color: "#ccc",
        width: "100%",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
        "& input": {
            padding: 0,
        },
    },

    mapData: {
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#212121',
        color: '#fff',
        padding: '20px 16px',
        borderRadius: '8px',
        marginBottom: '15px',
        border: "1px solid #3D4348",
    },

    inboxImg: {
        mr: 2,
        width: "80px",
        height: "80px",
        display: "block",
        borderRadius: "50%",
        outline: "2px solid #EEE692",
    },

    cardText: {
        mb: 2,
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 600,
        fontFamily: '"Poppins", sans-serif',
    },

    cardText2: {
        color: "#fff",
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },


    // Edit Shop Page
    editBox: {
        bgcolor: "#212121",
        width: "100%",
        height: "auto",
        padding: "5px",
        border: "1px solid #3D4348",
        borderRadius: "10px",
    },

    imgBox: {
        p: 2,
        position: "relative",
    },

    editImg: {
        width: "180px",
        display: "block",
        borderRadius: "10px",
        border: "1px solid #3D4348",
    },

    imgIcon: {
        top: 15,
        left: 160,
        cursor: "pointer",
        color: "#fff",
        position: "absolute",
    },

    // Form
    form: {
        width: "100%",
        padding: "0 10px 16px",
    },

    title: {
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
        marginBottom: "8px",
    },

    field: {
        color: "#fff",
        background: "#2C2C2C",
        borderRadius: "10px",
        border: "1px solid #3D4348",
        '& :input': {
            outline: "none",
            border: "1px solid #3D4348",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3D4348',
                outline: "none",
                border: "none",
            },
            '&:hover fieldset': {
                borderColor: '#3D4348',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3D4348',
            },
        },
        '& .MuiInputBase-input': {
            color: '#fff',
            padding: "16px",
            fontSize: "14px",
            fontFamily: '"Poppins", sans-serif',
        },
    },

    gridStyle: {
        gap: "10px",
        padding: "10px 20px 10px 10px",
        display: "flex",
        flexWrap: "wrap",
    },

    gridChild: {
        flex: 1,
        minWidth: "48%",
    },

    select: {
        m: 1,
        width: "49%",
    },

    selectGrid: {
        gap: "5px",
        padding: "10px 20px 10px 0px",
        display: "flex",
        flexWrap: "wrap",
    },

    //dropdown fields 
    countryBox: {
        width: "50%", //Set equal width to match city dropdown
    },

    selectField: {
        borderRadius: "10px",
        border: "1px solid #3D4348",
        backgroundColor: "#2C2C2C",
        fontFamily: '"Poppins", sans-serif',
        fontSize: "14px",
        fontWeight: 400,
        color: "#fff",
        '& .MuiSelect-icon': {
            color: "#fff",
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#3D4348",
            border: "none",
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "#3D4348",
            border: "none",
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#3D4348",
            border: "none",
        },
    },

    menuItem: {
        color: "#fff",
        backgroundColor: "#1a1a1a",
        justifyContent: "center",
        fontSize: "16px",
        fontFamily: '"Poppins", sans-serif',

        '&.Mui-selected': {
            backgroundColor: "#2C2C2C",
            color: "#fff",
        },
        '&.Mui-selected:hover': {
            backgroundColor: "#2C2C2C",
            color: "#fff",
        },
        '&:hover': {
            backgroundColor: "#2C2C2C",
            color: "#fff",
        },
    },

    website: {
        width: "48.5%",
        pt: 1,
    },

    // country list
    phoneList: {
        px: 2,
        pb: 1,
        color: "#fff",
        background: "transparent",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    country: {
        ml: 2,
        px: 0,
        width: "90%",
        borderRadius: "10px",
        border: "1px solid #3d4348",
        background: "#2C2C2C",
        color: "#fff",
        outline: "none",
        fontSize: "18px",
        padding: "16px",
        boxShadow: "none",
        transition: "none",
    },

    countryList: {
        ml: 2,
        px: 0,
        width: "90%",
        borderRadius: "10px",
        border: "1px solid #3d4348",
        background: "#2C2C2C",
        color: "#fff",
        outline: "none",
        fontSize: "18px",
        boxShadow: "none",
        transition: "none",
    },

    phoneNumber: {
        background: "#232323",
        color: "#fff",
        width: "100%", // Set to 100% for proper sizing
        border: "none",
        outline: "none",
        fontSize: "18px",
        padding: "7px",
        "& .react-tel-input .form-control": {
            background: "#232323",
            color: "#fff",
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "18px",
            padding: "7px",
        },
        "& .react-tel-input .form-control:focus": {
            background: "#232323 !important",
            color: "#fff",
            border: "none",
            outline: "none",
            boxShadow: "none",
        },
        "& .react-tel-input .form-control:active": {
            background: "#232323 !important",
            color: "#fff",
            border: "none",
            outline: "none",
            boxShadow: "none",
        },
    },

    selectField2: {
        borderRadius: "10px",
        border: "1px solid #3D4348",
        backgroundColor: "#2C2C2C",
        fontFamily: '"Poppins", sans-serif',
        fontSize: "14px",
        fontWeight: 400,
        color: "#fff",
        '& .MuiSelect-icon': {
            color: "#fff",
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#3D4348",
            border: "none",
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "#3D4348",
            border: "none",
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#3D4348",
            border: "none",
        },
    },

    city: {
        width: "50%", // Equal width
    },

    cityTitle: {
        px: 1,
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
        marginBottom: "8px",
    },

    cityList: {
        mb: 2,
        width: "100%",
        display: "flex",
        gap: "10px",
        justifyContent: "space-between",
    },

    // desctiption
    desctiption: {
        mx: 1,
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
        marginBottom: "8px",
    },

    descText: {
        pb: 1,
        color: "#fff",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    descField: {
        color: "#fff",
        background: "#2C2C2C",
        borderRadius: "10px",
        border: "1px solid #3D4348",
        pb: 2,
        '& :input': {
            outline: "none",
            border: "1px solid #3D4348",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3D4348',
                outline: "none",
                border: "none",
            },
            '&:hover fieldset': {
                borderColor: '#3D4348',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3D4348',
            },
        },
        '& .MuiInputBase-input': {
            color: '#fff',
            padding: "10px 16px 60px 16px",
            fontSize: "14px",
            fontFamily: '"Poppins", sans-serif',
        },
    },

    // check & Text
    checkText: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        width: "50%",
    },

    checkBox: {
        color: "#fff",

    },

    checkDetail: {
        color: "#fff",
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: 400,
        fontFamily: '"Poppins", sans-serif',
    },

    checkSpan: {
        color: "#EEE692",
        textDecoration: "underline",
        cursor: "pointer",
    },


    save: {
        py: 1,
        my: 2,
        width: "100%",
        color: "#000",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 700,
        fontFamily: '"Poppins", sans-serif !important',
        background: "linear-gradient(90deg, #bba051, #ece490, #bba052) ",
    },

    // sidebutton
    sideButon: {
        border: "1px solid #3dD4348",
        borderRadius: "10px",
        color: "#fff",
        background: "#3D4348",
        display: {
            xs: "block", sm: "block", md: "none",
        },
    },



};
export default style;