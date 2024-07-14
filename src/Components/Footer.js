import React, { Component } from 'react';
import {
    FaHome,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaWhatsapp,
  } from 'react-icons/fa';
class Footer extends Component {
  
    render() {
        return (
            <div className='bg-black text-white sm:flex justify-center pt-5 items-center'>
                <ul>
                    <li className='flex justify-center space-x-2 items-center sm:justify-start m-4'>
                        <FaHome />
                        <p>Bangalore, Karnataka</p>
                    </li>
                    <li className='flex justify-center space-x-2 items-center sm:justify-start m-4'>
                        <FaPhone />
                        <p>7975906911</p>
                    </li>
                    <li className='flex justify-center space-x-2 items-center sm:justify-start m-4'>
                        <FaMailBulk />
                        <p>richadsharma1998@gmail.com</p>
                    </li>
                </ul>
                <ul className='py-5'>
                    <li className='py-2 mx-12'>
                        <h3 className='font-bold sm:text-start  py-1'>About me</h3>
                        <p className='py-1'>I am Richa, I specialize in creating responsive and engaging user interfaces as a frontend developer</p>
                        
                        <div>
                            <ul>
                                <li className='flex space-x-4 pt-2'>
                                   <a href="https://www.linkedin.com/in/richa-sharma-09678a16a/"><FaLinkedin /></a>
                                   <a href="https://Wa.me/+917975906911"><FaWhatsapp /></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        );
    }
}
export default Footer;


