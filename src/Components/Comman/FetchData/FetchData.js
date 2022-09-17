// // import axios from 'axios';


// // export const FetchData = (url) => {
// //     const [data, setData] = useState([]);

// //     const api = async() => {
// //         const response = await axios.create().get(url);
// //         if (response.status === 200 || response.status === 201) {
// //           setData(response.data);
// //           console.log('Heloo');
// //           return response.data;
// //         } else return [];
// //       }
    
// //       useEffect(() => {
// //         api();
// //       }, []);
    
  
// //   return ({data})
// // }

// // "http://localhost:3333/BlogDb"


// import React from 'react'

// export const FetchData = () => {

//   const

//   const api = async () => {
//     await axios.get("http://localhost:3333/BlogDb").then((response) => {
//       setBlogs(response.data);
//       setFilterBlogs(response.data);
//     })
//   }
//   useEffect(() => {

//     api();
//   }, []);

//   return (
//     <div>FetchData</div>
//   )
// }

