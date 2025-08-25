"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const UserProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/user-profile/profile-details");
  }, [router]);

  return null;
};

export default UserProfilePage;
