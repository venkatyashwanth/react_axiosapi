import React from 'react';
import items from '../Products.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Product() {
    return (
        <>
            <div className='container'>
                <div style={{ display: "flex", flexWrap: "wrap" }} className="d-flex justify-content-center">
                    {items.map((file) =>
                        <div key={file.id}>
                            <div className="card" style={{ width: "18rem", margin: "10px", padding: '10px' }}>
                                <img src={file.image} className="card-img-top" width="40" height="200"  />
                                <div className="card-body">
                                    <h5 className="card-title">{file.item}</h5>
                                    <p className="card-text">{file.description}</p>
                                    <a href="#" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
