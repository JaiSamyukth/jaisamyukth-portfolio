import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useAppContext } from '../../contexts/AppContext';
import { COPY } from '../../content';
import { sendContact, validateContactForm } from '../../lib/email';

interface FormData {
  name: string;
  email: string;
  idea: string;
}

export function ActFiveSummoning() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', idea: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const { registerSection, unregisterSection, playSound, reducedMotion } = useAppContext();

  // Cycle through placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % COPY.acts.five.placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    registerSection(section, 5);

    const ctx = gsap.context(() => {
      // ScrollTrigger for this section
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: self => {
          if (self.isActive) {
            // Form animation
            if (formRef.current) {
              gsap.fromTo(formRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: reducedMotion ? 0.3 : 1, ease: 'power2.out' }
              );
            }
          }
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      unregisterSection(section);
    };
  }, [registerSection, unregisterSection, reducedMotion]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateContactForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const success = await sendContact(formData);
      
      if (success) {
        setSubmitState('success');
        playSound('seal');
        
        // Reset form after 4 seconds
        setTimeout(() => {
          setSubmitState('idle');
          setFormData({ name: '', email: '', idea: '' });
        }, 4000);
      } else {
        setSubmitState('error');
        setTimeout(() => setSubmitState('idle'), 3000);
      }
    } catch (error) {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-gradient-to-br from-parchment-dark to-parchment-darker overflow-hidden"
    >
      {/* Parchment texture */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-dust-dark to-transparent" />
      
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif text-glow-gold text-center mb-2">
            {COPY.acts.five.heading}
          </h2>
          
          {/* Email display */}
          <p className="text-center text-dust-light mb-8 text-lg">
            {COPY.acts.five.email}
          </p>

          {/* Contact form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-parchment-darker border border-dust-dark rounded-lg text-dust-light placeholder-dust-dark/60 focus:outline-none focus:border-glow-gold focus:ring-1 focus:ring-glow-gold transition-colors"
                disabled={isSubmitting || submitState === 'success'}
              />
            </div>

            {/* Email field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-parchment-darker border border-dust-dark rounded-lg text-dust-light placeholder-dust-dark/60 focus:outline-none focus:border-glow-gold focus:ring-1 focus:ring-glow-gold transition-colors"
                disabled={isSubmitting || submitState === 'success'}
              />
            </div>

            {/* Idea field */}
            <div>
              <textarea
                name="idea"
                value={formData.idea}
                onChange={handleInputChange}
                placeholder={COPY.acts.five.placeholders[placeholderIndex]}
                rows={4}
                className="w-full px-4 py-3 bg-parchment-darker border border-dust-dark rounded-lg text-dust-light placeholder-dust-dark/60 focus:outline-none focus:border-glow-gold focus:ring-1 focus:ring-glow-gold transition-colors resize-none"
                disabled={isSubmitting || submitState === 'success'}
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || submitState === 'success'}
              className="w-full py-3 bg-gradient-to-r from-glow-gold to-dust-light text-parchment-dark font-semibold rounded-lg hover:from-dust-light hover:to-glow-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitState === 'success' 
                ? COPY.acts.five.success
                : submitState === 'error'
                ? COPY.acts.five.error
                : isSubmitting
                ? 'Sending...'
                : 'Send Message'
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
