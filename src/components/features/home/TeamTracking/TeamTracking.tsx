import { Standings } from "@/components/ui/Standings/Standings";
import { MockStandings } from "@/mock/standings";

export const TeamTracking = () => {
    const GroupA = MockStandings[0]?.league?.standings[0]; 
    const GroupB = MockStandings[0]?.league?.standings[1]; 
  
    return (
    <>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1>Team tracking</h1>
            <Standings title="Grupo A" standings={GroupA} />
            <br />
            <br />
            <Standings title="Grupo B" standings={GroupB} />
        </div>
      </section>
    </>
  );
};