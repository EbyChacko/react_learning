import { useState } from 'react';

function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // Get input name and value
        setFormData({
            ...formData,
            [name]: value, // Update corresponding key dynamically
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="wrapper">
            <h4 className="days">Day 4</h4>
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
                <label>Email :
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label><br></br>
                <label>Password :
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label><br></br>
                <button type="submit">Register</button>
            </form>
        </div>


    );
}

export default SignupForm;