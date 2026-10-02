import { TrendingUp, Users, CheckCircle, Globe } from 'lucide-react';

const metrics = [
  {
    value: '99.9%',
    label: 'Uptime Guarantee',
    icon: CheckCircle,
  },
  {
    value: '10+',
    label: 'Global Industries',
    icon: Globe,
  },
  {
    value: '50M+',
    label: 'Processed Daily',
    icon: TrendingUp,
  },
  {
    value: '500+',
    label: 'Happy Clients',
    icon: Users,
  },
];

export default function MetricsTicker() {
  return (
    <section className="relative z-30 -mt-16 pb-12 font-sans px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className={`flex flex-col items-center text-center ${idx === 0 ? '' : 'pl-4 md:pl-0'}`}>
                <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 text-[#0d6efd]">
                  <Icon size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-[#212529] tracking-tight mb-2">
                  {m.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-[#6c757d] uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
