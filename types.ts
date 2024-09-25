export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export enum Page {
  'SSG',
  'ISR'
}
