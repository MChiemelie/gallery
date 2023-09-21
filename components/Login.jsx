import Link from "next/link";

export default function Login() {
  return (
  <button className="p-2 text-lg lg:text-md rounded-sm bg-blue-700 text-center text-white w-1/6">
    <Link href="/api/auth/login">Login</Link>
  </button>
  )
}