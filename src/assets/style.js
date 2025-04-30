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



}
export default style;