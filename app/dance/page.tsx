
export default function DancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b1d18] via-[#3a241d] to-[#1f1613] px-6 py-20 text-white">
      
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d8b7a3]">
          Clixscape Gallery
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
         Dance Collection
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-32 rounded-full bg-[#f0c98d]" />

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#f2dfd3]">
          A collection of movement, rhythm, emotions,
classical expressions, and timeless performances
captured through artistic dance photography. </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


        <img
          src="/images/dance1.jpg"
          alt="Dance 1"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance2.jpg"
          alt="Dance 2"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance3.jpg"
          alt="Dance 3"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance4.jpg"
          alt="Dance 4"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance5.jpg"
          alt="Dance 5"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance6.jpg"
          alt="Dance 6"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance7.jpg"
          alt="Dance 7"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance8.jpg"
          alt="Dance 8"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />

        <img
          src="/images/dance9.jpg"
          alt="Dance 9"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
        

      </div>
    </div>
  );
}