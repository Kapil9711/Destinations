#complete mern series

# TODO: Part 1 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

1- create a server folder
2- than cd into that folder
3- npm init // to initialize the node project
4- install expres.js // visit npm express package site , npm i express
5- create server.js file
6- import express and invoke the function express() // this expres() function return a object which have server methods
7- add nodemon package to run server continously //also add script to package.json
8- create a simple get request on root '/' denotes root //example only
9- spin the server on any port to continue development

# TODO: Part 2 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

10- create router folder // to set router middleware, express.Router() is a class;
11- create file auth-router.js // this file hold all routes
12- import express and invoke const router = express.Router();
13- create root route using router.route() // using example callback function
14- create /register route // using example callback function
15- export router //module.exports = router;
16- import router middleware
17- mount or use it // app.use('/api/auth',router)

# TODO: Part 3 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

18- create controller file //auth-controllers.js
19- create controller function for home route
20- create controller function for register route
21- export the controllers using name export
22- import all controller in auth-router file and use them in thier specific route

# TODO: Part 4 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

23- postman setup
24- change get route of register to post route
25- use express.json() middleware // it allow us to access the data in json format
26- set header as content-type application/json in postman
27- test rigester data using postman //access the req.body property;

# TODO: Part 5 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

28- create utils folder and make db.js file
29- install mongoose and dotenv package // npm i mongoose and dotenv
30- get mongodb atlas connect URL
31- import mongoose and connect to atlas db and export the connection
32- require(dotenv).config()// to use dontenv files
33- create a MONGO_URI variable in .env file
34- import connection and connect to db then spin the server

# TODO: Part 6 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

35- create models folder
36- create model.js file in models
37- import mongoose
37- create a instance of mongoose.Schema() and create a schema
38- create a model //model name shoud start uppercase letter;
39- export that model

# TODO: Part 7 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

40- import model in controller file
41- recive data from postman
42- check is the email exist or not // if exist return 'user already exits' model.findOne({email:email})
43- else create a new user model.create({username,password});
44- send response that user created
45- if error occur send error response

# TODO: Part 8 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

46- install bcrypt package it encrypt password using hasing
47- import bycrypt in models.js
48- create userSchema.pre("save",fucntion(){}) // this is a middleware which runs before saving data to db
49- check is !user.isModified('password') // next()
50- create saltRound = await bcrypt.genSalt(10);
51- const hashPassword = await bcrypt.hash(user.password,saltRound);
52- set user.password = hashPassword;

# TODO: Part 9 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

53- create userSchema.methods.generateToken function methods is a global instance // create it in models file
54- install jsonwebtoken npm i jsonwebtoken and require it
55- create JSON_SECRET_KEY varibale in .env file
56- return json.sign({ payload,secretKey,{expiressIn:'30d'}}); // payload is the userdetails that we want provide jwt to authenticate user and generate token

# TODO: Part 10 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

57- create login route in router
58- create login controller in auth controller
59- check if user exist or not if not send res invalid credentials else continue
60- compare the password user entered with registerd password // use bcrypt.compare(enteredpass,registeredpass);
61- check output of compare fucntion if true than send res{msg:'login sucesful' token , userid} else send status(401) res({msg:'invalid email and password'})

# TODO: Part 11 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

62- install package zod for authentication // npm i zod
63- create new folder validators //newfile auth-validator.js
64- import Zod in that file
65- create signup schema //const signupSchema =z.object({
us-ername:z.string({required_error:"Name is required"}).trim().min(3,{msg:'name must be greater than 3 characters}).max(255,{msg:'name must not be greater than 255 charachter})
})-
66- export this schema
67- create validate-middleware folder and file
68- create debounce function validate // it return async function
69- use schema.parsAsync(req.body) // set req.body = parseBody;
70- call next()
71- catch the error and send as response
72- export validator
73- import schema and validator in router file
74- pass the validate middle ware in register router before controller middleware

# TODO: Part 12 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

75- create auth-errorhandler in middleware
76- create errorMiddleware (err,req,res,next)
77- return status msg and extradetails
78- export errormiddleware
79- impor error-middleware in server.js and use it in end of all middleware

# TODO: Part 13 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***

80- create a new contact model
81- export the model
82- create new contact route
83- import controller to router file
84- create controller file
85- import model in controller
86- export controller
87- use that router in server.js // path /auth/form

# TODO: Part 14 frontend **\*\*\*\***\*\***\*\*\*\***\*\*\*\*\*\*\*\

88 install react-router-dom package
89 import BrowserRouter Routes Route
90 create route to home,about,contact,service,register,login

# TODO: Part 15 **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\*\*\*\

91 create component folder
92 Create navbar.jsx file
93 use Navlink instead of a tag //use to='/' not href
94 install styled componetns
95 styled the navbar
96 import navbar in app.jsx and use it about Routes tag
