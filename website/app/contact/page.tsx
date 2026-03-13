import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Dynazur team. Questions, feedback, custom orders — we\'re here to help.',
};

export default function ContactPage() {
  return <ContactClient />;
}
