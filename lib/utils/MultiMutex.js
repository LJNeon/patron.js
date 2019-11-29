/*
 * patron.js - The cleanest command framework for discord.js and eris.
 * Copyright (C) 2019  patron.js contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
const Mutex = require("./Mutex.js");

export default class MultiMutex {
  constructor() {
    this.mutexes = new Map();
  }

  lock(key) {
    if(!this.mutexes.has(key))
      this.mutexes.set(key, new Mutex());

    return this.mutexes.get(key).lock();
  }

  unlock(key) {
    return this.mutexes.get(key).unlock();
  }
}