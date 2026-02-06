import { Youtube, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">SelfTechGyan</h2>
          <p className="mt-3 text-sm">
            Learn skills with high-quality video courses.  
            Build your future with us 🚀
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Videos</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-medium mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-medium mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500">
              <Youtube />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-white">
              <Github />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 text-center text-sm py-4">
        © {new Date().getFullYear()} SelfTechGyan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
