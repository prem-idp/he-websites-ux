"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ActivityPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/user-profile/activity/enquiries");
  }, [router]);

  return null;
};

export default ActivityPage;
