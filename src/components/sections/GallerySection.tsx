const imgGallery = 'http://localhost:3845/assets/1841414602f1c5aecbe353ab06c5b0c0296a46fe.png'
const imgPolygon = 'http://localhost:3845/assets/58f6a249803b31b4af7055a46d29419e77974a73.svg'

export default function GallerySection() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[1250px]"
      data-name="section18"
    >
      {/* image 589 — full bleed, aspect 3840/2494, vertically centered */}
      <div className="absolute left-0 right-0 top-1/2 aspect-[3840/2494] -translate-y-1/2">
        <img
          src={imgGallery}
          alt="FICA 서비스 갤러리"
          className="size-full object-cover"
        />
      </div>

      {/* Polygon 15 — center top, 82×78 */}
      <div className="pointer-events-none absolute left-1/2 top-[-7px] flex h-[78px] w-[82px] -translate-x-1/2 items-center justify-center">
        <div className="rotate-180">
          <div className="relative h-[78px] w-[82px]">
            <div className="absolute inset-[7.37%_0_0_0]">
              <img src={imgPolygon} alt="" className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
