import { Button, Container } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { Box } from "@mui/system";

const Signup = () => {
  const url = app_config.api_url;
  const Registerform = {
    fullname: "",
    email: "",
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

    fetch(url + "/user/add", reqOptions)
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
      <Container maxWidth="lg">
        <Box
          style={{
            margin: "5rem",
            padding: "2rem",
            display: "flex",
            height: "50vh",
          }}
        >
          <Formik initialValues={Registerform} onSubmit={formSubmit}>
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit} style={{display:"flex" , flexDirection:"column" , justifyContent: "center" , alignItems:"center" , margin:"auto"}}>
                <input
                  placeholder="FullName"
                  className="form-control"
                  id="fullname"
                  onChange={handleChange}
                  value={values.fullname}
                  style={{
                    marginBottom:"2rem",
                    height:"50px",
                    padding:"8px",
                    borderRadius:"10px",
                    fontSize:"15px",

                  }}
                />

                <input
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  style={{
                    marginBottom:"2rem",
                    height:"50px",
                    padding:"8px",
                    borderRadius:"10px",
                    fontSize:"15px",

                  }}
                />

                <input
                  className="form-control"
                  placeholder="password"
                  id="password"
                  autoComplete="off"
                  onChange={handleChange}
                  value={values.password}
                  style={{
                    marginBottom:"2rem",
                    height:"50px",
                    padding:"8px",
                    borderRadius:"10px",
                    fontSize:"15px",

                  }}
                  type="password"
                />
                <Button variant="contained" color="success" type="submit"
                  style={{
                    marginBottom:"2rem",
                    height:"50px",
                    padding:"8px",
                    borderRadius:"10px",
                    fontSize:"15px",
                    cursor: "pointer"
                  }}>
                  register
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
