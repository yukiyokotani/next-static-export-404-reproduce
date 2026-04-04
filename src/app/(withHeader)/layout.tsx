import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "With Header",
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
