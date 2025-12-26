import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Award, Users, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import drKunalDani from '@/assets/dr-kunal-dani.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Layout>
      <Helmet>
        <title>About Us | Kaya Dental Leominster MA</title>
        <meta name="description" content="Meet Dr. Kunal Dani and the Kaya Dental team. Learn about our philosophy of personalized care rooted in warmth, trust, and compassion in Leominster, MA." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Kaya Dental
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Redefining Comfort & Aesthetics
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Our name comes from the Sanskrit word "Kaya," meaning body, wellness, and wholeness. 
              To us, dental care is about nurturing your overall well-being, confidence, and smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Office */}
      <section className="py-20 bg-background" ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Office
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Modern, Welcoming Space
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our state-of-the-art facility is designed with your comfort in mind. From the moment 
                you walk through our doors, you'll experience a warm, welcoming environment equipped 
                with the latest dental technology.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Located at 130 North Main Street in Leominster, MA, our office features modern 
                treatment rooms, advanced digital imaging equipment, and a relaxing atmosphere 
                that helps put even the most anxious patients at ease.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Advanced Technology</h4>
                    <p className="text-sm text-muted-foreground">Digital X-rays, 3D printing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Patient Comfort</h4>
                    <p className="text-sm text-muted-foreground">Relaxing atmosphere</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-medium"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              >
                <source src="/videos/office-tour.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Dani */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={drKunalDani} 
                  alt="Dr. Kunal Dani, DMD"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Meet Our Doctor
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Dr. Kunal Dani, DMD
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr. Kunal Dani is dedicated to providing exceptional dental care with a gentle, 
                patient-centered approach. With years of experience and a passion for staying 
                at the forefront of dental technology, Dr. Dani ensures every patient receives 
                the highest quality treatment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His philosophy centers on building lasting relationships with patients through 
                trust, transparency, and compassionate care. Dr. Dani takes the time to listen 
                to each patient's concerns and develops personalized treatment plans that address 
                their unique needs and goals.
              </p>
              
              <div className="bg-gradient-to-br from-primary to-kaya-navy-dark rounded-xl p-6 text-primary-foreground">
                <GraduationCap className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-serif text-lg font-bold mb-3">Education & Credentials</h3>
                <ul className="space-y-2 text-primary-foreground/90 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Doctor of Dental Medicine (DMD)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Advanced training in cosmetic dentistry
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Invisalign Certified Provider
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Member, American Dental Association
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Meet the Kaya Dental Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to making every visit a positive 
              experience. From our front desk to our hygienists, everyone is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: 'Front Office Team', description: 'Our friendly administrative staff ensures seamless scheduling and handles all insurance and billing questions.' },
              { role: 'Dental Hygienists', description: 'Our skilled hygienists provide thorough, gentle cleanings and educate patients on optimal oral health.' },
              { role: 'Dental Assistants', description: 'Our assistants work alongside Dr. Dani to ensure every procedure runs smoothly and comfortably.' },
            ].map((team, index) => (
              <motion.div
                key={team.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-secondary"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {team.role}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {team.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
