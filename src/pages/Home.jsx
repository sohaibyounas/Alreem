import { Box, Typography } from "@mui/material";
import Shoping from "../assets/images/shoping.jfif";
import style from '../assets/style';

const Home = () => {
  return (
    <>
      {/* main box */}
      <Box
        sx={style.mainBox}>
        <img
          src={Shoping}
          alt="Shoping"
          style={style.shopingImg}
        />
        <Box>
          <Typography sx={style.imgDetails}>
            Grado Labs
          </Typography>
          <Typography sx={style.headText}>
            headphones or audio equipments, possibly offering unique feature
          </Typography>
        </Box>
      </Box>

      {/* Inner Text */}
      <Box sx={style.innerBox}>
        <Box sx={style.innerBox1}>
          <Typography sx={style.innerText}>
            Address
          </Typography>
          <Typography sx={style.innerPara}>
            Ajman United AArab Emirates
          </Typography>
        </Box>

        <Box sx={style.innerBox1}>
          <Typography sx={style.innerText}>
            Category
          </Typography>
          <Typography sx={style.innerPara}>
            Indoor Outdoor
          </Typography>
        </Box>
      </Box>

      <Box sx={style.mainBox1}>
        <Box sx={style.innerBox1}>
          <Typography sx={style.innerText}>
            Website
          </Typography>
          <Typography sx={style.innerPara}>
            www.gradolabmail.com
          </Typography>
        </Box>

        <Box sx={style.innerBox1}>
          <Typography
            sx={style.innerText}>
            Contact Number
          </Typography>
          <Typography sx={style.innerPara}>
            +97 3123 8797123
          </Typography>
        </Box>
      </Box>

      <Box sx={style.innerBox2}>
        <Typography sx={style.innerText}>
          Shop Description
        </Typography>
        <Typography sx={style.innerPara1}>
          Grado Labs we believe fashion is a journey meant to be shared. Join our vibrant community of fashion aficionados,
          where inspiration knows no bounds.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
