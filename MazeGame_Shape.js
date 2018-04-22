//This is getting the specific ID from the html
var canvas = document.getElementById('MazeGame_Shape');
//This is setting the context of the canvas to be 2D
var context = canvas.getContext('2d');
//This sets the position of the shape by getting it's starting position
var cHeight = canvas.height;
var cWidth = canvas.width;

// define game blocks
var blockDetails = [
  {
		x: 40,
		y: -2,
		width: 600,
    height: 8,
		color: 'blue',
	},
  {
    x:555,
    y:6,
    width:5,
    height:600,
    color:'blue',
  },
  {
    x: 0,
    y: 545,
    width: 510,
    height: 5,
    color: 'blue',
  },
  {
    x:0,
    y:10,
    width:5,
    height:600,
    color:'blue'
  },
  {
		x: 29,
		y: 24,
		width: 55,
    height: 5,
		color: 'red'
	},
  {
		x: 110,
		y: 24,
		width: 30,
    height: 5,
		color: 'red'
	},
  {
		x: 110,
		y: 5,
		width: 5,
    height: 20,
		color: 'red'
	},
  {
		x: 165,
		y: 5,
		width: 5,
    height: 25,
		color: 'red'
	},
  {
		x: 192,
		y: 5,
		width: 5,
    height: 79,
		color: 'red'
	},
  {
		x: 220,
		y: 5,
		width: 5,
    height: 79,
		color: 'red'
	},
  {
		x: 220,
		y: 50,
		width: 30,
    height: 5,
		color: 'red'
	},
  {
		x: 247,
		y: 50,
		width: 5,
    height: 35,
		color: 'red'
	},
  {
		x: 245,
		y: 24,
		width: 90,
    height: 5,
		color: 'red'
	},
  {
		x: 301,
		y: 24,
		width: 5,
    height: 32,
		color: 'red'
	},
  {
		x: 330,
		y: 24,
		width: 5,
    height: 57,
		color: 'red'
	},
  {
		x: 330,
		y: 78,
		width: 28,
    height: 5,
		color: 'red'
	},
  {
		x: 385,
		y: 5,
		width: 5,
    height: 23,
		color: 'red'
	},
  {
		x: 357,
		y: 24,
		width: 59,
    height: 5,
		color: 'red'
	},
  {
		x: 412,
		y: 24,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 441,
		y: 24,
		width: 84,
    height: 5,
		color: 'red'
	},
  {
		x: 522,
		y: 5,
		width: 5,
    height: 24,
		color: 'red'
	},
  {
		x: 5,
		y: 52,
		width: 25,
    height: 5,
		color: 'red'
	},
  {
		x: 53,
		y: 25,
		width: 5,
    height: 55,
		color: 'red'
	},
  {
		x: 53,
		y: 79,
		width: 29,
    height: 5,
		color: 'red'
	},
  {
		x: 81,
		y: 52,
		width: 5,
    height: 112,
		color: 'red'
	},
  {
		x: 109,
		y: 51,
		width: 31,
    height: 5,
		color: 'red'
	},
  {
		x: 109,
		y: 51,
		width: 5,
    height: 57,
		color: 'red'
	},
  {
		x: 137,
		y: 51,
		width: 5,
    height: 32,
		color: 'red'
	},
  {
		x: 164,
		y: 51,
		width: 5,
    height: 57,
		color: 'red'
	},
  {
		x: 164,
		y: 106,
		width: 85,
    height: 5,
		color: 'red'
	},
  {
		x: 220,
		y: 110,
		width: 5,
    height: 53,
		color: 'red'
	},
  {
		x: 246,
		y: 106,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 246,
		y: 133,
		width: 30,
    height: 5,
		color: 'red'
	},
  {
		x: 274.5,
		y: 49,
		width: 5,
    height: 116,
		color: 'red'
	},
  {
		x: 82,
		y: 106,
		width: 57,
    height: 5,
		color: 'red'
	},
  {
		x: 5,
		y: 106,
		width: 25,
    height: 5,
		color: 'red'
	},
  {
		x: 26,
		y: 80,
		width: 5,
    height: 31,
		color: 'red'
	},
  {
		x: 110,
		y: 5,
		width: 5,
    height: 20,
		color: 'red'
	},
  {
		x: 270,
		y: 133,
		width: 35,
    height: 5,
		color: 'red'
	},
  {
		x: 275,
		y: 106,
		width: 29,
    height: 5,
		color: 'red'
	},
  {
		x: 301,
		y: 80,
		width: 5,
    height: 31,
		color: 'red'
	},
  {
		x: 360,
		y: 106,
		width: 25,
    height: 5,
		color: 'red'
	},
  {
		x: 357,
		y: 53,
		width: 5,
    height: 84,
		color: 'red'
	},
  {
		x: 385,
		y: 51,
		width: 32,
    height: 5,
		color: 'red'
	},
  {
		x: 440,
		y: 51,
		width: 58,
    height: 5,
		color: 'red'
	},
  {
		x: 524,
		y: 51,
		width: 28,
    height: 5,
		color: 'red'
	},
  {
		x: 385,
		y: 55,
		width: 5,
    height: 107,
		color: 'red'
	},
  {
		x: 440,
		y: 24,
		width: 5,
    height: 85,
		color: 'red'
	},
  {
		x: 467,
		y: 51,
		width: 5,
    height: 33,
		color: 'red'
	},
  {
		x: 412,
		y: 78.5,
		width: 30,
    height: 5,
		color: 'red'
	},
  {
		x: 496,
		y: 78.5,
		width: 30,
    height: 5,
		color: 'red'
	},
  {
		x: 523,
		y: 78.5,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 523,
		y: 105,
		width: 28,
    height: 5,
		color: 'red'
	},
  {
		x: 496,
		y: 133,
		width: 55,
    height: 5,
		color: 'red'
	},
  {
		x: 495,
		y: 107,
		width: 5,
    height: 31,
		color: 'red'
	},
  {
		x: 413,
		y: 106,
		width: 32,
    height: 5,
		color: 'red'
	},
  {
		x: 466,
		y: 106,
		width: 34,
    height: 5,
		color: 'red'
	},
  {
		x: 53,
		y: 105,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 329,
		y: 105,
		width: 5,
    height: 60,
		color: 'red'
	},
  {
		x: 27,
		y: 133,
		width: 85,
    height: 5,
		color: 'red'
	},
  {
		x: 165,
		y: 133,
		width: 30,
    height: 5,
		color: 'red'
	},
  {
		x: 330,
		y: 133,
		width: 32,
    height: 5,
		color: 'red'
	},
  {
		x: 5,
		y: 160,
		width: 23,
    height: 5,
		color: 'red'
	},
  {
		x: 26,
		y: 133,
		width: 5,
    height: 60,
		color: 'red'
	},
  {
		x: 137,
		y: 106,
		width: 5,
    height: 170,
		color: 'red'
	},
  {
		x: 110,
		y: 133,
		width: 5,
    height: 59,
		color: 'red'
	},
  {
		x: 55,
		y: 161,
		width: 31,
    height: 5,
		color: 'red'
	},
  {
		x: 26,
		y: 188,
		width: 32,
    height: 5,
		color: 'red'
	},
  {
		x: 82,
		y: 188,
		width: 32,
    height: 5,
		color: 'red'
	},
  {
		x: 140,
		y: 161,
		width: 110,
    height: 5,
		color: 'red'
  },
  {
		x: 191,
		y: 133,
		width: 5,
    height: 59,
		color: 'red'
	},
  {
		x: 191,
		y: 188,
		width: 31,
    height: 5,
		color: 'red'
	},
  {
		x: 247,
		y: 161,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 302,
		y: 137,
		width: 5,
    height: 107,
		color: 'red'
	},
  {
		x: 357,
		y: 161,
		width: 5,
    height: 58,
		color: 'red'
	},
  {
		x: 330,
		y: 161,
		width: 28,
    height: 5,
		color: 'red'
	},
  {
		x: 385,
		y: 161,
		width: 140,
    height: 5,
		color: 'red'
	},
  {
		x: 413,
		y: 135,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 440,
		y: 135,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 467,
		y: 135,
		width: 5,
    height: 30,
		color: 'red'
	},
  {
		x: 5,
		y: 215,
		width: 53,
    height: 5,
		color: 'red'
	},
  {
		x: 82,
		y: 215,
		width: 55,
    height: 5,
		color: 'red'
	},
  {
		x: 164,
		y: 190,
		width: 5,
    height: 83,
		color: 'red'
	},
  {
		x: 26,
		y: 220,
		width: 5,
    height: 28,
		color: 'red'
	},
  {
		x: 82,
		y: 220,
		width: 5,
    height: 27,
		color: 'red'
	},
  {
    x: 55,
    y: 242,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 192,
    y: 216,
    width: 58,
    height: 5,
    color: 'red'
  },
  {
    x: 192,
    y: 216,
    width: 5,
    height: 29,
    color: 'red'
  },
  {
    x: 109,
    y: 216,
    width: 5,
    height: 58,
    color: 'red'
  },
  {
    x: 167,
    y: 243,
    width: 30,
    height: 5,
    color: 'red'
  },
  {
    x: 220,
    y: 220,
    width: 5,
    height: 27,
    color: 'red'
  },
  {
    x: 247,
    y: 216,
    width: 5,
    height: 58,
    color: 'red'
  },
  {
    x: 274,
    y: 190,
    width: 5,
    height: 84,
    color: 'red'
  },
  {
    x: 330,
    y: 188,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 385,
    y: 188,
    width: 59,
    height: 5,
    color: 'red'
  },
  {
    x: 468,
    y: 188,
    width: 60,
    height: 5,
    color: 'red'
  },
  {
    x: 468,
    y: 190,
    width: 5,
    height: 110,
    color: 'red'
  },
  {
    x: 305,
    y: 215,
    width: 28,
    height: 5,
    color: 'red'
  },
  {
    x: 330,
    y: 189,
    width: 5,
    height: 60,
    color: 'red'
  },
  {
    x: 384,
    y: 189,
    width: 5,
    height: 112,
    color: 'red'
  },
  {
    x: 358,
    y: 215,
    width: 57,
    height: 5,
    color: 'red'
  },
  {
    x: 468,
    y: 215,
    width: 58,
    height: 5,
    color: 'red'
  },
  {
    x: 495,
    y: 218,
    width: 5,
    height: 167,
    color: 'red'
  },
  {
    x: 357,
    y: 242,
    width: 87,
    height: 5,
    color: 'red'
  },
  {
    x: 440,
    y: 217,
    width: 5,
    height: 29,
    color: 'red'
  },
  {
    x: 523,
    y: 215,
    width: 5,
    height: 60,
    color: 'red'
  },
  {
    x: 25,
    y: 271,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 5,
    y: 298,
    width: 25,
    height: 5,
    color: 'red'
  },
  {
    x: 54,
    y: 272,
    width: 5,
    height: 168,
    color: 'red'
  },
  {
    x: 82,
    y: 272,
    width: 5,
    height: 248,
    color: 'red'
  },
  {
    x: 109,
    y: 298,
    width: 5,
    height: 140,
    color: 'red'
  },
  {
    x: 137,
    y: 298,
    width: 5,
    height: 115,
    color: 'red'
  },
  {
    x: 191,
    y: 298,
    width: 5,
    height: 90,
    color: 'red'
  },
  {
    x: 219,
    y: 270,
    width: 5,
    height: 56,
    color: 'red'
  },
  {
    x: 302,
    y: 270,
    width: 5,
    height: 85,
    color: 'red'
  },
  {
    x: 330,
    y: 270,
    width: 5,
    height: 85,
    color: 'red'
  },
  {
    x: 440,
    y: 270,
    width: 5,
    height: 85,
    color: 'red'
  },
  {
    x: 523,
    y: 297,
    width: 5,
    height: 85,
    color: 'red'
  },
  {
    x: 26,
    y: 325,
    width: 5,
    height: 167,
    color: 'red'
  },
  {
    x: 56,
    y: 379,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 164,
    y: 270,
    width: 55,
    height: 5,
    color: 'red'
  },
  {
    x: 274,
    y: 270,
    width: 28,
    height: 5,
    color: 'red'
  },
  {
    x: 112,
    y: 352,
    width: 25,
    height: 5,
    color: 'red'
  },
  {
    x: 165,
    y: 297,
    width: 30,
    height: 5,
    color: 'red'
  },
  {
    x: 335,
    y: 270,
    width: 25,
    height: 5,
    color: 'red'
  },
  {
    x: 415,
    y: 270,
    width: 25,
    height: 5,
    color: 'red'
  },
  {
    x: 359,
    y: 297,
    width: 29,
    height: 5,
    color: 'red'
  },
  {
    x: 167,
    y: 325,
    width: 140,
    height: 5,
    color: 'red'
  },
  {
    x: 333,
    y: 325,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 388,
    y: 325,
    width: 80,
    height: 5,
    color: 'red'
  },
  {
    x: 440,
    y: 297,
    width: 33,
    height: 5,
    color: 'red'
  },
  {
    x: 246,
    y: 297,
    width: 5,
    height: 168,
    color: 'red'
  },
  {
    x: 274,
    y: 298,
    width: 5,
    height: 27,
    color: 'red'
  },
  {
    x: 413,
    y: 298,
    width: 5,
    height: 27,
    color: 'red'
  },
  {
    x: 468,
    y: 325,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 140,
    y: 379,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 165,
    y: 352,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 220,
    y: 352,
    width: 58,
    height: 5,
    color: 'red'
  },
  {
    x: 303,
    y: 352,
    width: 31,
    height: 5,
    color: 'red'
  },
  {
    x: 359,
    y: 352,
    width: 28,
    height: 5,
    color: 'red'
  },
  {
    x: 414,
    y: 352,
    width: 30,
    height: 5,
    color: 'red'
  },
  {
    x: 82,
    y: 406,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 166,
    y: 406,
    width: 55,
    height: 5,
    color: 'red'
  },
  {
    x: 219,
    y: 379,
    width: 28,
    height: 5,
    color: 'red'
  },
  {
    x: 330,
    y: 379,
    width: 57,
    height: 5,
    color: 'red'
  },
  {
    x: 413,
    y: 379,
    width: 57,
    height: 5,
    color: 'red'
  },
  {
    x: 523,
    y: 379,
    width: 27,
    height: 5,
    color: 'red'
  },
  {
    x: 275,
    y: 352,
    width: 5,
    height: 32,
    color: 'red'
  },
  {
    x: 385,
    y: 352,
    width: 5,
    height: 58,
    color: 'red'
  },
  {
    x: 412,
    y: 352,
    width: 5,
    height: 85,
    color: 'red'
  },
  {
    x: 468,
    y: 380,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 302,
    y: 380,
    width: 5,
    height: 27,
    color: 'red'
  },
  {
    x: 329,
    y: 380,
    width: 5,
    height: 113,
    color: 'red'
  },
  {
    x: 219,
    y: 380,
    width: 5,
    height: 160,
    color: 'red'
  },
  {
    x: 302,
    y: 407,
    width: 29,
    height: 5,
    color: 'red'
  },
  {
    x: 358,
    y: 407,
    width: 85,
    height: 5,
    color: 'red'
  },
  {
    x: 468,
    y: 407,
    width: 29,
    height: 5,
    color: 'red'
  },
  {
    x: 495,
    y: 407,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 523,
    y: 407,
    width: 5,
    height: 113,
    color: 'red'
  },
  {
    x: 5,
    y: 460,
    width: 80,
    height: 5,
    color: 'red'
  },
  {
    x: 110,
    y: 460,
    width: 28,
    height: 5,
    color: 'red'
  },
  {
    x: 275,
    y: 460,
    width: 30,
    height: 5,
    color: 'red'
  },
  {
    x: 358,
    y: 460,
    width: 30,
    height: 5,
    color: 'red'
  },
  {
    x: 470,
    y: 460,
    width: 30,
    height: 5,
    color: 'red'
  },
  {
    x: 165,
    y: 432,
    width: 57,
    height: 5,
    color: 'red'
  },
  {
    x: 274,
    y: 408,
    width: 5,
    height: 85,
    color: 'red'
  },
  {
    x: 357,
    y: 408,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 440,
    y: 407,
    width: 5,
    height: 57,
    color: 'red'
  },
  {
    x: 467,
    y: 435,
    width: 5,
    height: 83,
    color: 'red'
  },
  {
    x: 136,
    y: 435,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 192,
    y: 435,
    width: 5,
    height: 60,
    color: 'red'
  },
  {
    x: 302,
    y: 435,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 357,
    y: 434,
    width: 32,
    height: 5,
    color: 'red'
  },
  {
    x: 384,
    y: 460,
    width: 5,
    height: 58,
    color: 'red'
  },
  {
    x: 53,
    y: 460,
    width: 5,
    height: 58,
    color: 'red'
  },
  {
    x: 109,
    y: 460,
    width: 5,
    height: 80,
    color: 'red'
  },
  {
    x: 164,
    y: 455,
    width: 5,
    height: 64,
    color: 'red'
  },
  {
    x: 412,
    y: 463,
    width: 5,
    height: 78,
    color: 'red'
  },
  {
    x: 26,
    y: 515,
    width: 5,
    height: 26,
    color: 'red'
  },
  {
    x: 136,
    y: 490,
    width: 5,
    height: 50,
    color: 'red'
  },
  {
    x: 248,
    y: 488,
    width: 82,
    height: 5,
    color: 'red'
  },
  {
    x: 496,
    y: 488,
    width: 28,
    height: 5,
    color: 'red'
  },
  {
    x: 140,
    y: 515,
    width: 55,
    height: 5,
    color: 'red'
  },
  {
    x: 246,
    y: 488,
    width: 5,
    height: 31,
    color: 'red'
  },
  {
    x: 302,
    y: 488,
    width: 5,
    height: 52,
    color: 'red'
  },
  {
    x: 357,
    y: 488,
    width: 5,
    height: 30,
    color: 'red'
  },
  {
    x: 440,
    y: 488,
    width: 5,
    height: 52,
    color: 'red'
  },
  {
    x: 495,
    y: 488,
    width: 5,
    height: 51,
    color: 'red'
  },
  {
    x: 274,
    y: 515,
    width: 5,
    height: 26,
    color: 'red'
  },
  {
    x: 303,
    y: 515,
    width: 86,
    height: 5,
    color: 'red'
  },
  {
    x: 440,
    y: 515,
    width: 31,
    height: 5,
    color: 'red'
  },
];

