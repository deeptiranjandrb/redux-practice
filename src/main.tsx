import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  {thunk}  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
]);
//local imports
import rootReducer from './reducers/index.ts';

//asset imports
import './index.css'
const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
