import { render } from "@testing-library/vue";
import Element from "element-ui";
import { storeConfig } from "@/store";
import UserView from "@/views/UserView.vue";

describe("UserView", () => {
  test("a user can search for Github usernames", () => {
    const view = render(
      UserView,
      {
        store: storeConfig,
      },
      (vue) => {
        vue.use(Element);
      }
    );

    view.debug();
  });
});
