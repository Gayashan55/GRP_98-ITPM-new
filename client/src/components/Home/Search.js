import React from 'react';

function Search() {
    return(
        <div>
            <form>
                <div className='search-wrapper'>
                <div>
                    <input type='text' className='form-control' placeholder='Search'/>
                </div>
                <i class="fa fa-search"></i>
                </div>
            </form>
        </div>
    )
}

export default Search;