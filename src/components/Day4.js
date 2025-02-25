import { useState } from 'react';

function Day4() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = '';
        if (name === 'username' && value.trim() === '') {
            error = 'Name is required';
        } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'Invalid email address';
        } else if (name === 'message' && value.trim() === '') {
            error = 'Message is required';
        }

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: error,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="wrapper">
            <h4 className="days">Day 4</h4>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Username :
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label><br></br>
                {errors.username && <span className="error">{errors.username}</span>}
                <br></br>
                <label>Email :
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label><br></br>
                {errors.email && <span className="error">{errors.email}</span>}
                <br></br>
                <label>Message :
                    <input
                        type="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </label><br></br>
                {errors.message && <span className="error">{errors.message}</span>}
                <br></br>
                <button type="submit">Register</button>
            </form>
        </div>


    );
}

export default Day4;