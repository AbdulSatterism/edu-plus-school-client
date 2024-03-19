import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

const useStudent = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()

    const { data: studentCourse = {}, isLoading } = useQuery({
        queryKey: ['student', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/student?email=${user?.email}`)
            return res.data;
        }
    })
    return [studentCourse, isLoading]
};

export default useStudent;
