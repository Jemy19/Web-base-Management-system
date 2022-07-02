export default function Notes({ notes }) {
    return (
      <>
        <section className="mb-5">
          <h3>Additional Notes</h3>
        <p className="lg:w-1/2 text-justify">{notes}</p>
        </section>
      </>
    )
  }