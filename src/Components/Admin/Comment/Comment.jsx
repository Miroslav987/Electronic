import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { productContext } from "../../../context/ProductContextProvider";

const Comment = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const [inpValues, setInpValues] = useState(productDetails);

  const { id } = useParams();
  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }

  // const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!inpValues.category.trim()) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    // navigate("/list");
  }
  console.log(inpValues);
  return (
    <>
      <h2 id="add-title">Редактирование товара</h2>
      <form id="form-add" onSubmit={e => handleSave(e)}>
        <TextField
          className="outlined-basic"
          label="Коментарий"
          variant="outlined"
          name="comment"
          // value={inpValues.Comment}
          onChange={e => handleChange(e)}
        />
        <Button variant="contained" type="submit">
          Сохранить
        </Button>
      </form>
      <Grid sx={{ width: "40%" }} ml="40px" my="20px">
        <Typography variant="h4">Filter</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px"></Grid>
    </>
  );
};

export default Comment;
