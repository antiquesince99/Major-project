import { Button } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
const Signup = () => {
  const url = app_config.api_url;
  const Registerform = {
    fullname: "",
    email: "",
    username: "",
    password: "",
    created: new Date(),
  };

  const formSubmit = (values) => {
    console.log(values);
    const reqOptions = {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    };

    fetch(url + "/Login/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Welldone!",
          text: "You have successfully registered",
        }).then(() => {
          window.location.replace("/login");
        });
      });
  };
  return (
    <div>
      <Formik initialValues={Registerform} onSubmit={formSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="FullName"
              className="form-control"
              id="fullname"
              onChange={handleChange}
              value={values.fullname}
            />

            <input
              placeholder="Email"
              className="form-control"
              id="email"
              onChange={handleChange}
              value={values.email}
            />

            <input
              placeholder="UserName"
              className="form-control"
              id="username"
              onChange={handleChange}
              value={values.username}
            />

            <input
              className="form-control"
              placeholder="*******"
              id="password"
              autoComplete="off"
              onChange={handleChange}
              value={values.password}
            />
            <Button variant="contained" color="success" type="submit">
              register
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
