import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ResortCommitmentBanner } from './components/ResortCommitmentBanner';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
// import { Products } from './components/Products'; // HIDDEN
// import { Projects } from './components/Projects';      // HIDDEN
// import { Testimonials } from './components/Testimonials'; // HIDDEN
// import { BlogGuides } from './components/BlogGuides';     // HIDDEN
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
// import { ProductModal } from './components/ProductModal'; // HIDDEN
// import { ProjectModal } from './components/ProjectModal'; // HIDDEN
// import { ArticleModal } from './components/ArticleModal'; // HIDDEN
import { FloatingActions } from './components/FloatingActions';
import { Toast } from './components/Toast';
import { ServiceItem } from './types';

export const App: React.FC = () => {
  // Modal states
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  // const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null); // HIDDEN
  // const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null); // HIDDEN
  // const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null); // HIDDEN
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenQuote = (prefill?: string) => {
    setQuotePrefill(prefill || '');
    setIsQuoteOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#050b17] text-slate-100 flex flex-col font-inter">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Navigation Header */}
      <Navbar onRequestQuote={() => handleOpenQuote()} />

      {/* 3. Main Sections */}
      <main className="flex-1">
        {/* Hero Section with Generator & Ship Engine Services */}
        <Hero onRequestQuote={(service) => handleOpenQuote(service)} />

        {/* 1st Image Section: After-Sales Services We Offer */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuote={(title) => handleOpenQuote(title)}
        />

        {/* 2nd Image Section (Moved Down): Emergency Breakdown Support Card */}
        <EmergencyBanner onRequestQuote={() => handleOpenQuote()} />

        {/* 2nd Image Section (Moved Down): Resort Management Partnership & Spare Parts Supply Banner */}
        <ResortCommitmentBanner onRequestQuote={(title) => handleOpenQuote(title)} />

        {/* Your Power, Our Priority (Why Us & Brands) */}
        <WhyUs />

        {/* HIDDEN — Generator Products & Equipment
        <Products
          onSelectProduct={(product) => setSelectedProduct(product)}
          onRequestQuote={(name) => handleOpenQuote(name)}
        />
        */}

        {/* HIDDEN — Generator Projects Delivered Islandwide
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestQuote={() => handleOpenQuote()}
        />
        */}

        {/* HIDDEN — What Our Clients Say
        <Testimonials />
        */}

        {/* HIDDEN — Generator Maintenance Tips & Expert Guides
        <BlogGuides
          onSelectArticle={(article) => setSelectedArticle(article)}
          onRequestQuote={() => handleOpenQuote()}
        />
        */}

        {/* Orange Gradient CTA Banner */}
        <CtaBanner onRequestQuote={() => handleOpenQuote()} />

        {/* Contact & Consultation Form (Dispatches to sltecmaldives@gmail.com) */}
        <Contact onSuccessToast={handleShowToast} />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Floating Actions: WhatsApp & Back to top */}
      <FloatingActions />

      {/* 6. Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefilledItem={quotePrefill}
        onSuccess={handleShowToast}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(title) => handleOpenQuote(title)}
      />

      {/* HIDDEN — Product Modal
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(productName) => handleOpenQuote(productName)}
      />
      */}

      {/* HIDDEN — Project Modal
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={() => handleOpenQuote()}
      />
      */}

      {/* HIDDEN — Article Modal
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onRequestQuote={() => handleOpenQuote()}
      />
      */}

      {/* Toast Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
