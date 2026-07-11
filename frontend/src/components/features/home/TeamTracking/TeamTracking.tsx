import { Standings } from "@/components/ui/Standings/Standings";
import { MockStandings } from "@/mock/standings";
import { UpcomingMatches } from "@/components/ui/UpcomingMatches/UpcomingMatches";
import { RecentMatches } from "@/components/ui/RecentMatches/RecentMatches";

export const TeamTracking = () => {
  const GroupA = MockStandings[0]?.league?.standings[0];
  const GroupB = MockStandings[0]?.league?.standings[1];

  return (
    <>
      <section id="estadisticas" className="w-full py-20 scroll-mt-26">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10">
            Estadísticas
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UpcomingMatches />
            <RecentMatches />
            <Standings title="Grupo A" standings={GroupA} />
            <Standings title="Grupo B" standings={GroupB} />
          </div>
        </div>
      </section>
    </>
  );
};
