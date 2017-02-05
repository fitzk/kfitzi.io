import React from "react"
import MediaQuery from "react-responsive"
import { Link } from "react-router"
import { nav } from "utils"
import styled, { css } from "styled-components";


export const A = props => {
	return <div onClick={ () => nav(props.href) }>
          { props.children }
        </div>
}
