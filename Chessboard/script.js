/********************************************************
*														*
*	Basic Chessboard									*
*	Requires index.html & style.css						*
*	Author: Rob Thompson								*
*														*
********************************************************/


//	Global Variables used to specify the pieces and legal moves.

var notedPiece = "";
var notedLegalMoves = [];


//	Functions

function checkPieceType(clicked_id) {
	try {
		var selSquare = document.getElementById(clicked_id).children;
		var childClass = selSquare[0].className;
		var childID = selSquare[0].id;
	} catch (e) {					// This allows the script to continue running; if square is blank, selSquare[0] is undefined and stops running remaining script.
//		console.dir(e);
	}
	
	return [childClass, childID];
}


function legalMoves(currentLoc, pieceID) {

	switch(pieceID) {
		case "rook":
//			console.dir("Got to rook!");
			notedLegalMoves.push(currentLoc,
			
			// Up
			currentLoc + 20,
			currentLoc + 40,
			currentLoc + 60,
			currentLoc + 80,
			currentLoc + 100,
			currentLoc + 120,
			currentLoc + 140,
			
			// Down
			currentLoc - 20,
			currentLoc - 40,
			currentLoc - 60,
			currentLoc - 80,
			currentLoc - 100,
			currentLoc - 120,
			currentLoc - 140,
			
			// Left
			currentLoc + 1,
			currentLoc + 2,
			currentLoc + 3,
			currentLoc + 4,
			currentLoc + 5,
			currentLoc + 6,
			currentLoc + 7,
			
			// Right
			currentLoc - 1,
			currentLoc - 2,
			currentLoc - 3,
			currentLoc - 4,
			currentLoc - 5,
			currentLoc - 6,
			currentLoc - 7);
				
			break;
			
			
		case "knight":
//			console.dir("Got to knight!");
			notedLegalMoves.push(currentLoc,
			
			// Up-right
			currentLoc + 41,
			currentLoc + 22,

			// Up-left
			currentLoc + 39,
			currentLoc + 18,
			
			// Down-right
			currentLoc - 41,
			currentLoc - 22,
			
			
			// Down-left
			currentLoc - 39,
			currentLoc - 18);
			
			break;
			
			
		case "bishop":
//			console.dir("Got to bishop!");
			notedLegalMoves.push(currentLoc,
			
			// Up-right
			currentLoc + 21,
			currentLoc + 42,
			currentLoc + 63,
			currentLoc + 84,
			currentLoc + 105,
			currentLoc + 126,
			currentLoc + 147,
			
			// Down-right
			currentLoc - 21,
			currentLoc - 42,
			currentLoc - 63,
			currentLoc - 84,
			currentLoc - 105,
			currentLoc - 126,
			currentLoc - 147,
			
			// Up-left
			currentLoc + 19,
			currentLoc + 38,
			currentLoc + 57,
			currentLoc + 76,
			currentLoc + 95,
			currentLoc + 114,
			currentLoc + 133,
			
			// Down-left
			currentLoc - 19, 
			currentLoc - 38,
			currentLoc - 57,
			currentLoc - 76,
			currentLoc - 95,
			currentLoc - 114,
			currentLoc - 133);
			
			break;
			
			
		case "king":
//			console.dir("Got to king!");
			notedLegalMoves.push(currentLoc,
			
			// Down
			currentLoc - 20,
			
			// Up
			currentLoc + 20,

			// Left
			currentLoc + 1,
			
			// Right
			currentLoc - 1,

			// Up-right
			currentLoc + 21,

			// Up-left
			currentLoc + 19,
			
			// Down-right
			currentLoc - 21,			
			
			// Down-left
			currentLoc - 19);
			
			break;
			
			
		case "queen":
//			console.dir("Got to queen!");
			notedLegalMoves.push(currentLoc,
			
			// Up
			currentLoc + 20,
			currentLoc + 40,
			currentLoc + 60,
			currentLoc + 80,
			currentLoc + 100,
			currentLoc + 120,
			currentLoc + 140,
			
			// Down
			currentLoc - 20,
			currentLoc - 40,
			currentLoc - 60,
			currentLoc - 80,
			currentLoc - 100,
			currentLoc - 120,
			currentLoc - 140,
			
			// Left
			currentLoc + 1,
			currentLoc + 2,
			currentLoc + 3,
			currentLoc + 4,
			currentLoc + 5,
			currentLoc + 6,
			currentLoc + 7,
			
			// Right
			currentLoc - 1,
			currentLoc - 2,
			currentLoc - 3,
			currentLoc - 4,
			currentLoc - 5,
			currentLoc - 6,
			currentLoc - 7,			
			
			// Up-right
			currentLoc + 21,
			currentLoc + 42,
			currentLoc + 63,
			currentLoc + 84,
			currentLoc + 105,
			currentLoc + 126,
			currentLoc + 147,
			
			// Down-right
			currentLoc - 21,
			currentLoc - 42,
			currentLoc - 63,
			currentLoc - 84,
			currentLoc - 105,
			currentLoc - 126,
			currentLoc - 147,
			
			// Up-left
			currentLoc + 19,
			currentLoc + 38,
			currentLoc + 57,
			currentLoc + 76,
			currentLoc + 95,
			currentLoc + 114,
			currentLoc + 133,
			
			// Down-left
			currentLoc - 19, 
			currentLoc - 38,
			currentLoc - 57,
			currentLoc - 76,
			currentLoc - 95,
			currentLoc - 114,
			currentLoc - 133);
			
			break;
			
			
		case "pawn":
//			console.dir("Got to pawn!");
			notedLegalMoves.push(currentLoc,
			
			// Down
			currentLoc - 20,
			
			// Up
			currentLoc + 20);
			
			break;
			
	}

}


