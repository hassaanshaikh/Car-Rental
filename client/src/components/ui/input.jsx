export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-lg border px-3 py-2 bg-white dark:bg-[#1a1a1a] outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
      {...props}
    />
  );
}