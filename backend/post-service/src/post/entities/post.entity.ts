import { DatabaseRecord } from '../../../libs/database/src/database.service';

export class Post implements DatabaseRecord {
    id: string;
    createTimeUnix: number;
    updateTimeUnix: number;
    title: string;
    content: string;
    author: string;
}
