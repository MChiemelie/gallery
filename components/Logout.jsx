import Link from "next/link";

export default function Logout() {
  return (
  <button className="p-2 text-sm lg:text-base rounded-sm bg-blue-700 text-center text-white w-fit">
    <Link href="/api/auth/logout">Logout</Link>
  </button>
  )
}