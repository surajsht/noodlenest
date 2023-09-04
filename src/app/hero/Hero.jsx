import Image from "next/image";

const Hero = () => {
  return (
    <div className="container px-4">
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4 lg:mt-16 xl:gap-14">
        <div>
          <h2 className="text-5xl font-black leading-[57.6px] mb-4 xl:text-7xl xl:leading-[86.4px] xl:mb-6 2xl:text-8xl 2xl:leading-[115.2px]">
            Discover the Art of
            <span className="text-[#FF8800]"> Noodles </span>
          </h2>

          <p className="mb-6 xl:mb-8 xl:text-lg xl:leading-[27px]">
            Welcome to a world where noodles transcend mere sustenance, where
            they become a canvas for culinary artistry. At NoodleWonders, we're
            passionate about noodles, and our mission is to bring you the
            finest, most exquisite noodle creations you've ever tasted. Join us
            on a journey of flavor and texture, where each bite tells a story
            and every bowl is a masterpiece. Explore our menu, and prepare to
            fall in love with noodles all over again.
          </p>

          <button className="mb-8 py-2 px-6 bg-[#FF8800] text-white font-semibold">
            View menu
          </button>
        </div>

        <div className="relative h-96 w-full lg:h-[800px]">
          <Image
            src="/noodle.png"
            alt="ramen-noodle"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
