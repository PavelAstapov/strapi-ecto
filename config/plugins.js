module.exports = ({ env }) => ({
    seo: {
        enabled: true,
    },
    ckeditor: true,
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
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
})
