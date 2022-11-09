import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { chosenContext } from "../../../context/ChosenContextProvider";
import { productContext } from "../../../context/ProductContextProvider";

const ProductCard = ({ obj }) => {
  let background = obj.color;
  let style = {
    background,
  };
  return (
    <Link to={`/details/${obj.id}`}>
      <div className="block">
        <Card className="card" sx={{ maxWidth: 300, borderRadius: 5 }}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            //     {obj.category[0].toUpperCase()}
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={obj.category.toUpperCase()}
          />
          <CardMedia
            component="img"
            height="280"
            image={obj.img1}
            alt={obj.title}
          />
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: 10 }}>
              {obj.title} {obj.model}
            </Typography>
            <div
              style={{
                marginBottom: 20,
                height: 30,
                display: "flex",
                alignItems: "center",
              }}>
              <h2 className="stcolor">color:</h2>
              <div className="block1" style={style}></div>
            </div>

            <Typography
              variant="h5"
              className="cardText"
              color="text.secondary">
              {obj.price} сом
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="share">
              <CommentIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </Link>
  );
};

export default ProductCard;
