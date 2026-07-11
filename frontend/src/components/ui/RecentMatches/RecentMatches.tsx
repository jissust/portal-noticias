import Image from "next/image";
import {recentMatchesMock as recentMatches} from "@/mock/recentMatches";

export const RecentMatches = () => {
  return (
    <section className="bg-neutral-900 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Últimos partidos</h2>

      <div className="flex flex-col gap-4">
        {recentMatches.response.map((match) => (
          <div key={match.fixture.id} className="bg-neutral-800 rounded-lg p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>{match.league.name}</span>
              <span>{match.league.round}</span>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              {/* Local */}
              <div className="flex items-center gap-3 justify-end">
                <span className="text-white font-medium">
                  {match.teams.home.name}
                </span>

                <Image
                  src={match.teams.home.logo}
                  alt={match.teams.home.name}
                  width={35}
                  height={35}
                />
              </div>

              {/* Resultado */}
              <div className="text-white text-xl font-bold">
                {match.teams.home.goals} - {match.teams.away.goals}
              </div>

              {/* Visitante */}
              <div className="flex items-center gap-3">
                <Image
                  src={match.teams.away.logo}
                  alt={match.teams.away.name}
                  width={35}
                  height={35}
                />

                <span className="text-white font-medium">
                  {match.teams.away.name}
                </span>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-3">
              {new Date(match.fixture.date).toLocaleDateString("es-AR")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
