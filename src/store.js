import { reactive } from 'vue';

export const bottleState = reactive({
  cap: '#e0e0e0', 
  body: '#e0e0e0',
  bottom: '#e0e0e0'
});

export const resetBottle = () => {
  bottleState.cap = '#e0e0e0';
  bottleState.body = '#e0e0e0';
  bottleState.bottom = '#e0e0e0';
};

export const COLORS = [
  '#e0e0e0',
  '#FF85A1', '#0077B6', '#77DD77', '#FFAC81', '#708090',
  '#FFD700', '#9370DB', '#40E0D0', '#4682B4'
];