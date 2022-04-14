import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom';
import ReactJsAlert from "reactjs-alert";

const convertRupiah = require('rupiah-format');
export default function Checkout() {

    const { dataId } = useParams()
    const [data, setData] = useState({
        kitabs: []
    });
    const [qty, setQty] = useState();
    const [alert, setAlert] = useState({});
    const handleQtyChange = (e) => {
        setQty(e.target.value);
        // console.log(e.target.value);
    };


    // useEffect(() => {
    //     qty = document.getElementById('jumlah').value
    // })
    // const [checkout, setCheckout] = useState({
    //     checkout: {
    //         userId: 1,
    //         kitabId: 1,
    //         jumlah: "",
    //         tgl: ""
    //     }
    // })

    const handleCheckout = (event) => {
        let timestamp = new Date().getTime();
        const checkout = {
            userId: dataId,
            kitabId: data.id,
            jumlah: qty,
            tgl: timestamp
        }

        fetch('http://localhost:3005/checkout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkout)
        })
            .then((Response) => {
                setAlert({
                    type: "success",
                    status: true,
                    title: "Successfully add to cart",
                });
                setTimeout(() => {
                    Redirect("/kitab");
                }, 3000);
            })

    }

    // var handleSimpan = () => {
    //     fetch('http://localhost:3005/checkout/', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(checkout)
    //     })
    //         .then((Response) => {
    //             setAlert({
    //                 type: "success",
    //                 status: true,
    //                 title: "Successfully add to cart",
    //             });
    //             setTimeout(() => {
    //                 Redirect("/kitab");
    //             }, 3000);
    //         })
    // }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3005/kitabs/' + dataId,
            );

            setData(result.data);
        };

        fetchData();
    }, []);


    useEffect(() => {
        document.getElementById('jumlah').defaultValue = 1
        // var currentVal = document.getElementById('jumlah').value
    })
    const value = document.getElementById('jumlah')

    // var total = value * data.harga
    return (
        <div>
            <h3 style={{ fontWeight: 'bold' }}>Barang yang dibeli</h3>
            <div className="row">

                <div className="col-md-4">
                    <img src={data.gambar} style={{ height: 400 }} />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <h3>{data.namaKitab}</h3>
                        <p>{data.deskripsi}</p>

                        <b>{convertRupiah.convert(data.harga)} </b>
                    </div>
                    <br />

                    <div className="col-md-5">
                        <label htmlFor="">jumlah pesanan</label>
                        <div className="row">
                            <div className="col-md-1">

                                <button className="btn btn-sm btn-success" onClick={decrementValue}>-</button>
                            </div>
                            <div className="col">
                                <input type="number" className='form-control' min='1' id='jumlah' onMouseUp={handleQtyChange} onKeyUp={handleQtyChange} required />
                            </div>
                            <div className="col-md-1">

                                <button className="btn btn-sm btn-success" onClick={incrementValue}>+</button>
                            </div>
                        </div>
                        <br />

                        <div className="text-left">
                            {/* <Link to={`/checkout/${data.id}`} > */}
                            <button className="btn btn-success" onClick={handleCheckout}>
                                Checkout
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                    {/* {
                        console.log(fakeAu)
                    } */}
                </div>
            </div>
        </div>
    )
}

function curVal() {
    console.log(document.getElementById('jumlah').value);
}

function incrementValue() {
    var value = parseInt(document.getElementById('jumlah').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('jumlah').value = value;
    console.log(document.getElementById('jumlah').value);
}

function decrementValue() {
    var value = parseInt(document.getElementById('jumlah').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('jumlah').value = value;
    console.log(document.getElementById('jumlah').value);
}