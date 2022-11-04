import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = { "layout": "vertical", };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, total = 2, createOrder }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();


    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);




    return (<>
        {(showSpinner && isPending) && <div className="spinner" />}
        <PayPalButtons
            disabled={false}
            forceReRender={[total, currency, style]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: total,
                                },
                            },
                        ],
                    })
                    .then((orderId) => {
                        // Your code here after create the order
                        return orderId;
                    });
            }}
            onApprove={function (data, actions) {
                return actions.order?.capture().then(function (datails) {
                    const userDatails = datails.purchase_units[0].shipping;
                    const userData = {
                        customer: userDatails?.name?.full_name,
                        address: userDatails?.address?.address_line_1,
                        total,
                        paymentMetod: 1,
                        status: 1
                    };
                    createOrder(userData);
                });
            }}
        />
    </>
    );
};

export default function App({ total, createOrder }) {
    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AWw7VGJ6EdTUK0xI7FIQePdRNEMw5dUpARfiqnV1z6tqRWeB4AsVm3eldXneVheG8J83OhJeXy6Gbbzz",
                    components: "buttons",
                    currency: "USD"
                }}
            >
                <ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                    total={total}
                    createOrder={createOrder}
                />
            </PayPalScriptProvider>
        </div>
    );
}