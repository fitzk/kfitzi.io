import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router";
import { nav } from "utils";
import styled, { css } from "styled-components";


export const NavAway = ({ href, children }) => {
	return <div onClick={ () => nav(href) }>
          { children }
        </div>
};
