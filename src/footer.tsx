

function Footer() {
  return (
       <footer className="bg-black text-white py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-wrap justify-between gap-y-10">

        {/* Column 1 - Navigation */}
        <div className="space-y-2 min-w-[150px] flex flex-col w-full sm:w-auto">
          {[
            ['Home', '/'],
            ['Services', '/dista/services/index.html'],
            ['Case Studies', '/dista/case/index.html'],
            ['About Us', '/dista/aboutus/index.html'],
            ['Blog', '/dista/blog/index.html'],
            ['Contact Us', '/dista/contactus/index.html'],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Column 2 - Can dynamically inject in future */}
        <div id="import2" className="w-full sm:w-auto" />

        {/* Column 3 - Contact & Social */}
        <div className="space-y-2 w-full sm:w-auto flex flex-col text-left">
          <a
            href="/dista/contactus/index.html"
            className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
          >
            Book A Consultation
          </a>
          <a
            href="/"
            className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="nav-link text-base font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
          >
            Terms of Service
          </a>

          <div className="text-sm text-white mt-4 px-4">
            <p>
              Email:{' '}
              <a href="mailto:info@lacleodigital.com" className="underline">
                info@lacleodigital.com
              </a>
            </p>
            <p>
              WhatsApp:{' '}
              <a href="https://wa.me/917428149253" className="underline">
                +91-7428149253
              </a>
            </p>
          </div>

          <div className="flex gap-4 text-xl mt-4 px-4 text-white">
            {[
              ['fab fa-facebook-f', '#'],
              ['fab fa-instagram', '#'],
              ['fab fa-pinterest-p', '#'],
              ['fab fa-linkedin-in', '#'],
              ['fab fa-whatsapp', '#'],
              ['fas fa-envelope', '#'],
            ].map(([icon, link], i) => (
              <a
                key={i}
                href={link}
                className="hover:bg-white/70 hover:text-black p-2 rounded-md transition"
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-white px-4">
        &copy; La Cleo Digital Private Limited | All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
