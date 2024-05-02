import React from "react";

export const Footer = () => {
  let footerstyle = {
    position: "absolute",
    top: "90vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-2" style={footerstyle}>
      <p className="text-center">Copyright &copy; Mytodolist.com</p>
    </footer>
  );
};
