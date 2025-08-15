// src/pages/purchases/BallsBudget.jsx
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Franklin Sports PVC Training Ball",
    desc: "Durable PVC for repetitive practice.",
    url: "https://www.amazon.com/Franklin-Sports-Mystic-Volleyball-Synthetic/dp/B07XNSXRBX/ref=sr_1_8?crid=2FYLV8ER6N506&dib=eyJ2IjoiMSJ9.rxuehAT2wZiBZ9hmDsBDfmo4o9SsLif-HbD-7jzn3VQ-2FRjYmDiFEjF0yQJgU6og2D1rG1TWHNK3WBQ-ddkGckiVY2toCMmel-d2Va67zEev8ggtLYbV8tDUHWtVvRYL9n6bq9oKHBO84avnVQAOieGcsgmK6cxN-kFth0veFqxZuw2UdzatZ6167wWCD3EbLbg73wI_p9OrU1IzB3U97IR2KjYn1oKAvRLXdG3BQS-QUTTQdaC8DzgfRaShK5XTs1WVLext1fp4COL1_jdkueV1mF6yXOXwWvZoIGe6nY.lmD1uedNpPIhtQkwSmmsgreND5TbjQWctlfr5-ltc10&dib_tag=se&keywords=franklin%2Bsports%2Bpvc%2Btraining%2Bvolley%2Bball&qid=1755284108&s=sporting-goods&sprefix=franklin%2Bsports%2Bpvc%2Btraining%2Bvlley%2Bball%2B%2Csporting%2C172&sr=1-8&th=1",
  },
  {
    name: "Molten Recreational Volleyball",
    desc: "Soft cover, great for drills.",
    url: "https://www.amazon.com/Molten-Stars-Stripes-Recreational-Volleyball/dp/B00JMB3FLY/ref=sr_1_1?crid=4I8FC5GJN81P&dib=eyJ2IjoiMSJ9.W74O091nQYWZnQD3p4DkdGaj0gVENfk-XCqCWQqclHLzr4eXtcADlXWKoIzRAT795DvCqiUsk28U7ytFVo7uA9DhHcwSb9PrOiiKHGQMrDlkje6GM9T62E8c-Tyhm0JjaR2JCBY1W5gspiVkyJtQIXkLyNZDwfKbq_QFc6zhUhBmtKyyHdYa8ll5IL1oHqDz1xEaJQ1lJICx1SkrQaU_fvCttAECLLlEO2gp6dUgidI-DPwcI9_8oQhYjlf_eKkbFZzINamwhxjjtDXc8ATAvibx8hnPCAs4jIz1i0BUJFE.rtPQrbNfKHTexayipJrlzrme_9GIIVt0DKwcWW93an8&dib_tag=se&keywords=Molten%2BRecreational%2BVolleyball&qid=1755284175&s=sporting-goods&sprefix=molten%2Brecreational%2Bvolleyball%2Csporting%2C183&sr=1-1&th=1",
  },
  {
    name: "Tachikara Sensi-Touch Training Ball",
    desc: "Good feel, budget friendly.",
    url: "https://www.amazon.com/Tachikara-VX2-Solid-Spark-Volleyball/dp/B0F3JV26CQ/ref=sr_1_13?dib=eyJ2IjoiMSJ9.yc5XK8PfO6JjZg6lSQqD5Yt2A_PG5rIkEofIhcKFj1u_JhylzQcvu7CuTeRvsix791ibdLtg_Z0g2ym-QmZcdRhsBKAlTP9AhJfNgYYmaalY_dezjI09u_KhV6bvzL-qENeUWgNejjTsxmGeHJOrSeaLtd2DxMKAb_Nht8zM0jht0lmp1hITZF9HkfaC2CwZxzc6E6q4h9zbrDVZ84x9B6vrFmzSQYE3DOiJ5VeQg7WSKSNDGyFNu2p1exb_X3X_0kDg4-IaIFvFY_Y1stC4XcOmo5fgt_ne1uPjY8-Wu0o.GMTjHqA0GpZWyi-ttOeNbPSmBRO1_6JM8aOowO9B29A&dib_tag=se&qid=1755284259&refinements=p_89%3ATachikara&sr=8-13&srs=119179709011&th=1",
  },
];

export default function BallsBudget() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Budget Volleyballs</h1>

      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.name} className="bg-gray-50 p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-1 text-gray-700">{it.desc}</p>
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 underline"
            >
              View on Store →
            </a>
          </li>
        ))}
      </ul>

      <Link to="/purchases" className="mt-8 inline-block text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </section>
  );
}
