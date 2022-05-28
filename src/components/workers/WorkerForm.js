import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const initialState = {
  name: "emanuel",
  lastname: "vasquez",
  age: "",
  description: "",
};

export const WorkerForm = () => {
  const [formValues, setFormValues] = useState(initialState);

  const { name, lastname, age, description } = formValues;

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <Container maxWidth="false">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "100wh" }}>
          <Paper>
            <Typography variant="h4" align="center">
              Page of workers
            </Typography>
            <Box
              //   component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Card sx={{ minWidth: 275 }} align="center">
                <CardContent>
                  <form onSubmit={onSubmit}>
                    <TextField
                      sx={{ mb: 1.5 }}
                      required
                      label="name"
                      variant="outlined"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                    />
                    <TextField
                      sx={{ mb: 1.5 }}
                      required
                      label="lastname"
                      variant="outlined"
                      name="lastname"
                      value={lastname}
                      onChange={handleInputChange}
                    />
                    <TextField
                      sx={{ mb: 1.5 }}
                      required
                      label="age"
                      variant="outlined"
                      type="number"
                      name="age"
                      value={age}
                      onChange={handleInputChange}
                    />
                    <TextField
                      sx={{ mb: 1.5, width: "26ch" }}
                      required
                      label="description"
                      multiline
                      maxRows={2}
                      name="description"
                      value={description}
                      onChange={handleInputChange}
                      // value={value}
                      // onChange={handleChange}
                    />

                    <Button type="submit" variant="contained">
                      Save worker
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
