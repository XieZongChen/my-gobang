import { Ref, VNodeChild } from 'vue';

export interface StepsItem {
  position: [number, number]; // 定位 [0, 0]
  theme: PieceTheme; // 颜色 1：黑，2：白
}

export type UseProp = {
  handleVictoryMsg: (theme: PieceTheme) => VNodeChild;
};

export enum PieceTheme {
  'transparent' = 0,
  'black' = 1,
  'white' = 2,
}
