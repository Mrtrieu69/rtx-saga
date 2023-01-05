import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { fetchDashboardData } from './dashboardSlice';

export default function Dashboard() {
    const dispatch = useAppDispatch();
    const { loading, statistics, highestStudentList, lowestStudentList, rankingByCityList } =
        useAppSelector((state) => state.dashboard);

    console.log(loading, statistics, highestStudentList, lowestStudentList, rankingByCityList);

    useEffect(() => {
        dispatch(fetchDashboardData());
    }, [dispatch]);

    return <div>Dashboard feature</div>;
}
