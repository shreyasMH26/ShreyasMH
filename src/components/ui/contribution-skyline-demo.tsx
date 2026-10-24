"use client"

import ContributionSkyline from "@/components/ui/contribution-skyline"

export default function ContributionSkylineDemo() {
  // w-full is load-bearing: 21st centres every demo in a flex wrapper, and a
  // flex item left at width:auto shrinks to its contents.
  return (
    <div className="w-full bg-background bg-white min-h-screen px-4 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[980px]">
        <ContributionSkyline />
      </div>
    </div>
  )
}

export { ContributionSkylineDemo as Demo }
