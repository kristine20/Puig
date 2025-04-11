import Image from "next/image";
import bio from "../assets/images/mark.png";
import signature from "../assets/images/signature.png";
export default function Bio() {
  return (
    <section className="w-fixed bio-wrapper pt-1">
      <div>
        <Image src={bio} alt="Bio" className="h-auto" />
      </div>
      <div className="bio-text-wrapper ml-10 items-center row">
        <p className="bio-text">
          Компания Puig известна своим умением развивать модные бренды, и мы
          делаем все возможное, чтобы так же успешно действовать в сфере
          парфюмерии. Мы верим, что основа нашего успеха ― сочетание
          талантливого управления бизнесом и страсти к моде и ароматам. Мы
          объединили творчество и увлеченность в уникальную бизнес-модель.
        </p>

        <div className="bio-basic">
          <div>
            <p className="bio-name">Марк Пуч</p>
            <p className="bio-position">Президент компании</p>
          </div>
          <Image src={signature} alt="Bio" className="h-auto" />
        </div>
      </div>
    </section>
  );
}
