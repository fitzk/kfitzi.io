import React from "react";
import {FontIcon, ListItem} from "material-ui";


const NotebookMenuItem = ({select}) => {
    let color = 'white';
    return (
        <ListItem className="menu-item"
                  initiallyOpen={false}
                  nestedLevel={0}
                  autoGenerateNestedIndicator={true}
                  primaryText={'notebook'}
                  leftIcon={
                      <FontIcon color={color}>
                          <i className="fa fa-book fa-fw"/>
                      </FontIcon>
                  }
                  onTouchTap={() => select('/notebook?subjects=all')}
                  nestedItems={[
                      <ListItem className="menu-item"
                                key={1}
                                nestedLevel={1}
                                primaryText={'javascript'}
                                onTouchTap={() => select('/notebook?subjects=all&open=javascript')}
                                nestedItems={[]}>
                      </ListItem>,
                      <ListItem className="menu-item"
                                key={4}
                                nestedLevel={1}
                                onTouchTap={() => select('/notebook?subjects=all&open=react')}
                                primaryText={'react'}/>,
                      <ListItem className="menu-item"
                                key={5}
                                nestedLevel={1}
                                primaryText={'c++'}
                                onTouchTap={() => select('/notebook?subjects=all&open=cpp')}/>,

                      <ListItem className="menu-item"
                                key={8}
                                nestedLevel={1}
                                primaryText={'docker'}
                                onTouchTap={() => select('/notebook?subjects=all&open=docker')}/>,

                  ]}/>
    );
};

/*

 <ListItem className="menu-item"
 key={8}
 nestedLevel={1}
 primaryText={'cs topics'}
 onTouchTap={() => select('/notebook?subjects=all&open=cstopics')}/>,


 */
export default NotebookMenuItem;
