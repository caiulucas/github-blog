import { ButtonAnchorContainer } from './styles';

interface AnchorProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Anchor({ children, ...rest }: AnchorProps) {
  return <ButtonAnchorContainer {...rest}>{children}</ButtonAnchorContainer>;
}
