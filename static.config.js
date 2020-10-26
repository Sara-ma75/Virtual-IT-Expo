import path from 'path';
import posts from './src/data/posts.json';

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, `src`, `index.tsx`),
  getRoutes: () => [
    {
      template: `src/pages/index.js`,
      path: `/`,
    },
    {
      template: `src/pages/examples/Landing`,
      path: `/landing-page`,
    },
    {
      template: `src/pages/examples/Login`,
      path: `/login-page`,
    },
    {
      template: `src/pages/examples/Profile`,
      path: `/profile-page`,
    },
    {
      template: `src/pages/examples/Register`,
      path: `/register-page`,
    },
    {
      children: posts.map((post) => ({
        getData: () => ({
          post,
        }),
        path: `/post/${post.id}`,
        template: `src/containers/Post`,
      })),
      getData: () => ({
        posts,
      }),
      path: `/blog`,
    },
  ],
  plugins: [
    `react-static-plugin-typescript`,
    [
      require.resolve(`react-static-plugin-source-filesystem`),
      {
        location: path.resolve(`./src/pages`),
      },
    ],
    require.resolve(`react-static-plugin-sass`),
    require.resolve(`react-static-plugin-reach-router`),
    require.resolve(`react-static-plugin-sitemap`),
  ],
};
