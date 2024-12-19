import Image from "next/image";
import Link from "next/link";
import React from "react";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to use react hook?" },
  { _id: "2", title: "How to use react query?" },
  { _id: "3", title: "How to use react context?" },
  { _id: "4", title: "How to use react form?" },
  { _id: "5", title: "How to use react state?" },
];

const popularTags = [
  { _id: "1", name: "react", questions: 10 },
  { _id: "2", name: "javascript", questions: 5 },
  { _id: "3", name: "css", questions: 3 },
  { _id: "4", name: "html", questions: 2 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className={`flex cursor-pointer items-center justify-between gap-7`}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/icons/chevron-right.svg"}
                width={20}
                height={20}
                alt={"Chevron Right"}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <TagCard
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              questions={tag.questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
