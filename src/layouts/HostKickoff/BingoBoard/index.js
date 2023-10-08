import React, { useState } from 'react'
import './index.scss' // You can create a CSS file for styling

const BingoBoard = () => {
    // Initialize an empty 5x5 array for the board
    const initialBoard = Array.from({ length: 5 }, () => Array(5).fill(''))

    // Use state to manage the board
    const [board, setBoard] = useState(initialBoard)

    // Function to handle input changes
    const handleInputChange = (rowIndex, colIndex, event) => {
        const updatedBoard = [...board]
        updatedBoard[rowIndex][colIndex] = event.target.value
        setBoard(updatedBoard)
    }

    return (
        <div
            className='bingo-board'
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '50px',
            }}
        >
            Insert the names here! DO NOT REFRESH THE PAGE. (Take screenshots of
            your board!)
            <table>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>
                                    <input
                                        type='text'
                                        value={cell}
                                        onChange={event =>
                                            handleInputChange(
                                                rowIndex,
                                                colIndex,
                                                event
                                            )
                                        }
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BingoBoard
