import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import blogPng from "../assets/blok.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: 13,
    height: 200,
    width: 200,
    backgroundColor: "#046582",
  },
  blogImg: {
    width: 200,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

export default function BlogForm({ newBlog, setNewBlog, newBlogHandler }) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={blogPng} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          ── New Blog ──
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={newBlog.title}
                autoFocus
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="image"
                label="Image URL"
                type="text"
                id="image"
                value={newBlog.image}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                value={newBlog.content}
                fullWidth
                rows={15}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                // defaultValue="Default Value"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={newBlogHandler}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
