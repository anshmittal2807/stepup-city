// Centralized temporary data layer for StepUpCity course pages.
// Courses are seeded with the default showcase content below and persisted
// to localStorage so the admin panel can add / edit / delete courses
// without a backend. Replace these helpers with API calls later.

const STORAGE_KEY = 'stepup-city-courses-v2'

const defaultHeroImage = '/images/hero-course.jpg'

export const defaultCourses = [
  {
    id: 'course-advanced-digital-marketing',
    slug: 'advanced-digital-marketing',
    title: 'Advanced Digital Marketing Course',
    topAppBar: {
      message: 'Admissions Open — Limited Seats Available',
      ctaLabel: 'Enroll Now',
      ctaHref: '#enroll',
    },
    hero: {
      badge: 'Next Batch Starts Soon',
      titlePrefix: 'Advanced',
      titleHighlight: 'Digital Marketing',
      titleSuffix: 'Course in Haryana',
      subtitle:
        'Master SEO, Performance Marketing, and Social Media with 100% practical training. Build real campaigns, get certified, and secure your career with our placement-guaranteed program.',
      ctaLabel: 'Book Free Demo',
      ctaHref: '#enroll',
      image: defaultHeroImage,
      imageAlt: 'Students learning digital marketing analytics in a modern training room',
      floatingStat: { value: '+125%', label: 'Traffic Growth' },
      stats: [
        { label: 'Duration', value: '3 Months' },
        { label: 'Mode', value: 'Offline / Online' },
        { label: 'Projects', value: '10+ Live' },
        { label: 'Placement', value: '100% Assist' },
      ],
    },
    highlights: [
      { icon: 'build', title: 'Hands-on Training', description: 'Practical approach with real tools and live campaigns.' },
      { icon: 'work', title: '100% Placement Support', description: 'Dedicated assistance to kickstart your career.' },
      { icon: 'assignment', title: 'Live Projects', description: 'Work on real-world assignments to build your portfolio.' },
      { icon: 'verified', title: 'Industry Certifications', description: 'Earn recognized certificates to boost your resume.' },
      { icon: 'schedule', title: 'Flexible Batches', description: 'Choose timings that suit your schedule.' },
      { icon: 'business_center', title: 'Agency Internship', description: 'Gain experience working in a real agency environment.' },
    ],

    whyUs: [
      {
        icon: 'school',
        title: 'Expert Mentors',
        description: 'Learn directly from industry veterans with over 10+ years of experience in global digital agencies.',
      },
      {
        icon: 'work',
        title: 'Live Projects',
        description: 'Work on real-world client accounts and manage actual budgets to gain practical, hands-on experience.',
      },
      {
        icon: 'event_available',
        title: 'Flexible Batches',
        description:
          'Choose from weekday or weekend batches that fit your schedule, available in both online and offline modes.',
      },
    ],
    mentors: [
      {
        name: 'Rahul Sharma',
        role: 'Senior SEO Specialist',
        experience: '10+ Years Experience',
        image:
          '/images/mentors/rahul.jpg',
      },
      {
        name: 'Priya Singh',
        role: 'Performance Marketing Lead',
        experience: '8+ Years Experience',
        image:
          '/images/mentors/priya.jpg',
      },
      {
        name: 'Amit Patel',
        role: 'Social Media Strategist',
        experience: '7+ Years Experience',
        image:
          '/images/mentors/amit.jpg',
      },
    ],
    gains: [
      {
        icon: 'verified',
        title: 'Industry Recognized Certification',
        description: 'Get certified by Step Up City and prepare for Google, Meta, and HubSpot certifications.',
      },
      {
        icon: 'work',
        title: '100% Placement Support',
        description: 'Resume building, mock interviews, and direct referrals to our network of 50+ hiring partners.',
      },
      {
        icon: 'business_center',
        title: 'Hands-on Agency Experience',
        description: 'Understand how agencies operate, from client onboarding to reporting and optimization.',
      },
    ],
    gainsImage: '/images/gains-course1.jpg',
    successStories: [
      {
        quote:
          '"The practical approach to learning SEO and Google Ads really helped me secure my first job as a digital marketer."',
        name: 'Sneha K.',
        role: 'Digital Marketing Executive',
        image: '/images/students/sneha.jpg',
      },
      {
        quote:
          '"I started my own freelance business right after completing the course. The mentors were incredibly supportive."',
        name: 'Ravi V.',
        role: 'Freelance Marketer',
        image: '/images/students/ravi.jpg',
      },
      {
        quote:
          '"Best decision I made for my career. The 100% placement support is genuine and helped me land a great role."',
        name: 'Anjali M.',
        role: 'Social Media Manager',
        image: '/images/students/anjali.jpg',
      },
    ],
    modules: [
      { icon: 'strategy', title: '1. Fundamentals', topics: ['Marketing Strategy', 'Customer Journey', 'Brand Positioning'] },
      { icon: 'language', title: '2. Web Presence', topics: ['Domain & Hosting', 'No-Code Design', 'E-commerce Setup'] },
      { icon: 'search', title: '3. SEO Mastery', topics: ['Keyword Research', 'On-Page/Off-Page', 'Technical SEO'] },
      { icon: 'ads_click', title: '4. Google Ads', topics: ['Search & Display', 'Video & Shopping', 'Conversion Tracking'] },
      { icon: 'share', title: '5. Social Media', topics: ['Meta Marketing', 'Pixel Setup', 'Retargeting'] },
      { icon: 'edit_note', title: '6. Content & AI', topics: ['Content Strategy', 'Canva & Copywriting', 'AI Marketing Tools'] },
      { icon: 'auto_awesome', title: '7. Advanced', topics: ['Affiliate Marketing', 'Email Marketing', 'Automation'] },
      { icon: 'work_history', title: '8. Career', topics: ['Resume Building', 'Interview Prep', 'Client Acquisition'] },
    ],
    faqs: [
      {
        question: 'What is the duration of the course?',
        answer:
          'The advanced digital marketing course spans 3 months, offering intensive hands-on training to cover all major modules.',
      },
      {
        question: 'What is the eligibility criteria?',
        answer:
          "Anyone with a basic understanding of computers and the internet can join. It's ideal for students, working professionals, and business owners.",
      },
      {
        question: 'Will I get certification upon completion?',
        answer:
          'Yes, you will receive an industry-recognized certificate from Step Up City, and we also prepare you for Google and Meta certifications.',
      },
      {
        question: 'Are fees payable in installments?',
        answer: 'Yes, we offer flexible EMI and installment options to make the course accessible to everyone.',
      },
    ],
    finalCta: {
      heading: 'Ready to Step Up Your Career?',
      description:
        'Join the next batch of elite digital marketers. Secure your spot today and start your journey towards a rewarding career.',
      ctaLabel: 'Book Your Free Demo',
      ctaHref: '#demo',
    },
  },
  {
    // Fully-filled DEMO page at a custom URL — shows off the custom URL feature
    // and every section with real content out of the box.
    id: 'course-seo-mastery-bootcamp',
    slug: 'seo-mastery-bootcamp',
    title: 'SEO Mastery Bootcamp',
    topAppBar: {
      message: 'Weekend Batch Starting Soon — Reserve Your Seat',
      ctaLabel: 'Apply Now',
      ctaHref: '#enroll',
    },
    hero: {
      badge: 'Hands-On Live Bootcamp',
      titlePrefix: 'SEO',
      titleHighlight: 'Mastery',
      titleSuffix: 'Bootcamp',
      subtitle:
        'Go from zero to SEO expert. Learn keyword research, technical SEO, link building, and content strategy through live projects and real client websites.',
      ctaLabel: 'Book a Free Audit',
      ctaHref: '#enroll',
      image: '/images/hero-seo.jpg',
      imageAlt: 'Students learning SEO strategy in a live bootcamp session',
      floatingStat: { value: '+180%', label: 'Organic Traffic' },
      stats: [
        { label: 'Duration', value: '6 Weeks' },
        { label: 'Mode', value: 'Online Live' },
        { label: 'Projects', value: '4 Client Sites' },
        { label: 'Certification', value: 'Google + HubSpot' },
      ],
    },
    highlights: [
      { icon: 'search', title: 'Real Client Audits', description: 'Perform live SEO audits on actual business websites.' },
      { icon: 'link', title: 'Authority Link Building', description: 'Master outreach and build high-authority backlinks.' },
      { icon: 'content_paste', title: 'Content Funnels', description: 'Create SEO content strategies that rank and convert.' },
      { icon: 'monitoring', title: 'Rankings Tracking', description: 'Use GSC and Semrush to track and report rankings.' },
      { icon: 'groups', title: 'Small Cohort', description: 'Limited seats for focused, mentor-guided learning.' },
      { icon: 'workspace_premium', title: 'Placement Support', description: 'Get resume help and referrals to our hiring partners.' },
    ],
    whyUs: [
      {
        icon: 'school',
        title: 'Mentors from Real Agencies',
        description: 'Learn from SEO leads who have ranked thousands of keywords for international brands.',
      },
      {
        icon: 'rocket_launch',
        title: 'Live Site Projects',
        description: 'Optimize live websites and practice directly on real search engine results pages.',
      },
      {
        icon: 'calendar_month',
        title: 'Weekend-Friendly',
        description: 'Designed for working professionals with live online weekend batches and recordings.',
      },
    ],
    mentors: [
      {
        name: 'Arjun Mehta',
        role: 'SEO Director, ex-Google Partner Agency',
        experience: '12+ Years Experience',
        image:
          '/images/mentors/arjun.jpg',
      },
      {
        name: 'Neha Kapoor',
        role: 'Technical SEO Lead',
        experience: '9+ Years Experience',
        image:
          '/images/mentors/neha.jpg',
      },
      {
        name: 'Rohit Verma',
        role: 'Content & Link Building Strategist',
        experience: '8+ Years Experience',
        image:
          '/images/mentors/rohit.jpg',
      },
    ],
    gains: [
      {
        icon: 'verified',
        title: 'Recognized SEO Certification',
        description: 'Earn a Step Up City certificate plus vouchers for Google and HubSpot SEO exams.',
      },
      {
        icon: 'work',
        title: 'Agency-Ready Portfolio',
        description: 'Walk away with documented SEO audits that prove your skills to employers.',
      },
      {
        icon: 'business_center',
        title: 'Career Mentorship',
        description: 'Interview prep and direct referrals to our network of 80+ hiring partners.',
      },
    ],
    gainsImage: '/images/gains-course2.jpg',
    successStories: [
      {
        quote:
          '"The live audits changed everything — I got an SEO junior role at an agency within a month of finishing."',
        name: 'Meera G.',
        role: 'SEO Executive',
        image: '/images/students/meera.jpg',
      },
      {
        quote:
          '"I finally rank my own business locally. The technical SEO module alone was worth the entire course."',
        name: 'Vikram S.',
        role: 'Local Business Owner',
        image: '/images/students/vikram.jpg',
      },
      {
        quote:
          '"Clear, practical, and mentor-supported. Best weekend course I have taken during my 9-to-5."',
        name: 'Tanvi R.',
        role: 'Marketing Associate',
        image: '/images/students/tanvi.jpg',
      },
    ],
    modules: [
      { icon: 'search', title: '1. SEO Foundations', topics: ['How Search Works', 'Keyword Intent', 'Competitor Analysis'] },
      { icon: 'code', title: '2. Technical SEO', topics: ['Crawling & Indexing', 'Site Speed', 'Schema Markup'] },
      { icon: 'edit_note', title: '3. Content Strategy', topics: ['Topic Clusters', 'On-Page Optimization', 'Content Briefs'] },
      { icon: 'link', title: '4. Link Building', topics: ['Outreach', 'Guest Posting', 'Digital PR'] },
      { icon: 'monitoring', title: '5. Analytics & Reports', topics: ['Google Search Console', 'GA4', 'Client Reporting'] },
      { icon: 'storefront', title: '6. Local & E-commerce SEO', topics: ['Google Business Profile', 'Product Schema', 'Local Citations'] },
      { icon: 'auto_awesome', title: '7. AI in SEO', topics: ['AI Content Tools', 'SearchGPT', 'Automation Workflows'] },
      { icon: 'work_history', title: '8. Career Readiness', topics: ['Portfolio Reviews', 'Mock Interviews', 'Agency Placement'] },
    ],
    faqs: [
      {
        question: 'Do I need any prior SEO experience?',
        answer:
          'No. The bootcamp starts from fundamentals and progresses to advanced concepts, so beginners and working professionals both benefit.',
      },
      {
        question: 'Is this fully online?',
        answer:
          'Yes, sessions are live online with recorded backups, plus hands-on lab work on real websites between classes.',
      },
      {
        question: 'Will I get a certificate?',
        answer:
          'Yes, you receive a Step Up City bootcamp certificate and we prepare you for Google and HubSpot SEO certifications.',
      },
      {
        question: 'How many projects will I complete?',
        answer:
          'You will complete full SEO audits and content strategies on at least 4 live client websites during the bootcamp.',
      },
    ],
    finalCta: {
      heading: 'Ready to Rank on Page One?',
      description:
        'Join the next SEO Mastery Bootcamp and turn search visibility into real career or business growth. Seats are limited.',
      ctaLabel: 'Apply for the Bootcamp',
      ctaHref: '#demo',
    },
  },
  {
    // Fully-filled DEMO page at a custom URL — social media & paid ads.
    id: 'course-social-media-ads-expert',
    slug: 'social-media-ads-expert',
    title: 'Social Media & Performance Ads Expert',
    topAppBar: {
      message: 'Limited Seats — Learn Paid & Organic Social Marketing',
      ctaLabel: 'Claim Your Seat',
      ctaHref: '#enroll',
    },
    hero: {
      badge: 'Meta + Google Certified Curriculum',
      titlePrefix: 'Social Media &',
      titleHighlight: 'Performance Ads',
      titleSuffix: 'Expert Program',
      subtitle:
        'Master organic growth, paid ad strategy, and creative performance marketing across Meta, Instagram, and Google. Run real ad accounts and scale campaigns with measurable ROI.',
      ctaLabel: 'Request a Call Back',
      ctaHref: '#enroll',
      image: '/images/hero-social.jpg',
      imageAlt: 'Learners planning social media ad campaigns in a training studio',
      floatingStat: { value: '3.2x', label: 'Avg. ROAS' },
      stats: [
        { label: 'Duration', value: '2 Months' },
        { label: 'Mode', value: 'Hybrid (Online/Offline)' },
        { label: 'Ad Spend Handled', value: '₹20L+' },
        { label: 'Placement', value: '100% Support' },
      ],
    },
    highlights: [
      { icon: 'groups', title: 'Meta & TikTok Certified', description: 'Learn official frameworks to plan, launch and optimize paid campaigns.' },
      { icon: 'insights', title: 'Real Ad Budgets', description: 'Practice on live accounts with real, trackable ad spend strategies.' },
      { icon: 'palette', title: 'Creative Development', description: 'Design scroll-stopping ads using Canva, CapCut and AI creative tools.' },
      { icon: 'query_stats', title: 'Funnel Strategy', description: 'Build full-funnel campaigns from awareness to conversion and retention.' },
      { icon: 'analytics', title: 'ROAS Attribution', description: 'Master pixel, CAPI, and analytics to report true return on ad spend.' },
      { icon: 'business_center', title: 'Client Portfolio', description: 'Graduate with case studies and a real portfolio to attract clients.' },
    ],
    whyUs: [
      {
        icon: 'school',
        title: 'Agency-Trained Mentors',
        description: 'Learn from performance marketers managing multi-crore ad budgets for D2C and e-commerce brands.',
      },
      {
        icon: 'auto_graph',
        title: 'Live Ad Account Labs',
        description: 'Run and optimize actual campaigns in a guided environment, from setup to scaling.',
      },
      {
        icon: 'update',
        title: 'Always Up-to-Date',
        description: 'Curriculum refreshed every quarter to reflect the latest Meta, Google and TikTok updates.',
      },
    ],
    mentors: [
      {
        name: 'Sana Qureshi',
        role: 'Performance Marketing Head',
        experience: '11+ Years Experience',
        image:
          '/images/mentors/sana.jpg',
      },
      {
        name: 'Kabir Anand',
        role: 'Social Media & Influencer Strategist',
        experience: '8+ Years Experience',
        image:
          '/images/mentors/kabir.jpg',
      },
      {
        name: 'Divya Nair',
        role: 'Creative & Copy Lead',
        experience: '7+ Years Experience',
        image:
          '/images/mentors/divya.jpg',
      },
    ],
    gains: [
      {
        icon: 'badge',
        title: 'Meta Blueprint Readiness',
        description: 'Gain the knowledge to pass Meta Blueprint certification on your own schedule.',
      },
      {
        icon: 'work',
        title: 'High-Paying Skills',
        description: 'Performance marketers are in demand — position yourself for roles up to ₹8–12 LPA.',
      },
      {
        icon: 'business_center',
        title: 'Client-Ready Portfolio',
        description: 'Leave with documented case studies and ad accounts you can show employers and clients.',
      },
    ],
    gainsImage: '/images/gains-course3.jpg',
    successStories: [
      {
        quote:
          '"I went from zero to managing a ₹10L monthly ad budget in 4 months after this program."',
        name: 'Ishita B.',
        role: 'Paid Media Executive',
        image: '/images/students/ishita.jpg',
      },
      {
        quote:
          '"The live ad labs taught me more than years of tutorials. My ROAS doubled by week six."',
        name: 'Aditya J.',
        role: 'Digital Marketer',
        image: '/images/students/aditya.jpg',
      },
      {
        quote:
          '"I now freelance for three D2C brands. The creative and funnel training was a game changer."',
        name: 'Farhan K.',
        role: 'Freelance Performance Marketer',
        image: '/images/students/farhan.jpg',
      },
    ],
    modules: [
      { icon: 'campaign', title: '1. Social Media Foundations', topics: ['Platform Landscapes', 'Audience Personas', 'Content Pillars'] },
      { icon: 'groups', title: '2. Organic Growth', topics: ['Reels Strategy', 'Community Building', 'UGC & Creators'] },
      { icon: 'ads_click', title: '3. Meta Ads Manager', topics: ['Campaign Structure', 'Audience Targeting', 'Ad Formats'] },
      { icon: 'videocam', title: '4. Video & Creative', topics: ['Hook Scripts', 'Canva & CapCut', 'AI Ad Creatives'] },
      { icon: 'travel_explore', title: '5. Google Ads for Social', topics: ['YouTube Ads', 'Demand Gen', 'Audience Signals'] },
      { icon: 'monitoring', title: '6. Tracking & Attribution', topics: ['Meta Pixel', 'Conversions API', 'GA4 Setup'] },
      { icon: 'trending_up', title: '7. Scaling & Optimization', topics: ['Budget Scaling', 'A/B Testing', 'Retargeting Funnels'] },
      { icon: 'work_history', title: '8. Agency Career Track', topics: ['Client Pitches', 'Reporting Dashboards', 'Freelance Setup'] },
    ],
    faqs: [
      {
        question: 'Do I need prior ad experience?',
        answer:
          'No. The program is hands-on and starts from the basics of paid and organic social marketing before advancing to scaling strategies.',
      },
      {
        question: 'Will I manage real ad budgets?',
        answer:
          'Yes — in supervised live labs you plan and optimize campaign builds using realistic budgets and real platform dashboards.',
      },
      {
        question: 'What certifications will I be prepared for?',
        answer:
          'You will be ready for Meta Blueprint and Google Ads certifications, with prep sessions included in the program.',
      },
      {
        question: 'Is career support included?',
        answer:
          'Yes, we provide resume building, mock interviews, and direct referrals to our network of agencies and brands.',
      },
    ],
    finalCta: {
      heading: 'Ready to Launch High-ROI Ad Campaigns?',
      description:
        'Join the next Social Media & Performance Ads Expert batch and turn creative strategy into measurable business results.',
      ctaLabel: 'Enroll as an Expert',
      ctaHref: '#demo',
    },
  },
]

