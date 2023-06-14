import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import MyClassCard from "./MyClassCard";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [myClasses, seMyClasses] = useState([]);

    const url = `https://b7a12-summer-camp-server-side-johuruljoy69.vercel.app/myclasses?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                seMyClasses(data)
            })
    }, [url])

    return (
        <div className=" w-[500px] mx-auto bg-slate-300 p-10">
            <Helmet>
                <title>JSSA | My Class</title>
            </Helmet>
            <div className="text-center w-2/3 mb-10 mx-auto space-y-3">
                <h1 className="md:text-4xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">MY Classes</h1>
            </div>
            <div>
                {
                    myClasses.map(myClass => <MyClassCard
                        key={ myClass._id}
                        myClass={myClass}
                    ></MyClassCard>)
                }
            </div>
        </div>
    );
};

export default MyClasses;