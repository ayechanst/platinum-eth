import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="border border-cyan-500 p-4 rounded-md shadow-md m-2">
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold hover:underline">
          {props.title}
        </h2>
      </Link>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
