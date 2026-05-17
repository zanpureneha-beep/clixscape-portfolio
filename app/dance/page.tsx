export default function DancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b1d18] via-[#3a241d] to-[#1f1613] px-3 sm:px-6 py-20 text-white">
      
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d8b7a3]">
          Clixscape Gallery
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
          Kathak Frames
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-32 rounded-full bg-[#f0c98d]" />

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#f2dfd3]">
          Expressions, rhythm, movement, and timeless storytelling captured
          through classical dance photography.
        </p>
      </div>

     <div className="grid gap-8 px-2 sm:px-4 md:grid-cols-2 xl:grid-cols-3">

        <img
          src="/images/dance1.jpg"
          alt="Dance 1"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance2.jpg"
          alt="Dance 2"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance3.jpg"
          alt="Dance 3"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance4 (2).jpg"
          alt="Dance 4"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance5 (2).jpg"
          alt="Dance 5"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance6 (2).jpg"
          alt="Dance 6"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance7 (2).jpg"
          alt="Dance 7"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance8 (2).jpg"
          alt="Dance 8"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance9 (2).jpg"
          alt="Dance 9"
          className="h-[680px] w-full rounded-3xl object-cover"
        />

      </div>
    </div>
  );
}