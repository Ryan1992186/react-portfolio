import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const [ href, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation onChange={handleChange} onClick={href}>
      <BottomNavigationAction
        label="Email"
        href={`mailto: Ryan1992186@gmail.com?`}
        icon={<MailOutlineIcon/>}
      />
      <BottomNavigationAction
        label="Phone #"
        href={`tel:17196593879`}
        icon={<ContactPhoneIcon />}
      />
      <BottomNavigationAction
        label="LinkedIN"
        href={`https://www.linkedin.com/in/ryan-hillier-782216167/`}
        icon={<LinkedInIcon />}
      />
        <BottomNavigationAction
        label="GitHub"
        href={`https://github.com/Ryan1992186`}
        icon={<GitHubIcon/>}
      />
    </BottomNavigation>
  );
}