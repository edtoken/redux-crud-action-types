# redux-crud-action-types
A simple lib help your define redux action type in easy way.

[![Build Status](https://api.travis-ci.org/edtoken/redux-crud-action-types.svg?branch=master)](https://travis-ci.org/edtoken/redux-crud-action-types)

[![NPM](https://nodei.co/npm/redux-crud-action-types.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/redux-crud-action-types/)

[![NPM](https://nodei.co/npm-dl/redux-crud-action-types.png?height=3)](https://nodei.co/npm/redux-crud-action-types/)


## Install
```
npm install redux-crud-action-types --save
```

## Usage

### Action types before
```
// actionTypes.js
export const USER_PENDING = 'USER_PENDING'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_ERROR = 'USER_ERROR'

```

### Action types after
```
// actionTypes.js

import {create} from 'redux-crud-action-types'

export const USER = create('USER')

```


### Reducer before
```
//reducer.js 

import { USER_ERROR, USER_PENDING, USER_SUCCESS } from './actionTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case USER_PENDING:
      //
      break
    case USER_SUCCESS:
      //
      break
    case USER_ERROR:
      //
      break
  }
  return state
}
```

### Reducer after
about case `USER` see [LINK](https://github.com/edtoken/redux-crud-action-types/blob/master/test/redux-crud-action-types.spec.js#L70) 
```
//reducer.js 

import { USER } from './actionTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case USER: // or case USER.PENDING
      //
      break
    case USER.SUCCESS:
      //
      break
    case USER.ERROR:
      //
      break
  }
  return state
}

```
