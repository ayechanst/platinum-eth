import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../../../components/getPostMetadata";
import { ReactNode } from "react";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const CustomHeading = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h1 style={{ fontSize: "34px", lineHeight: "1.5" }}>
    {children}
  </h1>
);

// Custom component for <p> elements with different line height
const CustomParagraph = ({
  children,
}: {
  children: ReactNode;
}) => <p style={{ lineHeight: "1.3" }}>{children}</p>;

const options = {
  overrides: {
    h1: {
      component: CustomHeading,
    },
    p: {
      component: CustomParagraph,
    },
  },
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <h1 className="text-3xl font-bold text-cyan-50 border-b border-cyan-900 pb-4 mb-6">
        {post.data.title}
      </h1>
      <article className="prose lg:prose-xl text-cyan-100">
        <Markdown options={options}>
          {post.content}
        </Markdown>
      </article>
    </>
  );
};

export default PostPage;
