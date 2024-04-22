import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetaData = (route: string): PostMetadata[] => {
  const folder = `${route}/`;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) =>
    file.endsWith(".md")
  );
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `${route}/${fileName}`,
      "utf-8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      folder: route,
    };
  });
  return posts;
};

export default getPostMetaData;