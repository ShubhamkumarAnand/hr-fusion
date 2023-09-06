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
        <main className="mt-8 h-full lg:mt-20 lg:flex">
          <div className="max-w-md md:w-1/2 lg:mr-20 lg:w-1/3">
            <div className="my-10 space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">Welcome 💎</h2>
              <p className="text-sm text-gray-700">Welcome to HR-Fusion! Please enter your details.</p>
            </div>
            <form action="">
              <input
                type="name"
                required
                minLength={6}
                placeholder="Username"
                className="w-full border-b-[1px] border-gray-500 py-3 text-lg outline-none"
              />
              <input
                type="email"
                required
                minLength={5}
                placeholder="Email"
                className="my-5 w-full border-b-[1px] border-gray-500 py-3 text-lg outline-none"
              />
              <input
                type="password"
                required
                minLength={8}
                placeholder="Password"
                className="mb-7 w-full border-b-[1px] border-gray-500 py-3 text-lg text-gray-700 outline-none"
              />
              <button className="w-full rounded-md bg-black p-3 font-semibold text-white">Sign up</button>
              <button className="my-5 w-full rounded-md border-[1px] border-gray-700 bg-white p-3 font-semibold">
                Sign up with Google
              </button>
            </form>
            <div className="flex items-center justify-center text-sm">
              <p>Already have an account?&nbsp;</p>
              <Link href="/login" className="border-spacing-0 border-b-[1px] border-black font-semibold">
                {" "}
                Log in
              </Link>
            </div>
          </div>
          <div className="mt-10 hidden lg:flex">
            <Image src="/img/hr-fusion.jpg" width={900} height={900} alt="hr-fusion-auth" />
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
