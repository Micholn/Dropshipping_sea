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

// eslint-disable-next-line new-cap
let strategy = new jwtStrategy(jwtOptions, (jwtPayload, next) => {
  next(null, jwtPayload.id);
});

Passport.use(strategy);
class Server {
  private app: any;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    
  }
}



/**
 * starting the express server
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