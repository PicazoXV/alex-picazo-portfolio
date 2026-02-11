export default function Section({ id, title, subtitle, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__inner">
        {(title || subtitle) && (
          <header className="section__head">
            {title ? <h2 className="section__title">{title}</h2> : null}
            {subtitle ? <p className="section__sub muted">{subtitle}</p> : null}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}
