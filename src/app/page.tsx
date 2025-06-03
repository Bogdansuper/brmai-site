import {redirect} from 'next/navigation';

// Этот компонент просто перенаправляет на английскую версию
export default function RootPage() {
  redirect('/en');
}