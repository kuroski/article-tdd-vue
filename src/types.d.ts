export type User = {
  avatarUrl: string;
  login: string;
  name: string;
  bio: string | undefined | null;
};

export type State = {
    user: User | undefined | null
}
