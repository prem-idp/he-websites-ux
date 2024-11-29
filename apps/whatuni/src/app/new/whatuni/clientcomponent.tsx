"use client";

import React, { useEffect } from "react";
import crypto from "crypto";

const SearchAjaxComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const body = {
          affiliateId: 220703,
          actionType: "subject",
          keyword: "",
          qualCode: "",
          networkId: 2,
        };
        const payloadString = JSON.stringify(body);
        const hash = crypto
          .createHash("sha256")
          .update(payloadString)
          .digest("hex");

        const response = await fetch("/api/ajax", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-amz-content-sha256": hash,
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("API Response:", data);
      } catch (error) {
        console.error("Error calling Search Ajax API:", error);
      }
    };

    fetchData();
  }, []);

  // Render nothing
  return null;
};

export default SearchAjaxComponent;
