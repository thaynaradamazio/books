import { Router } from "./Route";
import "./global.css";

import { createServer, Model } from "miragejs";
import books from "./api/books.js";

createServer({
  models: {
    book: Model
  },

  routes() {
    this.namespace = "api";

    this.get("/books", (schema, request) => {
      return schema.books.all();
    });

    this.post("/books", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.books.create(attrs);
    });
    this.delete("/books/:id", (schema, request) => {
      let id = request.params.id;

      return schema.books.find(id).destroy();
    });

    this.get("/books/:id", (schema, request) => {
      let id = request.params.id;

      return schema.books.find(id);
    });

    this.put("/books/:id", (schema, request) => {
      let id = request.params.id;
      let attrs = JSON.parse(request.requestBody);

      return schema.books.find(id).update(attrs);
    });
  },

  seeds(server) {
    books.map((book) => server.create("book", book));
  }
});

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
