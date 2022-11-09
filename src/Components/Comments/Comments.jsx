import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { commentsContext } from "../../context/CommentContextProvider";

const Comments = () => {
  const { addcomment, commentssArr } = useContext(commentsContext);
  const [comments, setComments] = useState("");

  function AddComments(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!comments.trim()) {
      alert("Заполните все поля!");
      return;
    }

    let comObj = {
      comments,
    };
    addcomment(comObj);
    setComments("");
  }
  // console.log(commentssArr);
  return (
    <>
      <h2 id="add-title">Добавление товара</h2>
      <form id="form-add" onSubmit={e => AddComments(e)}>
        <TextField
          className="outlined-basic"
          label="Категория"
          variant="outlined"
          value={comments}
          onChange={e => setComments(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Добавить
        </Button>
        {/* {commentssArr
          ? commentssArr.map(item => (
              <Grid item={true} xs={3.5} mb={7} key={item.id}>
                <Typography>comObj={item} </Typography>
              </Grid>
            ))
          : null} */}
      </form>
    </>
  );
};

export default Comments;