// define circle function
function circle(x, y, radius, fillCircle, color) {
	// start recording
  context.beginPath();
	// define arc - x, y, radius, start posn, end posn, anticlockwise...
	context.arc(x, y, radius, 0, Math.PI * 2, false);
	// check fill or stroke
	if (fillCircle) {
		// colour for fill
	  context.fillStyle = color;
		context.fill();
	} else {
		// set line width & line colour
		context.lineWidth = 2;
    context.strokeStyle = color;
		context.stroke();
	}
}

// draw block to canvas
function drawBlocks(blocks) {
	// iterate through blocks
  for (i = 0; i < blocks.length; i++) {
		context.fillStyle = blocks[i]['color'];
	  context.fillRect(blocks[i]['x'], blocks[i]['y'], blocks[i]['width'], blocks[i]['height']);
  }
}

/**
 * pin ball
 */

// ball constructor - name capitalised to denote constructor
function Ball() {
 this.x = 10;
 this.y = 10;
};

// 1. update prototype - method to draw ball
Ball.prototype.draw = function () {
 circle(this.x, this.y, 5, true, 'green');
};

// 2. update prototype -method to move a ball
Ball.prototype.move = function () {
// update position of ball based on speed
 this.x += this.xSpeed;
 this.y += this.ySpeed;
// check ball relative to boundaries - canvas edge
  if (this.x < 0) {
	  this.x = cWidth;
  } else if (this.x > cWidth) {
	  this.x = 0;
  } else if (this.y < 0) {
	  this.y = cHeight;
  } else if (this.y > cHeight) {
    this.y = 0;
  }

 console.log(`x = ` + this.x + ', y = ' + this.y);
};

