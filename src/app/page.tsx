"use client";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import MDXRenderer from "./mdxRenderer";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import TextEditorWithLineCounter from "./textEditorWithLine";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  SyntaxHighlighter.registerLanguage("javascript", js);

  // Function to download the markdown file
  const downloadMarkdown = () => {
    const blob = new Blob([text], { type: "text/markdown" }); // Create a markdown Blob
    const link = document.createElement('a'); // Create a download link
    link.href = URL.createObjectURL(blob); // Create an object URL for the Blob
    link.download = "document.md"; // Set the default download file name
    link.click(); // Trigger the download
  };

  return (
    <div className="flex justify-between w-full min-h-screen max-h-screen divide-x">
      <div className="w-full max-w-[50%] max-h-screen">
        <div className="flex items-center justify-between p-4 w-full border-b">
          <h1 className="text-xl font-bold text-slate-50">
            Markdown Text Editor
          </h1>
          <button
            onClick={downloadMarkdown}
            disabled={text === ""}
            aria-label="Download markdown"
            className="py-1.5 px-4 disabled:opacity-85 disabled:cursor-not-allowed bg-gray-900 rounded-md shadow-md hover:opacity-95 border border-gray-800"
          >
            Download markdown file
          </button>
        </div>
        <TextEditorWithLineCounter text={text} setText={setText} />
      </div>
      <div className="max-w-[50%] max-h-screen overflow-y-auto flex-1 p-6 shadow-lg">
        <MDXRenderer content={text} />
      </div>
    </div>
  );
}
