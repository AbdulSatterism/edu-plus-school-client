import axios from 'axios';
import { useQuery } from 'react-query';

const useTeachers = () => {

    const { data: teachers = [], isLoading } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await axios('https://edu-plus-school-server.onrender.com/teachers');
            return res.data;
        }
    });
    return { teachers, isLoading }
};

export default useTeachers;