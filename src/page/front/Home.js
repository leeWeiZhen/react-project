import Carousel from "../../components/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {


    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);






    const getProducts = async (page = 1) => {
        const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`);
        setProducts(productRes.data.products);
    }
    useEffect(() => {
        getProducts(1);
    }, [])
    return (
        <>

            <div className="container">
                <div className="row flex-md-row-reverse flex-column"
                    style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Carousel products={products} ></Carousel>
                </div>
                <div className="row mt-5">
                    {products.slice(0, 4).map((product) => {
                        return (
                            <div className="col-md-6 mt-md-4" key={product.id}>
                                <div className="card border-0 mb-4 position-relative position-relative">
                                    <img
                                        src={product.imageUrl}
                                        className="card-img-top rounded-0 object-cover"
                                        alt="..."
                                        style={{ height: "300px" }}
                                    />
                                    <div className="card-body p-0">
                                        <h4 className="mb-0 mt-4">{product.title}</h4>
                                        <div className="d-flex justify-content-between mt-3">
                                            <p className="card-text text-muted mb-0 w-100">
                                                {product.description}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-dark w-50 rounded-0 py-3 mt-3"
                                            style={{ height: '50px' }}
                                        >
                                            前往產品頁
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
            <div className="bg-light mt-7">
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row justify-content-center py-7">
                                    <div className="col-md-8 d-flex">
                                        <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="rounded-circle me-5" style={{ width: "160px", height: " 160px", objectFit: "cover", }} />
                                        <div className="d-flex flex-column">
                                            <p className="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                                            <p className="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center py-7">
                                    <div className="col-md-8 d-flex">
                                        <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="rounded-circle me-5" style={{ width: "160px", height: "160px", objectFit: "cover", }} />
                                        <div className="d-flex flex-column">
                                            <p className="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                                            <p className="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center py-7">
                                    <div className="col-md-8 d-flex">
                                        <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className="rounded-circle me-5" style={{ width: "160px", height: "160px", objectFit: "cover", }} />
                                        <div className="d-flex flex-column">
                                            <p className="h5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                                            <p className="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container my-7">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style={{ width: "48px", height: "48px", objectFit: "cover", }} />
                        <h4 className="mt-4">Lorem ipsum</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style={{ width: "48px", height: "48px", objectFit: 'cover', }} />
                        <h4 className="mt-4">Lorem ipsum</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" style={{ width: "48px", height: "48px", objectFit: "cover", }} />
                        <h4 className="mt-4">Lorem ipsum</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                </div>
            </div>
            <div className="bg-light py-7">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                            <h3>Lorem ipsum</h3>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                            <button className="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;