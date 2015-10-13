###Week Seven - MEAN Stack II
Last week we focused on CRUD with Mongo, Node, and Angular. This week we're going to focus on using Angular to build a strictly client-side app, leveraging third-party APIs. You'll be expected to build on knowledge you've already learned and refactor last week's blog app to use Github Gists instead of your Node server and Mongo.

We want this assignment to feel like a 'week on the job.' We'll be adding requirements throughout the week, on top of those listed here.

The spec

The business has decided to outsource hosting of the company blog to a third party, and has decided to use Github Gists. Hosting of the app will be handled by a static web site host.

You need to refactor the blog, removing any dependency on Node.js for the server and Mongo for the database. Replace your current Angular blog service with the Gist API.

Requirements

You will need to create a personal access token in your Github account
github.com/settings/tokens/new
The only scopes you'll need are gists and user
Semantically correct HTML is required as this will be the model for prod app integration
Think in terms of 'components'; if all parts of the UI were lego blocks, who would you code that?
All CSS measurements should use elastic units unless a pixel specific unit is required for both mobile and desktop
JavaScript code is expected to be written cleanly and maintainably using the best practices covered during lectures
Write up a description for every plugin used (no limit, but you must justify them)
jQuery is not allowed. Angular's built-in DOM manipulation can manage most of what you'd need jQuery for.