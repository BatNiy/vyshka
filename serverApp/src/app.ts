/// <reference path="../../typings/index.d.ts" />
import * as bodyParser from "body-parser";
import * as express from "express";
let path = require("path");

import * as indexRoute from "./routes/index";
// import ObjectService from "./Services/ObjectServices";

/**
 * The server.
 *
 * @class Server
 */
class Server {

    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        //configure routes
        this.routes();
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     * @return void
     */
    private config() {
        //configure jade
        // this.app.set("views", path.join(__dirname, "views"));
        // this.app.set("view engine", "jade");

        this.app.set('views', __dirname + '/html');
        this.app.engine('html', require('ejs').renderFile);

        //mount logger
        //this.app.use(logger("dev"));

        //mount json form parser
        this.app.use(bodyParser.json());

        //mount query string parser
        this.app.use(bodyParser.urlencoded({extended: true}));

        //add static paths
        this.app.use(express.static(path.join(__dirname)));
        this.app.use(express.static(path.join(__dirname, "bower_components")));

        // catch 404 and forward to error handler
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }

    /**
     * Configure routes
     *
     * @class Server
     * @method routes
     * @return void
     */
    private routes() {
        //get router
        let router: express.Router;
        router = express.Router();

        //create routes
        var index: indexRoute.Index = new indexRoute.Index();

        // let createService: ObjectService = new ObjectService.ObjectService();


        //home page
        // router.get("/", index.index.bind(index.index));
        // router.get("/ko", index.index.bind(index.index));
        router.get("/", (req: express.Request, res: express.Response) => {
            res.send("hello");
        });

        // router.get("/kurva", createService.);

        //use router middleware
        this.app.use(router);
    }
}

var server = Server.bootstrap();
export = server.app;