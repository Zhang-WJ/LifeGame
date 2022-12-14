// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Game from "./Game.bs.js";
import * as Util from "./Util.bs.js";
import * as Config from "./Config.bs.js";

function makeSeed(param) {
  return Date.now() | 0;
}

var initialState_grid = Game.makeRandomGrid(Config.boardSize, Date.now() | 0);

var initialState_animationFrameId = {
  contents: 0
};

var initialState = {
  grid: initialState_grid,
  isPlaying: false,
  animationFrameId: initialState_animationFrameId,
  startedAt: undefined,
  ticks: 0,
  frameRate: 0
};

function grid(self, action, _state) {
  if (typeof action !== "number") {
    return Game.toggleTile(self, action._0);
  }
  switch (action) {
    case /* Random */0 :
        return Game.makeRandomGrid(Config.boardSize, Date.now() | 0);
    case /* Reset */1 :
        return Game.makeBlankGrid(Config.boardSize);
    case /* Start */2 :
    case /* Stop */3 :
        return self;
    case /* Tick */4 :
        return Game.nextGeneration(self);
    
  }
}

function isPlaying(self, action, _state) {
  if (typeof action !== "number") {
    return self;
  }
  if (action < 2) {
    return self;
  }
  switch (action) {
    case /* Start */2 :
        return true;
    case /* Stop */3 :
        return false;
    case /* Tick */4 :
        return self;
    
  }
}

function startedAt(self, action, _state) {
  if (typeof action !== "number") {
    return self;
  }
  if (action < 2) {
    return self;
  }
  switch (action) {
    case /* Start */2 :
        return Date.now();
    case /* Stop */3 :
        return ;
    case /* Tick */4 :
        return self;
    
  }
}

function ticks(self, action, state) {
  var match = state.isPlaying;
  if (typeof action !== "number") {
    return self;
  }
  switch (action) {
    case /* Random */0 :
    case /* Start */2 :
        return self;
    case /* Reset */1 :
    case /* Stop */3 :
        return 0;
    case /* Tick */4 :
        if (match) {
          return self + 1 | 0;
        } else {
          return self;
        }
    
  }
}

function frameRate(self, action, state) {
  var match = state.startedAt;
  if (typeof action === "number") {
    if (action !== 3) {
      if (action >= 4 && match !== undefined) {
        return Util.avgFrameRate(state.ticks, match);
      } else {
        return self;
      }
    } else {
      return 0;
    }
  } else {
    return self;
  }
}

function root(state, action) {
  return {
          grid: grid(state.grid, action, state),
          isPlaying: isPlaying(state.isPlaying, action, state),
          animationFrameId: state.animationFrameId,
          startedAt: startedAt(state.startedAt, action, state),
          ticks: ticks(state.ticks, action, state),
          frameRate: frameRate(state.frameRate, action, state)
        };
}

var Reducers = {
  grid: grid,
  isPlaying: isPlaying,
  startedAt: startedAt,
  ticks: ticks,
  frameRate: frameRate,
  root: root
};

export {
  makeSeed ,
  initialState ,
  Reducers ,
  
}
/* initialState Not a pure module */
