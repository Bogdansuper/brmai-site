import {redirect} from 'next/navigation';
import {defaultLocale} from '../i18n.ts';

// Этот компонент просто перенаправляет на дефолтную локаль
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}