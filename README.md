# Armada.nu

Armdada.nu is built upon [Phenomic](https://github.com/MoOx/phenomic) and 
Netlify CMS](https://github.com/netlify/netlify-cms). Netlify CMS is a Content Management System that provides a graphical interface to edit the website. 

Phenomic is a static site generator that creates a website out of what is build using the CMS. 

## Setup
You will need access though the Armada team to be able to contribute as a developer or writer. To contribute as a developer, start by cloning this repository. 

```
git clone [ADDRESS TO THIS REPOSITORY]
```

To clone using SSH you need to setup your SSH keys with GitHub. Otherwise you can clone using the HTTPS option instead with your username and password.

### 1. Install dependencies
Run this command to install the dependencies that armada.nu is built on. This only needs to be done the first time you download this repo, or after a new dependency has been added. 

```sh
npm install
```

### 2. Run development server

```sh
npm start
```

When developing locally you will not have access to the Admin panel. For this reason we have a separate environment to test the CMS in. 

## Build for production
To build for production there is a script available through phonemic. This can be run manually to create a production ready site. 

```sh
npm run build
```

## phenomic-cms

Change the repo name in the config.yml in the admin directory.

    backend:  
     name: github  
     repo: user-name/repo-name #user/repo  
     branch: master


