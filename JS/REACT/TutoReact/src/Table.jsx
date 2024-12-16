function Table({square}) {

    return (
        <>
        <table>
            <thead>
            <th>Color</th>
            <th>Width</th>
            <th>Height</th>
            <th>Border Top</th>
            <th>Border Right</th>
            <th>Border Bottom</th>
            <th>Border Left</th>       
            </thead>
            <tbody>
                {square.map((style)=> {
                    <tr>
                        <td>{style.color}</td>
                        <td>{style.width}</td>
                        <td>{style.height}</td>
                        <td>{style.borderTop}</td>
                        <td>{style.borderRight}</td>
                        <td>{style.borderBottom}</td>
                        <td>{style.borderLeft}</td>
                    </tr>
                    })
                }
            </tbody>
        </table>
        <div className="square" style={{
        color: style.color,
        width: style.width,
        height: style.height,
        borderTop: style.borderTop,
        borderRight: style.borderRight,
        borderBottom: style.borderBottom,
        bordetLeft: style.bordetLeft
        }}>      
        </div>
        </>
    );
};

export default Table