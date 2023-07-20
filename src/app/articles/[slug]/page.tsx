import { getPostBySlug } from "@/lib/blogUtils";
import ReactMarkdown from "react-markdown";

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  const { content } = await getPostBySlug(params.slug);

  return (
    <ReactMarkdown className="prose prose-sm prose-invert">
      {content}
    </ReactMarkdown>
  );
}