// --- Template & helpers ---------------------------------------------------

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function emptyCourse() {
  return {
    id: `course-${Date.now()}`,
    slug: '',
    title: '',
    topAppBar: { message: '', ctaLabel: 'Enroll Now', ctaHref: '#enroll' },
    hero: {
      badge: '',
      titlePrefix: '',
      titleHighlight: '',
      titleSuffix: '',
      subtitle: '',
      ctaLabel: 'Book Free Demo',
      ctaHref: '#enroll',
      image: '',
      imageAlt: '',
      floatingStat: { value: '', label: '' },
      stats: [{ label: '', value: '' }],
    },
    highlights: [{ icon: '', title: '', description: '' }],
    whyUs: [{ icon: '', title: '', description: '' }],
    mentors: [{ name: '', role: '', experience: '', image: '' }],
    gains: [{ icon: '', title: '', description: '' }],
    gainsImage: '',
    successStories: [{ quote: '', name: '', role: '', image: '', initial: '' }],
    modules: [{ icon: '', title: '', topics: [''] }],
    faqs: [{ question: '', answer: '' }],
    finalCta: { heading: '', description: '', ctaLabel: 'Book Your Free Demo', ctaHref: '#demo' },
  }
}

// Creates a NEW course pre-filled with the showcase content as a starting
// template. This means a newly added page already has real content to edit
// instead of rendering as an empty structure. Only id/slug/title are fresh.
export function templateCourse() {
  const base = JSON.parse(JSON.stringify(defaultCourses[0]))
  return {
    ...base,
    id: `course-${Date.now()}`,
    slug: '',
    title: '',
  }
}

