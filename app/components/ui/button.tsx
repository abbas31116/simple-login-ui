interface ICustomButton {
    size: number;
    color: string;
    title: string;
}

 function CustomButton({ color, size, title }: ICustomButton) {
    return <button className={`${color} ${size} p-5`}>
        {title}
    </button>
}


export default CustomButton