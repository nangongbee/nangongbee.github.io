import rss from '@astrojs/rss';
import { posts } from '../data/posts';

export function GET(context) {
  return rss({
    title: 'Tim Wu',
    description:
      'Engineering notes on backend systems, with learning notes labeled as such.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.pubDate),
      link: post.href,
    })),
  });
}