// --- Data normalization ---------------------------------------------------
// Admin-created courses (from an older empty template, or when a list item was
// added as `{}`) can be missing nested fields such as `modules[].topics` or
// `hero.stats`. Rendering those directly crashes (e.g. `.map` of undefined).
// `normalizeCourse` merges stored data onto the canonical empty shape so every
// course is always complete and pages never crash.

function mergeShape(template, value) {
  if (Array.isArray(template)) {
    if (!Array.isArray(value) || value.length === 0) return Array.isArray(value) ? [] : []
    const elem = template[0]
    return value.map((item) => (elem === undefined ? item : mergeShape(elem, item)))
  }
  if (template && typeof template === 'object') {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return JSON.parse(JSON.stringify(template))
    }
    const out = {}
    for (const key of Object.keys(template)) {
      out[key] = mergeShape(template[key], value[key])
    }
    // Preserve extra keys that exist in the stored value but not in the
    // template (e.g. images on list items). Normalization is meant to fill
    // missing fields, never to delete data the admin entered.
    for (const key of Object.keys(value)) {
      if (!(key in out)) out[key] = value[key]
    }
    return out
  }
  return value === undefined ? template : value
}

export function normalizeCourse(course) {
  const shape = emptyCourse()
  const merged = mergeShape(shape, course)
  merged.id = course?.id ?? merged.id
  merged.slug = course?.slug ?? merged.slug
  merged.title = course?.title ?? merged.title
  return merged
}

