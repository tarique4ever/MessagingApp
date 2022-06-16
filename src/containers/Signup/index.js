import {
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  Avatar,
  Typography,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: "290px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#F32424" };

  const onSubmit = (data) => {
    localStorage.setItem(data.email, JSON.stringify(data));
    navigate("/signin");
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
                <h2>Sign Up</h2>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="First name"
                {...register("email")}
                placeholder="Enter first name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last name"
                {...register("email")}
                placeholder="Enter last name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                {...register("email")}
                placeholder="Enter email"
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
              <Button variant="contained"  type='submit' color="primary" fullWidth>
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography onClick={() => navigate("/signin")}>
                {" "}
                Already have an account ?<Link> Sign in</Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Grid>
  );
};

export default Signup;
