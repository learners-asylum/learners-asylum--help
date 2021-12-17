import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

function getPosts() {
  return [
    {
      title: "Chemistry vs Physics",
      body: `In this article we will explore how Chemistry and Physics compare and contrast each other as fields`,
    },
    {
      title: "Mathematics in Biology",
      body: `In this article we will see how mathematics finds it's place in the science of life and biology`,
    },
    {
      title: "Server Side Rendered JavaScript Development",
      body: `We will take a deep dive into the new trend where server-side rendered frameworks like NextJS, NuxtJS, Gatsby, and Remix are favoured`,
    },
    {
      title: "New Developments in Computerized Applied Sciences",
      body: `We will explore the new world of applied sciences using computer science`,
    },
  ];
}

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();
