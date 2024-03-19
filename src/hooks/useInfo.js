import axios from "axios";
import { useQuery } from "react-query";

const useInfo = () => {

    const { data: schoolInfo = [], isLoading, refetch } = useQuery({
        queryKey: ['schoolInfo'],
        queryFn: async () => {
            const res = await axios("http://localhost:5000/schoolInfo");
            return res.data;
        }
    });

    const about = schoolInfo[0]?.aboutUs;
    const banner = schoolInfo[0]?.banner;
    const homeEvent = schoolInfo[0]?.homeEvent;
    const news = schoolInfo[0]?.news;
    const upcomingEvents = schoolInfo[0]?.upcomingEvents;
    const notice = schoolInfo[0]?.notice;

    return { about, banner, homeEvent, news, upcomingEvents, notice, isLoading, refetch }
};

export default useInfo;