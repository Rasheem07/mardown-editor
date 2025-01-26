import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 style={{ fontSize: "1.50rem", fontWeight: 600, marginBottom: "0.5rem" }}>
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "0.5rem" }}>
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "0.5rem" }}>
      {children}
    </h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 style={{ fontSize: "1.25rem", fontWeight: 400, marginBottom: "0.5rem" }}>
      {children}
    </h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: "0.5rem" }}>
      {children}
    </h6>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "0.5rem" }}>
      {children}
    </p>
  ),
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      style={{ textDecoration: "underline", marginBottom: "0.5rem" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc", marginBottom: "0.5rem" }}>
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol style={{ paddingLeft: "1.5rem", listStyleType: "decimal", marginBottom: "0.5rem" }}>
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li style={{ marginBottom: "0.3rem" }}>{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote
      style={{
        borderLeft: "4px solid #ccc",
        paddingLeft: "1rem",
        fontStyle: "italic",
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <SyntaxHighlighter language="javascript" style={atomOneDark} className="rounded-md border border-gray-600">
      {String(children)}
    </SyntaxHighlighter>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="rounded-md" style={{ marginBottom: "0.5rem" }}>
      {children}
    </pre>
  ),
  img: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} style={{ maxWidth: "100%", marginBottom: "0.5rem" }} />
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>{children}</em>
  ),
  del: ({ children }: { children: React.ReactNode }) => (
    <del style={{ textDecoration: "line-through", marginBottom: "0.5rem" }}>
      {children}
    </del>
  ),
  sub: ({ children }: { children: React.ReactNode }) => (
    <sub style={{ verticalAlign: "sub", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
      {children}
    </sub>
  ),
  sup: ({ children }: { children: React.ReactNode }) => (
    <sup style={{ verticalAlign: "super", fontSize: "0.8rem", marginBottom: "0.5rem" }}>
      {children}
    </sup>
  ),
};

export default components;
