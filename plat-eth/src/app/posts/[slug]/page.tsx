import fs from "fs";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <>
      <div>This is a post baby: {slug}</div>
      <div>{content}</div>
    </>
  );
};

export default PostPage;
