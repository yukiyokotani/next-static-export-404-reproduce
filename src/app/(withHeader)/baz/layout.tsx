import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baz",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
}
