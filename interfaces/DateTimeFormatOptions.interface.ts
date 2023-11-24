export interface DateTimeFormatOptions {
    weekday: 'long' | 'short' | 'narrow' | undefined;
    year: 'numeric' | '2-digit' | undefined;
    month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
    day: 'numeric' | '2-digit' | undefined;
}

// const convertedOptions: Intl.DateTimeFormatOptions = {
//   weekday: options.weekday,
//   year: options.year,
//   month: options.month,
//   day: options.day
// };