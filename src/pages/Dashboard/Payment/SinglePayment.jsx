import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import SingleCheckoutForm from "./SingleCheckoutForm";



// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const SinglePayment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className=" w-[800px] mx-auto bg-green-300 p-10">
            <div className="text-center w-2/3 mb-10 mx-auto space-y-3">
                <p className="text-orange-700 text-xl font-semibold">Please Complete Your</p>
                <h1 className="md:text-5xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">Payment</h1>
            </div>
            <Elements stripe={stripePromise}>
                <SingleCheckoutForm cart={cart} price={price}></SingleCheckoutForm>
            </Elements>
        </div>
    );
};

export default SinglePayment;