import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

import React, { useContext, useEffect, useState } from "react";
import { commentsContext } from "../../context/CommentsContextProvider";
import CommentList from "./CommentList";
const Comment = () => {
  const { addcomment, commentssArr, readProduct } = useContext(commentsContext);

  const [comment, setComment] = useState("");
  const API2 = "http://localhost:8000/comments";
  function AddComments(e) {
    // useEffect(() => {
    //   readProduct();
    // }, [AddComments]);
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!comment.trim()) {
      alert("Заполните все поля!");
      return;
    }

    let comObj = {
      comment,
    };
    addcomment(comObj);
    setComment("");
  }
  async function lookCom() {
    let { data } = await axios(`${API2}`);

    setCom(data);
  }
  //
  const [com, setCom] = useState();
  useEffect(() => {
    lookCom();
  }, [AddComments]);

  return (
    <>
      <h2 id="add-title">Добавление товара</h2>
      <form id="form-add" onSubmit={e => AddComments(e)}>
        <TextField
          className="outlined-basic"
          label="Категория"
          variant="outlined"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Добавить
        </Button>
        {/* <CommentList /> */}
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
      {com ? com.map(elem => <Typography>{elem.comment}</Typography>) : null}
    </>
  );
};

export default Comment;
