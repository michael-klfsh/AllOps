import React from "react";
import HorizontalNavbar from "../../components/FinanceNavBar";
import "./FormMaterials.css";

const FormMaterials = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="form-container">
      <HorizontalNavbar />
      <form onSubmit={handleSubmit} className="form-style">
        <h2 className="form-title">Materials Request Form</h2>

        <div className="form-field">
          <label htmlFor="title">Title of Request:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Reason for Material Request:</label>
          <br />
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            required
          ></textarea>
        </div>

        <div className="form-field">
          <label htmlFor="fileUpload">Upload File (photo or PDF):</label>
          <br />
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            className="form-file"
            required
          />
        </div>

        <div className="form-button">
          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormMaterials;
