import type { WaitlistEntry } from "~/types/waitlist";

interface AdminDashboardProps {
  entries: WaitlistEntry[];
}

export default function AdminDashboard({ entries }: AdminDashboardProps) {
  const totalEntries = entries.length;
  const planCounts = entries.reduce((acc, entry) => {
    acc[entry.plan] = (acc[entry.plan] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const today = new Date();
  const todayEntries = entries.filter(entry => {
    const entryDate = new Date(entry.created_at);
    return entryDate.toDateString() === today.toDateString();
  }).length;

  const stats = [
    { name: "Total Waitlist Entries", value: totalEntries },
    { name: "Today's New Entries", value: todayEntries },
    { name: "Free Plan", value: planCounts["free"] || 0 },
    { name: "Pro Plan", value: planCounts["pro"] || 0 },
    { name: "Enterprise Plan", value: planCounts["enterprise"] || 0 },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
          </dd>
        </div>
      ))}
    </div>
  );
} 