"use client";
import Nav from "@/components/Nav";
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div>
        <Nav />
        <div className="w-[100%] pl-[6rem]">{children}</div>
      </div>
    </SessionProvider>
  );
}
