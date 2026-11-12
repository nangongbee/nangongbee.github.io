export type Post = {
  title: string;
  description: string;
  pubDate: string;
  href: string;
  archived?: boolean;
};

export const posts: Post[] = [
  {
    title: '有主线的地牢',
    description:
      '用 seed 生成带主线、支线和钥匙门的房间图：约束、主线选择栈、短路比和钥匙可达性。',
    pubDate: '2026-11-12',
    href: '/2026/11/12/dungeon-with-a-main-path/',
  },
  {
    title: '世界这么大',
    description: 'Archived note from the previous version of this site.',
    pubDate: '2019-12-10',
    href: '/2019/12/10/hello-world/',
    archived: true,
  },
];
