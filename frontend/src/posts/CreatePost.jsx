import POSTAPI from './postapi';
import React, { useState } from 'react';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    image: null
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(formData);
      const response = await POSTAPI.postcreate(formData);
      console.log(response);
      // Add your logic to send formDataToSend to the server using fetch or axios

      // Clear the form fields
      setFormData({
        title: '',
        url: '',
        description: '',
        image: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    // Clear the form fields
    setFormData({
      title: '',
      url: '',
      description: '',
      image: null
    });

    // Clear the file input field (if applicable)
    if (document.getElementById('image-input')) {
      document.getElementById('image-input').value = '';
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center my-4 flex-wrap">
      <h3 className="text-center my-2">New Post</h3>
      <div className="row center">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            {/* Render form fields */}
            <input
              className='form-control'
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <input
              className='form-control'
              type="url"
              name="url"
              placeholder="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            />

            <input
              className='form-control'
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            {/* Add other form fields (Url, description) */}

            <input
              className='form-control'
              type="file"
              name="image"
              id="image-input"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
            />

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-danger" onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
