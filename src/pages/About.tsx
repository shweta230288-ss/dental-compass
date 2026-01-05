import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Award, Users, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import drKunalDani from '@/assets/dr-kunal-dani.jpg';
import officeFrontDesk from '@/assets/office-front-desk.jpg';
import teamPhoto from '@/assets/team-photo.jpg';
import staffAnnie from '@/assets/staff-annie.jpg';
import staffMarianne from '@/assets/staff-marianne.jpg';
import staffTrinh from '@/assets/staff-trinh.jpg';
import staffErika from '@/assets/staff-erika.jpg';
import staffKatie from '@/assets/staff-katie.jpg';
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const staffMembers = [{
    name: 'Annie',
    role: 'Registered Dental Hygienist',
    image: staffAnnie,
    bio: "Annie is a Registered Dental Hygienist who joined our staff in May of 2014. Annie is a 2009 graduate of Rockport High School, and received her RDH degree from the Massachusetts College of Pharmacy in 2011. Annie is a personable, mature young woman who has been a wonderful fit in our office. Annie and her husband Matt enjoy spending time with their three children."
  }, {
    name: 'Marianne',
    role: 'Registered Dental Hygienist',
    image: staffMarianne,
    bio: "Marianne is a Registered Dental Hygienist who joined our staff in the fall of 2015. Marianne was raised in Leominster and is a 1998 graduate of St. Bernard's High School. Looking for a new career, Marianne enrolled at Mount Wachusett College and received her RDH degree in May of 2015. Marianne is an excellent clinician and a better person. She is a natural leader who takes every patient on as an individual case and has your best treatment plan in mind. Marianne and her husband Matt enjoy spending time with their daughter and son and still live locally."
  }, {
    name: 'Trinh',
    role: 'Dental Assistant',
    image: staffTrinh,
    bio: "Trinh Trieu works full-time mainly as a Dental Assistant but also is proficient at the front desk and with instrument sterilization. Trinh was born in Vietnam and moved to the United States in 1987. With a limited English background, Trinh worked hard to eventually graduate from Montachusett Technical in 1993 with a degree in Dental Assisting. Her high school instructor says that she was the best student that she ever had. Trinh has been with our practice since 1995. She is an exceptional worker. Her clinical skills are exemplary. Trinh and her husband Khuong enjoy watching their daughters ventures in track, basketball, soccer and martial arts."
  }, {
    name: 'Erika',
    role: 'Registered Dental Hygienist',
    image: staffErika,
    bio: "Erika is a Registered Dental Hygienist. She began working in our office as a temp and was such a great fit here that we decided to offer her a position to stay on. Further impressing, she is now full time. Erika graduated from Burlington High School and is the proud mom of two great kids. She bravely decided to go back to school while her children were young and in 2015 completed her RDH degree at Mount Wachusett Community College. Erika is a gregarious soul who loves country music, the Patriots, and spending time with her husband Justin and their six children (yes six!)."
  }, {
    name: 'Katie',
    role: 'Registered Dental Hygienist',
    image: staffKatie,
    bio: "Katie is a Registered Dental Hygienist. Katie started here filling in on a temporary basis. She worked out so well, and patients liked her so much that we figured out a way to keep her on. Katie got her RDH degree as a 2007 graduate of Mount Wachusett Community College. She worked in Belmont for 12 years but with her family growing and the kids in more extracurricular activities, working in Leominster became far more convenient. Katie has a quick sense of humor, loves her wide variety of music and enjoys the camaraderie of the dental office. Katie is busy with her family and enjoys watching her children's baseball, football and basketball games."
  }];
  return <Layout>
      <Helmet>
        <title>About Us | Kaya Dental Leominster MA</title>
        <meta name="description" content="Meet Dr. Kunal Dani and the Kaya Dental team. Learn about our philosophy of personalized care rooted in warmth, trust, and compassion in Leominster, MA." />
      </Helmet>

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
            <span className="text-accent font-medium text-sm uppercase tracking-wider">MEET THE KAYA DENTAL TEAM</span>
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

      {/* Office Photo */}
      <section className="py-12 bg-background">
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
        }} className="rounded-2xl overflow-hidden shadow-medium">
            <img src={officeFrontDesk} alt="Kaya Dental front desk" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Our Office */}
      <section ref={ref} className="bg-background py-[50px] pb-[50px] pt-[10px]">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto text-center">
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
            <p className="text-muted-foreground leading-relaxed mb-8">
              Located at 130 North Main Street in Leominster, MA, our office features modern 
              treatment rooms, advanced digital imaging equipment, and a relaxing atmosphere 
              that helps put even the most anxious patients at ease.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Advanced Technology</h4>
                  <p className="text-sm text-muted-foreground">Digital X-rays, 3D printing</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Patient Comfort</h4>
                  <p className="text-sm text-muted-foreground">Relaxing atmosphere</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Dr. Dani */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img src={drKunalDani} alt="Dr. Kunal Dani, DMD" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="order-1 lg:order-2">
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

      {/* Meet the Staff */}
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
        }} className="text-center mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Family
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Great Dental Practices Have Exceptional Staff. Meet Our Family.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to making every visit 
              a positive experience. From our front desk to our hygienists, everyone is here to help.
            </p>
          </motion.div>

          {/* Team Photo */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="mb-14 rounded-2xl overflow-hidden shadow-medium h-[400px] md:h-[500px]">
            <img src={teamPhoto} alt="The Kaya Dental team" className="w-full h-full object-cover object-[center_60%]" />
          </motion.div>

          {/* Staff Grid - Mobile: compact cards, Desktop: full bios */}
          {/* Mobile View */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {staffMembers.map((staff, index) => <motion.div key={staff.name} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} viewport={{
            once: true
          }} className="bg-card rounded-xl overflow-hidden shadow-card">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <h3 className="font-serif text-base font-bold text-foreground">{staff.name}</h3>
                  <p className="text-accent text-xs font-medium">{staff.role}</p>
                </div>
              </motion.div>)}
          </div>

          {/* Desktop View - Full bios */}
          <div className="hidden md:grid grid-cols-5 gap-8">
            {staffMembers.map((staff, index) => <motion.div key={staff.name} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="text-left">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-medium mb-4">
                  <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">{staff.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{staff.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{staff.bio}</p>
              </motion.div>)}
          </div>

          {/* Team Values */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="mt-12 md:mt-16 grid grid-cols-3 gap-3 md:gap-8">
            {[{
            icon: Heart,
            title: 'Compassionate Care',
            description: 'Every team member is trained to provide gentle, understanding care that puts patients at ease.'
          }, {
            icon: Award,
            title: 'Continuous Learning',
            description: 'Our staff regularly attends training and seminars to stay current with the latest dental practices.'
          }, {
            icon: Users,
            title: 'Team Approach',
            description: 'We work together seamlessly to ensure you receive comprehensive, coordinated care.'
          }].map(value => <div key={value.title} className="text-center p-3 md:p-8 rounded-xl bg-secondary">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <value.icon className="w-5 h-5 md:w-8 md:h-8 text-accent" />
                </div>
                <h3 className="font-serif text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm hidden md:block">
                  {value.description}
                </p>
              </div>)}
          </motion.div>
        </div>
      </section>
    </Layout>;
}