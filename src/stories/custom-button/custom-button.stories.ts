import type { Meta, StoryObj } from '@storybook/react';

import CustomButton from './custom-button';


const meta = {
    title: 'Custom-Button/Primary',
    component: CustomButton,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof CustomButton>;


export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
    args: {
        primary: true,
        type: 'button',
        text: 'Custom Button',
        handleClick: (event: React.MouseEvent<HTMLButtonElement>) => {
            // Handle click logic here
            console.log('Button clicked');
        },
    },
};


export const Secondary: Story = {
    args: {
        primary: false,
        type: 'button',
        text: 'Secondary Button',
    },
};
