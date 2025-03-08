// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted with:", email, password);
    };

    return (
        <div className="login-page">
            <Link to="/" className="back-to-home">
                ← Back to Home
            </Link>

            <div className="floating-cards">
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">New Income</div>
                        <div className="card-value">$40,832.32</div>
                        <div className="card-change">
                            ↑ 13.6% from last month
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">Impressions</div>
                        <div className="card-value">3,259</div>
                        <div className="card-change">
                            ↑ 6.22% from last month
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">New Users</div>
                        <div className="card-value">218</div>
                        <div className="card-change">
                            ↑ 8.2% from last month
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-container">
                <div className="login-logo">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect
                            width="32"
                            height="32"
                            rx="8"
                            fill="#5865f2"
                        ></rect>
                        <path
                            d="M8 16L14 22L24 12"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <h1>ONLY JOBS</h1>
                </div>

                <h2>Sign in to ONLY JOBS</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="remember-forgot">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="forgot-password">
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign in
                    </button>

                    <div className="divider">Or login with</div>

                    <div className="social-login">
                        <button type="button" className="social-button">
                            <svg width="20" height="20" viewBox="0 0 20 20">
                                <path
                                    d="M18.171 8.368h-8.171v3.207h4.908c-0.376 2.247-2.159 3.207-4.908 3.207-2.881 0-5.248-2.367-5.248-5.248s2.367-5.248 5.248-5.248c1.201 0 2.379 0.411 3.305 1.158l2.435-2.435c-1.584-1.584-3.813-2.621-6.293-2.621-5.094 0-9.246 4.152-9.246 9.246s4.152 9.246 9.246 9.246c4.358 0 8.645-3.123 8.645-9.246 0-0.615-0.066-1.23-0.189-1.824z"
                                    fill="#4285f4"
                                ></path>
                            </svg>
                            Google
                        </button>
                        <button type="button" className="social-button">
                            <svg width="20" height="20" viewBox="0 0 20 20">
                                <path
                                    d="M17.5 4.999c-0.624 0.287-1.287 0.477-1.979 0.563 0.712-0.439 1.259-1.134 1.516-1.961-0.666 0.406-1.401 0.698-2.186 0.856-0.627-0.688-1.522-1.117-2.512-1.117-1.901 0-3.442 1.541-3.442 3.442 0 0.27 0.029 0.532 0.087 0.783-2.861-0.144-5.399-1.514-7.098-3.597-0.296 0.518-0.466 1.122-0.466 1.764 0 1.193 0.607 2.247 1.531 2.864-0.564-0.017-1.094-0.173-1.558-0.431v0.043c0 1.67 1.189 3.062 2.764 3.379-0.289 0.081-0.593 0.123-0.907 0.123-0.222 0-0.438-0.021-0.649-0.062 0.438 1.37 1.71 2.366 3.217 2.394-1.179 0.924-2.662 1.474-4.276 1.474-0.278 0-0.552-0.016-0.822-0.048 1.524 0.977 3.334 1.547 5.279 1.547 6.334 0 9.797-5.247 9.797-9.797 0-0.149-0.003-0.298-0.010-0.445 0.673-0.486 1.257-1.094 1.719-1.787z"
                                    fill="#1da1f2"
                                ></path>
                            </svg>
                            Apple
                        </button>
                    </div>

                    <div className="signup-prompt">
                        Don't have an account? <a href="#">Sign Up now</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
