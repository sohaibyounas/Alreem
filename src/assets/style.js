const style = {
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
        border: "1px solid #3D4348",
        borderRadius: "10px",
    },

    disputeText: {
        width: "50%",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "10px",
        padding: "4px",
        cursor: "pointer",
        color: "#fff",
    },

    disputeActiveTab: {
        color: "#000",
        background: "#fff",
    },

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
    














}
export default style;