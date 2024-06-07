import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'

const FormComponent = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNo, setPhoneNo] = useState('');
  const [panNo, setPanNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [errors, setErrors] = useState({});

  const countries = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];
  const [country, setCountry] = useState(countries[0].value);
  const cities = [
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    { value: 'London', label: 'London' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Birmingham', label: 'Birmingham' },
    { value: 'Leeds', label: 'Leeds' },
  ];
  const [city, setCity] = useState(cities[0].value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      username,
      email,
      password,
      phoneNo,
      country,
      city,
      panNo,
      aadharNo,
    };
    console.log(formData);
    const errorObject = validateForm(formData);
    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      navigate('/success', { state: { formData }, replace: true});
    }
    };
    const validateForm = (formData) => {
        const errorObject = {};
    
        if (!formData.firstName) {
          errorObject.firstName = 'First Name is required';
        }
    
        if (!formData.lastName) {
          errorObject.lastName = 'Last Name is required';
        }
    
        if (!formData.username) {
          errorObject.username = 'Username is required';
        }
    
        if (!formData.email) {
          errorObject.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
          errorObject.email = 'Invalid Email';
        }
    
        if (!formData.password) {
          errorObject.password = 'Password is required';
        }
    
        if (!formData.phoneNo) {
          errorObject.phoneNo = 'Phone Number is required';
        }
    
        if (!formData.country) {
          errorObject.country = 'Country is required';
        }
    
        if (!formData.city) {
          errorObject.city = 'City is required';
        }
    
        if (!formData.panNo) {
          errorObject.panNo = 'PAN Number is required';
        }
    
        if (!formData.aadharNo) {
          errorObject.aadharNo = 'Aadhar Number is required';
        }
    
        return errorObject;
    };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <label className="form-label">
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input"  />
        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
      </label>
      <br />
      <label className="form-label">
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input"  />
        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
      </label>
      <br />
      <label className="form-label">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-input"  />
        {errors.username && <div className="error-message">{errors.username}</div>}
      </label>
      <br />
      <label className="form-label">
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input"  />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </label>
      <br />
      <label className="form-label">
        Password:
        <input type={showPassword? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
        <span onClick={() => setShowPassword(!showPassword)}>{showPassword? 'Hide' : 'Show'}</span>
        {errors.password && <div className="error-message">{errors.password}</div>}
      </label>
      <br />
      <label className="form-label">
        Phone Number:
        <span>(Country Code)</span>
        <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}  className="form-select">
            <option value="+91">+91 (India)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
        </select>
        <input type="tel" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="form-input" />
        {errors.phoneNo && <div className="error-message">{errors.phoneNo}</div>}
      </label>
      <br />
      <label  className="form-label" >
        Country:
        <select value={country} onChange={(e) => setCountry(e.target.value)}  className="form-select">
            {countries.map((country, index) => (<option key={index} value={country.value}>{country.label}</option>))}
        </select>
        {errors.country && <div className="error-message">{errors.country}</div>}
      </label>
      <br />
      <label  className="form-label">
        City:
        <select value={city} onChange={(e) => {setCity(e.target.value);
            console.log("City state updated:", city);
        }} className="form-select">{
            cities.map((city,index) => (<option key={index} value={city.value}>{city.label}</option>
            ))}
        </select>
        {errors.city && <div className="error-message">{errors.city}</div>}
      </label>  
      <br />
      <label className="form-label">
        PAN Number:
        <input type="text" value={panNo} onChange={(e) => setPanNo(e.target.value)} className="form-input"/>
        {errors.panNo && <div className="error-message">{errors.panNo}</div>}
      </label>
      <br />
      <label className="form-label" >
        Aadhar Number:
        <input type="text" value={aadharNo} onChange={(e) => setAadharNo(e.target.value)} className="form-input"/>
        {errors.aadharNo && <div className="error-message">{errors.aadharNo}</div>}
      </label>
      <br />
      <button type="submit" disabled={Object.keys(errors).length > 0}  className="form-submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent 