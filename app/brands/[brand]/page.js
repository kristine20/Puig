// app/brands/[brand]/page.jsx
import BrandsNav from "../page";

import TextBio from "../components/textBio";
import TextVideoBio from "../components/textVideBio";
import TextTimelineBio from "../components/texttimelineBio";
import { brandData, perfumeryUniverses } from "../data/brandsData";
import ImageGallery from "../components/imageGallery";
import VideoGallery from "../components/videoGallery";
import Accordion from "../components/accordion";
import Test from "../components/test";
import { carolinaQuestions, questions } from "../data/testData";

const BrandPage = ({ params }) => {
  const { brand } = params;
  const data = brandData[brand];

  return (
    <>
      <BrandsNav />
      <section className="w-fixed brand-content-wrapper pt-1">
        {data ? (
          <>
            {data.timelineItems && (
              <TextTimelineBio
                bioTimelineData={data.timelineText}
                timelineItems={data.timelineItems}
              />
            )}
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

            {data.content && <div>{data.content}</div>}
            <ImageGallery images={data.images} />
            <VideoGallery videos={data.videogallery} />
            <Accordion items={perfumeryUniverses[brand] ?? []} />
            <Test questions={questions[brand]} />
          </>
        ) : (
          <div>Бренд не найден.</div>
        )}
      </section>
    </>
  );
};

export default BrandPage;
