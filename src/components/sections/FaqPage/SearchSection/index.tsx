import { FilterTabs, SearchInput } from "./components";

const SearchSection = () => {
  return (
    <section className="content-grid">
      <div className="flex flex-col items-center justify-center gap-8 pb-14 pt-16">
        <h2 className="text-[2.75rem] font-medium leading-[3.125rem] text-primary-900">
          How can we help?
        </h2>

        <SearchInput />

        <FilterTabs />
      </div>
    </section>
  );
};
export default SearchSection;
