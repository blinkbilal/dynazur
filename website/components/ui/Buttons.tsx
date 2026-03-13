import Link from 'next/link';

interface YellowButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function YellowButton({ href, children, className = '', type = 'button', onClick, icon }: YellowButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3 bg-dynazur-yellow text-dynazur-black font-bold rounded-btn transition-all duration-300 hover:brightness-90 hover:shadow-md active:scale-[0.97] active:brightness-95 text-[15px] ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}

interface OutlinedButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function OutlinedButton({ href, children, className = '', onClick }: OutlinedButtonProps) {
  const classes = `inline-flex items-center justify-center px-6 py-2.5 bg-transparent border border-dynazur-black text-dynazur-black font-bold rounded-btn transition-all duration-300 hover:bg-dynazur-blue hover:border-dynazur-blue hover:text-white active:scale-[0.97] text-sm ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button className={classes} onClick={onClick}>{children}</button>;
}

interface BlueButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BlueButton({ href, children, className = '', onClick }: BlueButtonProps) {
  const classes = `inline-flex items-center justify-center px-7 py-3 bg-dynazur-blue text-white font-bold rounded-btn transition-all duration-300 hover:brightness-110 hover:shadow-md active:scale-[0.97] active:brightness-95 text-[15px] ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button className={classes} onClick={onClick}>{children}</button>;
}
