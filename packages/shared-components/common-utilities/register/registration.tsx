"use client";
import React, { useState } from "react";
import Link from "next/link";
import JoinusComponent from "@packages/shared-components/common-utilities/register/joinuscomponent";
import SigninComponent from "@packages/shared-components/common-utilities/register/signincomponent";

const Registration = ({
  isAccountMerging = false,
}: {
  isAccountMerging?: boolean;
}) => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section className="bg-grey-50 pt-[28px] md:py-[64px]">
      <div className="w-full md:w-[598px] mx-auto md:border md:border-grey-200 md:rounded-[8px] bg-white overflow-hidden">
        {/* Tabs Header */}
        <div className="flex  border-gray-200 text-center small font-semibold">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`flex-1 py-[12px] 
            ${
              activeTab === "tab1"
                ? "border-b-2 border-primary-400 text-primary-400"
                : "text-black hover:border-primary-400 hover:text-primary-400 border-b-2"
            }`}
          >
            Join us
          </button>

          <button
            onClick={() => setActiveTab("tab2")}
            className={`flex-1 py-[12px]
            ${
              activeTab === "tab2"
                ? "border-b-2 border-primary-400 text-primary-400"
                : "text-black hover:border-primary-400 hover:text-primary-400 border-b-2"
            }`}
          >
            Sign in
          </button>
        </div>
        {/* Tabs Content */}
        {activeTab === "tab1" && (
          <JoinusComponent
            signupVisible={true}
            clearingVisible={false}
            isAccountMerging={isAccountMerging}
          />
        )}
        {activeTab === "tab2" && (
          <>
            <SigninComponent />
            <div className="py-[16px] w-full border-t border-t-grey-200 bg-grey-50">
              <div className="small font-semibold text-grey300 text-center">
                Don’t have an account?{" "}
                <Link
                  href="/registeration/signin"
                  className="text-primary-400 underline hover:text-primary-500"
                >
                  Join us
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Registration;
