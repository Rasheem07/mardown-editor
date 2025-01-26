"use client";
import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import components from "./mdx-components";
import { Pencil } from "lucide-react";

type MDXRendererProps = {
  content: string; // Raw MDX content as a string
};

export default function MDXRenderer({ content }: MDXRendererProps) {
  const [mdxSource, setMdxSource] =
    React.useState<MDXRemoteSerializeResult | null>(null);

  React.useEffect(() => {
    // Serialize the raw MDX content
    const processMDX = async () => {
      const serializedContent = await serialize(content);
      setMdxSource(serializedContent);
    };

    processMDX();
  }, [content]);

  if (!mdxSource) return <div>Loading...</div>;

  const NoContentMessage = () => (
    <div className="flex flex-col gap-2 h-full mt-20 items-center justify-center text-center">
      <Pencil className="text-4xl text-slate-50" /> {/* Lucide Icon */}
      <h1 className="text-2xl font-bold text-slate-50">No Content Yet</h1>
      <p className="text-base font-sans text-slate-400">
        Start typing in the editor, and your content will appear here.
      </p>
    </div>
  );

  return (
    <div id="preview">
      {content ? (

        <MDXRemote {...mdxSource} components={components} />
      ) : (
         <NoContentMessage />
      )}
    </div>
  );
}
