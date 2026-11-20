import type { Metadata } from "next";
import ArticlePage from "@/components/article/ArticlePage";
import { pageMetadata } from "@/lib/pageMetadata";
import { vsOneSec as article } from "@/content/vsOneSec";

export const metadata: Metadata = pageMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
});

const Page = () => <ArticlePage article={article} />;

export default Page;
