import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMedia = () => {
  const socialMedia = [
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/GeorgiosDev',
      icon: <GitHubIcon />,
      backgroundClass: 'bg-black',
    },
    {
      id: 2,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/georgios-deverakis-243b04175/',
      icon: <LinkedInIcon />,
      backgroundClass: 'bg-blue-500',
    },
    {
      id: 3,
      name: 'Facebook',
      link: 'https://www.facebook.com/george.deverakis.7/',
      icon: <FacebookIcon />,
      backgroundClass: 'bg-blue-900',
    },
    {
      id: 4,
      name: 'Whatsapp',
      link: 'tel:+306989342334',  
      icon: <WhatsAppIcon />,
      backgroundClass: 'bg-green-500',
    },
  ];

  return (
    <div className=" flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialMedia.map(({id,name,link,icon,backgroundClass}) => {
          return(
              <li  key={id}  className={`flex justify-between items-center w-40 h-12 px-4 hover:ml-[-0.625rem] hover:rounded-md duration-300 ml-[-6.875rem] ${backgroundClass}`}>
                <a href={link} className='flex justify-between items-center w-full text-white text-xl' target='__blank'>
                {name}
                {icon}
                </a>
              </li> 
          )
        })}
    
      </ul>
    </div>
  );
};








export default SocialMedia;
