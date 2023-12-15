import React from 'react';


interface NavbarProps {
    routetoPreview: () => void;
    editMode:boolean;
}

const Navbar:React.FC<NavbarProps> = ({routetoPreview,editMode}) => {
    return (
        <nav className="bg-gray-100 text-black h-14 w-screen flex flex-row justify-between items-center px-8">
            <ul className="flex justify-center space-x-4">
                <li>Currently in {!editMode?'Preview':'Edit'} Mode</li>
            </ul>
            <ul className="flex justify-end space-x-4 cursor-pointer transition-all">
                <li
                className='bg-slate-900 text-white py-2 px-3 hover:bg-slate-800 rounded'
                onClick={routetoPreview}
                >
                    {editMode?'Preview':'Edit'}
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
