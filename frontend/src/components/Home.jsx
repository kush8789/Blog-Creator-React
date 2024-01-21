import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you are using react-router-dom

const Home = ({ posts, messages, form }) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h1>Welcome to BLOG CREATER</h1>
          <p className="lead">Join the conversation and share your thoughts</p>
          <Link to="/posts" className="btn btn-primary">
            Start a New BLOG
          </Link>
        </div>
        <div className="col-12 my-2">
          <h2 className="text-center">About Our Website</h2>
          <p className="text-wrap">
            Welcome to our Blog Creater website! Our goal is to provide a platform where people can come together to share their thoughts, ideas, and opinions on a variety of topics. Whether you're interested in politics, sports, entertainment, or anything in between, we've got you covered.
          </p>
          <p className="text-wrap">
            Our website is designed to be easy to use and navigate, so you can quickly find the posts that interest you. We believe in fostering a community where everyone's voice is heard, and we encourage respectful and constructive dialogue.
          </p>
        </div>
      </div>

      {posts && (
        <div className="container">
          <div className="col-12">
            <h2 className="text-center">Recent Posts</h2>
            <ul className="list-group">
              {posts.map((post) => (
                <li key={post.id} className="list-group-item">
                  <p className="text-wrap">
                    <Link className="text-decoration-none" to={post.url} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </Link>
                  </p>
                  <span>
                    Author- <Link className="text-decoration-none" to={`/posts/userposts/${post.author.id}`}>{post.author.username}</Link>
                  </span>
                  <span>Date- {post.pub_date_pretty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact">
        <div className="container d-flex flex-wrap justify-content-center flex-column my-4">
          <div className="row center">
            <div className="col-lg-12 text-center">
              <h2>Contact Us</h2>
            </div>
            <div className="col-md-6 offset-md-3">
              {messages && (
                <div className="messages">
                  {messages.map((message, index) => (
                    <div key={index} className={message.tags}>
                      {message}
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form id="contact-form" method="POST" role="form">
                {/* Add your logic to handle form submission */}
                {form}
                <button type="submit" className="btn btn-primary btn-block m-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
