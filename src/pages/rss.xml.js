import rss from '@astrojs/rss';
import { posts } from '../data/posts';

export function GET(context) {
  return rss({
    title: 'Tim Wu',
    description:
      'Technical notes on software architecture, systems engineering, and practical implementation.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.pubDate),
      link: post.href,
    })),
  });
}
