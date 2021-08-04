import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import { withTheme } from 'styled-components';

type Props = {
  post: PostContent;
  theme: any;
};

function PostItem({ post, theme }: Props) {
  return (
    <Link href={"/posts/" + post.slug + location.search}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: ${theme.text};
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}

export default withTheme(PostItem)
