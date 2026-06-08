import { useRef } from 'react'

export default function FirefighterSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video.play()
    } else {
      video.pause()
    }
  }

  return (
    <section id="video" className="relative w-full overflow-hidden" data-name="section2-1">
      <div
        className="relative aspect-[1920/1080] w-full"
        data-name="1차 최종 디콘 2"
      >
        <video
          ref={videoRef}
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full cursor-pointer object-cover"
          onClick={handleVideoClick}
          aria-label="소방관 영상 — 클릭하여 재생 또는 일시정지"
        >
          <source src="/public/videos/section2-1.mp4#t=0.001" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
