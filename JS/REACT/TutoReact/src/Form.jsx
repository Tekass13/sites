function Form({state, dispatch}) {
    const handleChange = (event) => {
        const { value, name } = event.target;
        dispatch({type: 'formInputChange', name, value})
    };


    return (
        <>
            <form>
                <label>Color</label>
                <input name="color" onChange={handleChange} value={square.color} type="text"/>
                <label>Width</label>
                <input name="width" onChange={handleChange} value={square.width} type="text"/>
                <label>Height</label>
                <input name="height" onChange={handleChange} value={square.height} type="text"/>
                <label>Border Top</label>
                <input name="borderTop" onChange={handleChange} value={square.borderTop} type="text"/>
                <label>Border Right</label>
                <input name="borderRight" onChange={handleChange} value={square.borderRight} type="text"/>
                <label>Border Bottom</label>
                <input name="borderBottom" onChange={handleChange} value={square.borderBottom} type="text"/>
                <label>Border Left</label>
                <input name="borderLeft" onChange={handleChange} value={square.borderLeft} type="text"/>
                <button type="submit">Valider</button>
            </form>
        </>
    )
}

export default Form