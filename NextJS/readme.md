# NEXT.JS documentation

Step 1: Install next.js

    npx create-next-app@latest

Step 2: You will be asked a series of questions. Give the following answers.

    What is your project named? ... prompt-pedia
    Would you like to use TypeScript? ... No / Yes
    Would you like to use ESLint? ... No / Yes
    Would you like to use Tailwind CSS? ... No / Yes
    Would you like to use `src/` directory? ... No / Yes
    Would you like to use App Router? (recommended) ... No / Yes
    Would you like to customize the default import alias (@/*)? ... No / Yes

After this the required dependencies would be installed.

## About Next.js

Note the file structure after installation. app folder is most important one as it provides the routing option. Also see the content inside app folder. The most important of them is layout.js. Its like main.jsx of react, the front file the has everything inside it. Then is the page.js. Its the home page route of a `next.js` application,localhost:3000/. Next is global.css folder which is inherited by layout.js for styling. It has Tailwind components already imported into it.

Note that as discussed, there are two types of rendering. One is serverside rendering and the other is client side rendering. Next.js by default functions on server side rendering. Though if we want client side render, we can simple add `"use client"` in the next.js code, and it would render that component as client side component.

Note that when we use react hooks such as useState or useEffect, its important to note that these are handeled on the client side, hence when we are using them, we need to use the `use client` to make sure we don't encounter any errors during development.

One simple way to clear this server side and client side component utilisation is that, when develop the general application, use server side default until any errors are encountered. If error is encountered, switch to client side rendering.

In react, for adding routes we use the react-router-dom. In next.js, we don't need to use it. Next.js provides file-based routing. That is via creating folder, we by default are creating routes, unless and until the folder is creating in the app folder. For instance, if a new folder `about` is created in app folder then contents in this file is displayed at the route `localhost:3000/about`. Further we can create nested routing, for instance, `localhost:3000/about/owner` via simply placing the owner folder in the about folder. Another aspect to cover when we talk about routing is dynamic routing. Incase of react we use to perform it using variables. For instance, in react this is a dynamic route, `localhost:3000/video/:classid/:videoid`. Now the question is, how do we create dynamic routes in Next.js. Since its a file based routing system, we will achieve this via folders. In place of giving normal names to folder in app for routing purposes, this time we will enclose them in `Square Brakkets[]`. For instance, `[aboutid]` folder in `about` folder will function as the route, `localhost:3000/about/:aboutid`.

Now we have already talked about the layout file. Now what is its function? The general function of layout file is to contains the components that would be shown in every page of the site being constructed. Next.js provides us without an option to create our own Next.js file in the route folders. This layout file will then contain components that are to be held by each and every page created in that specific folder in which the layout.js file is present.

We can also create loading.js file to create element that is to be shown during the loading of a page. Note it can be both global(present directly in app folder) or local(present routed folder).

We can also add a error.js file both locally and globally to handle error at the time for rendering. 


