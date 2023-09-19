

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 z-1">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Follow Us Section */}
            <div className="col-span-1">
            {/* <img src="../logo.gif" alt="Logo" className="w-20 h-20" /> */}
              <h3 className="text-xl font-semibold mb-3">Follow Us On:</h3>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  <img
                    src="/twitter-logo.jpg"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                  Twitter
                </a>
                <a
                  href="#"
                  className="footer-link"
                >
                  <img
                    src="/instagram-logo.webp"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                  Instagram
                </a>
                <a
                  href="#"
                  className="footer-link"
                >
                  <img
                    src="/linkedin-logo.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                  LinkedIn
                </a>
              </div>
            </div>
  
            {/* Head Office Section */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-3">Head Office</h3>
              <p className="font-medium">Plot-1,<br/>Syphen Circle<br/>Udaipur(Raj.)</p>
            </div>
            {/* About Us Section */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-3">About Us</h3>
              <a href="#" className="footer-link">Our Story</a> <br/>
              <a href="#" className="footer-link">Our Team</a>
            </div>
  
            {/* Get Hired Section */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-3">Get Hired</h3>
              <a href="#" className="footer-link">Career Opportunities</a> <br/>
              <a href="#" className="footer-link">Apply Now</a>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-6 text-center text-gray-400">
            &copy; 2023 TravelUs. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  