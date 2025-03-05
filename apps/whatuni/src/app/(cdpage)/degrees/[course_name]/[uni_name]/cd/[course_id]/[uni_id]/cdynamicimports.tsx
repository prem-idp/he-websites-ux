import dynamic from "next/dynamic";
const componentMap: any = {
    Courseoptionscomponents: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/course-details/course-options/courseoptionscomponents"
        )
    ),

    JumpToComponents: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/course-details/jump-to/jumptocomponents"
        )
    ),
    Modulescomponents: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/course-details/modules/ModulesComponent"
        )
    ),

    EntryrequirementsComponent: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/course-details/entery-requirements/EntryrequirementsComponent"
        )
    ),
    TutionFeesComponent: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/course-details/tuition-fees/TutionFeesComponent"
        )
    ),
    Popularalevelsubjectcomponents: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents"
        )
    ),
    Latestreviewscomponents: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/course-details/latest-reviews/LatestReviewsComponent"
        )
    ),
    Findacoursecomponents: () =>
        dynamic(
          () =>
            import(
              "@packages/shared-components/course-details/findacourse/findacoursecomponents"
            )
        ),
        SimilarCourseComponent: () =>
            dynamic(
              () =>
                import(
                  "@packages/shared-components/course-details/similar-course/SimilarCourseComponent"
                )
        ),
        
};

const dynamicComponent = (input: string | null | undefined) => {
  if (!input) return null; // Handle null or undefined input
  const loadComponent = componentMap[input];
  if (!loadComponent) return null; // Handle unmatched input
  return loadComponent();
};

export default dynamicComponent;
