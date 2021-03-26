# Node Express Auth Login

> Simple auth set up for a more custom approach with Passport Js and React

- Back-end: Node, Express, Passport, JWT, MongoDB
- Front-end: React
- This follows some guidance from Zach Gollwitzer's auth tutorials found [here](https://www.youtube.com/playlist?list=PLYQSCk-qyTW2ewJ05f_GKHtTIzjynDgjK).
- It also implements storing the jwt inside a signed cookie - and verifying that with a custom extractor function in Passport. ([Documentation Here](http://www.passportjs.org/packages/passport-jwt/))
- Routing has been implemented using context, following react router's documentation [here](https://reactrouter.com/web/example/auth-workflow) and [here](https://usehooks.com/useAuth/).
- A request is made to the server to destroy cookie upon logout.
- Joi is used for back-end input validation

### Prerequisites

---

This project requires [NodeJS](http://nodejs.org/) (version 12 or later) and [NPM](https://npmjs.org/). To make sure you have them available on your machine, try running the following command:

```
npm -v && node -v
```

### Installation

---

Start with cloning this repo on your local machine:

```
git clone git@github.com:tgdpez/Auth-Login-Template.git
cd Auth-Login-Template
```

To install and set up the library, run:

```
npm install
```

### Usage

---

#### Serving the app

```
npm run dev
```

Or if you wanted to run front and back end on separate terminal (for debugging):

```
npm run client
```

```
npm run server
```

#### Generating Public & Private Keys

From the main directory run

```
node generateKeyPair.js
```

This will generate a public and private key in the root directory. Make sure you don't somehow upload this to github. There are a couple of options.

- Check the root .gitignore file has the lines below. This should prevent the upload of the keys. (If they are accidentally uploaded, delete the files and use git commit --amend to remove it from git history. Once deleted and this has been added to .gitignore, you can re-generate them.):

```
#Keys
# *.pem
# *.properties
private_key.pem
public_key.pem
```

- Alternatively, you can generate the keys, and then use an online UTF8 converter. Copy the converted public and private UTF8 into a .env file, and instead of using node's file system (current set up), point to it with process.env.PUB_KEY or process.env.PRIV_KEY. You'll need to update in three places (authenticateJWT.js, authHelper.js, and server.js)

### Contributing

---

Message, comment, or pull request. This was mainly done as practice and in hopes of having a point of reference for the future. Open to constructive criticism or suggestions to improve. Looking to make other repos with other Auth methods for reference.

### Roadmap

---

- Mainly for dev testing and reference, not for prod. Still need to test with an actual deployment.

- Will make new branches if any variations or updates come up.

- Code is repetitive and could use refactoring. Will refactor as I have time.

### Project Status

---

Low to minimal maintenance.
