import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-5xl bg-zinc-900/50 border-zinc-800">
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          <div className="space-y-4">
            <div className="relative font-mono text-sm">
              <div className="absolute left-0 top-0 bottom-0 flex flex-col text-zinc-600 pr-4 select-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-6">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                ))}
              </div>
              <div className="pl-12 space-y-2">
                <div className="text-amber-500">&lt;about me&gt;</div>
                <div className="text-zinc-100">
                  Hello! I&apos;m{" "}
                  <span className="text-green-400">
                    Victor Alejandro Atencio
                  </span>
                  , a passionate software developer with over two years of
                  experience in creating engaging and efficient user interfaces.
                </div>
                <div className="text-zinc-300">
                  Based in{" "}
                  <span className="text-purple-400">Maracaibo, Venezuela</span>,
                  I&apos;ve honed my skills in both frontend and backend
                  development, specializing in crafting robust frontend
                  solutions.
                </div>
                <div className="text-zinc-300">
                  My expertise spans a wide range of technologies, including{" "}
                  <span className="text-blue-400">
                    React, Next.js, Node.js, and Angular
                  </span>
                  , with a focus on integrating the best UI/UX practices to
                  enhance user experience.
                </div>
                <div className="text-zinc-300">
                  I believe in the power of{" "}
                  <span className="text-rose-400">
                    clean code, effective communication
                  </span>
                  , and{" "}
                  <span className="text-yellow-400">agile methodologies</span>{" "}
                  to bring innovative ideas to life.
                </div>
                <div className="text-zinc-300">
                  Whether it&apos;s designing sleek interfaces or diving into
                  backend complexities, I approach every project with a
                  commitment to excellence and a user-first mindset.
                </div>
                <div className="text-zinc-100">
                  Let&apos;s create something amazing together!
                </div>
                <div className="text-amber-500">&lt;/about me&gt;</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full overflow-hidden bg-zinc-800">
              <img
                alt="Profile image placeholder"
                className="object-cover w-full h-full"
                src="/placeholder.svg?height=400&width=400"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
