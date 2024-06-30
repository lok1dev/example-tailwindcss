import { useState } from "react";

interface Users {
  id: number;
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

const UsersList = () => {
  const users: Users[] = [
    {
      id: 1,
      name: "John Doe",
      job: "Software Engineer",
      avatar: "https://example.com/avatar1.jpg",
      tags: ["React", "JavaScript", "TypeScript"],
    },
    {
      id: 2,
      name: "Jane Smith",
      job: "UX Designer",
      avatar: "https://example.com/avatar2.jpg",
      tags: ["UI/UX", "Design Systems"],
    },
    {
      id: 3,
      name: "Michael Brown",
      job: "Data Scientist",
      avatar: "https://example.com/avatar3.jpg",
      tags: ["Machine Learning", "Python"],
    },
    {
      id: 4,
      name: "Emily Davis",
      job: "Product Manager",
      avatar: "https://example.com/avatar4.jpg",
      tags: ["Product Strategy", "Agile"],
    },
    {
      id: 5,
      name: "Alex Johnson",
      job: "Frontend Developer",
      avatar: "https://example.com/avatar5.jpg",
      tags: ["React", "CSS", "HTML"],
    },
    {
      id: 6,
      name: "Sarah Wilson",
      job: "Marketing Specialist",
      avatar: "https://example.com/avatar6.jpg",
      tags: ["Digital Marketing", "Content Strategy"],
    },
  ];

  const FILTERS: string[] = [
    "Reputation",
    "New User",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const [query, setQuery] = useState("");

  const filterUsers: Users[] =
    query.length > 0
      ? users.filter((user) => {
          return user.name.toLowerCase().includes(query.toLowerCase());
        })
      : users;

  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1 className="font-elec text-3xl font-black">Users</h1>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div className="relative grow rounded-md border-2 border-gray-300">
            <input
              type="text"
              className="mr-2 w-full px-4 py-3 pl-10"
              placeholder="Search users"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
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
        </div>
        <div>
          {FILTERS.map((flt) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                id={flt}
                className="mb-2 inline-block cursor-pointer rounded-md bg-white p-4 px-4 py-2 hover:bg-blue-500 hover:text-white"
                href="#"
              >
                {flt}
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filterUsers.map((user) => {
          return (
            <div
              key={user.id}
              className="flex cursor-pointer gap-x-4 p-6 hover:border-[1px] hover:bg-[#BFC8E5] hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/id/${user.id}00/200/300`}
                alt=""
                className="h-24 w-24 rounded-full"
              />

              <div>
                <h3 className="font-elec font-black">{user.name}</h3>
                <p className="font-elect text-sm">{user.job}</p>

                <div className="mt-4 space-x-2">
                  {user.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="inline-block rounded-full border-[1px] border-slate-400 px-2 py-1 text-xs text-blue-600"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
