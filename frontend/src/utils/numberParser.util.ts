export const numberParser = (number: number): string => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 3,
  }).format(number);
};
