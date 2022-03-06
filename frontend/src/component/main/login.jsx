import Container from "@mui/material/Container";
import { Button, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { Formik } from "formik";
import { Box } from "@mui/system";
import app_config from "../../config";

const Login = () => {
  const url = app_config.api_url;
  const loginform = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    fetch(url + "/user/getbyemail/" + values.email)
      .then((res) => res.json())
      .then((userdata) => {
        console.log(userdata);
        if (userdata) {
          if (userdata.password === values.password) {
            Swal.fire({
              icon: "success",
              title: "Hurray",
              text: "Logged in Successfully",
            })
          }
          return;
        }

        Swal.fire({
          icon: "error",
          title: "OOps!",
          text: "Email or Password Invalid!!",
        });
      });
  };
  return (
    <>
      <Container
        maxWidth=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            flexDirection: "column",
            width: 400,
            height: 500,
            padding: "5px",
            margin: "auto",
            
            // border: '2px solid ',
            backdropFilter: "blur(100px)",
          }}
        >
          <Typography variant="h3" color="initial" style={{ marginBottom: "10px" , display:"flex" }}>
            Login
          </Typography>
        
            <Formik initialValues={loginform} onSubmit={loginSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} style={{display:"flex",
                flexDirection:"column",
                padding:"10px"
                }}>
                  <TextField
                    id="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    style={{marginBottom:"2rem"}}
                    color="secondary"

                  />
                  <TextField
                    id="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    required
                    style={{marginBottom:"2rem"}}
                    color="secondary"

                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
              )}
            </Formik>
        </Box>
      </Container>
    </>
  );
};

export default Login;
