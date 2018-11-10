import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons'
// The first import bellow bring the react component,
// the second one, bring just the icon that we want
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// Our custom component
import CoffeeNGithub from './CoffeeNGithub'
// here comes the magic:
library.add(fab, faHeart, faCoffee)


class App extends Component {
  render() {
    return (
      <>
      <FontAwesomeIcon icon={faHome} />
    <h1>Our Magic component: </h1>
    <CoffeeNGithub />
      </>
    );
  }
}

export default App;
