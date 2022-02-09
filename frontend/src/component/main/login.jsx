import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, TextField, Typography } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@mui/system";

const Login = () => {
  return (
    <>
      <Container
        maxWidth=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:"url(https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)",
          backgroundSize: "cover",
          height: '100vh'
        }}
      >
          <Box
            sx={{
              display: "flex",
              // justifyContent: 'center',
              alignItems: "center",
              flexDirection: "column",
              width: 400,
              height: 500,
              padding: 5,
              margin: 15,
              // border: '2px solid ',
              backdropFilter: "blur(100px)",
            }}
          >
            <Typography
              variant="h3"
              color="initial"
              style={{ marginBottom: 50 }}
            >
              Login
            </Typography>
            <>
              <TextField
                variant="outlined"
                color="secondary"
                label="Email"
                type="email"
                style={{ marginTop: 20 }}
              >
              </TextField>
              <TextField
                variant="outlined"
                color="secondary"
                label="Password"
                type="password"
                style={{ marginTop: 20 }}
              ></TextField>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: 20 }}
                size="large"
              >
                Login
              </Button>
            </>
          </Box>
      </Container>
    </>
  );
};

export default Login;
