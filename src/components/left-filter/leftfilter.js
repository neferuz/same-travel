import React, {useState} from 'react';
import './leftfilter.css';
import { ImSearch} from 'react-icons/im';
import { GrFormClose} from 'react-icons/gr';
import { MdKeyboardArrowRight} from 'react-icons/md';
import { Rate } from 'antd';

const LeftFilter = () => {
    const [filterShow, setfilterShow] = useState(false);

    const filterShowStyle = filterShow ? "left-filter-item-wrapper filter-phone filter-phone-active" : "left-filter-item-wrapper filter-phone";


    return(
        <div className='leftfilter'>
            <div className='leftfilter-media' onClick={() => setfilterShow(!filterShow)}>
                <h5>Filter</h5>
                <MdKeyboardArrowRight/>
            </div>
            {/* <div className='leftfilter-media'>
                <h5>Filter</h5>
                <h5>Cleat</h5>
                <GrFormClose/>
                <MdKeyboardArrowRight/>
            </div> */}
            <div className='left-filter-item-wrapper filter-desktop'>
                <div className='leftfilter-wrapper'>
                    <h3>Search location or tours</h3>
                    <div className='leftfilter-item leftfilter-item-serch'>
                        <input placeholder='Search' className='filter-search'/>
                        <ImSearch className='search-icon'/>
                    </div>
                </div>
                <div className='leftfilter-wrapper'>
                    <h3>Hotel star rating</h3>
                    <div className='leftfilter-item'>
                        <Rate allowHalf defaultValue={5} />
                    </div>
                </div>
            </div>
            <div className={filterShowStyle}>
                <div className='leftfilter-media-open' >
                    <h5>Filter</h5>
                    <h5>Clear</h5>
                    <GrFormClose onClick={() => setfilterShow(!filterShow)}/>
                </div>
                <div className='leftfilter-wrapper'>
                    <h3>Search location or tours</h3>
                    <div className='leftfilter-item leftfilter-item-serch'>
                        <input placeholder='Search' className='filter-search'/>
                        <ImSearch className='search-icon'/>
                    </div>
                </div>
                <div className='leftfilter-wrapper'>
                    <h3>Hotel star rating</h3>
                    <div className='leftfilter-item'>
                        <Rate allowHalf defaultValue={5} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftFilter;