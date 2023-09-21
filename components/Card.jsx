"use client";

import Image from "next/image";
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'IMAGE';

export default function Card({ person, index, moveImage }) {
   const [, ref] = useDrag({
      type: ItemType,
      item: { index },
   });

   const [, drop] = useDrop({
      accept: ItemType,
      hover: (draggedItem) => {
         if (draggedItem.index !== index) {
            moveImage(draggedItem.index, index);
            draggedItem.index = index;
         }
      },
   });

   return (
      <div ref={(node) => ref(drop(node))} style={{ cursor: 'grab' }}>
         <div className="h-full bg-white rounded-sm justify-center p-2 space-y-2">
            <Image src={person.image} alt='' height={100} width={100} className="aspect-[2/3] rounded w-4/5 mx-auto" />
            <ul className="flex justify-center gap-1">
               {person.tags.map((tag, tagIndex) => (
                  <li className="w-fit text-xs bg-gray-300 rounded-full p-1" key={tagIndex}>{tag}</li>
               ))}
            </ul>
      </div>
      </div>
   );
}
