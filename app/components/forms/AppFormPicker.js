import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  placeholder,
  items,
  name,
  selectedItem,
  onSelectedItem,
  width
}) {
  const { errors, setFieldValue,  touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      >
          <ErrorMessage error={errors[name]} visible={touched[name]}/>
      </AppPicker>
    </>
  );
}

export default AppFormPicker;
