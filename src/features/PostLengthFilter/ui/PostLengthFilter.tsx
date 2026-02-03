import { useState, type ChangeEvent } from "react";

interface ISetMinLenght {
    setMinLength: (value: number) => void;
}

const PostLengthFilter = ({ setMinLength }: ISetMinLenght) => {

    const [length, setLength] = useState<number>(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setLength(value);
        setMinLength(value);
    }

    return (
        <>
            <label htmlFor="length-filter">Минимальная длина заголовка для поста: {length}  Установить:</label>
            <input id="length-filter" value={length} onChange={onChangeHandler}></input>
        </>
    )
}

export default PostLengthFilter;