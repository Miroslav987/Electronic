// import React from "react";

// const Comments = () => {
//   let comments = [];
//   loadComments();

//   document.getElementById("comment-add").onclick = function () {
//     let commentName = document.getElementById("comment-name");
//     let commentBody = document.getElementById("comment-body");

//     let comment = {
//       name: commentName.value,
//       body: commentBody.value,
//       time: Math.floor(Date.now() / 1000),
//     };

//     commentName.value = "";
//     commentBody.value = "";

//     comments.push(comment);
//     saveComments();
//     showComments();
//   };

//   function saveComments() {
//     localStorage.setItem("comments", JSON.stringify(comments));
//   }

//   function loadComments() {
//     if (localStorage.getItem("comments"))
//       comments = JSON.parse(localStorage.getItem("comments"));
//     showComments();
//   }

//   function showComments() {
//     let commentField = document.getElementById("comment-field");
//     let out = "";
//     comments.forEach(function (item) {
//       out += `<p class="text-right small"><em>${timeConverter(
//         item.time
//       )}</em></p>`;
//       out += (
//         <p class="alert alert-primary" role="alert">
//           ${item.name}
//         </p>
//       );
//       out += (
//         <p class="alert alert-success" role="alert">
//           ${item.body}
//         </p>
//       );
//     });
//     commentField.innerHTML = out;
//   }

//   function timeConverter(UNIX_timestamp) {
//     let a = new Date(UNIX_timestamp * 1000);
//     let months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     let year = a.getFullYear();
//     let month = months[a.getMonth()];
//     let date = a.getDate();
//     let hour = a.getHours();
//     let min = a.getMinutes();
//     let sec = a.getSeconds();
//     let time =
//       date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
//     return time;
//   }
//   return (
//     <>
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-12">
//             <h2 class="text-center">Comment</h2>
//           </div>
//           <div class="col-lg-6">
//             <div id="comment-field"></div>
//           </div>
//           <div class="col-lg-6">
//             <form>
//               <div class="form-group">
//                 <label for="comment-name">Name:</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="comment-name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="comment-body">Comment:</label>
//                 <textarea
//                   type="password"
//                   class="form-control"
//                   id="comment-body"
//                   placeholder="comment"></textarea>
//               </div>
//               <div class="form-group form-check text-right">
//                 <button type="submit" id="comment-add" class="btn btn-primary">
//                   add Comment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Comments;
