export default function Portfolio() {
  return (
    <section className="portfolio-full-bg">
      <section className="w-fixed portfolio-wrapper">
        <div className="">
          <h1>Портфолио брендов PUIG в России </h1>
        </div>

        <div className="pt-1 portfolio-list-wrapper">
          <div>
            <ul className="list-circle">
              <li>NICHE</li>
            </ul>
            <ul className="portfolio-items">
              <li>Herrera Confidential </li>
              <li> Penhaligon's</li>
              <li> L'Artisan Parfumeur</li>
              <li> Christian Louboutin</li>
            </ul>
          </div>
          <div>
            <ul className="list-circle">
              <li>PRESTIGE</li>
            </ul>
            <ul className="portfolio-items">
              <li>Paco Rabanne</li>
              <li>Carolina Herrera</li>
              <li>Nina Ricci</li>
              <li>Jean Paul Gaultier</li>
            </ul>
          </div>
          <div>
            <ul className="list-circle">
              <li>LIFESTYLE</li>
            </ul>
            <ul className="portfolio-items">
              <li>Antonio Banderas</li>
              <li>United Colors of Benetton</li>
              <li>Shakira</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
