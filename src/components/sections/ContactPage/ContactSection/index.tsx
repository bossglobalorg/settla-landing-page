"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import assetLib from "@/lib/assets";

type AssetLibKeys = keyof typeof assetLib; // Extract valid keys from assetLib

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "US",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        phone_number: formData.phoneNumber,
        country: formData.country,
        message: formData.message,
      };

      await emailjs.send(
        "service_b6xz0u9",
        "template_d0yfw6h",
        templateParams,
        "user_vKLtBLy3sWqstDKzPwIgZ",
      );

      setStatus({
        type: "success",
        message: "Thank you for your message. We will get back to you soon!",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "US",
        message: "",
      });
    } catch (error: any) {
      setStatus({
        type: "error",
        message:
          error.message ??
          "There was an error sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="-mt-[5.125rem] min-h-dvh bg-primary-900 px-6 py-16 pt-[11.125rem] text-white md:px-12 lg:px-20">
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
                <img src={assetLib.contactOneIcon} alt="contact" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Have questions?</h3>
              <p className="text-gray-300">
                Find the answers to frequently asked questions here.
              </p>
            </div>

            <div className="rounded-lg bg-[#0D4440] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300">
                <img src={assetLib.contactTwoIcon} alt="blog" />
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-white hover:text-[#0A3733]"
                >
                  <img
                    src={assetLib[`${social}Svg` as AssetLibKeys]}
                    alt={social}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {status.message && (
              <div
                className={`rounded-lg p-4 ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-gray-700">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-2 text-gray-700"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-gray-700">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-2 text-gray-700"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2 text-gray-700"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Phone number</label>
              <div className="flex">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="rounded-lg rounded-r-none border border-r-0 px-4 py-2 text-gray-700"
                >
                  <option value="US">US</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full rounded-lg rounded-l-none border px-4 py-2 text-gray-700"
                  placeholder="+1 (000) 000-0000"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-32 w-full rounded-lg border px-4 py-2 text-gray-700"
                placeholder="Your message here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-accent-400 py-3 font-medium text-[#0A3733] transition-colors hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
