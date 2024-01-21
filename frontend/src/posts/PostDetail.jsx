// PostDetail.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import defautLogo from '../logo.svg';


const PostDetail = () => {
  const location = useLocation();
  const post = location?.state?.post;

  if (!post) {
    return (
      <div style={{ height: '22rem' }}>
        <h1 className="text-center my-4">No post found</h1>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center flex-wrap my-4">
      <div key={post.id} className="m-4">
        {post.image ? (
          <img src={post.image} className="card-img-top" alt={post.title.slice(0, 14)} style={{ width: '18rem' }} />
        ) : (
          <img src={defautLogo} className="card-img-top" alt={post.title.slice(0, 14)} />
        )}
         <Link className="text-decoration-none" to={post.url} target="_blank">
              <h6 className="card-title text-wrap p-2">{post.title}</h6>
            </Link>
        {/* <span>
                <button className="btn btn-primary btn-sm" onClick={() => handleUpvote(post.id)}>
                  🔺
                </button>
                {post.votes}
                <button className="btn btn-secondary btn-sm" onClick={() => handleDownvote(post.id)}>
                  🔻
                </button>
              </span> */}
        <p className="text-wrap p-2">{post.description}</p>

        <span className='p-2'>
          Author-{' '}
          <Link className="text-decoration-none" to={`/userposts/${post.author}`}>
            {post.author}
          </Link>
        </span>
        <span className='p-2'>Date- {new Date(post.pub_date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}</span>
      </div>
      <form id={`upvote${post.id}`} method="post" action={`/posts/upvote/${post.id}`}>
        <input type="hidden" name="next" value={window.location.pathname} />
      </form>
      <form id={`downvote${post.id}`} method="post" action={`/posts/downvote/${post.id}`}>
        <input type="hidden" name="next" value={window.location.pathname} />
      </form>
    </div>
  );
};

export default PostDetail;
