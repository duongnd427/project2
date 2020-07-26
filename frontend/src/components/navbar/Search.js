import React, { Component } from 'react';

class Search extends Component {
    searching = event => this.props.onSearching(event.target.value);
    render() {
        return (
            <form className='col-3'>
                <input onChange={this.searching} className='form-control' type='text' placeholder='Tìm kiếm' />
            </form>
        );
    }
}

export default Search;