import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
// app.use(bodyParser);

app.get("/", (req, res) => {
  res.json({ msg: "Working" });
});

// GRAPHQL SERVER
const gqlserver = new ApolloServer({
  typeDefs: `
    type Query {
      hello: String
      say(name: String): String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hey there, I am a graphql server",
      say: (_, { name }: { name: string }) => `Hey I am ${name}`,
    },
  },
});

await gqlserver.start();
app.use("/graphql", expressMiddleware(gqlserver));

app.listen(PORT, () => console.log("Server is running on port:-", PORT));
