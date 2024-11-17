const LocationsSection = () => {
  const locations = [
    { city: "Lagos", country: "Nigeria", icon: "🌉" },
    { city: "San Fransisco", country: "United States", icon: "🌉" },
    { city: "London", country: "United Kingdom", icon: "🏛" },
    { city: "Regina", country: "Canada", icon: "🗼" },
  ];

  return (
    <section className="bg-white px-6 py-16 lg:px-20">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2 text-gray-600">Offices</p>
        <h2 className="mb-4 text-4xl font-semibold text-[#0A3733]">
          Where we're located
        </h2>
        <p className="mb-12 text-gray-600">
          You'll find our talented team spread across the globe.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {locations.map((location) => (
            <div key={location.city} className="flex flex-col items-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#0A3733]">
                <div className="text-4xl">{location.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A3733]">
                {location.city}
              </h3>
              <p className="text-gray-600">{location.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
