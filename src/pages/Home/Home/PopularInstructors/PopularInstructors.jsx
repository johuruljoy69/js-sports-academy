import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const PopularInstructors = () => {
    return (
        <div className="container mx-auto">
            <SectionTitle subHeading={"Our Popular"} heading={"Instructors"} />

            <div className="grid grid-cols-3 gap-10">
                <div className="card w-100 text-white bg-indigo-950 border border-purple-900  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;