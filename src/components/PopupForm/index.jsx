// components/Popup.jsx
import "./PopupForm.scss";
function PopupForm({ open, onClose, country, onSave, type }) {
  if (!open) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedCountry = {
      name: e.target[0].value,
      code: e.target[1].value,
      description: e.target[2].value,
    };
    if (type === "edit") {
      updatedCountry = {
        id: country.id,
        
        ...updatedCountry,
      };
    }
    onSave(updatedCountry);
  };

  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <h2 className="popup__title">
          {type == "edit" ? "Edit Country" : "Add Country"}
        </h2>
        <form className="popup__form" onSubmit={handleSubmit}>
          <div className="popup__form-group">
            <label>Name:</label>
            <input
              className="popup__form-input"
              name="name"
              type="text"
              defaultValue={country?.name}
            />
          </div>
          <div className="popup__form-group">
            <label>Code:</label>
            <input
              className="popup__form-input"
              type="text"
              name="code"
              defaultValue={country?.code}
            />
          </div>

          <div className="popup__form-group">
            <label>Description:</label>
            <textarea
              className="popup__form-input"
              name="description"
              defaultValue={country?.description}
            />
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
