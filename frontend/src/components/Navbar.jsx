import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { NavLink } from 'react-router-dom';
import AccountAPI from '../accounts/authapi';
const cookie = new Cookies();

const Navbar = () => {

    const [loggedIn, setloggedIn]= useState(false);

    useEffect(() => {
        const access = cookie.get('accesstoken');
        const refresh = cookie.get('refreshtoken');
        if(access && refresh)
        {
            setloggedIn(true);
        }
    }, [cookie]);

    const logout =async () => {
        try {
            const response = await AccountAPI.logout();
            setloggedIn(false);
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>Blog Creator</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-nav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/posts">Posts</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-nav">
                        {/* Assuming you have user information in your component state or props */}
                        {loggedIn ? (
                            <>
                                <NavLink className="nav-link active float-right" to="/posts/CreatePost">Post+</NavLink>
                                <NavLink className="nav-link active float-right" to={`/posts/userposts/`}>MyPosts</NavLink>
                                <button className="nav-link active" onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <NavLink className="nav-link active float-right" to="/accounts/login">Login</NavLink>
                                <NavLink className="nav-link active float-right" to="/accounts/signup">Signup</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar;  