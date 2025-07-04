import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import Opendaysrgridcomponents from '@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents';
import OpendaysSREliteComponents from '@packages/shared-components/common-utilities/opendays-sr-elite/OpendaysSREliteComponents';
import { openDaysData, AllOpenDaysData, AnyEventsOpenDaysData } from '@packages/constants/constants';
import Advicecomponents from '@packages/shared-components/home/advice/advicecomponents';
import Faqcomponents from '@packages/shared-components/common-utilities/faq/faqcomponents';
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import Link from "next/link";
import Uniinfocomponents from "@packages/shared-components/course-details/uni-info/uniinfocomponents";

const OpendaySRComponents = () => {

    const breadcrumbData = [
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Open days",
    },
    {
      url: "",
      label: "Search results",
    },
  ];

  const bgColor="grey-50";
  const bgColor1="white";
  return (
    <>
      <section className="bg-grey-50 px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="pt-[16px]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
          <div className="py-[16px]"><div className="h5 mb-[4px]">Search for open days</div>
            <p>Choose from [NUMBER] of universities that offer [NUMBER] open days. Filter by date, type and location to get the best results for you.</p>
          </div>
        </div>
      </section>
      <SearchFilterButtons />
      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[10px] md:px-[20px] xl:px-0 lg:py-[8px]">
        <div className="max-w-container mx-auto">
          <ul className="flex items-start gap-[8px] uppercase">
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              2025 - 2026
            </li>
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
              University of Portsmouth
            </li>
            <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small flex items-center gap-[2px]">
              <Link href="" aria-label="Plus Icon">
                <svg
                  className="cursor-pointer"
                  width="7"
                  height="20"
                  viewBox="0 0 7 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.55756 10.508H4.31356V12.788H2.68156V10.508H0.437563V8.96H2.68156V6.668H4.31356V8.96H6.55756V10.508Z"
                    fill="#3460DC"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <OpendaysSREliteComponents {...openDaysData} bgColor={bgColor} featureOpd={true} />
      <Opendaysrgridcomponents {...AllOpenDaysData} bgColor={bgColor1} />
      <Opendaysrgridcomponents {...AnyEventsOpenDaysData} anyTimeEvents={true} bgColor={bgColor} />
      <Advicecomponents bgColor={bgColor1} heading={"Open days advice and articles"} subheading={""} />
      <Faqcomponents />
    </>
  );
};

export default OpendaySRComponents;
