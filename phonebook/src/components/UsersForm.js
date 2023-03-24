import { Component } from "react";

export default class UsersForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.add(this.state.name, this.state.address)
        this.setState({ name: '', address: '' })
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" name="name" onChange={this.handleInputChange} value={this.state.name} />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                    <textarea className="form-control" id="address" name="address" rows="2" onChange={this.handleInputChange} value={this.state.address}></textarea>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
        )
    }
}