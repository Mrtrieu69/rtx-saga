import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { City, ListResponse, Student } from 'models';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
    fetchDashboardData,
    fetchDashboardDataFailed,
    fetchDashboardDataSuccess,
    RankingByCity,
    setHighestStudentList,
    setLowestStudentList,
    setRankingByCityList,
    setStatistics,
} from './dashboardSlice';

function* fetchStatistics() {
    const responseList: ListResponse<Student>[] = yield all([
        call(studentApi.getAll, {
            _page: 1,
            _limit: 1,
            gender: 'male',
        }),
        call(studentApi.getAll, {
            _page: 1,
            _limit: 1,
            gender: 'female',
        }),
        call(studentApi.getAll, {
            _page: 1,
            _limit: 1,
            mark_gte: 8,
        }),
        call(studentApi.getAll, {
            _page: 1,
            _limit: 1,
            mark_lte: 5,
        }),
    ]);
    const statisticsList: number[] = responseList.map((x) => x.pagination._totalRows);
    const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticsList;
    yield put(setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount }));
}
function* fetchHighestStudentsList() {
    const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'desc',
    });

    yield put(setHighestStudentList(data));
}
function* fetchLowestStudentsList() {
    const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'asc',
    });

    yield put(setLowestStudentList(data));
}
function* fetchRankingByCityList() {
    const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);
    const callList = cityList.map((x) =>
        call(studentApi.getAll, {
            _page: 1,
            _limit: 5,
            _sort: 'mark',
            _order: 'desc',
            city: x.code,
        })
    );

    const responseList: ListResponse<Student>[] = yield all(callList);
    const rankingByCityList: RankingByCity[] = responseList.map((x, id) => ({
        cityId: cityList[id].code,
        cityName: cityList[id].name,
        rankingList: x.data,
    }));

    yield put(setRankingByCityList(rankingByCityList));
}

function* fetchData() {
    try {
        yield all([
            call(fetchStatistics),
            call(fetchHighestStudentsList),
            call(fetchLowestStudentsList),
            call(fetchRankingByCityList),
        ]);

        yield put(fetchDashboardDataSuccess());
    } catch (error) {
        console.log('Failed to fetch dashboard data', error);
        yield put(fetchDashboardDataFailed());
    }
}

export default function* dashboardSaga() {
    yield takeLatest(fetchDashboardData.type, fetchData);
}
