# redux-crud-action-types
A simple lib help your define redux action type in easy way.  
Create unique names for example:
```
export const USER = create('user') // @crud/pending/id0/user, @crud/success/id0/user, @crud/error/id0/user
export const USER_SECOND = create('user') // @crud/pending/id1/user, @crud/success/id1/user, @crud/error/id1/user
```

[![Build Status](https://api.travis-ci.org/edtoken/redux-crud-action-types.svg?branch=master)](https://travis-ci.org/edtoken/redux-crud-action-types)
[![npm version](https://badge.fury.io/js/redux-crud-action-types.svg)](https://badge.fury.io/js/redux-crud-action-types)
[![Maintainability](https://api.codeclimate.com/v1/badges/d795ac0152904aa4c02b/maintainability)](https://codeclimate.com/github/edtoken/redux-crud-action-types/maintainability)
[![HitCount](http://hits.dwyl.com/edtoken/redux-crud-action-types.svg)](http://hits.dwyl.com/edtoken/redux-crud-action-types)    

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
about case `USER` see [LINK](https://github.com/edtoken/redux-crud-action-types/blob/master/test/redux-crud-action-types.spec.js#L70) and [LINK](https://github.com/edtoken/redux-crud-action-types/blob/master/src/redux-crud-action-types.js#L21)
 
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
