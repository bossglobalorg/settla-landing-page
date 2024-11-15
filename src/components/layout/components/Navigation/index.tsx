import ButtonLink from "@/components/ui/ButtonLink";

const Navigation = () => {
  return (
    <header className="full-width content-grid fixed min-h-[5.125rem] w-full bg-white/30 backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <div className="h-[1.75rem] w-[8.37513rem] rounded bg-green-500" />

        <ul className="flex items-center justify-between gap-10">
          {[1, 2, 3, 4].map((item) => (
            <li key={item}>link {item}</li>
          ))}
        </ul>

        <div className="space-x-3">
          <ButtonLink variant="primary-outline">Login</ButtonLink>
          <ButtonLink>Get Started</ButtonLink>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
