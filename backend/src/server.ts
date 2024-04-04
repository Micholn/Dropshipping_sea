import express, { Application, NextFunction, Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet'; 
import http from 'http';
import { DBConnect } from './Dbconfig/db';
import passportJWT from "passport-jwt";
import passport from "passport";
import authRouter from './Routers/authRouter';
import productRouter from './Routers/productRouter';
import profileRouter from '/Routers/profileRouter';
import categoryRouter from './Routers/categoryRouter';
import roleRouter from './Routers/roleRouter';
import Middlewares from './Middleware/authMiddleware';
import allApis from './swagger.json';
import * as swaggerUi from "swagger-ui-express";
import permissionRouter from './Routers/permissionRouter';
import adminRouter from './Routers/adminRouter';
import publicRouter from './Routers/adminRouter';


let ExtractJwt = passportJWT.ExtractJwt;
let jwtStrategy = passportJWT.strategy;

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: "6f733cff-f788-4cf6-95bf-dea989617040",
  
}
//eslint-disable-next-line new-cap
let strategy = new jwtStrategy(jwtOptions, (jwtPaylo






const bcrypt = require("bcrypt");/*module for hashi
const passport = require("passport") //for authentication 
const flash = require("express-flash");//to display messages a
const session = require("express-session"); 

const users = [] //create a variable and storing our users in an empty array instead of a database 

app.set("view-engine", "ejs")
app.use(express.urlencoded({ extended: false })); /**tel*
email and password from our forms and access them in a request variable inside the post method */
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,             
  saveUninitialized: false   
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method')





/**
 * starting the public server
 */
public start = (port: number) => {
  return new Promise(resolve, reject) => {
    const server = http.createServer(this.app);
    server.listen(port, () => {
      resolve(port);
    }).on("error", (err: Object) => reject(err));
  }
}

export default Server;