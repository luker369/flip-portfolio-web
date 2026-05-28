
import './App.css';
import dollarClean from './assets/dollar-clean.png';
import ebayDraftEdit from './assets/ebay-draft-edit.png';
import financialDashboard from './assets/financial-dashboard.png';
import lotDetailScreen from './assets/lot-detail-screen.png';
import radar from './assets/radar.png';
import shoe from './assets/shoe.png';
import submittedToEbay from './assets/submitted-to-ebay.png';

const sections = [
  {
    eyebrow: 'Section 1',
    title: 'From Scan to Appraisal',
    copy:
      'Capture an item, confirm the details, and see an instant read on resale potential before you commit shelf space.',
    image: lotDetailScreen,
    alt: 'FlippR lot detail screen showing an item appraisal',
  },
  {
    eyebrow: 'Section 2',
    title: 'Instant Listings on eBay',
    copy:
      'Turn approved appraisals into polished eBay drafts with item details, pricing context, and listing status ready to review.',
    image: ebayDraftEdit,
    alt: 'FlippR eBay draft edit screen',
    reverse: true,
  },
  {
    eyebrow: 'Section 3',
    title: 'Your Financial Dashboard',
    copy:
      'Track inventory, profit, and sales momentum from one dashboard built for quick decisions and cleaner bookkeeping.',
    image: financialDashboard,
    alt: 'FlippR financial dashboard showing profit and inventory metrics',
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero-section">
        <nav className="top-nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="FlippR home">
            <span className="brand-mark" aria-hidden="true">🐬</span>
            <span>FlippR</span>
          </a>
          <div className="nav-links">
            <a href="#appraisal">Appraisal</a>
            <a href="#listings">Listings</a>
            <a href="#dashboard">Dashboard</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">The Agentic Reseller</p>
            <h1>Instantly appraise an item, Instantly list an item.</h1>
            <p className="hero-text">
              FlippR helps resellers scan inventory opportunities, estimate margins, and move profitable finds straight into listing workflows.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="primary-button" href="#appraisal">See the workflow</a>
              <a className="secondary-button" href="#dashboard">View dashboard</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="FlippR app appraisal screens">
            <img className="phone phone-back" src={shoe} alt="FlippR item scan screen with shoe" />
            <img className="phone phone-front" src={radar} alt="FlippR scan radar screen" />
            <img className="floating-card" src={dollarClean} alt="FlippR profitability result screen" />
          </div>
        </div>
      </header>

      <main>
        {sections.map((section, index) => (
          <section
            className={`feature-section ${section.reverse ? 'feature-section-reverse' : ''}`}
            id={index === 0 ? 'appraisal' : index === 1 ? 'listings' : 'dashboard'}
            key={section.title}
          >
            <div className="feature-copy">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </div>
            <div className={`feature-media ${section.image === financialDashboard ? 'dashboard-media' : ''}`}>
              <img src={section.image} alt={section.alt} />
            </div>
          </section>
        ))}

        <section className="closing-band">
          <div>
            <p className="eyebrow">Ready for faster flips</p>
            <h2>Appraise, list, and track the whole resale cycle.</h2>
          </div>
          <img src={submittedToEbay} alt="FlippR submitted to eBay confirmation screen" />
        </section>
      </main>
    </div>
  );
}

export default App;
