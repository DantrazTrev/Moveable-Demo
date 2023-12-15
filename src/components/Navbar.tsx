import React from 'react';


interface NavbarProps {
    toggleEditor: () => void;
    editMode:boolean;
}

const Navbar:React.FC<NavbarProps> = ({toggleEditor,editMode}) => {
    return (
        <nav className="bg-gray-100 text-black h-14 flex flex-row justify-between items-center px-8">
            <ul className="flex justify-center space-x-4">
                <li>Demo Dan</li>
            </ul>
            <ul className="flex justify-end space-x-4 cursor-pointer hover:underline">
                <li
                onClick={toggleEditor}
                >
                    {editMode?'Preview':'Edit'}
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
