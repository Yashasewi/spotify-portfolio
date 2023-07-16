interface pageProps {
  params: {
    trackId: string;
  };
}
export default function Page({ params }: pageProps) {
  return (
    <div>
      My Post: <span className=" text-red-700">{params.trackId}</span>
    </div>
  );
}
