import React from 'react'
import { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
import './MenuEditForm.scss'
import Button from '../../../components/Button/Button';
import axios from 'axios';
// import { fetchUser } from '../../../redux/auth/auth.action';
// import { useDispatch } from 'react-redux';
const MenuEditForm = ({handleClose,currentSection,src,title,price,stock}) => {
  // const dispatch = useDispatch();
  const [name,setname] = useState(title);
  const [Price,setPrice] = useState(price);
  const [bowl,setBowl] = useState(stock);
  const [image,setImage]=useState(src);
  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleChange=(e)=>{
    console.log(e.target.files[0]);
    getBase64(e.target.files[0])
      .then(result => {
        setImage(result)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const ClearForm=()=>{
    setname('');
    setPrice(0);
    setBowl(0);
    setImage(null);
  }
  const submit=()=>{
    axios.post('/api/partner/menu/edit',{
      currentSection:currentSection,
      name:name,
      price:Price,
      stock:bowl,
      image:image
    })
    .then((response)=>console.log(response))
    .catch(err=>console.log(err))
    handleClose();
  }
  return (
    <>
      <div className="menuEditForm">
        <div className="menuEditForm__inputdetails--inputContainer"><input type='text' placeholder='Enter Name of the dish' value={name} onChange={(e)=>setname(e.target.value)}/></div>
        <div className="menuEditForm__inputdetails--inputContainer"><input type='number' placeholder='Enter Price' value={Price} onChange={(e)=>setPrice(e.target.value)}/></div>
        <div className="menuEditForm__inputdetails--inputContainer"><input type='number' placeholder='Enter Stock' value={bowl} onChange={(e)=>setBowl(e.target.value)}/></div>
        <div className="menuEditForm__inputdetails-upload">
        <label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleChange(e)}
              />
              Upload Image
            </label>
        </div>
        <div className="menuEditForm__inputdetails-upload--text">Dish Preview</div>

        <MenuCard formCalled={true} src={image} title={name} price={Price} stock={bowl}/>
        <div className="menuEditForm__buttons">
          <div onClick={ClearForm}><Button type="ghost" config="discard" color='#ea7c69'>Discard Changes</Button></div>
          <div onClick={submit}><Button type="primary" config="save">Save</Button></div>
        </div>
      </div>
    </>
  )
}

export default MenuEditForm
