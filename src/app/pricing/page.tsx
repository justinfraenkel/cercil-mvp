export default function PricingPage() {
    return (
      <div className="min-h-screen bg-black text-white font-mono px-6 py-20">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-12">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Starter",
              price: "Free",
              description: "Great for trying out Cercil with a few connections.",
              features: ["Up to 3 connections", "Basic messaging", "Limited history"],
            },
            {
              title: "Pro",
              price: "$9/month",
              description: "Ideal for professionals building stronger networks.",
              features: ["Up to 15 connections", "Advanced messaging", "Unlimited history"],
              highlight: true,
            },
            {
              title: "Team",
              price: "$29/month",
              description: "Best for small teams staying in sync.",
              features: ["Up to 50 connections", "Shared circles", "Team calendar"],
            },
          ].map((plan) => (
            <div
              key={plan.title}
              className={`border rounded-lg p-6 ${plan.highlight ? "border-yellow-400 bg-zinc-900" : "border-zinc-700"}`}
            >
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-yellow-400 text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-zinc-400 mb-4">{plan.description}</p>
              <ul className="mb-6 space-y-1 text-sm text-zinc-300 list-disc list-inside">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition">
                {plan.price === "Free" ? "Start Free Trial" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  