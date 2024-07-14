import React, { Component } from 'react';
import emailjs from '@emailjs/browser';


class Contact extends Component {
    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
       
        this.state = {
            form_name: '',
            form_email: '',
            message: ''
        };
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({ [name]: value });
    }

    handelSubmit(event) {
        event.preventDefault()
        emailjs.sendForm(
            'service_qnlakdq',
            'template_b5a1th3',
            this.formRef.current,
            'gTYlhLJMOHyYaf2Kq'
        ).then (
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
                alert("An error occured. Please try again later")
            }
        );
    }

    handleSubmitHandler() {
        alert('Message Sent ✅');
    };

    render() {
        console.log("inside contact")
        return (

            <div>
                <div className='text-white h-svh bg-img '><img src='https://actis.co.in/wp-content/uploads/2018/03/sales-contact-bg-2.jpg' alt="" style={{ backgroundSize: 'cover', position: 'relative', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100svh' }}></img></div>
                <div className='text-white text-xl flex justify-center items-center top-0 absolute' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%', width: '100%', position: 'absolute', top: '0' }}>
                    <form
                        data-aos='zoom-out'
                        data-aos-duration='1000'
                        data-aos-once='true'
                        onSubmit={this.handelSubmit}
                        ref={this.formRef}
                    >
                        <h1 className='text-4xl font-bold'>Contact Me</h1>
                        <div>
                            <input className='border bg-transparent rounded-lg m-3 px-5 py-2' type="text" name="form_name" value={this.state.form_name} onChange={this.handleChange} placeholder='Name..' />
                        </div>
                        <div>
                            <input className='border bg-transparent rounded-lg m-3 px-5 py-2' type="text" name="form_email" value={this.state.form_email} onChange={this.handleChange} placeholder='Email...' />
                        </div>
                        <div>
                            <textarea className='w-80 border bg-transparent rounded-lg m-3 px-5 py-2' type="text" name="message" value={this.state.message} onChange={this.handleChange} placeholder='Message...' />
                        </div>
                        <input
                            className='bg-green-500 p-2 px-3 rounded-lg text-xl'
                            type='submit'
                            value='Send'
                            onClick={this.handleSubmitHandler}
                        />
                    </form>
                </div>
            </div>
        );
    }
};
export default Contact;