export const TURNS = {
    X : true,
    O : false
}

export const WIN_COMBOS = [
    [0, 5, 10, 15],
    [12, 9, 6, 3],
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15]
];

export const BOARD_LIMITS_LEFT = [0, 5, 10, 15];
export const BOARD_LIMITS_RIGHT = [4, 9, 14, 19];
export const BOTTOM_ROW = [15, 16, 17, 18, 19];

export const DIAGONAL_WIN_COMBOS = [
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [16, 12, 8, 4],
    [15, 11, 7, 3]
  ];

