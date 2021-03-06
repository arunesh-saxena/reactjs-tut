import React, {Component} from 'react';
import {connect} from 'react-redux';

import './MenuUploadContainer.css';

import {Header} from '../../components/restro/Header';
import {CONSTANTS} from '../../constants';

class MenuUploadContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            itemName: '',
            description: '',
            imageURL: '',
            price: '',
            unit: '',
            currency: '',
            formErrors: {
                username: '',
                password: ''
            },
            isValid: {
                username: false,
                password: false
            },
            formValid: true,
            touch: {
                username: false,
                password: false
            }
        }
    }
    componentWillMount() {}

    uploadMenu(event) {
        event.preventDefault();
        let menuData = {
            itemName: this.state.itemName,
            description: this.state.description,
            imageURL: this.state.imageURL,
            price: this.state.price,
            unit: this.state.unit,
            currency: this.state.currency
        };
        let data = new FormData();
        data.append('itemName', menuData.itemName);
        data.append('description', menuData.description);
        data.append('price', menuData.price);
        data.append('unit', menuData.unit);
        data.append('currency', menuData.currency); 
        data.append('imageURL', this.fileInput.files[0]);
        // menuData = JSON.stringify(menuData);
        fetch(CONSTANTS.api.restro.addMenu, {
            method: 'POST',
            body: data
        }).then((res) => res.json()).then((res) => {
            console.log(res);
            if(res.success){
                alert('Item add successfully.');
                this.resetForm();
            }else{
                alert('Something went wrong!!');
            }
        }).catch(error => {
            console.error(error);
        });

    }
    resetForm = () =>{
        this.setState({
            itemName: '',
            description: '',
            imageURL: '',
            price: '',
            unit: '',
            currency: '',
            formErrors: {
                username: '',
                password: ''
            },
            isValid: {
                username: false,
                password: false
            },
            formValid: true,
            touch: {
                username: false,
                password: false
            }
        })
    }
    handleFileUpload({ file }) {
        const file1 = file;
        console.log(file1)
      }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
            touch: {
                [name]: true
            }
        }, () => {
            // this.validateField(name, value);
        });
    }

    render = () => {
        let userNameError = (this.state.touch.username && !this.state.isValid.username)
            ? <div className="alert alert-danger">
                    {this.state.formErrors.username}
                </div>
            : '';
        return (
            <div>
                <div className="container">
                    <Header title='Add Menu Item'/>
                    <div className='body-padding-top'>
                        <div className="row">
                            <div className="col-lg-12">
                                <form
                                    id="login-form"
                                    role="form"
                                    style={{
                                    display: "block"
                                }}
                                    onSubmit={(event) => {
                                    this.uploadMenu(event);
                                }}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="itemName"
                                            id="itemName"
                                            tabIndex="1"
                                            className="form-control"
                                            placeholder="Item Name"
                                            value={this.state.itemName}
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                        {userNameError}
                                    </div>
                                    <div className="form-group">
                                    <textarea
                                        name="description"
                                        id="description"
                                        tabIndex="2"
                                        className="form-control"
                                        rows="6"
                                        placeholder="Description"
                                        onChange={(event) => this.handleUserInput(event)}
                                        value={this.state.description}/>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="file"
                                            name="imageURL"
                                            id="imageURL"
                                            tabIndex="3"
                                            className="form-control"
                                            placeholder="imageURL"
                                            ref={(file) => { this.fileInput = file; }}
                                            onChange={this.handleUserInput}></input>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            tabIndex="4"
                                            className="form-control"
                                            placeholder="Price"
                                            value={this.state.price}
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="unit"
                                            id="unit"
                                            tabIndex="5"
                                            className="form-control"
                                            placeholder="Unit"
                                            value={this.state.unit}
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="currency"
                                            id="currency"
                                            tabIndex="6"
                                            className="form-control"
                                            placeholder="Currency"
                                            value={this.state.currency}
                                            onChange={(event) => this.handleUserInput(event)}></input>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-4 offset-md-4">
                                                <input
                                                    type="submit"
                                                    name="menu-submit"
                                                    id="menu-submit"
                                                    tabIndex="7"
                                                    className="form-control btn btn-primary btn-login"
                                                    value="Upload Menu"
                                                    disabled={!this.state.formValid}></input>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({restro: state.restro});
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(MenuUploadContainer);
