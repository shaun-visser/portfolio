import Bounded from '../components/Bounded';
import ContentList from '../components/ContentList';
import Heading from '../components/Heading';
import { blogPage, blogPosts } from '../dummy/data';

export default function Page() {
  const items = [...blogPosts.blogs];
  const { heading, description, viewMoreText } = blogPage;

  return (
    <main>
      <Bounded>
        <Heading size="xl" className="mb-8">
          {heading}
        </Heading>
        <div className="prose prose-xl prose-invert mb-10">{description}</div>
        <ContentList viewMoreText={viewMoreText} items={items} />
      </Bounded>
    </main>
  );
}
