import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage'
import CommunityPage from './pages/CommunityPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/Recipe",
    element: <RecipeListPage />,
  },
  {
    path: "/Recipe/:recipe_id",
    element: <RecipePage />,
  },
  {
    path: "/Community",
    element: <CommunityPage />,
  },

 
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);