export default function Features() {
  const features = [
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
  ]

  return (
    <div className="flex flex-col gap-6">
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-neutral-900 text-white p-6 rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
          <p className="text-md">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}