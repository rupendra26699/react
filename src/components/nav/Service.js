import React from "react";

function Service() {
  return (
    <div className="container">
      <h1>Services</h1>
      <div className="card" style={{ width: 400 }}>
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fc/9bd820c13811e69a98a380504ebcf8/shutterstock_103215932.jpg?auto=format%2Ccompress&dpr=1" />
        <div className="card-body">
          <h3 className="card-title">Information Security</h3>
          <p className="card-text">
            {" "}
            We provide level 5 security to the user to protect the confidential
            data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
