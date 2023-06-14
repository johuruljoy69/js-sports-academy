import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // enabled: !loading,
        enabled: !!user?.email && !! localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;