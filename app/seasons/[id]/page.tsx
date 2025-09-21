// app/seasons/[id]/page.tsx
import { notFound } from "next/navigation";
import { getFlowersBySeason } from "@/lib/flowers";
import SeasonPageClient from "@/components/SeasonPageClient";

interface SeasonPageProps {
  params: {
    id: string;
  };
}

export default async function SeasonPage({ params }: SeasonPageProps) {
  // In Next.js 15, params is a Promise, so we need to await it
  const { id } = await Promise.resolve(params);
  const season = id.toLowerCase();
  const seasonFlowers = getFlowersBySeason(season);

  if (seasonFlowers.length === 0) {
    notFound();
  }

  return (
    <SeasonPageClient
      season={season as "spring" | "summer" | "fall" | "winter"}
      seasonFlowers={seasonFlowers}
    />
  );
}