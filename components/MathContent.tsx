'use client';

import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MathMatch {
  type: 'block' | 'inline';
  content: string;
}

function parseMarkdownWithMath(text: string) {
  const parts: (string | MathMatch)[] = [];
  let currentIndex = 0;

  // Match both $$ (block) and $ (inline) patterns
  const mathRegex = /(\$\$[^\$]+\$\$|\$[^\$]+\$)/g;
  let match;

  while ((match = mathRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }

    // Add the math expression
    const mathText = match[0];
    if (mathText.startsWith('$$')) {
      parts.push({
        type: 'block',
        content: mathText.slice(2, -2)
      });
    } else {
      parts.push({
        type: 'inline',
        content: mathText.slice(1, -1)
      });
    }

    currentIndex = match.index + mathText.length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts;
}

export function MathContent({ content }: { content: string }) {
  const parts = parseMarkdownWithMath(content);

  return (
    <div className="prose prose-invert max-w-none dark:prose-headings:text-cyan-400 dark:prose-p:text-slate-300">
      {parts.map((part, idx) => {
        if (typeof part === 'string') {
          return <ReactMarkdown key={idx}>{part}</ReactMarkdown>;
        } else if (part.type === 'block') {
          return (
            <div key={idx} className="my-4 overflow-x-auto">
              <BlockMath math={part.content} />
            </div>
          );
        } else {
          return (
            <span key={idx}>
              <InlineMath math={part.content} />
            </span>
          );
        }
      })}
    </div>
  );
}
