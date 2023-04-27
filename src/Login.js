import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    //  login code here
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Cookie',
      'connect.sid=s%3AzKUsF22gWCO7AkY7S_wGTQ7qHYkE0vua.Vlb1Q65wTbYpTHMrP9fzSDfvTkKVWPyI4g8GpV%2FW7f8'
    );

    const raw = JSON.stringify({
      input: {
        "email": email,
        "password": password,
      },
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://shopify6.interplay.iterate.ai/accessToken', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Handle successful login here, for example by redirecting the user to another page
        console.log(result);
        //window.location.href = '/';
      })
      .catch((error) => {
        // Handle login error here, for example by showing an error message to the user
        console.log('error', error);
      });
  };

  return (
    <div className="login-container">
      <div className="account section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="login-form border p-5">
                <div className="text-center heading">
                  <h2 className="mb-2">Login</h2>
                  <p className="lead">
                    Don’t have an account? <a href="/signup">Create a free account</a>
                  </p>
                </div>

                <form>
                  <div className="form-group mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      required
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Enter Password</label>
                    <a className="float-right" href="/forgot-password">
                      Forgot password?
                    </a>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      required
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>

                  <button className="btn btn-main mt-3 btn-block" onClick={handleLoginClick}>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
