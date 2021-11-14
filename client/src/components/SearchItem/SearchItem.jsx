import React from 'react'
import './SearchItem.scss'
import { useDispatch } from 'react-redux';
import { fetchDish } from '../../redux/Home/home.actions';
const SearchItem = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className="searchitem" onClick={()=>dispatch(fetchDish(item.title))}>
            {item.title}
        </div>
    )
}

export default SearchItem
