import faker from "faker";
import { createServer, Factory, Model, ActiveModelSerializer } from "miragejs";

const ApplicationSerializer = ActiveModelSerializer.extend({
  embed: true,
  root: false,
});

export default () => {
  const server = createServer({
    environment: "test",
    serializers: {
      application: ApplicationSerializer,
    },
    models: {
      user: Model,
    },
    factories: {
      user: Factory.extend({
        id: faker.datatype.datetime().getTime,
        login: faker.internet.userName(),
        avatar_url: faker.internet.avatar(),
        name: `${faker.name.firstName} ${faker.name.lastName}`,
        bio: faker.lorem.paragraph(),
      }),
    },
    routes() {
      this.urlPrefix = "https://api.github.com";
      this.get("/users/:username", async (schema, request) =>
        schema.findBy("user", { login: request.params.username })
      );
    },
    fixtures: {
      users: [
        {
          id: 583231,
          login: "octocat",
          avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
          name: "The Octocat",
          bio: "The Octocat bio",
        },
      ],
    },
  });

  server.loadFixtures();

  afterEach(() => {
    server.shutdown();
  });

  return server;
};
