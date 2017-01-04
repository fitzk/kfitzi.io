import React from "react";
import { Card, CardHeader, Avatar } from "material-ui";


const UCSB = props => {

  return (
    <Card
    zDepth={ 0 }
    style={{
      alignSelf: 'center',
      width: '70vw',
      marginBottom: '20px'
    }}>
	 <CardHeader
    titleStyle={{
      fontSize: "2.2rem"
    }}
    avatar={
    <Avatar backgroundColor="white" src="http://www.ucsb.edu/graphic-identity/downloads/seal/ucsbseal-color-rgb.svg"/> }
    title="BA Philosophy"
    subtitle="University of California Santa Barbara, May 2014" />
    </Card>
    );
};

export default UCSB;
