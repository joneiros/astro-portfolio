import {
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Welcome!
        </>
      }
      description={
        <>
          <p>
            The purpose of this site is to act as a hub for all things 
            related to me, Jon Gander. The scope of this site allows a mixure of 
            personal and professional life, but in practice it will mostly be my
            career and code ramblings.
          </p>
          <br/>
          <p>
            Some parts of the site may be broken, experimental, or subject to 
            frequent change. This is intentional, as this environment allows for
            valuable learning from low-risk failure, and easy corrective 
            iteration. That said, I will aim to keep the core functionality 
            (this page and the {' '}
            <a className="text-pipboy-light hover:underline" href="/blog/">
              blog
            </a>) 
            simple, stable, and fast.
          </p>
          <br />
          <p>
            Enjoy!
          </p>
        </>
      }
      avatar={
        <img
          className="h-svh w-72"
          src="/assets/images/me.jpeg"
          alt="Informal headshot of a man (Jon Gander), splattered with mud, 
          wearing a Superman hat, standing in front of a Hägglunds carrier 
          vehicle"
          loading="lazy"
        />
      }
      socialButtons={
        <></>
      }
    />
  </Section>
);

export { Hero };
