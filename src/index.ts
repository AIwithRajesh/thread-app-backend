import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import { gqlserver } from "./graphql/index.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
// app.use(bodyParser);

app.get("/", (req, res) => {
  res.json({ msg: "Working" });
});

// GRAPHQL SERVER
app.use("/graphql", expressMiddleware(gqlserver));

app.listen(PORT, () => console.log("Server is running on port:-", PORT));
