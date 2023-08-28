import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import women from "../static/women.jpg";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    message: Yup.string().required("Message is required"),
  });

const Contact = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      };
      const handleSubmit = (values,{ resetForm }) => {
        console.log(values);
        resetForm();
      };
  return (
    <Stack direction={"row"}>
      <Box
        sx={{
          backgroundImage: `url(${women})`,
          backgroundRepeat: "no repeat",
          backgroundColor: "#BCE29E",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
      <Box mt={5} mb={5} sx={{ background: "#A9907E", opacity:0.7, width:"50%" ,borderRadius:"20px"}}>
      <Box sx={{p:"40px"}}>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
        >
        <Form >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item >
                <Field
              name="firstName"
              as={TextField}
              label="First Name"
              variant="outlined"
              fullWidth
              required
            />                
            </Grid>
             <Grid item xs={12} sm={6}>
                <Field
              name="lastName"
              as={TextField}
              label="Last Name"
              variant="outlined"
              fullWidth
              required
            />               
             </Grid>
                <Grid item xs={12} sm={6}>
                <Field
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              required
            /> 
                          
             </Grid>
             <Grid xs={12} sm={6} item>
                <Field
              name="phoneNumber"
              as={TextField}
              label="Enter your Phone Number"
              variant="outlined"
              fullWidth
              required
            />               
             </Grid> 
                <Grid item xs={12}>
                <Field
                    name="message"
                    as={TextField}
                    label="message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline // Add the multiline property here
                    rows={4} // Specify the number of rows
                    />                
                    </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" >Submit</Button>
                </Grid>

              </Grid>
            </Form>
            </Formik>
            </Box>
            </Box>
      </Box>
    </Stack>
  );
};

export default Contact;
