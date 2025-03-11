// components/ClientTopSection.js
"use client";

import React, { useState } from "react";
import UserFavourite from "@packages/shared-components/common-utilities/user-favourite/user-favourite";

interface UserFavouriteTopSectionProps {
    collegeId: number;
    collegeName: string;
}

export default function UserFavouriteTopSection({ collegeId, collegeName }: UserFavouriteTopSectionProps) {
    const [exceedMessage, setExceedMessage] = useState(false);

    const handleExceedMessage = (data: any) => {
        setExceedMessage(data); // Update state in client component
    };

    return (
        <>
            <UserFavourite exceedData={handleExceedMessage}
                contentId={collegeId}
                contentName={collegeName}
                contentType="INSTITUTION"
            />
            {exceedMessage && <p>Exceed Message Triggered!</p>} {/* Example usage */}
        </>
    );
}