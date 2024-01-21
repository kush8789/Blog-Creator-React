import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you are using react-router-dom

const UserPosts = ({ author, posts, params }) => {
  return (
    <div className="container">
      {posts && posts.length > 0 ? (
        <>
          <h1 className="text-center my-4">All Posts By {author.username}</h1>
          <div className="container d-flex justify-content-center flex-wrap my-4">
            {posts.map((post) => (
              <div key={post.id} className="card m-4" style={{ width: '18rem' }}>
                {post.image ? (
                  <img src={post.image.url} className="card-img-top" alt={post.title} />
                ) : (
                  <img src="..." className="card-img-top" alt="..." />
                )}
                <div className="card-body text-center">
                  <Link className="text-decoration-none" to={post.url} target="_blank">
                    <h6 className="card-title text-wrap">{post.title}</h6>
                  </Link>
                  <span>
                    <button className="btn btn-primary btn-sm" onClick={() => handleUpvote(post.id)}>
                      🔺
                    </button>
                    {post.votes}
                    <button className="btn btn-secondary btn-sm" onClick={() => handleDownvote(post.id)}>
                      🔻
                    </button>
                  </span>
                  <p className="card-text text-wrap">{post.description}</p>
                  <span>
                    Author-{' '}
                    <Link className="text-decoration-none" to={`/posts/userposts/${post.author.id}`}>
                      {post.author.username}
                    </Link>
                  </span>
                  <span>Date- {post.pub_date_pretty}</span>
                  <Link to={`/posts/post/${post.id}`} className="btn btn-primary">
                    More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="container d-flex justify-content-center flex-wrap">
            <nav className="mt-3">
              <ul className="pagination">
                {posts.has_previous && (
                  <>
                    <li className="page-item">
                      <Link className="page-link" to={`?page=1&${params}`}>
                        First
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={`?page=${posts.previous_page_number}&${params}`}>
                        Previous
                      </Link>
                    </li>
                  </>
                )}

                <li className="page-item active">
                  <span className="page-link">{posts.number}</span>
                </li>

                {posts.has_next && (
                  <>
                    <li className="page-item">
                      <Link className="page-link" to={`?page=${posts.next_page_number}&${params}`}>
                        Next
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to={`?page=${posts.paginator.num_pages}&${params}`}>
                        Last
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </>
      ) : (
        <div style={{ height: '22rem' }}>
          <h1 className="text-center my-4">No posts found</h1>
        </div>
      )}
    </div>
  );
};

export default UserPosts;
