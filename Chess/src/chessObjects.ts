import p5 from "p5";
import {pieceHeight, pieceWidth} from "./index.ts";

const removeExistingPositions = (yourPieces: Array<p5.Vector>,
                                                                    otherPieces: Array<p5.Vector>): Array<p5.Vector> => {
    let newArray: Array<p5.Vector>;
    for(let i: number = 0; i < yourPieces.length; i++) {
        let pieceInOtherPiece: boolean = false;
        for(let j: number = 0; j < otherPieces.length; j++) {
            if(yourPieces[i] == otherPieces[j]) {
                pieceInOtherPiece = true;
            }
        }
        if(pieceInOtherPiece) {
            newArray.push(yourPieces[i]);
        }
    }

    return newArray;
};

export class Pawn {
    playerNumber: number;
    image: p5.Image;
    position: p5.Vector;
    moved: boolean;

    public constructor(x: number, y: number, playerNumber: number) {
        this.playerNumber = playerNumber;
        this.image = new p5.Image(pieceWidth, pieceHeight);
        this.position = new p5.Vector(x, y);
        this.moved = false;
    }

    getMoves (yourPieces: Array<object>, otherPieces: Array<object>): Array<p5.Vector> {
        /*
            Returns a list of possible moves for a pon.
         */

        let listOfMoves: Array<p5.Vector> = [];
        listOfMoves.push(p5.Vector.add(this.position, new p5.Vector(0, 1)));
        if (!this.moved) listOfMoves.push(p5.Vector.add(this.position, new p5.Vector(0, 2)));
        for (let i: number = 0; i < otherPieces.length; i++) {  // Enable En passant.
            if (typeof(otherPieces[i]) != undefined) {
                // @ts-ignore
                let otherPieceLocation: p5.Vector = otherPieces[i].currentPosition()
                if (Math.abs(otherPieceLocation.y - this.position.y)) {
                    listOfMoves.push((otherPieceLocation.x - this.position.y) < 0 ?
                        p5.Vector.add(this.position, new p5.Vector(-1, 1)):
                        p5.Vector.add(this.position, new p5.Vector(1, 1))
                    );
                }
            }
        }

        listOfMoves = removeExistingPositions(listOfMoves, otherPieces);

        return listOfMoves;
    }

    currentPosition(): p5.Vector {
        return this.position;
    }

    makeMove(newPosition: p5.Vector): void {
        this.position = newPosition;
    }
}

export class Rook {
    playerNumber: number;
    image: p5.Image;
    position: p5.Vector;
    moved: boolean;

    public constructor(x: number, y: number, playerNumber: number) {
        this.playerNumber = playerNumber;
        this.image = new p5.Image(pieceWidth, pieceHeight);
        this.position = new p5.Vector(x, y);
        this.moved = false;
    }

    getMoves (yourPieces: Array<object>, otherPieces: Array<object>): Array<p5.Vector> {
        /*
            Returns a list of possible moves for a Rook.
         */

        let listOfMoves: Array<p5.Vector> = [];
        let verticalPlaces: Array<number> = [this.position.x];  // List of moves that share the same x.

        // Horizontal Position.
        for (let i: number = 0; i < yourPieces.length; i++) {  // Grabs all moves that share x position.
            // @ts-ignore
            let currentPiece: p5.Vector = yourPieces[i];
            if (currentPiece.x === this.position.x) {
                verticalPlaces.push(currentPiece.x)
            }
        }

        verticalPlaces = verticalPlaces.sort()  // Sorts our shared positions.
        let verticalIndex: number = verticalPlaces.indexOf(this.position.y)  // Gets position of the current index.
        // @ts-ignore
        // Gets indexes between a range of numbers.
        for (let i: number = verticalIndex - 1; i < verticalIndex + 1; i++) {
            if (i !== this.position.y) {
                listOfMoves.push(new p5.Vector(this.position.x, verticalPlaces[i]))
            }
        }

        // Vertical Positions.
        let horizontalPositions = [this.position.y]
        for (let i: number = 0; i < yourPieces.length; i++) {  // Grabs all moves that share x position.
            // @ts-ignore
            let currentPiece: p5.Vector = yourPieces[i];
            if (currentPiece.y === this.position.y) {
                horizontalPositions.push(currentPiece.y)
            }
        }

        horizontalPositions = horizontalPositions.sort();  // Sorts our shared positions.
        // Gets position of the current index.
        let horizontalIndex: number= horizontalPositions.indexOf(this.position.x);
        // @ts-ignore
        // Gets indexes between a range of numbers.
        for (let i: number = horizontalIndex - 1; i < horizontalIndex + 1; i++) {
            if (i !== this.position.y) {
                listOfMoves.push(new p5.Vector(horizontalPositions[i]));
            }
        }

        listOfMoves = removeExistingPositions(listOfMoves, otherPieces);

        return listOfMoves;
    }

