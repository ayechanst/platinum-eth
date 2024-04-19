import Link from "next/link";
import getPostMetaData from "../../components/getPostMetadata";

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((posts) => (
    <div>
      <Link href={`/posts/${posts.slug}`}>
        <h2>{posts.title}</h2>
      </Link>
      <p>{posts.subtitle}</p>
    </div>
  ));
  return (
    <>
      <div>{postPreviews}</div>
    </>
  );
};

export default HomePage;
