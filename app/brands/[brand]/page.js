// app/brands/[brand]/page.jsx
import BrandsNav from "../page";

import TextBio from "../components/textBio";
import TextVideoBio from "../components/textVideBio";
import TextTimelineBio from "../components/texttimelineBio";
import { brandData } from "../data/brandsData";

const BrandPage = ({ params }) => {
  const { brand } = params;
  const data = brandData[brand];

  return (
    <>
      <BrandsNav />
      <section className="w-fixed brand-content-wrapper pt-1">
        {data ? (
          <>
            {data.videoBioSections && data.videos && (
              <TextVideoBio
                sections={data.videoBioSections}
                videos={data.videos}
                showVideoOnDesktop={true}
              />
            )}
            {data.bio && data.videos && (
              <TextBio bioData={data.bio} videos={data.videos} />
            )}
            {data.timelineItems && (
              <TextTimelineBio
                bioTimelineData={data.timelineText}
                timelineItems={data.timelineItems}
              />
            )}
            {data.content && <div>{data.content}</div>}
          </>
        ) : (
          <div>Бренд не найден.</div>
        )}
      </section>
    </>
  );
};

export default BrandPage;
