import React, { Component } from "react";

const Container = props => {
  return (
    <div>
      <h3 style={{ color: "red" }}>(Container.js) Container</h3>
      {props.children}
    </div>
  );
};

export default Container;

/* 
    super main props na likhney pr constructor k bahir koi farq nahi prta phir bhi available hota hai
*/