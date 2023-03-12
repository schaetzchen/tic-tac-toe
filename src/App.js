import './sass/style.css'
import {useState, useEffect} from 'react';
import {GameCell} from "./components/GameCell";
import {GameBtn} from "./components/GameBtn";
import {GameInfo} from "./components/GameInfo";

function App() {

    const [player, setPlayer] = useState("X");
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]);
    const [winner, setWinner] = useState("");

    const handleCellClick = (row, column) => {
        if (board[row][column] !== "") {
            return;
        }
        setBoard(prev => {
            const newArray = prev.slice();
            newArray[row][column] = player;
            return newArray;
        });
        setPlayer(player === "X" ? "O" : "X");
    }

    useEffect(() => {
        if (winner === "") {
            setWinner(checkWinner());
        }
    });

    const checkGameOver = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === "") {
                    return false;
                }
            }
        }
        return true;
    }

    const constructMessage = () => {
        if (winner !== "")
            return `Winner is ${winner}`;
        if (checkGameOver())
            return "Game over"
        return `Current player: ${player}`;
    }

    const checkWinner = () => {
        if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== "")
            return board[0][0];
        if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] !== "")
            return board[1][0];
        if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0] !== "")
            return board[2][0];
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== "")
            return board[0][0];
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== "")
            return board[0][2];
        if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] !== "")
            return board[0][0];
        if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1] !== "")
            return board[0][1];
        if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2] !== "")
            return board[0][2];

        return "";
    }

    const handleResetClick = () => {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
        setPlayer("X");
        setWinner("");
    }

    return (
        <div className="game">
            <h1 className="game__title">
                Tic Tac Toe
            </h1>
            <div className="game__inner">
                <div className="game__board">

                    {board.map((row, i) => {
                        return row.map((col, j) => {
                            return <GameCell
                                key={i.toString() + j.toString()}
                                row={i}
                                column={j}
                                value={col}
                                onClick={handleCellClick}
                                isActive={winner === ""}
                            />;
                        })
                    })}

                </div>
                <div className="game__controls">
                    <GameInfo
                        value={constructMessage()}
                    />
                    <GameBtn
                        onClick={handleResetClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
