# Armada.nu

Armada.nu is built upon [Gatsby](https://www.gatsbyjs.org/) and [Static CMS](https://github.com/StaticJsCMS/static-cms).

Static CMS is a Content Management System that provides a graphical interface to edit the website. It integrates with Netlify which is our deployment tool. Note that using the Static CMS panel to edit will always commit to master branch.
Gatsby is a static site generator that creates a website out of what is created using the CMS.

## Setup

You will need access though the Armada team to be able to contribute as a developer or writer. To contribute as a developer, start by cloning this repository.

```git
git clone <url>
```

To clone using SSH you need to setup your SSH keys with GitHub (recommended). Otherwise you can clone using the HTTPS option instead with your username and password.

### 1. Ensure correct node and npm versions

Please use any version of Node 18 with npm v.9.5.0

**Installing node:**

Please only use NVM, Node version manager as this will help it so that you can keep your current node version and that you can keep developing in case you need to update your local Node for other apps but keep developing in Node 18.

**_Windows_**  
We recommend [nvm-windows](https://github.com/coreybutler/nvm-windows).
[download-link](https://github.com/coreybutler/nvm-windows/releases/download/1.1.10/nvm-setup.exe).

```
nvm install 18
nvm use 18
```

If you already have a node version installed NVM will detect it and ask you to attach it
**_Mac/Linux (through Node Verison Manager)_**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

```
**Updating npm:**
In case your npm (after upgrading Node version) is still stuck on an old version please use


```sh
npm install -g npm
```


### 2. Install dependencies

Run this command to install the dependencies that armada.nu is built on. This only needs to be done the first time you download this repo, or after a new dependency has been added.

```sh
npm i
```

### 3. Install Gatsby CLI

```
npm install -g gatsby-cli
```

This will install gatsby-cli 5.7.0 check version by typing gatsby-cli -v
Note that gatsby-cli could install locally for that Node meaning if you download another version in nvm you have to install gatsby-cli again

If gatsby-cli is not 5.7.0 use this instead:

```
npm install -g gatsby-cli@5.7.0
```

### 4. Run development server

```sh
gatsby develop
```

The site will be running att localhost:8000  
You can find the Netlify CMS admin panel at localhost:8000/admin/
node-sass is a module which gives issues and varies depending on which Node you use.
Make sure that you have python installed and if gatsby develop doesn't work use

```
npm rebuild node-sass
```

Make sure that python is added to Path

## Build for production

To build for production there is a script available through Gatsby. This can be run manually to create a production ready site. Be sure to check that the build succeeds before attempting to merge your changes with master.

```sh
gatsby build
```

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby quick start
</h1>

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
