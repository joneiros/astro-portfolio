# Astro Portfolio (Version 1)
Astro blog template by [Ixartz](https://github.com/ixartz), modified by me
before I decided to build my own Astro site from the ground up.

## Archival Notes
I abandoned this version for a few reasons which can mostly be summed up by
the fact that this template did a lot of things that I didn't need and that I
found were causing friction while getting my site published.

One of the challenges was Tailwind CSS, which I had never used in the past.
There were a few times where a new CSS style wouldn't have any effect, and I
couldn't tell whether the issue was a gap in my CSS knowledge, an issue with
Astro, or an issue with Tailwind. By moving away from this framework, I was able
to eliminate Tailwind CSS as a variable, and was able to debug more easily
with a simpler stack.

The use of Typescript in this template was similarly cumbersome to me. I like
the concept of Typescript, but I want to spend more time writing Javascript
before I give Typescript more consideration. By creating my own Astro site
without this template, I was more easily able to focus.

A nice benefit of abandoning this is that I now have
[my own template](https://github.com/joneiros/astro-template) that I'm
pleased with.
That said, If you're looking for something ready out-of-the-box and you're
familiar with and like both Tailwind CSS and Typescript, I definitely recommend
checking out Ixartz's template!

---

---

---

## Astro Boilerplate with TypeScript and Tailwind CSS [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

🚀 Astro Boilerplate is starter code for your blog or portfolio based on Astro
with Tailwind CSS 3.0. ⚡️ Made with Astro, TypeScript, ESLint, Prettier,
Tailwind CSS.

Clone this project and use it to create your own Astro blog. You can check the
[Astro templates demo](https://creativedesignsguru.com/demo/astro-boilerplate/).

## Features

A complete Blog feature:

- 🎈 Syntax Highlighting
- 🤖 SEO friendly with sitemap.xml and robots.txt
- ⚙️ RSS feed
- 📖 Pagination
- 🌈 Include a dark blog theme
- ⬇️ Markdown
- 📦 Image lazy loading
- 💎 Responsive design

Developer experience first:

- 🔥 Astro
- 🎨 Tailwind CSS with aspect ratio and typography plugin
- 🎉 TypeScript
- ✏️ ESLint compatible with .astro files
- 🛠 Prettier compatible with .astro files
- 🦊 Husky
- 🚫 lint-staged
- 🚨 Commitlint
- 🔧 One-click deploy on Netlify (or, manual if you prefer)

ESLint with:

- Airbnb styled guide
- TypeScript compatible
- Astro compatible
- Automatically remove unused imports
- Import sorting
- Tailwind CSS plugin

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm

#### Optional

- [nvm](https://github.com/nvm-sh/nvm)
- [volta](https://volta.sh/)

While Astro-boilerplate should work with the latest Node version, it has been
tested with the versions in .nvmrc & the bottom of package.json. At current
writing, that's Node v16.15.1

### Getting started

Run the following command on your local environment:

``` bash
git clone --depth=1 https://github.com/ixartz/Astro-boilerplate
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

``` bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your favorite browser
to see your project.

### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Astro-boilerplate)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run clean`   | Remove `./dist` folder                       |
| `npm run lint`    | Run ESLint and report styling error          |

### Contributions

Everyone is welcome to contribute to this project.
Feel free to open an issue if you have question or found a bug.

### Additional Checks

This README.md was linted with
[markdownlint](https://github.com/igorshubovych/markdownlint-cli)

### License

Licensed under the MIT License, Copyright © 2022

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com)
[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)