function placePiece(clicked_id) {

	var selectedSquare = document.getElementById(clicked_id);	
	var selectedSquareID = selectedSquare.id;

	if (selectedSquare.childNodes.length >= 1) { //WTF WHY DOES THIS WORK? Should have 0 children; registers as having 1 by default
	
		while (selectedSquare.firstChild) {		// Checks length of array of child nodes within the selected square on the board, if greater than or equal to 1, removes piece from square.
			selectedSquare.removeChild(selectedSquare.firstChild);	
		}
	} else {
		switch(notedPiece) {
			
			// White Pieces
			case "wRook":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Wrook.png");
				node.setAttribute("id", "rook");
				node.setAttribute("class", "wRook");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
								
				break;				
				
			case "wKnight":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Wknight.png");
				node.setAttribute("id", "knight");
				node.setAttribute("class", "wKnight");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;				
				
			case "wBishop":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					
	
				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Wbishop.png");
				node.setAttribute("id", "bishop");
				node.setAttribute("class", "wBishop");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;				
				
			case "wKing":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Wking.png");
				node.setAttribute("id", "king");
				node.setAttribute("class", "wKing");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
			case "wQueen":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Wqueen.png");
				node.setAttribute("id", "queen");
				node.setAttribute("class", "wQueen");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
			case "wPawn":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Wpawn.png");
				node.setAttribute("id", "pawn");
				node.setAttribute("class", "wPawn");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
			
			// Black Pieces
			case "bRook":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Brook.png");
				node.setAttribute("id", "rook");
				node.setAttribute("class", "bRook");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
			case "bKnight":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Bknight.png");
				node.setAttribute("id", "knight");
				node.setAttribute("class", "bKnight");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
				
			case "bBishop":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Bbishop.png");
				node.setAttribute("id", "bishop");
				node.setAttribute("class", "bBishop");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
				
			case "bKing":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Bking.png");
				node.setAttribute("id", "king");
				node.setAttribute("class", "bKing");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
				
			case "bQueen":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Bqueen.png");
				node.setAttribute("id", "queen");
				node.setAttribute("class", "bQueen");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
				
				
			case "bPawn":
				if (notedLegalMoves.includes(selectedSquareID)) {
//					alert("Legal move.");
				} else {
					alert("NOT legal move.");
					return;
				}					

				var node = document.createElement("IMG");
				node.setAttribute("src", "pieces\\Bpawn.png");
				node.setAttribute("id", "pawn");
				node.setAttribute("class", "bPawn");
				selectedSquare.appendChild(node);
				
				notedPiece = "";
				
				break;
		}
	
	}
	
	notedLegalMoves = notedLegalMoves.map(String);
	
	if (!(notedPiece)) {												//
																		//	This nonsense is where the magic happens.
		console.dir("is null");											//
		for (index = notedLegalMoves.length; index != 0; index--) {		//	Checks if notedPiece is null, if it is, sets index to length of array,
			try {														//	loops WHILE INDEX NOT-EQUAL-TO 0 and subtracts from index, pops array
				notedLegalMoves.pop();									//	elements. This block limits pieces abilities to move based on their location
																		//	and the type of piece they are. This is in the placePiece() function because
			} catch (f) {												//	the case statement sets notedPiece to null after placing a piece, _which is when
//				console.dir(f);											//	the array needs to be emptied._ The array is originally defined in the legalMoves()
			}															//	function.
		}																//
	
	} else {
		console.dir("is NOT null");
	}

}


function play(clicked_id) {
	
	var currentLoc = Number(clicked_id);
	var pieceType = checkPieceType(clicked_id)[0];	// Grabs the type of the piece by checking the class name of the image.
	var pieceID = checkPieceType(clicked_id)[1];

	switch(pieceType) {
		case "wRook":
			notedPiece = "wRook";
			legalMoves(currentLoc, pieceID); //	function to define rules based on currentLoc and pieceType
			
			break;
				
		case "wKnight":
			notedPiece = "wKnight";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "wBishop":
			notedPiece = "wBishop";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "wKing":
			notedPiece = "wKing";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "wQueen":
			notedPiece = "wQueen";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "wPawn":
			notedPiece = "wPawn";
			legalMoves(currentLoc, pieceID);
			
			break;
				
			
			// Black Pieces
		case "bRook":
			notedPiece = "bRook";
			legalMoves(currentLoc, pieceID);
			
			break;
				
		case "bKnight":
			notedPiece = "bKnight";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "bBishop":
			notedPiece = "bBishop";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "bKing":
			notedPiece = "bKing";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "bQueen":
			notedPiece = "bQueen";
			legalMoves(currentLoc, pieceID);
			
			break;
				
				
		case "bPawn":
			notedPiece = "bPawn";
			legalMoves(currentLoc, pieceID);
			
			break;

		default:

			break;
	}

	placePiece(clicked_id);
}



