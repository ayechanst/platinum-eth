import PostPreview from "../../../components/PostPreview";
import getPostMetaData from "../../../components/getPostMetadata";

const Almanac = () => {
  const postMetaData = getPostMetaData("almanacPosts");
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <div>{postPreviews}</div>
    </>
  );
};

export default Almanac;
