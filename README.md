# Class Profile Web
=========================

## About
The Software Engineering Class Profile is a student-initiative focused on showcasing what the program was like for students. It covers content covering co-op, background, academics, lifestyle, future plans, and answers questions such as “Does it matter if I started coding later than everyone else?” or “How much debt do students graduate with?”.

You can view the class profile at [https://classprofile.andyzhang.net](https://classprofile.andyzhang.net).

## Setup
**You need a Ruby version at least < 3.0 (2.7.0 works)!**

Run `yarn install`. You'll also need `jekyll` to run a local host. Run `gem install jekyll` if you don't have it.

## Running Locally
- `npm run prod` (build the TypeScript Code) will update the `min.js` file in the `build` directory.
- `bundle exec jekyll serve` run the jekyll server

### for "reloadable" local testing

1. change [`main.html:38`](./_layouts/main.html)'s script src to point to `./build/bundle.js`
2. run `npm run dev` in a console to watch for changes and build to `./build/bundle.js`
3. in another console, run `bundle exec jekyll serve` to run the jekyll server (site usually defaults to some localhost)
4. refresh the tab directed to the lcoalhost site to get the updated site

| :exclamation: Don't check `main.html` in without switching to the minified bundle source! |
|-------------------------------------------------------------------------------------------|

## Adding a section

- create the appropriate `<topic name>.html` file in the [`./content`](./content) folder
  - for each graph, add a div with a unique id
- add a `render<topic name>` function in [`main.ts`](main.ts)
  - the logic to generate the graphs should be included in this function
- link the section in [`introduction.html`](./content/introduction.html), Table of contents
