import { FC } from "react";

interface IPageProps {}

const Page: FC<IPageProps> = ({}) => {
  return (
    <>
      <div className="flex h-screen animate-pulse items-center justify-center text-3xl font-semibold text-blue-700">
        Welcome to HR-Fusion
      </div>
    </>
  );
};

export default Page;
