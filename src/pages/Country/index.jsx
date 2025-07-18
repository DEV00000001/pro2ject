import { useState } from "react";
import "./Country.scss";
import countries from "./CountryData";
import PopupForm from "../../components/PopupForm";
import PopupConfirm from "../../components/PopupConfirm";
function Country() {
  const [countryList, setCountryList] = useState(countries);
  const [openPopupEdit, setOpenPopupEdit] = useState(false);
  const [openPopupConfirm, setOpenPopupConfirm] = useState(false);
  const [openPopupAdd, setOpenPopupAdd] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleEdit = (country) => {
    setSelectedCountry(country);
    setOpenPopupEdit(true);
  };
  const handleDelete = (country) => {
    setSelectedCountry(country);
    setOpenPopupConfirm(true);
  };
  const handleAdd = (country) => {
    setOpenPopupAdd(true);
  };
  const handleSaveEdit = (updatedCountry) => {
    const newCountryList = countryList.map(country => (country.id === updatedCountry.id ? updatedCountry : country))
    setCountryList(newCountryList);
    setOpenPopupEdit(false);
  };
  const handleSaveDelete = (idDelete) => {
    const newCountryList = countryList.filter(country => (country.id !== idDelete ))
    setCountryList(newCountryList);
    setOpenPopupConfirm(false);
  };
  const handleSaveAdd = (newCountry) => {
    const newCountryList = [...countryList, {id: countryList[countryList.length-1].id + 1 , ...newCountry}];
    setCountryList(newCountryList);
    setOpenPopupAdd(false);
  };
  return (
    <>
      <div className="country">

        <PopupForm
          open={openPopupAdd}
          onClose={() => setOpenPopupAdd(false)}
          onSave= {handleSaveAdd}
          type={'add'}
        />
        <PopupForm
          open={openPopupEdit}
          onClose={() => setOpenPopupEdit(false)}
          country={selectedCountry}
          onSave= {handleSaveEdit}
          type={'edit'}
        />
        <PopupConfirm
          open={openPopupConfirm}
          onClose={() => setOpenPopupConfirm(false)}
          countryId={selectedCountry?.id}
          onDelete= {handleSaveDelete}
        />
        <div className="country__button-wrap" onClick={handleAdd}><button className="country__button">Add</button></div>
        <table className="country__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CODE</th>
              <th>DESCRIPTION</th>
              <th colSpan={2} style={{textAlign: 'center'}}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {countryList.map((country) => {
              return (
                <tr key={country.id}>
                  <td>{country.id}</td>
                  <td>{country.name}</td>
                  <td>{country.code}</td>
                  <td>{country.description}</td>
                  <td>
                    <button className="country__button" onClick={() => handleEdit(country)}>Edit</button>
                  </td>
                  <td>
                    <button className="country__button" onClick={() => handleDelete(country)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Country;
