import React, { useContext, useState } from 'react';
import { AuthContext } from 'src/context/AuthContext';

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic (e.g., validation)
        login(formData); // Assuming formData contains user credentials
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
