import { IconType } from 'react-icons';

import { InfoLabelContainer } from './styles';

interface InfoLabelProps {
  icon: IconType;
  title: string | number;
}

export function InfoLabel({ icon: Icon, title }: InfoLabelProps) {
  return (
    <InfoLabelContainer>
      <Icon />
      {title}
    </InfoLabelContainer>
  );
}
