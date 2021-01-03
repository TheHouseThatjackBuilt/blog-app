import { format } from 'date-fns';

const formatedDate = (date: Date, formatDate: string) => format(date, formatDate);

export default formatedDate;
