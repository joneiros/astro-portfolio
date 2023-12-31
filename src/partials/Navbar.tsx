import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg 
              fill="#FFA500" 
              height="50px" 
              width="50px" 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="-12.8 -12.8 153.60 153.60" 
              xmlSpace="preserve" stroke="#FFA500"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(27.520000000000003,27.520000000000003), scale(0.57)"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#00F5FB" strokeWidth="1.7920000000000003"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M117.2,40.4h-1.7c-11.2-3-10.4-6.4-10.4-6.4C104,22.9,92.3,22.9,92.3,22.9c-17-1.1-17,19.7-12.7,27.1 c4.2,7.4-6.8,11-19.5,11c-18.6,0-48.9,9-48.9,9l7.3,4.9L6.8,79.1c8,2.1,28.1,11.3,28.1,11.3c17.5,10.1,39.5,11,39.5,11 c56,4.1,42.5-38.8,29.1-44c-7.8-3-7.3-8.1-7.3-8.1c0-1.3,0.6-2.2,1.5-2.9h19.6c1.6,0,3-1.3,3-3C120.2,41.8,118.8,40.4,117.2,40.4z"></path> 
              </g>
            </svg>
          }
          name="JON GANDER"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog</NavMenuItem>
        <NavMenuItem href="https://github.com/joneiros">GitHub</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
