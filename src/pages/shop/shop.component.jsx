import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        // const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    this.state.collection.map(({id, ...otherCollection}) => (
                        <CollectionPreview key={id} {...otherCollection} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;