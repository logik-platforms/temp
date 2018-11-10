import React, { Components } from "react";
import "./Form.css";

class Form extends Component {

    state = {
        firstName = "",
        lastName = ""
    };

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
}
};

handleFormSubmit = event => {
    event.preventDefault();

    alert(`Thank you ${this.state.firstName} ${this.state.lastName}, your message has been sent!`);
    this.set.state({
        firstName = "",
        lastName = ""
    });
};

render() {

    return (
        <div>
            
        </div>
    )
}

export default Form;