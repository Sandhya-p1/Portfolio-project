import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import NavMoviesPopularPage from "./pages/NavMoviesPopularPage";
import NavMoviesNowPlayingPage from "./pages/NavMoviesNowPlayingPage";
import NavMoviesUpcomingPage from "./pages/NavMoviesUpcomingPage";
import NavMoviesTopRatedPage from "./pages/NavMoviesTopRatedPage";
import NavTVShowsPopularPage from "./pages/NavTVShowsPopularPage";
import NavTVShowsAiringTodayPage from "./pages/NavTVShowsAiringTodayPage";
import NavTVShowsOnTVPage from "./pages/NavTVShowsOnTVPage";
import NavTVShowsTopRatedPage from "./pages/NavTVShowsTopRatedPage";
import NavPeoplePopularPeoplePage from "./pages/NavPeoplePopularPeoplePage";
import MoviePageAccID from "./pages/MoviePageAccID";
import { FavoriteMoviesProvider } from "./context/favorite-movies.context";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/moviespopular",
        element: <NavMoviesPopularPage />,
      },
      {
        path: "/moviesnowplaying",
        element: <NavMoviesNowPlayingPage />,
      },
      {
        path: "/moviesupcoming",
        element: <NavMoviesUpcomingPage />,
      },
      {
        path: "/moviestoprated",
        element: <NavMoviesTopRatedPage />,
      },
      {
        path: "/tvshowspopular",
        element: <NavTVShowsPopularPage />,
      },
      {
        path: "/tvshowsairingtoday",
        element: <NavTVShowsAiringTodayPage />,
      },

      {
        path: "/tvshowsontv",
        element: <NavTVShowsOnTVPage />,
      },
      {
        path: "/tvshowstoprated",
        element: <NavTVShowsTopRatedPage />,
      },
      {
        path: "/peoplepopularpeople",
        element: <NavPeoplePopularPeoplePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePageAccID />,
      },
      // {
      //   path: "/favorites",
      //   element: <FavoritesMovies />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-3my55hfxmmlk1zn6.us.auth0.com"
      clientId="4Z2BfVIq7WRhstNq2j83YGzxjls0VjkM"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <FavoriteMoviesProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </FavoriteMoviesProvider>
    </Auth0Provider>
  </React.StrictMode>
);
