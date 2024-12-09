import { getPostBySlug } from "@/lib/blogUtils";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content } = await getPostBySlug(slug);
  return (
    <ReactMarkdown
      className="prose prose-sm prose-invert"
      rehypePlugins={[rehypePrism]}
    >
      {content}
    </ReactMarkdown>
  );
}
