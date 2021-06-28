# AngularSpaceXAPI

This application consumes the [SpaceX-API](https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md) and display some informations on table and cards such as launches, crews, payloads, historical events and rockets.

You can see the demo here:

https://app-spacex-everton.netlify.app/

Or follow the steps below to run locally:

1 - Install the dependencies with `npm install`.

2 - Run `npm run start` and open the browser on http://localhost:4200.


## Overview

![Screen Shot 06-28-21 at 07 32 PM](https://user-images.githubusercontent.com/46136649/123712942-ba047a80-d849-11eb-994b-6268b9645ce6.PNG)

- The table displays infos about the launches(past and upcoming), you can switch them by clicking on the buttons at the top right hand corner of the table. You can search a launch by its name.

- Right below the table there is a section of historical events which can be dragged sideways.
 
- On the lower part of the page, there is a card that displays informations about a rocket, you can use the autocomplete input to search others.

## Running ESLint

Run `npm run eslint` on terminal.

## Running tests

Run `npm run test` on terminal to execute the unit tests made with jasmine via [Karma](https://karma-runner.github.io).
