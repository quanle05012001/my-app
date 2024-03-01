import React, { useState } from 'react';
import StyledInput from '../components/StyledInput';
import Button from '../components/StyledButton';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Handle form validation and submission here
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <StyledInput
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <StyledInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <StyledInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  };
  
  export default Register;