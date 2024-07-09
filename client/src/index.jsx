import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { baseURL } from "./services/api/config";
import ReactDOM from "react-dom/client";
import View from "./view/view";
import "./index.scss";

const client = new ApolloClient({
  uri: baseURL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <View />
  </ApolloProvider>
);
