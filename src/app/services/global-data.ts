import { Injectable } from '@angular/core';

export interface ScoreRecord {
  category: string;
  score: number;
  total: number;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalData {
  private _username: string = '';
  private _scoreHistory: { [username: string]: ScoreRecord[] } = {};

  // Set username
  setUsername(name: string) {
    this._username = name;
    if (!this._scoreHistory[name]) {
      this._scoreHistory[name] = [];
    }
  }

  // Get username
  getUsername(): string {
    return this._username;
  }

  // Save score
  addScore(record: ScoreRecord) {
    if (!this._scoreHistory[this._username]) {
      this._scoreHistory[this._username] = [];
    }
    this._scoreHistory[this._username].push(record);
  }

  // Get score history
  getScoreHistory(): ScoreRecord[] {
    return this._scoreHistory[this._username] || [];
  }
}
