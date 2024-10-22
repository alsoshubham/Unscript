
import './Testimonials.css'; // Create this CSS file for custom styling

const testimonials = [
  { name: 'Gonuts', logo: 'link-to-gonuts-logo.png' },
  { name: 'CEAT', logo: 'link-to-ceat-logo.png' },
  { name: 'HealthifyMe', logo: 'link-to-healthifyme-logo.png' },
  { name: 'ZingHR', logo: 'link-to-zinghr-logo.png' },
  { name: '10Times', logo: 'link-to-10times-logo.png' },
  { name: 'Avianta', logo: 'link-to-avianta-logo.png' },
  { name: 'Mahindra', logo: 'link-to-mahindra-logo.png' },
  { name: 'RadioCity', logo: 'link-to-radiocity-logo.png' },
  { name: 'Landmark', logo: 'link-to-landmark-logo.png' },
  { name: 'MaxLife', logo: 'link-to-maxlife-logo.png' },
  { name: 'VSPAGY', logo: 'link-to-vspagy-logo.png' },
  { name: 'Floworks', logo: 'link-to-floworks-logo.png' },
  { name: 'AmazonPay', logo: 'link-to-amazonpay-logo.png' },
  { name: 'Vegami', logo: 'link-to-vegami-logo.png' },
  { name: 'BombayBakingCompany', logo: 'link-to-bombay-baking-company-logo.png' },
  { name: 'BajajAllianz', logo: 'link-to-bajaj-allianz-logo.png' },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Trusted by Over 10,000+ Customers Worldwide.</h2>
        <div className="logos-grid">
          {testimonials.map((testimonial, index) => (
            <div className="logo-item" key={index}>
              <img src={testimonial.logo} alt={`${testimonial.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
