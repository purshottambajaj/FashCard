import React from 'react';
import { BiInfoCircle, BiRightArrowCircle, BiRefresh ,BiLeftArrowCircle  } from 'react-icons/bi';
import { CgMaximize } from "react-icons/cg";
import { PiSpeakerHigh } from "react-icons/pi";

const NextArrow = (props) => {
  return (
    <>
      <button
        style={{
          ...props.style,
          fontSize: "30px",
          height: "100px",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "all 0.2s ease",
          position: "absolute",
          right: "30%",
          top: "100%",
        }}
        onClick={props.onClick}
      >
        <BiRightArrowCircle/>
      </button>

       
      <button
        style={{
          position: "absolute",
          right: "50px",
          top: "0%",
          height: "100px",
          width: "40px",
          borderRadius: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "30px"
        }}
        onClick={() => {
          // Handle Zoom functionality
          console.log("Zoom In");
        }}
      >
        <PiSpeakerHigh/>
      </button> 

      <button
        style={{
          position: "absolute",
          backgroundColor:"bg-gradient-to-b from-blue-950 to-blue-600",
          right: "50px",
          top: "100%",
          height: "100px",
          width: "40px",
          borderRadius: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "30px",
          text: "linear-gradient(to right, #007BFF, #00BFFF)", 
       
        }}
        onClick={() => {
          
          console.log("Zoom In");
        }}
      >
        <CgMaximize/>
      </button>
     </>
  );
};

const PrevArrow = (props) => {
  return (
    <> <button
    style={{
      position: "absolute",
      left: "50px",
      top: "0%",
      height: "100px",
      fontSize: "30px",
      borderRadius: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
    onClick={() => {
      console.log("Refresh");
    }}
  >
    <BiInfoCircle />
  </button>
  <button
    style={{
      position: "absolute",
      left: "50px",
      top: "100%",
      height: "100px",
      fontSize: "30px",
      borderRadius: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
    onClick={() => {
      // Handle Refresh functionality
      console.log("Refresh");
    }}
  >
    <BiRefresh />
  </button>

      <button
        style={{
          ...props.style,
          color: "#333",
          height: "100px",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          left: "30%",
          top: "100%",
          zIndex: 1,
          fontSize: "30px",
        }}
        onClick={props.onClick}
      >
        <BiLeftArrowCircle />
      </button>
    </>
  );
};

export { NextArrow, PrevArrow };
