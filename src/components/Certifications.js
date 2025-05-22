import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Certifications.css';



const certifications = [
  {
    title: 'Certified Usability Analyst (HFI-CUA)*',
    image: '/images/certifications/cua.png',
  },
  {
    title: 'International Certificate in Product Management (IPL-ICPM)',
    image: '/images/certifications/icpm.png',
  },
  {
    title: 'Certified Scrum Master (CSM)',
    image: '/images/certifications/csm.png',
  },
  {
    title: 'Certified Scrum Product Owner (CSPO)',
    image: '/images/certifications/cspo.png',
  },
  {
    title: 'Certified Scrum Professional – Scrum Master (CSP-SM)',
    image: '/images/certifications/csp_sm.png',
  },
  {
    title: 'Certified Scrum Professional – Product Owner (CSP-PO)',
    image: '/images/certifications/csp_po.png',
  },
  {
    title: 'Certified System Architect (CSA v7.2)',
    image: '/images/certifications/csa.png',
  },
  {
    title: 'Certificate in Generative AI Mastery (IIT Hyderabad)',
    image: '/images/certifications/iith.png',
  },

];


const Certifications = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset:100 });
    }, []);

  return (
<section className="certification-scroll-section">
      <h2 data-aos="fade-up">Certifications</h2>
      <div className="scroll-wrapper">
        <div className="scroll-track">
        {[...certifications, ...certifications].map((cert, index) => (
            <div className="cert-tile" key={index}>
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
