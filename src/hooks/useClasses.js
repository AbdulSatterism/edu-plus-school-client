import axios from "axios";
import { useQuery } from "react-query";


const useClasses = () => {
    const { data: classes = [], isLoading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios("http://localhost:5000/classes");
            return res.data;
        }
    });

    const classRoutine = classes?.map(routine => routine?.routine);
    const classSubjects = classes?.map(subject => subject?.subjects);

    return { classes, classRoutine, classSubjects, isLoading, refetch }

};

export default useClasses;