    currentPosition(): p5.Vector {
        return this.position
    }

    makeMove(newPosition: p5.Vector): void {
        this.position = newPosition
    }
}

export class Knight {
    playerNumber: number;
    image: p5.Image;
    position: p5.Vector;
    moved: boolean;

    public constructor(x: number, y: number, playerNumber: number) {
        this.playerNumber = playerNumber;
        this.image = new p5.Image(pieceWidth, pieceHeight);
        this.position = new p5.Vector(x, y);
        this.moved = false;
    }

    getMoves (yourPieces: Array<object>, otherPieces: Array<object>): Array<p5.Vector> {
        /*
            Returns a list of possible moves for a pon.
         */
        let listOfMoves: Array<p5.Vector> = [];

        return listOfMoves
    }

    currentPosition(): p5.Vector {
        return this.position
    }

    makeMove(newPosition: p5.Vector): void {
        this.position = newPosition
    }
}

export class Bishop {
    playerNumber: number;
    image: p5.Image;
    position: p5.Vector;
    moved: boolean;

    public constructor(x: number, y: number, playerNumber: number) {
        this.playerNumber = playerNumber;
        this.image = new p5.Image(pieceWidth, pieceHeight);
        this.position = new p5.Vector(x, y);
        this.moved = false;
    }

    getMoves (yourPieces: Array<object>, otherPieces: Array<object>): Array<p5.Vector> {
        /*
            Returns a list of possible moves for a pon.
         */
        let listOfMoves: Array<p5.Vector> = [];

        return listOfMoves
    }

    currentPosition(): p5.Vector {
        return this.position
    }

    makeMove(newPosition: p5.Vector): void {
        this.position = newPosition
    }
}

export class Queen {
    playerNumber: number;
    image: p5.Image;
    position: p5.Vector;
    moved: boolean;

    public constructor(x: number, y: number, playerNumber: number) {
        this.playerNumber = playerNumber;
        this.image = new p5.Image(pieceWidth, pieceHeight);
        this.position = new p5.Vector(x, y);
        this.moved = false;
    }

    getMoves (yourPieces: Array<object>, otherPieces: Array<object>): Array<p5.Vector> {
        /*
            Returns a list of possible moves for a pon.
         */
        let listOfMoves: Array<p5.Vector> = [];

        return listOfMoves
    }

    currentPosition(): p5.Vector {
        return this.position
    }

    makeMove(newPosition: p5.Vector): void {
        this.position = newPosition
    }
}

export class King {
    playerNumber: number;
    image: p5.Image;
    position: p5.Vector;
    moved: boolean;

    public constructor(x: number, y: number, playerNumber: number) {
        this.playerNumber = playerNumber;
        this.image = new p5.Image(pieceWidth, pieceHeight);
        this.position = new p5.Vector(x, y);
        this.moved = false;
    }

    getMoves (yourPieces: Array<object>, otherPieces: Array<object>): Array<p5.Vector> {
        /*
            Returns a list of possible moves for a pon.
         */
        let listOfMoves: Array<p5.Vector> = [];

        return listOfMoves
    }

    currentPosition(): p5.Vector {
        return this.position
    }

    makeMove(newPosition: p5.Vector): void {
        this.position = newPosition
    }
}
