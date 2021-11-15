import React from 'react'
import { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
import './MenuAddForm.scss'
import Button from '../../../global/components/Button/Button';
import axios from 'axios';
// import { fetchUser } from '../../../redux/auth/auth.action';
// import { useDispatch } from 'react-redux';
const MenuAddForm = ({handleClose,currentSection}) => {
  // const dispatch = useDispatch();

  const [name,setname] = useState("");
  const [price,setprice] = useState();
  const [stock,setstock] = useState();
  const [image,setImage]=useState();
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
    setprice(0);
    setstock(0);
    setImage(null);
  }
  const submit=()=>{
    console.log("currentSection: ",currentSection );
    console.log("submit called");
    axios.post('/api/partner/menu/create',{
      currentSection:currentSection,
      name:name,
      price:price,
      stock:stock,
      image:image
    })
    .then((response)=>console.log(response))
    .catch(err=>console.log(err))
    handleClose();
  }
  return (
    <>
      <div className="menuAddForm">
        <div className="menuAddForm__inputdetails--inputContainer"><input type='text' placeholder='Enter Name of the dish' value={name} onChange={(e)=>setname(e.target.value)}/></div>
        <div className="menuAddForm__inputdetails--inputContainer"><input type='number' placeholder='Enter Price' value={price} onChange={(e)=>setprice(e.target.value)}/></div>
        <div className="menuAddForm__inputdetails--inputContainer"><input type='number' placeholder='Enter Stock' value={stock} onChange={(e)=>setstock(e.target.value)}/></div>
        <div className="menuAddForm__inputdetails-upload">
        <label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleChange(e)}
              />
              Upload Image
            </label>
        </div>
        <div className="menuAddForm__inputdetails-upload--text">Dish Preview</div>

        <MenuCard formCalled={true} src={image} title={name} price={price} stock={stock} nodelete={true}/>
        <div className="menuAddForm__buttons">
          <div onClick={ClearForm}><Button type="ghost" config="discard" color='#ea7c69'>Discard Changes</Button></div>
          <div onClick={submit}><Button type="primary" config="save">Save</Button></div>
        </div>
      </div>
    </>
  )
}

export default MenuAddForm
