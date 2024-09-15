import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookList from "./components/BookList.jsx";
import AddBooks from "./components/AddBooks.jsx";
import BookDetails from "./components/BookDetails.jsx";

import store from "./store.js";
import { Provider } from "react-redux";
import NotFound from "./components/NotFound.jsx";
import Header from "./components/Header.jsx";
import BookListCategory from "./components/BookListCategory.jsx";
import HomePage from "./components/HomePage.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/booklist",
        element: <BookList />,
      },
      {
        path: "/AddBooks",
        element: <AddBooks />,
      },

      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/booklist/:category",
        element: <BookListCategory />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header /> */}
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </StrictMode>
);
