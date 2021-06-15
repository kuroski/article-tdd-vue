export type User = {
  avatarUrl: string;
  name: string;
  bio: string;
};

export type State = {
    user: User | undefined | null
}
