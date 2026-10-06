"use client";

import Image from "next/image";
import "./Clients.css";

const clients = Array.from({ length: 23 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    id: index + 1,
    src: `/our%20clients/1.-${number}.svg`,
  };
});

const firstRow = clients.slice(0, 12);
const secondRow = clients.slice(12);

function ClientLogo({ client }) {
  return (
    <div className="clients__logo">
      <Image
        src={client.src}
        alt={`Apparel Fastener client ${client.id}`}
        width={200}
        height={75}
        sizes="200px"
      />
    </div>
  );
}

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__header">
        <div className="clients__eyebrow">
          <span>SELECTED CLIENTS</span>
          <span>GLOBAL PARTNERS</span>
        </div>

        <div className="clients__intro">
          <h2>
            TRUSTED BY
            <br />
            <strong>THE INDUSTRY.</strong>
          </h2>

          <p>
            We work with apparel brands and businesses across international
            markets, connecting product development, manufacturing and
            apparel supply.
          </p>
        </div>
      </div>

      <div className="clients__marquee">
        <div className="clients__track clients__track--forward">
          <div className="clients__group">
            {firstRow.map((client) => (
              <ClientLogo key={client.id} client={client} />
            ))}
          </div>

          <div className="clients__group" aria-hidden="true">
            {firstRow.map((client) => (
              <ClientLogo
                key={`duplicate-${client.id}`}
                client={client}
              />
            ))}
          </div>
        </div>

        <div className="clients__track clients__track--reverse">
          <div className="clients__group">
            {secondRow.map((client) => (
              <ClientLogo key={client.id} client={client} />
            ))}
          </div>

          <div className="clients__group" aria-hidden="true">
            {secondRow.map((client) => (
              <ClientLogo
                key={`duplicate-${client.id}`}
                client={client}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="clients__footer">
        <span>APPAREL BRANDS</span>
        <i />
        <span>GLOBAL PARTNERS</span>
        <i />
        <span>LONG-TERM RELATIONSHIPS</span>
      </div>
    </section>
  );
}