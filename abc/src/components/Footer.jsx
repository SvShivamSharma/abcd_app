// Footer.jsx

import FooterInsider from "./FooterInsider";

export default function Footer() {
  return (
    <footer className="bg-danger text-white m-0 p-0">
      <div className="container-fluid m-0 p-0">
        <div className="row g-0">
          <div className="col-4 col-md-4">
            <FooterInsider msg="Leadership Speaks" to="/leader" />
          </div>
          <div className="col-4 col-md-4">
            <FooterInsider msg="News & Events" to="/events" />
          </div>
          <div className="col-4 col-md-4">
            <FooterInsider msg="My Offers" to="/offers" />
          </div>
        </div>
      </div>
    </footer>
  );
}