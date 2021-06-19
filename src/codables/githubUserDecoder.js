import * as d from "decoders";

const UserDecoder = d.object({
  id: d.map(d.either(d.number, d.string), Number),
  login: d.string,
  avatar_url: d.string,
  name: d.string,
  bio: d.nullable(d.string),
});

/** @type {d.Guard<import("@/types").User>} */
const UserGuard = d.guard(
  // I'm changing the case by hand for simplicity
  // You can use any other helper for that
  d.map(UserDecoder, ({ avatar_url, ...rest }) => ({
    avatarUrl: avatar_url,
    ...rest,
  }))
);

export default UserGuard;
