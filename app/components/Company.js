import Image from "next/image";
import company from "../assets/images/company.png";

export default function Company() {
  return (
    <section className="company-wrapper pt-1">
      <div className="company-text-wrapper">
        <div>
          <h2 className="ml-30">Компания PUIG ― </h2>
          <p className="company-text ml-30">
            семейная компания, которой в настоящее время управляет третье
            поколение семьи Puig. Штаб-квартира Puig располагается в Барселоне.
            Залог успеха компании ― в умелом развитии модных и парфюмерных
            брендов, грамотном использовании уникальных концепций и высоком
            качестве продукции.
          </p>
          <p className="company-text ml-30">
            PUIG полностью владеет такими домами моды как: Paco Rabanne,
            Carolina Herrera, Nina Ricci, Jean Paul Gaultier и Dries Van Noten.
            А также работает по лицензии с марками: Christian Louboutin, Comme
            Des Garsons, Antonio Banderas, Shakira и United Colors of Benetton.
            Продукция компании представлена более чем в 150 странах мира.
          </p>
        </div>
      </div>
      <div>
        <Image src={company} alt="Company" />
      </div>
    </section>
  );
}
