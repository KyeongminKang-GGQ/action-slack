export interface Issue {
  title: string;
  url: string;
  state: string;
  assignee?: {
    login: string;
  };
  milestone?: {
    title: string;
    url: string;
  };
  created_at: Date;
}
