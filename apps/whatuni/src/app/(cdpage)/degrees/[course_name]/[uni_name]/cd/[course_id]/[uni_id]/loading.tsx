'use client'
// import Courseheaderinfoskeleton from "@pa"
import Courseheaderinfoskeleton from "@packages/shared-components/skeleton/courseheaderinfoskeleton"
import Yearofentryskeleton from "@packages/shared-components/skeleton/yearofentryskeleton"
import Courseoptionsskeleton from "@packages/shared-components/skeleton/courseoptionsskeleton"
import Jumptoskeleton from "@packages/shared-components/skeleton/jumptoskeleton"
import Courseinfoskeleton from "@packages/shared-components/skeleton/courseinfoskeleton"
import Reviewsliderskeleton from "@packages/shared-components/skeleton/reviewsliderskeleton"
export default function Loader() {
    return (
        <>
            <Courseheaderinfoskeleton />
            <Yearofentryskeleton />
            <Courseoptionsskeleton />
            <Jumptoskeleton />
            <Courseinfoskeleton />
            <Reviewsliderskeleton />
        </>

    )
}