import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface ItemType {
  name: string;
  description: string;
  img: string;
  link: string;
}

const Slider: React.FC = () => {
  const items: ItemType[] = [
    {
      name: "Note App 1",
      description: "Get in Touch",
      img: "/note.png",
      link: "https://my-note-vert.vercel.app/"
    },
    {
      name: "Fresh Store 2",
      description: "Awesome work",
      img: "/store.png",
      link: "https://store-omega-ten.vercel.app/"
    },
    {
      name: "Note App 1",
      description: "Get in Touch",
      img: "/note.png",
      link: "https://my-note-vert.vercel.app/"
    },
    {
      name: "Fresh Store 2",
      description: "Awesome work",
      img: "/store.png",
      link: "https://store-omega-ten.vercel.app/"
    },
  ];

  const chunkArray = (array: ItemType[], chunkSize: number): ItemType[][] => {
    const result: ItemType[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedItems = chunkArray(items, 2);

  const Item: React.FC<{ item: ItemType }> = ({ item }) => (
    <Link href={item.link} passHref>
      <Paper className="p-4 text-center cursor-pointer" elevation={3}>
        <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto' }} />
        <h2 className="text-lg mt-2">{item.name}</h2>
        <p className="text-sm">{item.description}</p>
      </Paper>
    </Link>
  );

  return (
    <main className="flex min-h-screen flex-col  items-center justify-center bg-[#30549b] p-8">
      <h1 className="text-3xl text-white mb-7">My Projects</h1>
      <Carousel className="w-[70vw] ">
        {chunkedItems.map((itemPair, index) => (
          <div key={index} className="flex justify-center space-x-4">
            {itemPair.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </div>
        ))}
      </Carousel>
    </main>
  );
};

export default Slider;

