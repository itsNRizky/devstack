# Coursenotes of JSMastery

<details>
  <summary>=== Setup ESLint ===</summary>
for better typing / code style
https://standardjs.com/rules

- npm install eslint-config-standard
- add "standard" to .eslintrc.json file

also for the tailwindcss

- npm install eslint-plugin-tailwindcss
- add "plugin:tailwindcss/recommended" to .eslintrc.json file

prettier and eslint can conflict sometimes

- npm install eslint-config-prettier
- npm install prettier

and autopretty the import

- npm install eslint-plugin-import --save-dev
- add the plugin import in .eslintrc.json file

vscode setup

- create vscode settings.json
- and make sure have eslint, prettier, prettier eslint extension
(well, it's more like for the sake of safety in vscode :D)
(well, the eslint file is provided :D)
</details>

<details>
  <summary>=== Setup Tailwindcss ===</summary>
Theming :D

Something interesting to see:
https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer

</details>

<details>
  <summary>=== Setup Fonts ===</summary>
Well, you know how to use local Fonts
\*Hmmm I still have no idea what's the difference between font.className and font.variable

And also don't forget to specify the font on tailwindcss config and globalcss

</details>

<details>
  <summary>=== Assets and Metadata ===</summary>
Well set up the meta data... :v
</details>

<details>
  <summary>=== Client vs Server Paradigm ===</summary>
When to render client or server component?

- Basically all user interactions will be client component:

  - Clicking buttons
  - Entering information input in fields
  - Triggering events
  - Using react hooks
    Because it relies on user's browser capability

- If it's not user interactions such as:
  - Fetching data from server
  - Displaying static content
  - Performing server-side computations
  Do it as server component
  </details>

<details>
  <summary>=== Different Rendering Strategies ===</summary>
Rendering

- It's a process of generating or recreating the UI from the code

How code gets converted into websites

- Once the compilation is complete, which involves converting from higher-level programming
  language into lower-lever programming language (binary code), our application goes to two
  phases: Build Time and Run Time
  - Build Time
    It's a series of steps where we prepare our app code for production, involving the steps
    of code compilation, bundling, optimization, etc
  - Run Time
  Refers to the time when the compiled app is executing and running, involving the dynamic
  execution of the app's code.
  It's about handling user interaction, responding to events, data processing,
  interacting with external services or APIs
  </details>

<details>
  <summary>=== Setup Themes ===</summary>

- Using npm install next-themes
- Setup context provider to use the themes provider (set up in context/Themes.tsx)
- Useful link: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#api
- If there is a hydration error: just pass <code>suppressHydrationWarning</code> to the html tag in layout.tsx

NOTE: UNIQUE THINGS HERE!!!
So basically I just surfing around about "use client" in layout.tsx doesn't block it's page to be server component, but page.tsx and the children component has strict rules about this (client component parent will only have client component children)
Based on ChatGPT: NextJS has special rules for where the layout.tsx can be client and the children can be client or server. It is because layout.tsx serves as a wrapper for the app's routing (?)

</details>

<details>
  <summary>=== Setup Shadcn ===</summary>

- Well, you know how
</details>

<details>
  <summary>=== Creating the Navbar ===</summary>

- Implementing useTheme from next-themes to setup theme toggler
- The rest of it... well... styling
</details>

<details>
  <summary>=== Introduction to Authentication ===</summary>

https://courses.jsmastery.pro/course/ultimate-nextjs/008_authentication/001_what-is-authentication-copy
https://auth0.com/docs/authorization/concepts/authz-and-authn
https://roadmap.sh/guides/session-based-authentication
https://roadmap.sh/guides/basics-of-authentication
https://roadmap.sh/guides/jwt-authentication

- Authentication
  - Authentication is the process of verifying the identity of a user. It ensures that the person or entity accessing the system is who they claim to be.
- Authorization
  - Authorization, on the other hand, determines what actions a user is allowed to perform within the system after they've been authenticated. It defines the permissions and access levels granted to users based on their identity and role.

Types of Authentication

- Session-based
- Token-based (JWT)
- OAuth
- Basic Authentication
</details>

<details>
  <summary>=== HTTP State Management Mechanisms ===</summary>
https://courses.jsmastery.pro/course/ultimate-nextjs/008_authentication/002_http-state-management-mechanisms

</details>

<details>
  <summary>=== Create Auth Routes ===</summary>

It's more about creating routes in group for the auth, so:
(auth) -> layout.tsx, /sign-in/page.tsx, /sign-up/page.tsx
(root) -> layout.tsx
layout.tsx

</details>

<details>
  <summary>=== Create Auth Layout & Social Auth Form ===</summary>

- It's about creating the layout for auth and separate the form only
- It's interesting that I also can make tailwindclass for backgroundImage: check tailwind.config.ts and the layout.tsx for auth
- Naming new tailwindclass also can use 'number': check tailwind.config.ts on borderRadius "2"
- There is "invert-colors" that can invert the color of the image base on the theme, check global.css (it also uses class called invert from tailwind builtin)

</details>

<details>
  <summary>=== Setup NextAuth with Github Provider ===</summary>

- Well it uses Auth.js
- The process kind of similar to tutorial I had
- Also need to look at Auth.js documentation, esp the getting started
- When creating Github OAuth app, there is section wether Enable Device Flow or not, it is designed for devices that don't have an easy way to input text such as smart tv, gaming console
- </details>

<details>
  <summary>=== Implement Github SignIn ===</summary>

- There is a nice diagram explanation here about how auth works: https://courses.jsmastery.pro/course/ultimate-nextjs/008_authentication/006_implement-github-signin
- Folder called constants to store const, example the routes.ts
- So far, the auth error handling looks simple:
  - using try cath, with try only await the signIn() from next-auth/react
  - the catch would be catching any kind of error with a little bit of conditional rednering
  - I think all kind of 'error' is already thrown by the auth.js itself, I just need to 'catch' it
- NEW THINGS:
  - So turns out Auth.js also has SessionProvider that I can use. On previous auth tutorial, it uses auth() from created auth.ts file and use it in asynchronus
  - To use it: set provider in root layout.tsx (Look at root layout.tsx)
  - WHOOPS!! I just found that it's better to use the exported auth() for the Nextjs App router, HMMMMMMM
  - I wonder what will happened if I still use it...
  - Okay, I think JSMastery will do two approach:
    - If the component is server component, it will use auth() from the auth.ts
    - If the component is client component, it will use the hook/the context provider from the SessionProvider
  - Let's see if it's true, will update this part later...

</details>

<details>
  <summary>=== Implement Google SignIn ===</summary>

- Same thing
</details>

<details>
  <summary>=== Mobile Navigation ===</summary>

- He seperates the NavLink into its own component, interesting way to make it reusable :D
</details>

<details>
  <summary>=== Impelemnt LeftSideBar ===</summary>

- The NavLink used again here, so it works like a charm :D
</details>

<details>
  <summary>=== Implement RightSideBar ===</summary>

- I just realised the usage of max-lg:hidden, I mean what does it do?
- NEW THINGS: I can use the constants' key (in routes for example) to be a function that requires param and return a string! Check RightSidebar.tsx
- NEW THINGS: There is a way to show icon dynamically, using devicon (look at TagCard.tsx)

</details>

<details>
  <summary>=== What's State Management ===</summary>

- Well, in this more like encourage me to use "WHY" when planning to use state management, especially like Global Client State Management such as Redux, Zustand, etc
</details>

<details>
  <summary>=== Different Types of State Management ===</summary>

- Interesting to read: https://courses.jsmastery.pro/course/ultimate-nextjs/010_state-management/002_different-types-of-state-management
- Basically explains about the difference between local and global state
- Also encourage to choose based on requirements, rather than hype
- </details>

<details>
  <summary>=== URL State Management ===</summary>

- Well, he explains about I can use the url to hold the state, just like in most ecommerce
</details>

<details>
  <summary>=== Different URL Params in NextJS ===</summary>

- Very interesting post: https://courses.jsmastery.pro/course/ultimate-nextjs/010_state-management/005_different-url-parameters-in-nextjs
- If I want to get the params in the page.tsx -> get it from the page props
- If I want to get the params in component (esp. client component) use the useParams or useSearchParams
- But if the component is server, if the component is close to page.tsx, put it in props, one props drilling won't hurt
- But if ithe component is too far, well, make it client :/

</details>

<details>
  <summary>=== How to do URL State Management ===</summary>

- Through <Link href={{pathname: "/posts", query: { keyName: "valueName"},}}> Posts </Link>
- Using useRouter (for client component) router.push({pathname: "/posts", query: { keyName: "valueName", }};
- Through using URLSearchParams JS builtin
- There is npm package to ease the JS builtin even more :D = https://www.npmjs.com/package/query-string
</details>

<details>
  <summary>=== Home Layout ===</summary>

- Just make a framework for the home layout (search, filter, question posts)
</details>

<details>
  <summary>=== Local Search Bar ===</summary>

- I think he is going to create one component and literally use it in ALL use cases (What makes me wonder, how good is the styling gonna be? I mean it will be used in all kind of places) (Well, add the otherClasses to put tailwind styling...)
- This component is so cool! Basically this component is an implementation of STATE MANAGEMENT USING GOOD OLD URL QUERY
- It uses query-string package to basically manage url and the query. So I can add, modify, delete the query easily
- The component (LocalSearch.tsx) basicaly is an input component where every changes (onChange) will trigger the url making (through useEffect)
- The url making is generated using the helps of query-string to make a function to update the url query (formUrlQuery) and if there is nothing inside the input means need to remove the query from the url (using removeKeysFromUrlQuery)
- Then don't forget to debounce it
</details>
