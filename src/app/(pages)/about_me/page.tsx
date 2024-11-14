export default function AboutPage() {
  const codeContent = `const aboutMe = {
  name: "Victor Atencio",
  title: "Front End Web Developer",
  location: "Maracaibo, VE",
};`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8 flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-8xl font-mono text-green-400 mb-8">
        //ABOUT_ME
      </h1>

      <div className="w-full md:w-1/2 flex justify-center">
        <pre className="font-mono text-lg md:text-2xl relative">
          <code className="block p-6 overflow-x-auto">
            {codeContent.split("\n").map((line, i) => (
              <span key={i} className="block">
                <span className="inline-block w-8 text-gray-600">{i + 1}</span>
                {i >= 1 && i <= 8 && (
                  <span className="inline-block w-4 border-l border-gray-700"></span>
                )}
                {line}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
