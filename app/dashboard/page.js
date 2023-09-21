'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card, Search } from "@/components";

const people = [
  {
    image: "/youngblackman.jpg",
    tags: ["man", "young", "black"]
  },
  {
    image: "/youngblackwoman.jpg",
    tags: ["woman", "young", "black"]
  },
  {
    image: "/oldblackman.jpg",
    tags: ["man", "old", "black"]
  },
  {
    image: "/oldblackwoman.jpg",
    tags: ["woman", "old", "black"]
  },
  {
    image: "/youngindianman.jpg",
    tags: ["man", "young", "indian"]
  },
  {
    image: "/youngindianwoman.jpg",
    tags: ["woman", "young", "indian"]
  },
  {
    image: "/oldindianman.jpg",
    tags: ["man", "old", "indian"]
  },
  {
    image: "/oldindianwoman.jpg",
    tags: ["woman", "old", "indian"]
  },
  {
    image: "/youngwhiteman.jpg",
    tags: ["man", "young", "white"]
  },
  {
    image: "/youngwhitewoman.jpg",
    tags: ["woman", "young", "white"]
  },
  {
    image: "/oldwhiteman.jpg",
    tags: ["man", "old", "white"]
  },
  {
    image: "/oldwhitewoman.jpg",
    tags: ["woman", "old", "white"]
  },
  {
    image: "/youngasianman.jpg",
    tags: ["man", "young", "asian"]
  },
  {
    image: "/youngasianwoman.jpg",
    tags: ["woman", "young", "asian"]
  },
  {
    image: "/oldasianman.jpg",
    tags: ["man", "old", "asian"]
  },
  {
    image: "/oldasianwoman.jpg",
    tags: ["woman", "old", "asian"]
  }
]

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const [images, setImages] = useState(people);
  const [filteredImages, setFilteredImages] = useState(images);

  const handleSearch = (searchTerm) => {
    const filtered = images.filter((image) =>
      image.tags.some((tag) => tag.includes(searchTerm.toLowerCase()))
    );
    setFilteredImages(filtered);
  };

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...filteredImages];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setFilteredImages(updatedImages);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <div className="items-center">
          <Image src={user.picture} alt={user.name} width={100} height={100} className='rounded-full' />
          <h2>Hey👋, {user.name}</h2>
          <p>You signed in as {user.email}</p>
        </div>
        <div className="space-y-8 my-8">
          <h1 className="text-4xl text-center font-bold">People Gallery</h1>
          <p className='text-center'>This gallery exhibits the people of the world based on the major races, gender and maturity- young or old.</p>
          <Search onSearch={handleSearch} />
          <div className="image-list">
            <DndProvider backend={HTML5Backend}>
              <div className="w-fit mx-auto grid grid-cols-4 gap-2">
                {filteredImages.map((person, index) => (
                  <Card person={person} key={index} index={index} moveImage={moveImage} className="bg-red-600" />
                ))}
              </div>
            </DndProvider>
          </div>
        </div>
      </div>
    )
  );
}