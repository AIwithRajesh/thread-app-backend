import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json);
app.use(bodyParser);
// GRAPHQL SERVER
const gqlserver = new ApolloServer({
    typeDefs: "",
    resolvers: {},
});
await gqlserver.start();
app.use("/graphql", expressMiddleware(gqlserver));
app.listen(PORT, () => console.log("Server is running on port:-", PORT));
//# sourceMappingURL=index.js.map