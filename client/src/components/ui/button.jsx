export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all";

  const variants = {
    default: "bg-yellow-400 text-black hover:bg-yellow-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}