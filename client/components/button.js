import React from "react"
import styled from "styled-components"
import MediaQuery from "react-responsive"
import { MobileButtonOrange, ButtonOrange } from "./../styled-components/buttons"
import { nav } from "./../utils"

export const Button = props => {
	let n = () => nav(props.to)
	let submit = props.submit && props.onSubmit;
	let navToTab = props.nav && n

	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <ButtonOrange onClick={ navToTab }
                          submit={ submit }>
              { props.children }
            </ButtonOrange>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <MobileButtonOrange onClick={ navToTab }
                                submit={ submit }>
              { props.children }
            </MobileButtonOrange>
          </MediaQuery>
        </div>
}
