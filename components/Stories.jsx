import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const suggestion = [...Array(15)].map((_, idx) => ({
      ...faker.helpers.contextualCard(),
      id: idx,
    }));

    setStories(suggestion);
  }, []);
  return (
    <div className="flex space-x-2 bg-white mt-8 p-6 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 shadow-sm border-b ">
      {stories.map((story, idx) => (
        <Story key={story.id} profile={story} />
      ))}
    </div>
  );
};

export default Stories;
