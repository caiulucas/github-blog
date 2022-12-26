import LogoSvg from '../..//assets/logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoSvg} alt="Github Blog Logo (>_)" />
    </HeaderContainer>
  );
}
