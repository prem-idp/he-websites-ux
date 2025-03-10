// components/ClientTopSection.js
"use client";

import React, { useState } from "react";
import UserFavourite from "@packages/shared-components/common-utilities/user-favourite/user-favourite";

interface ClientTopSectionProps {
    collegeId: string;
    collegeName: string;
}

export default function ClientTopSection({ collegeId, collegeName }: ClientTopSectionProps) {
    const [exceedMessage, setExceedMessage] = useState(false);

    const handleExceedMessage = (data: any) => {
        setExceedMessage(data); // Update state in client component
    };

    return (
        <>
            <UserFavourite
                favouriteProps={{
                    exceedData: { handleExceedMessage },
                    contentId: collegeId,
                    contentName: collegeName,
                    contentType: "INSTITUTION",
                }}
            />
            {exceedMessage && <p>Exceed Message Triggered!</p>} {/* Example usage */}
        </>
    );
}