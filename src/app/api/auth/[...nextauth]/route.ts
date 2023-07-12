import { authCOnfig } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authCOnfig);

export { handler as GET, handler as POST };
