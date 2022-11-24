import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector} from 'react-redux'
// import Elpijidb from "../../../../backend/model/model";


function InputDataForm(){


    const [formData, setFormData] = useState({
        tanggal: '',
        kode: '',
        nama: '',
        keterangan: '',
        tabung_transfer: '',
        tabung_tunai: '',
        bayar_transfer: '',
        bayar_tunai: '',
    })
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)


    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate]);


    const { tanggal, kode, nama, keterangan, tabung_transfer,tabung_tunai,bayar_transfer,bayar_tunai} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (tanggal, kode, nama, keterangan, tabung_transfer, tabung_tunai, bayar_transfer, bayar_tunai.trim().length === 0){
            toast.error('Input value is empty')
            return
        } else {
            let token = JSON.parse(localStorage.getItem('user'));
            console.log(token.token)
            fetch("http://localhost:5000/api/lpg", {
                
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token.token}`,
                },
                body: JSON.stringify({
                    tanggal: tanggal,
                    kode: kode,
                    nama: nama,
                    keterangan: keterangan,
                    tabung_transfer: tabung_transfer,
                    tabung_tunai: tabung_tunai,
                    bayar_transfer: bayar_transfer,
                    bayar_tunai: bayar_tunai,
                }),
            });
            
        }
    }

    return (
        <form action="/api/lpg" method="POST" id="input_data">
            <div className="new_data">
                <div className="form-group">
                    <label htmlFor="tanggal" className="text-light">Tanggal</label>
                    <input type="hidden" name="id" value=""/>
                    <input type="text" name="tanggal" value={tanggal} placeholder="Contoh = TTTT-BB-HH" onChange={onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="kode" className="text-light">Kode</label>
                    <input type="text" name="kode" value={kode} placeholder="Dua huruf terakhir plat nomor kendaraan" onChange={onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="nama" className="text-light">Nama Pangkalan</label>
                    <input type="text" name="nama" value={nama} placeholder="Contoh = Siswoyo"onChange={onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="keterangan" className="text-light">Keterangan</label>
                    <input type="text" name="keterangan" value={keterangan} placeholder="Keterangan"onChange={onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Tabung" className="text-light">Jumlah Tabung</label>
                    <input type="number" name="tabung_transfer" value={tabung_transfer} placeholder="Cash-less"onChange={onChange}/>
                    <input type="number" name="tabung_tunai" value={tabung_tunai} placeholder="Tunai"onChange={onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Pembayaran" className="text-light">Pembayaran</label>
                    <input type="number" name="bayar_transfer" value={bayar_transfer} placeholder="Cash-less"onChange={onChange}/>
                    <input type="number" name="bayar_tunai" value={bayar_tunai} placeholder="Tunai"onChange={onChange}/>
                    </div>
        
                <div className="form-group">
                    <button type="submit" className="btn text-dark update" onClick={onSubmit}>Save</button>
                </div>
        
            </div>
        </form>
    )
}

export default InputDataForm;