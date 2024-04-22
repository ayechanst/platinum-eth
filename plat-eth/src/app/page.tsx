import Link from "next/link";
import getPostMetaData from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const HomePage = () => {
  const postMetaData = getPostMetaData("posts");
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <div>{postPreviews}</div>
      <Link href="/almanac">almanac</Link>
    </>
  );
};

export default HomePage;
