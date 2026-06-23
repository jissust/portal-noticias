import { upcomingMatchesMock as matches } from "@/mock/upcomingMatchesMock";

export const UpcomingMatches = () => {
  console.log(matches);
  return (
    <>
      <h1>Proximos Partidos</h1>
      {matches.map((match) => (
        <div key={match.fixture.id}>
          <div>{match.league.name}</div>
          <div
            key={match.fixture.id}
            className="flex items-center justify-between p-4 border-b gap-2"
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
    </>
  );
};
