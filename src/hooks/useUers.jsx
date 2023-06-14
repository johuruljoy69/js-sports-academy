import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const {data: users = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/users');
            return res.json();
        }
    })

    return [users, loading, refetch]
};

export default useUsers;