const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indigo-700 text-slate-300">
      <div className="grid grid-cols-2 gap-8 px-6 py-5 mx-auto max-w-7xl ">
        <div>
          <h2 className="mb-2 text-xl font-bold text-white">
            JobFinder
          </h2>
          <p className="text-sm leading-relaxed">
            A simple job portal built with React to explore, add, edit, and
            manage job opportunities easily.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-white">
            Contact
          </h3>
          <div className="space-x-2 text-sm">
            <span>Email: support@jobfinder.com</span>
            <span>Phone: +20 123 456 789</span>
            <span>Location: Egypt</span>
          </div>
        </div>
      </div>

      <div className="py-3 text-sm text-center border-t border-slate-700">
        © {year} JobFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
