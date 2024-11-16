const CommitmentSection = () => {
  return (
    <section className="bg-[#F2F5F7] px-6 py-16 lg:px-20">
      <div className="">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Our Commitment to You
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Fast, flexible and secure international money transfers across the
          world.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Equity & Inclusion */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-teal-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L4.5 19.5m15-15-9 15M12 9l.75 1.5m1.5 0L15 12m-.75 1.5L12 15m0 0-.75-1.5m-.75-1.5L9 10.5m.75-1.5L12 6m0 0 .75 1.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Equity & Inclusion
          </h3>
          <p className="mt-2 text-gray-600">
            We’re for communities that have been historically underserved in the
            financial space, creating opportunities that reflect our commitment
            to inclusion.
          </p>
        </div>

        {/* Clarity & Trust */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-teal-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 14.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Clarity & Trust
          </h3>
          <p className="mt-2 text-gray-600">
            Clear pricing, transparent policies, and no hidden fees. Every
            transaction is rooted in honesty and fairness.
          </p>
        </div>

        {/* Reliability & Innovation */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-teal-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L4.5 19.5m15-15-9 15M12 9l.75 1.5m1.5 0L15 12m-.75 1.5L12 15m0 0-.75-1.5m-.75-1.5L9 10.5m.75-1.5L12 6m0 0 .75 1.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Reliability & Innovation
          </h3>
          <p className="mt-2 text-gray-600">
            Our technology evolves to keep your payments safe, simple, and fast,
            wherever you are in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
