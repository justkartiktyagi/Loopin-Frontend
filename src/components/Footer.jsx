export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-full md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <img
                  src="/loopin-logo.png"
                  alt="cr8iveminds Logo"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.parentElement.innerHTML =
                      '<span className="text-white font-bold text-lg">C</span>';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  LoopIN
                </div>
                <div className="text-xs text-gray-500">by cr8iveminds</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Building better habits, one loop at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 LoopIN. All rights reserved.
            </p>
            <p className="text-emerald-400 font-semibold mt-2 text-sm">
              A Product by{" "}
              <a
                href="https://cr8iveminds.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 transition"
              >
                cr8iveminds.in
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition text-2xl"
              title="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition text-2xl"
              title="Twitter"
            >
              𝕏
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition text-2xl"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition text-2xl"
              title="Instagram"
            >
              ⚫
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
