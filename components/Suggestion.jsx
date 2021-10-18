import faker from "faker";
import { useState, useEffect } from "react";
const Suggestion = () => {
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const suggest = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestion(suggest);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h2 className="font-sm font-bold text-gray-400">Suggestion for You</h2>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestion.map((profile) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default Suggestion;
const Profile = ({ profile }) => (
  <div className="flex items-center justify-between mt-3">
    <img
      className="w-10 h-10 rounded-full p-{2px}"
      src={profile.avatar}
      alt="profile"
    />
    <div className="flex-1 ml-4">
      <h2 className="font-semibold text-sm">{profile.username}</h2>
      <h3 className="text-xs text-gray-400">Work at {profile.company.name}</h3>
    </div>
    <button className="text-blue-400 text-sm font-bold">Follow</button>
  </div>
);
