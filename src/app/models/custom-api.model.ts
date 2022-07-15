export class CustomApi{
    username?: string;
    title?: string;
    date_gte?: Date;
    date_lte?: Date;
    value_gte?: number;
    value_lte?: number;
    isPayed?: boolean;
    _sort?: string;
    _order?: string;
    _limit?: number;
    _page?: number;
}