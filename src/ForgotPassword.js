import React, { useState, useEffect } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "success") {
      // handle success case
    } else if (status === "error") {
      // handle error case
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "connect.sid=s%3AzKUsF22gWCO7AkY7S_wGTQ7qHYkE0vua.Vlb1Q65wTbYpTHMrP9fzSDfvTkKVWPyI4g8GpV%2FW7f8"
    );

    var raw = JSON.stringify({
      email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://shopify6.interplay.iterate.ai/recoverCustomer",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.success) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        console.log("error", error);
        setStatus("error");
      });
  };

  return (
    <div className="forgot-password-container">
      <div class="account section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="login-form border p-5">
                <div class="text-center heading">
                  <h3 class="mb-2 h2">Password Recovery</h3>
                  <p class="lead">
                    Please enter the email address for your account. A
                    verification email will be sent to you. Once you have received
                    the verification mail, you will be able to choose a new
                    password for your account.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div class="form-group mb-4">
                    <label for="#">Enter Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter Email Address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button class="btn btn-main mt-3 btn-block">
                    Send Instructions
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

export default ForgotPassword;
