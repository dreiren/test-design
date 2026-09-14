import { SilhouetteIcon } from "@/components/icons";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <div className="sec-head">
          <div className="kicker">Meet the Team</div>
          <h2>Seasoned counsel, distinguished credentials</h2>
          <p>
            Our attorneys combine legal scholarship with backgrounds in public
            administration, national security, and human resources management.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article className="tcard" key={member.name}>
              <div className="photo">
                <SilhouetteIcon />
              </div>
              <div className="body">
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
                <div className="desc">{member.desc}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
