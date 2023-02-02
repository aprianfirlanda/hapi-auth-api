const Hapi = require('@hapi/hapi');

const createServer = async (container) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([]);

  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({
      value: 'Hi, welcome to auth api',
    }),
  });

  return server;
};

module.exports = createServer;
