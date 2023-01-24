import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Autocomplete,
  TextField,
  Select,
  Switch,
  ToggleButtonGroup,
} from "formik-mui";
import { Button } from "@mui/material";
const Basic = (props) => {
  const [screen, setScreen] = useState(false);
  const [student, setStudents] = useState(props.list);
  const [title, setTile] = useState("Update Student's Status");
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
      style={{color :'#DDDDDD' }}
      >{title}</h1>
      <Formik
        initialValues={{ name: "", status: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name || !values.status) {
            errors.name = "Required";
            errors.status = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
        //   else{
        //     alert(`${values.name} status has been updated!`)
        //   }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
                     alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Field
              component={TextField}
              type="text"
              name="name"
              helperText="Student Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <Field
              component={TextField}
              type="text"
              name="status"
              helperText="Active / Inactive"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              color="primary"
              variant="contained"
              onClick={()=>alert('Student status updated')}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <div style={{ height: 10 }} />
      <Button
        type="switch"
        onClick={() => {
          setScreen(!screen);
          {
            screen == false
              ? setTile("Add Student")
              : setTile("Update  Student Status");
          }
          
        }}
        color="secondary"
        variant="contained"
      >
        {title}
      </Button>
    </div>
  );
};

export default Basic;
