import React from "react";
import PropTypes from "prop-types";

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form className="row justify-content-center m-5" onSubmit={handleSubmit}>
        <div className="col-md-8 col-lg-6">
          <input
            className="form-control"
            type="text"
            name="inputText"
            placeholder="Search"
          />
        </div>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
