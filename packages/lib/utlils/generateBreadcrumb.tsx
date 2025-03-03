export function generateBreadcrumbData(currentPath:any,customLabels:any) {

    const sanitizedPath = currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;
    const pathSegments = sanitizedPath
      .split("/")
      .filter((segment: any) => segment);
    // Construct breadcrumb data
    const breadcrumbData = pathSegments.map((segment: any, index: any) => {
      const url =
        index === pathSegments.length - 1
          ? "" // No URL for the last breadcrumb
          : "/" + pathSegments.slice(0, index + 1).join("/"); // Build URL for each segment

      return {
        url,
        label:
          customLabels[index] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char: any) => char.toUpperCase()),
      };
    });
    breadcrumbData.unshift({
      url: "/",
      label: "Home",
    });

    return breadcrumbData;
  }