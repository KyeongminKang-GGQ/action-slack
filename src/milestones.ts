export class Milestone {
  constructor(
    public title: string,
    public id: number,
    public html_url: string,
    public open_issues: number,
  ) {}
}
