import { FaUserCircle } from 'react-icons/fa';
import { TbGridDots } from "react-icons/tb";
import Logo from './Logo';
import Nav from './Nav';
import { Button } from '../ui/button';

const Header = () => {
    return (
        <header className="w-full py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Logo />
                    <Nav />
                </div>

                { /* Action Buttons */ }
                <div className="flex items-center space-x-3">
                    <Button variant="grayTrans" className="px-4 py-3 ">
                        List your home
                    </Button>
                    <Button variant="grayTrans" className="px-4 py-3 ">
                        Sign Up
                    </Button>
                    <div className="flex items-center justify-center space-x-2 rounded-full bg-white px-3 py-2 shadow">
                        <TbGridDots className="text-gray-600 text-xl" />
                        <FaUserCircle className="text-green-600 text-3xl " />
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;
