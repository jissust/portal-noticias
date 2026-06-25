"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = {
  content: string;
};

export const MarkdownRenderer = ({ content }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-white">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold mt-5 mb-3 text-white">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold mt-4 mb-2">
            {children}
          </h3>
        ),

        p: ({ children }) => (
          <p className="mb-4 leading-relaxed">{children}</p>
        ),

        strong: ({ children }) => (
          <strong className="font-bold text-white">{children}</strong>
        ),

        em: ({ children }) => (
          <em className="italic text-gray-300">{children}</em>
        ),

        del: ({ children }) => (
          <del className="line-through text-gray-400">{children}</del>
        ),

        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gold pl-4 italic text-gray-300 my-4">
            {children}
          </blockquote>
        ),

        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
        ),

        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
        ),

        li: ({ children }) => <li>{children}</li>,

        code({ inline, children }: any) {
          return inline ? (
            <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">
              {children}
            </code>
          ) : (
            <pre className="bg-black p-4 rounded-lg overflow-x-auto mb-4">
              <code>{children}</code>
            </pre>
          );
        },

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline hover:text-yellow-400"
          >
            {children}
          </a>
        ),

        img: ({ src, alt }) => (
          <img
            src={src || ""}
            alt={alt || ""}
            className="rounded-lg my-4 w-full object-cover max-w-sm"
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};