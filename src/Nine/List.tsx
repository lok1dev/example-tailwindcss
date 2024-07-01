interface Account {
  title: string;
  subtitle: string;
  countAccount: number;
  img: string;
}

const accounts: Account[] = [
  {
    title: "Dropbox",
    subtitle: "dropbox.com",
    countAccount: 24,
    img: "https://maytinhtram.vn/picture/file/tin-tuc-5/dropbox.jpg",
  },
  {
    title: "Pinterest",
    subtitle: "pinterest.com",
    countAccount: 3,
    img: "https://i.pinimg.com/564x/72/c1/75/72c175da462262da056fa2db58e5d6b6.jpg",
  },
  {
    title: "Microsoft",
    subtitle: "microsoft.com",
    countAccount: 19,
    img: "https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=7w0mZmIMOAqbkQ&pid=ImgRaw&r=0",
  },
];

const List = () => {
  return (
    <div className="mt-12 flex w-[68rem] flex-col gap-6 rounded-xl bg-white px-28 py-16">
      <div className="flex items-center gap-[30rem]">
        <div className="relative grow rounded-md border-2 border-gray-300">
          <input
            type="text"
            className="mr-2 w-full px-4 py-3 pl-10"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-6">
          <svg
            className="h-8 w-8 cursor-pointer text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z"
            />
          </svg>
          <p className="rounded-full bg-[#8598fc] px-5 py-4 text-3xl font-bold text-white">
            IG
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold">Account</h1>

      <div className="space-y-4">
        {accounts.map((account) => {
          return (
            <div
              key={account.title}
              className="flex items-center justify-between rounded-xl p-4 hover:bg-[#faf2fe]"
            >
              <div className="flex gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  <img
                    src={account.img}
                    className="flex h-10 w-10 object-cover"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold">{account.title}</h3>
                  <p className="text-md font-semibold text-gray-500">
                    {account.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-md font-semibold">
                {account.countAccount} accounts
              </p>

              <button className="h-10 w-10 rounded-full pb-2 text-center text-xl font-bold hover:bg-white">
                ...
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
