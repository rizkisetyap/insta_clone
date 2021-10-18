import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestion from "./Suggestion";
import { useSession } from "next-auth/react";
const Feed = () => {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      {/* section left */}
      <section className="col-span-2">
        <Stories />
        <Posts />
        {/* stories */}
        {/* <div className=""></div> */}
      </section>
      {/* post */}
      {/* section left */}
      {/* section right */}
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestion />
          </div>
        </section>
      )}

      {/* mini profil */}
      {/* sugestion */}
      {/* section right */}
    </main>
  );
};

export default Feed;
