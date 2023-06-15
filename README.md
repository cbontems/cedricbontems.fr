![cedricbontems.fr homepage screenshot](https://raw.githubusercontent.com/cbontems/cedricbontems.fr/main/screenshot.webp)

[![Netlify Status](https://api.netlify.com/api/v1/badges/07235d8d-a1be-49b2-a998-47aae27ddf14/deploy-status)](https://app.netlify.com/sites/cedricbontems/deploys)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://commitizen.github.io/cz-cli/)
[![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)](https://github.com/withastro)
[![Open Props](https://img.shields.io/badge/Open%20Props-748FFC?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZT0iI0ZGRiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPg0KICA8cGF0aCBzdHJva2Utd2lkdGg9IjI1IiBkPSJNNjUgMTAwdjc1Ii8+DQogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMzUiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjI1Ii8+DQogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODUiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjI1Ii8+DQo8L3N2Zz4=)](https://github.com/argyleink/open-props)
[![Typescript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)

Astro build of Cédric Bontems' personal websitebuilt using Astro as the SSG, Open Props for design tokens, hosted on NEtlify with automatic deployment form Github.

## Lighthouse Score

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-cedricbontems-fr/71cpfg78ac?form_factor=desktop">
    <img width="710" alt="cedricbontems.fr Lighthouse Score" src="lighthouse-score.svg">
  <a>
</p>

---

## Local Setup
Running local set up will install all necessary bundles and dependencies.
    
    $ cd cedricbontems.fr
    $ npm install

---

## Development
Running development will run a local server watching for changes and reloading accordingly.

	$ cd cedricbontems.fr
	$ npm run dev

---

## Building
Building will convert all assets into a static site, resulting with the entire site ready in the dist directory for deployment.

    $ cd cedricbontems.fr
    $ npm run build

---

## Previewing
To test the static site prior to deployment, the site must be built and then served in its static form so you can run it locally

    $ cd cedricbontems.fr
    $ npm run build
    $ npm run preview

---

## Commiting
This repo uses commitizen to help keep things organized with conventional comits.

    $ cd cedricbontems.fr
    $ npm run commit

---

## Releasing
This repo uses commitizen to handle releases. It handles versioning following semantic version rules based on commits.

    $ cd cedricbontems.fr
    $ npm run release

---

## Deploying
A deploy is automatically triggered on Nelify when changes are pushed to the github repository. The deploy status is visible on the badge here and at the top of this file.

[![Netlify Status](https://api.netlify.com/api/v1/badges/07235d8d-a1be-49b2-a998-47aae27ddf14/deploy-status)](https://app.netlify.com/sites/cedricbontems/deploys)

    $ cd cedricbontems.fr
    $ git push

---

## Updating
Updating will check all packages for updates, allow you to select which ones should be updated, update the corresponding package files with the new version, and download and install the selected updates.

    $ cd cedricbontems.fr
    $ npm run update
