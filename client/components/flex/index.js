import React from "react"
import MediaQuery from "react-responsive"
import styled, { css } from "styled-components"
import { Column, Row, Flex } from "styled-flex"

export const ColumnRow = props => {
	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Flex {...props}>
              { props.children }
            </Flex>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Flex row
                     {...props}>
              { props.children }
            </Flex>
          </MediaQuery>
        </div>
}

export const RowColumn = props => {
	return <div>
          <MediaQuery query="(min-device-width: 1224px)">
            <Flex row
                     {...props}>
              { props.children }
            </Flex>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <Flex {...props}>
              { props.children }
            </Flex>
          </MediaQuery>
        </div>
}
