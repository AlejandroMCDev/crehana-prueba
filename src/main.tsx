import "./index.css";
import { createRoot } from "react-dom/client";
import { apolloClient } from "./lib/graphql/apolloClient";
import { router } from "./router";
import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={apolloClient}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
