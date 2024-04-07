import { TagId } from '@/data/tag';
import { useTagParams } from '@/hooks/tag-params';
import { getTagLabel } from '@/lib/tag';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemCard({
  title,
  tags,
  href,
  id,
}: {
  title: string;
  tags: TagId[];
  href: string;
  id: string;
}) {
  const { addTagToSearchParmas } = useTagParams();

  return (
    <div className="hover:shadow-lg transition duration-500 relative p-4 border rounded-md shadow-sm bg-card">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded">
        <Image
          fill
          className="object-cover"
          placeholder="blur"
          src={`/tool-hub/images/${id}.png`}
          alt=""
        />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex relative z-10 flex-wrap mt-2 gap-2">
        {tags.map((tagId) => (
          <Link
            key={tagId}
            href={`?tags=${addTagToSearchParmas(tagId, true)}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted rounded text-xs px-1.5 py-1"
          >
            {getTagLabel(tagId)}
          </Link>
        ))}
      </div>
    </div>
  );
}
