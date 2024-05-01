import { Game } from '../models/Game.js';
import { PartialBy } from '../utils/type.js';
import { randomUUID } from 'crypto';
import { User } from '../models/User';

export const USER_TABLE = [];
USER_TABLE.push(new User('Tiwari1', 1));
USER_TABLE[2] = new User('Tiwari2');
USER_TABLE[3] = new User('Tiwari3');

export const save = (game: Game) => {
  if (!game.id) {
    game.id = randomUUID();
  }
  GAME_TABLE.set(game.id, game);
};
