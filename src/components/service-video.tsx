import { videos, type VideoId } from "@/lib/videos";
import { whatsappUrl } from "@/lib/site-config";

export function ServiceVideo({ id }: { id: VideoId }) {
  const video = videos[id];
  return <figure className="service-video" aria-labelledby={`video-title-${id}`}>
    <video controls playsInline preload="none" width={478} height={850} poster={`/videos/${video.file}.webp`} aria-label={video.title} aria-describedby={`video-description-${id}`}>
      <source src={`/videos/${video.file}.mp4`} type="video/mp4" />
      Seu navegador não suporta este vídeo. <a href={`/videos/${video.file}.mp4`}>Abrir MP4</a>
    </video>
    <figcaption><p className="eyebrow dark">VIA+ em vídeo</p><h3 id={`video-title-${id}`}>{video.title}</h3><p id={`video-description-${id}`}>{video.description}</p><a className="text-link" href={whatsappUrl(`Olá! ${video.cta}. Gostaria de saber mais sobre: ${video.title}`)}>{video.cta} →</a></figcaption>
  </figure>;
}
