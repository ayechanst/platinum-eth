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
      <div className="border border-cyan-500 p-4 rounded-md shadow-md m-2">
        <Link href="/almanac">
          <h2 className="font-bold hover:underline text-cyan-50 text-2xl">
            Almanac
          </h2>
        </Link>
        <p className="text-cyan-100">
          The library of concepts in alphabetical order.
        </p>
      </div>
    </>
  );
};

export default HomePage;
