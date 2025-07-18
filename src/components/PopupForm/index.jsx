// components/Popup.jsx
import "./PopupForm.scss";
import { useFormik } from "formik";
import * as Yup from 'yup';
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required!";
  }
  if (!values.code) {
    errors.code = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};
const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  code: Yup.string().required('Required!'),
  description: Yup.string().required('Required!'),
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });
  console.log(formik.touched)
  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <h2 className="popup__title">
          {type == "edit" ? "Edit Country" : "Add Country"}
        </h2>
        <form className="popup__form" onSubmit={formik.handleSubmit}>
          <div className="popup__form-group">
            <label>Name:</label>
            <input
              className="popup__form-input"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="popup__errors">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="popup__form-group">
            <label>Code:</label>
            <input
              className="popup__form-input"
              type="text"
              name="code"
              value={formik.values.code}
              onChange={formik.handleChange}
              // focus vao sau do unfocus(an ra ben ngoai) => set formik.touched.[name] = true
              onBlur={formik.handleBlur}

            />
            {formik.touched.code && formik.errors.code ? (
              <div className="popup__errors">{formik.errors.code}</div>
            ) : null}
          </div>

          <div className="popup__form-group">
            <label>Description:</label>
            <textarea
              className="popup__form-input"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="popup__errors">{formik.errors.description}</div>
            ) : null}
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
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
