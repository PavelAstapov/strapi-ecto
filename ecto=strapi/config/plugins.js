module.exports = ({ env }) => ({
    seo: {
        enabled: true,
    },
    ckeditor: true,
    graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
      tracing: false,
      },
    },
    menus: {
      config: {
        maxDepth: 3,
      },
    },
    publisher: {
      enabled: true,
    },
    'cookie-manager': {
      enabled: true,
      config: {
        localization: true
      }
    },
  },
})
