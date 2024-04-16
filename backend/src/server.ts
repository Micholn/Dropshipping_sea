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


let ExtractJwt = passportJWT.Extract
let jwtStrategy = passportJWT.strategy;

let jwtOptions = {
  jwtFromRequest: ExtractJwt.from
  secretOrKey: "6f733cff-f788-4cf6-95bf-dea989617040",
}

// eslint-disable-next-line new-cap
let strategy = new jwtStrategy(jwtOptions, (jwtPayload, next) => {
  next(null, jwtPayload.id);
})
Passport.use(strategy);
class Server {
  private app: any;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConfig()
     //this.dbConnect();
  }

  /**
   * config for middlewares
   */

  private config() {

    this.app.use(helmet());
    this.app.use(Passport.initialize());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "1mb" })); // 100kb default 
    this.app.use(cors());

    let path = (process.env.NODE_ENV?.toLowerCase() == 'development') ? '/Public' : './Public'
    var publicDir = require("path").join(__dirname, path);
    console.log(publicDir)
    this.app.use(express.static(publicDir));
  }

  /**
   * connection for database 
  */
  private dbConfig() {
    DBConnect()
  }

  /**
   * 
   */
  private routerCnfig() {
    let middleware = new Middlewares();
    let preAuth = [
      Passsport.authenticate("jwt", {
        session: false
      })
    ]
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