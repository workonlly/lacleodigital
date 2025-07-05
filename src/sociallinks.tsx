

const profiles = [
  {
    href: 'https://www.upwork.com/ag/lacleodgital/',
    src: '/public/imo/Upwork-2-removebg-preview.png',
    alt: 'Upwork',
  },
  {
    href: 'https://www.freelancer.in/u/lacleodigital',
    src: '/public/imo/freela-removebg-preview.png',
    alt: 'Freelancer',
  },
  {
    href: 'https://clutch.co/profile/lacleodigital',
    src: '/public/imo/2223-removebg-preview.png',
    alt: 'Clutch',
  },
  {
    href: 'https://www.guru.com/freelancers/la-cleo-digital',
    src: '/public/imo/gur-removebg-preview.png',
    alt: 'Guru',
  },
  {
    href: 'https://www.fiverr.com/lacleodigital',
    src: '/public/imo/fiverrrr-removebg-preview.png',
    alt: 'Fiverr',
  },
];

const OurProfiles = () => {
  return (
    <>
    


    <div className="text-center bg-black py-16 px-6 w-full overflow-x-hidden">
      <h1 className="text-4xl font-bold text-blue-600 mb-3">Our Profiles</h1>
      <p className="text-lg text-gray-300 mb-10">
        We are highly rated by our customers
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
        {profiles.map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300  hover:scale-110"
          >
            <img
              src={src}
              alt={alt}
              className="w-40 h-15 object-contain rounded-md shadow-md  "
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

export default OurProfiles;