import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';
import SECTION_DATA from './sections.data';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTION_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} 
          title={title} 
          imageUrl={imageUrl}
          size={size}/>
        ))}
      </div>
    );
  }
}

export default Directory;
