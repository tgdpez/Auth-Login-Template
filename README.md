# Auth-Login-Templates

> Boilerplate for quick auth set up. This "component library" groups together different references for auth setups - implementing different methods. Toggle through different branches to see the other variations.

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

Or if you wanted to run front and back end on separate terminals:

```
npm run client
```

```
npm run server
```

### Contributing

---

Message, comment, or pull request. Open to constructive criticism or suggestions that can help me improve.

### Roadmap

---

- Mainly DEV implementation and not for prod. Still need to test deployment.
- Will continue to add branches as I come across the need for more auth references
- These compilations are still a little rough and need to be cleaned up more
- Code could use refactoring. Will refactor as I have time.

### Main Branch - Express, Passport, and JWT Authentication

---

- Node, Express, Passport back-end
- React front-end
- This follows some guidance from Zach Gollwitzer's auth tutorials found [here](https://www.youtube.com/playlist?list=PLYQSCk-qyTW2ewJ05f_GKHtTIzjynDgjK).
- It also implements storing the jwt inside a signed cookie - and verifying that with a custom extractor function in Passport. ([Documentation Here](http://www.passportjs.org/packages/passport-jwt/))
- Routing has been implementing following documentation from [here](https://reactrouter.com/web/example/auth-workflow) and [here](https://usehooks.com/useAuth/).
- A request is made to destroy cookie upon logout.
- Using Joi for back-end validation
