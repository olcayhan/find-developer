export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to Find Developer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find Developer is a platform that connects developers with job
          opportunities. We help developers find their dream jobs and help
          companies find the best talent.
        </p>
      </div>
    </div>
  );
}
