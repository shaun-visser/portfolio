import Bounded from '@/app/components/Bounded';
import { blogPosts } from '../../dummy/data';
import Heading from '@/app/components/Heading';
import { formatDate } from '@/app/utils/formatDate';
import Image from 'next/image';
import { BlogPageProps } from '@/app/interfaces/components';

type Params = { slug: string };

export default function Page({ params }: { params: Params }) {
  const article = blogPosts.blogs.find((item: BlogPageProps) => {
    return item.slug === params.slug;
  });
  if (!article) return;
  const formattedDate = formatDate(article.date);

  return (
    <main>
      <Bounded as="article">
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
          <Heading as="h1">{article.title}</Heading>
          <div className="flex gap-4 text-yellow-400">
            {article.tags.map((tag: string, index: number) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
            {formattedDate}
          </p>
          <div
            className="prose prose-lg prose-invert mt-12 w-full md:mt-20"
            dangerouslySetInnerHTML={{ __html: article?.copy }}
          ></div>
          <Image
            src={article.hoverImage}
            alt={article.title}
            width={700}
            height={700}
            className="my-4 w-full h-auto"
          />
        </div>
      </Bounded>
    </main>
  );
}