// 3. update prototype - check collision
Ball.prototype.checkCollision = function ( blocks ) {
  // iterate through blocks and check collision
	for (i = 0; i < blocks.length; i++) {
		// start start and end of block - x & y axis
		let blockStartX = blocks[i]['x'];
		let blockEndX = (blocks[i]['x'] + blocks[i]['width']);
		let blockStartY = blocks[i]['y'];
		let blockEndY = (blocks[i]['y'] + blocks[i]['height']);
		// check block collisions - allow for radius of ball
		if (this.x >= blockStartX-5 && this.x <= blockEndX+5 && this.y >= blockStartY-5 && this.y <= blockEndY+5) {
			console.log('collision at block = ' + this.x);
      this.x=10;
      this.y=10;
		}
  }
}

// 4. update prototype - user control
Ball.prototype.userControl = function( key ) {
  /*
	* 37 = LEFT
	* 38 = UP
	* 39 = RIGHT
	* 40 = DOWN
	*/
  if (key === 37) {
		ball.userMove(-5, 0);
  } else if (key === 38) {
		ball.userMove(0, -5);
	} else if (key === 39) {
		ball.userMove(5, 0);
	} else if (key === 40) {
		ball.userMove(0, 5);
	}
  e.preventDefault (); 
};

// 5. update prototype - user movement of ball
Ball.prototype.userMove = function (xS, yS) {
	// clear canvas for animation
	context.clearRect(0, 0, cWidth, cHeight);
	// draw blocks to canvas
  drawBlocks(blockDetails);
  // update x and y speed
	this.xSpeed = xS;
  this.ySpeed = yS;
	// draw ball and move...
  ball.move();
	ball.draw();
  ball.checkCollision(blockDetails);
}

/**
 * game play and control
 */

// add event listener for keypress - e.g. up arrow key...
window.addEventListener('keydown', function (event) {
	// get code for key presses
  var key = event.keyCode;
  console.log("key pressed = " + key);
  ball.userControl(key);
})

// instantiate a ball object using the Ball constructor
var ball = new Ball();
