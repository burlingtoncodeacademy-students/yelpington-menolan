import React from "react";

let name = document.location.pathname.split("/")[2];
let restData = [];

const Restaurant = () => {
  fetch(`/api/${name}`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("error");
    });

  return <div>{restData.name}</div>;
};

// exporting the Restaurant component
export default Restaurant;
