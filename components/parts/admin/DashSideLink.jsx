import Link from "next/link";

export default function DashSideLink({ href, text }) {
  return (
    <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
      <Link href={href} passHref className="flex items-center">
        {/* <span className="icon icon-tabler icon-tabler-grid"> </span> */}
        <span className="text-sm ml-2">{text}</span>
      </Link>
      {/* <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
        5
      </div> */}
    </li>
  );
}
