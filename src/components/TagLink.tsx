import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/posts/tags/[[...slug]]" + location.search} as={`/posts/tags/${tag.slug}${location.search}`}>
      <a>{"#" + tag.name}</a>
    </Link>
  );
}
