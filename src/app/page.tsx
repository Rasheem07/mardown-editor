"use client";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import MDXRenderer from "./mdxRenderer";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import TextEditorWithLineCounter from "./textEditorWithLine";
import { useState } from "react";
import { Download } from "lucide-react";
import { marked } from "marked"; // Import the marked library

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

  const downloadHTML = async () => {
    const htmlContent = await marked(text); // Ensure it's fully converted to HTML
      // Adding custom styles for max-width and centering
  const styledHtmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
      }
      .container {
        max-width: 75vw; /* Limit the width to 75% of the viewport */
        margin: 0 auto;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      ${htmlContent}
    </div>
  </body>
  </html>
`;
    const blob = new Blob([styledHtmlContent], { type: "text/html" }); // Create an HTML Blob
    const link = document.createElement('a'); // Create a download link
    link.href = URL.createObjectURL(blob); // Create an object URL for the Blob
    link.download = "document.html"; // Set the default download file name
    link.click(); // Trigger the download
  };

  return (
    <div className="flex flex-col justify-between w-full  md:flex-row min-h-screen max-h-screen ">
      <div className="w-full md:max-w-[50%] md:border-r  md:max-h-screen ">
        <div className="flex items-center justify-between p-4 w-full border-b">
          <h1 className="md:text-xl font-bold text-slate-50">
            Markdown Text Editor
          </h1>
          <div className="flex items-center gap-4">

          <button
            onClick={downloadHTML}
            disabled={text === ""}
            aria-label="Download HTML"
            className="py-1 md:py-1.5 px-4 disabled:opacity-85 disabled:cursor-not-allowed bg-gray-800 flex items-center gap-1 text-sm rounded-md shadow-md hover:opacity-95 border border-gray-600"
          >
            <Download className="h-4 w-4"/> HTML 
          </button>
          <button
            onClick={downloadMarkdown}
            disabled={text === ""}
            aria-label="Download markdown"
            className="py-1 md:py-1.5 px-4 disabled:opacity-85 disabled:cursor-not-allowed bg-blue-800 text-slate-50 flex items-center gap-1 text-sm rounded-md shadow-md hover:opacity-95 border border-blue-600"
          >
            <Download className="h-4 w-4"/> Markdown 
          </button>
            </div>
        </div>
        <TextEditorWithLineCounter text={text} setText={setText} />
      </div>
      <div className="md:max-w-[50%]  max-h-[calc(100vh-50vh-71px)] md:max-h-screen overflow-y-auto border-t md:border-none flex-1 p-6 shadow-lg mt-2 md:mt-0">
        <MDXRenderer content={text} />
      </div>
    </div>
  );
}
