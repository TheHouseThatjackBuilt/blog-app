import { format } from 'date-fns';

const formatedDate = (date: string) => format(new Date(date), 'MMMMd,y');

export default formatedDate;
