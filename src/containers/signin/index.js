import {
  Grid,
  TextField,
  Button,
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LockOutlined } from "@mui/icons-material";
import { addUser } from "../redux/actions";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer.users);
  const { register, handleSubmit } = useForm();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "280px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const onSubmit = (data) => {
    const { email, password } = data;
    let retrievedObject = localStorage.getItem(email);
    let parsedObj = JSON.parse(retrievedObject);

    if (parsedObj.email === email && password === parsedObj.password) {
      dispatch(addUser(parsedObj));
      navigate("/");
    } else {
      alert("no user");
    }
  };

  return (
    <Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={10} style={paperStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlined />
                </Avatar>
                <h2>Sign In</h2>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="username"
                {...register("email")}
                placeholder="Enter username"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="password"
                {...register("password")}
                placeholder="Enter password"
                type="password"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Sign in
              </Button>
              <Typography mt={2} onClick={() => navigate("/signup")}>
                {" "}
                Do you have an account ?<Link> Sign up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Grid>
  );
};

export default Signin;
