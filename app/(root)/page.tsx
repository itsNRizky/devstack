import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc={"/icons/search.svg"}
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questionData.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
}

const questionData: Question[] = [
  {
    _id: "1",
    title: "What is a good way to learn programming?",
    description:
      "I'm a beginner and I want to learn programming. What should I do?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "Python" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfb8RTcQRshdvbEdIuHdTnzWId1hi72IZtQ&s",
    },
    createdAt: new Date(),
    upvotes: 10,
    answers: 5,
    views: 100,
  },
  {
    _id: "2",
    title: "How to optimize my web application?",
    description:
      "I have a web application that is slow and I want to optimize it. What should I do?",
    tags: [
      { _id: "3", name: "Optimization" },
      { _id: "4", name: "Performance" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfb8RTcQRshdvbEdIuHdTnzWId1hi72IZtQ&s",
    },
    createdAt: new Date(),
    upvotes: 8,
    answers: 3,
    views: 80,
  },
  {
    _id: "3",
    title: "How to learn about machine learning?",
    description:
      "I'm interested in machine learning and I want to learn more about it. What resources should I use?",
    tags: [
      { _id: "5", name: "Machine Learning" },
      { _id: "6", name: "AI" },
    ],
    author: {
      _id: "2",
      name: "Jane Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfb8RTcQRshdvbEdIuHdTnzWId1hi72IZtQ&s",
    },
    createdAt: new Date(),
    upvotes: 5,
    answers: 2,
    views: 50,
  },
];
