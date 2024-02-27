import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic (e.g., validation, API call)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
