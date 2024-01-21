import React from 'react'
import { Link } from 'react-router-dom';
import defautLogo from '../logo.svg';

const PostList = ({ posts }) => {
  return (
    <div className='container d-flex justify-content-center flex-wrap my-4 mb-5'>
      {posts ? (posts.map((post) => (
        <div key={post.id} className="com-md-6 card m-3">
          <div className="d-flex justify-content-center align-items-center">
            {post.image ? (
              <img src={post.image} className="card-img-top p-2" alt={post.title.slice(0, 20)} style={{ width: '18rem' }} />
            ) : (
              <img src={defautLogo} className="card-img-top" alt={post.title.slice(0, 20)} />
            )}
          </div>
          <div className="card-body">
            <Link className="text-decoration-none" to={post.url} target="_blank">
              <h6 className="card-title text-wrap">{post.title.slice(0, 50)}...</h6>
            </Link>
            <span>
              {/* <button className="btn btn-primary btn-sm" onClick={() => handleUpvote(post.id)}>
                                🔺
                            </button>
                            {post.votes}
                            <button className="btn btn-secondary btn-sm" onClick={() => handleDownvote(post.id)}>
                                🔻
                            </button> */}
            </span>
            <p className="card-text text-wrap">{post.description.slice(0, 60)}...</p>
          </div>
          <div className="card-footer bg-transparent border-top">
            <div className="d-flex justify-content-between align-items-center">
              <div className="meta">
                <span className='m-2'>
                  Author-{' '}
                  <Link className="text-decoration-none" to={`/userposts/${post.author}`}>
                    {post.author}
                  </Link>
                </span>
                <span className='m-2'>Date- {new Date(post.pub_date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}</span>
              </div>
              <Link to={`/posts/details/${post.id}`} state={{ post }} className="btn btn-primary">
                More
              </Link>
            </div>
          </div>
          <form id={`upvote${post.id}`} method="post" action={`/posts/upvote/${post.id}`}>
            <input type="hidden" name="next" value={window.location.pathname} />
          </form>
          <form id={`downvote${post.id}`} method="post" action={`/downvote/${post.id}`}>
            <input type="hidden" name="next" value={window.location.pathname} />
          </form>
        </div>
      ))) : (<h1 className='text-center'>Bye</h1>)}
    </div>
  )
}

export default PostList;