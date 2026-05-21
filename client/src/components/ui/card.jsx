export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-xl border bg-white dark:bg-[#1a1a1a] shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}