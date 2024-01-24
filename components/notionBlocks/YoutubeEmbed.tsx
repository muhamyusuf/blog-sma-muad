import ReactPlayer from 'react-player/lazy';
import dynamic from 'next/dynamic';


type Props = {
  url: string;
};

function YoutubeEmbed({ url }: Props) {
  return (
    <div className="flex justify-center items-center ">
      <ReactPlayer url={url} />
    </div>
  );
}

export default dynamic(() => Promise.resolve(YoutubeEmbed), { ssr: false });
