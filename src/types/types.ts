import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";
import { UrlObject } from "url";

export interface Artist {
  id: Key | null | undefined;
  images: { url: string | StaticImport }[];
  external_urls: { spotify: string | UrlObject };
  name: string | number;
}
