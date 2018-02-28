index.html
	Primary organization document of the webpage.

style.css
	Stylesheet of the webpage.

script.js
	Clean JS document providing functionality of the page with relevant comments.

debug.js
	Dirty JS document containing all the lines of debugging used to solve issues

NOTES:
	Currently, unless a square has had a piece present within it before, it needs to be double-clicked when moving a piece to it.
	If a square has had a piece present within it before, it only needs to be clicked once when attempting to move a piece to it.

	The above two statements are redundant, and explain the same thing in different ways. Good night.

TODO:
	Somehow find way to make pieces capturable by selecting an occupied square. Possible solution: differentiate
	between piece colors and make it acceptable to place a piece if occupying piece is of opposite color.

	Apply Line-of-sight rule.

Tested in FF 58.0.2 (64-bit)

Bug fixes:
	-Queen now properly able to land on black squares.
	-Fixed an issue with array logic where it wasn't completely erasing the legalMoves array. This cause other pieces legal moves
	to persist.
	-All pieces now able to be replaced on their current location upon selection.