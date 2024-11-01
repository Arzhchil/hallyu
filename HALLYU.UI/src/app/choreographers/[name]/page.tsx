import React from "react";

interface Choreographer {
  id: string;
  name: string;
  slug: string;
  bio: string;
  image: string;
}

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

const choreographers: Choreographer[] = [
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

interface ChoreographerPageProps {
  params: {
    name: string;
  };
}

const ChoreographerPage = ({ params }: ChoreographerPageProps) => {
  const { name } = params;

  const choreographer = choreographers.find((c) => c.slug === name);

  if (!choreographer) {
    return <p>Хореограф не найден</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{choreographer.name}</h1>
      <p className="text-lg">{choreographer.bio}</p>
    </div>
  );
};

export default ChoreographerPage;
