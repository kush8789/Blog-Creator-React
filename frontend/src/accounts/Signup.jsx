import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountAPI from './authapi';

const Signup = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            if(formData.password !=formData.password2){
                return;
            }
            const response = await AccountAPI.signup(formData);
            console.log();
    
            setFormData({
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: '',
                password2: '',
            });
            
        } catch (error) {
            console.log(error);
            throw error;
        }

    };

    return (
        <div className="container d-flex flex-column justify-content-center my-4 flex-wrap">
            <h3 className="text-center my-2">Signup to BLOG CREATER</h3>
            <div className="row center">
                <div className="col-md-6 offset-md-3">
                    <p>Already have an account? <Link to={"/accounts/Login"}>Login Here</Link></p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first_name">First_name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter First_name"
                                value={formData.first_name}
                                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last_name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter Last_name"
                                value={formData.last_name}
                                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Enter Username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                placeholder="Confirm Password"
                                value={formData.password2}
                                onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );

};

export default Signup;