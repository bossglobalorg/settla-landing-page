const FeaturedSection = () => {
  return (
    <section className="bg-primary-900 relative z-20">
      <div className="flex justify-between gap-8 rounded-tr-[2rem] bg-white px-10 pb-8 pt-14 max-lg:flex-col lg:items-center lg:rounded-t-[2rem]">
        <p className="whitespace-nowrap leading-6 text-gray-600">
          As featured on:
        </p>

        <div className="flex w-full flex-wrap items-center justify-start gap-8">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-primary-900 h-[1.25rem] w-[6.25rem] rounded md:w-[8.75rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedSection;
