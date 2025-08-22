import { ReactNode } from "react";
import Activity from "@packages/shared-components/user-profile/activity/activity";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";

export default function ActivityLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Activity>{children}</Activity>
      <Subscribecomponents />
    </>
  );
}
