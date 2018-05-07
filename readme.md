## Refraction

A simple lightweight CSS lib which can kickstart a project, (basic stuff like grid, nice form inputs, nice typography, common elements and sane defaults). The development library includes a live reload envoriment so saving a file with refresh the browser page and instantly show you the results.

### Setup

To make changes on this first you need to fetch the project node dependencies `npm i` then run `npm run dev` which will start watching the files and run a server on port `9000` which you can connect to in the browser.

If you just want a minified build for some external application you can run `npm run prod` which will spit out a minified `main.css` file in the `dist` directory.

### TODO

There will probably be some js file to assist with some of the features (for instance if we want to have a hover popup we will probably want some js to handle global placement).