interface pageProps {
  params: {
    playlistId: string;
  };
}
export default function Page({ params }: pageProps) {
  return (
    <div>
      My Post: <span className=" text-red-700">{params.playlistId}</span>
    </div>
  );
}
