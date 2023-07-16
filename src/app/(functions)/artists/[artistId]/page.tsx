interface pageProps {
  params: {
    artistId: string;
  };
}
export default function Page({ params }: pageProps) {
  return (
    <div>
      My Post: <span className=" text-red-700">{params.artistId}</span>
    </div>
  );
}
