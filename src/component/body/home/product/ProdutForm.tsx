import React, { FunctionComponent, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, CardActions, Button } from '@material-ui/core';
const ProductForm: FunctionComponent<any> = ({ close, product, add }) => {
    const [id, setId] = useState(product.id);
    const [name, setName] = useState(product.name);
    const [quantity, setQuantity] = useState(product.quantity);
    const [description, setDescriptuon] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [img, setImg] = useState(product.img);
    return (
        <Card style={{ width: '600px' }}>
            <CardContent style={{ padding: '20px', width: '600px' }} >
                <TextField fullWidth value={name} label="Product Name" onChange={e => setName(e.target.value)} /><br />
                <TextField fullWidth value={description} label="Product Description" onChange={e => setDescriptuon(e.target.value)} /><br />
                <TextField fullWidth value={price} label="Product Price" onChange={e => setPrice(e.target.value)} /><br />
                {add ?
                    <><TextField fullWidth value={quantity} label="Product Quantity" onChange={e => setQuantity(e.target.value)} /><br /></> : null}
                <TextField fullWidth value={img} label="Product Image Url" onChange={e => setImg(e.target.value)} /><br />
            </CardContent>
            <CardActions>
                <Button onClick={() => { }}>Update</Button>
                <Button onClick={() => { close() }}>Cancel</Button>
            </CardActions>
        </Card >
    )
}
export default ProductForm;