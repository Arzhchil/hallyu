import React from "react";
import Link from "next/link";
import ChoreographerCard from "../../components/ChoreographerCard";

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

const choreographers = [
  {
    id: "1",
    name: "Марк",
    slug: slugify("Mark"),
    bio: "Биография Марк...",
    image: "/img/Mark.jpg",
  },
  {
    id: "2",
    name: "Дже",
    slug: slugify("Je"),
    bio: "Биография Дже...",
    image: "/img/Je.jpg",
  },
  {
    id: "3",
    name: "Несс",
    slug: slugify("Ness"),
    bio: "Биография Несс...",
    image: "/img/Ness.jpg",
  },
  {
    id: "4",
    name: "Алина",
    slug: slugify("Alina"),
    bio: "Биография Алина...",
    image: "/img/Alina.jpg",
  },
];
const ChoreographersGallery: React.FC = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        {choreographers.map((choreographer) => (
          <Link
            key={choreographer.id}
            href={`/choreographers/${choreographer.slug}`}
            className="md:w-1/3 border-black border-r-[1px] [&:nth-child(3n)]:border-r-0"
          >
            <ChoreographerCard
              name={choreographer.name}
              image={choreographer.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChoreographersGallery;
