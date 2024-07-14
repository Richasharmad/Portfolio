import React, { Component } from 'react';
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

class NavbarCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNav: false,
      width: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth, openNav: false });
  }

  render() {
    const { openNav, width } = this.state;
    console.log("inside nav")

    return (
      <Navbar className='nav top-0 bg-transparent text-white mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4 border-none w-full backdrop-blur-sm bg-black w-100%'>
        <div className='container mx-auto flex items-center justify-between text-blue-gray-900 lg:px-40 '>
          <Link to='/' className='mr-4 cursor-pointer py-1.5 font-bold text-xl'>
            Richa
          </Link>
          {width >= 960 ? (
            <div>
              <ul className='mt-2 mb-4 flex flex-col gap-2 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/' className='flex items-center'>
                    Home
                  </Link>
                </Typography>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/skills' className='flex items-center'>
                    Skills
                  </Link>
                </Typography>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/projects' className='flex items-center'>
                    Projects
                  </Link>
                </Typography>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/contact' className='flex items-center'>
                    Contact
                  </Link>
                </Typography>
              </ul>
            </div>
          ) : (
            <IconButton
              variant='text'
              className='ml-auto mr-5 mb-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => this.setState({ openNav: !openNav })}>
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </IconButton>
          )}
        </div>
        {width < 960 && (
          <MobileNav open={openNav}>
            <div className='container mx-auto'>
              <ul className='mt-2 mb-4 flex flex-col gap-2 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/' className='flex items-center'>
                    Home
                  </Link>
                </Typography>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/skills' className='flex items-center'>
                    Skills
                  </Link>
                </Typography>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/projects' className='flex items-center'>
                    Projects
                  </Link>
                </Typography>
                <Typography
                  as='li'
                  variant='small'
                  color='blue-gray'
                  className='flex items-center gap-x-2 p-1 font-medium'>
                  <Link to='/contact' className='flex items-center'>
                    Contact
                  </Link>
                </Typography>
              </ul>
            </div>
          </MobileNav>
        )}
      </Navbar>
    );
  }
}

export default NavbarCustom;
