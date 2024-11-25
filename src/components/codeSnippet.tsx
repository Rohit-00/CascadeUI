import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  language: string;
  code: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ language, code }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        className="h-full syntax-highlighter-dark"
      >
        {code}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language={language}
        style={dark}
        className="h-full syntax-highlighter-dark hidden"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

