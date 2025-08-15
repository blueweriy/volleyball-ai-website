// src/pages/purchases/BallsPremium.jsx
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Molten V5M5000 Premium Indoor Ball",
    desc: "Engineered for elite performance and consistency.",
    url: "amazon.com/Molten-V5M5000-Official-NORCECA-Volleyball/dp/B0035GO7UU/ref=sr_1_5?crid=6DZXK3KKDUHT&dib=eyJ2IjoiMSJ9.2NUp4jyHfskFYgC-Ad-fb8jz-Bx8EO-ScN6uXUDkiWnJOBybPfI57pBiYZrhVDQ0tk55oylHLIqLViJSKtCkl-Lm-jKLyDNImfvKT_X7E4YK158azX8UnS033FBKy4Y5eTah6F1GoAHyMgstuObcDEuAucjUNtDTpnwMw5ctv4_32epsZSZOU8n3aMYgsWyuKMlFiD5lqnI68HkDmHbkJM0yNC7u-B6xq8B6cjxiQgGcrvoL-6ISYo5Dt-lhvETKQmQzmb6jpYmnenOv87Hnx0H4LvKPabZxXwt5pquXP0U.VZW3FXRJF42RPXiSQrLfBn35NDuqrIzcRPe_lf5hJ5E&dib_tag=se&keywords=Molten+V5M5000+Premium+Indoor+Ball"&qid=1755284353&sprefix=molten+v5m5000+premium+indoor+ball+%2Caps%2C209&sr=8-5", // Molten V5M5000
  },
  {
    name: "Mikasa VLS300 Official Gold Medal Series",
    desc: "High-tech composite leather cover.",
    url: "https://www.amazon.com/MIKASA-FIVB-Approval-Volleyball-V200W-USA/dp/B0FC8S344Z/ref=sr_1_2?crid=S7NRX6V9I8DH&dib=eyJ2IjoiMSJ9.ui8RdTseIhYHqecHv0JUSUJjU_w72IMX0RclByJFZx2U5IaAUIqxZmiDW2rLfFJcKBehq6huT2F1irWz7cDNbrU6xtvZhGFAb0ZFu_oNQ1de899QbDbZgEUNI5WjnaebFvLXlSjywTD_2hpXnNvE3g.auTIFCDdWlCu5HNTR8tnSqNU60mklG199jWBWYLSwEU&dib_tag=se&keywords=Mikasa+VLS300+Official+Gold+Medal+Series&qid=1755284398&sprefix=mikasa+vls300+official+gold+medal+series%2Caps%2C202&sr=8-2", // Mikasa VLS300
  },
  {
    name: "Tachikara Gold Medal Composite",
    desc: "Superior touch and long-term durability.",
    url: "https://www.amazon.com/Tachikara-SV5WSC-3-color-Volleyball-Cardinal/dp/B00TXPURPQ/ref=sr_1_18?dib=eyJ2IjoiMSJ9.61xnS4-8ITwrYHmoul0QgIacWz2spJNCCCEkBHUq8gtMcD1_2XZgvLxVAQcp4ArOqg30vqhJKq1WpVM04D4eTQJhnwFAdX3zVGwleIAlSA0Z-j8e-JzPCdHfG7BLD6-dJepYIsZw_fRNoAd2dOYuzeY0JsFEVJIjb5VRfF3XoROsMket1w2gxuCrjpnmDi4gRj2AvxqrPxJGtIFYAwK3o4x3gw72dbX73Z3qX1osNUt4w5wqtIZ4ntc1etfxPFyk0OX9AHHO8f_BfGOVPjnXpncxqYexmQYor45r9IQHFLU.lVyxIA3PgQBYEal83YzETf0BnNjPriC0z8kzdSbV2wo&dib_tag=se&qid=1755284448&refinements=p_89%3ATachikara&sr=8-18&srs=119179709011", // Tachikara Gold Medal
  },
];

export default function BallsPremium() {
  return (
    <section className="space-y-6 pl-12 pr-6 max-w-4xl">
      <h1 className="text-3xl font-semibold">Premium Volleyballs</h1>

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
              View on Amazon →
            </a>
          </li>
        ))}
      </ul>

      <Link
        to="/purchases"
        className="mt-8 inline-block text-blue-600 underline"
      >
        ← Back to Purchases
      </Link>
    </section>
  );
}
