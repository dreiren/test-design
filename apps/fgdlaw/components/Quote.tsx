import { QuoteMarkIcon } from "@/components/icons";

export function Quote() {
  return (
    <section className="quote-sec" id="insights">
      <div className="wrap">
        <div className="quote-box">
          <QuoteMarkIcon />
          <p>
            &ldquo;Providing just and equitable legal services with the highest
            degree of professionalism and integrity — that has been our
            commitment since day one.&rdquo;
          </p>
          <div className="who">
            Atty. Frederick G. Dedace, PhD
            <span>Founder, FGDLaw</span>
          </div>
        </div>
      </div>
    </section>
  );
}
