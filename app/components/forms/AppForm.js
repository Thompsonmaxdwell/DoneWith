import React from "react";
import { Formik } from "formik";
import { View } from "react-native";


function AppForm({ initialValue, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={{ email: "", password: " " }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <View>{children}</View>}
    </Formik>
  );
}


export default AppForm;
