export default function CreativePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b1d18] via-[#3a241d] to-[#1f1613] px-6 py-20 text-white">
      
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d8b7a3]">
          Clixscape Gallery
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
          Visual Diary
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-32 rounded-full bg-[#f0c98d]" />

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#f2dfd3]">
          A collection of cinematic moments, creative frames,
          silhouettes, details, emotions, and stories captured
          through my eyes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <img
          src="/images/creative1.JPG"
          alt="Creative 1"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/creative2.JPG"
          alt="Creative 2"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/creative3.JPG"
          alt="Creative 3"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/creative4.JPG"
          alt="Creative 4"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/creative5.JPG"
          alt="Creative 5"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/creative6.JPG"
          alt="Creative 6"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

 <img
          src="/images/creative7.JPG"
          alt="Creative 7"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />


         <img
          src="/images/creative8.JPG"
          alt="Creative 8"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

 <img
          src="/images/creative9.JPG"
          alt="Creative 9"
          loading="lazy"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

      </div>
    </div>
  );
}