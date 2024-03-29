import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: Date) {
  return formatDistance(date, new Date(), {
    addSuffix: true,
    locale: ptBR
  });
}
