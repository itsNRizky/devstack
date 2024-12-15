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
</details>

<details>
  <summary>=== Setup Shadcn ===</summary>

- Well, you know how
</details>

<details>
  <summary>=== Creating the Navbar ===</summary>

- </details>
