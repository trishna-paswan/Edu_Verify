import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid gap-y-10 gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">About EduVerify</h2>
          <p>
            EduVerify is an academic credentials authenticity validator.
            We empower students, institutions, and recruiters to securely
            issue, verify, and track educational certificates with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col space-y-2 sm:space-y-3">
            <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Greater Noida, India</p>
          <p>Pin: 201310</p>
          <p>Email: info@eduverify.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <p className="text-center text-xs pt-8 border-t border-gray-800 mt-12">
        © 2025 EduVerify. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
