// components
import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

// store
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modulAtom";

const Home = () => {
  const open = useRecoilValue(modalState);

  return (
    <div className="bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>InstaClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header />
        {/* feed */}
        <Feed />
        {/* modal */}
        <Modal />
        {/* todo 3:59:50 */}
      </div>
    </div>
  );
};

export default Home;
