Class Profile Web
=========================

# About

# Structure
The content is split into multiple sections. Each section requires its own JS to
render graphs. Each section can be found in a folder `%d-{name}/`. Within each
of these directories, there's the content (`.html`), and the script for
rendering (`.ts`).

The entry point to all of the content is `index.html`, where each section's
content is included. The entry point to all scripts is in `main.ts` so that it
can be compiled into one bundle.

# Setup
Run `yarn install`. You'll also need `jekyll` to run a local host. Run `gem install jekyll` if you don't have it.
