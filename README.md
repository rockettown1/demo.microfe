## Prerequisites

- nodejs v16+
- docker
- AWS SAM CLI

From the main directory install deps in all packages with `npm run bootstrap:local` which will run lerna

You'll need to go to each lambda directory to run webpack and generate the dist code `npm run build:prod`

From the main directory run the SAM cli which will spin up the Lambda functions locally and serve them through an apigateway `npm run start-all`

This will also spin up a Fastify proxy server to make serving static assets easier.
