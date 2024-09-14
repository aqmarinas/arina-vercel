import Image from 'next/image';

const LargeImage = () => (
  <div className="relative w-full h-60 md:h-96 mb-4">
    <Image src="/img/arina.jpg" alt="Arina" layout="fill" objectFit="cover" />
  </div>
);

export default LargeImage;
