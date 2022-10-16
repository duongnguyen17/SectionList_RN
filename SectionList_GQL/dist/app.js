"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "default ne";
const MONGO_URI = (_b = process.env.MONGO_URI) !== null && _b !== void 0 ? _b : "default ne";
const mongoose_1 = __importDefault(require("mongoose"));
// load schema & resolver
const schema_1 = __importDefault(require("./src/schema/schema"));
const resolver_1 = __importDefault(require("./src/resolver/resolver"));
// connect to mongodb
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(MONGO_URI);
        console.log(`connected mongodb at ${MONGO_URI}`);
    }
    catch (error) {
        console.log("error", error);
    }
});
connectDB();
// create instance ApolloServer
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolver_1.default,
});
const app = (0, express_1.default)();
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    // create app
    yield server.start();
    server.applyMiddleware({ app });
    app.listen({ port: PORT }, () => {
        console.log(`server start at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
startApp();
