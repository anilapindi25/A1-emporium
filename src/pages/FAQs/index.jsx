import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiPlus, FiMinus } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './index.css';

const FAQs = () => {
  const faqData = [
    {
      q: "How can I track my order shipment status?",
      a: "Once your order is processed, we send a tracking link directly via email and WhatsApp. You can also view your live tracking links under the 'Personal Profile' order tab in your A1 Emporium account."
    },
    {
      q: "What is A1 Emporium's return and refund policy?",
      a: "We offer a hassle-free, 7-day return policy on all eligible purchases (Apparel, Footwear, Bags). Items must be unused, in their original packaging, and with tags intact. Skincare and Cosmetics are non-returnable due to hygiene regulations unless received damaged."
    },
    {
      q: "Can I request custom alterations for blouses or lehengas?",
      a: "Yes! A1 Emporium provides bespoke designer stitching and alterations. You can choose to specify custom measurements during the checkout stage or connect with our in-house styling consultants directly via our Contact page."
    },
    {
      q: "How do I apply coupon codes or gift cards?",
      a: "During the checkout process, type in your promo code (e.g., ELEGANCE15 or FESTIVAL20) under 'Apply Promo Code' and click apply. For gift cards, enter the gift card code (e.g., GIFT500) to deduct the balance directly from the total amount due."
    },
    {
      q: "What payment methods are supported on checkout?",
      a: "We support end-to-end encrypted checkouts via major UPI apps (GPay, PhonePe, Paytm), Credit & Debit cards (Visa, MasterCard, RuPay), Net Banking, and Cash on Delivery (COD) services."
    },
    {
      q: "Are the fabrics and cosmetics 100% genuine and safe?",
      a: "Absolutely! We source our handloom items directly from certified weaver clusters in Kanchipuram, Chanderi, and Banaras. All cosmetics and skincare serums are 100% cruelty-free, vegan, and skin-dermatologist approved."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-page-container">
      <Navbar />

      <div className="faqs-hero-banner">
        <div className="banner-overlay-dark"></div>
        <div className="banner-text container text-center">
          <span className="banner-sub">Customer Care Help desk</span>
          <h1 className="banner-title">Frequently Asked Questions</h1>
          <p className="banner-desc">Find quick answers about order drapes, sizing, payments, and return policies.</p>
        </div>
      </div>

      <div className="faqs-body container">
        <div className="faqs-layout-wrapper">
          <div className="faqs-info-col text-center">
            <span className="section-sub">Need Help?</span>
            <h2 className="section-title">Support Center</h2>
            <div className="divider-gold mx-auto mb-6"></div>
            <p className="faqs-intro-text">
              If your question isn’t answered below, please feel free to drop us a message using our dedicated contact form or chat with our styling experts on WhatsApp.
            </p>
          </div>

          {/* FAQ Accordions */}
          <div className="faqs-accordion-list-wrapper">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div key={idx} className={`faq-accordion-item-card glassmorphism ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-container"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="faq-answer-inner">
                          <p>{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;
