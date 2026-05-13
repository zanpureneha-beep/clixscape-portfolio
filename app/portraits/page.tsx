import Image from "next/image";
export default function PortraitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b1d18] via-[#3a241d] to-[#1f1613] px-6 py-20 text-white">
      
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d8b7a3]">
          Clixscape Gallery
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
          Portrait Collection
        </h1>

        <div className="mx-auto mt-6 h-[2px] w-32 rounded-full bg-[#f0c98d]" />

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#f2dfd3]">
          A collection of portraits filled with warmth, emotion,
          softness, and timeless storytelling.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        <Image
          src="/images/portrait2NEW.jpg"
          alt="Portrait 2"
          width={800}
          height={1200}
          quality={70}
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <Image
          src="/images/portrait1.jpg"
          alt="Portrait 1"
          width={800}
          height={1200}
          quality={70}
          className="h-[680px] w-full rounded-3xl object-cover"
        />

        <Image
          src="/images/portrait3NEW.jpg"
          alt="Portrait 3"
          width={800}
          height={1200}
          quality={70}
          className="h-[680px] w-full rounded-3xl object-cover"
        />
<Image
  src="/images/portrait4NEW.jpg"
  alt="Portrait 4"
  width={800}
  height={1200}
  quality={70}
  className="h-[680px] w-full rounded-3xl object-cover"
/>

<Image
  src="/images/portrait5.jpg"
  alt="Portrait 5"
  width={800}
  height={1200}
  quality={70}
  className="h-[680px] w-full rounded-3xl object-cover"
/>

<Image
  src="/images/portrait6NEW.jpg"
  alt="Portrait 6"
  width={800}
  height={1200}
  quality={70}
  className="h-[680px] w-full rounded-3xl object-cover"
/>

<Image
  src="/images/portrait8.jpg"
  alt="Portrait 8"
  width={800}
  height={1200}
  quality={70}
  className="h-[680px] w-full rounded-3xl object-cover"
/>

<Image
  src="/images/portrait7NEW.jpg"
  alt="Portrait 7"
  width={800}
  height={1200}
  quality={70}
  className="h-[680px] w-full rounded-3xl object-cover"
/>

<Image
  src="/images/portrait9NEWEST.jpg"
  alt="Portrait 9"
  width={800}
  height={1200}
  quality={70}
  className="h-[680px] w-full rounded-3xl object-cover"
/>


      </div>
    </div>
  );
}