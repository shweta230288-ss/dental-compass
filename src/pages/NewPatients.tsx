import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, FileText, CreditCard, ClipboardList, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const insurances = ['Delta Dental Premier', 'MetLife', 'Cigna', 'Aetna', 'Guardian', 'United Healthcare', 'Blue Cross Blue Shield', 'Humana', 'Anthem', 'Principal', 'And many more...'];
const newPatientInfo = [{
  icon: FileText,
  title: 'Patient Forms',
  description: 'New patient forms will be emailed and sent via text message to you before your visit. Complete them at your convenience to save time.',
  details: ['Forms sent via email & text', 'Medical history questionnaire', 'Dental history form', 'Insurance information', 'HIPAA consent form']
}, {
  icon: Clock,
  title: 'First Visit',
  description: 'Your first appointment will include a comprehensive exam, X-rays, and a personalized treatment plan. Please arrive 15 minutes early.',
  details: ['Comprehensive oral exam', 'Digital X-rays', 'Oral cancer screening', 'Treatment plan discussion']
}, {
  icon: CreditCard,
  title: 'Payment Options',
  description: 'We accept most major credit cards, cash, and offer flexible payment plans. We also work with CareCredit for financing options.',
  details: ['All major credit cards', 'CareCredit financing', 'Flexible payment plans', 'Insurance assistance']
}];
export default function NewPatients() {
  return <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              New Patients
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Welcome to Kaya Dental
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              We're excited to welcome you to our dental family! Here's everything you need to 
              know before your first visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* New Patient Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
            {newPatientInfo.map((info, index) => <motion.div key={info.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="p-4 md:p-8 rounded-xl bg-secondary">
                <div className="flex items-center gap-3 md:block mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground md:mt-4">
                    {info.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3 md:mb-4 hidden md:block">
                  {info.description}
                </p>
                <ul className="space-y-1 md:space-y-2">
                  {info.details.map(detail => <li key={detail} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {detail}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>

          {/* Before Your Visit Checklist */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Before Your Visit
              </h2>
            </div>
            <div className="bg-secondary rounded-xl p-6 md:p-8">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span>
                    <strong className="text-foreground">Complete your Patient Registration form.</strong> New patient forms will be emailed and sent via text message to you. Do not fill out anything you feel uncomfortable answering, as we will get that from you during our personal conversation. If you are unable to fill out the form online, we can mail it to you. If applicable, we will ask you to come in early for your appointment and we can assist you in filling out the form.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span>Forward your <strong className="text-foreground">referral slip and any x-rays</strong> if applicable from a previous office.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span>A <strong className="text-foreground">complete list of current medications</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span><strong className="text-foreground">Dental benefit information</strong>, which will save time and allow us to process your claims.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg flex gap-3">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium">
                  <strong>IMPORTANT:</strong> All patients under the age of 18 must be accompanied by a parent or guardian at the consultation visit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">
              What to Expect at Your First Visit
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We want your first visit to be as comfortable and informative as possible. 
                Here's what you can expect:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong className="text-foreground">Warm Welcome:</strong> Our friendly front desk team 
                  will greet you and help with any paperwork.
                </li>
                <li>
                  <strong className="text-foreground">Comprehensive Exam:</strong> Dr. Dani will perform 
                  a thorough examination of your teeth, gums, and oral health.
                </li>
                <li>
                  <strong className="text-foreground">Digital X-Rays:</strong> We'll take digital X-rays 
                  to get a complete picture of your oral health.
                </li>
                <li>
                  <strong className="text-foreground">Treatment Discussion:</strong> We'll discuss our 
                  findings and create a personalized treatment plan tailored to your needs.
                </li>
                <li>
                  <strong className="text-foreground">Questions Answered:</strong> We encourage you to 
                  ask questions—we're here to help!
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Insurance We Accept
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with most major dental insurance providers. Don't see yours listed? 
              Give us a call—we'll be happy to check your coverage.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
            {insurances.map((insurance, index) => <motion.span key={insurance} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.3,
            delay: index * 0.03
          }} viewport={{
            once: true
          }} className="bg-card px-4 py-2 rounded-full text-sm font-medium text-foreground shadow-sm">
                {insurance}
              </motion.span>)}
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <Link to="/membership" className="block group">
              <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-2 border-accent/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="w-7 h-7 text-accent" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-1">
                        No Insurance? No Problem!
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Save up to <span className="text-accent font-semibold">$300+</span> annually • Plans from $400/year • No deductibles
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium group-hover:gap-3 transition-all duration-300">
                    View Plans
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="bg-primary rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Schedule Your First Visit?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              We can't wait to meet you! Call us today to schedule your appointment.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="tel:978-534-4000">
                <Phone className="w-5 h-5 mr-2" />
                Call (978) 534-4000
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>;
}