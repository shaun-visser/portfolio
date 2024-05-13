import Button from '../components/Button';
import Bounded from '../components/Bounded';
import Heading from '../components/Heading';
import Avatar from '../components/Avatar';
import TechList from '../components/TechList';
import { techList } from '../dummy/data';

export default function Page() {
  return (
    <main>
      <Bounded>
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading as="h1" size="xl" className="col-start-1">
            Biography
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert col-start-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              egestas placerat augue, sed pretium urna pretium nec. Praesent
              fermentum finibus lorem, non varius ante malesuada a. Proin
              malesuada ante nec velit condimentum dignissim. Etiam fringilla
              elit enim, quis pharetra ipsum faucibus a. Curabitur nec elit
              interdum, facilisis est et, congue eros. Integer nec lorem ac
              metus eleifend pellentesque. Sed nisl dui, imperdiet sit amet
              ligula ac, porttitor vestibulum eros. Mauris nunc ipsum, suscipit
              suscipit ligula sit amet, blandit fermentum nisl. Pellentesque
              elementum ultricies nisl sit amet semper.
            </p>
            <p>
              Mauris eget risus quis felis feugiat consequat. Donec dignissim
              erat quis lacinia consequat. Aliquam tempus dictum turpis. Vivamus
              mattis ligula et laoreet sodales. Nunc fringilla luctus laoreet.
            </p>
            <p>
              Nulla facilisi. Etiam efficitur tempus vulputate. Vestibulum dolor
              purus, suscipit ut felis a, auctor accumsan sem. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Donec id nunc eu lectus consequat rhoncus. Curabitur a
              justo metus.
            </p>
            <p>
              Aliquam viverra interdum tellus, in molestie felis pellentesque
              vel. Nulla hendrerit, magna ac iaculis feugiat, eros eros accumsan
              nulla, nec malesuada ligula ligula quis erat. Aenean massa turpis,
              eleifend eu ante id, efficitur sollicitudin nibh.
            </p>
          </div>
          <Button url="/" label="Go home" />
          <Avatar
            image="/unnamed.jpg"
            className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          />
          <TechList className="row-start-4 md:col-span-2" {...techList} />
        </div>
      </Bounded>
    </main>
  );
}
