# Auth-Login-Templates

This "component library" groups together different references for auth setups - implementing different methods. Toggle through different branches to see the other methods.

#### Main Branch - Express, Passport, and JWT Authentication

- Node, Express, Passport back-end
- React front-end
- This follows some guidance from Zach Gollwitzer's auth tutorials found [here](https://www.youtube.com/playlist?list=PLYQSCk-qyTW2ewJ05f_GKHtTIzjynDgjK).
- It also implements storing the jwt inside a signed cookie - and verifying that with a custom extractor function in Passport.
- Routing has been implementing following documentation from [here](https://reactrouter.com/web/example/auth-workflow) and [here](https://usehooks.com/useAuth/).
- A request is made to destroy cookie upon logout.
- Joi for back-end validation

#### Auth0, Emotion, Bootstrap, React

- Node, Express, Passport back-end
- React front-end
