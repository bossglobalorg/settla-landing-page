const CtaSection = () => {
  return (
    <section className="bg-primary-900 px-6 py-20 text-white lg:px-20 rounded-b-3xl">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-accent-400">Ready to get started?</p>
        <h1 className="mb-8 text-4xl font-semibold md:text-6xl">
          Join Settla today and let's grow your business without limits.
        </h1>
        <button className="mx-auto flex items-center rounded-full bg-yellow-300 px-8 py-3 font-medium text-[#0A3733] transition-colors hover:bg-yellow-400">
          Get started now
          {/* <ChevronRight className="ml-2 h-5 w-5" /> */}
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
