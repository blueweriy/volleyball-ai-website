export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-extrabold mb-10 text-center">
          Welcome to Volleyball AI Coach
        </h1>
        <p className="text-lg mb-14 max-w-3xl mx-auto text-center leading-relaxed">
          Your one-stop site to improve volleyball skills and strategy with video analysis, workouts, and expert tips.
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              title: 'Skills Training',
              description: 'Learn how to serve, spike, set, receive, block, and dig like a pro.',
            },
            {
              title: 'Video Analysis',
              description: 'Upload your gameplay videos to get personalized form feedback and tips.',
            },
            {
              title: 'Workouts & Strategy',
              description: 'Follow volleyball-specific plyometric workouts and learn winning strategies.',
            },
          ].map(({ title, description }) => (
            <button
              key={title}
              className="bg-blue-100 hover:bg-yellow-400 hover:text-white transition-colors duration-300
                         p-6 rounded-lg shadow-md flex flex-col justify-between
                         cursor-pointer focus:outline-yellow-500 focus:ring-4 focus:ring-yellow-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-blue-900">{title}</h2>
              <p className="text-base text-blue-800">{description}</p>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}