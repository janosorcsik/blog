import { getAllPostData } from "@/lib/blogUtils";
import Link from "next/link";

export default async function Page() {
  const datas = await getAllPostData();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {datas.map(({ slug, title, author }) => {
        return (
          <li
            key={slug}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold text-white">{title}</p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs text-gray-500">
                <p className="truncate">
                  {author ? `Written by ${author}` : ""}
                </p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <Link
                href={{ pathname: `/articles/${slug}` }}
                className="hidden rounded-md bg-gray-900 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:text-gray-900 sm:block"
              >
                View post<span className="sr-only">, {title}</span>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
