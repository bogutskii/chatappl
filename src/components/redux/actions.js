// import axios from 'axios';
//
// export function getDraws() {
//   return (dispatch) => {
//     axios
//       .get('https://draw-pixel-server.herokuapp.com/draw')
//       .then((res) => {
//         dispatch({
//           type: 'GET_DRAWS_FROM_SERVER',
//           payload: res.data,
//         });
//       })
//       .catch((err) => err);
//   };
// }
//
// export function addDrawToHistory(newDraw) {
//   return (dispatch) => {
//     axios
//       .post('https://draw-pixel-server.herokuapp.com/draw', newDraw)
//       .then((res) => {
//         dispatch({
//           // type: 'ADD_DRAW_TO_HISTORY',
//           // payload: newDraw,
//         });
//       })
//       .catch((err) => err);
//   };
// }
//
// export function deleteDraw(id) {
//   return (dispatch) => {
//     axios
//       .delete(`https://draw-pixel-server.herokuapp.com/draw/${id}`)
//       .then((res) => {
//         dispatch({
//           type: 'DELETE_DRAW_FROM_HISTORY',
//           payload: id,
//         });
//       })
//       .catch((err) => err);
//   };
// }
