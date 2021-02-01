import React, { useState } from "react";
import Helmet from "react-helmet";
import ListingForm from "../components/ListingForm";
import Listings from "../components/Listings";
import Pagination from "../components/Pagination";

function Home() {
  const [listings, setListings] = useState([]);
  const [currenPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(3);
  const [active, setActive] = useState(1);
  const indexOfLastListing = currenPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  };

  const previous = (page) => {
    if (currenPage !== 1) {
      setCurrentPage(currenPage - 1);
      setActive(currenPage - 1);
    }
  };

  const next = (page) => {
    if (currenPage !== Math.ceil(listings.length / 3)) {
      setCurrentPage(currenPage + 1);
      setActive(currenPage + 1);
    }
  };
  return (
    <main className="home">
      <Helmet>
        <title>Unicorn Estate -- Home</title>
      </Helmet>

      <section className="home__form">
        <ListingForm setListings={setListings} />
      </section>

      <section className="home_listings">
        <Listings listings={listings} />
      </section>

      <section className="home__pagination">
        <div className="row">
          {listings.length !== 0 ? (
            <Pagination
              itemsPerPage={listingsPerPage}
              count={Listings.length}
              visitPage={visitPage}
              previous={previous}
              next={next}
              active={active}
              setActive={setActive}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
}

export default Home;
