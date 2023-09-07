import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="flex justify-between px-5 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-mt-1 flex gap-1 font-sans text-xl text-gray-700">
            <p className="font-semibold">HR-Fusion</p>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-5 md:gap-8">
          <span className="absolute -mt-1 ml-[6.5px] flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
            <span className="relative inline-flex h-1 w-1 rounded-full bg-gray-500"></span>
          </span>
          <Link href="/dashboard/notification">
            <Image src="/img/notification-bell.svg" width={18} height={25} alt="notification" className="" />
          </Link>
          <Link href="/signup" className="flex rounded-lg bg-gray-100 p-2 md:bg-white">
            <Image
              src="/img/profile-photo.png"
              width={30}
              height={30}
              alt="profile-photo"
              className="rounded-full"
            />
            <h3 className="ml-2 mr-1 hidden max-w-xl font-semibold text-gray-700 md:flex">Sign up</h3>
            <Image
              src="/img/dropdown.svg"
              width={18}
              height={18}
              alt="profile-expand"
              className="ml-2 mt-2 animate-bounce lg:ml-1"
            />
          </Link>
        </div>
      </nav>

      {/* About */}
      <main className="flex mt-16 lg:mt-28 flex-col items-center mx-auto text-center justify-center">
        <div className="mx-5 max-w-4xl">
          <h1 className="font-sans text-3xl lg:text-6xl font-semibold my-3 text-gray-700">
            Streamline Your Workforce Management with our Cutting-edge Software Solution
          </h1>
          <p className="font-sans text-sm text-gray-500">Revolutionize workforce management with our all-in-one software, featuring onboarding, task management, attendance tracking, and automatic salary slip generation.</p>
        </div>
        <Image src="/img/home/dashboard.png" width={1200} height={300} alt="dashboard-demo" className="my-6 lg:my-12" />
        <div className="flex gap-2 my-6 lg:my-3 justify-center items-center">
          <Link href="/signup" className="px-3 py-2 border-[1px] border-black font-semibold text-black rounded">Start Free </Link>
          <Link href="/contact" className="px-3 py-2 border-[1px] border-black font-semibold text-black rounded bg-gray-300">Contact </Link>
        </div>
      </main>
      {/* Features */}
      {/* Pricing */}
      {/* Testimonial */}
      {/* Contact */}
    </div>
  );
};

export default Home;
