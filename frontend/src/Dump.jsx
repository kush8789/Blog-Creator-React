// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';


// const PostDetail = ({ post }) => {
//   return (
//     <div className="container d-flex justify-content-center flex-wrap my-4">
//       {post ? (
//         post.map((post) => (
//           <div key={post.id} className="card m-4" style={{ width: '18rem' }}>
//             {post.image ? (
//               <img src={post.image.url} className="card-img-top" alt={post.title} style={{ width: '18rem' }} />
//             ) : (
//               <img src="..." className="card-img-top" alt="..." />
//             )}
//             <div className="text-center">
//               <Link className="text-decoration-none" to={post.url} target="_blank">
//                 <h6 className="card-title text-wrap">{post.title}</h6>
//               </Link>
//               {/* <span>
//                 <button className="btn btn-primary btn-sm" onClick={() => handleUpvote(post.id)}>
//                   🔺
//                 </button>
//                 {post.votes}
//                 <button className="btn btn-secondary btn-sm" onClick={() => handleDownvote(post.id)}>
//                   🔻
//                 </button>
//               </span> */}
//               <p className="text-wrap">{post.description}</p>

//               <span>
//                 Author-{' '}
//                 <Link className="text-decoration-none" to={`/posts/userposts/${post.author.id}`}>
//                   {post.author.username}
//                 </Link>
//               </span>
//               <span>Date- {post.pub_date}</span>
//             </div>
//             <form id={`upvote${post.id}`} method="post" action={`/posts/upvote/${post.id}`}>
//               <input type="hidden" name="next" value={window.location.pathname} />
//             </form>
//             <form id={`downvote${post.id}`} method="post" action={`/posts/downvote/${post.id}`}>
//               <input type="hidden" name="next" value={window.location.pathname} />
//             </form>
//           </div>
//         ))
//       ) : (
//         <div style={{ height: '22rem' }}>
//           <h1 className="text-center my-4">No post found</h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostDetail;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import PostList from './PostList';
// import { useState, useEffect } from 'react';
// import POSTAPI from './postapi';

// const PostHome = () => {
//   const [posts, setPosts] = useState([]);

//   const fetchPost = async () => {
//     try {
//       const response = await POSTAPI.postfetch();
//       console.log(response.data);
//       setPosts(response.data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchPost();
//   }, []);



//   const handleUpvote = (postId) => {
//     // Add logic to handle upvote
//   };

//   const handleDownvote = (postId) => {
//     // Add logic to handle downvote
//   };

//   return (
//     <div className="container">
//       <div className="row my-4">
//         <div className="col-md-8 offset-sm-2">
//           {/* Nav for home page */}
//           <button className={`btn btn-secondary m-2`}>
//             <i className="fas fa-sort-alpha-down"></i> Name
//           </button>
//           <button className={`btn btn-secondary m-2`}>
//             <i className="far fa-clock"></i> Date
//           </button>
//           <button className={`btn btn-secondary m-2`}>
//             <i className="fas fa-poll"></i> Vote
//           </button>
//           <Link to="/posts/createpost" className="btn btn-success m-2 float-end" role="button">
//             Create <i className="fas fa-plus"></i>
//           </Link>
//           {/* Nav for home page */}
//         </div>
//       </div>
//       {posts && (
//         <>

//           <div className="container d-flex justify-content-center flex-wrap my-4">
//             <PostList posts={posts} />
//           </div>
//           {/* 
//           <div className="container d-flex justify-content-center flex-wrap">
//             <div className="mt-3">
//               <ul className="pagination">
//                 {params.page > 1 && (
//                   <>
//                     <li className="page-item">
//                       <a className="page-link" href={`?page=1&${params}`}>
//                         First
//                       </a>
//                     </li>
//                     <li className="page-item">
//                       <a className="page-link" href={`?page=${params.page - 1}&${params}`}>
//                         Previous
//                       </a>
//                     </li>
//                   </>
//                 )}

//                 <li className="page-item active">
//                   <span className="page-link">{params.page}</span>
//                 </li>

//                 {params.page < params.num_pages && (
//                   <>
//                     <li className="page-item">
//                       <a className="page-link" href={`?page=${params.page + 1}&${params}`}>
//                         Next
//                       </a>
//                     </li>
//                     <li className="page-item">
//                       <a className="page-link" href={`?page=${params.num_pages}&${params}`}>
//                         Last
//                       </a>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div> */}
//         </>
//       )}

//       {!posts && (
//         <div style={{ height: '22rem' }}>
//           <h1 className="text-center my-4">No post found</h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostHome;