"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
      // Sparkle trail
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.textContent = ["✨", "⭐", "💫", "🌟"][Math.floor(Math.random() * 4)];
      sparkle.style.left = e.clientX + (Math.random() * 20 - 10) + "px";
      sparkle.style.top = e.clientY + (Math.random() * 20 - 10) + "px";
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div id="custom-cursor">💩</div>

      <main className="min-h-screen text-white p-4 max-w-3xl mx-auto">
        {/* Under Construction Banner */}
        <div className="construction-banner">
          🚧 ⚠️ UNDER CONSTRUCTION ⚠️ 🚧 THIS SITE IS A WORK IN PROGRESS — MORE DYLAN CRIMES BEING DOCUMENTED DAILY
        </div>

        {/* Marquee */}
        <div className="overflow-hidden bg-black border-2 border-yellow-400 my-4 py-2">
          <div className="marquee text-yellow-300 text-xl">
            🚨 BREAKING NEWS: DYLAN STILL SUCKS 🚨 DYLAN STILL SUCKS 🚨 DYLAN STILL SUCKS 🚨 ALERT LEVEL: MAXIMUM 🚨
          </div>
        </div>

        {/* Title */}
        <div className="text-center my-8">
          <div>
            <span className="fire text-5xl">🔥</span>
            <span className="fire text-5xl">🔥</span>
            <span className="fire text-5xl">🔥</span>
          </div>
          <h1 className="wordart my-4">DYLAN SUCKS</h1>
          <div>
            <span className="fire text-5xl">🔥</span>
            <span className="fire text-5xl">🔥</span>
            <span className="fire text-5xl">🔥</span>
          </div>
          <p className="text-2xl text-yellow-300 mt-4">
            A tribute to <span className="text-red-400 font-bold blink">Dylan Kay</span>
          </p>
          <p className="text-lg text-cyan-300 mt-2">
            &ldquo;Engineer&rdquo;. Mr. Worldwide. The Epitome of Perth.
          </p>
        </div>

        <hr className="rainbow-hr" />

        {/* Visitor Counter */}
        <div className="text-center my-4">
          <p className="text-yellow-200 text-sm">You are visitor number:</p>
          <span className="hit-counter">004,827</span>
          <p className="text-gray-400 text-xs mt-1">(all of them looking for evidence)</p>
        </div>

        <hr className="rainbow-hr" />

        {/* Engineering */}
        <div className="geocities-card">
          <h2>💻 Engineering &ldquo;Contributions&rdquo;</h2>
          <ul className="space-y-2 text-left list-none">
            <li>👎 Migrated react-app to Bun and won&apos;t shut up about it</li>
            <li>👎 Staging + feature branches on Vercel, but prod is still on the old setup. Classic Dylan.</li>
            <li>👎 Asked someone to test his AI agent. Begged them to stop when it started snitching on him.</li>
            <li>👎 Believes the Lord of the Rings trilogy is the greatest cinematic achievement of all time and will fight you on it</li>
            <li>👎 Built an Oracle AI agent and now it&apos;s his entire personality</li>
            <li>👎 Deploys to prod on Fridays and calls it &ldquo;moving fast&rdquo;</li>
            <li>👎 Once said{" "}<code style={{ backgroundColor: "#333", color: "#ff6600", padding: "2px 6px" }}>it works on my machine</code>{" "}with full confidence</li>
          </ul>
        </div>

        {/* Public Health Warning */}
        <div className="geocities-card" style={{ borderColor: "red", background: "#ffe0e0" }}>
          <h2 style={{ color: "#cc0000" }}>🚨 PUBLIC HEALTH WARNING 🚨</h2>
          <p className="text-left text-lg" style={{ color: "#000" }}>
            Dylan <span className="font-bold" style={{ color: "red" }}>DOES NOT WASH HIS HANDS</span> after using the bathroom. This is not a rumour. This is a{" "}
            <span className="blink font-bold" style={{ color: "red" }}>VERIFIED, EYEWITNESS-CONFIRMED</span>{" "}
            fact. If Dylan has ever handed you food, our thoughts are with you.
          </p>
          <p className="text-center mt-4 text-4xl">🤮🤮🤮</p>
        </div>

        {/* Travel */}
        <div className="geocities-card">
          <h2>✈️ Travel &ldquo;Highlights&rdquo;</h2>
          <ul className="space-y-2 text-left list-none">
            <li>📍 Went to Hong Kong and came back with zero cultural awareness</li>
            <li>📍 Hosted in Perth — the bar for hospitality has never been lower</li>
            <li>📍 Stomps around your house at 2am like he&apos;s training for Riverdance</li>
            <li>📍 Leaves every bathroom floor like a slip-and-slide. Towels exist, Dylan.</li>
            <li>📍 The kind of travel companion who says &ldquo;let&apos;s wing it&rdquo; and then complains about the plan</li>
            <li>📍 Has been to multiple countries and learned nothing from any of them</li>
            <li>📍 Packs for a trip in 10 minutes and it shows</li>
          </ul>
        </div>

        {/* Rating */}
        <div className="geocities-card text-center">
          <h2>⭐ Dylan&apos;s Rating</h2>
          <div className="text-5xl my-4">
            ⭐<span style={{ opacity: 0.2 }}>⭐⭐⭐⭐</span>
          </div>
          <p className="text-lg font-bold" style={{ color: "#000" }}>
            1/5 — would not recommend as a friend, coworker, or human
          </p>
        </div>

        {/* Stats */}
        <div className="geocities-card text-center">
          <h2>📊 The Numbers Don&apos;t Lie</h2>
          <div className="flex justify-around mt-4">
            <div>
              <div className="text-4xl font-black rainbow-text">100%</div>
              <div className="text-xs" style={{ color: "#000" }}>of people surveyed agree</div>
            </div>
            <div>
              <div className="text-4xl font-black" style={{ color: "red" }}>0</div>
              <div className="text-xs" style={{ color: "#000" }}>times he washed his hands</div>
            </div>
            <div>
              <div className="text-4xl font-black" style={{ color: "purple" }}>∞</div>
              <div className="text-xs" style={{ color: "#000" }}>levels of suckage</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="geocities-card">
          <h2>🗣️ What People Are Saying</h2>
          <div className="space-y-4 text-left" style={{ color: "#000" }}>
            <blockquote style={{ borderLeft: "4px solid purple", paddingLeft: "12px", fontStyle: "italic" }}>
              &ldquo;I bought this domain specifically to let the world know.&rdquo;
              <br /><span className="text-sm" style={{ color: "#666", fontStyle: "normal" }}>— A concerned friend</span>
            </blockquote>
            <blockquote style={{ borderLeft: "4px solid purple", paddingLeft: "12px", fontStyle: "italic" }}>
              &ldquo;Says he&apos;s done partying every weekend. He is never done partying.&rdquo;
              <br /><span className="text-sm" style={{ color: "#666", fontStyle: "normal" }}>— His liver</span>
            </blockquote>
            <blockquote style={{ borderLeft: "4px solid purple", paddingLeft: "12px", fontStyle: "italic" }}>
              &ldquo;He migrated us to Bun. Nobody asked for that.&rdquo;
              <br /><span className="text-sm" style={{ color: "#666", fontStyle: "normal" }}>— An anonymous coworker</span>
            </blockquote>
            <blockquote style={{ borderLeft: "4px solid purple", paddingLeft: "12px", fontStyle: "italic" }}>
              &ldquo;A man of little words — unless he&apos;s trying to jailbreak an AI. Then he has 171.&rdquo;
              <br /><span className="text-sm" style={{ color: "#666", fontStyle: "normal" }}>— Someone who witnessed the incident</span>
            </blockquote>
          </div>
        </div>

        <hr className="rainbow-hr" />

        {/* Guestbook & Footer */}
        <div className="text-center my-8 space-y-4">
          <p>
            <a href="#" className="guestbook text-xl" onClick={(e) => e.preventDefault()}>
              📝 Sign My Guestbook! 📝
            </a>
          </p>

          <div className="webring">
            <p className="text-sm">
              ⬅️ Prev | 🌐 <strong>The Dylan Sucks Webring</strong> | Next ➡️
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Made with 💔 by someone who knows Dylan personally and regrets it
          </p>
          <p className="text-xs text-gray-500">
            © 2026 Dylan Sucks Inc. All rights reserved. Dylan still sucks.
          </p>
          <p className="text-sm text-yellow-300 mt-2">
            👷 Webmaster: A concerned friend
          </p>
          <p className="ie-disclaimer mt-4">
            ⚠️ Best viewed in Internet Explorer 6 at 800x600 resolution
          </p>
          <p className="text-xs text-gray-600 mt-2">
            🎵 [MIDI auto-play disabled for your safety] 🎵
          </p>
        </div>
      </main>
    </>
  );
}
