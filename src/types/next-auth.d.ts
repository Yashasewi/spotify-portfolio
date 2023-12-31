import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    username?: string | null;
  }
}

declare module "next-auth" {
  interface Session {
    accessToken: any;
    refreshToken: any;
    accessTokenExpires: number;

    user: User & {
      id: UserId;
      username?: string | null;
      image: string;
    };
  }
}
