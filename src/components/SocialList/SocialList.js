import React from 'react';

import List from '@material-ui/core/List';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function SocialList() {

 return (
    <List>
     <li>
       <a href="https://github.com/vigolajnen">
        <GitHubIcon />
       </a>
      </li>
    </List>
  );
}