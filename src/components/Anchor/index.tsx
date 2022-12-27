import { AnchorContainer } from './styles';

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Anchor({ children, ...rest }: AnchorProps) {
  return <AnchorContainer {...rest}>{children}</AnchorContainer>;
}
