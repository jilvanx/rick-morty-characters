import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import { __DEV__ } from "@apollo/client/utilities/globals";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { ApolloWrapper } from "@/providers/apollo-wrapper";
import { NextUIWrapper } from "@/providers/nextui-wrapper";

import "@/styles/globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".::Rick and Morty Characters::.",
  description: "Characters of Rick and Morty using Graphql",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <html lang="en">
      <body className={openSans.className}>
        <NextUIWrapper>
          <ApolloWrapper>
            <div className="flex min-h-screen flex-col items-center p-8">
              {children}
            </div>
          </ApolloWrapper>
        </NextUIWrapper>
      </body>
    </html>
  );
}
