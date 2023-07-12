import Nav from "@/components/Nav";
import { loginIsRequiredServer } from "@/utils/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  await loginIsRequiredServer();
  
  return (
    <div>
      <Nav />
      <div className="w-[100%] pl-[6rem]">{children}</div>
    </div>
  );
}
