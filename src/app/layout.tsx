import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Link } from "@nextui-org/link";
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
            <main className="flex min-h-screen flex-col items-center p-8">
              <h1 className="text-4xl font-bold">Rick and Morty Characters</h1>
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-2">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.linkedin.com/in/jilvanx/"
                title="jilvan linkedin">
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">jilvanx</p>
              </Link>
            </footer>
          </ApolloWrapper>
        </NextUIWrapper>
      </body>
    </html>
  );
}
