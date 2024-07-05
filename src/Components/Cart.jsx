import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    datacart,
    decreasecart,
    increasecart,
    removecart,
} from "../Features/ProductSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    let products = [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFr-8dPn-NFcuHFNs21bxGcGcLklxrwFheKw&s",
            ],
        },
        {
            id: 2,
            title: "iPhone X",
            description:
                "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnobOt_rKPpeTnAln9NS29G0dGK0waeubFig&s",
            ],
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            description:
                "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            discountPercentage: 15.46,
            rating: 4.09,
            stock: 36,
            brand: "Samsung",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5ujmnnI_kuz1iaTUB3uBDOjTtlYuRjaGMgFNrIXS_cnIGwzd_xdCpVXWmcrPpXgvGAo&usqp=CAU",
            ],
        },
        {
            id: 4,
            title: "OPPOF19",
            description: "OPPO F19 is officially announced on April 2021.",
            price: 280,
            discountPercentage: 17.91,
            rating: 4.3,
            stock: 123,
            brand: "OPPO",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvgg4JAxcIscB8BTNtMYlz_FNjiFcs517OA&s",
            ],
        },
        {
            id: 5,
            title: "Huawei P30",
            description:
                "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            price: 499,
            discountPercentage: 10.58,
            rating: 4.09,
            stock: 32,
            brand: "Huawei",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOuVvzSqYKGlYrnextr454uewXhwQPbgp24FUTnjtdaDqZ7UsQ6Vo-tdi0lvw6TjDw2c&usqp=CAU",
            ],
        },
    ];
    useEffect(() => {
        dispatch(datacart(products));
    }, [dispatch]);

    const handleInc = (id, stock) => {
        if (stock > 1) {
            dispatch(increasecart({ id }));
        }
    };

    const handleDec = (id, quantity) => {
        if (quantity > 1) {
            dispatch(decreasecart({ id }));
        }

    };
    const removeproduct = (id) => {
        dispatch(removecart({ id }));
    };
    const totalPrice = cart.reduce(
        (total, data) => total + data.price * (data.quantity || 0),
        0
    );
    const totalQuantity = cart.reduce(
        (total, data) => total + (data.quantity || 0),
        0
    );

    return (
        <div>
            <div className="card-container">
                <div className="row gx-3 gx-lg-2 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
                    {cart.map((element, index) => {
                        return (
                            <div key={index}>
                                <div className="col mb-5">
                                    <div className="card h-100 mt-5">
                                        <div className="card-header">
                                            <div className="img-box">
                                                {element.images.map((ele, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <img
                                                                className="card-img-top"
                                                                src={ele}
                                                                alt="..."
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className="card-body">
                                                <h3 className="fw-bolder">{element.title}</h3>
                                                <p className="card-content px-5 text-muted">
                                                    <b>{element.category}</b>
                                                </p>
                                                <p>{element.description}</p>
                                                <p className="card-price text-center">
                                                    <b>Price:</b>
                                                    {element.price * element.quantity || element.price}
                                                </p>
                                                <p className="card-stock text-center text-danger">
                                                    <b>Stockes:</b>
                                                    {element.stock - (element.quantity || 1)}
                                                </p>
                                                <div className="text-center">
                                                    <button
                                                        className="btn btn-outline-success mt-auto"
                                                        onClick={() =>
                                                            handleInc(element.id, element.stock || 1)
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                    <span>{element.quantity}</span>
                                                    <button
                                                        className="btn btn-outline-primary mt-auto "
                                                        onClick={() =>
                                                            handleDec(element.id, element.quantity || 1)
                                                        }
                                                    >
                                                        -
                                                    </button>

                                                    <button
                                                        className="btn "
                                                        onClick={() => removeproduct(element.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="product">
                    <div className="quantity">Total Quantity:{totalQuantity}</div>
                    <br />
                    <div className="price">Total Price:{totalPrice}</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;