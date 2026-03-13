type ClassValue = string | boolean | undefined | null | ClassValue[];

function clsx(...args: ClassValue[]): string {
  return args
    .flat()
    .filter((x) => typeof x === 'string' && x.length > 0)
    .join(' ');
}

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
