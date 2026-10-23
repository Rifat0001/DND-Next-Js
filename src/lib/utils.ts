export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** 7 -> "07" */
export function padNumber(value: number) {
  return String(value).padStart(2, "0");
}

/** "+971 54 749 0888" -> "tel:+971547490888" */
export function toTelLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
