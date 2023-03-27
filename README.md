# Flight Tracker - Portfolio Dashboard

## Setup

Clone and install repo:

`git clone https://github.com/neesonch/flight-tracker`

`cd flight-tracker && yarn` (Yarn recommended)

or

`cd flight-tracker && nnpm i --legacy-peer-deps`

## Run locally

Navigate to root folder of project and start app with:

`yarn start`

or

`npm run start`

If not automatically redirected, navigate to http://localhost:3000 in browser to view.

## Testing

To run e2e tests (via Cypress):
`yarn e2e`
or
`npm run e2e`

## Implementation Overview

- Dashboard built using ReactJS & Typescript
- Used Material UI component library for rapid prototyping of UI
- State management handled with Zustand: lightweight and easy to quick-start, suitable for small scope of project
- Used Mock Service Worker to simulate initial fetch of data
- Used date-fns for date & time utilities - lighter weight than MomentJS, and has good TypeScript support
- Used Nivo for data visualization - build on top of React/D3, and has good TypeScript support
- Used Cypress for E2E testing
