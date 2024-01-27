import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', formData);
    
    setFormData({
      name:'',
      email:'',
      phone:'',
      message:''
    });
  };

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <br></br>
          <input
          placeholder='Type here'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Enter your email:
          <br></br>
          <input
          placeholder='Type here'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Enter your phone number:
          <br></br>
          <input
          placeholder='Type here'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Enter your message:
          <br></br>
          <textarea
          placeholder='Type here'
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />

        <button className='submitbtn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
