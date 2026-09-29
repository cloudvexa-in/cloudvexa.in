import CounterCard from '@/components/ui/CounterCard';

const metrics = [
  {
    value: '99.99%',
    numericValue: 9999,
    suffix: '%',
    label: 'Uptime Architecture',
    color: '#00F0FF',
    delay: 0,
  },
  {
    value: '10+',
    numericValue: 10,
    suffix: '+',
    label: 'Global Industry Verticals',
    color: '#0070F3',
    delay: 0.1,
  },
  {
    value: '50M+',
    numericValue: 50,
    suffix: 'M+',
    label: 'Daily Inference Pipelines',
    color: '#7928CA',
    delay: 0.2,
  },
  {
    value: '4.2x',
    numericValue: 42,
    suffix: 'x',
    label: 'Average Scalability Velocity',
    color: '#8A2BE2',
    delay: 0.3,
  },
];

export default function MetricsTicker() {
  return (
    <section
      style={{
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        background: 'var(--bg-subtle)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {metrics.map((m) => (
            <CounterCard key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
