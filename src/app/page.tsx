import Home from "@/components/Home";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IPageProps {}

const Page: FC<IPageProps> = ({}) => {
  return (
    <>
      <Home />
    </>
  );
};

export default Page;
