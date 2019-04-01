# Armada.nu

Armada.nu is built upon [Phenomic](https://github.com/MoOx/phenomic) and 
Netlify CMS](https://github.com/netlify/netlify-cms). Netlify CMS is a Content Management System that provides a graphical interface to edit the website. 

Phenomic is a static site generator that creates a website out of what is build using the CMS. 

## Setup
You will need access though the Armada team to be able to contribute as a developer or writer. To contribute as a developer, start by cloning this repository. 

```
git clone [ADDRESS TO THIS REPOSITORY]
```

To clone using SSH you need to setup your SSH keys with GitHub. Otherwise you can clone using the HTTPS option instead with your username and password.

### 1. Ensure correct node and npm versions
Node should be: 6.5.0 (To check write: node -v)  
NPM should be updated to the latest version 3.10.3 (To check write: npm -v)

**Downgrading node:**
```sh
npm install -g n
sudo n 6.5.0 
```

**Updating npm:**
```sh
npm install -g npm
```

### 2. Install dependencies
Run this command to install the dependencies that armada.nu is built on. This only needs to be done the first time you download this repo, or after a new dependency has been added. 

```sh
npm install
```

### 3. Run development server

```sh
npm start
```

When developing locally you will not have access to the Admin panel. For this reason we have a separate environment to test the CMS in.
The branch webtest is meant to be this environment and netlify can deploy that branch to another subdomain.

## Build for production
To build for production there is a script available through phonemic. This can be run manually to create a production ready site. 
If you deploy through netlify, you only need to provide this command once in when creating the netlify site. 

```sh
npm run build
```

## phenomic-cms

The cms tracks changes on a specific brach. Make sure when you merge branches that master and development branch still have branch master, and that webtest has branch webtest.

    backend:  
     name: github  
     repo: user-name/repo-name #user/repo  
     branch: master


