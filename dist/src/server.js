"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const route_1 = __importDefault(require("./route/route"));
(0, dotenv_1.config)();
const port = Number(process.env.SERVER_PORT) || 1212;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(route_1.default);
//Get 
route_1.default.get('/', (req, res) => {
    return res.send(`<h1>Hello API with NodeJS by Mark !!!</h1>`);
});
//Throw Error
app.use((req, res) => {
    const error = new Error(`Sorry Not Found`);
    //console.log(`${error}`)
    return res.status(404).send(` ${error}`);
});
//Listen port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map