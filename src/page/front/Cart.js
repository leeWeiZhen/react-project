import axios from "axios";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAsyncMessage } from "../../slice/messageSlice";

function Cart() {
    const { cartData, getCart } = useOutletContext();
    const [loadingItems, setLoadingItem] = useState([]);
    const dispatch = useDispatch();

    const removeCartItem = async (id) => {
        try {
            const res = await axios.delete(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`,)
            getCart();
            console.log(res);
        } catch (error) {
            console.log(error);
        }



    }
    const updateCartItem = async (item, quantity) => {
        const data = {
            data: {
                product_id: item.product_id,
                qty: quantity
            }
        };
        setLoadingItem([...loadingItems, item.id])
        try {
            const res = await axios.put(`/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`,
                data,
            )
            dispatch(createAsyncMessage(res.data));
            getCart();
            console.log(res);
            setLoadingItem(loadingItems.filter((loadingObject) => loadingObject !== item.id))
        } catch (error) {
            console.log(error);
            dispatch(createAsyncMessage(error.response.data));
            setLoadingItem(loadingItems.filter((loadingObject) => loadingObject !== item.id));

        }
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 bg-white py-5" style={{ minHeight: "calc(100vh - 56px - 76px)" }}>
                    <div className="d-flex justify-content-between">
                        <h2 className="mt-2"> 您的商品</h2>
                    </div>
                    {cartData?.carts?.map((item) => {
                        return (
                            <div className="d-flex mt-4 bg-light" key={item.id}>
                                <img
                                    className="object-cover"
                                    src={item.product.imageUrl} alt="" style={{ width: "120px", }} />
                                <div className="w-100 p-3 position-relative ">
                                    <button
                                        type="button"
                                        className="position-absolute btn"
                                        style={{ top: "10px", right: "10px", }}
                                        onClick={() => { removeCartItem(item.id) }}
                                    >
                                        <i className="bi bi-x-circle-fill"></i>
                                    </button>
                                    <p className="mb-0 fw-bold">{item.product.title}</p>
                                    <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>{item.product.content}</p>
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <select name="" id="" className="form-select"
                                            value={item.qty}
                                            disabled={loadingItems.includes(item.id)}
                                            onChange={(e) => {
                                                updateCartItem(item, e.target.value * 1);
                                            }}
                                        >
                                            {[...(new Array(20))].map((i, num) => {
                                                return (
                                                    <option value={num + 1} key={num}>{num + 1}</option>
                                                )
                                            })
                                            }
                                        </select>
                                        <p className="mb-0 ms-auto">NT$ {item.final_total}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className="d-flex justify-content-between mt-4">
                        <p className="mb-0 h4 fw-bold"> 總金額</p>
                        <p className="mb-0 h4 fw-bold">NT$ {cartData.final_total}</p>
                    </div>
                    <a href="./checkout.html" className="btn btn-dark w-100 mt-4 rounded-0 py-3">確認商品正確</a>
                </div>
            </div>
        </div>
    )
}
export default Cart;