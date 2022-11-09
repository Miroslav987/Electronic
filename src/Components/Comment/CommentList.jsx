// import { Box, Grid, Pagination, Typography } from "@mui/material";
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";

// const API2 = "http://localhost:8000/comments";

// const CommentList = () => {
//   async function lookCom() {
//     let { data } = await axios(`${API2}`);

//     setCom(data);
//   }
//   //
//   const [com, setCom] = useState();
//   useEffect(() => {
//     lookCom();
//   }, []);
//   setTimeout(() => {
//     com.map(elem => {
//       console.log(elem.comment);
//     });
//   }, 1000);

//   // отправлю коммит через плагин vs code

//   return (
//     <>
//       <Grid sx={{ width: "40%" }} ml="40px" my="20px">
//         <Typography variant="h4">Filter</Typography>
//       </Grid>
//       <Grid
//         container
//         direction="row"
//         justifyContent="space-around"
//         alignItems="flex-start"
//         sx={{ width: "90%" }}
//         mx="auto"
//         my="40px"></Grid>
//       {com ? com.map(elem => <Typography>{elem.comment}</Typography>) : null}
//     </>
//   );
// };

// export default CommentList;
