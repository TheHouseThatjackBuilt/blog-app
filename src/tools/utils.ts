import { format } from 'date-fns';
// import { ValueOrEmpty } from '../types/components/index.d';

export const formatedDate = (date: Date, formatDate: string) => format(date, formatDate);

type ValueOrEmpty<T> = T | null;

export const notEmpty = <T>(value: ValueOrEmpty<T>): value is T => value !== null;
