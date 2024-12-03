import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "next/form";
import { useRouter } from "next/navigation";
export default function PgsSearch({ pgs_search_data }: any) {
  const [isPgsUniversityClicked, setIsPgsUniversityClicked] = useState(false);
  const [qualification, setQualification] = useState("");
  const [filteredsubjectlist, setFilteredsubject] = useState([]);
  const [filteredUniversity, setFilteredUniversity] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState({
    description: "",
    url: "",
    categoryCode: "",
    browseCatId: "",
    parentSubject: "",
    qualCode: "",
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const universityClick = () => {
    setIsPgsUniversityClicked(!isPgsUniversityClicked);
    setShowDropdown(true);
  };
  const [isPgsSearched, setIsPgsSearched] = useState(false);
  const router = useRouter();
  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      setIsPgsSearched(!isPgsSearched);
    }
  };

  useEffect(() => {
    const { description } = searchValue || {};

    // Early return if description is invalid or too short
    if (!description || description.length < 3) {
      setFilteredsubject([]);
      setFilteredUniversity([]);
      return;
    }

    // Filter subjects first
    const filteredSubjects = pgs_search_data?.courseDetails?.filter(
      (subjects: any) =>
        subjects?.description?.toLowerCase().includes(description.toLowerCase())
    );
    // console.log(filteredSubjects);
    // Priority search function to sort filtered results based on search text position
    const prioritySearch = (list: any, searchText: any) => {
      if (!searchText) return list;

      const searchLower = searchText.toLowerCase();

      return list
        ?.map((item: any) => ({
          ...item,
          position: item.description.toLowerCase().indexOf(searchLower),
          startsWithSearch: item.description
            .toLowerCase()
            .startsWith(searchLower),
          exactMatch: item.description.toLowerCase() === searchLower,
        }))
        .filter((item: any) => item.position !== -1) // Only include items with searchText
        .sort((a: any, b: any) => {
          if (a.exactMatch !== b.exactMatch) return a.exactMatch ? -1 : 1;
          if (a.startsWithSearch !== b.startsWithSearch)
            return a.startsWithSearch ? -1 : 1;
          if (a.position !== b.position) return a.position - b.position;
          return a.description.localeCompare(b.description);
        })
        ?.map((item: any) => ({
          description: item.description,
          url: item.url,
          category_code: item.category_code,
          browse_cat_id: item.browse_cat_id,
          parent_subject: item.parent_subject,
          qual_Code: item.qual_Code,
        }));
    };
    const filteredUniversity = pgs_search_data?.collegeDetails?.filter(
      (subjects: any) =>
        // console.log("subjects", subjects),
        subjects?.collegeNameDisplay
          ?.toLowerCase()
          .includes(description.toLowerCase())
      // Check qualCode only if it's not empty
    );
    const prioritySearchcollge = (list: any, searchText: any) => {
      if (!searchText) return list;

      const searchLower = searchText.toLowerCase();

      return list
        ?.map((item: any) => ({
          ...item,
          position: item.collegeNameDisplay.toLowerCase().indexOf(searchLower),
          startsWithSearch: item.collegeNameDisplay
            .toLowerCase()
            .startsWith(searchLower),
          exactMatch: item.collegeNameDisplay.toLowerCase() === searchLower,
        }))
        .filter((item: any) => item.position !== -1) // Only include items with searchText
        .sort((a: any, b: any) => {
          if (a.exactMatch !== b.exactMatch) return a.exactMatch ? -1 : 1;
          if (a.startsWithSearch !== b.startsWithSearch)
            return a.startsWithSearch ? -1 : 1;
          if (a.position !== b.position) return a.position - b.position;
          return a.collegeNameDisplay.localeCompare(b.collegeNameDisplay);
        })
        ?.map((item: any) => ({
          collegeId: item.collegeId,
          collegeNameDisplay: item.collegeNameDisplay,
          collegeNameAlias: item.collegeNameAlias,
          collegeName: item.collegeName,
        }));
    };
    console.log(
      prioritySearchcollge(filteredUniversity, description),
      "filteredUniversity"
    );
    // const sortedResults = prioritySearch(filteredSubjects, description);
    setFilteredUniversity(
      prioritySearchcollge(filteredUniversity, description)
    );
    setFilteredsubject(prioritySearch(filteredSubjects, description));
    // console.log(
    //   prioritySearch(filteredSubjects, description),
    //   "filterdsubject "
    // );
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    // Delay adding listener to avoid immediate triggering
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const keywordSearch = () => {
    if (!searchValue?.description) {
      return console.log("search value is empty");
    } else {
      if (qualification) {
        const sanitizedDescription = searchValue?.description
          .trim()
          .replace(/\s+/g, "-");
        return router.push(
          `/postgraduate-courses/search?q=${sanitizedDescription}&qualification=${qualification}`
        );
      }
      const sanitizedDescription = searchValue?.description
        .trim()
        .replace(/\s+/g, "-");
      return router.push(
        `/postgraduate-courses/search?q=${sanitizedDescription}`
      );
    }
  };

  const courseLink = (e: any) => {
    console.log(e, "e");
    console.log(qualification, "qualification");
    if (qualification) {
      return router.push(`${e?.url}&qualification=${qualification}`);
    } else {
      return router.push(`${e?.url}`);
    }
  };

  return (
    <div className="max-w-container mx-auto">
      <div
        ref={containerRef}
        className="px-[16px] py-[16px] xl:p-0 flex flex-col gap-[16px]"
      >
        <div className="bg-white rounded-[24px] p-[16px] relative z-3 border border-grey-200 hover:border-primary-500 shadow-custom-1 md:rounded-[32px] md:mt-[-28px] md:pl-[24px] md:p-[10px]">
          <div className="flex flex-col gap-[16px] small md:flex-row">
            <Form action={keywordSearch} className="relative grow">
              <input
                name="keyword"
                value={searchValue.description}
                onChange={(e) =>
                  setSearchValue((prev: any) => ({
                    ...prev,
                    description: e.target.value.trim(),
                    url: "",
                  }))
                }
                onClick={universityClick}
                onKeyUp={handleKeyUp}
                type="text"
                className="w-full focus:outline-none pt-0 pb-[16px] text-black placeholder:text-gray-500 border-b border-grey-200 md:py-[10px] md:border-none"
                aria-label="submenu"
                placeholder="Subject, qualification or university"
              />
              {isPgsUniversityClicked && showDropdown && (
                <div className="flex flex-col w-[calc(100%+32px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-16px] top-[53px] md:w-[345px]">
                  <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                    QUALIFICATION
                  </div>
                  <ul>
                    {pgs_search_data?.studyLevelList?.map(
                      (item: any, index: any) => (
                        <li
                          onClick={() => {
                            setQualification(item?.qualUrl);

                            universityClick();
                          }}
                          key={index}
                          className="px-[16px] py-[10px] block hover:bg-blue-50 hover:underline cursor-pointer"
                        >
                          {item.qualDesc}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {showDropdown && (
                <div
                  //   ref={containerRef}
                  className="flex flex-col w-[calc(100%+32px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px]  left-[-16px] top-[53px] custom-scrollbar-2 max-h-[205px] overflow-y-auto mr-[4px]"
                >
                  {searchValue.description.length > 2 && (
                    <div onClick={() => keywordSearch()}>
                      <div className="px-[16px] py-[12px]">
                        <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                          KEYWORD SEARCH FOR
                        </p>
                        <p className="small text-primary-400">
                          {searchValue.description}
                        </p>
                      </div>
                    </div>
                  )}
                  {filteredsubjectlist.length > 0 && (
                    <>
                      <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                        QUALIFICATION
                      </div>
                      <ul>
                        {filteredsubjectlist.map((item: any, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSearchValue(item);
                              courseLink(item);
                            }}
                            className="px-[16px] py-[10px] block hover:bg-blue-50 cursor-pointer"
                          >
                            <span className="text-grey900 underline">
                              {item.description}
                            </span>{" "}
                            {/* <span className="text-grey-700">{item.course}</span> */}
                          </div>
                        ))}
                      </ul>
                    </>
                  )}
                  {filteredUniversity.length > 0 && (
                    <>
                      <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                        Univerity
                      </div>
                      <ul>
                        {filteredUniversity.map((item: any, index) => (
                          <Link
                            href={`/universities/${item.collegeNameDisplay
                              .trim()
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            key={index}
                            className="px-[16px] py-[10px] block hover:bg-blue-50 cursor-pointer"
                          >
                            <span className="text-grey900 underline">
                              {item.collegeNameDisplay}
                            </span>{" "}
                            {/* <span className="text-grey-700">{item.course}</span> */}
                          </Link>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </Form>
            <button
              type="submit"
              onClick={() => keywordSearch()}
              className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[114px]"
            >
              <Image
                src="static/assets/icons/search_icon.svg"
                width="18"
                height="18"
                alt="Search icon"
              />
              Search
            </button>
          </div>
        </div>
        {/* <p className="small text-negative-default">
          Please select university from dropdown
        </p> */}
      </div>
    </div>
  );
}
