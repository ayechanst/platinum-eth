import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../../../components/getPostMetadata";

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

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <h1 className="text-2xl font-bold text-cyan-50 border-b border-cyan-900 pb-4">
        {post.data.title}
      </h1>
      <article className="prose lg:prose-xl text-cyan-100">
        <Markdown options={{ forceBlock: true }}>
          {post.content}
        </Markdown>
      </article>
    </>
  );
};

export default PostPage;
