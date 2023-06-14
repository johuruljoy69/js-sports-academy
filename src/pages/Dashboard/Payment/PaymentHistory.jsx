import { Helmet } from "react-helmet";

const PaymentHistory = () => {


    return (
        <div className="bg-slate-300 w-[600px] p-10">
            <Helmet>
                <title>JSSA | Payment History</title>
            </Helmet>
            <div className="text-center w-3/4 mb-10 mx-auto space-y-3">
                <h1 className="md:text-3xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">Payment History</h1>
            </div>
        </div>
    );
};

export default PaymentHistory;