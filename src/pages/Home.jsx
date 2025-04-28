import { Box, Typography } from "@mui/material";
import Shoping from "../assets/images/shoping.jfif";
import style from '../assets/CSS/style.module.css';

const Home = () => {
  return (
    <>
      {/* main box */}
      <Box
        className={style.mainbox}>
        <img
          src={Shoping}
          alt="Shoping"
          className={style.shopingimg}
        />
        <Box>
          <Typography className={style.imgdetails}>
            Grado Labs
          </Typography>
          <Typography className={style.headtext}>
            headphones or audio equipments, possibly offering unique feature
          </Typography>
        </Box>
      </Box>

      {/* Inner Text */}
      <Box className={style.innerbox}>
        <Box className={style.innerbox1}>
          <Typography className={style.innertext}>
            Address
          </Typography>
          <Typography className={style.innerpara}>
            Ajman United AArab Emirates
          </Typography>
        </Box>

        <Box className={style.innerbox1}>
          <Typography className={style.innertext}>
            Category
          </Typography>
          <Typography className={style.innerpara}>
            Indoor Outdoor
          </Typography>
        </Box>
      </Box>

      <Box className={style.mainbox1}>
        <Box className={style.innerbox1}>
          <Typography className={style.innertext}>
            Website
          </Typography>
          <Typography className={style.innerpara}>
            www.gradolabmail.com
          </Typography>
        </Box>

        <Box className={style.innerbox1}>
          <Typography className={style.innertext}>
            Contact Number
          </Typography>
          <Typography className={style.innerpara}>
            +97 3123 8797123
          </Typography>
        </Box>
      </Box>

      <Box className={style.innerbox2}>
        <Typography className={style.innertext}>
          Shop Description
        </Typography>
        <Typography className={style.innerpara1}>
          Grado Labs we believe fashion is a journey meant to be shared. Join our vibrant community of fashion aficionados,
          where inspiration knows no bounds.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
