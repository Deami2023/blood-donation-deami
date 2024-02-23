import { Image } from "./image";
import React from "react";

export const Private = (props) => {
  return (
    <div id="private" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Private services</h2>
          <p>
            We collaborate with private entities, helping individuals connect to the right and best deals.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
