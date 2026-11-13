export type Post = {
  title: string;
  description: string;
  pubDate: string;
  href: string;
  archived?: boolean;
};

export const posts: Post[] = [
  {
    title: '从采到能训：机器人数据流水线的工程化',
    description:
      '从时间同步、脏数据切分、动作语言对齐、数据格式到版本追溯，拆解机器人数据从原始采集到可训练数据集的工程流程。',
    pubDate: '2026-11-13',
    href: '/2026/11/13/robot-data-pipeline-engineering/',
  },
  {
    title: '机器人数据从哪来：五种采集方式一文看懂',
    description:
      '从程序员视角梳理具身智能里五种常见数据采集方式：真机遥操作、仿真、UMI、Ego 与全模态采集服，以及它们如何接力使用。',
    pubDate: '2026-11-12',
    href: '/2026/11/12/robot-data-collection-methods/',
  },
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
