import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-10 flex-col shadow-lg">
      <nav className="flex justify-between border-b-2 border-gray-300 px-5 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-mt-1 flex gap-1 font-sans text-xl font-semibold text-gray-700">
            <p className="hidden lg:flex">HR-Fusion</p>
            <p>Dashboard</p>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-10">
          <Link href="/dashboard/notification">
            <Image src="/img/notification-bell.svg" width={18} height={25} alt="notification" />
          </Link>
          <Link href="/dashboard/profile" className="flex">
            <Image
              src="/img/profile-photo.png"
              width={30}
              height={30}
              alt="profile-photo"
              className="rounded-full"
            />
            <h3 className="ml-2 mr-1 hidden max-w-xl font-semibold text-gray-700 md:flex">
              Shubham Kumar Anand
            </h3>
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
      <nav className="flex items-center justify-between space-x-12 overflow-scroll px-5 py-5 hover:shadow-lg lg:px-10">
        <Link href="/dashboard" className="flex items-center gap-3 text-gray-500 hover:text-black">
          <Image src="/img/dashboard/dashboard.svg" height={25} width={25} alt="dashboard" />
          <p className="mt-auto font-medium">Dashboard</p>
        </Link>
        <Link href="/dashboard/employees" className="flex items-center gap-3 text-gray-500 hover:text-black">
          <Image src="/img/dashboard/employees.svg" height={25} width={25} alt="dashboard" />
          <p className="mt-auto font-medium">Employees</p>
        </Link>
        <Link
          href="/dashboard/task-schedule"
          className="flex items-center gap-3 text-gray-500 hover:text-black">
          <Image src="/img/dashboard/task-schedule.svg" height={25} width={25} alt="dashboard" />
          <p className="overflow mt-auto font-medium">Tasks</p>
        </Link>
        <Link href="/dashboard/calender" className="flex items-center gap-3 text-gray-500 hover:text-black">
          <Image src="/img/dashboard/calender.svg" height={25} width={25} alt="dashboard" />
          <p className="overflow mt-auto font-medium">Calender</p>
        </Link>
        <Link href="/dashboard/requests" className="flex items-center gap-3 text-gray-500 hover:text-black">
          <Image src="/img/dashboard/request.svg" height={25} width={25} alt="dashboard" />
          <p className="mt-auto font-medium">Request</p>
        </Link>
        <Link href="/dashboard/salary" className="flex items-center gap-3 text-gray-500 hover:text-black">
          <Image src="/img/dashboard/emp-salary.svg" height={25} width={25} alt="dashboard" />
          <p className="mt-auto font-medium">Salary</p>
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
