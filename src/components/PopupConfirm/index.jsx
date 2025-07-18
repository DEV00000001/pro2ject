import "./PopupConfirm.scss";

function PopupConfirm({ open, onClose, countryId, onDelete }) {
  if (!open) return null;
  const handleDelete = () => {
    onDelete(countryId);
  };

  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <h2 className="popup__title">Confirm</h2>
        <p>Bạn có chắc chắn muốn xóa không ?</p>
        <div className="popup__form-actions">
          <button
            className="popup__form-button popup__form-button--red"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button className="popup__form-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupConfirm;
