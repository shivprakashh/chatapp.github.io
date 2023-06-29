import { io } from 'socket.io-client';

const URL = 'http://localhost:4400';

export const socket = io(URL);