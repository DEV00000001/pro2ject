// components/Popup.jsx
import "./PopupForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  code: Yup.string().required("Required!"),
  description: Yup.string().required("Required!"),
});
function PopupForm({ open, onClose, country, onSave, type }) {
  if (!open) return null;
  const initialValues = {
    name: country?.name || "hehe",
    code: country?.code || "",
    description: country?.description || "",
  };
  const onSubmit = (values) => {
    let newValues = values;
    if (type === "edit") {
      newValues = {
        id: country.id,
        ...values,
      };
    }
    onSave(newValues);
  };
  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <h2 className="popup__title">
          {type == "edit" ? "Edit Country" : "Add Country"}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="popup__form" >
            <div className="popup__form-group">
              <label for="name">Name:</label>
              <Field
                className="popup__form-input"
                id="name"
                name="name"
                type="text"
                // ko su dung getFieldProps neu su dung component UI cua frameworkUI (Antd, MUI)
                // formik.getFieldProps => cac props cua field (onChange={formik.handleChange} .....)
                // formik.handleChange chi hoat dong voi HTML thuan
                // doi vs component UI cua framework su dung setFieldValues
                // {...formik.getFieldProps("name")}
              />
              <ErrorMessage name="name" />
              {/* {formik.touched.name && formik.errors.name ? (
                <div className="popup__errors">{formik.errors.name}</div>
              ) : null} */}
            </div>
            <div className="popup__form-group">
              <label for="code">Code:</label>
              <Field
                className="popup__form-input"
                type="text"
                id="code"
                name="code"
                // value={formik.values.code}
                // onChange={formik.handleChange}
                // // focus vao sau do unfocus(an ra ben ngoai) => set formik.touched.[name] = true
                // onBlur={formik.handleBlur}

                // {...formik.getFieldProps("code")}
              />
              <ErrorMessage name="code"/>
            </div>

            <div className="popup__form-group">
              <label for="description">Description:</label>
              <Field
                component="textarea"
                className="popup__form-input"
                name="description"
                id="description"
              />
              <ErrorMessage name="description"/>
            </div>
            <div className="popup__form-actions">
              <button
                className="popup__form-button popup__form-button--red"
                type="submit"
              >
                Save
              </button>
              <button className="popup__form-button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default PopupForm;
