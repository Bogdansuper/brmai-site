"use client";

import { NextIntlClientProvider, AbstractMessages } from 'next-intl';
import { ReactNode } from 'react';

type Props = {
  locale: string;
  messages: AbstractMessages;
  children: ReactNode;
  now?: Date; // Optional: for timeZone support if needed later
};

export default function IntlClientProviderSetup({ locale, messages, children, now }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} now={now} timeZone="Europe/Madrid"> {/* Example timeZone */}
      {children}
    </NextIntlClientProvider>
  );
}