import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className=" w-[800px] mx-auto bg-green-300 p-10">
            <div className="text-center w-2/3 mb-10 mx-auto space-y-3">
                <p className="text-orange-500 text-xl font-semibold">Please Purses Your</p>
                <h1 className="md:text-5xl text-slate-600 font-bold uppercase border-y-4 border-slate-400 py-4 ">Payment</h1>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;