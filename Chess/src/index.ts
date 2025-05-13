import p5 from 'p5';
import {Pawn, Rook, Knight, Bishop, King, Queen} from "./chessObjects.ts";

export let pieceWidth: number;
export let pieceHeight: number;
let boardSize: number = 8;
let textures: p5.Image;

const sketch = (p: p5): void => {
    let aQueen: Queen = new Queen(0, 0, 0);
    let textureAtlas: p5.Image;

    p.preload = (): void => {
        textureAtlas = p5.prototype.loadImage("images/chessPieces.png");
    }

    p.setup = (): void => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = (): void => {
        p.background(255);
        p.fill(0);
        p.image(textureAtlas, 0, 0);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };

    p.windowResized = (): void => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

const mySketch: p5 = new p5(sketch);
