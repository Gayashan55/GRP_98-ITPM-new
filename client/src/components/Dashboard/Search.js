import React from 'react';
import {BsSearch} from 'react-icons/bs';

function Search() {
    return(
        <div>
            <form>
                <div className='search-wrapper'>
                <button type="submit"><i class="fa fa-search"></i></button>
                <div>
                    <input type='text' className='form-control' placeholder='Search'/>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Search;