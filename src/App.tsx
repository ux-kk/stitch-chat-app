import React, { useState } from 'react';
import { 
  Flower2, 
  Users, 
  MessageCircle, 
  Leaf, 
  Settings, 
  UserCircle, 
  Search, 
  Plus, 
  Send, 
  Wind, 
  Cloud, 
  ArrowRight, 
  Quote, 
  Sun,
  Check,
  Menu,
  Filter,
  Calendar,
  Star,
  ShieldCheck,
  Languages,
  Brain
} from 'lucide-react';
import { motion } from 'motion/react';
import { View, Listener, Message, ReflectionSummary } from './types';

const LISTENERS: Listener[] = [
  {
    id: '1',
    name: 'Elena R.',
    role: 'Senior Listener',
    sessions: '450+',
    rating: 4.9,
    tags: ['Anxiety & Social Phobia', 'Life Transitions', 'Mindfulness'],
    bio: '"I believe that everyone deserves a witness to their story. My approach is rooted in compassionate active listening and cognitive reframing, helping you navigate life\'s noisier moments with a calm perspective."',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    available: true
  },
  {
    id: '2',
    name: 'Marcus T.',
    role: 'Workplace Stress & Burnout',
    sessions: '300+',
    rating: 4.8,
    tags: ['Corporate Stress', 'Burnout', 'Work-Life Balance'],
    bio: 'Marcus specializes in high-performance pressure and finding balance in corporate environments. 10 years of experience in executive coaching.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    available: false,
    nextAvailable: '2:00 PM'
  },
  {
    id: '3',
    name: 'Sarah J.',
    role: 'Relationships & Heartbreak',
    sessions: '200+',
    rating: 4.7,
    tags: ['Dating', 'Healing', 'Loss'],
    bio: 'Sarah offers a nurturing space for those navigating the complexities of modern dating and emotional healing after loss.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    available: true
  },
  {
    id: '4',
    name: 'David K.',
    role: 'Creative Wellness',
    sessions: 'New',
    rating: 5.0,
    tags: ['Creative Blocks', 'Mental Wellness', 'Flow State'],
    bio: '"Focusing on the intersections of creative blocks and mental wellness. I\'m here to help you find your flow again."',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    available: true,
    isNew: true,
    languages: ['English', 'Korean']
  }
];

const SUMMARY_DATA: ReflectionSummary = {
  quote: "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.",
  author: "Hermann Hesse",
  moodBefore: "Restless",
  moodAfter: "Centered",
  heartRateReduction: 12,
  insights: [
    {
      id: '1',
      title: 'Emotional Anchoring',
      description: 'You identified that physical movement is your most consistent way to clear mental fog. Prioritizing the morning walk is non-negotiable for your peace.'
    },
    {
      id: '2',
      title: "The Power of 'No'",
      description: 'Recognizing that boundaries are a form of self-compassion. You felt a significant release when imagining declining the extra project.'
    },
    {
      id: '3',
      title: 'Gratitude for the Mundane',
      description: 'Unexpected joy was found in the quiet ritual of making tea. This small pocket of time acts as a natural reset for your nervous system.'
    }
  ]
};

export default function App() {
  const [currentView, setCurrentView] = useState<View>('reflect');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (currentView) {
      case 'reflect':
        return <ReflectView onComplete={() => setCurrentView('summary')} />;
      case 'summary':
        return <SummaryView onBack={() => setCurrentView('reflect')} />;
      case 'listeners':
        return <ListenersView />;
      case 'messages':
        return <MessagesView />;
      default:
        return <ReflectView onComplete={() => setCurrentView('summary')} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-[280px] bg-surface-container-low transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex flex-col h-full p-8">
          <div className="mb-12 px-6">
            <h1 className="text-xl font-bold text-on-surface tracking-tighter">The Sanctuary</h1>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mt-1 font-semibold">Your peaceful space</p>
          </div>

          <nav className="flex flex-col gap-y-2 flex-grow">
            <SidebarItem 
              icon={<Flower2 size={20} />} 
              label="Reflect" 
              active={currentView === 'reflect' || currentView === 'summary'} 
              onClick={() => setCurrentView('reflect')} 
            />
            <SidebarItem 
              icon={<Users size={20} />} 
              label="Listeners" 
              active={currentView === 'listeners'} 
              onClick={() => setCurrentView('listeners')} 
            />
            <SidebarItem 
              icon={<MessageCircle size={20} />} 
              label="Messages" 
              active={currentView === 'messages'} 
              onClick={() => setCurrentView('messages')} 
            />
            <SidebarItem 
              icon={<Leaf size={20} />} 
              label="My Sanctuary" 
              active={currentView === 'sanctuary'} 
              onClick={() => setCurrentView('sanctuary')} 
            />
          </nav>

          <div className="mt-auto space-y-6">
            <div className="bg-surface-container-lowest/50 rounded-xl p-4 flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-xs font-bold text-on-surface">Elena S.</p>
                <p className="text-[10px] text-on-surface-variant">Daily Streak: 12 days</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentView('reflect')}
              className="w-full bg-primary text-on-primary rounded-xl py-4 font-bold text-sm tracking-tight transition-all active:scale-95 shadow-lg shadow-primary/10"
            >
              Start Reflection
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[280px] min-h-screen flex flex-col">
        {renderView()}
      </main>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50"
      >
        <Menu size={24} />
      </button>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-x-4 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all active:scale-95 ${
        active 
          ? 'bg-primary-fixed text-on-primary-fixed' 
          : 'text-on-surface-variant hover:bg-surface-container-high'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function ReflectView({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex-grow flex flex-col"
    >
      <header className="h-20 flex justify-between items-center w-full px-12 z-40 bg-surface/80 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <span className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-bold">Express Yourself</span>
          <div className="h-1 w-1 rounded-full bg-surface-container-highest"></div>
          <span className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em]">Journal Mode</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors active:scale-95">
            <Settings size={20} className="text-on-surface-variant" />
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors active:scale-95">
            <UserCircle size={20} className="text-on-surface-variant" />
          </button>
        </div>
      </header>

      <div className="flex-grow flex flex-row overflow-hidden">
        <section className="flex-grow max-w-4xl mx-auto px-12 pt-24 pb-12 flex flex-col items-center">
          <div className="w-full max-w-2xl text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
              What’s sitting on your heart <br/>right now?
            </h2>
            <p className="text-on-surface-variant text-lg font-light italic">
              The page is yours. No judgment, just flow.
            </p>
          </div>
          
          <div className="w-full relative flex-grow">
            <textarea 
              autoFocus
              className="w-full h-[400px] bg-transparent border-none focus:ring-0 text-2xl font-light text-on-surface leading-relaxed resize-none hide-scrollbar placeholder:opacity-30" 
              placeholder="Start typing..."
            ></textarea>
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <div className="flex items-center gap-2 p-1.5 bg-surface-container-low rounded-full">
                <button className="px-6 py-2 rounded-full text-xs font-bold bg-surface-container-lowest text-primary shadow-sm">Text Mode</button>
                <button className="px-6 py-2 rounded-full text-xs font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">Audio Log</button>
                <button className="px-6 py-2 rounded-full text-xs font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">Mind Map</button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-[400px] bg-surface-container-low p-12 overflow-y-auto hide-scrollbar hidden xl:flex flex-col gap-12">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Inspiration</h3>
            <div className="rounded-xl overflow-hidden aspect-[4/3] relative group">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400" 
                alt="Forest" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              "Nature does not hurry, yet everything is accomplished."
              <span className="block mt-2 font-bold text-on-surface">— Lao Tzu</span>
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Journaling Prompts</h3>
            <div className="space-y-4">
              <PromptButton text="One small victory from today..." />
              <PromptButton text="What would you say to your younger self?" />
              <PromptButton text="Describe your current mood as a color." />
            </div>
          </div>

          <div className="mt-auto pt-12">
            <div className="bg-secondary-container rounded-xl p-8">
              <Leaf size={24} className="text-primary mb-4" />
              <h4 className="text-on-secondary-container font-bold text-lg mb-2">Curated Calm</h4>
              <p className="text-on-secondary-container/80 text-xs leading-relaxed">
                Your entries are encrypted and private. This is your safe digital garden.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-12 right-12 z-50">
        <button 
          onClick={onComplete}
          className="w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <Check size={32} />
        </button>
      </div>
    </motion.div>
  );
}

function PromptButton({ text }: { text: string }) {
  return (
    <button className="w-full text-left p-6 bg-surface-container-lowest hover:bg-primary-fixed transition-all rounded-lg group">
      <p className="text-sm font-medium text-on-surface group-hover:text-on-primary-fixed">{text}</p>
    </button>
  );
}

function SummaryView({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-12 lg:p-20 max-w-6xl mx-auto w-full"
    >
      <header className="mb-20 flex justify-between items-end">
        <div className="space-y-4">
          <span className="uppercase tracking-[0.1em] text-on-surface-variant text-xs font-bold">Session Complete</span>
          <h2 className="text-5xl font-bold -tracking-[0.02em] text-on-surface leading-tight">Your Reflection Summary</h2>
          <p className="text-xl text-on-surface-variant font-light max-w-lg">A moment captured in time. Take a deep breath and see how far you've come today.</p>
        </div>
        <div className="hidden lg:block">
          <div className="w-32 h-32 rounded-xl overflow-hidden bg-surface-container-high">
            <img 
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=200" 
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8 items-stretch">
        <div className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-xl p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote size={80} className="text-on-surface" />
          </div>
          <div className="relative z-10 space-y-8">
            <p className="text-3xl italic leading-relaxed text-on-surface-variant">
              "{SUMMARY_DATA.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-surface-container-highest"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">{SUMMARY_DATA.author}</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 bg-secondary-container rounded-xl p-10 flex flex-col">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-secondary-container mb-12">Mood Shift</h3>
          <div className="flex-grow flex items-center justify-between gap-6">
            <div className="text-center space-y-4 flex-1">
              <div className="w-20 h-20 mx-auto bg-surface/50 rounded-full flex items-center justify-center">
                <Cloud size={32} className="text-on-secondary-container" />
              </div>
              <p className="text-sm font-medium text-on-secondary-container">Before</p>
              <p className="text-xl font-bold">{SUMMARY_DATA.moodBefore}</p>
            </div>
            <div className="flex-shrink-0">
              <ArrowRight size={32} className="text-primary/40" />
            </div>
            <div className="text-center space-y-4 flex-1">
              <div className="w-20 h-20 mx-auto bg-primary text-on-primary rounded-full flex items-center justify-center">
                <Sun size={32} />
              </div>
              <p className="text-sm font-medium text-on-secondary-container">After</p>
              <p className="text-xl font-bold">{SUMMARY_DATA.moodAfter}</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-on-secondary-container/10">
            <p className="text-sm text-on-secondary-container/80 italic text-center">Your heart rate slowed by {SUMMARY_DATA.heartRateReduction}% during this session.</p>
          </div>
        </div>

        <div className="col-span-12 mt-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 space-y-6 pr-8">
              <h3 className="text-2xl font-bold text-on-surface">Points of Clarity</h3>
              <p className="text-on-surface-variant leading-relaxed">During your reflection, these three core insights emerged from your journaling path.</p>
              <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-high hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SUMMARY_DATA.insights.map((insight, idx) => (
                <div key={insight.id} className={`bg-surface-container-highest rounded-xl p-8 space-y-4 ${idx === 2 ? 'md:col-span-2' : ''}`}>
                  <span className="w-10 h-10 flex items-center justify-center bg-primary-container/20 text-primary rounded-full font-bold text-xs">0{idx + 1}</span>
                  <h4 className="text-lg font-bold">{insight.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-16 flex flex-col items-center gap-8">
          <button 
            onClick={onBack}
            className="px-16 py-6 bg-primary text-on-primary rounded-xl text-lg font-bold shadow-xl shadow-primary/10 transition-all hover:scale-105 active:scale-95"
          >
            Save to My Sanctuary
          </button>
          <button 
            onClick={onBack}
            className="text-on-surface-variant hover:text-primary transition-colors font-medium border-b border-transparent hover:border-primary pb-1"
          >
            I’m not quite finished reflecting
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ListenersView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="p-12 max-w-7xl mx-auto w-full"
    >
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
              Find a companion for your <span className="text-primary italic">journey</span>.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Our certified listeners are here to provide a safe, non-judgmental space for whatever is on your mind today.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <Filter size={20} className="text-on-surface-variant" />
            </button>
            <button className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <Calendar size={20} className="text-on-surface-variant" />
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-4xl group">
          <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
            <Search size={24} className="text-on-surface-variant/40" />
          </div>
          <input 
            className="w-full bg-surface-container-lowest border-none h-20 pl-20 pr-8 rounded-full shadow-sm text-lg focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/30" 
            placeholder="Search by specialty, name, or concern..." 
            type="text"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">Anxiety</span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase">Sleep</span>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-24">
        {/* Featured Listener */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 flex flex-col md:flex-row gap-10 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-lg">
            <img 
              src={LISTENERS[0].imageUrl} 
              alt={LISTENERS[0].name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-3xl font-bold text-on-surface">{LISTENERS[0].name}</h3>
                <p className="text-primary font-semibold">{LISTENERS[0].role} • {LISTENERS[0].sessions} Sessions</p>
              </div>
              <div className="flex items-center gap-1 bg-primary-fixed px-3 py-1 rounded-full text-on-primary-fixed text-sm font-bold">
                <Star size={14} fill="currentColor" />
                {LISTENERS[0].rating}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {LISTENERS[0].tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold uppercase tracking-wider text-on-surface-variant">{tag}</span>
              ))}
            </div>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-auto">
              {LISTENERS[0].bio}
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <Calendar size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-on-surface-variant">Available now</span>
              </div>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:bg-primary-container transition-colors active:scale-95">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Standard Listener */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <div className="w-24 h-24 overflow-hidden rounded-lg mb-6">
            <img 
              src={LISTENERS[1].imageUrl} 
              alt={LISTENERS[1].name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-1">{LISTENERS[1].name}</h3>
          <p className="text-on-surface-variant text-sm mb-6">{LISTENERS[1].role}</p>
          <p className="text-on-surface-variant line-clamp-3 mb-8">
            {LISTENERS[1].bio}
          </p>
          <div className="mt-auto">
            <div className="flex gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Next: {LISTENERS[1].nextAvailable}</span>
            </div>
            <button className="w-full bg-surface-container-high text-on-surface px-6 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-colors">
              View Profile
            </button>
          </div>
        </div>

        {/* Another Standard Listener */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
          <div className="w-24 h-24 overflow-hidden rounded-lg mb-6">
            <img 
              src={LISTENERS[2].imageUrl} 
              alt={LISTENERS[2].name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-1">{LISTENERS[2].name}</h3>
          <p className="text-on-surface-variant text-sm mb-6">{LISTENERS[2].role}</p>
          <p className="text-on-surface-variant line-clamp-3 mb-8">
            {LISTENERS[2].bio}
          </p>
          <div className="mt-auto">
            <button className="w-full bg-primary text-on-primary px-6 py-4 rounded-full font-bold active:scale-95 transition-transform">
              Connect
            </button>
          </div>
        </div>

        {/* New Listener Wide */}
        <div className="md:col-span-8 bg-secondary-container/30 rounded-xl p-10 flex flex-col md:flex-row items-center gap-12 border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 bg-primary text-on-primary rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] mb-6">New Listener</span>
            <h3 className="text-3xl font-bold text-on-surface mb-4">{LISTENERS[3].name}</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 italic">
              {LISTENERS[3].bio}
            </p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                <span className="text-sm font-bold text-on-surface">Background Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages size={18} className="text-primary" />
                <span className="text-sm font-bold text-on-surface">{LISTENERS[3].languages?.join(', ')}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-64 aspect-square overflow-hidden rounded-xl">
            <img 
              src={LISTENERS[3].imageUrl} 
              alt={LISTENERS[3].name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="md:col-span-12 mt-12 py-20 border-2 border-dashed border-surface-container-highest rounded-xl flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-6">
            <Brain size={40} className="text-on-surface-variant/40" />
          </div>
          <h4 className="text-2xl font-bold text-on-surface-variant mb-2">Can't find what you're looking for?</h4>
          <p className="text-on-surface-variant/60 max-w-md mx-auto mb-8">Tell us what's on your mind and we'll match you with a listener who specializes in your specific situation.</p>
          <button className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all">
            Get a personalized match
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </motion.div>
  );
}

function MessagesView() {
  const [messages] = useState<Message[]>([
    {
      id: '1',
      sender: 'guide',
      text: 'Welcome back to your sanctuary. How is your mind feeling in this quiet moment?',
      timestamp: '10:02 AM'
    },
    {
      id: '2',
      sender: 'user',
      text: "I've been feeling a bit overwhelmed by the pace of things lately. I just need a moment to breathe and reset.",
      timestamp: '10:04 AM'
    },
    {
      id: '3',
      sender: 'guide',
      text: "I understand. The world can be loud. Let's take that moment together. Would you like to try a short breathing exercise or perhaps listen to some rainfall while we talk?",
      timestamp: '10:05 AM',
      suggestions: ['Breathing Exercise', 'Ambient Rain']
    }
  ]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex h-screen overflow-hidden"
    >
      <section className="flex-1 flex flex-col relative">
        <header className="h-20 flex items-center justify-between px-12 z-40 border-b border-surface-container-low">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
              <Flower2 size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-on-surface font-bold tracking-tight">Sanctuary Guide</h2>
              <p className="text-[10px] text-primary font-bold uppercase tracking-[0.1em]">Always Present</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
              <Search size={20} className="text-on-surface-variant" />
            </button>
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors">
              <Settings size={20} className="text-on-surface-variant" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 md:px-24 py-8 flex flex-col gap-10 hide-scrollbar">
          <div className="flex justify-center">
            <span className="text-[10px] font-bold tracking-[0.15em] text-on-surface-variant/40 uppercase">Today's Journey</span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 max-w-2xl ${msg.sender === 'user' ? 'flex-row-reverse ml-auto' : ''}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${msg.sender === 'guide' ? 'bg-secondary-container' : ''}`}>
                {msg.sender === 'guide' ? (
                  <Flower2 size={16} className="text-primary" />
                ) : (
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
              </div>
              <div className={`flex flex-col gap-2 ${msg.sender === 'user' ? 'items-end' : ''}`}>
                <div className={`p-6 rounded-t-xl leading-relaxed shadow-sm ${
                  msg.sender === 'guide' 
                    ? 'bg-surface-container-low rounded-br-xl text-on-surface' 
                    : 'bg-primary text-on-primary rounded-bl-xl'
                }`}>
                  {msg.text}
                </div>
                {msg.suggestions && (
                  <div className="flex gap-3 flex-wrap mt-2">
                    {msg.suggestions.map(s => (
                      <button key={s} className="px-5 py-2.5 rounded-full bg-surface-container-high hover:bg-secondary-container text-on-surface text-sm font-medium transition-all active:scale-95">
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                <span className="text-[10px] text-on-surface-variant/60 font-medium px-2">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 md:px-24 bg-surface">
          <div className="relative flex items-center gap-4 bg-surface-container-low p-2 rounded-xl border border-surface-container-highest focus-within:bg-surface transition-all">
            <button className="p-3 text-on-surface-variant hover:text-primary transition-colors">
              <Plus size={20} />
            </button>
            <input 
              className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 py-4" 
              placeholder="Share your thoughts..." 
              type="text"
            />
            <button className="w-12 h-12 flex items-center justify-center bg-primary text-on-primary rounded-xl shadow-lg active:scale-90 transition-transform">
              <Send size={20} />
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-[10px] text-on-surface-variant/40 font-bold uppercase tracking-[0.2em]">End-to-End Encrypted Sanctuary</p>
          </div>
        </div>
      </section>

      <aside className="hidden lg:flex w-[380px] flex-col bg-surface-container-low p-10 gap-10 overflow-y-auto">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-6">Quiet Tools</h3>
          <div className="flex flex-col gap-6">
            <div className="group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 cursor-pointer transition-all hover:translate-y-[-4px]">
              <div className="flex justify-between items-start mb-12">
                <Wind size={32} className="text-primary" />
                <ArrowRight size={20} className="text-on-surface-variant/30 group-hover:text-primary transition-colors -rotate-45" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface mb-2 tracking-tight">Box Breathing</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">A 4-minute cycle to ground your nervous system.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 cursor-pointer transition-all hover:translate-y-[-4px]">
              <div className="flex justify-between items-start mb-12">
                <Cloud size={32} className="text-primary" />
                <ArrowRight size={20} className="text-on-surface-variant/30 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface mb-2 tracking-tight">Misty Forest</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Soft bird calls and the gentle rustle of leaves.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <div className="bg-secondary-container rounded-xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-sm font-bold text-on-secondary-container mb-2">Weekly Insight</h4>
              <p className="text-xs text-on-secondary-container leading-loose italic">
                "Peace is not the absence of chaos, but the ability to remain calm within it."
              </p>
            </div>
            <Flower2 size={80} className="absolute -right-4 -bottom-4 opacity-10 text-primary" />
          </div>
        </div>
      </aside>
    </motion.div>
  );
}
