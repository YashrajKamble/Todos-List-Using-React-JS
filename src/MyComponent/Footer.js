import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    top: "93vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyToDoList.com</p>
    </footer>
  );
};
