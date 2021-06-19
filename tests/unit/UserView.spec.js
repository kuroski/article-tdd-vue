import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Element from "element-ui";
import { storeConfig } from "@/store";
import UserView from "@/views/UserView.vue";
import mockServer from "../mockServer";
import githubUserDecoder from "@/codables/githubUserDecoder";

describe("UserView", () => {
  const build = () => {
    const view = render(UserView, { store: storeConfig }, (vue) => {
      vue.use(Element);
    });

    return {
      view,
    };
  };
  test("a user can search for Github usernames", async () => {
    const server = mockServer();
    const octocat = githubUserDecoder(server.schema.first("user")?.attrs);

    build();

    await fireEvent.update(
      screen.getByPlaceholderText("Pesquise o usuário"),
      String(octocat.login)
    );

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(screen.getByText(String(octocat.name))));

    expect(screen.getByAltText(String(octocat.name))).toHaveAttribute(
      "src",
      octocat.avatarUrl
    );
    expect(screen.getByText(String(octocat.bio))).toBeInTheDocument();
  });
});
