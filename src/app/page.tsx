export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />

      {/* Floating emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute text-4xl animate-float"
            style={{
              left: `${(i * 5 + 3) % 100}%`,
              top: `${(i * 7 + 2) % 100}%`,
              animationDelay: `${(i * 0.7) % 5}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          >
            {["💩", "👎", "🤡", "😤", "🚮"][i % 5]}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-16">
        <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
          DYLAN SUCKS
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-2 font-light">
          A tribute to <span className="text-red-400 font-semibold">Dylan Kay</span>
        </p>
        <p className="text-lg text-gray-500 mb-10">
          &ldquo;Engineer&rdquo;. Mr. Worldwide. The Epitome of Perth.
        </p>

        <div className="space-y-6 text-lg text-gray-400">
          {/* Engineering roasts */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-red-400 mb-3">
              💻 Engineering &ldquo;Contributions&rdquo;
            </h2>
            <ul className="space-y-2 text-left">
              <li>• Migrated react-app to Bun and won&apos;t shut up about it</li>
              <li>• Staging + feature branches on Vercel, but prod is still on the old setup. Classic Dylan.</li>
              <li>• Suggested &ldquo;devbox + agent e2e testing&rdquo; after seeing one tweet</li>
              <li>• Got called out for thread etiquette in Slack and acted like it was news</li>
              <li>• Built an Oracle AI agent and now it&apos;s his entire personality</li>
              <li>• His code reviews consist of &ldquo;looks good&rdquo; and a mass-approval spree at 11pm Hong Kong time</li>
              <li>• Deploys to prod on Fridays and calls it &ldquo;moving fast&rdquo;</li>
              <li>
                • Once said{" "}
                <code className="text-orange-400 bg-white/10 px-1 rounded">
                  it works on my machine
                </code>{" "}
                with full confidence
              </li>
            </ul>
          </div>

          {/* Personal hygiene */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
            <h2 className="text-xl font-bold text-red-500 mb-3">
              🚨 Public Health Warning
            </h2>
            <p className="text-left text-lg">
              Dylan <span className="font-bold text-red-400">does not wash his hands</span> after using the bathroom. This is not a rumour. This is a verified, eyewitness-confirmed fact. If Dylan has ever handed you food, our thoughts are with you.
            </p>
          </div>

          {/* Travel roasts */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-blue-400 mb-3">
              ✈️ Travel &ldquo;Highlights&rdquo;
            </h2>
            <ul className="space-y-2 text-left">
              <li>• Went to Hong Kong and came back with zero cultural awareness</li>
              <li>• Hosted in Perth and Sydney — the bar for hospitality has never been lower</li>
              <li>• The kind of travel companion who says &ldquo;let&apos;s wing it&rdquo; and then complains about the plan</li>
              <li>• Has been to multiple countries and learned nothing from any of them</li>
              <li>• Receding hairline accelerating faster than his career</li>
            </ul>
          </div>

          {/* Rating */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              ⭐ Dylan&apos;s Rating
            </h2>
            <div className="flex items-center justify-center gap-2 text-4xl">
              <span>⭐</span>
              <span className="opacity-20">⭐</span>
              <span className="opacity-20">⭐</span>
              <span className="opacity-20">⭐</span>
              <span className="opacity-20">⭐</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              1/5 — would not recommend as a friend, coworker, or human
            </p>
          </div>

          {/* Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-orange-400 mb-3">
              📊 The Numbers Don&apos;t Lie
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-black text-red-400">100%</div>
                <div className="text-xs text-gray-500">
                  of people surveyed agree
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-400">0</div>
                <div className="text-xs text-gray-500">times he washed his hands</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-400">∞</div>
                <div className="text-xs text-gray-500">levels of suckage</div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-purple-400 mb-3">
              🗣️ What People Are Saying
            </h2>
            <div className="space-y-4 text-left italic text-gray-300">
              <blockquote className="border-l-2 border-purple-500/50 pl-4">
                &ldquo;I bought this domain specifically to let the world know.&rdquo;
                <span className="block text-sm text-gray-500 mt-1 not-italic">
                  — A concerned friend
                </span>
              </blockquote>
              <blockquote className="border-l-2 border-purple-500/50 pl-4">
                &ldquo;He couldn&apos;t outsmart a chatbot in 171 attempts. This is the guy reviewing your pull requests.&rdquo;
                <span className="block text-sm text-gray-500 mt-1 not-italic">
                  — Everyone in #00-ai-superbook
                </span>
              </blockquote>
              <blockquote className="border-l-2 border-purple-500/50 pl-4">
                &ldquo;He migrated us to Bun. Nobody asked for that.&rdquo;
                <span className="block text-sm text-gray-500 mt-1 not-italic">
                  — An anonymous coworker
                </span>
              </blockquote>
              <blockquote className="border-l-2 border-purple-500/50 pl-4">
                &ldquo;He stayed at my place in Perth and Sydney. I&apos;m still recovering.&rdquo;
                <span className="block text-sm text-gray-500 mt-1 not-italic">
                  — His gracious host
                </span>
              </blockquote>
              <blockquote className="border-l-2 border-purple-500/50 pl-4">
                &ldquo;A man of little words — unless he&apos;s trying to jailbreak an AI. Then he has 171.&rdquo;
                <span className="block text-sm text-gray-500 mt-1 not-italic">
                  — Mimi
                </span>
              </blockquote>
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-600">
          Made with 💔 by someone who knows Dylan personally and regrets it
        </p>
        <p className="mt-2 text-xs text-gray-700">
          © 2026 Dylan Sucks Inc. All rights reserved. Dylan still sucks.
        </p>
      </div>
    </main>
  );
}
