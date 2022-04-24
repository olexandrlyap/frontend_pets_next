
import Link from "next/link"

export default function ShowMoreButton({link, text}) {
  return (
      <Link href={link}>
           <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-400 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 ">{text}</a>
      </Link>

  )
}
