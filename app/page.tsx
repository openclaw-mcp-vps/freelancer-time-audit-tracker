export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Overpaying for<br />
          <span className="text-[#58a6ff]">Freelancer Hours</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          FreelanceAudit ingests your freelancer time logs and automatically flags billing anomalies, suspicious entries, and productivity gaps — before you sign off on the invoice.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Auditing — $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Anomaly Detection", desc: "Flags duplicate entries, suspiciously round hours, and off-hours work automatically." },
          { icon: "📊", title: "Productivity Patterns", desc: "Visualize output-per-hour trends across projects and freelancers over time." },
          { icon: "📄", title: "Audit Reports", desc: "One-click PDF reports ready to share with clients or use in dispute resolution." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to audit freelancer billing</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited CSV & API uploads",
              "Automated anomaly detection",
              "Up to 20 freelancer accounts",
              "Exportable PDF audit reports",
              "Role-based team access",
              "Email alerts on flagged entries"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What time log formats do you support?",
              a: "FreelanceAudit accepts CSV exports from Toggl, Harvest, Clockify, and any standard CSV with date, duration, and description columns. API integrations are also available."
            },
            {
              q: "How does anomaly detection work?",
              a: "Our algorithms check for duplicate time blocks, suspiciously round hour entries, work logged outside agreed hours, unusually high daily totals, and entries with vague or repeated descriptions."
            },
            {
              q: "Can I manage multiple freelancers?",
              a: "Yes. The Pro plan supports up to 20 freelancer accounts per agency workspace, with role-based access so team leads can review without editing audit results."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} FreelanceAudit. Built for agencies that value accuracy.</p>
      </footer>
    </main>
  );
}
