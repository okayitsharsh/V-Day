import React from 'react';

const memories = [
<<<<<<< HEAD
  {
    id: 1,
    img: '/images/hello.jpeg',
    title: 'The First Hello',
    desc: 'Where our story began.',
  },
  {
    id: 2,
    img: '/images/night.jpeg',
    title: 'Late Night Calls',
    desc: 'Hours felt like minutes with you.',
  },
  {
    id: 3,
    img: '/images/counting.jpeg',
    title: 'Counting Days',
    desc: 'Every mile makes us stronger.',
  },
  {
    id: 4,
    img: '/images/future.jpeg',
    title: 'Our Future Together',
    desc: 'No distance can keep us apart.',
  },
=======
  { id: 1, img: '/public/images/WhatsApp Image 2026-02-02 at 10.58.49 PM.jpeg', title: 'The First Hello', desc: 'Where our story began.' },
  { id: 2, img: '/public/images/Pi7_image.jpeg', title: 'Late Night Calls', desc: 'Hours felt like minutes with you.' },
  { id: 3, img: '/public/images/WhatsApp Image 2026-02-02 at 10.58.50 PM.jpeg', title: 'Counting Days', desc: 'Every mile makes us stronger.' },
  { id: 4, img: '/public/images/WhatsApp Image 2026-02-02 at 10.58.50 PM (1).jpeg', title: 'Our Future Together', desc: 'No distance can keep us apart.' },
>>>>>>> f46cc8815866a1d9066b7bb70424fd8020a65db2
];

const MemoryWall: React.FC = () => {
  return (
    <div className="py-20 px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
          Bridging the Miles
        </h2>
        <p className="text-rose-600 italic font-cursive text-2xl">
          Distance is just a test of how far love can travel.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {memories.map((m) => (
          <div
            key={m.id}
            className="group relative bg-white p-4 rounded-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 relative">
              <img
                src={m.img}
                alt={m.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <h4 className="font-bold text-rose-800 mb-1 text-lg">{m.title}</h4>
            <p className="text-sm text-gray-500 italic leading-relaxed">
              {m.desc}
            </p>

            <div className="absolute -top-3 -right-3 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
              ✈️
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryWall;
