// src/pages/purchases/BallsStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Molten FLISTATEC Official Game Ball',
    desc: 'Fédération Internationale design, premium grip.',
    url: 'https://www.amazon.com/Molten-FLISTATEC-Volleyball-Official-White/dp/B0063NDCGW/ref=sr_1_1?crid=CPZAQ20LEBXS&dib=eyJ2IjoiMSJ9.dLEjFsdacioSxNDRblVjseY0Fr-XStko77PjCD2VJ9McdkEPuuYUUZC6sPGbAaoUDYORKeCnb22lR9Kpg1_-gd3mwcoMXpLDP8fxoJ9B1DrXGCzc2-2BDr1jOgzeLotQc2xUKOGROo780LwWYNMH5EpPehGFT2dwGSiu-iZDCgCitgXSS0T4PImHi-mfaw-bbmf_BtobazeoaFDe4bhYIPQ84rOm5Q4Pe_fq7MbkmXTML1K01kaMAFIW7I16Yud0E8uHjsOdm1porDgz5hV8N5E2iLq7wskhlow0aW880Nw.-fOnMuS9C6o5jpH989TVVkAPuUkDQe9fmkjPTpNq5GY&dib_tag=se&keywords=Molten%2BFLISTATEC%2BOfficial%2BGame%2BBall&qid=1755284506&sprefix=molten%2Bflistatec%2Bofficial%2Bgame%2Bball%2Caps%2C226&sr=8-1&th=1'
  },
  {
    name: 'Mikasa V200W Official Indoor Ball',
    desc: 'Flawless flight and durability.',
    url: 'https://www.amazon.com/Mikasa-V330W-Competition-Indoor-Volleyball/dp/B07SMJD5DW/ref=sr_1_6?crid=154BM8AIGFKT1&dib=eyJ2IjoiMSJ9.5NADv6IQvv9cKned5XY5vRBjsRaBjPCDs-sJWS_MVlG42FZKNWiY8xjfyrq2ZGAy4mOEF2pqFoe9ow9lf2Qh7qfsKZ1H3tg-O1qL9xk5eGYxDzrf8aKw2DPZ9eesiSs3WYRtrE-gBdhmZdccqLpl4AsQDovQdGMWRbfav6id3LXjDRGhgz47iBqy29Srv7EA-VMgtuT12Xw2Lj8p8G0Vh1JMiviybijnSzqoaW2C5rs3fVjk5k_h_tAvRUqD8j2uTowBTftYu5NUdf0uy5gTKq1w9rW18c6jpsJLw2g6BD8.6nFRoqDeqHGvwEnf_zERZ8juiB0FgBwZynT1TvdoSH0&dib_tag=se&keywords=Mikasa+V200W+Official+Indoor+Ball&qid=1755284524&sprefix=mikasa+v200w+official+indoor+ball%2Caps%2C233&sr=8-6'
  },
  {
    name: 'Tachikara SV-5WSC Official Ball',
    desc: 'Well-balanced feel, used in NCAA.',
    url: 'https://www.amazon.com/Tachikara%C2%AE-SV-5WSC-Indoor-Volleyball-EA/dp/B00099YJ2M/ref=sr_1_3?crid=9ULVWMP5YR5&dib=eyJ2IjoiMSJ9.UyGf2pfz_3I7NZIccIllgr9oSCZR1rN3UvV3b_JE0By6SoigVrbI6yOqT0pEfr5GlAsOb5cuuSKpf8TWLZSTZydO4S_-Jpg930_qQW6up8Lqw9oxgOCIrmCNkoydPlPDN5u3x7DtFg2l9zcBi3K91_SL39wh4nIlkeiJOHnLi-bGrPoNim7LYUpG-ox9sRU-2YQGv1Nou8pELyLCOouGLlX4RVO_ioKvC9uEVTkR_6Mny56jG-_nTPHzZgnpBLcvBNRFrsWCBYnO0smpnHLmWyfqRadTHLhBkJM1vxTjnNs.OO6c6BAvjCxd5JVkYl982wXsPRxewUuU9XGrw4lR2iU&dib_tag=se&keywords=Tachikara+SV-5WSC+Official+Ball&qid=1755284542&sprefix=tachikara+sv-5wsc+official+ball%2Caps%2C252&sr=8-3'
  }
];

export default function BallsStandard() {
  return (
    <div style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
      <div className="py-16 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Standard Volleyballs</h1>

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
      </div>
    </div>
  );
}
