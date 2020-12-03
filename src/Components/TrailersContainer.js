import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
const axios = require("axios").default;

export default function TrailersContainer() {
  const [trailers, setTrailers] = useState([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3050").then((res) => setTrailers(res.data));
  });

  const cards = trailers.map((trailer) => {
    const renderModal = () => {
      console.log("Bbobo");
    };
    return (
      <div key={trailer.id} className="div pt-5">
        <div className="modal">
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="card" style={{ width: 300, height: 400 }}>
          <img src={trailer.thumbnail} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quic3k example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a
              href="#"
              onClick={() => {
                renderModal();
              }}
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex container pt-5 flex-wrap flex-row justify-content-around ">
      {cards}
    </div>
  );
}
