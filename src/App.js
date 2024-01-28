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
    <div className='outerdiv'>
        <div className="App">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>

        <label for="name">Enter your name:</label>
        <input
          placeholder='Type here'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />  

        <label for="email"> Enter your email:</label>
      
        <input
          placeholder='Type here'
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
        />
        
        

        <label for="phone">Enter your phone number:</label>
        <input
          placeholder='Type here'
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
        />

        <label for="message">Enter your message: </label>
        <textarea
          id="message"
          placeholder='Type here'
            name="message"
            value={formData.message}
            onChange={handleChange}
        />
      <br></br>
        <button className='submitbtn' type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
}

export default App;
