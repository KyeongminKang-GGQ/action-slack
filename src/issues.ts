export interface Issue {
  title: string;
  node_id: string;
  html_url: string;
  state: string;
  assignee?: {
    login: string;
  };
  milestone?: {
    title: string;
    url: string;
    html_url: string;
  };
  created_at: string;
}
