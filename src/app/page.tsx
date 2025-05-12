import {redirect} from 'next/navigation';
import {defaultLocale} from '../../i18n';

// Этот компонент просто перенаправляет на дефолтную локаль
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}