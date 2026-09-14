import {
  DocsIcon,
  HeartIcon,
  PersonIcon,
  PulseIcon,
  ScaleIcon,
  StarIcon,
} from "@/components/icons";
import { practiceAreas } from "@/lib/content";

const icons = {
  scale: ScaleIcon,
  docs: DocsIcon,
  heart: HeartIcon,
  star: StarIcon,
  pulse: PulseIcon,
  person: PersonIcon,
} as const;

export function PracticeAreas() {
  return (
    <section id="practice">
      <div className="wrap">
        <div className="sec-head">
          <div className="kicker">Practice Areas</div>
          <h2>
            Comprehensive legal services,
            <br />
            tailored to your needs
          </h2>
          <p>
            From corporate governance to labor disputes, our multidisciplinary
            team brings decades of combined military, academic, and courtroom
            experience.
          </p>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <article className="pcard" key={area.key}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                <a className="lnk" href="#contact">
                  Learn more →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
