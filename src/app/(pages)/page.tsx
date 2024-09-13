export default function HomePage() {
  const codeContent = `<hello>
{
  Hello, my name is Victor()
  I am a full-stack web-developer
}
</hello>`;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col md:flex-row items-center justify-center">
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
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-6xl md:text-9xl font-bold mb-6 text-green-400">
          {"<VICTOR"}
          <br />
          {"ATENCIO />"}
        </h1>
        <h2 className="text-3xl md:text-5xl mb-4 text-white">//I HELP YOU</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-purple-400">
          BEAUTIFULLY
        </h3>
      </div>
    </div>
  );
}
