import React, { useState } from 'react';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // signup code here
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "connect.sid=s%3AzKUsF22gWCO7AkY7S_wGTQ7qHYkE0vua.Vlb1Q65wTbYpTHMrP9fzSDfvTkKVWPyI4g8GpV%2FW7f8");

var raw = JSON.stringify({
  "input": {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "phone": phone,
    "password": password
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://shopify6.interplay.iterate.ai/createCustomer", requestOptions)
  .then(response => response.json())
  .then(result => {
    //window.location.href = '/';
    console.log(result)
})
  .catch(error => console.log('error', error));
  };

  return (
    <div className="signUp-container">
      <div class="account section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="login-form border p-5">
                <div class="text-center heading">
                  <h2 class="mb-2">Sign Up</h2>
                  <p class="lead">
                    Already have an account? <a href="/login"> Login now</a>
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div class="form-group mb-4">
                    <label for="#">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter First Name"
                      required
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="#">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Last Name"
                      required
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="#">Phone</label>
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Enter Phone Number"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="#">Enter Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter Email Address"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="#">Enter Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter Password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>

                  <button type="submit" class="btn btn-main mt-3 btn-block">
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
