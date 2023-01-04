interface PaginationParams {
    _limit: number;
    _page: number;
    _totalRows: number;
}

export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
}

export interface ListParams {
    _limit?: number;
    _page?: number;
    _sort?: string;
    _order?: 'desc' | 'asc';

    [key: string]: any;
}
