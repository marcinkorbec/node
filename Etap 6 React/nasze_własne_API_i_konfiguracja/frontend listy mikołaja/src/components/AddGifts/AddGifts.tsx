import React, {FormEvent, useState} from "react";
import { CreateGiftReq, GiftEntity } from "types";
import "./AddGifts.css"
import {Loading} from "../Loader/Loader";

export const AddGift = () => {
  const [form, setForm] = useState<CreateGiftReq>({
    name: '',
    count: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<string | null>(null)
  
  const updateForm = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }))
  }
  
  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    
    try {
      const res = await fetch('http://localhost:3002/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data: GiftEntity = await res.json();
      setLoading(false);
      setResultInfo(`${data.name} został dodany z ID ${data.id}`);
  
      if (res.status === 400 || res.status === 500) {
        const error = await res.json();
        alert(`An Error occured: ${error.message}`)
      }
    }
    finally {
      setLoading(false);
    }
  }
  
  if (loading) {
    return <Loading/>
  }
  
  if (resultInfo !== null) {
    return (
      <div>
        <p><strong className="added">{resultInfo}</strong></p>
        <button onClick={() => setResultInfo(null)}>Dodaj kolejnego</button>
      </div>
    )
    
  }
  
  return (
    <form onSubmit={sendForm}>
      <h2>Dodaj Prezent</h2>
      <label>
        <br/>
        <input
          type="text"
          placeholder="nazwa prezentu"
          value={form.name}
          onChange={event => updateForm('name', event.target.value)}
        />
      </label>
      <label>
        <br/>
        <input
          type="number"
          placeholder="liczba sztuk"
          value={form.count}
          onChange={event => updateForm('count', Number(event.target.value))}
        />
      </label>
      <br/>
      <button type="submit" className="btn btn-success">Dodaj</button>
    </form>
  )
}