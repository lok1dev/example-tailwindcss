const Collections = () => {
  const TAGS: string[] = ["Profile", "New York", "Relax", "Person", "Fashion"];

  return (
    <div className="w-full rounded-md bg-[#EFF0F1] p-16 font-[#0E0E38] shadow-lg">
      <h1 className="font-elec text-2xl font-bold">Popular Collections</h1>

      <div className="mt-6 space-x-2">
        {TAGS.map((tag) => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              id={tag}
              className="mb-2 inline-block cursor-pointer rounded-md bg-white p-4 px-4 py-2 hover:text-blue-500"
              href="#"
            >
              {tag}
            </a>
          );
        })}
      </div>

      <div className="mt-14 grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6">
          <div>
            <img
              src="https://i.pinimg.com/564x/14/c6/74/14c674c7903e07ba035f07684a5b9791.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <img
              src="https://i.pinimg.com/736x/6c/8f/01/6c8f01be1d4d76d7ffcc781710816051.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://i.pinimg.com/564x/62/69/e4/6269e46e76804bc9f481c9502d133959.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://i.pinimg.com/736x/5f/23/75/5f237589a5f83054162c2da2379bee8e.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-2xl font-medium">Cars</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 inline size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="inline">144</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6">
          <div>
            <img
              src="https://i.pinimg.com/564x/14/c6/74/14c674c7903e07ba035f07684a5b9791.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <img
              src="https://i.pinimg.com/736x/6c/8f/01/6c8f01be1d4d76d7ffcc781710816051.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://i.pinimg.com/564x/62/69/e4/6269e46e76804bc9f481c9502d133959.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://i.pinimg.com/736x/5f/23/75/5f237589a5f83054162c2da2379bee8e.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-2xl font-medium">Cars</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 inline size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="inline">144</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6">
          <div>
            <img
              src="https://i.pinimg.com/564x/14/c6/74/14c674c7903e07ba035f07684a5b9791.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <img
              src="https://i.pinimg.com/736x/6c/8f/01/6c8f01be1d4d76d7ffcc781710816051.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://i.pinimg.com/564x/62/69/e4/6269e46e76804bc9f481c9502d133959.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://i.pinimg.com/736x/5f/23/75/5f237589a5f83054162c2da2379bee8e.jpg"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-2xl font-medium">Cars</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 inline size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="inline">144</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
