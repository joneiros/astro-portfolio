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
            This is a hub both for my career, and for my greater online presence.
            As such, you may discover a bit more than I might choose to share in an office setting,
            but won't see content that is NSFW. Mostly you will see career-related ramblings.
          </p>
          <p>
            Some parts of the site may be broken, experimental,
            or subject to frequent change. I will aim to keep the core functionality (this landing page,{' '}
            <a className="text-pipboy-light hover:underline" href="/posts/">
              blog
            </a>) 
            simple, stable, and fast.
          </p>
          <p>
            Enjoy!
          </p>
        </>
      }
      avatar={
        <img
          className="h-60 w-60"
          src="/assets/images/me.jpeg"
          alt="Avatar image"
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