// --- localStorage-backed CRUD (temporary showcase persistence) ------------

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : null
  } catch {
    return null
  }
}

// Repair for previously saved courses: older versions of normalizeCourse
// stripped `image` / `initial` from success stories (missing from the empty
// template), so courses saved via the admin panel lost their student photos.
// Restore them from the defaults for matching course ids. The admin form has
// no editor for these fields, so a blank value can only come from the old bug.
function repairStoryImages(course) {
  const def = defaultCourses.find((d) => d.id === course.id)
  if (!def) return course
  const defStories = def.successStories || []
  course.successStories = (course.successStories || []).map((story, i) => {
    const defStory = defStories[i]
    if (!defStory) return story
    if (!story.image && defStory.image) story.image = defStory.image
    if (!story.initial && defStory.initial) story.initial = defStory.initial
    return story
  })
  return course
}
export function getCourses() {
  const stored = readStored()
  // Normalize stored courses so missing nested fields never crash rendering.
  return stored
    ? stored.map((course) => repairStoryImages(normalizeCourse(course)))
    : defaultCourses
}

// --- Reactive store (frontend-only) ---------------------------------------
// Lets every component re-render the moment admin data changes, without a
// backend. Mutations below notify subscribers so the whole site reflects edits.

const subscribers = new Set()
let cachedSnapshot = null

export function getCoursesSnapshot() {
  if (cachedSnapshot === null) cachedSnapshot = getCourses()
  return cachedSnapshot
}

export function subscribe(listener) {
  subscribers.add(listener)
  return () => subscribers.delete(listener)
}

function notify() {
  cachedSnapshot = null
  subscribers.forEach((listener) => listener())
}

export function getCourseBySlug(slug) {
  return getCourses().find((course) => course.slug === slug)
}

export function saveCourse(course) {
  const normalized = normalizeCourse(course)
  const courses = [...getCourses()]
  const index = courses.findIndex((item) => item.id === normalized.id)
  if (index >= 0) {
    courses[index] = normalized
  } else {
    courses.push(normalized)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses))
  notify()
  return normalized
}

export function deleteCourse(id) {
  const courses = getCourses().filter((course) => course.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses))
  notify()
}
