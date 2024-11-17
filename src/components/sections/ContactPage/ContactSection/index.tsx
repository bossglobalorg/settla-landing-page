import assetLib from "@/lib/assets";

const ContactSection = () => {
  return (
    <section className="-mt-[5.125rem] min-h-dvh bg-[#0A3733] px-6 py-16 pt-[11.125rem] text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-4xl font-semibold">
              Get in Touch with Settla
            </h2>
            <p className="text-gray-300">
              We're here to help you with all your currency conversion and
              payment needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-[#0D4440] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300">
                <img src={assetLib.contactOneIcon} alt={"c"} />
                {/* <MessageCircle className="h-6 w-6 text-[#0A3733]" /> */}
              </div>
              <h3 className="mb-2 text-xl font-semibold">Have a questions?</h3>
              <p className="text-gray-300">
                Find the answers to frequently asked questions here.
              </p>
            </div>

            <div className="rounded-lg bg-[#0D4440] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300">
                <img src={assetLib.contactTwoIcon} alt={"c"} />
                {/* <BookOpen className="h-6 w-6 text-[#0A3733]" /> */}
              </div>
              <h3 className="mb-2 text-xl font-semibold">Settla Blog</h3>
              <p className="text-gray-300">
                Keep up with the latest news and trends.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl">Follow us</h3>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="rounded-full border border-white p-2 transition-colors hover:bg-white hover:text-[#0A3733]"
                >
                  <div className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-gray-700">First name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border px-4 py-2 text-gray-700"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="mb-2 block text-gray-700">Last name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border px-4 py-2 text-gray-700"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Email address</label>
              <input
                type="email"
                className="w-full rounded-lg border px-4 py-2 text-gray-700"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Phone number</label>
              <div className="flex">
                <select className="rounded-lg rounded-r-none border border-r-0 px-4 py-2 text-gray-700">
                  <option>US</option>
                </select>
                <input
                  type="tel"
                  className="w-full rounded-lg rounded-l-none border px-4 py-2 text-gray-700"
                  placeholder="+1 (000) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Message</label>
              <textarea
                className="h-32 w-full rounded-lg border px-4 py-2 text-gray-700"
                placeholder="Your message here..."
              />
            </div>

            <button className="w-full rounded-lg bg-yellow-300 py-3 font-medium text-[#0A3733] transition-colors hover:bg-yellow-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
