import {
  ReactMarkdown,
  ReactMarkdownOptions
} from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Anchor, Content, Paragraph, Image, H1, H2, H3 } from './styles';

interface MarkdownProps extends ReactMarkdownOptions {}

export function Markdown({ children }: MarkdownProps) {
  return (
    <Content>
      <ReactMarkdown
        components={{
          p: ({ children }) => <Paragraph>{children}</Paragraph>,
          a: ({ children }) => <Anchor>{children}</Anchor>,
          img: ({ src, alt }) => <Image src={src} alt={alt} />,
          h1: ({ children }) => <H1>{children}</H1>,
          h2: ({ children }) => <H2>{children}</H2>,
          h3: ({ children }) => <H3>{children}</H3>,
          code: ({ inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {children}
      </ReactMarkdown>
    </Content>
  );
}
