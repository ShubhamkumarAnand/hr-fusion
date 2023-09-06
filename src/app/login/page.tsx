import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex flex-col px-10 py-7">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-sans text-2xl font-semibold">
            HR-Fusion
          </Link>
          <Image src="img/hamburger.svg" alt="hamburger-menu" height={25} width={20} />
        </nav>
        <main className="mt-24 h-full lg:flex">
          <div className="md:w-1/2 lg:w-1/3 lg:mr-20 max-w-md">
            <div className="my-10 space-y-2">
              <h2 className="text-3xl font-semibold">Welcome back 🤗</h2>
              <p className="text-sm text-gray-500">Welcome back! Please enter your details.</p>
            </div>
              <input
                type="email"
                required
                minLength={5}
                placeholder="Email"
                className="w-full border-b-[1px] border-gray-500 py-3 text-lg outline-none"
              />
              <input
                type="password"
                required
                minLength={5}
                placeholder="Password"
                className="mb-7 mt-5 w-full border-b-[1px] border-gray-500 py-3 text-lg text-gray-700 outline-none"
              />
              <button className="w-full rounded-md bg-black p-3 font-semibold text-white">Sign in</button>
              <button className="my-5 w-full rounded-md border-[1px] border-gray-700 bg-white p-3 font-semibold">
                Sign in with Google
              </button>

            <div className="flex items-center justify-center text-sm">
              <p>Need an account ? &nbsp;</p>
              <Link href="/signup" className="border-spacing-0 border-b-[1px] border-black font-semibold">
                {" "}
                Create an account
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex ">
            <Image src="/img/hr-fusion.jpg" width={900} height={900} alt="hero-img" className="h-full"/>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
