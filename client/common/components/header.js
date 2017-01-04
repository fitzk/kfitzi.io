import React from "react";

const Header = props => {

  const headerStyle = {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    fontFamily: 'Roboto, Sans-serif',
    fontWeight: '200',
    fontSize: '2rem',
    marginTop: '20vh',
    marginRight: '10vh',
  }
  return (
    <div> {props.title}</div>
  )
};


export default Header;
