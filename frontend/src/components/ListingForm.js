import React, { useState } from "react";
import Loader from "react-loader-spinner";
import Axios from "axios";
import PropTypes from "prop-types";

function ListingForm({ setListings }) {
  const [formData, setFormData] = useState({
    sale_type: "For Sale",
    price: "0",
    bedrooms: "0",
    home_type: "House",
    bathrooms: "0+",
    sqft: "1000+",
    days_listed: "1 or less",
    has_photos: "1+",
    open_house: false,
    keywords: "",
  });

  const [loading, setLoading] = useState(false);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    setLoading(true);
    Axios.post("http://localhost:8000/api/listings/search/", formData)
      .then((res) => {
        setLoading(false);
        window.scrollTo(0, 0);
        setListings(res.data);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };
  return (
    <form className="listingform" onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="sale_type" className="listingform__label">
              Sale or rent
            </label>
            <select
              name="sale_type"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.sale_type}
            >
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="listingform__section">
            <label htmlFor="sqft" className="listingform__label">
              Sqft
            </label>
            <select
              name="sqft"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.sqft}
            >
              <option>1000+</option>
              <option>1200+</option>
              <option>1500+</option>
              <option>2000+</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="price" className="listingform__label">
              Minimum price
            </label>
            <select
              name="price"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.price}
            >
              <option>0</option>
              <option>200000</option>
              <option>400000</option>
              <option>600000</option>
              <option>800000</option>
              <option>1000000</option>
              <option>Any</option>
            </select>
          </div>
          <div className="listingform__section">
            <label htmlFor="days_listed" className="listingform__label">
              Days Listed
            </label>
            <select
              name="days_listed"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.days_listed}
            >
              <option>1 or less</option>
              <option>2 or less</option>
              <option>5 or less</option>
              <option>10 or less</option>
              <option>20 or less</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="bedrooms" className="listingform__label">
              Bedrooms
            </label>
            <select
              name="bedrooms"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.bedrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>Any</option>
            </select>
          </div>
          <div className="listingform__section">
            <label htmlFor="has_photos" className="listingform__label">
              Has Photos
            </label>
            <select
              name="has_photos"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.has_photos}
            >
              <option>1</option>
              <option>3</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="home_type" className="listingform__label">
              Home Type
            </label>
            <select
              name="home_type"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.home_type}
            >
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
            </select>
          </div>
          <div className="listingform__section">
            <label htmlFor="keywords" className="listingform__label">
              Keywords
            </label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={(e) => onChange(e)}
              className="listingform__input"
            />
          </div>
        </div>
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label htmlFor="bathrooms" className="listingform__label">
              Baths
            </label>
            <select
              name="bathrooms"
              className="listingform__select"
              onChange={(e) => onChange(e)}
              value={formData.bathrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          <div className="listingform__altsection">
            <label htmlFor="open_house" className="listingform__label">
              Open House
            </label>
            <input
              type="checkbox"
              name="open_house"
              value={formData.open_house}
              onChange={(e) => onChange(e)}
              className="listingform__checkbox"
            />
          </div>
        </div>

        <div className="col-1-of-6">
          {loading ? (
            <div className="listingform__loader">
              <Loader type="Oval" color="#424242" height={50} width={50} />
            </div>
          ) : (
            <button className="listingform__button listingform__button--primary">
              Save
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

ListingForm.propTypes = {
  setListings: PropTypes.func.isRequired,
};

export default ListingForm;
