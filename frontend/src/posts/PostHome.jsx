import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PostList from './PostList';
import { useState, useEffect } from 'react';
import POSTAPI from './postapi';


const PostHome = () => {
  const [posts, setPosts] = useState([]);
  const [sortOptions, setSortOptions] = useState({
    name: false,
    date: false,
    vote: false,
  });

  const fetchPost = async (sortby) => {
    try {
      const response = await POSTAPI.postfetch(sortby);
      setPosts(response.data.results);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  const handleSort = async (sortby) => {
    setSortOptions((prevSortOptions) => ({
      name: sortby === 'name' ? !prevSortOptions.name : false,
      date: sortby === 'date' ? !prevSortOptions.date : false,
      vote: sortby === 'vote' ? !prevSortOptions.vote : false,
    }));
    const activeSorts = Object.keys(sortOptions).filter((key) => sortOptions[key]);
    fetchPost(activeSorts.length > 0 ? activeSorts.join(',') : '');
    // if ((sortOptions.name && sortby === 'name') || (sortOptions.date && sortby === 'date') || (sortOptions.vote && sortby === 'vote')) {
    //   fetchPost(sortby);
    // }
    // else {
    //   fetchPost();
    // }
  }


  const handleUpvote = (postId) => {
    // Add logic to handle upvote
  };

  const handleDownvote = (postId) => {
    // Add logic to handle downvote
  };

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 offset-sm-2">
          {/* Nav for home page */}
          {/* <button className={`btn btn-${currCol} m-2`} onClick={() => handleSort('name')}>
            <i className="fas fa-sort-alpha-down"></i> Name
          </button>
          <button className={`btn btn-${currCol} m-2`} onClick={() => handleSort('date')}>
            <i className="far fa-clock"></i> Date
          </button>
          <button className={`btn btn-${currCol} m-2`} onClick={() => handleSort('vote')}>
            <i className="fas fa-poll"></i> Vote
          </button> */}

          <button className={`btn btn-${sortOptions.name ? 'primary' : 'secondary'} m-2`} onClick={() => handleSort('name')}>
            <i className="fas fa-sort-alpha-down"></i> Name
          </button>
          <button className={`btn btn-${sortOptions.date ? 'primary' : 'secondary'} m-2`} onClick={() => handleSort('date')}>
            <i className="far fa-clock"></i> Date
          </button>
          <button className={`btn btn-${sortOptions.vote ? 'primary' : 'secondary'} m-2`} onClick={() => handleSort('vote')}>
            <i className="fas fa-poll"></i> Vote
          </button>


          <Link to="/posts/createpost" className="btn btn-success m-2 float-end" role="button">
            Create <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>
      {posts && (
        <>

          <div className="container d-flex justify-content-center flex-wrap my-4">
            <PostList posts={posts} />
          </div>
          {/* 
          <div className="container d-flex justify-content-center flex-wrap">
            <div className="mt-3">
              <ul className="pagination">
                {params.page > 1 && (
                  <>
                    <li className="page-item">
                      <a className="page-link" href={`?page=1&${params}`}>
                        First
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href={`?page=${params.page - 1}&${params}`}>
                        Previous
                      </a>
                    </li>
                  </>
                )}

                <li className="page-item active">
                  <span className="page-link">{params.page}</span>
                </li>

                {params.page < params.num_pages && (
                  <>
                    <li className="page-item">
                      <a className="page-link" href={`?page=${params.page + 1}&${params}`}>
                        Next
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href={`?page=${params.num_pages}&${params}`}>
                        Last
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div> */}
        </>
      )}

      {!posts && (
        <div style={{ height: '22rem' }}>
          <h1 className="text-center my-4">No post found</h1>
        </div>
      )}
    </div>
  );
};

export default PostHome;
