"use client";

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { ReactNode } from 'react';

type Props = {
  locale: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
  // now?: Date; // Removed
};

export default function IntlClientProviderSetup({ locale, messages, children }: Props) { // Removed now from props
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Madrid"> {/* Removed now prop */}
      {children}
    </NextIntlClientProvider>
  );
}