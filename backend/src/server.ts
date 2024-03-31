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
import adminRouter from './Routers/adminRouter';





let Extracjwt = passportJWT.extract;
let jwtStrategy = passportJWT.strategy;

let jwtOptions = {
  jwtFromRequest: ExtractJwt.strategy;
  

//eslint-disable-next-line new-cap
let strategy = new jwtStrategy(jwtOptions, (jwtPaylo






const bcrypt = require("bcrypt");/*module for hashing our users password and comparing hashed
password to ensure security*/
const passport = require("passport") //for authentication 
const flash = require("express-flash");//to display messages and response
const session = require("express-session"); //to persist users across di

const users = [] //create a variable and storing our users in an empty array instead of a database 

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false })); /**telling our app that we want to take the 
email and password from our forms and access them in a request variable inside the post method */
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET, //going to encrypt all of our information
  resave: false,             //we don't wanna resave if nothing is changed
  saveUninitialized: false   //we don't wanna save an empty value
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