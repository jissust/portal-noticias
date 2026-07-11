import { upcomingMatchesMock as matches } from "@/mock/upcomingMatchesMock";

export const UpcomingMatches = () => {
  return (
    <section className="bg-neutral-900 rounded-xl p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Proximos Partidos</h1>
      <div className="flex flex-col gap-4">
        {matches.map((match) => (
          <div key={match.fixture.id} className="bg-neutral-800 rounded-lg p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>{match.league.name}</span>
              <span>{match.league.round}</span>
            </div>
            <div
              key={match.fixture.id}
              className="flex items-center justify-between p-4 gap-2 text-white"
            >
              <div className="flex items-center gap-2">
                <img src={match.teams.home.logo} width={30} alt="" />
                {match.teams.home.name}
              </div>

              <span>vs</span>

              <div className="flex items-center gap-2">
                {match.teams.away.name}
                <img src={match.teams.away.logo} width={30} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
