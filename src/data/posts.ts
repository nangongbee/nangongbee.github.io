export type Post = {
  title: string;
  description: string;
  pubDate: string;
  href: string;
  archived?: boolean;
};

export const posts: Post[] = [
  {
    title: '世界这么大',
    description: 'Archived note from the previous version of this site.',
    pubDate: '2019-12-10',
    href: '/2019/12/10/hello-world/',
    archived: true,
  },
];
