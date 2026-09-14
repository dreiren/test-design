import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        {stats.map((item) => (
          <div className="col" key={item.lab}>
            <div className="num">{item.num}</div>
            <div className="lab">{item.lab}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
