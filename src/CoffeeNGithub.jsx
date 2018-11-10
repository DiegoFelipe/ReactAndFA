import React from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// As you can see I haven't imported github, heart and coffee icons here
export default props =>
<>
   <FontAwesomeIcon icon={['fab','github']} />+<FontAwesomeIcon icon="coffee"/> = <FontAwesomeIcon icon="heart" />
</>
