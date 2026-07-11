import Image from "next/image";

type TeamStanding = {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
  };
};

type Props = {
  standings: TeamStanding[];
  title?: string;
};

export const Standings = ({
  standings,
  title,
}: Props) => {

  return (
    <section className="w-full bg-zinc-900 rounded-xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">
        Tabla de posiciones: {title}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b border-zinc-700 text-sm text-zinc-400">
              <th className="text-left py-3 px-2">#</th>
              <th className="text-left py-3 px-2">Equipo</th>
              <th className="text-center py-3 px-2">PJ</th>
              <th className="text-center py-3 px-2">G</th>
              <th className="text-center py-3 px-2">E</th>
              <th className="text-center py-3 px-2">P</th>
              <th className="text-center py-3 px-2">DG</th>
              <th className="text-center py-3 px-2">Pts</th>
              <th className="text-center py-3 px-2">Forma</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team: any) => (
              <tr
                key={team.team.id}
                className="border-b border-zinc-800 hover:bg-zinc-800 transition"
              >
                <td className="py-4 px-2 font-bold">
                  {team.rank}
                </td>

                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={team.team.logo}
                      alt={team.team.name}
                      width={25}
                      height={25}
                    />

                    <span>{team.team.name}</span>
                  </div>
                </td>

                <td className="text-center">
                  {team.all.played}
                </td>

                <td className="text-center">
                  {team.all.win}
                </td>

                <td className="text-center">
                  {team.all.draw}
                </td>

                <td className="text-center">
                  {team.all.lose}
                </td>

                <td className="text-center">
                  {team.goalsDiff}
                </td>

                <td className="text-center font-bold text-yellow-400">
                  {team.points}
                </td>

                <td className="text-center">
                  <div className="flex justify-center gap-1">
                    {team.form.split("").map(
                      (result: string, index: number) => (
                        <span
                          key={index}
                          className={`
                            w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                            ${
                              result === "W"
                                ? "bg-green-500"
                                : result === "L"
                                ? "bg-red-500"
                                : "bg-yellow-500"
                            }
                          `}
                        >
                          {result}
                        </span>
                      )
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};