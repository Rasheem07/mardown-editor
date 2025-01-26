"use client";
import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

const TextEditorWithLineCounter = ({
  setText,
  text,
}: {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
}) => {
  const [lineCount, setLineCount] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle textarea input and line count updates
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);

    // Calculate the number of lines based on the number of newlines
    const lines = newText.split("\n").length;
    setLineCount(lines);
  };

  // Handle paste event and recalculate line count
  const handlePaste = () => {
    setTimeout(() => {
      const pastedText = textareaRef.current?.value;
      if (pastedText) {
        const lines = pastedText.split("\n").length;
        setLineCount(lines);
      }
    }, 0); // Using setTimeout to handle async paste events
  };

  // Adjust height dynamically based on content
  useEffect(() => {
    if (textareaRef.current) {
      // Reset the textarea height to 'auto' and then set it to 'scrollHeight' to auto-adjust
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]); // Re-run effect whenever text changes

  // Set a fixed width for the line number column
  const lineNumberWidth = "30px"; // Adjust to match your font size and line height

  return (
    <div className="w-full max-h-[calc(100vh-50vh-71px)]   min-h-[calc(100vh-50vh-71px)]  bg-opacity-8 5 pt-4 divide-y flex shadow-inner md:max-h-[calc(100vh-71px)] overflow-y-auto p-2">
      <div
        className="pl-4 w-auto flex flex-col"
        style={{ width: lineNumberWidth }} // Fixed width for line numbers
      >
        {/* Display the line numbers */}
        {[...Array(lineCount)].map((_, index) => (
          <span
            key={index}
            className="text-gray-300 text-base font-mono"
            style={{ lineHeight: "28px" }} // Ensure line height matches the text area
          >
            {index + 1}
          </span>
        ))}
      </div>
      <textarea
        id="editor"
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onPaste={handlePaste} // Add paste event listener
        className="w-full text-base text-slate-50 bg-transparent leading-[28px] resize-none border-none overflow-hidden mr-4 outline-none"
        placeholder="Start writing here...."
        style={{ height: "auto", paddingLeft: "20px", lineHeight: "28px" }} // Match line height for consistent spacing
      />
    </div>
  );
};

export default TextEditorWithLineCounter;
