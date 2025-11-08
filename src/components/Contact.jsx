import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // This is a placeholder submission. Hook up to your backend or email service.
      await new Promise((res) => setTimeout(res, 800));
      setStatus('Message sent! I will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Let’s work together</h2>
        <p className="mt-2 text-gray-600">Have a project in mind? I’d love to hear about it.</p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 font-medium text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </div>
          </form>

          <div className="grid gap-5">
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <Mail className="mt-1 h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:you@example.com" className="text-gray-900 hover:underline">
                  you@example.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <Phone className="mt-1 h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+1234567890" className="text-gray-900 hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <MapPin className="mt-1 h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-900">Your City, Country</p>
              </div>
            </div>

            <div className="mt-2 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white p-3 text-gray-700 transition hover:border-gray-400 hover:text-black"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white p-3 text-gray-700 transition hover:border-gray-400 hover:text-black"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
