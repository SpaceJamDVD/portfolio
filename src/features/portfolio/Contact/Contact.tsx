import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_szmjs28', // your EmailJS service ID
        'template_roi60qg', // your template ID
        formRef.current!,
        'WcYH1jhyeJxnw_xpU' // your public key
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
        <input
          type="text"
          name="title" // matches {{title}}
          placeholder="Subject"
          required
          className={styles.input}
        />
        <input
          type="text"
          name="name" // matches {{name}}
          placeholder="Your Name"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email" // REQUIRED for reply-to
          placeholder="Your Email"
          required
          className={styles.input}
        />
        <textarea
          name="message" // matches {{message}}
          placeholder="Your Message"
          required
          className={styles.textarea}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      {status === 'success' && (
        <p className={styles.success}>✅ Thanks! Your message has been sent.</p>
      )}
      {status === 'error' && (
        <p className={styles.error}>
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}
