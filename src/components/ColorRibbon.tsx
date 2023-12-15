import React from 'react';
import styles from '@/styles/editor.module.css';
interface ColorRibbonProps {
    onChange: (color: string) => void;
}

const PREDEFINED_COLORS = [
    '#000000',
    '#808080',
    '#800000',
    '#808000',
    '#008000',
    '#008080',
    '#000080',
    '#800080',
    '#ff0000',
    '#00ff00',
    '#ffff00',
    '#0000ff',
    '#ff00ff',
    '#00ffff',
]

const ColorRibbon: React.FC<ColorRibbonProps> = ({ onChange }) => {

    return (
        <div className={styles.colorRibbon}>
            {PREDEFINED_COLORS.map((predefinedColor) => (
                <div
                    className='cursor-pointer border-1 border-black'
                    onClick={() => onChange(predefinedColor)}
                    key={predefinedColor}
                    style={{
                        backgroundColor: predefinedColor,
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        margin: '0 5px',
                        display: 'inline-block',
                    }}
                />
            ))}
        </div>
    );
};

export default ColorRibbon;
