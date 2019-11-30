var GAMEMODES = ["vanilla", "pvp", "hell"];
var DEV_SKINS = [52];
var DEFAULT_PLAYER_NAME = "INFRINGIO";
var levelSelectors = [];    //received from server
var TILE_ANIMATION_FILTERED = {};
var OBJ_ANIMATION_FILTERED = {};

var util = {},
    vec2 = {
        'make': function(_0x9b9cda, _0x4101d1) {
            return {
                'x': _0x9b9cda,
                'y': _0x4101d1
            };
        },
        'random': function() {
            return vec2.normalize({
                'x': 0x2 * Math.random() - 0x1,
                'y': 0x2 * Math.random() - 0x1
            });
        },
        'copy': function(_0x513bb8) {
            return {
                'x': _0x513bb8.x,
                'y': _0x513bb8.y
            };
        },
        'add': function(_0x40c387, _0x41408a) {
            return {
                'x': _0x40c387.x + _0x41408a.x,
                'y': _0x40c387.y + _0x41408a.y
            };
        },
        'subtract': function(_0x477a20, _0x45244f) {
            return {
                'x': _0x477a20.x - _0x45244f.x,
                'y': _0x477a20.y - _0x45244f.y
            };
        },
        'scale': function(_0xe64009, _0x7568ac) {
            return {
                'x': _0xe64009.x * _0x7568ac,
                'y': _0xe64009.y * _0x7568ac
            };
        },
        'multiply': function(_0x45f1bb, _0x61bd5d) {
            return {
                'x': _0x45f1bb.x * _0x61bd5d.x,
                'y': _0x45f1bb.y * _0x61bd5d.y
            };
        },
        'divide': function(_0xa37714, _0x505587) {
            return {
                'x': _0xa37714.x / _0x505587.x,
                'y': _0xa37714.y / _0x505587.y
            };
        },
        'magnitude': function(_0xbb06f8) {
            return Math.sqrt(_0xbb06f8.x * _0xbb06f8.x + _0xbb06f8.y * _0xbb06f8.y);
        },
        'normalize': function(_0x95577d) {
            var _0x345de2 = vec2.magnitude(_0x95577d);
            return 0x0 !== _0x345de2 ? {
                'x': _0x95577d.x / _0x345de2,
                'y': _0x95577d.y / _0x345de2
            } : {
                'x': 0x0,
                'y': 0x1
            };
        },
        'distance': function(u, v) {
            return vec2.magnitude(vec2.subtract(u, v));
        },
        'dot': function(_0x1a1c3f, _0x5d048a) {
            return _0x1a1c3f.x * _0x5d048a.x + _0x1a1c3f.y * _0x5d048a.y;
        },
        'inverse': function(_0x6e038) {
            return {
                'x': -0x1 * _0x6e038.x,
                'y': -0x1 * _0x6e038.y
            };
        },
        'lerp': function(_0x449c3f, _0x9a844a, _0x47869e) {
            return vec2.add(vec2.scale(_0x449c3f, 0x1 - _0x47869e), vec2.scale(_0x9a844a, _0x47869e));
        },
        'rotate': function(_0x5177b0, _0x45a0e4) {
            var _0x315ef4 = Math.cos(_0x45a0e4);
            _0x45a0e4 = Math.sin(_0x45a0e4);
            return {
                'x': _0x5177b0.x * _0x315ef4 + _0x5177b0.y * _0x45a0e4,
                'y': _0x5177b0.x * -_0x45a0e4 + _0x5177b0.y * _0x315ef4
            };
        },
        'angle': function(_0x3f22f3, _0x362da6) {
            var _0x3138d2 = vec2.dot(_0x3f22f3, _0x362da6);
            return Math.acos(_0x3138d2 / (Math.sqrt(_0x3f22f3.x * _0x3f22f3.x + _0x3f22f3.y * _0x3f22f3.y) * Math.sqrt(_0x362da6.x * _0x362da6.x + _0x362da6.y * _0x362da6.y)));
        },
        'average': function(_0x8aecc1) {
            for (var _0x506ec6 = vec2.create(), _0x466cf6 = 0x0; _0x466cf6 < _0x8aecc1.length; _0x466cf6++) _0x506ec6 = vec2.add(_0x506ec6, _0x8aecc1[_0x466cf6]);
            return vec2.scale(_0x506ec6, 0x1 / _0x8aecc1.length);
        },
        'chop': function(_0x4413bf) {
            return vec2.make(parseInt(_0x4413bf.x), parseInt(_0x4413bf.y));
        },
        'equals': function(u, v) {
            return u.x === v.x && u.y === v.y;
        },
        'toArray': function(_0xfa2c05) {
            return [_0xfa2c05.x, _0xfa2c05.y];
        }
    },
    vec4 = {};
vec4.make = function(_0x352992, _0x589705, _0x474312, _0x28bc34) {
    return {
        x: _0x352992,
        y: _0x589705,
        z: _0x474312,
        w: _0x28bc34
    };
};
vec4.copy = function(_0x26ffa4) {
    return {
        x: _0x26ffa4.x,
        y: _0x26ffa4.y,
        z: _0x26ffa4.z,
        w: _0x26ffa4.w
    };
};
vec4.add = function(_0x5453a6, _0x3ad8f6) {
    return {
        x: _0x5453a6.x + _0x3ad8f6.x,
        y: _0x5453a6.y + _0x3ad8f6.y,
        z: _0x5453a6.z + _0x3ad8f6.z,
        w: _0x5453a6.w + _0x3ad8f6.w
    };
};
vec4.subtract = function(_0xdcb7eb, _0x309cab) {
    return {
        x: _0xdcb7eb.x - _0x309cab.x,
        y: _0xdcb7eb.y - _0x309cab.y,
        z: _0xdcb7eb.z - _0x309cab.z,
        w: _0xdcb7eb.w - _0x309cab.w
    };
};
vec4.scale = function(_0x1413b9, _0x48339f) {
    return {
        x: _0x1413b9.x * _0x48339f,
        y: _0x1413b9.y * _0x48339f,
        z: _0x1413b9.z * _0x48339f,
        w: _0x1413b9.w * _0x48339f
    };
};
vec4.multiply = function(_0x181caa, _0x1d5e43) {
    return {
        x: _0x181caa.x * _0x1d5e43.x,
        y: _0x181caa.y * _0x1d5e43.y,
        z: _0x181caa.z * _0x1d5e43.z,
        w: _0x181caa.w * _0x1d5e43.w
    };
};
vec4.lerp = function(u, v, alpha) {
    return vec4.add(vec4.scale(u, 0x1 - alpha), vec4.scale(v, alpha));
};
vec4.toArray = function(_0x583eb8) {
    return [_0x583eb8.x, _0x583eb8.y, _0x583eb8.z, _0x583eb8.w];
};
util.line2 = {};
util.intersection = {};
util.time = {};
util.sprite = {};
util.line2.normal = function(_0x542843) {
    return vec2.normalize({
        'x': _0x542843.b.y - _0x542843.a.y,
        'y': -0x1 * (_0x542843.b.x - _0x542843.a.x)
    });
};
util.intersection.pointRectangle = function(_0x1f2e5d, _0x4fb4f3, _0x195e9a) {
    return _0x4fb4f3.x <= _0x1f2e5d.x && _0x4fb4f3.x + _0x195e9a.x > _0x1f2e5d.x && _0x4fb4f3.y <= _0x1f2e5d.y && _0x4fb4f3.y + _0x195e9a.y > _0x1f2e5d.y;
};
util.intersection.pointPoly = function(_0x3050fe, _0x3fb4ac) {
    var _0x315951, _0x3d41ed, _0x3833a5 = false,
        _0x33ce75 = _0x3fb4ac.length;
    _0x315951 = 0x0;
    for (_0x3d41ed = _0x33ce75 - 0x1; _0x315951 < _0x33ce75; _0x3d41ed = _0x315951++) _0x3fb4ac[_0x315951].y > _0x3050fe.y !== _0x3fb4ac[_0x3d41ed].y > _0x3050fe.y && _0x3050fe.x < (_0x3fb4ac[_0x3d41ed].x - _0x3fb4ac[_0x315951].x) * (_0x3050fe.y - _0x3fb4ac[_0x315951].y) / (_0x3fb4ac[_0x3d41ed].y - _0x3fb4ac[_0x315951].y) + _0x3fb4ac[_0x315951].x && (_0x3833a5 = !_0x3833a5);
    return _0x3833a5;
};
util.intersection.lineLine = function(_0x19d86f, _0x3c89c8) {
    var _0x1f1a11, _0x5c28c9, _0x2b1fa9, _0x9c8117;
    _0x1f1a11 = _0x19d86f.b.x - _0x19d86f.a.x;
    _0x5c28c9 = _0x19d86f.b.y - _0x19d86f.a.y;
    _0x2b1fa9 = _0x3c89c8.b.x - _0x3c89c8.a.x;
    _0x9c8117 = _0x3c89c8.b.y - _0x3c89c8.a.y;
    var _0x5c5c20;
    _0x5c5c20 = (-_0x5c28c9 * (_0x19d86f.a.x - _0x3c89c8.a.x) + _0x1f1a11 * (_0x19d86f.a.y - _0x3c89c8.a.y)) / (-_0x2b1fa9 * _0x5c28c9 + _0x1f1a11 * _0x9c8117);
    _0x2b1fa9 = (_0x2b1fa9 * (_0x19d86f.a.y - _0x3c89c8.a.y) - _0x9c8117 * (_0x19d86f.a.x - _0x3c89c8.a.x)) / (-_0x2b1fa9 * _0x5c28c9 + _0x1f1a11 * _0x9c8117);
    if (0x0 <= _0x5c5c20 && 0x1 >= _0x5c5c20 && 0x0 <= _0x2b1fa9 && 0x1 >= _0x2b1fa9) return _0x1f1a11 = _0x19d86f.a.x + _0x2b1fa9 * _0x1f1a11, _0x5c28c9 = _0x19d86f.a.y + _0x2b1fa9 * _0x5c28c9, _0x5c28c9 = {}, _0x3c89c8 = util.line2.normal(_0x3c89c8), {
        'intersection': _0x5c28c9,
        'normal': _0x3c89c8,
        'distance': vec2.distance(_0x5c28c9, _0x19d86f.a)
    };
    _0x5c28c9.x = _0x1f1a11;
    _0x5c28c9.y = _0x5c28c9;
};
util.intersection.lineCircle = function(_0x23b739, _0x52f453, _0x25831c) {
    var _0x4f1d7f = util.intersection.lineNearestPoint(_0x23b739, _0x52f453);
    if (vec2.equals(_0x4f1d7f, _0x52f453.a)) {
        var _0x1ab3a2 = vec2.subtract(_0x23b739, _0x52f453.a);
        _0x23b739 = vec2.magnitude(_0x1ab3a2);
        if (!(_0x23b739 >= _0x25831c)) return _0x25831c = vec2.normalize(_0x1ab3a2), {
            'intersection': _0x52f453.a,
            'normal': _0x25831c,
            'dist': _0x23b739
        };
    } else {
        if (vec2.equals(_0x4f1d7f, _0x52f453.b)) {
            _0x1ab3a2 = vec2.subtract(_0x23b739, _0x52f453.b);
            _0x23b739 = vec2.magnitude(_0x1ab3a2);
            if (_0x23b739 >= _0x25831c) return;
            _0x25831c = vec2.normalize(_0x1ab3a2);
            return {
                'intersection': _0x52f453.b,
                'normal': _0x25831c,
                'distance': _0x23b739
            };
        }
        _0x1ab3a2 = vec2.subtract(_0x23b739, _0x4f1d7f);
        _0x23b739 = vec2.magnitude(_0x1ab3a2);
        if (!(_0x23b739 >= _0x25831c)) return _0x25831c = vec2.normalize(_0x1ab3a2), {
            'intersection': _0x4f1d7f,
            'normal': _0x25831c,
            'distance': _0x23b739
        };
    }
};
util.intersection.polygonLine = function(_0x35e9bb, _0x180ded) {
    for (var _0x361de = [], _0x2d1537 = 0x0; _0x2d1537 < _0x180ded.v.length; _0x2d1537++) {
        var _0xaeb880 = util.intersection.lineLine(_0x35e9bb, {
            'a': _0x180ded.v[_0x2d1537],
            'b': _0x180ded.v[_0x2d1537 + 0x1 < _0x180ded.v.length ? _0x2d1537 + 0x1 : 0x0]
        });
        _0xaeb880 && _0x361de.push(_0xaeb880);
    }
    if (!(0x1 > _0x361de.length)) {
        _0x35e9bb = _0x361de[0x0];
        for (_0x2d1537 = 0x1; _0x2d1537 < _0x361de.length; _0x2d1537++) _0x361de[_0x2d1537].distance < _0x35e9bb.distance && (_0x35e9bb = _0x361de[_0x2d1537]);
        return _0x35e9bb;
    }
};
util.intersection.polygonCircle = function(_0x26d962, _0x358ffa, _0x2921d5) {
    for (var _0x40a38a = [], _0x26257e = 0x0; _0x26257e < _0x358ffa.v.length; _0x26257e++) {
        var _0x5eeed2 = util.intersection.lineCircle(_0x26d962, {
            'a': _0x358ffa.v[_0x26257e],
            'b': _0x358ffa.v[_0x26257e + 0x1 < _0x358ffa.v.length ? _0x26257e + 0x1 : 0x0]
        }, _0x2921d5);
        _0x5eeed2 && _0x40a38a.push(_0x5eeed2);
    }
    if (!(0x1 > _0x40a38a.length)) {
        _0x26d962 = _0x40a38a[0x0];
        for (_0x26257e = 0x1; _0x26257e < _0x40a38a.length; _0x26257e++) _0x40a38a[_0x26257e].distance < _0x26d962.distance && (_0x26d962 = _0x40a38a[_0x26257e]);
        return _0x26d962;
    }
};
util.intersection.lineNearestPoint = function(_0x5a6af6, _0x4deaa7) {
    var _0x5842b2 = vec2.subtract(_0x4deaa7.b, _0x4deaa7.a);
    _0x5a6af6 = vec2.subtract(_0x5a6af6, _0x4deaa7.a);
    _0x5a6af6 = vec2.dot(_0x5a6af6, _0x5842b2);
    if (0x0 >= _0x5a6af6) return _0x4deaa7.a;
    var _0x5e06d3 = vec2.dot(_0x5842b2, _0x5842b2);
    return _0x5e06d3 <= _0x5a6af6 ? _0x4deaa7.b : vec2.add(_0x4deaa7.a, vec2.scale(_0x5842b2, _0x5a6af6 / _0x5e06d3));
};
util.time.now = function() {
    return Date.now();
};
util.sprite.getSprite = function(spriteMap, index) {
    var width = spriteMap.width;
    var height = spriteMap.height;
    index *= Display.TEXRES;
    var row = parseInt(Math.floor(index / width) * Display.TEXRES);
    return row > height ? [0x0, 0x0] : [index % width, row];
};
var requestAnimFrameFunc = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(_0x42507e) {
            window.setTimeout(_0x42507e, 0x10);
        };
    }(),
    _0x2a6b41 = function() {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    }();
"use strict";
/* global app, util, vec2, squar */
/* global PlayerObject, CoinObject, CheckObject */

var shor2 = {}; // Two Shorts 32bits // Stored as an int32
/* ======================================================================================== */

shor2.encode = function(/* short */ a, /* short */ b) {
    return 0 | (parseInt(a) & 0x0000FFFF) | ((parseInt(b) << 16) & 0xFFFF0000);
};

/* returns <vec2> */
shor2.decode = function(/* shor2 */ a) {
    return vec2.make(a & 0xFFFF, (a >> 16) & 0xFFFF);
};

/* returns [x,y] */
shor2.asArray = function(/* shor2 */ a) {
    return [a & 0xFFFF, (a >> 16) & 0xFFFF];
};

var td32 = {}; // Tile Data 32bit // Stored as an int32
/* ======================================================================================== */

td32.encode = function(/* 11bit int */ index, /* 4bit int */ bump, /* boolean */ depth, /* byte */ definition, /* byte */ data) {
    return 0 | (parseInt(index) & 0x000007FF) | ((parseInt(bump) << 11) & 0x00007800) | (((depth?1:0) << 15) & 0x00008000) | ((parseInt(definition) << 16) & 0x00FF0000) | ((parseInt(data) << 24) & 0xFF000000);
};

td32.decode16 = function(/* td32 */ a) {
    return {index: a & 0x7FF, bump: (a >> 11) & 0xF, depth: ((a >> 15) & 0x1) === 1};
};

td32.decode = function(/* td32 */ a) {
    var i = (a >> 16) & 0xFF;
    var def = !td32.TILE_PROPERTIES[i]?td32.TILE_PROPERTIES[0]:td32.TILE_PROPERTIES[i];
    return {index: a & 0x7FF, bump: (a >> 11) & 0xF, depth: ((a >> 15) & 0x1) === 1, definition: def, data: (a >> 24) & 0xFF};
};

td32.bump = function(/* td32 */ a, /*4bit unsigned integer*/ b ) {
    return (a & 0b11111111111111111000011111111111) | ((b << 11) & 0b00000000000000000111100000000000);
};

td32.data = function(/* td32 */ a, /*1 byte uint*/ b) {
    return (a & 0x00FFFFFF) | ((b << 24) & 0xFF000000);
};

td32.asArray = function(/* td32 */ a) {
    return [a & 0x7FF, (a >> 11) & 0xF, ((a >> 15) & 0x1) === 1, (a >> 16) & 0xFF, (a >> 24) & 0xFF];
};

td32.TRIGGER = {
    TYPE: {
        TOUCH: 0x00,
        DOWN: 0x01,
        PUSH: 0x02,
        SMALL_BUMP: 0x10,
        BIG_BUMP: 0x11
    }
};

td32.GEN_FUNC = {};

td32.GEN_FUNC.BUMP = function(game, pid, td, level, zone, x, y, type) {
    game.world.getZone(level, zone).bump(x,y);
    var tdim = vec2.make(1.,0.15);
    var tpos = vec2.make(x, y+1.);
    for(var i=0;i<game.objects.length;i++) {
        var obj = game.objects[i];
        if(!obj.dead && obj.level === level && obj.zone === zone && obj.dim) {
            if(squar.intersection(tpos, tdim, obj.pos, obj.dim)) {
                if(obj instanceof PlayerObject) { obj.bounce(); }
                else if(obj.bounce) { obj.bounce(); }
                else if(obj.bonk) { obj.bonk(); }
                else if(obj instanceof CoinObject) {
                    //this happens when you hit a bumpable block with a coin above
                    if(game.pid === pid) {
                        obj.playerCollide(game.getPlayer());
                        game.world.getZone(level, zone).coin(obj.pos.x, obj.pos.y);
                    }
                }
            }
        }
    }
};


td32.GEN_FUNC.BREAK = function(game, pid, td, level, zone, x, y, type) {
    var rep = 30; // Replacement td32 data for broken tile.
    game.world.getZone(level, zone).break(x,y,rep);
    var tdim = vec2.make(1.,0.15);
    var tpos = vec2.make(x, y+1.);
    for(var i=0;i<game.objects.length;i++) {
        var obj = game.objects[i];
        if(!obj.dead && obj.level === level && obj.zone === zone && obj.dim) {
            if(squar.intersection(tpos, tdim, obj.pos, obj.dim)) {
                if(obj instanceof PlayerObject) { obj.bounce(); }
                else if(obj.bounce) { obj.bounce(); }
                else if(obj.bonk) { obj.bonk(); }
                else if(obj instanceof CoinObject) {
                    //this happens when you break a brick as non-small Mario with a coin above
                    if(game.pid === pid) {
                        obj.playerCollide(game.getPlayer());
                        game.world.getZone(level, zone).coin(obj.pos.x, obj.pos.y);
                    }
                }
            }
        }
    }
};

td32.TILE_PROPERTIES = {
    /* Nothing */
    0x00: {
        NAME: "AIR",
        COLLIDE: false,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
    },
    /* Solid Standard */
    0x01: {
        NAME: "SOLID STANDARD",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
    },
    /* Solid Bumpable */
    0x02: {
        NAME: "SOLID BUMPABLE",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10 :
                case 0x11 : {
                    if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    break;
                }
            }
        }
    },
    /* Solid Breakable Normal */
    0x03: {
        NAME: "SOLID BREAKABLE NORMAL",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Small bump */
                case 0x10 : {
                    if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    break;
                }
                /* Big bump */
                case 0x11 : {
                    if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
                    td32.GEN_FUNC.BREAK(game, pid, td, level, zone, x, y, type);
                    break;
                }
            }
        }
    },
    /* Solid Damage */
    0x04: {
        NAME: "SOLID DAMAGE",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Touch */
                case 0x00 : {
                    if(game.pid === pid) {
                        game.getPlayer().damage();
                    }
                }
            }
        }
    },
    /* Semisolid */
    0x05: {
        NAME: "SEMISOLID",
        COLLIDE: true,
        PLATFORM: true,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
    },
    /* Semisolid Weak */
    0x06: {
        NAME: "SEMISOLID WEAK",
        COLLIDE: true,
        PLATFORM: "WEAK",
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {}
    },
    /* Item Block Normal */
    0x11: {
        NAME: "ITEM BLOCK STANDARD",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            if ((app.net.gameMode === 1 || app.net.gameMode === 2) && game.pid !== pid) return;
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10 :
                case 0x11 : {
                    if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
                    var rep = 98331; // Replacement td32 data for tile.
                    game.world.getZone(level, zone).replace(x,y,rep);
                    game.createObject(td.data, level, zone, vec2.make(x,y), [shor2.encode(x,y)]);
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    game.world.getZone(level, zone).play(x,y,"item.wav",1.,0.04);
                    break;
                }
            }
        }
    },
    /* Coin Block Normal */
    0x12: {
        NAME: "COIN BLOCK STANDARD",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10:
                case 0x11: {
                    if(game.pid === pid) {
                        game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type));
                        game.addCoin(false, true);
                    }
                    var rep = 98331; // Replacement td32 data for tile.
                    game.world.getZone(level, zone).replace(x,y,rep);
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    game.world.getZone(level, zone).coin(x,y+1);
                    break;
                }
            }
        }
    },
    /* Coin Block Multi */
    0x13: {
        NAME: "COIN BLOCK MULTI",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10 :
                case 0x11 : {
                    if(game.pid === pid) {
                        game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type));
                        game.addCoin(false, true);
                    }
                    if(td.data > 1) {
                        var raw = game.world.getZone(level, zone).tile(x,y);
                        var rep = td32.data(raw, td.data-1);    // Replacement td32 data for tile.
                        game.world.getZone(level, zone).replace(x,y,rep);
                        game.world.getZone(level, zone).coin(x,y+1);
                        td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    }
                    else {
                        var rep = 98331; // Replacement td32 data for tile.
                        game.world.getZone(level, zone).replace(x,y,rep);
                        game.world.getZone(level, zone).coin(x,y+1);
                        td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    }
                    break;
                }
            }
        }
    },
    /* Vine Block */
    0x18: {
        NAME: "VINE BLOCK",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10 :
                case 0x11 : {
                    if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
                    var rep = 98331; // Replacement td32 data for tile.
                    var vin = td32.data(10813796, td.data); // Vine td32 data for tile.
                    game.world.getZone(level, zone).replace(x,y,rep);
                    game.world.getZone(level, zone).grow(x,y+1,vin);
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    game.world.getZone(level, zone).play(x,y,"vine.wav",1.,0.04);
                    break;
                }
            }
        }
    },
    /* Item Block Invisible */
    0x15: {
        NAME: "ITEM BLOCK INVISIBLE",
        COLLIDE: true,
        HIDDEN: true,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            if ((app.net.gameMode === 1 || app.net.gameMode === 2) && game.pid !== pid) return;
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10 :
                case 0x11 : {
                    if(game.pid === pid) { game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type)); }
                    var rep = 98331; // Replacement td32 data for tile.
                    game.world.getZone(level, zone).replace(x,y,rep);
                    game.createObject(td.data, level, zone, vec2.make(x,y), [shor2.encode(x,y)]);
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    game.world.getZone(level, zone).play(x,y,"item.wav",1.,0.04);
                    break;
                }
            }
        }
    },
    /* Coin Block INVISIBLE */
    0x16: {
        NAME: "COIN BLOCK INVISIBLE",
        COLLIDE: true,
        HIDDEN: true,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10 :
                case 0x11 : {
                    if(game.pid === pid) {
                        game.out.push(NET030.encode(level, zone, shor2.encode(x,y), type));
                        game.addCoin(false, true);
                    }
                    var rep = 98331; // Replacement td32 data for tile.
                    game.world.getZone(level, zone).replace(x,y,rep);
                    game.world.getZone(level, zone).coin(x,y+1);
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    break;
                }
            }
        }
    },
    /* Warp Tile */
    0x51: {
        NAME: "WARP TILE",
        COLLIDE: false,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Touch */
                case 0x00 : {
                    if(game.pid === pid) {
                        game.getPlayer().warp(td.data);
                    }
                }
            }
        }
    },
    /* Warp Pipe */
    0x52: {
        NAME: "WARP PIPE SLOW",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Down */
                case 0x01 : {
                    if(game.pid === pid) {
                        var ply = game.getPlayer();
                        var l = game.world.getZone(level, zone).getTile(vec2.make(x-1,y));
                        var r = game.world.getZone(level, zone).getTile(vec2.make(x+1,y));

                        var cx;
                        if(l.definition === this) { cx = x; }
                        else if(r.definition === this) { cx = x+1; }
                        else { return; }

                        if(Math.abs((ply.pos.x + (ply.dim.x*.5)) - cx) <= 0.45) { ply.pipe(2, td.data, 50); }
                    }
                }
            }
        }
    },
    /* Warp Pipe Horiz */
    0x53: {
        NAME: "WARP PIPE RIGHT SLOW",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Push */
                case 0x02 : {
                    if(game.pid === pid) {
                        game.getPlayer().pipe(4, td.data, 50);
                    }
                }
            }
        }
    },
    /* Warp Pipe */
    0x54: {
        NAME: "WARP PIPE FAST",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Down */
                case 0x01 : {
                    if(game.pid === pid) {
                        var ply = game.getPlayer();
                        var l = game.world.getZone(level, zone).getTile(vec2.make(x-1,y));
                        var r = game.world.getZone(level, zone).getTile(vec2.make(x+1,y));

                        var cx;
                        if(l.definition === this) { cx = x; }
                        else if(r.definition === this) { cx = x+1; }
                        else { return; }

                        if(Math.abs((ply.pos.x + (ply.dim.x*.5)) - cx) <= 0.45) { ply.pipe(2, td.data, 0); }
                    }
                }
            }
        }
    },
    /* Warp Pipe Horiz */
    0x55: {
        NAME: "WARP PIPE RIGHT FAST",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Push */
                case 0x02 : {
                    if(game.pid === pid) {
                        game.getPlayer().pipe(4, td.data, 0);
                    }
                }
            }
        }
    },
    /* End of Level Warp */
    0x56: {
        NAME: "LEVEL END WARP",
        COLLIDE: false,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Touch */
                case 0x00 : {
                    if(game.pid === pid) {
                        game.levelWarp(td.data);
                    }
                }
            }
        }
    },
    /* Flagpole */
    0xA0: {
        NAME: "FLAGPOLE",
        COLLIDE: false,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Touch */
                case 0x00 : {
                    if(game.pid === pid) {
                        var ply = game.getPlayer();
                        if(ply.pos.x >= x) { ply.pole(vec2.make(x,y)); }
                    }
                }
            }
        }
    },
    /* Vine */
    0xA5: {
        NAME: "VINE",
        COLLIDE: false,
        HIDDEN: false,
        ASYNC: true,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Touch */
                case 0x00 : {
                    if(game.pid === pid) {
                        var ply = game.getPlayer();
                        if(ply.pos.x >= x && ply.pos.x <= x+1.) { ply.vine(vec2.make(x,y), td.data); }
                    }
                }
            }
        }
    },
    /* Vote Block */
    0xF0: {
        NAME: "VOTE BLOCK",
        COLLIDE: true,
        HIDDEN: false,
        ASYNC: false,
        TRIGGER: function(game, pid, td, level, zone, x, y, type) {
            switch(type) {
                /* Small bump */
                /* Big bump */
                case 0x10 :
                case 0x11 : {
                    if(game.pid === pid) { game.send({type: "g50"}); }
                    var rep = 98331; // Replacement td32 data for tile.
                    game.world.getZone(level, zone).replace(x,y,rep);
                    game.createObject(CheckObject.ID, level, zone, vec2.make(x,y+1), [shor2.encode(x,y)]);
                    td32.GEN_FUNC.BUMP(game, pid, td, level, zone, x, y, type);
                    break;
                }
            }
        }
    }
};

var NETX = {}; // Main
/* ======================================================================================== */

NETX.decode = function(/* Uint8Array */ data) {
    var de = [];
    var i = 0;
    while(i<data.length) {
        var desig = data.slice(i++, i)[0];
        switch(desig) {
            case 0x02 : { de.push(NET001.decode(data.slice(i, i+=NET001.BYTES-1))); break; }
            case 0x10 : { de.push(NET010.decode(data.slice(i, i+=NET010.BYTES-1))); break; }
            case 0x11 : { de.push(NET011.decode(data.slice(i, i+=NET011.BYTES-1))); break; }
            case 0x12 : { de.push(NET012.decode(data.slice(i, i+=NET012.BYTES-1))); break; }
            case 0x13 : { de.push(NET013.decode(data.slice(i, i+=NET013.BYTES-1))); break; }
            case 0x17 : { de.push(NET017.decode(data.slice(i, i+=NET017.BYTES-1))); break; }
            case 0x18 : { de.push(NET018.decode(data.slice(i, i+=NET018.BYTES-1))); break; }
            case 0x20 : { de.push(NET020.decode(data.slice(i, i+=NET020.BYTES-1))); break; }
            case 0x21 : { de.push(NET021.decode(data.slice(i, i+=NET021.BYTES-1))); break; }
            case 0x22 : { de.push(NET022.decode(data.slice(i, i+=NET022.BYTES-1))); break; }
            case 0x30 : { de.push(NET030.decode(data.slice(i, i+=NET030.BYTES-1))); break; }
            default : { if(app) { app.menu.warn.show("Error decoding binary data! desig="+desig); } return de; }
        }
    }
    return de;
};

var NET001 = {}; // ASSIGN_PID [0x1] // As Uint8Array
/* ======================================================================================== */
NET001.DESIGNATION = 0x02;
NET001.BYTES = 6;

/* Server->Client */
NET001.decode = function(/* NET001_SERV */ a) {
    return {
        designation: NET001.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        skin: (a[3] & 0x00FF) | ((a[2] << 8) & 0xFF00),
        isDev: a[4]
    };
};

var NET010 = {}; // CREATE_PLAYER_OBJECT [0x10] // As Uint8Array
/* ======================================================================================== */
NET010.DESIGNATION = 0x10;
NET010.BYTES = 12;

/* Client->Server */
NET010.encode = function(/* byte */ levelID, /* byte */ zoneID, /* shor2 */ pos) {
    return new Uint8Array([NET010.DESIGNATION, levelID, zoneID, (pos >> 24) & 0xFF, (pos >> 16) & 0xFF, (pos >> 8) & 0xFF, pos & 0xFF]);
};

/* Server->>>Client */
NET010.decode = function(/* NET010_SERV */ a) {
    return {
        designation: NET010.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        level: a[2],
        zone: a[3],
        pos: (a[7] & 0xFF) | ((a[6] << 8) & 0xFF00) | ((a[5] << 16) & 0xFF0000) | ((a[4] << 24) & 0xFF0000),
        skin: (a[9] & 0xFF) | (a[8] << 8),
        isDev: a[10]
    };
};

var NET011 = {}; // KILL_PLAYER_OBJECT [0x11] // As Uint8Array
/* ======================================================================================== */
NET011.DESIGNATION = 0x11;
NET011.BYTES = 3;

/* Client->Server */
NET011.encode = function() {
    return new Uint8Array([NET011.DESIGNATION]);
};

/* Server->>>Client */
NET011.decode = function(/* NET011_SERV */ a) {
    return {
        designation: NET011.DESIGNATION, pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00)
    };
};

var NET012 = {}; // UPDATE_PLAYER_OBJECT [0x12] // As Uint8Array
/* ======================================================================================== */
NET012.DESIGNATION = 0x12;
NET012.BYTES = 15;

/* Client->Server */
NET012.encode = function(/* byte */ levelID, /* byte */ zoneID, /* vec2 */ pos, /* byte */ spriteID, /* byte */ reverse) {
    var farr = new Float32Array([pos.x, pos.y]);
    var barr = new Uint8Array(farr.buffer);
    return new Uint8Array([
        NET012.DESIGNATION, levelID, zoneID,
        barr[3], barr[2], barr[1], barr[0],
        barr[7], barr[6], barr[5], barr[4],
        spriteID,
        reverse
    ]);
};

/* Server->>Client */
NET012.decode = function(/* NET012_SERV */ a) {
    var b1 = new Uint8Array([a[4], a[5], a[6], a[7]]);
    var b2 = new Uint8Array([a[8], a[9], a[10], a[11]]);
    var v1 = new DataView(b1.buffer);
    var v2 = new DataView(b2.buffer);

    return {
        designation: NET012.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        level: a[2],
        zone: a[3],
        pos: vec2.make(v1.getFloat32(0), v2.getFloat32(0)),
        sprite: a[12],
        reverse: a[13] !== 0
    };
};

var NET013 = {}; // PLAYER_OBJECT_EVENT [0x13] // As Uint8Array
/* ======================================================================================== */
NET013.DESIGNATION = 0x13;
NET013.BYTES = 4;

/* Client->Server */
NET013.encode = function(/* byte */ type) {
    return new Uint8Array([NET013.DESIGNATION, type]);
};

/* Server->>>Client */
NET013.decode = function(/* NET013_SERV */ a) {
    return {
        designation: NET013.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        type: a[2]
    };
};

var NET015 = {}; // PLAYER_INVALID_MOVE [0x15] // As Uint8Array
/* ======================================================================================== */
NET015.DESIGNATION = 0x15;
NET015.BYTES = 3;

/* Client->Server */
NET015.encode = function() {
    return new Uint8Array([NET015.DESIGNATION]);
};

var NET017 = {}; // PLAYER_KILL_EVENT [0x17] // As Uint8Array
/* ======================================================================================== */
NET017.DESIGNATION = 0x17;
NET017.BYTES = 5;

/* Client->Server */
NET017.encode = function(/* short */ killer) {
    return new Uint8Array([NET017.DESIGNATION, killer >> 8 & 0xFF, killer & 0xFF]);
};

/* Server->Client */
NET017.decode = function(/* NET017_SERV */ a) {
    return {
        designation: NET017.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        killer: (a[3] & 0x00FF) | ((a[2] << 8) & 0xFF00)
    };
};

var NET018 = {}; // PLAYER_RESULT_REQUEST [0x18] // As Uint8Array
/* ======================================================================================== */
NET018.DESIGNATION = 0x18;
NET018.BYTES = 5;

/* Client->Server */
NET018.encode = function() {
    return new Uint8Array([NET018.DESIGNATION]);
};

/* Server->>>Client */
NET018.decode = function(/* NET011_SERV */ a) {
    return {
        designation: NET018.DESIGNATION, pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00), result: a[2], extra: a[3]
    };
};

var NET019 = {}; // PLAYER_SNITCH [0x19] // As Uint8Array
/* ======================================================================================== */
NET019.DESIGNATION = 0x19;
NET019.BYTES = 3;

/* Client->Server */
NET019.encode = function() {
    return new Uint8Array([NET019.DESIGNATION]);
};

var NET020 = {}; // OBJECT_EVENT_TRIGGER [0x20] // As Uint8Array
/* ======================================================================================== */
NET020.DESIGNATION = 0x20;
NET020.BYTES = 10;

/* Client->Server */
NET020.encode = function(/* byte */ levelID, /* byte */ zoneID, /* int */ oid, /* byte */ type) {
    return new Uint8Array([
        NET020.DESIGNATION, levelID, zoneID,
        (oid >> 24) & 0xFF, (oid >> 16) & 0xFF, (oid >> 8) & 0xFF, oid & 0xFF,
        type
    ]);
};

/* Server->>>Client */
NET020.decode = function(/* NET020_SERV */ a) {
    return {
        designation: NET020.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        level: a[2],
        zone: a[3],
        oid: (a[7] & 0xFF) | ((a[6] << 8) & 0xFF00) | ((a[5] << 16) & 0xFF0000) | ((a[4] << 24) & 0xFF0000),
        type: a[8]
    };
};

var NET021 = {}; // GET_COIN [0x21] // As Uint8Array
/* ======================================================================================== */
NET021.DESIGNATION = 0x21;
NET021.BYTES = 2;

/* Server->>>Client */
NET021.decode = function(/* NET021_SERV */ a) {
    return {
        designation: NET021.DESIGNATION,
        type: a[0]
    };
};

var NET022 = {}; // GET_COIN_LB [0x22] // As Uint8Array
/* ======================================================================================== */
NET022.DESIGNATION = 0x22;
NET022.BYTES = 5;

/* Server->>>Client */
NET022.decode = function(/* NET022_SERV */ a) {
    return {
        designation: NET022.DESIGNATION,
        coins: (a[3] & 0xFF) | ((a[2] << 8) & 0xFF00) | ((a[1] << 16) & 0xFF0000) | ((a[0] << 24) & 0xFF000000)
    };
};

var NET030 = {}; // TILE_EVENT_TRIGGER [0x30] // As Uint8Array
/* ======================================================================================== */
NET030.DESIGNATION = 0x30;
NET030.BYTES = 10;

/* Client->Server */
NET030.encode = function(/* byte */ levelID, /* byte */ zoneID, /* shor2 */ pos, /* byte */ type) {
    return new Uint8Array([
        NET030.DESIGNATION, levelID, zoneID,
        (pos >> 24) & 0xFF, (pos >> 16) & 0xFF, (pos >> 8) & 0xFF, pos & 0xFF,
        type
    ]);
};

/* Server->/>Client */
NET030.decode = function(/* NET030_SERV */ a) {
    return {
        designation: NET030.DESIGNATION,
        pid: (a[1] & 0x00FF) | ((a[0] << 8) & 0xFF00),
        level: a[2],
        zone: a[3],
        pos: shor2.decode((a[7] & 0xFF) | ((a[6] << 8) & 0xFF00) | ((a[5] << 16) & 0xFF0000) | ((a[4] << 24) & 0xFF0000)),
        type: a[8]
    };
};

/* Merges all Uint8Arrays into one */
var MERGE_BYTE = function(/* Uint8Array[] */ a) {
    var data = [];
    for(var i=0;i<a.length;i++) {
        for(var j=0;j<a[i].length;j++) {
            data.push(a[i][j]);
        }
    }
    return new Uint8Array(data);
};
"use strict";
var squar = {};

squar.intersection = function(_0x43a044, _0x59c3e0, _0x4eb9a3, _0x4741a0) {
    return _0x4eb9a3.x < _0x43a044.x + _0x59c3e0.x && _0x4eb9a3.x + _0x4741a0.x > _0x43a044.x && _0x4eb9a3.y < _0x43a044.y + _0x59c3e0.y && _0x4eb9a3.y + _0x4741a0.y > _0x43a044.y;
};
squar.inside = function(_0x15c2a5, _0x1957cd, _0x4042e7) {
    return _0x1957cd.x < _0x15c2a5.x && _0x1957cd.x + _0x4042e7.x > _0x15c2a5.x && _0x1957cd.y < _0x15c2a5.y && _0x1957cd.y + _0x4042e7.y > _0x15c2a5.y;
};
"use strict";

function Menu() {
    this.body = document.getElementsByTagName("BODY")[0];
    window.history.pushState({
        'html': "index.html",
        'pageTitle': "Mario Royale"
    }, '', '#');
    var screens = [{
        'id': "warn",
        'obj': new WarnScreen()
    }, {
        'id': "error",
        'obj': new ErrorScreen()
    }, {
        'id': "load",
        'obj': new LoadScreen()
    }, {
        'id': "disclaim",
        'obj': new DisclaimScreen()
    }, {
        'id': "main",
        'obj': new MainScreen()
    }, {
        'id': "mainAsMember",
        'obj': new MainAsMemberScreen()
    }, {
        'id': "profile",
        'obj': new ProfileScreen()
    }, {
        'id': "pwdChange",
        'obj': new PwdChangeScreen()
    }, {
        'id': "name",
        'obj': new NameScreen()
    }, {
        'id': "login",
        'obj': new LoginScreen()
    }, {
        'id': "register",
        'obj': new RegisterScreen()
    }, {
        'id': "game",
        'obj': new GameScreen()
    }];
    this.menus = [];
    for (var i = 0x0; i < screens.length; i++) this.menus[i] = screens[i].obj, this[screens[i].id] = screens[i].obj;
    this.lastNav = '';
    var menu = this;
    window.onpopstate = function(screens) {
        if (menu[menu.lastNav] && menu[menu.lastNav].onBack) menu.onBack();
        else screens.state && "Mario Royale" !== screens.state.pageTitle ? (
            document.getElementById("content").innerHTML = screens.state.html,
            document.title = screens.state.pageTitle)
        : screens.state && "Mario Royale" === screens.state.pageTitle && window.history.back();
    };
    this.hideAll();
    this.background('c');
    this.body.style.display = "block";
}
Menu.prototype.hideAll = function() {
    for (var i = 0x1; i < this.menus.length; i++) this.menus[i].hide();
};
Menu.prototype.background = function(_0x36dd53) {
    if (_0x36dd53 !== this.bid) {
        switch (_0x36dd53) {
            case 'b':
                _0x36dd53 = "background-b";
                break;
            case 'c':
                _0x36dd53 = "background-c";
                break;
            default:
                _0x36dd53 = "background-a";
        }
        this.body.classList.remove("background-a");
        this.body.classList.remove("background-b");
        this.body.classList.remove("background-c");
        this.body.classList.add(_0x36dd53);
    }
};
Menu.prototype.navigation = function(lastNav, title) {
    this.lastNav = lastNav;
    window.history.replaceState({
        'html': "index.html",
        'pageTitle': "Mario Royale"
    }, title, '#' + title);
};
Menu.prototype.onBack = function() {
    window.history.pushState({
        'html': "index.html",
        'pageTitle': "Mario Royale"
    }, '', '#');
    this[this.lastNav].onBack();
};
"use strict";

function WarnScreen() {
    this.element = document.getElementById("warn");
    this.hide();
    this.timeout = undefined;
}
WarnScreen.prototype.show = function(_0x281bdb) {
    this.element.innerHTML = "<img src='img/home/warn.png' class='warn-ico'/> " + _0x281bdb;
    console.warn("##WARN## " + _0x281bdb);
    this.timeout && clearTimeout(this.timeout);
    var _0x2893b1 = this.element;
    this.timeout = setTimeout(function() {
        _0x2893b1.style.display = "none";
    }, 0x1388);
    this.element.style.display = "block";
};
WarnScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function ErrorScreen() {
    this.element = document.getElementById("error");
    this.error = document.getElementById("error-message");
}
ErrorScreen.prototype.show = function(mainError, consoleError, consoleTrace) {
    app.net.close();
    app.menu.hideAll();
    app.menu.navigation("error", "error");
    app.menu.background('b');
    this.error.innerHTML = mainError;
    mainError && console.error("##ERROR## " + mainError);
    consoleError && console.warn("##ERROR## " + consoleError);
    consoleTrace && console.warn("##TRACE## " + consoleTrace);
    this.element.style.display = "block";
};
ErrorScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function LoadScreen() {
    this.element = document.getElementById("load");
}
LoadScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.background('a');
    this.element.style.display = "block";
};
LoadScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function DisclaimScreen() {
    this.element = document.getElementById("disclaim");
    this.linkElement = document.getElementById("link");
}
DisclaimScreen.prototype.show = function(_0x2243c7) {
    app.menu.hideAll();
    app.menu.background('c');
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
};
DisclaimScreen.prototype.hide = function() {
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
};
"use strict";

function MainScreen() {
    this.element = document.getElementById("main");
    this.linkElement = document.getElementById("link");
    this.winElement = document.getElementById("win");
    this.launchBtn = document.getElementById("main-launch");
    this.loginBtn = document.getElementById("main-login");
    this.registerBtn = document.getElementById("main-register");
    this.onlineNum = document.getElementById("main-number");
    this.numberFull = document.getElementById("main-numberFull");
    this.maintenance = document.getElementById("main-maintenance");
    this.padLoop = undefined;
    var mainscreen = this;
    this.launchBtn.onclick = function() {
        mainscreen.launch();
    };
    this.loginBtn.onclick = function() {
        mainscreen.showLogin();
    };
    this.registerBtn.onclick = function() {
        mainscreen.showRegister();
    };
}
MainScreen.prototype.launch = function() {
    app.menu.name.show();
};

MainScreen.prototype.showLogin = function() {
    app.menu.login.show();
};

MainScreen.prototype.showRegister = function() {
    app.menu.register.show();
    app.requestCaptcha();
};

function genStartPad(target) {
    var buttonA = isNaN(parseInt(Cookies.get("g_a"))) ? 0x0 : parseInt(Cookies.get("g_a"));
    var buttonAPressed = false;
    var startPadLoop = function() {
        var gamepad;
        navigator && (gamepad = navigator.getGamepads()[0x0]);
        gamepad && !gamepad.buttons[buttonA].pressed && buttonAPressed && target.launch();
        gamepad && (buttonAPressed = gamepad.buttons[buttonA].pressed);
        target.padLoop = setTimeout(startPadLoop, 0x21);
    };
    startPadLoop();
}
MainScreen.prototype.startPad = function() {
    genStartPad(this);
};
function setUpdatePlayerNumber(target) {
    target.updateStatus = function(firstTry) {
        $.ajax({
            'url': "status.json",
            'type': "GET",
            'timeout': 0xbb8,
            'success': function(data) {
                if (data.result) {
                    firstTry && target.menu.error.show(data.result);
                } else {
                    if (data.maintenance) {
                        target.numberFull.style.display = "none";
                        target.maintenance.style.display = "";
                    } else {
                        target.onlineNum.innerHTML = data.active;
                        target.maintenance.style.display = "none";
                        target.numberFull.style.display = "";
                    }
                }
            },
            cache: false
        });
    };
}
MainScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("main", "main");
    app.menu.background('a');
    this.updateStatsBar();
    this.winElement.style.display = "block";
    this.startPad();
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
    session = Cookies.get("session");
    if (session != undefined) {
        app.resumeSession(session);
    }
    setUpdatePlayerNumber(this);
    this.updateStatus(true);
    app.statusUpdater = setInterval(this.updateStatus, 1000);
};
MainScreen.prototype.hide = function() {
    this.padLoop && clearTimeout(this.padLoop);
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
    if (app && app.statusUpdater) {
        clearInterval(app.statusUpdater);
        app.statusUpdater = null;
    }
};
MainScreen.prototype.updateStatsBar = function() {
    this.winElement.innerHTML = "Login to track statistics";
};
"use strict";

function MainAsMemberScreen() {
    this.element = document.getElementById("mainAsMember");
    this.linkElement = document.getElementById("link");
    this.charMusicToggle = document.getElementById("mainAsMember-char-music-toggle");
    this.launchBtn = document.getElementById("mainAsMember-launch");
    this.profileBtn = document.getElementById("mainAsMember-profile");
    this.pwdBtn = document.getElementById("mainAsMember-pwd");
    this.logoutBtn = document.getElementById("mainAsMember-logout");
    this.privateBtn = document.getElementById("mainAsMember-private-toggle");
    this.gmBtn = document.getElementById("mainAsMember-gm-change");
    this.onlineNum = document.getElementById("mainAsMember-number");
    this.numberFull = document.getElementById("mainAsMember-numberFull");
    this.maintenance = document.getElementById("mainAsMember-maintenance");
    this.isPrivate = false;
    this.gameMode = 0;
    var that = this;
    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.profileBtn.onclick = function() {
        that.showProfile();
    };
    this.pwdBtn.onclick = function() {
        that.showPwdChange();
    };
    this.logoutBtn.onclick = function() {
        that.logout();
    };
    this.privateBtn.onclick = function() {
        that.isPrivate = !that.isPrivate;
        that.updPrivateBtn();
        Cookies.set("mpriv", that.isPrivate, {
            'expires': 0x1e
        });
    };
    this.charMusicToggle.onclick = function() {
        app.charMusic = !app.charMusic;
        that.updMusicBtn();
        Cookies.set("char_music", app.charMusic ? "1" : "0", {
            'expires': 0x1e
        });
    }
    this.gmBtn.onclick = function() {
        that.gameMode = (that.gameMode+1) % GAMEMODES.length;
        that.updGameModeBtn();
        Cookies.set("gamemode", that.gameMode, {
            'expires': 0x1e
        });
    }
}

MainAsMemberScreen.prototype.show = function(data) {
    app.menu.hideAll();
    app.menu.background('a');
    if (data === undefined) {
        this.element.style.display = "block";
        return;
    }
    if (data.session != undefined) {
        Cookies.set("session", data.session, {
            'expires': 0x1e
        });
    }
    var savedPriv = Cookies.get("mpriv");
    var savedGm = Cookies.get("gamemode");
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.wins = data.wins || 0;
    this.deaths = data.deaths || 0;
    this.nickname = data.nickname;
    this.squad = data.squad;
    this.skin = data.skin;
    this.isPrivate = savedPriv ? (savedPriv == "true") : false;
    this.gameMode = savedGm ? parseInt(savedGm) : 0;
    this.updPrivateBtn();
    this.updMusicBtn();
    this.updGameModeBtn();
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
    if (app.goToLobby) {
        this.launch();
    } else {
        setUpdatePlayerNumber(this);
        this.updateStatus(true);
        app.statusUpdater = setInterval(this.updateStatus, 1000);
    }
    app.menu.main.winElement.innerText = "wins x"+this.wins+" deaths x"+this.deaths+" kills x"+this.kills+" coins x"+this.coins;
};
MainAsMemberScreen.prototype.hide = function() {
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
    if (app && app.statusUpdater) {
        clearInterval(app.statusUpdater);
        app.statusUpdater = null;
    }
};

MainAsMemberScreen.prototype.launch = function() {
    app.join(this.nickname, this.squad, this.isPrivate, this.skin, this.gameMode);
};

MainAsMemberScreen.prototype.showProfile = function() {
    app.menu.profile.show({"nickname": this.nickname, "squad": this.squad, "skin": this.skin});
};
MainAsMemberScreen.prototype.showPwdChange = function() {
    app.menu.pwdChange.show();
};
MainAsMemberScreen.prototype.logout = function() {
    app.logout();
};
MainAsMemberScreen.prototype.updPrivateBtn = function() {
    if (!this.isPrivate) {
        this.privateBtn.classList.add("disabled");
        this.privateBtn.classList.remove("enabled");

        this.launchBtn.style.color = "";
        this.launchBtn.classList.remove("tooltip");
        var elem = document.getElementById("mainAsMember-launch-tooltip");
        if(elem)
            this.launchBtn.removeChild(elem);
    } else {
        this.privateBtn.classList.add("enabled");
        this.privateBtn.classList.remove("disabled");

        this.launchBtn.style.color = "yellow";
        this.launchBtn.classList.add("tooltip");

        var elem = document.getElementById("mainAsMember-launch-tooltip");
        if (!elem) {
            elem = document.createElement("span");
            elem.setAttribute("id", "mainAsMember-launch-tooltip");
            elem.classList.add("tooltiptext");
            elem.innerText = "You're joining a private room!"
            this.launchBtn.appendChild(elem);
        }
    }
};
MainAsMemberScreen.prototype.updMusicBtn = function() {
    if (!app.charMusic) {
        this.charMusicToggle.classList.add("disabled");
        this.charMusicToggle.classList.remove("enabled");
    } else {
        this.charMusicToggle.classList.add("enabled");
        this.charMusicToggle.classList.remove("disabled");
    }
}
MainAsMemberScreen.prototype.updGameModeBtn = function() {
    for (var i=0; i<GAMEMODES.length; i++) {
        this.gmBtn.classList.remove(GAMEMODES[i]);
    }
    this.gmBtn.classList.add(GAMEMODES[this.gameMode]);
    const capitalize = function(s) { return s.charAt(0).toUpperCase() + s.slice(1) }
    this.gmBtn.firstElementChild.innerHTML = "Change the current game mode<br><font size='2'>Current one is: <u>" + capitalize(GAMEMODES[this.gameMode]) + "</u></font>";
}
function genSelectSkin(screen, skinIdx) {
    if (screen.skin !== undefined) {
        document.getElementById(screen.skinButtonPrefix+screen.skin).style["border-color"] = "black";
    }
    screen.skin = skinIdx;
    var elem = document.getElementById(screen.skinButtonPrefix+screen.skin);
    if (elem) {
        elem.style["border-color"] = "white";
    } else {
        screen.skin = 0;
        document.getElementById(screen.skinButtonPrefix+screen.skin).style["border-color"] = "white";
    }
}

function genAddSkinButton(screen) {
    for (var i=0; i<SKINCOUNT; i++) {
        if (DEV_SKINS.includes(i) && (!(screen instanceof ProfileScreen) || !(
           ["taliondiscord",
            "damonj17",
            "ddmil@marioroyale:~$",
            "pixelcraftian",
            "igor",
            "minus",
            "cyuubi",
            "gyorokpeter",
            "zizzydizzymc",
            "nuts & milk",
            "jupitersky",
            "nethowarrior",
            "real novex",
            "nightyoshi370"].includes(app.net.username.toLowerCase())))) {
            continue;
        }
        var elem = document.createElement("div");
        elem.setAttribute("class", "skin-select-button");
        elem.setAttribute("id", screen.skinButtonPrefix+i);
        elem.style["background-image"] = "url('img/game/smb_skin" + i +".png')";
        elem.addEventListener("click", (function(a){return function() {genSelectSkin(screen, a);};})(i));
        document.getElementById(screen.skinButtonPrefix).appendChild(elem);
    }
    $("#"+screen.skinButtonPrefix).pagify(33, ".skin-select-button");
    $("#"+screen.skinButtonPrefix+"-pagination").pagify(10, ".page");
}

function NameScreen() {
    this.element = document.getElementById("name");
    this.linkElement = document.getElementById("link");
    this.nameInput = document.getElementById("name-input");
    this.teamInput = document.getElementById("team-input");
    this.charMusicToggle = document.getElementById("char-music-toggle");
    this.backBtn = document.getElementById("name-back");
    this.isPrivate = false;
    this.gameMode = 0;
    this.privateBtn = document.getElementById("name-private-toggle");
    this.gmBtn = document.getElementById("name-gm-change");
    this.launchBtn = document.getElementById("name-launch");
    this.autoMoveBtn = document.getElementById("autoMove");
    this.padLoop = undefined;
    this.skinButtonPrefix = "skin-select";
    var that = this;
    var elem = document.getElementById("levelSelectInput");
    elem.addEventListener("change", (function(){return function(event) {that.customLevelFileChangeHandler(this, event);};})());
    elem = document.getElementById("gfxTestSkinInput");
    elem.addEventListener("change", (function(){return function(event) {that.gfxTestSkinInputChangeHandler(this, event);};})());
    elem = document.getElementById("gfxTestMapInput");
    elem.addEventListener("change", (function(){return function(event) {that.gfxTestMapInputChangeHandler(this, event);};})());
    elem = document.getElementById("gfxTestObjInput");
    elem.addEventListener("change", (function(){return function(event) {that.gfxTestObjInputChangeHandler(this, event);};})());

    elem = document.getElementById("gfxTestSkinRemove");
    elem.addEventListener("click", (function(){return function(event) {that.gfxTestSkinRemove(event);};})());
    elem = document.getElementById("gfxTestMapRemove");
    elem.addEventListener("click", (function(){return function(event) {that.gfxTestMapRemove(event);};})());
    elem = document.getElementById("gfxTestObjRemove");
    elem.addEventListener("click", (function(){return function(event) {that.gfxTestObjRemove(event);};})());
    this.autoMoveBtn.addEventListener("click",(function(){return function(event) {that.setAutoMove(!app.autoMove);};})());

    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.teamInput.onkeyup = function() {
        if (that.teamInput.value.trim() === "" && that.isPrivate) {
            that.teamInput.placeholder = "[ PRIVATE ]";
        } else
            that.teamInput.placeholder = "Squad Code";
    }
    this.privateBtn.onclick = function() {
        that.isPrivate = !that.isPrivate;
        that.updPrivateBtn();
        Cookies.set("priv", that.isPrivate, {
            'expires': 0x1e
        });
        if (that.teamInput.value.trim() === "" && that.isPrivate) {
            that.teamInput.placeholder = "[ PRIVATE ]";
        } else
            that.teamInput.placeholder = "Squad Code";
    };
    this.charMusicToggle.onclick = function() {
        app.charMusic = !app.charMusic;
        that.updMusicBtn();
        Cookies.set("char_music", app.charMusic ? "1" : "0", {
            'expires': 0x1e
        });
    }
    this.gmBtn.onclick = function() {
        that.gameMode = (that.gameMode+1) % GAMEMODES.length;
        that.updGameModeBtn();
        Cookies.set("gamemode", that.gameMode, {
            'expires': 0x1e
        });
    }
    this.backBtn.onclick = function() {
        that.onBack();
    };
};

NameScreen.prototype.updPrivateBtn = function() {
    if (!this.isPrivate) {
        this.privateBtn.classList.add("disabled");
        this.privateBtn.classList.remove("enabled");

        this.launchBtn.style.color = "";
        this.launchBtn.classList.remove("tooltip");
        if (this.launchBtn.lastChild.nodeName == "SPAN") {
            this.launchBtn.removeChild(this.launchBtn.lastChild);
        }
    } else {
        this.privateBtn.classList.add("enabled");
        this.privateBtn.classList.remove("disabled");

        this.launchBtn.style.color = "yellow";
        this.launchBtn.classList.add("tooltip");

        var elem = document.createElement("span");
        elem.classList.add("tooltiptext");
        elem.innerText = "You're joining to a private room!"
        this.launchBtn.appendChild(elem);
    }
}

NameScreen.prototype.updMusicBtn = function() {
    if (!app.charMusic) {
        this.charMusicToggle.classList.add("disabled");
        this.charMusicToggle.classList.remove("enabled");
    } else {
        this.charMusicToggle.classList.add("enabled");
        this.charMusicToggle.classList.remove("disabled");
    }
}

NameScreen.prototype.updGameModeBtn = function() {
    for (var i=0; i<GAMEMODES.length; i++) {
        this.gmBtn.classList.remove(GAMEMODES[i]);
    }
    this.gmBtn.classList.add(GAMEMODES[this.gameMode]);
    const capitalize = function(s) { return s.charAt(0).toUpperCase() + s.slice(1) }
    this.gmBtn.firstElementChild.innerHTML = "Change the current game mode<br><font size='2'>Current one is: <u>" + capitalize(GAMEMODES[this.gameMode]) + "</u></font>";
}

NameScreen.prototype.selectSkin = function(skinIdx) {
    genSelectSkin(this, skinIdx);
}

NameScreen.prototype.selectLevel = function(levelKey) {
    app.net.send({'type':'gsl', 'name':levelKey});
}

NameScreen.prototype.updateLevelSelectButton = function(name) {
    if (this.currLevelSelectButton != undefined) {
        this.currLevelSelectButton.style["border-color"] = "black";
    }
    if (name == "custom") {
        elem = document.getElementById("levelSelectCustom");
    } else {
        for (var i = 0; i<levelSelectors.length; i++) {
            if (levelSelectors[i].longId == name) {
                elem = levelSelectors[i].elem;
                break;
            }
        }
    }
    elem.style["border-color"] = "white";
    this.currLevelSelectButton = elem;
};

function uploadFile(binary, event, callback) {
    var files = event.target.files;
    if (files.length == 0) return;
    var reader = new FileReader();
    reader.onload = function(event) {
        callback(event.target.result);
    }
    var file = files[0];
    if (binary)
        reader.readAsBinaryString(file);
    else
        reader.readAsText(file);
};

NameScreen.prototype.customLevelFileChangeHandler = function(elem, event) {
    uploadFile(false, event, function(result){app.net.send({'type':'gsl', 'name':'custom', 'data':result});});
};

NameScreen.prototype.gfxTestSkinInputChangeHandler = function(elem, event) {
    var that = this;
    uploadFile(true, event, function(result){that.setTestSkinImg(result);});
};

NameScreen.prototype.gfxTestMapInputChangeHandler = function(elem, event) {
    var that = this;
    uploadFile(true, event, function(result){that.setTestMapImg(result);});
};

NameScreen.prototype.gfxTestObjInputChangeHandler = function(elem, event) {
    var that = this;
    uploadFile(true, event, function(result){that.setTestObjImg(result);});
};

NameScreen.prototype.gfxTestSkinRemove = function(event) {
    if (!app.overrideSkinImg) return;
    app.overrideSkinImg = undefined;
    delete localStorage["overrideSkinImg"];
    delete app.game.display.resource.texture.cache["skin"+app.game.skin];
    app.game.display.resource.loadTexture(app.game.display.resource.texture.res["skin"+app.game.skin]);
};

NameScreen.prototype.gfxTestMapRemove = function(event) {
    if (!app.overrideMapImg) return;
    app.overrideMapImg = undefined;
    delete localStorage["overrideMapImg"];
    delete app.game.display.resource.texture.cache["map"];
    app.game.display.resource.loadTexture(app.game.display.resource.texture.res["map"]);
};

NameScreen.prototype.gfxTestObjRemove = function(event) {
    if (!app.overrideObjImg) return;
    app.overrideObjImg = undefined;
    delete localStorage["overrideObjImg"];
    delete app.game.display.resource.texture.cache["obj"];
    app.game.display.resource.loadTexture(app.game.display.resource.texture.res["obj"]);
};

function makeImageFromData(data) {
    var img = document.createElement('img');
    d_data = data;
    img.src = "data:image/png;base64," + btoa(data);
    return img;
}

NameScreen.prototype.setTestSkinImg = function(data) {
    var img = makeImageFromData(data);
    localStorage["overrideSkinImg"] = data;
    app.overrideSkinImg = img;
    app.game.display.resource.texture.cache["skin"+app.game.skin] = img;
};

NameScreen.prototype.setTestMapImg = function(data) {
    var img = makeImageFromData(data);
    localStorage["overrideMapImg"] = data;
    app.overrideMapImg = img;
    app.game.display.resource.texture.cache["map"] = img;
};

NameScreen.prototype.setTestObjImg = function(data) {
    var img = makeImageFromData(data);
    localStorage["overrideObjImg"] = data;
    app.overrideObjImg = img;
    app.game.display.resource.texture.cache["obj"] = img;
};
NameScreen.prototype.setAutoMove = function(val) {
    app.autoMove = val;
    Cookies.set("autoMove", val, {'expires': 0x1e});
    this.autoMoveBtn.innerText = (val ? "[X]" : "[ ]") + " Auto Move";
};
NameScreen.prototype.launch = function() {
    Cookies.set("name", this.nameInput.value, {
        'expires': 0x1e
    });
    Cookies.set("team", this.teamInput.value, {
        'expires': 0x1e
    });
    Cookies.set("skin", this.skin, {
        'expires': 0x1e
    });
    app.join(this.nameInput.value, this.teamInput.value, this.isPrivate, this.skin, this.gameMode);
};
NameScreen.prototype.startPad = function() {
    genStartPad(this);
};
NameScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("name", "name");
    app.menu.background('a');
    var savedName = Cookies.get("name"),
        savedTeam = Cookies.get("team"),
        savedPriv = Cookies.get("priv"),
        savedSkin = Cookies.get("skin"),
        savedGm = Cookies.get("gamemode");
    this.nameInput.value = savedName ? savedName : '';
    this.teamInput.value = savedTeam ? savedTeam : '';
    this.isPrivate = savedPriv ? (savedPriv == "true") : false;
    this.gameMode = savedGm ? parseInt(savedGm) : 0;
    if (this.teamInput.value.trim() === "" && this.isPrivate) {
        this.teamInput.placeholder = "[ PRIVATE ]";
    }
    if ($("#skin-select div").length === 0) {
        genAddSkinButton(this);
    }
    this.selectSkin(savedSkin ? parseInt(savedSkin) : 0);
    this.updPrivateBtn();
    this.updMusicBtn();
    this.updGameModeBtn();
    this.startPad();
    this.setAutoMove(app.autoMove);
    this.linkElement.style.display = "block";
    this.element.style.display = "block";
};
NameScreen.prototype.hide = function() {
    this.padLoop && clearTimeout(this.padLoop);
    this.linkElement.style.display = "none";
    this.element.style.display = "none";
};
NameScreen.prototype.onBack = function() {
    app.menu.main.show();
};
"use strict";

function ProfileScreen() {
    this.element = document.getElementById("profile");
    this.saveBtn = document.getElementById("profile-save");
    this.resultLabel = document.getElementById("profileSaveResult");
    this.nicknameInput = document.getElementById("profile-nickname");
    this.squadInput = document.getElementById("profile-team");
    this.skinButtonPrefix = "profile-skin-select";
    var that = this;
    this.saveBtn.onclick = function() {
        that.save();
    };
}
ProfileScreen.prototype.show = function(data) {
    app.menu.hideAll();
    app.menu.navigation("profile", "profile");
    app.menu.background('a');
    this.nicknameInput.value = data["nickname"];
    this.squadInput.value = data["squad"];
    if ($("#profile-skin-select div").length === 0) {
        genAddSkinButton(this);
    }
    genSelectSkin(this, data["skin"]);
    this.reportError("");
    this.element.style.display = "block";
};
ProfileScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
ProfileScreen.prototype.save = function() {
    app.net.send({
        "type": "lpr",
        "nickname": this.nicknameInput.value,
        "squad": this.squadInput.value,
        "skin": this.skin
    });
}
ProfileScreen.prototype.onBack = function() {
    this.save();
};
ProfileScreen.prototype.reportError = function(message) {
    this.resultLabel.style.display = message ? "block" : "none";
    this.resultLabel.style.color = "red";
    this.resultLabel.innerText = message;
};

function PwdChangeScreen() {
    this.element = document.getElementById("pwd");
    this.saveBtn = document.getElementById("pwd-save");
    this.passwordInput = document.getElementById("pwd-password-input");
    this.passwordInput2 = document.getElementById("pwd-password2-input");
    this.resultLabel = document.getElementById("pwdResult");
    this.backBtn = document.getElementById("pwd-back");
    var that = this;
    this.saveBtn.onclick = function() {
        that.save();
    };
    this.backBtn.onclick = function() {
        that.onBack();
    };
}
PwdChangeScreen.prototype.show = function(data) {
    app.menu.hideAll();
    app.menu.navigation("pwdChange", "pwdChange");
    app.menu.background('a');
    this.element.style.display = "block";
};
PwdChangeScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
PwdChangeScreen.prototype.reportError = function(message) {
    this.resultLabel.style.color = "red";
    this.resultLabel.innerText = message;
};
PwdChangeScreen.prototype.save = function() {
    this.reportError("");
    var pw = this.passwordInput.value;
    var pw2 = this.passwordInput2.value;
    if (pw.length < 8) {
        this.reportError("Password is too short");
        return;
    }
    if (pw != pw2) {
        this.reportError("Passwords don't match");
        return;
    }
    app.net.send({
        "type": "lpc",
        "password": pw
    });
    app.menu.mainAsMember.show();
}
PwdChangeScreen.prototype.onBack = function() {
    app.menu.mainAsMember.show();
};
"use strict";

function LoginScreen() {
    this.element = document.getElementById("login");
    this.form = document.getElementById("login-form");
    this.userNameInput = document.getElementById("login-username-input");
    this.passwordInput = document.getElementById("login-password-input");
    this.launchBtn = document.getElementById("login-do");
    this.backBtn = document.getElementById("login-back");
    this.resultLabel = document.getElementById("loginResult");
    var that = this;
    this.form.onsubmit = function(e) {
        e.preventDefault(); // Don't let the page be redirected
    }
    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.backBtn.onclick = function() {
        that._onBack();
    };
}
LoginScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("login", "login");
    app.menu.background('a');
    this.element.style.display = "block";
};
LoginScreen.prototype.hide = function() {
    this.element.style.display = "none";
};

LoginScreen.prototype._onBack = function() {
    app.menu.main.show();
};
LoginScreen.prototype.reportError = function(message) {
    this.resultLabel.style.color = "red";
    this.resultLabel.innerText = message;
};
LoginScreen.prototype.launch = function() {
    this.reportError("");
    var userName = this.userNameInput.value;
    var pw = this.passwordInput.value;
    if (userName.length < 3) {
        this.reportError("Username is too short");
        return;
    }
    if (pw.length < 3) {
        this.reportError("Password is too short");
        return;
    }
    app.login(userName, pw);
};

function RegisterScreen() {
    this.element = document.getElementById("register");
    this.form = document.getElementById("register-form");
    this.userNameInput = document.getElementById("register-username-input");
    this.passwordInput = document.getElementById("register-password-input");
    this.passwordInput2 = document.getElementById("register-password2-input");
    this.captchaInput = document.getElementById("register-captcha-input");
    this.launchBtn = document.getElementById("register-do");
    this.backBtn = document.getElementById("register-back");
    this.resultLabel = document.getElementById("registerResult");
    var that = this;
    this.form.onsubmit = function(e) {
        e.preventDefault(); // Don't let the page be redirected
    }
    this.launchBtn.onclick = function() {
        that.launch();
    };
    this.backBtn.onclick = function() {
        that._onBack();
    };
}
RegisterScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("register", "register");
    app.menu.background('a');
    this.element.style.display = "block";
};
RegisterScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
RegisterScreen.prototype._onBack = function() {
    app.menu.main.show();
};
RegisterScreen.prototype.reportError = function(message) {
    this.resultLabel.style.color = "red";
    this.resultLabel.innerText = message;
};
RegisterScreen.prototype.launch = function() {
    this.reportError("");
    var userName = this.userNameInput.value;
    var pw = this.passwordInput.value;
    var pw2 = this.passwordInput2.value;
    var captcha = this.captchaInput.value;
    if (userName.length < 3) {
        this.reportError("Username is too short");
        return;
    }
    if (userName.length > 20) {
        this.reportError("Username is too long");
        return;
    }
    if (pw.length < 8) {
        this.reportError("Password is too short");
        return;
    }
    if (pw != pw2) {
        this.reportError("Passwords don't match");
        return;
    }
    if (captcha.length != 5) {
        this.reportError("Invalid captcha");
        return;
    }
    app.register(userName, pw, captcha);
};


function GameScreen() {
    this.element = document.getElementById("game");
    this.devConsoleToggle = document.getElementById("devConsole-showHide");
    this.devConsoleMain = document.getElementById("devConsole-main");
    this.devConsolePlayerList = document.getElementById("devConsole-playerList");
    this.devConsoleOn = false;
    this.devConsoleRenameForm = document.getElementById("devConsole-renameForm");
    this.devConsoleRenameField = document.getElementById("devConsole-renameField");
    this.selectedPlayerId = null;
    this.renamingPlayerId = null;
    this.selectedPlayerTr = null;
    var that = this;
    this.devConsoleToggle.onclick = function(e) {
        if (that.devConsoleOn) {
            that.devConsoleOn = false;
            that.devConsoleMain.style.display = "none";
            e.target.innerText = "DEV>";
        } else {
            that.devConsoleOn = true;
            that.devConsoleMain.style.display = "";
            e.target.innerText = "DEV<";
        }
    }
    document.getElementById("devConsole-kick").onclick = function(){that.kickPlayer()};
    document.getElementById("devConsole-ban").onclick = function(){that.banPlayer()};
    document.getElementById("devConsole-rename").onclick = function(){that.startRenamePlayer()};
    document.getElementById("devConsole-renameDone").onclick = function(){that.finishRenamePlayer()};
    var eg = document.getElementById("devConsole-g");
    eg.onclick = function(){app.god = !app.god; eg.style.color=app.god?"red":"white";};
    var er = document.getElementById("devConsole-r");
    er.onclick = function(){app.reborn = !app.reborn; er.style.color=app.reborn?"red":"white";};
    var ef = document.getElementById("devConsole-f");
    ef.onclick = function(){app.fly = !app.fly; ef.style.color=app.fly?"red":"white";};
}
GameScreen.prototype.show = function() {
    app.menu.hideAll();
    app.menu.navigation("game", "game");
    app.menu.background('c');
    this.element.style.display = "block";
    if(app.game.isDev)
        document.getElementById("devConsole").style.display = "";
};
GameScreen.prototype.hide = function() {
    this.element.style.display = "none";
};
GameScreen.prototype.onBack = function() {
    app.close();
};
GameScreen.prototype.updatePlayerList = function(playerList) {
    var stillSelected = false;
    this.selectedPlayerTr = null;
    this.devConsolePlayerList.innerHTML = "";
    var tbl = document.createElement("table");
    tbl.style.color = "white";
    this.devConsolePlayerList.appendChild(tbl);
    var trh = document.createElement("tr");
    tbl.appendChild(trh);
    ["id", "account", "sqd", "nickname"].map(x => {var th = document.createElement("th"); th.innerText = x; trh.appendChild(th);});
    var that = this;
    for (var player of playerList) {
        var tr = document.createElement("tr");
        tbl.append(tr);
        [player.id, player.username, player.team, player.displayName].map(x => { var td = document.createElement("td"); td.innerText = ""+x; tr.appendChild(td); });
        tr.playerId = player.id;
        if (this.selectedPlayerId == player.id) {
            stillSelected = true;
            tr.style.color = "yellow";
            this.selectedPlayerTr = tr;
        }
        tr.onclick = (function(tr) {return function(e) {
            if (that.selectedPlayerTr) {
                that.selectedPlayerTr.style.color = "";
            }
            tr.style.color = "yellow";
            that.selectedPlayerId = tr.playerId;
            that.selectedPlayerTr = tr;
        }})(tr);
    }
    if(!stillSelected) this.selectedPlayerId = null;
};

GameScreen.prototype.kickPlayer = function() {
    if (this.selectedPlayerId === null) return;
    app.game.send({
        'type': "gbn",
        'pid': this.selectedPlayerId,
        'ban': false
    });
};

GameScreen.prototype.banPlayer = function() {
    if (this.selectedPlayerId === null) return;
    app.game.send({
        'type': "gbn",
        'pid': this.selectedPlayerId,
        'ban': true
    });
};

GameScreen.prototype.startRenamePlayer = function() {
    if (this.selectedPlayerId === null) return;
    this.renamingPlayerId = this.selectedPlayerId;
    this.devConsoleRenameField.value = app.getPlayerInfo(this.selectedPlayerId).name;
    this.devConsoleRenameForm.style.display = "";
};

GameScreen.prototype.finishRenamePlayer = function() {
    if (this.selectedPlayerId === null) return;
    var newName = this.devConsoleRenameField.value;
    if (newName === "") return;
    app.game.send({
        'type': "gnm",
        'pid': this.renamingPlayerId,
        'name': newName
    });
    this.renamingPlayerId = null;
    this.devConsoleRenameForm.style.display = "none";
};

"use strict";

function Network() {
    this.pendingArgs = [];
}
Network.CONNECTTYPE = {};
Network.CONNECTTYPE.GUEST = 0;
Network.CONNECTTYPE.LOGIN = 1;
Network.CONNECTTYPE.REQ_CAPTCHA = 2;
Network.CONNECTTYPE.REGISTER = 3;
Network.CONNECTTYPE.RESUME = 4;
Network.prototype.connected = function() {
    return undefined !== this.webSocket && this.webSocket.readyState !== WebSocket.CLOSED;
};
Network.prototype.openWs = function(args) {
    var net = this;
    if (this.connected()) {
        app.menu.error.show("Connection already open. State error.");
        return;
    }
    this.webSocket = new WebSocket(WEBSOCKET_SERVER);
    this.webSocket.binaryType = "arraybuffer";
    this.webSocket.onopen = function(e) {
        "open" !== e.type && app.menu.error.show("Error. WS open event has unexpected result.");
    };
    this.webSocket.onmessage = function(e) {
        e.data instanceof ArrayBuffer ? net.handleBinary(new Uint8Array(e.data)) : net.handlePacket(JSON.parse(e.data));
    };
    this.webSocket.onclose = function(e) {
        net.webSocket = undefined;
        document.getElementById("privLobby").style.display = "none";
        app.menu.error.show("Connection Interrupted");
    };
};
//connectType, name, team, priv, skin, gameMode
Network.prototype.connect = function(args) {
    var conn = this.connected();
    this.pendingArgs = [];
    if (0 == args.length) {
        return;
    }
    if (!conn) {
        this.pendingArgs = args;
        this.openWs(args);
        return;
    }
    connectType = args[0];
    if (connectType == Network.CONNECTTYPE.GUEST) {
        var name = args[1];
        var team = args[2];
        var priv = args[3];
        var skin = args[4];
        var gm = args[5];
        this.prefName = name;
        this.prefTeam = team;
        this.isPrivate = priv;
        this.skin = skin;
        this.gameMode = gm;
        this.send({
            'type': "l00",
            'name': this.prefName,
            'team': this.prefTeam,
            'private': this.isPrivate,
            'skin': this.skin,
            'gm': this.gameMode
        });
    } else if (connectType == Network.CONNECTTYPE.LOGIN) {
        var username = args[1];
        this.send({
            'type': "llg",
            'username': username,
            'password': args[2]
        });
    } else if (connectType == Network.CONNECTTYPE.REQ_CAPTCHA) {
        this.send({
            'type': "lrc"
        });
    } else if (connectType == Network.CONNECTTYPE.REGISTER) {
        var username = args[1];
        this.username = username;
        this.send({
            'type': "lrg",
            'username': this.username,
            'password': args[2],
            'captcha': args[3]
        });
    } else if (connectType == Network.CONNECTTYPE.RESUME) {
        var session = args[1];
        this.session = session;
        this.send({
            'type': "lrs",
            'session': this.session,
        });
    } else {
        console.error("args = " + args);
        app.menu.error.show("Assert failed in Net.connect");
    }
};
Network.prototype.handlePacket = function(data) {
    if (undefined === this.state || !this.state.handlePacket(data)) switch (data.type) {
        case "s00":
            this.setState(data.state);
            break;
        case "s01":
            this.handleBlob(data.packets);
            break;
        case "s02":
            break;
        case "x00":
            app.menu.error.show("Server Exception", data.message);
            break;
        case "x01":
            app.menu.error.show("Server Exception", data.message, data.trace);
            break;
        default:
            app.menu.error.show("Recieved invalid packet type: " + data.type, JSON.stringify(data));
    }
};
Network.prototype.handleBinary = function(data) {
    this.state.handleBinary(data);
};
Network.prototype.handleBlob = function(packets) {
    for (var i = 0x0; i < packets.length; i++) this.handlePacket(packets[i]);
};
Network.prototype.setState = function(newState) {
    undefined !== this.state && this.state.destroy();
    switch (newState) {
        case 'l':
            this.state = new InputState(this.pendingArgs);
            break;
        case 'g':
            this.state = new GameState();
            break;
        default:
            app.menu.error.show("Received invalid state ID: " + newState);
            return;
    }
    this.state.ready();
};
Network.prototype.send = function(_0x2756bb) {
    this.webSocket.send(JSON.stringify(_0x2756bb));
};
Network.prototype.sendBinary = function(_0x25450f) {
    this.webSocket.send(_0x25450f.buffer);
};
Network.prototype.close = function() {
    undefined !== this.webSocket && this.webSocket.close();
    app.ingame() && app.game.destroy();
};
"use strict";

function InputState(pendingArgs) {
    this.pendingArgs = pendingArgs;
}
InputState.prototype.handlePacket = function(data) {
    switch (data.type) {
        case "l01":
            return this.loggedIn(data), true;
        case "llg":
            return this.handleLoginResult(data), true;
        case "lrc":
            return this.handleRequestCaptcha(data), true;
        case "lrg":
            return this.handleRegisterResult(data), true;
        case "lrs":
            return this.handleLoginResult(data), true;
        case "llo":
            return this.handleLogoutResult(data), true;
        case "lpr":
            return this.handleUpdProfileResult(data), true;
        default:
            return false;
    }
};
InputState.prototype.handleBinary = function(data) {
    app.menu.warn.show("Recieved unexpected binary data!");
};
InputState.prototype.ready = function() {
    app.net.connect(app.net.pendingArgs);
};
InputState.prototype.loggedIn = function(data) {
    app.net.name = data.name;
    console.log("Logged in: " + data.name + " :: " + data.team);
};
InputState.prototype.handleLogoutResult = function(data) {
    Cookies.remove("session");
    Cookies.remove("go_to_lobby");
    location.reload();
};
InputState.prototype.handleUpdProfileResult = function(data) {
    var nickname = app.menu.profile.nicknameInput.value;
    var squad = app.menu.profile.squadInput.value;
    var skin = app.menu.profile.skin;
    var changes = data.changes;
    if ("nickname" in changes) nickname = changes.nickname;
    if ("squad" in changes) squad = changes.squad;
    if ("skin" in changes) skin = changes.skin;
    if (data.status) {
        app.menu.mainAsMember.show({"nickname" : nickname, "squad": squad, "skin": skin});
    } else {
        app.menu.profile.reportError(data.msg);
    }
};
InputState.prototype.handleLoginResult = function(data) {
    if (data.status) {
        app.net.username = data.username;
        app.menu.mainAsMember.show(data.msg);
    } else {
        Cookies.remove("session");
        app.menu.login.show();
        app.menu.login.reportError(data.msg);
    }
};
InputState.prototype.handleRequestCaptcha = function(data) {
    if (data.data) {
        var img = document.getElementById("register-captcha");
        img.src = "data:image/png;base64, " + data.data;
    } else {
        document.getElementById('register-captcha-input').style.display = 'none';
    }
    app.menu.register.show();
};
InputState.prototype.handleRegisterResult = function(data) {
    if (data.status) {
        app.menu.mainAsMember.show(data.msg);
    } else {
        app.menu.register.show();
        app.menu.register.reportError(data.msg);
    }
};
InputState.prototype.send = function(data) {
    app.net.send(data);
};
InputState.prototype.type = function() {
    return 'l';
};
InputState.prototype.destroy = function() {};
"use strict";

function GameState() {
    this.pingOut = false;
    this.pingLast = 0x0;
    this.pingFrame = 0x5a;
}
GameState.prototype.handlePacket = function(data) {
    switch (data.type) {
        case "g01":
            return this.load(data), true;
        case "g06":
            return this.globalWarn(data), true;
        case "g21":
            return this.recievePing(data), true;
        case "gll":
            return this.receiveLevelList(data), true;
        case "gsl":
            return this.recieveLevelSelectResult(data), true;
        case "gnm":
            return this.renamePlayer(data), true;
        case "ghu":
            return app.hurryUp(data), true;
        case "gtk":
            return app.tick(data), true;
        default:
            return app.ingame() ? app.game.handlePacket(data) : false;
    }
};
GameState.prototype.handleBinary = function(data) {
    app.ingame() && app.game.handleBinary(data);
};
GameState.prototype.ready = function() {
    this.send({
        'type': "g00"
    });
};
GameState.prototype.load = function(data) {
    var gameState = this;
    if (data.game == "custom") {
        var levelData = JSON.parse(data.levelData);
        app.load(levelData);
        gameState.send({
            'type': "g03"
        });
        return;
    }
    $.ajax({
        'url': "game/" + data.game + "?v=" + VERSION,    //get level data
        'type': "GET",
        'timeout': 0x1388,
        'success': function(data) {
            app.load(data);
            gameState.send({
                'type': "g03"
            });
        },
        'error': function() {
            app.menu.error.show("Server returned FNF(404) for game file: " + data.game);
        }
    });
};
GameState.prototype.globalWarn = function(_0xba301c) {
    app.menu.warn.show(_0xba301c.message);
};
GameState.prototype.sendPing = function() {
    var _0x1ac5e9 = util.time.now();
    this.pingOut && 0x3e7 > this.pingLast - _0x1ac5e9 || (this.pingOut && (app.net.ping = 0x3e7), this.send({
        'type': "g21",
        'delta': _0x1ac5e9
    }), this.pingOut = true);
};
GameState.prototype.recievePing = function(_0x5bdfa8) {
    var _0x3162e8 = util.time.now();
    app.net.ping = _0x3162e8 - _0x5bdfa8.delta;
    this.pingOut = false;
};
GameState.prototype.receiveLevelList = function(data) {
    levelSelectors = data.levels;
    levelSelectors.unshift({shortId:"?", longId:""});
    for (var i=0; i<levelSelectors.length; i++) {
        var k = levelSelectors[i];
        var elem = document.createElement("div")
        elem.setAttribute("class", "levelSelectButton");
        elem.innerText = k.shortId;
        elem.addEventListener("click", (function(a){return function() {app.menu.name.selectLevel(a);};})(k.longId));
        document.getElementById("levelSelectStandard").appendChild(elem);
        levelSelectors[i].elem = elem;
    }
    document.getElementById("privLobby").style.display = "";
}
GameState.prototype.recieveLevelSelectResult = function(data) {
    if(data.status == "error") {
        var elem = document.getElementById("levelSelectCustomResult");
        elem.innerText = data.message;
        elem.style.color = "red";
    } else if (data.status == "success") {
        var elem = document.getElementById("levelSelectCustomResult");
        elem.innerText = "upload successful";
        elem.style.color = "green";
    } else if (data.status == "update") {
        app.menu.name.updateLevelSelectButton(data.name);
    }
};
GameState.prototype.renamePlayer = function(data) {
    var player = app.getPlayerInfo(data.pid);
    player.name = data.name;
    player.displayName = getPlayerDisplayName(player);
    app.menu.game.updatePlayerList(app.players);
    var ghost = app.game.getGhost(data.pid);
    if (ghost && ghost.name !== undefined) {
        ghost.name = player.displayName;
    }
    if (data.pid == app.game.pid && player.isGuest) {
        Cookies.set("name", data.name, {'expires': 0x1e});
    }
};
GameState.prototype.send = function(data) {
    app.net.send(data);
};
GameState.prototype.type = function() {
    return 'g';
};
GameState.prototype.destroy = function() {};
"use strict";

function GameObject(game, level, zone, pos) {
    this.game = game;
    this.level = level;
    this.zone = zone;
    this.pos = pos;
    this.sprite = this.state = undefined;
    this.garbage = this.dead = this.reverse = false;
    this.sounds = [];
}
GameObject.ASYNC = true;
GameObject.ID = 0x0;
GameObject.prototype.update = function(_0x2f28f9) {};
GameObject.prototype.step = function() {};
GameObject.prototype.sound = function() {
    for (var _0x3b494f = 0x0; _0x3b494f < this.sounds.length; _0x3b494f++) {
        var _0x1a7bf8 = this.sounds[_0x3b494f];
        _0x1a7bf8.done() ? this.sounds.splice(_0x3b494f--, 0x1) : _0x1a7bf8.position(this.pos);
    }
};
GameObject.prototype.kill = function() {
    this.dead = true;
    this.destroy();
};
GameObject.prototype.destroy = function() {
    this.garbage = this.dead = true;
};
GameObject.prototype.isTangible = function() {
    return !this.dead && !this.disabled && this.dim;
};
GameObject.prototype.draw = function() {};
GameObject.prototype.play = function(_0x5c61d3, _0x1cd15d, _0x457912) {
    var _0x2fc4c1 = this.game.getZone();
    if (this.zone === _0x2fc4c1.id && this.level === _0x2fc4c1.level) return _0x5c61d3 = app.audio.getSpatialAudio(_0x5c61d3, _0x1cd15d, _0x457912, "effect"), _0x5c61d3.play(this.pos), this.sounds.push(_0x5c61d3), _0x5c61d3;
};
GameObject.OBJECT_LIST = [];
GameObject.REGISTER_OBJECT = function(_0x4058c1) {
    GameObject.OBJECT_LIST.push(_0x4058c1);
};
GameObject.OBJECT = function(classId) {
    for (var i = 0x0; i < GameObject.OBJECT_LIST.length; i++) {
        var obj = GameObject.OBJECT_LIST[i];
        if (obj.ID === classId) return obj;
    }
    app.menu.warn.show("Invalid Object Class ID: " + _0x42193c);
};
"use strict";

function PlayerObject(game, level, zone, pos, pid, skin, isDev) {
    GameObject.call(this, game, level, zone, pos);
    this.pid = pid;
    this.skin = skin;
    game.display.ensureSkin(skin);
    this.isDev = isDev;
    this.isGuest = false;
    this.anim = 0x0;
    this.reverse = false;
    this.deadTimer = this.deadFreezeTimer = this.arrowFade = 0x0;
    this.lastPos = this.pos;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.jumping = -0x1;
    this.grounded = this.isSpring = this.isBounce = false;
    this.name = undefined;
    this.starTimer = this.power = 0x0;
    this.starMusic = undefined;
    this.tfmTimer = this.damageTimer = 0x0;
    this.tfmTarget = -0x1;
    this.pipeWarp = undefined;
    this.pipeTimer = 0x0;
    this.pipeExt = this.pipeDir = -0x1;
    this.poleTimer = this.pipeDelayLength = this.pipeDelay = 0x0;
    this.poleSound = this.poleWait = false;
    this.vineWarp = undefined;
    this.attackCharge = PlayerObject.MAX_CHARGE;
    this.attackTimer = 0x0;
    this.autoTarget = undefined;
    this.btnD = [0x0, 0x0];
    this.btnBde = this.btnBg = this.btnB = this.btnA = false;
    this.btnAHot = false;
    this.setState(PlayerObject.SNAME.STAND);
}
PlayerObject.ASYNC = false;
PlayerObject.ID = 0x1;
PlayerObject.NAME = "PLAYER";
PlayerObject.ANIMATION_RATE = 0x3;
PlayerObject.DIM_OFFSET = vec2.make(-0.05, 0x0);
PlayerObject.DEAD_FREEZE_TIME = 0x7;
PlayerObject.DEAD_TIME = 0x46;
PlayerObject.DEAD_UP_FORCE = 0.65;
PlayerObject.RUN_SPEED_MAX = 0.315;
PlayerObject.MOVE_SPEED_MAX = 0.215;
PlayerObject.MOVE_SPEED_ACCEL = 0.0125;
PlayerObject.MOVE_SPEED_DECEL = 0.0225;
PlayerObject.MOVE_SPEED_ACCEL_AIR = 0.0025;
PlayerObject.STUCK_SLIDE_SPEED = 0.08;
PlayerObject.FALL_SPEED_MAX = 0.45;
PlayerObject.FALL_SPEED_ACCEL = 0.085;
PlayerObject.BOUNCE_LENGTH_MIN = 0x1;
PlayerObject.SPRING_LENGTH_MIN = 0x5;
PlayerObject.SPRING_LENGTH_MAX = 0xe;
PlayerObject.JUMP_LENGTH_MIN = 0x3;
PlayerObject.JUMP_LENGTH_MAX = 0x7;
PlayerObject.JUMP_SPEED_INC_THRESHOLD = [0.1, 0.2, 0.25];
PlayerObject.JUMP_DECEL = 0.005;
PlayerObject.BLOCK_BUMP_THRESHOLD = 0.12;
PlayerObject.POWER_INDEX_SIZE = 0x20;
PlayerObject.GENERIC_INDEX = 0x60;
PlayerObject.DAMAGE_TIME = 0x2d;
PlayerObject.TRANSFORM_TIME = 0x12;
PlayerObject.TRANSFORM_ANIMATION_RATE = 0x2;
PlayerObject.STAR_LENGTH = 380;
PlayerObject.PROJ_OFFSET = vec2.make(0.7, 1.1);
PlayerObject.MAX_CHARGE = 0x3c;
PlayerObject.ATTACK_DELAY = 0x7;
PlayerObject.ATTACK_CHARGE = 0x19;
PlayerObject.ATTACK_ANIM_LENGTH = 0x3;
PlayerObject.PIPE_TIME = 0x1e;
PlayerObject.PIPE_SPEED = 0.06;
PlayerObject.PIPE_EXT_OFFSET = vec2.make(0.5, 0x0);
PlayerObject.WEED_EAT_RADIUS = 0x3;
PlayerObject.POLE_DELAY = 0xf;
PlayerObject.POLE_SLIDE_SPEED = 0.15;
PlayerObject.LEVEL_END_MOVE_OFF = vec2.make(0xa, 0x0);
PlayerObject.CLIMB_SPEED = 0.125;
PlayerObject.PLATFORM_SNAP_DIST = 0.15;
PlayerObject.ARROW_SPRITE = 0xfd;
PlayerObject.ARROW_TEXT = "YOU";
PlayerObject.ARROW_OFFSET = vec2.make(0x0, 0.1);
PlayerObject.TEXT_OFFSET = vec2.make(0x0, 0.55);
PlayerObject.TEXT_SIZE = 0.65;
PlayerObject.TEXT_COLOR = "#FFFFFF";
PlayerObject.ARROW_RAD_IN = 0x3;
PlayerObject.ARROW_RAD_OUT = 0x7;
PlayerObject.ARROW_THRESHOLD_MIN = 0x4;
PlayerObject.ARROW_THRESHOLD_MAX = 0x6;
PlayerObject.TEAM_OFFSET = vec2.make(0x0, 0x0);
PlayerObject.TEAM_SIZE = 0.3;
PlayerObject.TEAM_COLOR = "rgba(255,255,255,0.75)";
PlayerObject.DEV_TEAM_COLOR = "rgba(255,255,0,1)";
PlayerObject.SPRITE = {};
PlayerObject.SPRITE_LIST = [{
    'NAME': "S_STAND",
    'ID': 0x0,
    'INDEX': 0xd
}, {
    'NAME': "S_RUN0",
    'ID': 0x1,
    'INDEX': 0xa
}, {
    'NAME': "S_RUN1",
    'ID': 0x2,
    'INDEX': 0xb
}, {
    'NAME': "S_RUN2",
    'ID': 0x3,
    'INDEX': 0xc
}, {
    'NAME': "S_SLIDE",
    'ID': 0x4,
    'INDEX': 0x9
}, {
    'NAME': "S_FALL",
    'ID': 0x5,
    'INDEX': 0x8
}, {
    'NAME': "S_CLIMB0",
    'ID': 0x6,
    'INDEX': 0x6
}, {
    'NAME': "S_CLIMB1",
    'ID': 0x7,
    'INDEX': 0x7
}, {
    'NAME': "B_STAND",
    'ID': 0x20,
    'INDEX': [
        [0x2d],
        [0x1d]
    ]
}, {
    'NAME': "B_DOWN",
    'ID': 0x21,
    'INDEX': [
        [0x2c],
        [0x1c]
    ]
}, {
    'NAME': "B_RUN0",
    'ID': 0x22,
    'INDEX': [
        [0x29],
        [0x19]
    ]
}, {
    'NAME': "B_RUN1",
    'ID': 0x23,
    'INDEX': [
        [0x2a],
        [0x1a]
    ]
}, {
    'NAME': "B_RUN2",
    'ID': 0x24,
    'INDEX': [
        [0x2b],
        [0x1b]
    ]
}, {
    'NAME': "B_SLIDE",
    'ID': 0x25,
    'INDEX': [
        [0x28],
        [0x18]
    ]
}, {
    'NAME': "B_FALL",
    'ID': 0x26,
    'INDEX': [
        [0x27],
        [0x17]
    ]
}, {
    'NAME': "B_CLIMB0",
    'ID': 0x27,
    'INDEX': [
        [0x25],
        [0x15]
    ]
}, {
    'NAME': "B_CLIMB1",
    'ID': 0x28,
    'INDEX': [
        [0x26],
        [0x16]
    ]
}, {
    'NAME': "B_TRANSFORM",
    'ID': 0x29,
    'INDEX': [
        [0x2e],
        [0x1e]
    ]
}, {
    'NAME': "F_STAND",
    'ID': 0x40,
    'INDEX': [
        [0x4c, 0x4b],
        [0x3c, 0x3b]
    ]
}, {
    'NAME': "F_DOWN",
    'ID': 0x41,
    'INDEX': [
        [0x4a],
        [0x3a]
    ]
}, {
    'NAME': "F_RUN0",
    'ID': 0x42,
    'INDEX': [
        [0x45, 0x44],
        [0x35, 0x34]
    ]
}, {
    'NAME': "F_RUN1",
    'ID': 0x43,
    'INDEX': [
        [0x47, 0x46],
        [0x37, 0x36]
    ]
}, {
    'NAME': "F_RUN2",
    'ID': 0x44,
    'INDEX': [
        [0x49, 0x48],
        [0x39, 0x38]
    ]
}, {
    'NAME': "F_SLIDE",
    'ID': 0x45,
    'INDEX': [
        [0x43, 0x42],
        [0x33, 0x32]
    ]
}, {
    'NAME': "F_FALL",
    'ID': 0x46,
    'INDEX': [
        [0x41, 0x40],
        [0x31, 0x30]
    ]
}, {
    'NAME': "F_CLIMB0",
    'ID': 0x47,
    'INDEX': [
        [0x23],
        [0x13]
    ]
}, {
    'NAME': "F_CLIMB1",
    'ID': 0x48,
    'INDEX': [
        [0x24],
        [0x14]
    ]
}, {
    'NAME': "F_ATTACK",
    'ID': 0x49,
    'INDEX': [
        [0x4f, 0x4e],
        [0x3f, 0x3e]
    ]
}, {
    'NAME': "F_TRANSFORM",
    'ID': 0x50,
    'INDEX': [
        [0x4d],
        [0x3d]
    ]
}, {
    'NAME': "G_DEAD",
    'ID': 0x60,
    'INDEX': 0x0
}, {
    'NAME': "G_HIDE",
    'ID': 0x70,
    'INDEX': 0xe
}];
for (var _0x1bec55 = 0x0; _0x1bec55 < PlayerObject.SPRITE_LIST.length; _0x1bec55++) PlayerObject.SPRITE[PlayerObject.SPRITE_LIST[_0x1bec55].NAME] = PlayerObject.SPRITE_LIST[_0x1bec55], PlayerObject.SPRITE[PlayerObject.SPRITE_LIST[_0x1bec55].ID] = PlayerObject.SPRITE_LIST[_0x1bec55];
PlayerObject.SNAME = {};
PlayerObject.SNAME.STAND = "STAND";
PlayerObject.SNAME.DOWN = "DOWN";
PlayerObject.SNAME.RUN = "RUN";
PlayerObject.SNAME.SLIDE = "SLIDE";
PlayerObject.SNAME.FALL = "FALL";
PlayerObject.SNAME.POLE = "POLE";
PlayerObject.SNAME.CLIMB = "CLIMB";
PlayerObject.SNAME.ATTACK = "ATTACK";
PlayerObject.SNAME.TRANSFORM = "TRANSFORM";
PlayerObject.SNAME.DEAD = "DEAD";
PlayerObject.SNAME.HIDE = "HIDE";
PlayerObject.SNAME.GHOST = "GHOST";
PlayerObject.SNAME.DEADGHOST = "DEADGHOST";
var _0x4a74c1 = vec2.make(0.9, 0.95),
    _0x124f5a = vec2.make(0.9, 1.9);
PlayerObject.STATE = [{
    'NAME': PlayerObject.SNAME.STAND,
    'ID': 0x0,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_STAND]
}, {
    'NAME': PlayerObject.SNAME.DOWN,
    'ID': 0x1,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_STAND]
}, {
    'NAME': PlayerObject.SNAME.RUN,
    'ID': 0x2,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_RUN2, PlayerObject.SPRITE.S_RUN1, PlayerObject.SPRITE.S_RUN0]
}, {
    'NAME': PlayerObject.SNAME.SLIDE,
    'ID': 0x3,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_SLIDE]
}, {
    'NAME': PlayerObject.SNAME.FALL,
    'ID': 0x4,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_FALL]
}, {
    'NAME': PlayerObject.SNAME.TRANSFORM,
    'ID': 0x5,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_STAND]
}, {
    'NAME': PlayerObject.SNAME.POLE,
    'ID': 0x6,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.CLIMB,
    'ID': 0x7,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.S_CLIMB0, PlayerObject.SPRITE.S_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.STAND,
    'ID': 0x20,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_STAND]
}, {
    'NAME': PlayerObject.SNAME.DOWN,
    'ID': 0x21,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.B_DOWN]
}, {
    'NAME': PlayerObject.SNAME.RUN,
    'ID': 0x22,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_RUN2, PlayerObject.SPRITE.B_RUN1, PlayerObject.SPRITE.B_RUN0]
}, {
    'NAME': PlayerObject.SNAME.SLIDE,
    'ID': 0x23,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_SLIDE]
}, {
    'NAME': PlayerObject.SNAME.FALL,
    'ID': 0x24,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_FALL]
}, {
    'NAME': PlayerObject.SNAME.TRANSFORM,
    'ID': 0x25,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.B_TRANSFORM]
}, {
    'NAME': PlayerObject.SNAME.POLE,
    'ID': 0x26,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_CLIMB0]
}, {
    'NAME': PlayerObject.SNAME.CLIMB,
    'ID': 0x27,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.B_CLIMB0, PlayerObject.SPRITE.B_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.STAND,
    'ID': 0x40,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_STAND]
}, {
    'NAME': PlayerObject.SNAME.DOWN,
    'ID': 0x41,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.F_DOWN]
}, {
    'NAME': PlayerObject.SNAME.RUN,
    'ID': 0x42,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_RUN2, PlayerObject.SPRITE.F_RUN1, PlayerObject.SPRITE.F_RUN0]
}, {
    'NAME': PlayerObject.SNAME.SLIDE,
    'ID': 0x43,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_SLIDE]
}, {
    'NAME': PlayerObject.SNAME.FALL,
    'ID': 0x44,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_FALL]
}, {
    'NAME': PlayerObject.SNAME.ATTACK,
    'ID': 0x45,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_ATTACK]
}, {
    'NAME': PlayerObject.SNAME.TRANSFORM,
    'ID': 0x46,
    'DIM': _0x4a74c1,
    'SPRITE': [PlayerObject.SPRITE.F_TRANSFORM]
}, {
    'NAME': PlayerObject.SNAME.POLE,
    'ID': 0x47,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_CLIMB0]
}, {
    'NAME': PlayerObject.SNAME.CLIMB,
    'ID': 0x48,
    'DIM': _0x124f5a,
    'SPRITE': [PlayerObject.SPRITE.F_CLIMB0, PlayerObject.SPRITE.F_CLIMB1]
}, {
    'NAME': PlayerObject.SNAME.DEAD,
    'DIM': _0x4a74c1,
    'ID': 0x60,
    'SPRITE': [PlayerObject.SPRITE.G_DEAD]
}, {
    'NAME': PlayerObject.SNAME.HIDE,
    'DIM': _0x4a74c1,
    'ID': 0x70,
    'SPRITE': [PlayerObject.SPRITE.G_HIDE]
}, {
    'NAME': PlayerObject.SNAME.GHOST,
    'DIM': _0x4a74c1,
    'ID': 0xff,
    'SPRITE': []
}, {
    'NAME': PlayerObject.SNAME.DEADGHOST,
    'DIM': _0x4a74c1,
    'ID': 0xfe,
    'SPRITE': [PlayerObject.SPRITE.G_DEAD]
}];
PlayerObject.prototype.update = function(data) {
    if (!(this.dead || this.garbage)) {
        this.setState(PlayerObject.SNAME.GHOST);
        this.level = data.level;
        this.zone = data.zone;
        this.pos = data.pos;
        this.sprite = PlayerObject.SPRITE[data.sprite];
        this.reverse = data.reverse;
    }
};
PlayerObject.prototype.trigger = function(_0x121f75) {
    switch (_0x121f75) {
        case 0x1:
            this.attack();
            break;
        case 0x2:
            this.star();
    }
};
PlayerObject.prototype.step = function() {
    0x0 < this.starTimer && (this.starTimer--, 20 < this.starTimer || (this.starMusic && (this.starMusic.stop(), this.starMusic = undefined)));
    if (this.isState(PlayerObject.SNAME.GHOST)) this.sound();
    else if (!this.isState(PlayerObject.SNAME.HIDE))
        if (this.isState(PlayerObject.SNAME.POLE))
            if (0x0 < this.poleTimer && !this.poleWait) this.poleTimer--;
            else {
                this.poleSound || (this.poleSound = true, this.play("flagpole.wav", 0x1, 0x0));
                if (!this.poleWait)
                    if (0x0 >= this.poleTimer && this.autoTarget) this.setState(PlayerObject.SNAME.STAND);
                    else {
                        for (var _0x4d4e5b = vec2.add(this.pos, vec2.make(0x0, -0.25)), _0x280236 = vec2.make(this.pos.x, this.pos.y - 0.25), _0x191ffc = vec2.make(this.dim.x, this.dim.y + 0.25), _0x280236 = this.game.world.getZone(this.level, this.zone).getTiles(_0x280236, _0x191ffc), _0x191ffc = vec2.make(0x1, 0x1), _0x1f539b = false, _0x5a99db = 0x0; _0x5a99db < _0x280236.length; _0x5a99db++) {
                            var _0x4eb640 = _0x280236[_0x5a99db];
                            if (squar.intersection(_0x4eb640.pos, _0x191ffc, _0x4d4e5b, this.dim) && _0x4eb640.definition.COLLIDE) {
                                _0x1f539b = true;
                                break;
                            }
                        }
                        _0x1f539b ? (this.poleTimer = 0xf, this.autoTarget = vec2.add(_0x4d4e5b, PlayerObject.LEVEL_END_MOVE_OFF), this.poleWait = true) : this.pos = _0x4d4e5b;
                    } _0x4d4e5b = this.game.getFlag(this.level, this.zone);
                _0x4d4e5b.pos.y - 0.25 >= this.pos.y ? _0x4d4e5b.pos.y -= 0.25 : (_0x4d4e5b.pos.y = this.pos.y, this.poleWait = false);
            }
    else if (this.isState(PlayerObject.SNAME.RUN) ? this.anim += Math.max(0.5, Math.abs(0x5 * this.moveSpeed)) : this.anim++, this.sprite = this.state.SPRITE[parseInt(parseInt(this.anim) / PlayerObject.ANIMATION_RATE) % this.state.SPRITE.length], this.isState(PlayerObject.SNAME.CLIMB)) this.pos.y += PlayerObject.CLIMB_SPEED, this.pos.y >= this.game.world.getZone(this.level, this.zone).dimensions().y && (this.warp(this.vineWarp), this.setState(PlayerObject.SNAME.FALL));
    else if (this.isState(PlayerObject.SNAME.DEAD) || this.isState(PlayerObject.SNAME.DEADGHOST)) 0x0 < this.deadFreezeTimer ? this.deadFreezeTimer-- : 0x0 < this.deadTimer ? (this.deadTimer--, this.pos.y += this.fallSpeed, this.fallSpeed = Math.max(this.fallSpeed - 0.085, -0.45)) : this.destroy();
    else if (this.isState(PlayerObject.SNAME.TRANSFORM))
        if (0x0 < --this.tfmTimer) switch (_0x4d4e5b = parseInt(this.anim / PlayerObject.TRANSFORM_ANIMATION_RATE) % 0x3, _0x280236 = this.power > this.tfmTarget ? this.power : this.tfmTarget, _0x4d4e5b) {
            case 0x0:
                this.sprite = this.getStateByPowerIndex(PlayerObject.SNAME.STAND, this.power).SPRITE[0x0];
                break;
            case 0x1:
                this.sprite = this.getStateByPowerIndex(PlayerObject.SNAME.TRANSFORM, _0x280236).SPRITE[0x0];
                break;
            case 0x2:
                this.sprite = this.getStateByPowerIndex(PlayerObject.SNAME.STAND, this.tfmTarget).SPRITE[0x0];
        } else this.power = this.tfmTarget, this.tfmTarget = -0x1, this.setState(PlayerObject.SNAME.STAND), this.collisionTest(this.pos, this.dim) && this.setState(PlayerObject.SNAME.DOWN), this.damageTimer = (app.net.gameMode === 1 ? 120 : PlayerObject.DAMAGE_TIME);
        else if (0x0 < this.pipeDelay) this.pipeDelay--;
    else if (0x0 < this.pipeTimer && 0x0 >= this.pipeDelay) {
        0x1e <= this.pipeTimer && this.play("pipe.wav", 0x1, 0.04);
        switch (this.pipeDir) {
            case 0x1:
                this.pos.y += 0.06;
                break;
            case 0x2:
                this.pos.y -= 0.06;
                break;
            case 0x3:
                this.pos.x -= 0.06;
                break;
            case 0x4:
                this.pos.x += 0.06;
        }
        0x1 === --this.pipeTimer && this.pipeWarp && (this.pipeDelay = this.pipeDelayLength);
        if (0x0 >= this.pipeTimer && this.pipeWarp) {
            this.warp(this.pipeWarp);
            this.weedeat();
            this.pipeWarp = undefined;
            switch (this.pipeExt) {
                case 0x1:
                    this.pos.y -= 1.74;
                    this.setState(PlayerObject.SNAME.STAND);
                    this.pos = vec2.add(this.pos, PlayerObject.PIPE_EXT_OFFSET);
                    break;
                case 0x2:
                    this.pos.y += 1.74;
                    this.setState(PlayerObject.SNAME.STAND);
                    this.pos = vec2.add(this.pos, PlayerObject.PIPE_EXT_OFFSET);
                    break;
                case 0x3:
                    this.pos.x -= 1.74;
                    this.setState(PlayerObject.SNAME.RUN);
                    break;
                case 0x4:
                    this.pos.x += 1.74;
                    this.setState(PlayerObject.SNAME.RUN);
                    break;
                default:
                    return;
            }
            this.pipeTimer = 0x1e;
            this.pipeDir = this.pipeExt;
            this.pipeDelay = this.pipeDelayLength;
        }
    } else this.lastPos = this.pos, 0x0 < this.damageTimer && this.damageTimer--, this.attackCharge < PlayerObject.MAX_CHARGE && this.attackCharge++, 0x0 < this.attackTimer && this.attackTimer--, this.autoTarget && this.autoMove(), this.control(), this.physics(), this.interaction(), this.arrow(), this.sound(), 0x0 > this.pos.y && this.kill();
};
PlayerObject.prototype.input = function(abtnD, abtnA, abtnB, abtnTA) {
    this.btnD = abtnD;
    if (app.autoMove && this.btnD[0] == 0) this.btnD[0] = 1;
    this.btnA = abtnA;
    this.btnB = abtnB;
    if (abtnTA) {
        this.btnA = true;
        this.btnAHot = false;
    }
};
PlayerObject.prototype.autoMove = function() {
    this.btnD = [0x0, 0x0];
    this.btnB = this.btnA = false;
    0.1 <= Math.abs(this.pos.x - this.autoTarget.x) ? this.btnD = [0x0 >= this.pos.x - this.autoTarget.x ? 0x1 : -0x1, 0x0] : 0.01 > Math.abs(this.moveSpeed) && (this.btnA = -0.5 > this.pos.y - this.autoTarget.y);
};
PlayerObject.prototype.control = function() {
    if (this.grounded) this.btnBg = this.btnB;
    if (this.isState(PlayerObject.SNAME.DOWN) && this.collisionTest(this.pos, this.getStateByPowerIndex(PlayerObject.SNAME.STAND, this.power).DIM)) {
        if (- 0x1 !== this.btnD[0x1]) this.moveSpeed = 0.5 * (this.moveSpeed + PlayerObject.STUCK_SLIDE_SPEED);
        this.moveSpeed = Math.sign(this.moveSpeed) * Math.max(Math.abs(this.moveSpeed) - PlayerObject.MOVE_SPEED_DECEL, 0x0);
    } else {
        if (0x0 !== this.btnD[0x0]) {
            if (0.01 < Math.abs(this.moveSpeed) && !(0x0 <= this.btnD[0x0] ^ 0x0 > this.moveSpeed)) {
                this.moveSpeed += PlayerObject.MOVE_SPEED_DECEL * this.btnD[0x0];
                this.setState(PlayerObject.SNAME.SLIDE);
            } else {
                this.moveSpeed = this.btnD[0x0] * Math.min(Math.abs(this.moveSpeed) + 0.0125, this.btnBg ? 0.315 : 0.215);
                this.setState(PlayerObject.SNAME.RUN);
            }
            if (this.grounded) this.reverse = 0x0 <= this.btnD[0x0];
        } else {
            if (0.01 < Math.abs(this.moveSpeed)) {
                this.moveSpeed = Math.sign(this.moveSpeed) * Math.max(Math.abs(this.moveSpeed) - PlayerObject.MOVE_SPEED_DECEL, 0x0);
                this.setState(PlayerObject.SNAME.RUN);
            } else {
                this.moveSpeed = 0x0, this.setState(PlayerObject.SNAME.STAND);
            }
            if (-0x1 === this.btnD[0x1]) this.setState(PlayerObject.SNAME.DOWN);
        }
        for (var a = this.isSpring ? 0xe : 0x7, b = this.isSpring ? PlayerObject.SPRING_LENGTH_MIN : this.isBounce ? PlayerObject.BOUNCE_LENGTH_MIN : PlayerObject.JUMP_LENGTH_MIN, _0x4f2d3c = 0x0; _0x4f2d3c < PlayerObject.JUMP_SPEED_INC_THRESHOLD.length && Math.abs(this.moveSpeed) >= PlayerObject.JUMP_SPEED_INC_THRESHOLD[_0x4f2d3c]; _0x4f2d3c++) a++;
        if (this.btnA) {
            if ((this.grounded || app.fly) && !this.btnAHot) {
                this.jumping = 0x0;
                this.play(0x0 < this.power ? "jump1.wav" : "jump0.wav", 0.7, 0.04);
                this.btnAHot = true;
            }
            if (this.jumping > a) this.jumping = -0x1;
        } else {
            this.btnAHot = false;
            this.jumping > b && (this.jumping = -0x1);
        }
        this.grounded || this.setState(PlayerObject.SNAME.FALL);
        this.btnB && !this.btnBde && 0x2 === this.power && !this.isState(PlayerObject.SNAME.DOWN) && !this.isState(PlayerObject.SNAME.SLIDE) && 0x1 > this.attackTimer && this.attackCharge >= PlayerObject.ATTACK_CHARGE && (this.attack(), this.game.out.push(NET013.encode(0x1)));
        this.btnBde = this.btnB;
        0x0 < this.attackTimer && 0x2 === this.power && (this.isState(PlayerObject.SNAME.STAND) || this.isState(PlayerObject.SNAME.RUN)) && this.setState(PlayerObject.SNAME.ATTACK);
    }
};
PlayerObject.prototype.physics = function() {
    -0x1 !== this.jumping ? (this.fallSpeed = 0.45 - 0.005 * this.jumping, this.jumping++, this.grounded = false) : (this.isSpring = this.isBounce = false, this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - 0.085, -0.45));
    for (var _0x57b791 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), _0x513d1f = vec2.make(this.pos.x + Math.min(0x0, this.moveSpeed), this.pos.y + Math.min(0x0, this.fallSpeed)), _0x208a75 = vec2.make(this.dim.x + Math.max(0x0, this.moveSpeed), this.dim.y + Math.max(0x0, this.fallSpeed)), _0x513d1f = this.game.world.getZone(this.level, this.zone).getTiles(_0x513d1f, _0x208a75), _0x20e6e6 = this.game.getPlatforms(), _0x208a75 = vec2.make(0x1, 0x1), grounded = false, tilePlatform = [], tilePlatformColliding = [], _0x27521c = [], _0x27c16e = [], _0x346d1d = [], _0x50b7b9 = [], _0x535e81 = [], _0x3f505e, _0x5b32b0 = 0x0; _0x5b32b0 < _0x513d1f.length; _0x5b32b0++) {
        var obj = _0x513d1f[_0x5b32b0];
        if (obj.definition.PLATFORM) tilePlatform.push(obj);
        else if (obj.definition.COLLIDE)
            if (obj.definition.HIDDEN) _0x27521c.push(obj);
            else if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim) || squar.intersection(obj.pos, _0x208a75, this.pos, this.dim)) 0.01 < Math.abs(this.moveSpeed) && this.grounded && this.pos.y <= obj.pos.y && _0x346d1d.push(obj), _0x27521c.push(obj);
    }
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x20e6e6.length; _0x5b32b0++) obj = _0x20e6e6[_0x5b32b0], squar.intersection(obj.pos, obj.dim, _0x57b791, this.dim) && _0x535e81.push(obj);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < tilePlatform.length; _0x5b32b0++) obj = tilePlatform[_0x5b32b0], squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim) && tilePlatformColliding.push(obj);
    _0x20e6e6 = vec2.make(_0x57b791.x, this.pos.y);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27521c.length; _0x5b32b0++) {
        obj = _0x27521c[_0x5b32b0];
        if (!obj.definition.HIDDEN && squar.intersection(obj.pos, _0x208a75, _0x20e6e6, this.dim)) {
            obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.TOUCH);
            _0x20e6e6.x = _0x20e6e6.x + 0.5 * this.dim.x < obj.pos.x + 0.5 * _0x208a75.x ? obj.pos.x - this.dim.x : obj.pos.x + _0x208a75.x;
            this.moveSpeed *= 0.33;
        }
    }
    _0x57b791.x = _0x20e6e6.x;
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27521c.length; _0x5b32b0++) {
         obj = _0x27521c[_0x5b32b0];
         if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim)) {
            if (this.fallSpeed > PlayerObject.BLOCK_BUMP_THRESHOLD) { _0x50b7b9.push(obj); }
            if (0x0 > this.fallSpeed && this.pos.y >= obj.pos.y) { _0x27c16e.push(obj); }
         }
    }
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27521c.length; _0x5b32b0++) {
        obj = _0x27521c[_0x5b32b0];
        if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim)) {
            obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.TOUCH);
            if (this.pos.y >= _0x57b791.y) {
                if (!obj.definition.HIDDEN) {
                    _0x57b791.y = obj.pos.y + _0x208a75.y;
                    this.fallSpeed = 0x0;
                    grounded = true;
                }
            }
            else {
                _0x57b791.y = obj.pos.y - this.dim.y;
                this.fallSpeed = 0;
            }
        }
    }
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x535e81.length; _0x5b32b0++)
        if (obj = _0x535e81[_0x5b32b0], this.pos.y >= _0x57b791.y && obj.pos.y + obj.dim.y - this.pos.y < PlayerObject.PLATFORM_SNAP_DIST) {
            _0x57b791.y = obj.pos.y + obj.dim.y;
            grounded = true;
            _0x3f505e = obj;
            break;
        }
    for (_0x5b32b0 = 0x0; _0x5b32b0 < tilePlatformColliding.length; _0x5b32b0++) {
        obj = tilePlatformColliding[_0x5b32b0];
        if (squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim)) {
            if (this.pos.y - (obj.definition.PLATFORM && obj.definition.PLATFORM === "WEAK" ? this.dim : _0x208a75).y >= obj.pos.y) {
                _0x57b791.y = obj.pos.y + _0x208a75.y;
                this.fallSpeed = 0x0;
                grounded = true;
            }
        }
    }
    this.grounded = grounded;
    this.pos = _0x57b791;
    _0x3f505e && _0x3f505e.riding(this);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x513d1f.length; _0x5b32b0++) obj = _0x513d1f[_0x5b32b0], squar.intersection(obj.pos, _0x208a75, _0x57b791, this.dim) && obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.TOUCH);
    if (this.isState(PlayerObject.SNAME.DOWN) && 0.05 > Math.abs(this.moveSpeed))
        for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x27c16e.length; _0x5b32b0++) obj = _0x27c16e[_0x5b32b0], obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.DOWN);
    if (this.isState(PlayerObject.SNAME.RUN))
        for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x346d1d.length; _0x5b32b0++) obj = _0x346d1d[_0x5b32b0], obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, td32.TRIGGER.TYPE.PUSH);
    for (_0x5b32b0 = 0x0; _0x5b32b0 < _0x50b7b9.length; _0x5b32b0++) obj = _0x50b7b9[_0x5b32b0], obj.definition.TRIGGER(this.game, this.pid, obj, this.level, this.zone, obj.pos.x, obj.pos.y, 0x0 < this.power ? td32.TRIGGER.TYPE.BIG_BUMP : td32.TRIGGER.TYPE.SMALL_BUMP), this.jumping = -0x1, this.fallSpeed = -PlayerObject.BLOCK_BUMP_THRESHOLD;
};
PlayerObject.prototype.collisionTest = function(_0x569425, _0x1323bb) {
    for (var _0x4dc291 = vec2.make(0x1, 0x1), _0x471838 = this.game.world.getZone(this.level, this.zone).getTiles(_0x569425, _0x1323bb), _0x426d64 = 0x0; _0x426d64 < _0x471838.length; _0x426d64++) {
        var _0x2faa4b = _0x471838[_0x426d64];
        if (_0x2faa4b.definition.COLLIDE && squar.intersection(_0x2faa4b.pos, _0x4dc291, _0x569425, _0x1323bb)) return true;
    }
    return false;
};
PlayerObject.prototype.interaction = function() {
    for (var i = 0x0; i < this.game.objects.length; i++) {
        var obj = this.game.objects[i];
        if (obj !== this && !this.dead && obj.level === this.level && obj.zone === this.zone && obj.isTangible() && squar.intersection(obj.pos, obj.dim, this.pos, this.dim)) {
            if (0x0 < this.starTimer && obj.bonk) {
                obj.bonk();
                this.game.out.push(NET020.encode(obj.level, obj.zone, obj.oid, 0x1));
            }
            if (obj instanceof PlayerObject && 0x0 < obj.starTimer && !this.autoTarget) {
                this.damage(obj);
                if (this.dead) this.game.out.push(NET017.encode(obj.pid));
            }
            if (this.lastPos.y > obj.pos.y + 0.66 * obj.dim.y - Math.max(0x0, obj.fallSpeed)) {
                if (obj.playerStomp) obj.playerStomp(this);
            } else {
                if (this.lastPos.y < obj.pos.y) {
                    if (obj.playerBump) obj.playerBump(this)
                } else {
                    if (obj.playerCollide) obj.playerCollide(this);
                }
            }
        }
    }
};
PlayerObject.prototype.arrow = function() {
    for (var _0x37a11c = 0x0, _0x389b03 = 0x0; _0x389b03 < this.game.objects.length; _0x389b03++) {
        var _0x2c4088 = this.game.objects[_0x389b03];
        _0x2c4088 !== this && _0x2c4088 instanceof PlayerObject && _0x2c4088.level === this.level && _0x2c4088.zone === this.zone && (_0x37a11c += 0x1 - Math.min(PlayerObject.ARROW_RAD_OUT, Math.max(0x0, vec2.distance(this.pos, _0x2c4088.pos) - PlayerObject.ARROW_RAD_IN)) / PlayerObject.ARROW_RAD_OUT);
    }
    this.arrowFade = Math.min(PlayerObject.ARROW_THRESHOLD_MAX, Math.max(0x0, _0x37a11c - PlayerObject.ARROW_THRESHOLD_MIN)) / PlayerObject.ARROW_THRESHOLD_MAX;
};
PlayerObject.prototype.sound = GameObject.prototype.sound;
PlayerObject.prototype.attack = function() {
    this.attackTimer = PlayerObject.ATTACK_DELAY;
    this.attackCharge -= PlayerObject.ATTACK_CHARGE;
    var _0x328458 = this.reverse ? vec2.add(this.pos, PlayerObject.PROJ_OFFSET) : vec2.add(this.pos, vec2.multiply(PlayerObject.PROJ_OFFSET, vec2.make(-0x1, 0x1)));
    this.game.createObject(_0x6c6f53.ID, this.level, this.zone, _0x328458, [this.reverse, this.pid]);
    this.play("fireball.wav", 0x1, 0.04);
};
PlayerObject.prototype.bounce = function() {
    this.jumping = 0x0;
    this.isBounce = true;
};
PlayerObject.prototype.damage = function(source) {
    if (app.god) return;
    0x0 < this.damageTimer || 0x0 < this.starTimer || this.isState(PlayerObject.SNAME.TRANSFORM) || this.isState(PlayerObject.SNAME.CLIMB) || this.isState(PlayerObject.SNAME.POLE) || this.pipeWarp || 0x0 < this.pipeTimer || 0x0 < this.pipeDelay || this.autoTarget || (0x0 < this.power ? (this.tfm(0x0), this.damageTimer = PlayerObject.DAMAGE_TIME) : this.kill());
};
PlayerObject.prototype.invuln = function() {
    this.damageTimer = app.net.gameMode === 1 ? 120 : PlayerObject.DAMAGE_TIME;
};

PlayerObject.prototype.powerupVisual = function(object) {
    if (object instanceof CoinObject)
        this.game.addCoin(false, true);
    else if (object instanceof GoldFlowerObject)
        this.game.addCoin(true, true);
};
PlayerObject.prototype.powerup = function(object) {
    if (object instanceof MushroomObject) {
        if (0x1 > this.power) {
            this.tfm(0x1);
            this.rate = 0x73;
        }
    } else if (object instanceof FlowerObject) {
        if (0x2 > this.power) {
            this.tfm(0x2);
            this.rate = 0x71;
        }
    } else if (object instanceof StarObject) {
        this.star();
        this.game.out.push(NET013.encode(0x2));
        this.rate = 0x43
    } else if (object instanceof LifeObject) {
        var zn = this.game.getZone(this.level, this.zone);
        zn.effects.push(new RisingLabelEffect(this.pos, "1UP"));
        this.game.lifeage();
    } else if (object instanceof CoinObject) {
        //this.game.addCoin(false, false);  //server side
    } else if (object instanceof GoldFlowerObject) {
        //this.game.addCoin(true, false);   //server side
    }
    else if (object instanceof AxeObject) {
        this.game.stopGameTimer();
        this.game.out.push(NET018.encode());
    } else if (object instanceof PoisonMushroomObject)
        this.damage(object);
};
PlayerObject.prototype.axe = function(_0x5050d5) {
    (_0x5050d5 = this.game.getText(this.level, this.zone, _0x5050d5.toString())) || (_0x5050d5 = this.game.getText(this.level, this.zone, "too bad"));
    var axe = this.game.getAxe(this.level, this.zone);
    _0x5050d5 && (this.moveSpeed = 0, this.pos = vec2.copy(axe.pos), this.autoTarget = vec2.add(_0x5050d5.pos, vec2.make(0x0, -1.6)));
};
PlayerObject.prototype.star = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined);
    this.starTimer = PlayerObject.STAR_LENGTH;
    (this.starMusic = this.play("star.mp3", 0x1, 0.04)) && this.starMusic.loop(true);
};
PlayerObject.prototype.tfm = function(_0x538c99) {
    this.power < _0x538c99 ? this.play("powerup.wav", 0x1, 0.04) : this.play("pipe.wav", 0x1, 0.04);
    this.tfmTarget = _0x538c99;
    this.tfmTimer = PlayerObject.TRANSFORM_TIME;
    this.setState(PlayerObject.SNAME.TRANSFORM);
};
PlayerObject.prototype.warp = function(_0x3f75ed) {
    if (_0x3f75ed = this.game.world.getLevel(this.level).getWarp(_0x3f75ed)) this.level = _0x3f75ed.level, this.zone = _0x3f75ed.zone, this.pos = _0x3f75ed.pos, this.autoTarget = undefined, this.grounded = false;
};
PlayerObject.prototype.pipe = function(pipeDir, warp, delay) {
    this.moveSpeed = 0;
    if (!(0x1 !== pipeDir && 0x2 !== pipeDir)) this.setState(PlayerObject.SNAME.STAND);
    var destLevel = this.game.world.getLevel(this.level).getWarp(warp);
    this.pipeWarp = warp;
    this.pipeTimer = 0x1e;
    this.pipeDir = pipeDir;
    this.pipeExt = destLevel.data;
    this.pipeDelayLength = delay;
};
PlayerObject.prototype.weedeat = function() {
    for (var _0x5cc521 = 0x0; _0x5cc521 < this.game.objects.length; _0x5cc521++) {
        var _0x526625 = this.game.objects[_0x5cc521];
        _0x526625 instanceof PiranhaPlantObject && !_0x526625.dead && vec2.distance(this.pos, _0x526625.pos) < PlayerObject.WEED_EAT_RADIUS && _0x526625.destroy();
    }
};
PlayerObject.prototype.pole = function(_0x4a8021) {
    if (this.autoTarget) return;
    this.game.stopGameTimer();
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined, this.starTimer = 0x0);
    this.setState(PlayerObject.SNAME.POLE);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.pos.x = _0x4a8021.x;
    this.poleTimer = 0xf;
    this.poleSound = false;
};
PlayerObject.prototype.vine = function(_0x4cfee8, _0x16f983) {
    this.setState(PlayerObject.SNAME.CLIMB);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.pos.x = _0x4cfee8.x;
    this.vineWarp = _0x16f983;
};
PlayerObject.prototype.hide = function() {
    this.setState(PlayerObject.SNAME.HIDE);
};
PlayerObject.prototype.show = function() {
    this.setState(PlayerObject.SNAME.STAND);
};
PlayerObject.prototype.kill = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined, this.starTimer = 0x0);
    this.isState(PlayerObject.SNAME.GHOST) ? this.setState(PlayerObject.SNAME.DEADGHOST) : this.setState(PlayerObject.SNAME.DEAD);
    this.dead = true;
    this.deadTimer = PlayerObject.DEAD_TIME;
    this.deadFreezeTimer = PlayerObject.DEAD_FREEZE_TIME;
    this.fallSpeed = PlayerObject.DEAD_UP_FORCE;
    if (this.game.getPlayer() === this) {
        this.game.stopGameTimer();
        this.game.out.push(NET011.encode());
    }
};
PlayerObject.prototype.destroy = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = undefined, this.starTimer = 0x0);
    GameObject.prototype.destroy.call(this);
};
PlayerObject.prototype.isTangible = function() {
    return GameObject.prototype.isTangible.call(this) && !this.isState(PlayerObject.SNAME.HIDE) && 0x0 >= this.pipeDelay;
};
PlayerObject.prototype.setState = function(stName) {
    var state = this.getStateByPowerIndex(stName, this.power);
    if (state !== this.state) {
        this.state = state;
        if (0x0 < state.SPRITE.length) this.sprite = state.SPRITE[0x0];
        this.dim = state.DIM;
        this.anim = 0x0;
    }
};
PlayerObject.prototype.getStateByPowerIndex = function(_0x40e9b8, _0x2a26f5) {
    for (var _0x445ce9 = 0x0; _0x445ce9 < PlayerObject.STATE.length; _0x445ce9++) {
        var _0x44768c = PlayerObject.STATE[_0x445ce9];
        if (_0x44768c.NAME === _0x40e9b8 && (_0x44768c.ID >= PlayerObject.GENERIC_INDEX || _0x44768c.ID >= PlayerObject.POWER_INDEX_SIZE * _0x2a26f5 && _0x44768c.ID < PlayerObject.POWER_INDEX_SIZE * (_0x2a26f5 + 0x1))) return _0x44768c;
    }
};
PlayerObject.prototype.isState = function(_0x5b2890) {
    return _0x5b2890 === this.state.NAME;
};
PlayerObject.prototype.draw = function(spriteList) {
    if (!(this.isState(PlayerObject.SNAME.HIDE) || 0x0 < this.pipeDelay || 0x0 < this.damageTimer && 0x1 < this.damageTimer % 0x3)) {
        var _0x5c9425;
        _0x5c9425 = 0x0 < this.starTimer ? 0x2 : this.isState(PlayerObject.SNAME.GHOST) || this.isState(PlayerObject.SNAME.DEADGHOST) ? 0x1 : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x5814e0 = this.sprite.INDEX, _0x3f6b38 = 0x0; _0x3f6b38 < _0x5814e0.length; _0x3f6b38++)
                for (var _0x13a17a = 0x0; _0x13a17a < _0x5814e0[_0x3f6b38].length; _0x13a17a++) 0x2 === _0x5c9425 && spriteList.push({
                    'pos': vec2.add(vec2.add(this.pos, PlayerObject.DIM_OFFSET), vec2.make(this.reverse ? _0x13a17a : -_0x13a17a, _0x3f6b38)),
                    'reverse': this.reverse,
                    'index': _0x5814e0[_0x3f6b38][_0x13a17a],
                    'skin': this.skin,
                    'pid': this.pid,
                    'mode': 0x0
                }), spriteList.push({
                    'pos': vec2.add(vec2.add(this.pos, PlayerObject.DIM_OFFSET), vec2.make(this.reverse ? _0x13a17a : -_0x13a17a, _0x3f6b38)),
                    'reverse': this.reverse,
                    'index': _0x5814e0[_0x3f6b38][_0x13a17a],
                    'skin': this.skin,
                    'pid': this.pid,
                    'mode': _0x5c9425
                });
        else 0x2 === _0x5c9425 && spriteList.push({
            'pos': vec2.add(this.pos, PlayerObject.DIM_OFFSET),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'skin': this.skin,
            'pid': this.pid,
            'mode': 0x0
        }), spriteList.push({
            'pos': vec2.add(this.pos, PlayerObject.DIM_OFFSET),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'skin': this.skin,
            'pid': this.pid,
            'mode': _0x5c9425
        });
        0x0 < this.arrowFade && (_0x5c9425 = 0xa0 + parseInt(0x20 * this.arrowFade), spriteList.push({
            'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.dim.y)), PlayerObject.ARROW_OFFSET),
            'reverse': false,
            'index': PlayerObject.ARROW_SPRITE,
            'mode': _0x5c9425
        }));
    }
};
PlayerObject.prototype.write = function(_0x239cf4) {
    0x0 < this.arrowFade ? _0x239cf4.push({
        'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.dim.y)), PlayerObject.TEXT_OFFSET),
        'size': PlayerObject.TEXT_SIZE,
        'color': "rgba(255,255,255," + this.arrowFade + ')',
        'text': PlayerObject.ARROW_TEXT
    }) : this.name && _0x239cf4.push({
        'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.sprite.INDEX instanceof Array ? 0x2 : 0x1)), PlayerObject.TEAM_OFFSET),
        'size': PlayerObject.TEAM_SIZE,
        'color': this.isDev ? PlayerObject.DEV_TEAM_COLOR : PlayerObject.TEAM_COLOR,
        'text': this.name
    });
};
PlayerObject.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(PlayerObject);
"use strict";

function GoombaObject(game, level, zone, pos, oid, variant) {
    GameObject.call(this, game, level, zone, pos);
    this.oid = oid;
    this.variant = isNaN(parseInt(variant)) ? 0x0 : parseInt(variant);
    this.setState(GoombaObject.STATE.RUN);
    this.bonkTimer = this.deadTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = false;
    this.disabledTimer = 0x0;
    this.proxHit = false;
    this.dir = true;
    this.disable();
}
GoombaObject.ASYNC = false;
GoombaObject.ID = 0x11;
GoombaObject.NAME = "GOOMBA";
GoombaObject.ANIMATION_RATE = 0x5;
GoombaObject.VARIANT_OFFSET = 0x70;
GoombaObject.ENABLE_FADE_TIME = 0xf;
GoombaObject.ENABLE_DIST = 0x1a;
GoombaObject.DEAD_TIME = 0xf;
GoombaObject.BONK_TIME = 0x5a;
GoombaObject.BONK_IMP = vec2.make(0.25, 0.4);
GoombaObject.BONK_DECEL = 0.925;
GoombaObject.BONK_FALL_SPEED = 0.5;
GoombaObject.MOVE_SPEED_MAX = 0.075;
GoombaObject.FALL_SPEED_MAX = 0.35;
GoombaObject.FALL_SPEED_ACCEL = 0.085;
GoombaObject.SPRITE = {};
GoombaObject.SPRITE_LIST = [{
    'NAME': "RUN0",
    'ID': 0x0,
    'INDEX': 0xf
}, {
    'NAME': "RUN1",
    'ID': 0x1,
    'INDEX': 0x1f
}, {
    'NAME': "FALL",
    'ID': 0x2,
    'INDEX': 0xe
}, {
    'NAME': "DEAD",
    'ID': 0x3,
    'INDEX': 0x2f
}];
for (_0x1bec55 = 0x0; _0x1bec55 < GoombaObject.SPRITE_LIST.length; _0x1bec55++) GoombaObject.SPRITE[GoombaObject.SPRITE_LIST[_0x1bec55].NAME] = GoombaObject.SPRITE_LIST[_0x1bec55], GoombaObject.SPRITE[GoombaObject.SPRITE_LIST[_0x1bec55].ID] = GoombaObject.SPRITE_LIST[_0x1bec55];
GoombaObject.STATE = {};
GoombaObject.STATE_LIST = [{
    'NAME': "RUN",
    'ID': 0x0,
    'SPRITE': [GoombaObject.SPRITE.RUN0, GoombaObject.SPRITE.RUN1]
}, {
    'NAME': "FALL",
    'ID': 0x1,
    'SPRITE': [GoombaObject.SPRITE.FALL]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [GoombaObject.SPRITE.DEAD]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < GoombaObject.STATE_LIST.length; _0x1bec55++) GoombaObject.STATE[GoombaObject.STATE_LIST[_0x1bec55].NAME] = GoombaObject.STATE_LIST[_0x1bec55], GoombaObject.STATE[GoombaObject.STATE_LIST[_0x1bec55].ID] = GoombaObject.STATE_LIST[_0x1bec55];
GoombaObject.prototype.update = function(_0x30228e) {
    switch (_0x30228e) {
        case 0x0:
            this.kill();
            break;
        case 0x1:
            this.bonk();
            break;
        case 0xa0:
            this.enable();
    }
};
GoombaObject.prototype.step = function() {
    this.disabled ? this.proximity() : (0x0 < this.disabledTimer && this.disabledTimer--, this.state === GoombaObject.STATE.BONK ? this.bonkTimer++ > GoombaObject.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= GoombaObject.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - GoombaObject.FALL_SPEED_ACCEL, -GoombaObject.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / GoombaObject.ANIMATION_RATE) % this.state.SPRITE.length], this.state === GoombaObject.STATE.DEAD ? this.deadTimer++ < GoombaObject.DEAD_TIME || this.destroy() : (this.control(), this.physics(), this.sound(), 0x0 > this.pos.y && this.destroy())));
};
GoombaObject.prototype.control = function() {
    this.moveSpeed = this.dir ? -GoombaObject.MOVE_SPEED_MAX : GoombaObject.MOVE_SPEED_MAX;
    this.grounded ? this.setState(GoombaObject.STATE.RUN) : this.setState(GoombaObject.STATE.FALL);
};
GoombaObject.prototype.physics = function() {
    this.grounded && (this.fallSpeed = 0x0);
    this.fallSpeed = Math.max(this.fallSpeed - GoombaObject.FALL_SPEED_ACCEL, -GoombaObject.FALL_SPEED_MAX);
    var _0x482f3b = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x443a52 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x44dd07 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x39b88d = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x44dd07 = this.game.world.getZone(this.level, this.zone).getTiles(_0x44dd07, _0x39b88d),
        _0x39b88d = vec2.make(0x1, 0x1),
        _0x5c888e = false;
    this.grounded = false;
    for (var _0x3c302a = 0x0; _0x3c302a < _0x44dd07.length; _0x3c302a++) {
        var _0x1a430b = _0x44dd07[_0x3c302a];
        _0x1a430b.definition.COLLIDE && squar.intersection(_0x1a430b.pos, _0x39b88d, _0x482f3b, this.dim) && (this.pos.x <= _0x482f3b.x && _0x482f3b.x + this.dim.x > _0x1a430b.pos.x ? (_0x482f3b.x = _0x1a430b.pos.x - this.dim.x, _0x443a52.x = _0x482f3b.x, this.moveSpeed = 0x0, _0x5c888e = true) : this.pos.x >= _0x482f3b.x && _0x482f3b.x < _0x1a430b.pos.x + _0x39b88d.x && (_0x482f3b.x = _0x1a430b.pos.x + _0x39b88d.x, _0x443a52.x = _0x482f3b.x, this.moveSpeed = 0x0, _0x5c888e = true));
    }
    for (_0x3c302a = 0x0; _0x3c302a < _0x44dd07.length; _0x3c302a++) _0x1a430b = _0x44dd07[_0x3c302a], _0x1a430b.definition.COLLIDE && squar.intersection(_0x1a430b.pos, _0x39b88d, _0x443a52, this.dim) && (this.pos.y >= _0x443a52.y && _0x443a52.y < _0x1a430b.pos.y + _0x39b88d.y ? (_0x443a52.y = _0x1a430b.pos.y + _0x39b88d.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y <= _0x443a52.y && _0x443a52.y + this.dim.y > _0x1a430b.pos.y && (_0x443a52.y = _0x1a430b.pos.y - this.dim.y, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x482f3b.x, _0x443a52.y);
    _0x5c888e && (this.dir = !this.dir);
};
GoombaObject.prototype.sound = GameObject.prototype.sound;
GoombaObject.prototype.proximity = function() {
    var _0xc67304 = this.game.getPlayer();
    _0xc67304 && !_0xc67304.dead && _0xc67304.level === this.level && _0xc67304.zone === this.zone && !this.proxHit && vec2.distance(_0xc67304.pos, this.pos) < GoombaObject.ENABLE_DIST && (this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = true);
};
GoombaObject.prototype.enable = function() {
    this.disabled && (this.disabled = false, this.disabledTimer = GoombaObject.ENABLE_FADE_TIME);
};
GoombaObject.prototype.disable = function() {
    this.disabled = true;
};
GoombaObject.prototype.damage = function(_0x5b7e53) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
GoombaObject.prototype.bonk = function() {
    this.dead || (this.setState(GoombaObject.STATE.BONK), this.moveSpeed = GoombaObject.BONK_IMP.x, this.fallSpeed = GoombaObject.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
GoombaObject.prototype.playerCollide = function(_0x5ee074) {
    this.dead || this.garbage || _0x5ee074.damage(this);
};
GoombaObject.prototype.playerStomp = function(_0x584473) {
    this.dead || this.garbage || (this.kill(), _0x584473.bounce(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x0)));
};
GoombaObject.prototype.playerBump = function(_0x5e0adc) {
    this.dead || this.garbage || _0x5e0adc.damage(this);
};
GoombaObject.prototype.kill = function() {
    this.dead = true;
    this.setState(GoombaObject.STATE.DEAD);
    this.play("stomp.wav", 0x1, 0.04);
};
GoombaObject.prototype.destroy = GameObject.prototype.destroy;
GoombaObject.prototype.isTangible = GameObject.prototype.isTangible;
GoombaObject.prototype.setState = function(_0x4fe620) {
    _0x4fe620 !== this.state && (this.state = _0x4fe620, 0x0 < _0x4fe620.SPRITE.length && (this.sprite = _0x4fe620.SPRITE[0x0]), this.anim = 0x0);
};
GoombaObject.prototype.draw = function(_0xa69c24) {
    if (!this.disabled) {
        var _0x57b370;
        _0x57b370 = this.state === GoombaObject.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / GoombaObject.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x2d049f = this.sprite.INDEX, _0x2e81c8 = 0x0; _0x2e81c8 < _0x2d049f.length; _0x2e81c8++)
                for (var _0x28feb8 = 0x0; _0x28feb8 < _0x2d049f[_0x2e81c8].length; _0x28feb8++) {
                    var _0x14ac9a = _0x2d049f[_0x57b370 ? _0x2d049f.length - 0x1 - _0x2e81c8 : _0x2e81c8][_0x28feb8];
                    switch (this.variant) {
                        case 0x1:
                            _0x14ac9a += GoombaObject.VARIANT_OFFSET;
                    }
                    _0xa69c24.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x28feb8, _0x2e81c8)),
                        'reverse': !this.dir,
                        'index': _0x14ac9a,
                        'mode': _0x57b370
                    });
                } else {
                    _0x14ac9a = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x14ac9a += GoombaObject.VARIANT_OFFSET;
                    }
                    _0xa69c24.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x14ac9a,
                        'mode': _0x57b370
                    });
                }
    }
};
GoombaObject.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(GoombaObject);
"use strict";

function _0xafe583(_0xa97c33, _0x554349, _0x3fb5a3, _0x1fe726, _0xe543eb, _0x547d60, _0xdab7ae) {
    GameObject.call(this, _0xa97c33, _0x554349, _0x3fb5a3, _0x1fe726);
    this.oid = _0xe543eb;
    this.variant = isNaN(parseInt(_0xdab7ae)) ? 0x0 : parseInt(_0xdab7ae);
    this.setState(parseInt(_0x547d60) ? _0xafe583.STATE.FLY : _0xafe583.STATE.RUN);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.grounded = false;
    this.jump = -0x1;
    this.disabled = false;
    this.disabledTimer = 0x0;
    this.proxHit = false;
    this.immuneTimer = 0x0;
    this.dir = true;
    this.disable();
}
_0xafe583.ASYNC = false;
_0xafe583.ID = 0x12;
_0xafe583.NAME = "KOOPA";
_0xafe583.ANIMATION_RATE = 0x3;
_0xafe583.VARIANT_OFFSET = 0x20;
_0xafe583.ENABLE_FADE_TIME = 0xf;
_0xafe583.ENABLE_DIST = 0x1a;
_0xafe583.BONK_TIME = 0x5a;
_0xafe583.BONK_IMP = vec2.make(0.25, 0.4);
_0xafe583.BONK_DECEL = 0.925;
_0xafe583.BONK_FALL_SPEED = 0.5;
_0xafe583.PLAYER_IMMUNE_TIME = 0x6;
_0xafe583.MOVE_SPEED_MAX = 0.075;
_0xafe583.SHELL_MOVE_SPEED_MAX = 0.35;
_0xafe583.FALL_SPEED_MAX = 0.35;
_0xafe583.FALL_SPEED_ACCEL = 0.085;
_0xafe583.JUMP_LENGTH_MAX = 0x14;
_0xafe583.JUMP_DECEL = 0.025;
_0xafe583.TRANSFORM_TIME = 0xaf;
_0xafe583.TRANSFORM_THRESHOLD = 0x4b;
_0xafe583.SPRITE = {};
_0xafe583.SPRITE_LIST = [{
    'NAME': "FLY0",
    'ID': 0x0,
    'INDEX': [
        [0x68],
        [0x58]
    ]
}, {
    'NAME': "FLY1",
    'ID': 0x1,
    'INDEX': [
        [0x69],
        [0x59]
    ]
}, {
    'NAME': "RUN0",
    'ID': 0x2,
    'INDEX': [
        [0x66],
        [0x56]
    ]
}, {
    'NAME': "RUN1",
    'ID': 0x3,
    'INDEX': [
        [0x67],
        [0x57]
    ]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x4,
    'INDEX': 0x51
}, {
    'NAME': "SHELL",
    'ID': 0x5,
    'INDEX': 0x50
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0xafe583.SPRITE_LIST.length; _0x1bec55++) _0xafe583.SPRITE[_0xafe583.SPRITE_LIST[_0x1bec55].NAME] = _0xafe583.SPRITE_LIST[_0x1bec55], _0xafe583.SPRITE[_0xafe583.SPRITE_LIST[_0x1bec55].ID] = _0xafe583.SPRITE_LIST[_0x1bec55];
_0xafe583.STATE = {};
_0xafe583.STATE_LIST = [{
    'NAME': "FLY",
    'ID': 0x0,
    'SPRITE': [_0xafe583.SPRITE.FLY0, _0xafe583.SPRITE.FLY1]
}, {
    'NAME': "RUN",
    'ID': 0x1,
    'SPRITE': [_0xafe583.SPRITE.RUN0, _0xafe583.SPRITE.RUN1]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x2,
    'SPRITE': [_0xafe583.SPRITE.SHELL, _0xafe583.SPRITE.TRANSFORM]
}, {
    'NAME': "SHELL",
    'ID': 0x3,
    'SPRITE': [_0xafe583.SPRITE.SHELL]
}, {
    'NAME': "SPIN",
    'ID': 0x4,
    'SPRITE': [_0xafe583.SPRITE.SHELL]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0xafe583.STATE_LIST.length; _0x1bec55++) _0xafe583.STATE[_0xafe583.STATE_LIST[_0x1bec55].NAME] = _0xafe583.STATE_LIST[_0x1bec55], _0xafe583.STATE[_0xafe583.STATE_LIST[_0x1bec55].ID] = _0xafe583.STATE_LIST[_0x1bec55];
_0xafe583.prototype.update = function(_0x432173) {
    switch (_0x432173) {
        case 0x1:
            this.bonk();
            break;
        case 0x10:
            this.stomped(true);
            break;
        case 0x11:
            this.stomped(false);
            break;
        case 0xa0:
            this.enable();
    }
};
_0xafe583.prototype.step = function() {
    if (this.disabled) this.proximity();
    else if (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0xafe583.STATE.BONK) this.bonkTimer++ > _0xafe583.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0xafe583.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.BONK_FALL_SPEED));
    else {
        this.anim++;
        this.sprite = this.state.SPRITE[parseInt(this.anim / _0xafe583.ANIMATION_RATE) % this.state.SPRITE.length];
        if (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM) --this.transformTimer < _0xafe583.TRANSFORM_THRESHOLD && this.setState(_0xafe583.STATE.TRANSFORM), 0x0 >= this.transformTimer && this.setState(_0xafe583.STATE.RUN);
        0x0 < this.immuneTimer && this.immuneTimer--;
        this.control();
        this.physics();
        this.interaction();
        this.sound();
        0x0 > this.pos.y && this.destroy();
    }
};
_0xafe583.prototype.control = function() {
    if (this.state === _0xafe583.STATE.FLY) this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX, this.grounded && (this.jump = 0x0);
    else if (this.state === _0xafe583.STATE.RUN) this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX;
    else if (this.state === _0xafe583.STATE.SPIN) this.moveSpeed = this.dir ? -_0xafe583.SHELL_MOVE_SPEED_MAX : _0xafe583.SHELL_MOVE_SPEED_MAX;
    else if (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM) this.moveSpeed = 0x0;
    this.jump > _0xafe583.JUMP_LENGTH_MAX && (this.jump = -0x1);
};
_0xafe583.prototype.physics = function() {
    -0x1 !== this.jump ? (this.fallSpeed = _0xafe583.FALL_SPEED_MAX - this.jump * _0xafe583.JUMP_DECEL, this.jump++, this.grounded = false) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.FALL_SPEED_MAX));
    this.grounded && (this.fallSpeed = 0x0);
    this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.FALL_SPEED_MAX);
    var _0x228c79 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0xa7c94d = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x186c6d = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x1f400c = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x186c6d = this.game.world.getZone(this.level, this.zone).getTiles(_0x186c6d, _0x1f400c),
        _0x1f400c = vec2.make(0x1, 0x1),
        _0x350f0e = false;
    this.grounded = false;
    for (var _0x277a15 = 0x0; _0x277a15 < _0x186c6d.length; _0x277a15++) {
        var _0xb496d = _0x186c6d[_0x277a15];
        _0xb496d.definition.COLLIDE && squar.intersection(_0xb496d.pos, _0x1f400c, _0x228c79, this.dim) && (this.pos.x + this.dim.x <= _0xb496d.pos.x && _0x228c79.x + this.dim.x > _0xb496d.pos.x ? (_0x228c79.x = _0xb496d.pos.x - this.dim.x, _0xa7c94d.x = _0x228c79.x, this.moveSpeed = 0x0, _0x350f0e = true) : this.pos.x >= _0xb496d.pos.x + _0x1f400c.x && _0x228c79.x < _0xb496d.pos.x + _0x1f400c.x && (_0x228c79.x = _0xb496d.pos.x + _0x1f400c.x, _0xa7c94d.x = _0x228c79.x, this.moveSpeed = 0x0, _0x350f0e = true));
    }
    for (_0x277a15 = 0x0; _0x277a15 < _0x186c6d.length; _0x277a15++) _0xb496d = _0x186c6d[_0x277a15], _0xb496d.definition.COLLIDE && squar.intersection(_0xb496d.pos, _0x1f400c, _0xa7c94d, this.dim) && (this.pos.y >= _0xb496d.pos.y + _0x1f400c.y && _0xa7c94d.y < _0xb496d.pos.y + _0x1f400c.y ? (_0xa7c94d.y = _0xb496d.pos.y + _0x1f400c.y, this.grounded = true) : this.pos.y + this.dim.y <= _0xb496d.pos.y && _0xa7c94d.y + this.dim.y > _0xb496d.pos.y && (_0xa7c94d.y = _0xb496d.pos.y - this.dim.y, this.jump = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x228c79.x, _0xa7c94d.y);
    _0x350f0e && (this.dir = !this.dir);
};
_0xafe583.prototype.interaction = function() {
    if (this.state === _0xafe583.STATE.SPIN)
        for (var _0x369f51 = 0x0; _0x369f51 < this.game.objects.length; _0x369f51++) {
            var _0x597333 = this.game.objects[_0x369f51];
            _0x597333 === this || _0x597333 instanceof PlayerObject || !_0x597333.isTangible() || !_0x597333.damage || _0x597333.level === this.level && _0x597333.zone === this.zone && squar.intersection(_0x597333.pos, _0x597333.dim, this.pos, this.dim) && _0x597333.damage(this);
        }
};
_0xafe583.prototype.proximity = function() {
    var _0x12bcf2 = this.game.getPlayer();
    _0x12bcf2 && !_0x12bcf2.dead && _0x12bcf2.level === this.level && _0x12bcf2.zone === this.zone && !this.proxHit && vec2.distance(_0x12bcf2.pos, this.pos) < _0xafe583.ENABLE_DIST && (this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = true);
};
_0xafe583.prototype.sound = GameObject.prototype.sound;
_0xafe583.prototype.enable = function() {
    this.disabled && (this.disabled = false, this.disabledTimer = _0xafe583.ENABLE_FADE_TIME);
};
_0xafe583.prototype.disable = function() {
    this.disabled = true;
};
_0xafe583.prototype.damage = function(_0x565802) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0xafe583.prototype.bonk = function() {
    this.dead || (this.setState(_0xafe583.STATE.BONK), this.moveSpeed = _0xafe583.BONK_IMP.x, this.fallSpeed = _0xafe583.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
_0xafe583.prototype.stomped = function(_0x45b447) {
    if (this.state === _0xafe583.STATE.FLY) this.setState(_0xafe583.STATE.RUN), this.jump = -0x1;
    else if (this.state === _0xafe583.STATE.RUN) this.setState(_0xafe583.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0xafe583.STATE.SPIN) this.setState(_0xafe583.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM) this.setState(_0xafe583.STATE.SPIN), this.dir = _0x45b447;
    this.play("stomp.wav", 0x1, 0.04);
};
_0xafe583.prototype.playerCollide = function(_0x49360d) {
    this.dead || this.garbage || (this.state === _0xafe583.STATE.SHELL || this.state === _0xafe583.STATE.TRANSFORM ? (_0x49360d = 0x0 < _0x49360d.pos.x - this.pos.x, this.stomped(_0x49360d), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, _0x49360d ? 0x10 : 0x11)), this.immuneTimer = _0xafe583.PLAYER_IMMUNE_TIME) : 0x0 >= this.immuneTimer && _0x49360d.damage(this));
};
_0xafe583.prototype.playerStomp = function(_0x4a7d08) {
    if (!this.dead && !this.garbage) {
        var _0x2f4f3f = 0x0 < _0x4a7d08.pos.x - this.pos.x;
        _0x4a7d08.bounce();
        this.stomped(_0x2f4f3f);
        this.immuneTimer = _0xafe583.PLAYER_IMMUNE_TIME;
        this.game.out.push(NET020.encode(this.level, this.zone, this.oid, _0x2f4f3f ? 0x10 : 0x11));
    }
};
_0xafe583.prototype.playerBump = function(_0x542091) {
    this.dead || this.garbage || _0x542091.damage(this);
};
_0xafe583.prototype.kill = function() {};
_0xafe583.prototype.destroy = GameObject.prototype.destroy;
_0xafe583.prototype.isTangible = GameObject.prototype.isTangible;
_0xafe583.prototype.setState = function(_0x1ddca8) {
    _0x1ddca8 !== this.state && (this.state = _0x1ddca8, 0x0 < _0x1ddca8.SPRITE.length && (this.sprite = _0x1ddca8.SPRITE[0x0]), this.anim = 0x0);
};
_0xafe583.prototype.draw = function(_0x43f21f) {
    if (!this.disabled) {
        var _0x345a76;
        _0x345a76 = this.state === _0xafe583.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0xafe583.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x5bdb01 = this.sprite.INDEX, _0x98a94 = 0x0; _0x98a94 < _0x5bdb01.length; _0x98a94++)
                for (var _0x3f41db = 0x0; _0x3f41db < _0x5bdb01[_0x98a94].length; _0x3f41db++) {
                    var _0x3b8db1 = _0x5bdb01[0x3 !== _0x345a76 ? _0x98a94 : _0x5bdb01.length - 0x1 - _0x98a94][_0x3f41db];
                    switch (this.variant) {
                        case 0x1:
                            _0x3b8db1 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x43f21f.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x3f41db, _0x98a94)),
                        'reverse': !this.dir,
                        'index': _0x3b8db1,
                        'mode': _0x345a76
                    });
                } else {
                    _0x3b8db1 = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x3b8db1 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x43f21f.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x3b8db1,
                        'mode': _0x345a76
                    });
                }
    }
};
_0xafe583.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0xafe583);
"use strict";

function _0x5e412e(_0x20fee6, _0x2e48c2, _0x2b82bb, _0x254183, _0xc898a6, _0x35c708, _0x10c5aa) {
    GameObject.call(this, _0x20fee6, _0x2e48c2, _0x2b82bb, _0x254183);
    this.oid = _0xc898a6;
    this.variant = isNaN(parseInt(_0x10c5aa)) ? 0x0 : parseInt(_0x10c5aa);
    this.setState(parseInt(_0x35c708) ? _0x5e412e.STATE.FLY : _0x5e412e.STATE.RUN);
    this.bonkTimer = this.anim = 0x0;
    this.loc = [this.pos.y + 0.5 * _0x5e412e.FLY_DISTANCE, this.pos.y - 0.5 * _0x5e412e.FLY_DISTANCE];
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = false;
    this.disabledTimer = 0x0;
    this.proxHit = false;
    this.immuneTimer = 0x0;
    this.rev = false;
    this.dir = true;
    this.disable();
}
_0x5e412e.ASYNC = false;
_0x5e412e.ID = 0x13;
_0x5e412e.NAME = "KOOPA TROOPA";
_0x5e412e.FLY_DISTANCE = 0x3;
_0x5e412e.FLY_ACCEL = 0.0025;
_0x5e412e.FLY_SPEED_MAX = 0.075;
_0x5e412e.CHECK_DIST = 0.1;
_0x5e412e.SPRITE = {};
_0x5e412e.SPRITE_LIST = [{
    'NAME': "FLY0",
    'ID': 0x0,
    'INDEX': [
        [0x64],
        [0x54]
    ]
}, {
    'NAME': "FLY1",
    'ID': 0x1,
    'INDEX': [
        [0x65],
        [0x55]
    ]
}, {
    'NAME': "RUN0",
    'ID': 0x2,
    'INDEX': [
        [0x62],
        [0x52]
    ]
}, {
    'NAME': "RUN1",
    'ID': 0x3,
    'INDEX': [
        [0x63],
        [0x53]
    ]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x4,
    'INDEX': 0x61
}, {
    'NAME': "SHELL",
    'ID': 0x5,
    'INDEX': 0x60
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5e412e.SPRITE_LIST.length; _0x1bec55++) _0x5e412e.SPRITE[_0x5e412e.SPRITE_LIST[_0x1bec55].NAME] = _0x5e412e.SPRITE_LIST[_0x1bec55], _0x5e412e.SPRITE[_0x5e412e.SPRITE_LIST[_0x1bec55].ID] = _0x5e412e.SPRITE_LIST[_0x1bec55];
_0x5e412e.STATE = {};
_0x5e412e.STATE_LIST = [{
    'NAME': "FLY",
    'ID': 0x0,
    'SPRITE': [_0x5e412e.SPRITE.FLY0, _0x5e412e.SPRITE.FLY1]
}, {
    'NAME': "RUN",
    'ID': 0x1,
    'SPRITE': [_0x5e412e.SPRITE.RUN0, _0x5e412e.SPRITE.RUN1]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x2,
    'SPRITE': [_0x5e412e.SPRITE.SHELL, _0x5e412e.SPRITE.TRANSFORM]
}, {
    'NAME': "SHELL",
    'ID': 0x3,
    'SPRITE': [_0x5e412e.SPRITE.SHELL]
}, {
    'NAME': "SPIN",
    'ID': 0x4,
    'SPRITE': [_0x5e412e.SPRITE.SHELL]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5e412e.STATE_LIST.length; _0x1bec55++) _0x5e412e.STATE[_0x5e412e.STATE_LIST[_0x1bec55].NAME] = _0x5e412e.STATE_LIST[_0x1bec55], _0x5e412e.STATE[_0x5e412e.STATE_LIST[_0x1bec55].ID] = _0x5e412e.STATE_LIST[_0x1bec55];
_0x5e412e.prototype.update = _0xafe583.prototype.update;
_0x5e412e.prototype.step = function() {
    if (this.disabled) this.proximity();
    else if (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0x5e412e.STATE.BONK) this.bonkTimer++ > _0xafe583.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0xafe583.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.BONK_FALL_SPEED));
    else {
        this.anim++;
        this.sprite = this.state.SPRITE[parseInt(this.anim / _0xafe583.ANIMATION_RATE) % this.state.SPRITE.length];
        if (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM) --this.transformTimer < _0xafe583.TRANSFORM_THRESHOLD && this.setState(_0x5e412e.STATE.TRANSFORM), 0x0 >= this.transformTimer && this.setState(_0x5e412e.STATE.RUN);
        0x0 < this.immuneTimer && this.immuneTimer--;
        this.control();
        this.physics();
        this.interaction();
        this.sound();
        0x0 > this.pos.y && this.destroy();
    }
};
_0x5e412e.prototype.control = function() {
    this.state === _0x5e412e.STATE.FLY && (this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX);
    this.state === _0x5e412e.STATE.RUN && (this.grounded && !this.checkGround() && (this.dir = !this.dir), this.moveSpeed = this.dir ? -_0xafe583.MOVE_SPEED_MAX : _0xafe583.MOVE_SPEED_MAX);
    this.state === _0x5e412e.STATE.SPIN && (this.moveSpeed = this.dir ? -_0xafe583.SHELL_MOVE_SPEED_MAX : _0xafe583.SHELL_MOVE_SPEED_MAX);
    if (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM) this.moveSpeed = 0x0;
};
_0x5e412e.prototype.physics = function() {
    if (this.state === _0x5e412e.STATE.FLY) this.rev ? (this.fallSpeed = Math.min(_0x5e412e.FLY_SPEED_MAX, this.fallSpeed + _0x5e412e.FLY_ACCEL), this.pos.y += this.fallSpeed, this.pos.y >= this.loc[0x0] && (this.rev = false)) : (this.fallSpeed = Math.max(-_0x5e412e.FLY_SPEED_MAX, this.fallSpeed - _0x5e412e.FLY_ACCEL), this.pos.y += this.fallSpeed, this.pos.y <= this.loc[0x1] && (this.rev = true));
    else {
        this.grounded && (this.fallSpeed = 0x0);
        this.fallSpeed = Math.max(this.fallSpeed - _0xafe583.FALL_SPEED_ACCEL, -_0xafe583.FALL_SPEED_MAX);
        var _0x487bc8 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
            _0x41141f = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
            _0x26638d = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
            _0x2160ce = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
            _0x26638d = this.game.world.getZone(this.level, this.zone).getTiles(_0x26638d, _0x2160ce),
            _0x2160ce = vec2.make(0x1, 0x1),
            _0x58fc4d = false;
        this.grounded = false;
        for (var _0x36c036 = 0x0; _0x36c036 < _0x26638d.length; _0x36c036++) {
            var _0x46e9db = _0x26638d[_0x36c036];
            _0x46e9db.definition.COLLIDE && squar.intersection(_0x46e9db.pos, _0x2160ce, _0x487bc8, this.dim) && (this.pos.x + this.dim.x <= _0x46e9db.pos.x && _0x487bc8.x + this.dim.x > _0x46e9db.pos.x ? (_0x487bc8.x = _0x46e9db.pos.x - this.dim.x, _0x41141f.x = _0x487bc8.x, this.moveSpeed = 0x0, _0x58fc4d = true) : this.pos.x >= _0x46e9db.pos.x + _0x2160ce.x && _0x487bc8.x < _0x46e9db.pos.x + _0x2160ce.x && (_0x487bc8.x = _0x46e9db.pos.x + _0x2160ce.x, _0x41141f.x = _0x487bc8.x, this.moveSpeed = 0x0, _0x58fc4d = true));
        }
        for (_0x36c036 = 0x0; _0x36c036 < _0x26638d.length; _0x36c036++) _0x46e9db = _0x26638d[_0x36c036], _0x46e9db.definition.COLLIDE && squar.intersection(_0x46e9db.pos, _0x2160ce, _0x41141f, this.dim) && (this.pos.y >= _0x46e9db.pos.y + _0x2160ce.y && _0x41141f.y < _0x46e9db.pos.y + _0x2160ce.y ? (_0x41141f.y = _0x46e9db.pos.y + _0x2160ce.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y + this.dim.y <= _0x46e9db.pos.y && _0x41141f.y + this.dim.y > _0x46e9db.pos.y && (_0x41141f.y = _0x46e9db.pos.y - this.dim.y, this.fallSpeed = 0x0));
        this.pos = vec2.make(_0x487bc8.x, _0x41141f.y);
        _0x58fc4d && (this.dir = !this.dir);
    }
};
_0x5e412e.prototype.interaction = function() {
    if (this.state === _0x5e412e.STATE.SPIN)
        for (var _0x55c0e3 = 0x0; _0x55c0e3 < this.game.objects.length; _0x55c0e3++) {
            var _0xa2c7b4 = this.game.objects[_0x55c0e3];
            _0xa2c7b4 === this || _0xa2c7b4 instanceof PlayerObject || !_0xa2c7b4.isTangible() || !_0xa2c7b4.damage || _0xa2c7b4.level === this.level && _0xa2c7b4.zone === this.zone && squar.intersection(_0xa2c7b4.pos, _0xa2c7b4.dim, this.pos, this.dim) && _0xa2c7b4.damage();
        }
};
_0x5e412e.prototype.sound = GameObject.prototype.sound;
_0x5e412e.prototype.checkGround = function() {
    var _0x1e7bcc = this.dir ? vec2.add(this.pos, vec2.make(-_0x5e412e.CHECK_DIST, 0x0)) : vec2.add(this.pos, vec2.make(_0x5e412e.CHECK_DIST + this.dim.x, 0x0));
    _0x1e7bcc.y -= 1.5;
    return this.game.world.getZone(this.level, this.zone).getTile(_0x1e7bcc).definition.COLLIDE;
};
_0x5e412e.prototype.proximity = _0xafe583.prototype.proximity;
_0x5e412e.prototype.enable = _0xafe583.prototype.enable;
_0x5e412e.prototype.disable = _0xafe583.prototype.disable;
_0x5e412e.prototype.damage = _0xafe583.prototype.damage;
_0x5e412e.prototype.bonk = function() {
    this.dead || (this.setState(_0x5e412e.STATE.BONK), this.moveSpeed = _0xafe583.BONK_IMP.x, this.fallSpeed = _0xafe583.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
_0x5e412e.prototype.stomped = function(_0x2f1cbf) {
    if (this.state === _0x5e412e.STATE.FLY) this.setState(_0x5e412e.STATE.RUN);
    else if (this.state === _0x5e412e.STATE.RUN) this.setState(_0x5e412e.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0x5e412e.STATE.SPIN) this.setState(_0x5e412e.STATE.SHELL), this.transformTimer = _0xafe583.TRANSFORM_TIME;
    else if (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM) this.setState(_0x5e412e.STATE.SPIN), this.dir = _0x2f1cbf;
    this.play("stomp.wav", 0x1, 0.04);
};
_0x5e412e.prototype.playerCollide = function(_0x2665f3) {
    this.dead || this.garbage || (this.state === _0x5e412e.STATE.SHELL || this.state === _0x5e412e.STATE.TRANSFORM ? (_0x2665f3 = 0x0 < _0x2665f3.pos.x - this.pos.x, this.stomped(_0x2665f3), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, _0x2665f3 ? 0x10 : 0x11)), this.immuneTimer = _0xafe583.PLAYER_IMMUNE_TIME) : 0x0 >= this.immuneTimer && _0x2665f3.damage(this));
};
_0x5e412e.prototype.playerStomp = _0xafe583.prototype.playerStomp;
_0x5e412e.prototype.playerBump = _0xafe583.prototype.playerBump;
_0x5e412e.prototype.kill = _0xafe583.prototype.kill;
_0x5e412e.prototype.destroy = _0xafe583.prototype.destroy;
_0x5e412e.prototype.isTangible = _0xafe583.prototype.isTangible;
_0x5e412e.prototype.setState = _0xafe583.prototype.setState;
_0x5e412e.prototype.draw = function(_0x6357b4) {
    if (!this.disabled) {
        var _0x249e88;
        _0x249e88 = this.state === _0x5e412e.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0xafe583.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0xe3aa3a = this.sprite.INDEX, _0x331f7c = 0x0; _0x331f7c < _0xe3aa3a.length; _0x331f7c++)
                for (var _0x55c5a9 = 0x0; _0x55c5a9 < _0xe3aa3a[_0x331f7c].length; _0x55c5a9++) {
                    var _0x1d1e23 = _0xe3aa3a[0x3 !== _0x249e88 ? _0x331f7c : _0xe3aa3a.length - 0x1 - _0x331f7c][_0x55c5a9];
                    switch (this.variant) {
                        case 0x1:
                            _0x1d1e23 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x6357b4.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x55c5a9, _0x331f7c)),
                        'reverse': !this.dir,
                        'index': _0x1d1e23,
                        'mode': _0x249e88
                    });
                } else {
                    _0x1d1e23 = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x1d1e23 += _0xafe583.VARIANT_OFFSET;
                    }
                    _0x6357b4.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x1d1e23,
                        'mode': _0x249e88
                    });
                }
    }
};
_0x5e412e.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x5e412e);
"use strict";

function PiranhaPlantObject(game, level, zone, pos, oid, variant, direction) {
    GameObject.call(this, game, level, zone, vec2.add(pos, vec2.make(0.6, 0x0)));
    this.oid = oid;
    this.variant = isNaN(parseInt(variant)) ? 0x0 : parseInt(variant);
    this.direction = isNaN(parseInt(direction)) ? 0x0 : parseInt(direction);
    if (this.direction) this.pos = vec2.add(this.pos, vec2.make(0,0.5));
    this.setState(PiranhaPlantObject.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.loc = [vec2.copy(this.pos), vec2.add(this.pos, vec2.make(0x0, -1.5))];
    this.dim = vec2.make(0.8, 0x1);
    this.dir = this.fallSpeed = this.moveSpeed = 0x0;
}
PiranhaPlantObject.ASYNC = false;
PiranhaPlantObject.ID = 0x16;
PiranhaPlantObject.NAME = "UNSPELLABLE PLANT";
PiranhaPlantObject.ANIMATION_RATE = 0x3;
PiranhaPlantObject.VARIANT_OFFSET = 0x20;
PiranhaPlantObject.SOFFSET = vec2.make(-0.1, 0x0);
PiranhaPlantObject.BONK_TIME = 0x5a;
PiranhaPlantObject.BONK_IMP = vec2.make(0.25, 0.4);
PiranhaPlantObject.BONK_DECEL = 0.925;
PiranhaPlantObject.BONK_FALL_SPEED = 0.5;
PiranhaPlantObject.FALL_SPEED_ACCEL = 0.085;
PiranhaPlantObject.WAIT_TIME = 0x19;
PiranhaPlantObject.TRAVEL_SPEED = 0.05;
PiranhaPlantObject.SPRITE = {};
PiranhaPlantObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': [
        [0x6a],
        [0x5a]
    ]
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': [
        [0x6b],
        [0x5b]
    ]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < PiranhaPlantObject.SPRITE_LIST.length; _0x1bec55++) PiranhaPlantObject.SPRITE[PiranhaPlantObject.SPRITE_LIST[_0x1bec55].NAME] = PiranhaPlantObject.SPRITE_LIST[_0x1bec55], PiranhaPlantObject.SPRITE[PiranhaPlantObject.SPRITE_LIST[_0x1bec55].ID] = PiranhaPlantObject.SPRITE_LIST[_0x1bec55];
PiranhaPlantObject.STATE = {};
PiranhaPlantObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [PiranhaPlantObject.SPRITE.IDLE0, PiranhaPlantObject.SPRITE.IDLE1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < PiranhaPlantObject.STATE_LIST.length; _0x1bec55++) PiranhaPlantObject.STATE[PiranhaPlantObject.STATE_LIST[_0x1bec55].NAME] = PiranhaPlantObject.STATE_LIST[_0x1bec55], PiranhaPlantObject.STATE[PiranhaPlantObject.STATE_LIST[_0x1bec55].ID] = PiranhaPlantObject.STATE_LIST[_0x1bec55];
PiranhaPlantObject.prototype.update = function(_0x5c481f) {
    switch (_0x5c481f) {
        case 0x1:
            this.bonk();
    }
};
PiranhaPlantObject.prototype.step = function() {
    this.state === PiranhaPlantObject.STATE.BONK ? this.bonkTimer++ > PiranhaPlantObject.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= PiranhaPlantObject.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - PiranhaPlantObject.FALL_SPEED_ACCEL, -PiranhaPlantObject.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / PiranhaPlantObject.ANIMATION_RATE) % this.state.SPRITE.length], 0x0 < --this.waitTimer || (this.control(), this.physics(), this.sound()));
};
PiranhaPlantObject.prototype.control = function() {};
PiranhaPlantObject.prototype.physics = function() {
    var _0x3e7dc7 = this.loc[this.dir ? 0x0 : 0x1];
    vec2.distance(this.pos, _0x3e7dc7) <= PiranhaPlantObject.TRAVEL_SPEED ? (this.pos = _0x3e7dc7, this.dir = !this.dir, this.waitTimer = PiranhaPlantObject.WAIT_TIME) : this.pos = vec2.add(this.pos, vec2.scale(vec2.normalize(vec2.subtract(_0x3e7dc7, this.pos)), PiranhaPlantObject.TRAVEL_SPEED));
};
PiranhaPlantObject.prototype.sound = GameObject.prototype.sound;
PiranhaPlantObject.prototype.damage = function(_0x508a32) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
PiranhaPlantObject.prototype.bonk = function() {
    this.dead || (this.setState(PiranhaPlantObject.STATE.BONK), this.moveSpeed = PiranhaPlantObject.BONK_IMP.x, this.fallSpeed = PiranhaPlantObject.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
PiranhaPlantObject.prototype.playerCollide = function(_0x3bb251) {
    this.dead || this.garbage || _0x3bb251.damage(this);
};
PiranhaPlantObject.prototype.playerStomp = function(_0x8423cf) {
    this.dead || this.garbage || _0x8423cf.damage(this);
};
PiranhaPlantObject.prototype.playerBump = function(_0x321a69) {
    this.dead || this.garbage || _0x321a69.damage(this);
};
PiranhaPlantObject.prototype.kill = function() {};
PiranhaPlantObject.prototype.destroy = GameObject.prototype.destroy;
PiranhaPlantObject.prototype.isTangible = GameObject.prototype.isTangible;
PiranhaPlantObject.prototype.setState = function(_0x3f1709) {
    _0x3f1709 !== this.state && (this.state = _0x3f1709, 0x0 < _0x3f1709.SPRITE.length && (this.sprite = _0x3f1709.SPRITE[0x0]), this.anim = 0x0);
};
PiranhaPlantObject.prototype.draw = function(spriteList) {
    var mode;
    mode = (this.direction ^ this.state === PiranhaPlantObject.STATE.BONK) ? 0x3 : 0x0;
    if (this.sprite.INDEX instanceof Array) {
        var idxs = this.sprite.INDEX;
        for (var i = 0x0; i < idxs.length; i++)
            for (var j = 0x0; j < idxs[i].length; j++) {
                var idx = idxs[mode ? idxs.length - 0x1 - i : i][j];
                switch (this.variant) {
                    case 0x1:
                        idx += PiranhaPlantObject.VARIANT_OFFSET;
                }
                spriteList.push({
                    'pos': vec2.add(vec2.add(this.pos, vec2.make(j, i)), PiranhaPlantObject.SOFFSET),
                    'reverse': !this.dir,
                    'index': idx,
                    'mode': mode
                });
            } 
    } else {
        idx = this.sprite.INDEX;
        switch (this.variant) {
            case 0x1:
                idx += PiranhaPlantObject.VARIANT_OFFSET;
        }
        spriteList.push({
            'pos': vec2.add(this.pos, PiranhaPlantObject.SOFFSET),
            'reverse': !this.dir,
            'index': idx,
            'mode': mode
        });
    }
};
PiranhaPlantObject.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(PiranhaPlantObject);
"use strict";

function _0x25ddce(_0x171be9, _0x49adc1, _0x3c512b, _0xf8ff83, _0x140a9f, _0x26dec7, _0x3b38a6) {
    GameObject.call(this, _0x171be9, _0x49adc1, _0x3c512b, _0xf8ff83);
    this.oid = _0x140a9f;
    this.setState(_0x25ddce.STATE.IDLE);
    this.delay = isNaN(parseInt(_0x26dec7)) ? _0x25ddce.DELAY_DEFAULT : parseInt(_0x26dec7);
    this.impulse = isNaN(parseFloat(_0x3b38a6)) ? 0x1 : parseFloat(_0x3b38a6);
    this.anim = 0x0;
    this.disabled = false;
    this.delayTimer = this.delay;
    this.bonkTimer = 0x0;
    this.pos.x += _0x25ddce.SOFFSET.x;
    this.loc = vec2.copy(this.pos);
    this.moveSpeed = this.fallSpeed = 0x0;
    this.dim = vec2.make(0.7, 0.7);
    this.dir = true;
}
_0x25ddce.ASYNC = false;
_0x25ddce.ID = 0x15;
_0x25ddce.NAME = "FLYING FISH";
_0x25ddce.ANIMATION_RATE = 0x3;
_0x25ddce.BONK_TIME = 0x5a;
_0x25ddce.BONK_IMP = vec2.make(0.25, 0.4);
_0x25ddce.BONK_DECEL = 0.925;
_0x25ddce.BONK_FALL_SPEED = 0.5;
_0x25ddce.BONK_FALL_ACCEL = 0.085;
_0x25ddce.DELAY_DEFAULT = 0x96;
_0x25ddce.IMPULSE = vec2.make(0.225, 0.335);
_0x25ddce.DRAG = 0.996;
_0x25ddce.FALL_SPEED_ACCEL = 0.0055;
_0x25ddce.SOFFSET = vec2.make(0.15, 0.15);
_0x25ddce.SPRITE = {};
_0x25ddce.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xce
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xcf
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x25ddce.SPRITE_LIST.length; _0x1bec55++) _0x25ddce.SPRITE[_0x25ddce.SPRITE_LIST[_0x1bec55].NAME] = _0x25ddce.SPRITE_LIST[_0x1bec55], _0x25ddce.SPRITE[_0x25ddce.SPRITE_LIST[_0x1bec55].ID] = _0x25ddce.SPRITE_LIST[_0x1bec55];
_0x25ddce.STATE = {};
_0x25ddce.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x25ddce.SPRITE.IDLE0, _0x25ddce.SPRITE.IDLE1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x25ddce.STATE_LIST.length; _0x1bec55++) _0x25ddce.STATE[_0x25ddce.STATE_LIST[_0x1bec55].NAME] = _0x25ddce.STATE_LIST[_0x1bec55], _0x25ddce.STATE[_0x25ddce.STATE_LIST[_0x1bec55].ID] = _0x25ddce.STATE_LIST[_0x1bec55];
_0x25ddce.prototype.update = function(_0x31e5a7) {
    switch (_0x31e5a7) {
        case 0x1:
            this.bonk();
    }
};
_0x25ddce.prototype.step = function() {
    this.state === _0x25ddce.STATE.BONK ? this.bonkTimer++ > _0x25ddce.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x25ddce.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x25ddce.BONK_FALL_ACCEL, -_0x25ddce.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x25ddce.ANIMATION_RATE) % this.state.SPRITE.length], 0x0 < this.delayTimer ? this.delayTimer-- : this.jump(), this.physics(), this.sound());
};
_0x25ddce.prototype.physics = function() {
    this.pos.y > this.loc.y || 0x0 < this.fallSpeed ? (this.fallSpeed = (this.fallSpeed - _0x25ddce.FALL_SPEED_ACCEL) * _0x25ddce.DRAG, this.pos.x += this.moveSpeed * _0x25ddce.DRAG, this.pos.y += this.fallSpeed) : this.disable();
};
_0x25ddce.prototype.sound = GameObject.prototype.sound;
_0x25ddce.prototype.jump = function() {
    this.enable();
    this.pos = vec2.copy(this.loc);
    this.fallSpeed = _0x25ddce.IMPULSE.y * this.impulse;
    this.moveSpeed = _0x25ddce.IMPULSE.x * this.impulse;
    this.delayTimer = this.delay;
};
_0x25ddce.prototype.disable = function() {
    this.disabled = true;
};
_0x25ddce.prototype.enable = function() {
    this.disabled = false;
};
_0x25ddce.prototype.damage = function(_0x491a38) {
    this.dead || (this.bonk(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x25ddce.prototype.bonk = function() {
    this.dead || (this.setState(_0x25ddce.STATE.BONK), this.moveSpeed = _0x25ddce.BONK_IMP.x, this.fallSpeed = _0x25ddce.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
_0x25ddce.prototype.playerCollide = function(_0x28a0cf) {
    this.dead || this.garbage || _0x28a0cf.damage(this);
};
_0x25ddce.prototype.playerStomp = function(_0x2eb09b) {
    this.dead || this.garbage || (this.bonk(), _0x2eb09b.bounce(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x25ddce.prototype.playerBump = function(_0x5e66c8) {
    this.playerCollide(_0x5e66c8);
};
_0x25ddce.prototype.kill = function() {};
_0x25ddce.prototype.isTangible = GameObject.prototype.isTangible;
_0x25ddce.prototype.destroy = GameObject.prototype.destroy;
_0x25ddce.prototype.setState = function(_0x2afd8b) {
    _0x2afd8b !== this.state && (this.state = _0x2afd8b, 0x0 < _0x2afd8b.SPRITE.length && (this.sprite = _0x2afd8b.SPRITE[0x0]), this.anim = 0x0);
};
_0x25ddce.prototype.draw = function(_0x45125b) {
    if (!this.disabled) {
        var _0x455f65;
        _0x455f65 = this.state === _0x25ddce.STATE.BONK ? 0x3 : 0x0;
        _0x45125b.push({
            'pos': vec2.subtract(this.pos, _0x25ddce.SOFFSET),
            'reverse': this.dir,
            'index': this.sprite.INDEX,
            'mode': _0x455f65
        });
    }
};
_0x25ddce.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x25ddce);
"use strict";

function HammerBroObject(_0x25bac6, _0xab1441, _0x1bd210, _0xd7b1a8, _0x55466e, _0xde92bf) {
    GameObject.call(this, _0x25bac6, _0xab1441, _0x1bd210, _0xd7b1a8);
    this.oid = _0x55466e;
    this.setState(HammerBroObject.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 1.5);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = false;
    this.disabledTimer = 0x0;
    this.proxHit = false;
    this.hammer = undefined;
    this.loc = 0x1 === parseInt(_0xde92bf) ? [this.pos.x + HammerBroObject.MOVE_AREA, this.pos.x] : [this.pos.x, this.pos.x - HammerBroObject.MOVE_AREA];
    this.groundTimer = this.double = this.attackAnimTimer = this.attackTimer = 0x0;
    this.jumpTimer = -0x1;
    this.reverse = false;
    this.dir = true;
    this.disable();
}
HammerBroObject.ASYNC = false;
HammerBroObject.ID = 0x31;
HammerBroObject.NAME = "HAMMER BRO";
HammerBroObject.ANIMATION_RATE = 0x5;
HammerBroObject.ENABLE_FADE_TIME = 0xf;
HammerBroObject.ENABLE_DIST = 0x21;
HammerBroObject.BONK_TIME = 0x5a;
HammerBroObject.BONK_IMP = vec2.make(0.25, 0.4);
HammerBroObject.BONK_DECEL = 0.925;
HammerBroObject.BONK_FALL_SPEED = 0.5;
HammerBroObject.MOVE_SPEED_MAX = 0.095;
HammerBroObject.JUMP_DELAY = 0x37;
HammerBroObject.MOVE_AREA = 0x4;
HammerBroObject.JUMP_LENGTH = 0x8;
HammerBroObject.JUMP_DECEL = 0.009;
HammerBroObject.ATTACK_DELAY = 0x4b;
HammerBroObject.DOUBLE_RATE = 0x5;
HammerBroObject.ATTACK_ANIM_LENGTH = 0xd;
HammerBroObject.PROJ_OFFSET = vec2.make(0.5, 1.25);
HammerBroObject.FALL_SPEED_MAX = 0.3;
HammerBroObject.FALL_SPEED_ACCEL = 0.085;
HammerBroObject.SPRITE = {};
HammerBroObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': [
        [0x6e],
        [0x5e]
    ]
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': [
        [0x6d],
        [0x5d]
    ]
}, {
    'NAME': "ATTACK",
    'ID': 0x2,
    'INDEX': [
        [0x6c],
        [0x5c]
    ]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < HammerBroObject.SPRITE_LIST.length; _0x1bec55++) HammerBroObject.SPRITE[HammerBroObject.SPRITE_LIST[_0x1bec55].NAME] = HammerBroObject.SPRITE_LIST[_0x1bec55], HammerBroObject.SPRITE[HammerBroObject.SPRITE_LIST[_0x1bec55].ID] = HammerBroObject.SPRITE_LIST[_0x1bec55];
HammerBroObject.STATE = {};
HammerBroObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [HammerBroObject.SPRITE.IDLE0, HammerBroObject.SPRITE.IDLE1]
}, {
    'NAME': "FALL",
    'ID': 0x1,
    'SPRITE': [HammerBroObject.SPRITE.IDLE1]
}, {
    'NAME': "ATTACK",
    'ID': 0x2,
    'SPRITE': [HammerBroObject.SPRITE.ATTACK]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < HammerBroObject.STATE_LIST.length; _0x1bec55++) HammerBroObject.STATE[HammerBroObject.STATE_LIST[_0x1bec55].NAME] = HammerBroObject.STATE_LIST[_0x1bec55], HammerBroObject.STATE[HammerBroObject.STATE_LIST[_0x1bec55].ID] = HammerBroObject.STATE_LIST[_0x1bec55];
HammerBroObject.prototype.update = function(_0x3402c2) {
    switch (_0x3402c2) {
        case 0x1:
            this.bonk();
            break;
        case 0xa0:
            this.enable();
    }
};
HammerBroObject.prototype.step = function() {
    this.disabled ? this.proximity() : (0x0 < this.disabledTimer && this.disabledTimer--, this.state === HammerBroObject.STATE.BONK ? this.bonkTimer++ > HammerBroObject.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= HammerBroObject.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - HammerBroObject.FALL_SPEED_ACCEL, -HammerBroObject.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / HammerBroObject.ANIMATION_RATE) % this.state.SPRITE.length], this.face(), this.control(), this.physics(), this.sound(), 0x0 < this.attackAnimTimer ? (this.setState(HammerBroObject.STATE.ATTACK), this.attach(), this.attackAnimTimer--) : this.attackTimer++ > HammerBroObject.ATTACK_DELAY ? this.attack() : this.hammer = undefined, 0x0 > this.pos.y && this.destroy()));
};
HammerBroObject.prototype.control = function() {
    this.grounded ? (HammerBroObject.JUMP_DELAY < this.groundTimer++ && (this.groundTimer = this.jumpTimer = 0x0), this.pos.x > this.loc[0x0] ? this.reverse = true : this.pos.x < this.loc[0x1] && (this.reverse = false)) : this.jumpTimer > HammerBroObject.JUMP_LENGTH && (this.jumpTimer = -0x1);
    this.grounded ? this.setState(HammerBroObject.STATE.IDLE) : this.setState(HammerBroObject.STATE.FALL);
    this.moveSpeed = 0.75 * this.moveSpeed + 0.25 * (this.reverse ? -HammerBroObject.MOVE_SPEED_MAX : HammerBroObject.MOVE_SPEED_MAX);
};
HammerBroObject.prototype.physics = function() {
    -0x1 !== this.jumpTimer ? (this.fallSpeed = HammerBroObject.FALL_SPEED_MAX - this.jumpTimer * HammerBroObject.JUMP_DECEL, this.jumpTimer++, this.grounded = false) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - HammerBroObject.FALL_SPEED_ACCEL, -HammerBroObject.FALL_SPEED_MAX));
    var _0x12b803 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x176893 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x27250d = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0xfe9df8 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x27250d = this.game.world.getZone(this.level, this.zone).getTiles(_0x27250d, _0xfe9df8),
        _0xfe9df8 = vec2.make(0x1, 0x1);
    this.grounded = false;
    for (var _0xac132f = 0x0; _0xac132f < _0x27250d.length; _0xac132f++) {
        var _0x44201c = _0x27250d[_0xac132f];
        _0x44201c.definition.COLLIDE && squar.intersection(_0x44201c.pos, _0xfe9df8, _0x12b803, this.dim) && (this.pos.x + this.dim.x <= _0x44201c.pos.x && _0x12b803.x + this.dim.x > _0x44201c.pos.x ? (_0x12b803.x = _0x44201c.pos.x - this.dim.x, _0x176893.x = _0x12b803.x, this.moveSpeed = 0x0) : this.pos.x >= _0x44201c.pos.x + _0xfe9df8.x && _0x12b803.x < _0x44201c.pos.x + _0xfe9df8.x && (_0x12b803.x = _0x44201c.pos.x + _0xfe9df8.x, _0x176893.x = _0x12b803.x, this.moveSpeed = 0x0));
    }
    for (_0xac132f = 0x0; _0xac132f < _0x27250d.length; _0xac132f++) _0x44201c = _0x27250d[_0xac132f], _0x44201c.definition.COLLIDE && squar.intersection(_0x44201c.pos, _0xfe9df8, _0x176893, this.dim) && (this.pos.y >= _0x44201c.pos.y + _0xfe9df8.y && _0x176893.y < _0x44201c.pos.y + _0xfe9df8.y ? (_0x176893.y = _0x44201c.pos.y + _0xfe9df8.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y + this.dim.y <= _0x44201c.pos.y && _0x176893.y + this.dim.y > _0x44201c.pos.y && (_0x176893.y = _0x44201c.pos.y - this.dim.y, this.jumpTimer = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x12b803.x, _0x176893.y);
};
HammerBroObject.prototype.proximity = function() {
    var _0x2e2202 = this.game.getPlayer();
    _0x2e2202 && !_0x2e2202.dead && _0x2e2202.level === this.level && _0x2e2202.zone === this.zone && !this.proxHit && vec2.distance(_0x2e2202.pos, this.pos) < HammerBroObject.ENABLE_DIST && (this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = true);
};
HammerBroObject.prototype.face = function() {
    for (var _0xe75dbb, _0x338971 = 0x0; _0x338971 < this.game.objects.length; _0x338971++) {
        var _0x345c5d = this.game.objects[_0x338971];
        _0x345c5d instanceof PlayerObject && _0x345c5d.level === this.level && _0x345c5d.zone === this.zone && _0x345c5d.isTangible() && (!_0xe75dbb || Math.abs(_0xe75dbb) > vec2.distance(_0x345c5d.pos, this.pos)) && (_0xe75dbb = _0x345c5d.pos.x - this.pos.x);
    }
    this.dir = _0xe75dbb ? 0x0 > _0xe75dbb : true;
};
HammerBroObject.prototype.sound = GameObject.prototype.sound;
HammerBroObject.prototype.enable = function() {
    this.disabled && (this.disabled = false, this.disabledTimer = HammerBroObject.ENABLE_FADE_TIME);
};
HammerBroObject.prototype.disable = function() {
    this.disabled = true;
};
HammerBroObject.prototype.attack = function() {
    this.attackAnimTimer = HammerBroObject.ATTACK_ANIM_LENGTH;
    this.attackTimer = 0x0;
    this.hammer = this.game.createObject(HammerObject.ID, this.level, this.zone, vec2.add(this.pos, HammerBroObject.PROJ_OFFSET), [this]);
    ++this.double > HammerBroObject.DOUBLE_RATE && (this.double = 0x0, this.attackTimer = HammerBroObject.ATTACK_DELAY);
};
HammerBroObject.prototype.attach = function() {
    this.hammer && (this.hammer.pos = vec2.add(this.pos, HammerBroObject.PROJ_OFFSET), this.hammer.dir = !this.dir);
};
HammerBroObject.prototype.playerCollide = function(_0x4b48ff) {
    this.dead || this.garbage || _0x4b48ff.damage(this);
};
HammerBroObject.prototype.playerStomp = function(_0x382396) {
    this.dead || this.garbage || (this.bonk(), _0x382396.bounce(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
HammerBroObject.prototype.playerBump = HammerBroObject.prototype.playerCollide;
HammerBroObject.prototype.damage = function(_0x23a76d) {
    this.dead || (this.bonk(), NET020.encode(this.level, this.zone, this.oid, 0x1));
};
HammerBroObject.prototype.bonk = function() {
    this.dead || (this.setState(HammerBroObject.STATE.BONK), this.moveSpeed = HammerBroObject.BONK_IMP.x, this.fallSpeed = HammerBroObject.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
HammerBroObject.prototype.kill = function() {};
HammerBroObject.prototype.isTangible = GameObject.prototype.isTangible;
HammerBroObject.prototype.destroy = GameObject.prototype.destroy;
HammerBroObject.prototype.setState = function(_0x44adae) {
    _0x44adae !== this.state && (this.state = _0x44adae, 0x0 < _0x44adae.SPRITE.length && (this.sprite = _0x44adae.SPRITE[0x0]), this.anim = 0x0);
};
HammerBroObject.prototype.draw = function(_0x4d458c) {
    if (!this.disabled) {
        var _0x534d18;
        _0x534d18 = this.state === HammerBroObject.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / HammerBroObject.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x571330 = this.sprite.INDEX, _0x3d1c2f = 0x0; _0x3d1c2f < _0x571330.length; _0x3d1c2f++)
                for (var _0x35bd43 = 0x0; _0x35bd43 < _0x571330[_0x3d1c2f].length; _0x35bd43++) _0x4d458c.push({
                    'pos': vec2.add(this.pos, vec2.make(_0x35bd43, _0x3d1c2f)),
                    'reverse': !this.dir,
                    'index': _0x571330[0x3 !== _0x534d18 ? _0x3d1c2f : _0x571330.length - 0x1 - _0x3d1c2f][_0x35bd43],
                    'mode': _0x534d18
                });
        else _0x4d458c.push({
            'pos': this.pos,
            'reverse': !this.dir,
            'index': this.sprite.INDEX,
            'mode': _0x534d18
        });
    }
};
HammerBroObject.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(HammerBroObject);
"use strict";

function BowserObject(game, level, zone, pos, oid, oprm) {
    GameObject.call(this, game, level, zone, pos);
    switch(parseInt(oprm)) {
        case 1:
            this.fire = false;
            this.hammer = true;
            break;
        case 2:
            this.fire = true;
            this.hammer = true;
            break;
        default:
            this.fire = true;
            this.hammer = false;
            break;
    }
    this.oid = oid;
    this.state = BowserObject.STATE.RUN;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.health = BowserObject.HEALTH;
    this.bonkTimer = 0x0;
    this.dim = vec2.make(0x2, 0x2);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.grounded = false;
    this.loc = [this.pos.x, this.pos.x - BowserObject.MOVE_AREA];
    this.groundTimer = this.attackAnimTimer = this.attackTimer = this.hammerAttackTimer = 0x0;
    this.lastHammerTime = 0;
    this.hammersThrown = 0;
    this.jumpTimer = -0x1;
    this.reverse = false;
    this.dir = true;
}
BowserObject.ASYNC = true;
BowserObject.ID = 0x19;
BowserObject.NAME = "BOWSER";
BowserObject.ANIMATION_RATE = 0x5;
BowserObject.HEALTH = 0x5;
BowserObject.BONK_TIME = 0x5a;
BowserObject.BONK_IMP = vec2.make(0.25, 0.4);
BowserObject.BONK_DECEL = 0.925;
BowserObject.BONK_FALL_SPEED = 0.5;
BowserObject.MOVE_SPEED_MAX = 0.095;
BowserObject.JUMP_DELAY = 0x2d;
BowserObject.MOVE_AREA = 0x5;
BowserObject.JUMP_LENGTH = 0x6;
BowserObject.JUMP_DECEL = 0.009;
BowserObject.ATTACK_DELAY = 75;
BowserObject.ATTACK_ANIM_LENGTH = 0xf;
BowserObject.HAMMER_ATTACK_DELAY = 80;
BowserObject.HAMMER_HOLD_TIME = 1;
BowserObject.HAMMER_VOLLEY_SIZE = 8;
BowserObject.HAMMER_VOLLEY_DELAY = 5;
BowserObject.PROJ_OFFSET = vec2.make(-0.25, 0.25);
BowserObject.HAMMER_PROJ_OFFSET = vec2.make(0.5, 2);
BowserObject.FALL_SPEED_MAX = 0.3;
BowserObject.FALL_SPEED_ACCEL = 0.085;
BowserObject.SPRITE = {};
BowserObject.SPRITE_LIST = [{
    'NAME': "RUN0",
    'ID': 0x0,
    'INDEX': [
        [0xc4, 0xc5],
        [0xb4, 0xb5]
    ]
}, {
    'NAME': "RUN1",
    'ID': 0x1,
    'INDEX': [
        [0xc6, 0xc7],
        [0xb6, 0xb7]
    ]
}, {
    'NAME': "ATTACK0",
    'ID': 0x2,
    'INDEX': [
        [0xc0, 0xc1],
        [0xb0, 0xb1]
    ]
}, {
    'NAME': "ATTACK1",
    'ID': 0x3,
    'INDEX': [
        [0xc2, 0xc3],
        [0xb2, 0xb3]
    ]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < BowserObject.SPRITE_LIST.length; _0x1bec55++) BowserObject.SPRITE[BowserObject.SPRITE_LIST[_0x1bec55].NAME] = BowserObject.SPRITE_LIST[_0x1bec55], BowserObject.SPRITE[BowserObject.SPRITE_LIST[_0x1bec55].ID] = BowserObject.SPRITE_LIST[_0x1bec55];
BowserObject.STATE = {};
BowserObject.STATE_LIST = [{
    'NAME': "RUN",
    'ID': 0x0,
    'SPRITE': [BowserObject.SPRITE.RUN0, BowserObject.SPRITE.RUN1]
}, {
    'NAME': "ATTACK",
    'ID': 0x1,
    'SPRITE': [BowserObject.SPRITE.ATTACK0, BowserObject.SPRITE.ATTACK1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < BowserObject.STATE_LIST.length; _0x1bec55++) BowserObject.STATE[BowserObject.STATE_LIST[_0x1bec55].NAME] = BowserObject.STATE_LIST[_0x1bec55], BowserObject.STATE[BowserObject.STATE_LIST[_0x1bec55].ID] = BowserObject.STATE_LIST[_0x1bec55];
BowserObject.prototype.update = function(_0x45393d) {};
BowserObject.prototype.step = function() {
    if (this.state === BowserObject.STATE.BONK) {
        if (this.bonkTimer++ > BowserObject.BONK_TIME || 0x0 > this.pos.y + this.dim.y) {
            this.destroy();
        } else {
            this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed));
            this.moveSpeed *= BowserObject.BONK_DECEL;
            this.fallSpeed = Math.max(this.fallSpeed - BowserObject.FALL_SPEED_ACCEL, -BowserObject.BONK_FALL_SPEED);
        }
    } else {
        this.anim++;
        this.sprite = this.state.SPRITE[parseInt(this.anim / BowserObject.ANIMATION_RATE) % this.state.SPRITE.length];
        this.control();
        this.physics();
        this.sound();
        if (this.fire && this.attackTimer++ > BowserObject.ATTACK_DELAY) this.attack();
        if (this.hammer && this.hammerAttackTimer++ > BowserObject.HAMMER_ATTACK_DELAY) this.hammerAttack();
        if (0x0 < this.attackAnimTimer) {
            this.setState(BowserObject.STATE.ATTACK);
            this.attackAnimTimer--;
        } else {
            this.setState(BowserObject.STATE.RUN);
            if (0x0 > this.pos.y) this.destroy();
        }
    }
};
BowserObject.prototype.control = function() {
    this.grounded ? (BowserObject.JUMP_DELAY < this.groundTimer++ && (this.groundTimer = this.jumpTimer = 0x0), this.pos.x > this.loc[0x0] ? this.reverse = true : this.pos.x < this.loc[0x1] && (this.reverse = false)) : this.jumpTimer > BowserObject.JUMP_LENGTH && (this.jumpTimer = -0x1);
    this.moveSpeed = 0.75 * this.moveSpeed + 0.25 * (this.reverse ? -BowserObject.MOVE_SPEED_MAX : BowserObject.MOVE_SPEED_MAX);
};
BowserObject.prototype.physics = function() {
    -0x1 !== this.jumpTimer ? (this.fallSpeed = BowserObject.FALL_SPEED_MAX - this.jumpTimer * BowserObject.JUMP_DECEL, this.jumpTimer++, this.grounded = false) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - BowserObject.FALL_SPEED_ACCEL, -BowserObject.FALL_SPEED_MAX));
    var _0x85d755 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x471885 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x3ec375 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x486f5e = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x3ec375 = this.game.world.getZone(this.level, this.zone).getTiles(_0x3ec375, _0x486f5e),
        _0x486f5e = vec2.make(0x1, 0x1);
    this.grounded = false;
    for (var _0x2d6663 = 0x0; _0x2d6663 < _0x3ec375.length; _0x2d6663++) {
        var _0x50845a = _0x3ec375[_0x2d6663];
        _0x50845a.definition.COLLIDE && squar.intersection(_0x50845a.pos, _0x486f5e, _0x85d755, this.dim) && (this.pos.x + this.dim.x <= _0x50845a.pos.x && _0x85d755.x + this.dim.x > _0x50845a.pos.x ? (_0x85d755.x = _0x50845a.pos.x - this.dim.x, _0x471885.x = _0x85d755.x, this.moveSpeed = 0x0) : this.pos.x >= _0x50845a.pos.x + _0x486f5e.x && _0x85d755.x < _0x50845a.pos.x + _0x486f5e.x && (_0x85d755.x = _0x50845a.pos.x + _0x486f5e.x, _0x471885.x = _0x85d755.x, this.moveSpeed = 0x0));
    }
    for (_0x2d6663 = 0x0; _0x2d6663 < _0x3ec375.length; _0x2d6663++) _0x50845a = _0x3ec375[_0x2d6663], _0x50845a.definition.COLLIDE && squar.intersection(_0x50845a.pos, _0x486f5e, _0x471885, this.dim) && (this.pos.y >= _0x50845a.pos.y + _0x486f5e.y && _0x471885.y < _0x50845a.pos.y + _0x486f5e.y ? (_0x471885.y = _0x50845a.pos.y + _0x486f5e.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y + this.dim.y <= _0x50845a.pos.y && _0x471885.y + this.dim.y > _0x50845a.pos.y && (_0x471885.y = _0x50845a.pos.y - this.dim.y, this.jumpTimer = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x85d755.x, _0x471885.y);
};
BowserObject.prototype.sound = GameObject.prototype.sound;
BowserObject.prototype.attack = function() {
    this.attackAnimTimer = BowserObject.ATTACK_ANIM_LENGTH;
    this.attackTimer = 0x0;
    this.game.createObject(FireBreathObject.ID, this.level, this.zone, vec2.add(this.pos, BowserObject.PROJ_OFFSET), []);
    this.play("breath.wav", 1.5, 0.04);
};
BowserObject.prototype.hammerAttack = function() {
    var hammerTime = this.hammerAttackTimer - this.lastHammerTime;
    if (this.hammersThrown == 0 || hammerTime >= BowserObject.HAMMER_VOLLEY_DELAY) {
        this.lastHammerTime = this.hammersThrown == 0 ? BowserObject.HAMMER_ATTACK_DELAY : this.lastHammerTime + BowserObject.HAMMER_VOLLEY_DELAY;
        this.game.createObject(HammerObject.ID, this.level, this.zone, vec2.add(this.pos, BowserObject.HAMMER_PROJ_OFFSET), [this, BowserObject.HAMMER_HOLD_TIME]);
        this.hammersThrown += 1;
        if (this.hammersThrown >= BowserObject.HAMMER_VOLLEY_SIZE) {
            this.hammerAttackTimer = 0x0;
            this.lastHammerTime = 0;
            this.hammersThrown = 0;
        }
    }
};
BowserObject.prototype.playerCollide = function(_0x30ea43) {
    this.dead || this.garbage || _0x30ea43.damage(this);
};
BowserObject.prototype.playerStomp = BowserObject.prototype.playerCollide;
BowserObject.prototype.playerBump = BowserObject.prototype.playerCollide;
BowserObject.prototype.damage = function(_0x25178b) {
    this.dead || 0x0 >= --this.health && this.bonk();
};
BowserObject.prototype.bonk = function() {
    this.dead || (this.setState(BowserObject.STATE.BONK), this.moveSpeed = BowserObject.BONK_IMP.x, this.fallSpeed = BowserObject.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
BowserObject.prototype.kill = function() {};
BowserObject.prototype.isTangible = GameObject.prototype.isTangible;
BowserObject.prototype.destroy = GameObject.prototype.destroy;
BowserObject.prototype.setState = function(_0x19037e) {
    _0x19037e !== this.state && (this.state = _0x19037e, 0x0 < _0x19037e.SPRITE.length && (this.sprite = _0x19037e.SPRITE[0x0]), this.anim = 0x0);
};
BowserObject.prototype.draw = function(_0xdf4ab3) {
    var _0x21f360;
    _0x21f360 = this.state === BowserObject.STATE.BONK ? 0x3 : 0x0;
    if (this.sprite.INDEX instanceof Array)
        for (var _0x132286 = this.sprite.INDEX, _0x1479b4 = 0x0; _0x1479b4 < _0x132286.length; _0x1479b4++)
            for (var _0x58ee5e = 0x0; _0x58ee5e < _0x132286[_0x1479b4].length; _0x58ee5e++) _0xdf4ab3.push({
                'pos': vec2.add(this.pos, vec2.make(_0x58ee5e, _0x1479b4)),
                'reverse': !this.dir,
                'index': _0x132286[_0x21f360 ? _0x132286.length - 0x1 - _0x1479b4 : _0x1479b4][_0x58ee5e],
                'mode': _0x21f360
            });
    else _0xdf4ab3.push({
        'pos': this.pos,
        'reverse': !this.dir,
        'index': this.sprite.INDEX,
        'mode': _0x21f360
    });
};
BowserObject.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(BowserObject);
"use strict";

function _0x5bbb5e(_0x38f9a7, _0x27f352, _0x55bfab, _0x551362, _0x61ea43, _0x1b085a, _0x1d905f, _0x54af71, _0x46cdb7, _0x151f14, _0x271b52, _0x57f60d) {
    GameObject.call(this, _0x38f9a7, _0x27f352, _0x55bfab, _0x551362);
    this.oid = _0x61ea43;
    this.setState(_0x5bbb5e.STATE.IDLE);
    this.loc = 0x0 === parseInt(_0x57f60d) ? [_0x551362, vec2.add(_0x551362, vec2.make(parseInt(_0x1d905f), parseInt(_0x54af71)))] : [vec2.add(_0x551362, vec2.make(parseInt(_0x1d905f), parseInt(_0x54af71))), _0x551362];
    this.anim = 0x0;
    this.dim = vec2.make(parseInt(_0x1b085a), 0.5);
    this.speed = parseFloat(_0x46cdb7);
    this.riders = [];
    this.dir = false;
    this.loop = 0x0 === parseInt(_0x151f14) ? false : true;
    this.delay = parseInt(_0x271b52);
}
_0x5bbb5e.ASYNC = true;
_0x5bbb5e.ID = 0x91;
_0x5bbb5e.NAME = "PLATFORM";
_0x5bbb5e.ANIMATION_RATE = 0x3;
_0x5bbb5e.SPRITE = {};
_0x5bbb5e.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xa0
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5bbb5e.SPRITE_LIST.length; _0x1bec55++) _0x5bbb5e.SPRITE[_0x5bbb5e.SPRITE_LIST[_0x1bec55].NAME] = _0x5bbb5e.SPRITE_LIST[_0x1bec55], _0x5bbb5e.SPRITE[_0x5bbb5e.SPRITE_LIST[_0x1bec55].ID] = _0x5bbb5e.SPRITE_LIST[_0x1bec55];
_0x5bbb5e.STATE = {};
_0x5bbb5e.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x5bbb5e.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x5bbb5e.STATE_LIST.length; _0x1bec55++) _0x5bbb5e.STATE[_0x5bbb5e.STATE_LIST[_0x1bec55].NAME] = _0x5bbb5e.STATE_LIST[_0x1bec55], _0x5bbb5e.STATE[_0x5bbb5e.STATE_LIST[_0x1bec55].ID] = _0x5bbb5e.STATE_LIST[_0x1bec55];
_0x5bbb5e.prototype.update = function(_0x1936ee) {};
_0x5bbb5e.prototype.step = function() {
    0x0 < this.delay-- || (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x5bbb5e.ANIMATION_RATE) % this.state.SPRITE.length], this.physics());
};
_0x5bbb5e.prototype.physics = function() {
    var _0x4f56e4 = vec2.normalize(vec2.subtract(this.loc[this.dir ? 0x0 : 0x1], this.pos)),
        _0xa92877 = vec2.distance(this.pos, this.loc[this.dir ? 0x0 : 0x1]);
    if (_0xa92877 < this.speed)
        if (this.loop) this.dir = !this.dir;
        else {
            this.pos = this.loc[0x0];
            this.riders = [];
            return;
        } _0x4f56e4 = vec2.scale(_0x4f56e4, Math.min(this.speed, _0xa92877));
    this.pos = vec2.add(this.pos, _0x4f56e4);
    for (_0xa92877 = 0x0; _0xa92877 < this.riders.length; _0xa92877++) {
        var _0x24c795 = this.riders[0x0];
        _0x24c795.pos = vec2.add(_0x24c795.pos, _0x4f56e4);
    }
    this.riders = [];
};
_0x5bbb5e.prototype.riding = function(_0x3f225a) {
    this.riders.push(_0x3f225a);
};
_0x5bbb5e.prototype.kill = function() {};
_0x5bbb5e.prototype.destroy = GameObject.prototype.destroy;
_0x5bbb5e.prototype.isTangible = GameObject.prototype.isTangible;
_0x5bbb5e.prototype.setState = function(_0x1d8cb4) {
    _0x1d8cb4 !== this.state && (this.state = _0x1d8cb4, this.sprite = _0x1d8cb4.SPRITE[0x0], this.anim = 0x0);
};
_0x5bbb5e.prototype.draw = function(_0x3a5658) {
    if (!(0x0 < this.delay))
        for (var _0x3f7f2b = 0x0; _0x3f7f2b < this.dim.x; _0x3f7f2b++) _0x3a5658.push({
            'pos': vec2.add(this.pos, vec2.make(_0x3f7f2b, 0x0)),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': 0x0
        });
};
GameObject.REGISTER_OBJECT(_0x5bbb5e);
"use strict";

function _0x4b6e2c(_0x1d4931, _0xe3dc6, _0x10f6a5, _0x3813e7, _0x1e87d2, _0x1f931e, _0x31e281, _0x3347d6, _0x53c646) {
    GameObject.call(this, _0x1d4931, _0xe3dc6, _0x10f6a5, _0x3813e7);
    this.oid = _0x1e87d2;
    this.setState(_0x4b6e2c.STATE.IDLE);
    this.loc = [_0x3813e7, vec2.add(_0x3813e7, vec2.make(parseInt(_0x31e281), parseInt(_0x3347d6)))];
    this.anim = 0x0;
    this.dim = vec2.make(parseInt(_0x1f931e), 0.5);
    this.speed = parseFloat(_0x53c646);
    this.riders = [];
    this.dir = this.go = false;
}
_0x4b6e2c.ASYNC = false;
_0x4b6e2c.ID = 0x92;
_0x4b6e2c.NAME = "BUS PLATFORM";
_0x4b6e2c.ANIMATION_RATE = 0x3;
_0x4b6e2c.SPRITE = {};
_0x4b6e2c.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xa0
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4b6e2c.SPRITE_LIST.length; _0x1bec55++) _0x4b6e2c.SPRITE[_0x4b6e2c.SPRITE_LIST[_0x1bec55].NAME] = _0x4b6e2c.SPRITE_LIST[_0x1bec55], _0x4b6e2c.SPRITE[_0x4b6e2c.SPRITE_LIST[_0x1bec55].ID] = _0x4b6e2c.SPRITE_LIST[_0x1bec55];
_0x4b6e2c.STATE = {};
_0x4b6e2c.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4b6e2c.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4b6e2c.STATE_LIST.length; _0x1bec55++) _0x4b6e2c.STATE[_0x4b6e2c.STATE_LIST[_0x1bec55].NAME] = _0x4b6e2c.STATE_LIST[_0x1bec55], _0x4b6e2c.STATE[_0x4b6e2c.STATE_LIST[_0x1bec55].ID] = _0x4b6e2c.STATE_LIST[_0x1bec55];
_0x4b6e2c.prototype.update = function(_0x3bfe45) {
    switch (_0x3bfe45) {
        case 0xa1:
            this.start();
    }
};
_0x4b6e2c.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4b6e2c.ANIMATION_RATE) % this.state.SPRITE.length];
    this.physics();
};
_0x4b6e2c.prototype.physics = function() {
    if (this.go) {
        var _0x48a68f = vec2.normalize(vec2.subtract(this.loc[this.dir ? 0x0 : 0x1], this.pos)),
            _0x2b99c6 = vec2.distance(this.pos, this.loc[this.dir ? 0x0 : 0x1]),
            _0x48a68f = vec2.scale(_0x48a68f, Math.min(this.speed, _0x2b99c6));
        this.pos = vec2.add(this.pos, _0x48a68f);
        for (_0x2b99c6 = 0x0; _0x2b99c6 < this.riders.length; _0x2b99c6++) {
            var _0x565fcd = this.riders[0x0];
            _0x565fcd.pos = vec2.add(_0x565fcd.pos, _0x48a68f);
        }
    }
    this.riders = [];
};
_0x4b6e2c.prototype.start = function() {
    this.go = true;
};
_0x4b6e2c.prototype.riding = function(_0x4a3b82) {
    _0x4a3b82.pid !== this.game.pid || this.go || this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0xa1));
    this.riders.push(_0x4a3b82);
};
_0x4b6e2c.prototype.kill = function() {};
_0x4b6e2c.prototype.isTangible = GameObject.prototype.isTangible;
_0x4b6e2c.prototype.destroy = GameObject.prototype.destroy;
_0x4b6e2c.prototype.setState = function(_0x2cdc10) {
    _0x2cdc10 !== this.state && (this.state = _0x2cdc10, this.sprite = _0x2cdc10.SPRITE[0x0], this.anim = 0x0);
};
_0x4b6e2c.prototype.draw = function(_0x53d78c) {
    if (!(0x0 < this.delay))
        for (var _0x3ce6ce = 0x0; _0x3ce6ce < this.dim.x; _0x3ce6ce++) _0x53d78c.push({
            'pos': vec2.add(this.pos, vec2.make(_0x3ce6ce, 0x0)),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': 0x0
        });
};
GameObject.REGISTER_OBJECT(_0x4b6e2c);
"use strict";

function SpringObject(_0x9d9b10, _0x5d6af4, _0x14b8a1, _0x25d330, _0x2899a3) {
    GameObject.call(this, _0x9d9b10, _0x5d6af4, _0x14b8a1, _0x25d330);
    this.oid = _0x2899a3;
    this.setState(SpringObject.STATE.EXTEND);
    this.anim = 0x0;
    this.pos = vec2.add(this.pos, SpringObject.SOFFSET);
    this.dim = vec2.make(0.8, 0x2);
}
SpringObject.ASYNC = true;
SpringObject.ID = 0x95;
SpringObject.NAME = "SPRING";
SpringObject.ANIMATION_RATE = 0x3;
SpringObject.SOFFSET = vec2.make(0.1, 0x0);
SpringObject.THRESHOLD = [0x1, 0.5];
SpringObject.POWER = 0.45;
SpringObject.SPRITE = {};
SpringObject.SPRITE_LIST = [{
    'NAME': "STAGE0",
    'ID': 0x0,
    'INDEX': [
        [0xa1],
        [0x91]
    ]
}, {
    'NAME': "STAGE1",
    'ID': 0x1,
    'INDEX': 0xa2
}, {
    'NAME': "STAGE2",
    'ID': 0x2,
    'INDEX': 0xa3
}];
for (var i = 0x0; i < SpringObject.SPRITE_LIST.length; i++) {
    SpringObject.SPRITE[SpringObject.SPRITE_LIST[i].NAME] = SpringObject.SPRITE_LIST[i];
    SpringObject.SPRITE[SpringObject.SPRITE_LIST[i].ID] = SpringObject.SPRITE_LIST[i];
}
SpringObject.STATE = {};
SpringObject.STATE_LIST = [{
    'NAME': "EXTEND",
    'ID': 0x0,
    'SPRITE': [SpringObject.SPRITE.STAGE0]
}, {
    'NAME': "HALF",
    'ID': 0x1,
    'SPRITE': [SpringObject.SPRITE.STAGE1]
}, {
    'NAME': "COMPRESS",
    'ID': 0x2,
    'SPRITE': [SpringObject.SPRITE.STAGE2]
}];
for (var i = 0x0; i < SpringObject.STATE_LIST.length; i++) {
    SpringObject.STATE[SpringObject.STATE_LIST[i].NAME] = SpringObject.STATE_LIST[i];
    SpringObject.STATE[SpringObject.STATE_LIST[i].ID] = SpringObject.STATE_LIST[i];
}
SpringObject.prototype.update = function(_0x348375) {};
SpringObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / SpringObject.ANIMATION_RATE) % this.state.SPRITE.length];
    this.interaction();
};
SpringObject.prototype.interaction = function() {
    var player = this.game.getPlayer();
    if (player && player.level === this.level && player.zone === this.zone && player.isTangible() && squar.intersection(this.pos, this.dim, player.pos, player.dim)) {
        var compression = Math.pow(0x1 - 0.5 * Math.min(Math.max(0x0, player.pos.y - this.pos.y), 0x2), 0x2);
        if (player.fallSpeed >= 0.75 * PlayerObject.FALL_SPEED_MAX && player.btnA) {
            player.jumping = 0x0;
            if (!player.isSpring) {
                this.game.play("spring.wav",1,0);
                player.isSpring = true;
            }
        }
        if (!player.tfmTimer)
            player.fallSpeed += Math.min(0x2 * PlayerObject.FALL_SPEED_MAX, compression * SpringObject.POWER);
        player.grounded = false;
    }
    var compression = 0x2;
    for (i = 0x0; i < this.game.objects.length; i++) {
        var obj = this.game.objects[i];
        if (obj instanceof PlayerObject && obj.level === this.level && obj.zone === this.zone && obj.isTangible() && squar.intersection(this.pos, this.dim, obj.pos, obj.dim)) {
            var newCompression = Math.min(Math.max(0x0, obj.pos.y - this.pos.y), 0x2);
            if (newCompression < compression) compression = newCompression;
        }
    }
    if (compression < SpringObject.THRESHOLD[0x1])
        this.setState(SpringObject.STATE.COMPRESS)
    else if (compression < SpringObject.THRESHOLD[0x0])
        this.setState(SpringObject.STATE.HALF)
    else this.setState(SpringObject.STATE.EXTEND);
};
SpringObject.prototype.kill = function() {};
SpringObject.prototype.destroy = GameObject.prototype.destroy;
SpringObject.prototype.isTangible = GameObject.prototype.isTangible;
SpringObject.prototype.setState = function(_0x18377f) {
    _0x18377f !== this.state && (this.state = _0x18377f, this.sprite = _0x18377f.SPRITE[0x0], this.anim = 0x0);
};
SpringObject.prototype.draw = function(_0x132bc0) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x3191ef = this.sprite.INDEX, _0x4714a0 = 0x0; _0x4714a0 < _0x3191ef.length; _0x4714a0++)
            for (var _0x507d31 = 0x0; _0x507d31 < _0x3191ef[_0x4714a0].length; _0x507d31++) _0x132bc0.push({
                'pos': vec2.subtract(vec2.add(this.pos, vec2.make(_0x507d31, _0x4714a0)), SpringObject.SOFFSET),
                'reverse': false,
                'index': _0x3191ef[_0x4714a0][_0x507d31]
            });
    else _0x132bc0.push({
        'pos': vec2.subtract(this.pos, SpringObject.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(SpringObject);
"use strict";

function FlagpoleObject(_0x5642ff, _0x3d3a00, _0x34f17d, _0x57e7a3, _0x93cf94) {
    GameObject.call(this, _0x5642ff, _0x3d3a00, _0x34f17d, _0x57e7a3);
    this.oid = _0x93cf94;
    this.setState(FlagpoleObject.STATE.IDLE);
    this.anim = 0x0;
}
FlagpoleObject.ASYNC = true;
FlagpoleObject.ID = 0xb1;
FlagpoleObject.NAME = "FLAG";
FlagpoleObject.ANIMATION_RATE = 0x3;
FlagpoleObject.OFFSET = vec2.make(-0.5, 0x0);
FlagpoleObject.SPRITE = {};
FlagpoleObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0x90
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlagpoleObject.SPRITE_LIST.length; _0x1bec55++) FlagpoleObject.SPRITE[FlagpoleObject.SPRITE_LIST[_0x1bec55].NAME] = FlagpoleObject.SPRITE_LIST[_0x1bec55], FlagpoleObject.SPRITE[FlagpoleObject.SPRITE_LIST[_0x1bec55].ID] = FlagpoleObject.SPRITE_LIST[_0x1bec55];
FlagpoleObject.STATE = {};
FlagpoleObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [FlagpoleObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlagpoleObject.STATE_LIST.length; _0x1bec55++) FlagpoleObject.STATE[FlagpoleObject.STATE_LIST[_0x1bec55].NAME] = FlagpoleObject.STATE_LIST[_0x1bec55], FlagpoleObject.STATE[FlagpoleObject.STATE_LIST[_0x1bec55].ID] = FlagpoleObject.STATE_LIST[_0x1bec55];
FlagpoleObject.prototype.update = function(_0x261833) {};
FlagpoleObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / FlagpoleObject.ANIMATION_RATE) % this.state.SPRITE.length];
};
FlagpoleObject.prototype.kill = function() {};
FlagpoleObject.prototype.isTangible = GameObject.prototype.isTangible;
FlagpoleObject.prototype.destroy = GameObject.prototype.destroy;
FlagpoleObject.prototype.setState = function(_0x2d7e00) {
    _0x2d7e00 !== this.state && (this.state = _0x2d7e00, this.sprite = _0x2d7e00.SPRITE[0x0], this.anim = 0x0);
};
FlagpoleObject.prototype.draw = function(_0x33d2c9) {
    _0x33d2c9.push({
        'pos': vec2.add(this.pos, FlagpoleObject.OFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(FlagpoleObject);
"use strict";

function _0x35ddf4(_0x5067e9, _0x471c11, _0x4c3d45, _0x5b45aa, _0x5f9e08, _0x62b44d, _0x119674) {
    GameObject.call(this, _0x5067e9, _0x471c11, _0x4c3d45, _0x5b45aa);
    this.oid = _0x5f9e08;
    this.state = _0x35ddf4.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x1 === parseInt(_0x62b44d) ? 0x2 * _0x35ddf4.SPIN_RATE : 0x0;
    this.dim = vec2.make(0.5, 0.5);
    this.size = isNaN(parseInt(_0x119674)) ? _0x35ddf4.PARTS : parseInt(_0x119674);
}
_0x35ddf4.ASYNC = true;
_0x35ddf4.ID = 0x21;
_0x35ddf4.NAME = "FIRE TRAP";
_0x35ddf4.ANIMATION_RATE = 0x2;
_0x35ddf4.OFFSET = vec2.make(0.25, 0.25);
_0x35ddf4.PARTS = 0x6;
_0x35ddf4.SPACING = 0.5;
_0x35ddf4.SPIN_RATE = 0x17;
_0x35ddf4.SPRITE = {};
_0x35ddf4.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xd0
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xd1
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xd2
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xd3
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x35ddf4.SPRITE_LIST.length; _0x1bec55++) _0x35ddf4.SPRITE[_0x35ddf4.SPRITE_LIST[_0x1bec55].NAME] = _0x35ddf4.SPRITE_LIST[_0x1bec55], _0x35ddf4.SPRITE[_0x35ddf4.SPRITE_LIST[_0x1bec55].ID] = _0x35ddf4.SPRITE_LIST[_0x1bec55];
_0x35ddf4.STATE = {};
_0x35ddf4.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x35ddf4.SPRITE.IDLE0, _0x35ddf4.SPRITE.IDLE1, _0x35ddf4.SPRITE.IDLE2, _0x35ddf4.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x35ddf4.STATE_LIST.length; _0x1bec55++) _0x35ddf4.STATE[_0x35ddf4.STATE_LIST[_0x1bec55].NAME] = _0x35ddf4.STATE_LIST[_0x1bec55], _0x35ddf4.STATE[_0x35ddf4.STATE_LIST[_0x1bec55].ID] = _0x35ddf4.STATE_LIST[_0x1bec55];
_0x35ddf4.prototype.update = function() {};
_0x35ddf4.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x35ddf4.ANIMATION_RATE) % this.state.SPRITE.length];
    this.control();
    this.interaction();
};
_0x35ddf4.prototype.control = function() {
    this.rot += _0x35ddf4.SPIN_RATE;
};
_0x35ddf4.prototype.interaction = function() {
    var _0x7617b0 = vec2.normalize(vec2.make(Math.sin(-this.anim / _0x35ddf4.SPIN_RATE), Math.cos(-this.anim / _0x35ddf4.SPIN_RATE))),
        _0x258ff9 = this.game.getPlayer();
    if (_0x258ff9 && _0x258ff9.isTangible() && _0x258ff9.level === this.level && _0x258ff9.zone === this.zone)
        for (var _0x373060 = 0x0; _0x373060 < this.size; _0x373060++) {
            var _0x2ff265 = vec2.add(vec2.add(this.pos, _0x35ddf4.OFFSET), vec2.scale(_0x7617b0, _0x35ddf4.SPACING * _0x373060));
            squar.intersection(_0x258ff9.pos, _0x258ff9.dim, _0x2ff265, this.dim) && _0x258ff9.damage(this);
        }
};
_0x35ddf4.prototype.playerCollide = function(_0x385f5f) {};
_0x35ddf4.prototype.playerStomp = function(_0x4454be) {};
_0x35ddf4.prototype.playerBump = function(_0x4c1cbf) {};
_0x35ddf4.prototype.kill = function() {};
_0x35ddf4.prototype.isTangible = GameObject.prototype.isTangible;
_0x35ddf4.prototype.destroy = GameObject.prototype.destroy;
_0x35ddf4.prototype.setState = function(_0xaf8a26) {
    _0xaf8a26 !== this.state && (this.state = _0xaf8a26, this.sprite = _0xaf8a26.SPRITE[0x0], this.anim = 0x0);
};
_0x35ddf4.prototype.draw = function(_0x4e240c) {
    for (var _0x40d21a = vec2.normalize(vec2.make(Math.sin(-this.anim / _0x35ddf4.SPIN_RATE), Math.cos(-this.anim / _0x35ddf4.SPIN_RATE))), _0x4e0952 = 0x0; _0x4e0952 < this.size; _0x4e0952++) _0x4e240c.push({
        'pos': vec2.add(this.pos, vec2.scale(_0x40d21a, _0x35ddf4.SPACING * _0x4e0952)),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x35ddf4);
"use strict";

function _0x4a8773(_0x23df7f, _0x31f095, _0x2a1fe9, _0x53aba8, _0x3d90ca, _0x213ff9, _0x2d1dbb) {
    GameObject.call(this, _0x23df7f, _0x31f095, _0x2a1fe9, _0x53aba8);
    this.oid = _0x3d90ca;
    this.setState(_0x4a8773.STATE.IDLE);
    this.delay = isNaN(parseInt(_0x213ff9)) ? _0x4a8773.DELAY_DEFAULT : parseInt(_0x213ff9);
    this.impulse = isNaN(parseFloat(_0x2d1dbb)) ? 0x1 : parseFloat(_0x2d1dbb);
    this.anim = 0x0;
    this.delayTimer = this.delay;
    this.pos.x += _0x4a8773.SOFFSET.x;
    this.loc = vec2.copy(this.pos);
    this.fallSpeed = 0x0;
    this.dim = vec2.make(0.7, 0.7);
}
_0x4a8773.ASYNC = true;
_0x4a8773.ID = 0x22;
_0x4a8773.NAME = "FIRE BLAST";
_0x4a8773.ANIMATION_RATE = 0x3;
_0x4a8773.DELAY_DEFAULT = 0x5a;
_0x4a8773.IMPULSE = 1.35;
_0x4a8773.DRAG = 0.95;
_0x4a8773.FALL_SPEED_ACCEL = 0.055;
_0x4a8773.SOFFSET = vec2.make(0.15, 0.15);
_0x4a8773.SPRITE = {};
_0x4a8773.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xdb
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4a8773.SPRITE_LIST.length; _0x1bec55++) _0x4a8773.SPRITE[_0x4a8773.SPRITE_LIST[_0x1bec55].NAME] = _0x4a8773.SPRITE_LIST[_0x1bec55], _0x4a8773.SPRITE[_0x4a8773.SPRITE_LIST[_0x1bec55].ID] = _0x4a8773.SPRITE_LIST[_0x1bec55];
_0x4a8773.STATE = {};
_0x4a8773.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4a8773.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x4a8773.STATE_LIST.length; _0x1bec55++) _0x4a8773.STATE[_0x4a8773.STATE_LIST[_0x1bec55].NAME] = _0x4a8773.STATE_LIST[_0x1bec55], _0x4a8773.STATE[_0x4a8773.STATE_LIST[_0x1bec55].ID] = _0x4a8773.STATE_LIST[_0x1bec55];
_0x4a8773.prototype.update = function(_0x1cfeaa) {};
_0x4a8773.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4a8773.ANIMATION_RATE) % this.state.SPRITE.length];
    0x0 < this.delayTimer ? this.delayTimer-- : this.blast();
    this.physics();
};
_0x4a8773.prototype.physics = function() {
    if (this.pos.y > this.loc.y || 0x0 < this.fallSpeed) this.fallSpeed = (this.fallSpeed - _0x4a8773.FALL_SPEED_ACCEL) * _0x4a8773.DRAG, this.pos.y += this.fallSpeed;
};
_0x4a8773.prototype.blast = function() {
    this.pos = vec2.copy(this.loc);
    this.fallSpeed = _0x4a8773.IMPULSE * this.impulse;
    this.delayTimer = this.delay;
};
_0x4a8773.prototype.playerCollide = function(_0x14d8e8) {
    this.dead || this.garbage || _0x14d8e8.damage(this);
};
_0x4a8773.prototype.playerStomp = function(_0x4caac0) {
    this.playerCollide(_0x4caac0);
};
_0x4a8773.prototype.playerBump = function(_0xad36f2) {
    this.playerCollide(_0xad36f2);
};
_0x4a8773.prototype.kill = function() {};
_0x4a8773.prototype.isTangible = GameObject.prototype.isTangible;
_0x4a8773.prototype.destroy = GameObject.prototype.destroy;
_0x4a8773.prototype.setState = function(_0x3a217a) {
    _0x3a217a !== this.state && (this.state = _0x3a217a, this.sprite = _0x3a217a.SPRITE[0x0], this.anim = 0x0);
};
_0x4a8773.prototype.draw = function(_0x39c7cf) {
    var _0x5ecf74 = 0x0 <= this.fallSpeed ? 0x0 : 0x3;
    _0x39c7cf.push({
        'pos': vec2.subtract(this.pos, _0x4a8773.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': _0x5ecf74
    });
};
GameObject.REGISTER_OBJECT(_0x4a8773);
"use strict";

function _0x458a57(_0x278773, _0xa84297, _0x156cd9, _0x3a6374, _0x2a748a, _0x429175, direction) {
    GameObject.call(this, _0x278773, _0xa84297, _0x156cd9, _0x3a6374);
    this.oid = _0x2a748a;
    this.setState(_0x458a57.STATE.IDLE);
    this.fireTimer = 0x0;
    this.delay = isNaN(parseInt(_0x429175)) ? _0x458a57.FIRE_DELAY_DEFAULT : parseInt(_0x429175);
    this.shootDirection = isNaN(parseInt(direction)) ? 0 : parseInt(direction);
}
_0x458a57.ASYNC = true;
_0x458a57.ID = 0x23;
_0x458a57.NAME = "LAUNCHER";
_0x458a57.ANIMATION_RATE = 0x3;
_0x458a57.FIRE_DELAY_DEFAULT = 0x96;
_0x458a57.SPRITE = {};
_0x458a57.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xff
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x458a57.SPRITE_LIST.length; _0x1bec55++) _0x458a57.SPRITE[_0x458a57.SPRITE_LIST[_0x1bec55].NAME] = _0x458a57.SPRITE_LIST[_0x1bec55], _0x458a57.SPRITE[_0x458a57.SPRITE_LIST[_0x1bec55].ID] = _0x458a57.SPRITE_LIST[_0x1bec55];
_0x458a57.STATE = {};
_0x458a57.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x458a57.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x458a57.STATE_LIST.length; _0x1bec55++) _0x458a57.STATE[_0x458a57.STATE_LIST[_0x1bec55].NAME] = _0x458a57.STATE_LIST[_0x1bec55], _0x458a57.STATE[_0x458a57.STATE_LIST[_0x1bec55].ID] = _0x458a57.STATE_LIST[_0x1bec55];
_0x458a57.prototype.update = function(_0x5a56fe) {};
_0x458a57.prototype.step = function() {
    ++this.fireTimer > this.delay && this.fire();
    this.sound();
};
_0x458a57.prototype.sound = GameObject.prototype.sound;
_0x458a57.prototype.fire = function() {
    this.fireTimer = 0x0;
    this.game.createObject(_0x30df09.ID, this.level, this.zone, vec2.copy(this.pos), [undefined, this.shootDirection]);
    this.play("firework.wav", 0x1, 0.04);
};
_0x458a57.prototype.kill = function() {};
_0x458a57.prototype.isTangible = GameObject.prototype.isTangible;
_0x458a57.prototype.destroy = GameObject.prototype.destroy;
_0x458a57.prototype.setState = function(_0xf1ae11) {
    _0xf1ae11 !== this.state && (this.state = _0xf1ae11, this.sprite = _0xf1ae11.SPRITE[0x0], this.anim = 0x0);
};
_0x458a57.prototype.draw = function(_0x281060) {};
_0x458a57.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x458a57);
"use strict";

function _0x30df09(_0x3877d1, _0x3182b8, _0xa0e13f, _0xe81bce, _0x1d56a5, direction) {
    GameObject.call(this, _0x3877d1, _0x3182b8, _0xa0e13f, _0xe81bce);
    this.oid = _0x1d56a5;
    this.setState(_0x30df09.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0.8, 0.8);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.direction = isNaN(parseInt(direction)) ? 0 : parseInt(direction);
}
_0x30df09.ASYNC = true;
_0x30df09.ID = 0x24;
_0x30df09.NAME = "BULLET";
_0x30df09.ANIMATION_RATE = 0x3;
_0x30df09.SPEED = 0.215;
_0x30df09.BONK_TIME = 0x5a;
_0x30df09.BONK_IMP = vec2.make(0, 0.4);
_0x30df09.BONK_DECEL = 0.925;
_0x30df09.BONK_FALL_SPEED = 0.5;
_0x30df09.BONK_FALL_ACCEL = 0.085;
_0x30df09.DELAY_DEFAULT = 0x113;
_0x30df09.IMPULSE = vec2.make(0.225, 0.335);
_0x30df09.DRAG = 0.996;
_0x30df09.FALL_SPEED_ACCEL = 0.0055;
_0x30df09.SOFFSET = vec2.make(0.15, 0.15);
_0x30df09.SPRITE = {};
_0x30df09.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xcd
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x30df09.SPRITE_LIST.length; _0x1bec55++) _0x30df09.SPRITE[_0x30df09.SPRITE_LIST[_0x1bec55].NAME] = _0x30df09.SPRITE_LIST[_0x1bec55], _0x30df09.SPRITE[_0x30df09.SPRITE_LIST[_0x1bec55].ID] = _0x30df09.SPRITE_LIST[_0x1bec55];
_0x30df09.STATE = {};
_0x30df09.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x30df09.SPRITE.IDLE]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x30df09.STATE_LIST.length; _0x1bec55++) _0x30df09.STATE[_0x30df09.STATE_LIST[_0x1bec55].NAME] = _0x30df09.STATE_LIST[_0x1bec55], _0x30df09.STATE[_0x30df09.STATE_LIST[_0x1bec55].ID] = _0x30df09.STATE_LIST[_0x1bec55];
_0x30df09.prototype.update = function(_0xebda49) {};
_0x30df09.prototype.step = function() {
    this.state === _0x30df09.STATE.BONK ? this.bonkTimer++ > _0x30df09.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x30df09.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x30df09.BONK_FALL_ACCEL, -_0x30df09.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x30df09.ANIMATION_RATE) % this.state.SPRITE.length], this.physics(), this.sound());
};
_0x30df09.prototype.physics = function() {
    0x0 < this.pos.x ? (this.direction === 0 ? (this.pos.x -= _0x30df09.SPEED) : (this.pos.x += _0x30df09.SPEED)) : this.destroy();
};
_0x30df09.prototype.sound = GameObject.prototype.sound;
_0x30df09.prototype.disable = function() {
    this.disabled = true;
};
_0x30df09.prototype.enable = function() {
    this.disabled = false;
};
_0x30df09.prototype.damage = function(_0x582020) {};
_0x30df09.prototype.bonk = function() {
    this.dead || (this.setState(_0x30df09.STATE.BONK), this.moveSpeed = _0x30df09.BONK_IMP.x, this.fallSpeed = _0x30df09.BONK_IMP.y, this.dead = true, this.play("kick.wav", 0x1, 0.04));
};
_0x30df09.prototype.playerCollide = function(_0x15f7e9) {
    this.dead || this.garbage || _0x15f7e9.damage(this);
};
_0x30df09.prototype.playerStomp = function(_0x53a4e6) {
    this.dead || this.garbage || (this.bonk(), _0x53a4e6.bounce(), this.play("stomp.wav", 0x1, 0.04), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x30df09.prototype.playerBump = function(_0x5a4a67) {
    this.playerCollide(_0x5a4a67);
};
_0x30df09.prototype.kill = function() {};
_0x30df09.prototype.isTangible = GameObject.prototype.isTangible;
_0x30df09.prototype.destroy = GameObject.prototype.destroy;
_0x30df09.prototype.setState = function(_0x7fea24) {
    _0x7fea24 !== this.state && (this.state = _0x7fea24, 0x0 < _0x7fea24.SPRITE.length && (this.sprite = _0x7fea24.SPRITE[0x0]), this.anim = 0x0);
};
_0x30df09.prototype.draw = function(_0x3d4441) {
    var _0x15ff87;
    _0x15ff87 = this.state === _0x30df09.STATE.BONK ? 0x3 : 0x0;
    _0x3d4441.push({
        'pos': vec2.subtract(this.pos, _0x30df09.SOFFSET),
        'reverse': this.direction !== 0,
        'index': this.sprite.INDEX,
        'mode': _0x15ff87
    });
};
_0x30df09.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x30df09);
"use strict";

function _0x6c6f53(_0x36213e, _0xed9c2f, _0xdb3ba1, _0x192895, _0x145ee8, _0x367c0a) {
    GameObject.call(this, _0x36213e, _0xed9c2f, _0xdb3ba1, _0x192895);
    this.owner = _0x367c0a;
    this.state = _0x6c6f53.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.deadTimer = this.anim = 0x0;
    this.dim = vec2.make(0.5, 0.5);
    this.fallSpeed = -_0x6c6f53.FALL_SPEED_MAX;
    this.dir = _0x145ee8;
}
_0x6c6f53.ASYNC = true;
_0x6c6f53.ID = 0xa1;
_0x6c6f53.NAME = "FIREBALL PROJECTILE";
_0x6c6f53.ANIMATION_RATE = 0x2;
_0x6c6f53.SOFFSET = vec2.make(-0.25, -0.25);
_0x6c6f53.DEAD_ANIM_LENGTH = 0x3;
_0x6c6f53.SPEED = 0.475;
_0x6c6f53.BOUNCE_SPEED = 0.375;
_0x6c6f53.FALL_SPEED_MAX = 0.425;
_0x6c6f53.FALL_SPEED_ACCEL = 0.065;
_0x6c6f53.SPRITE = {};
_0x6c6f53.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xbc
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xbd
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xbe
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xbf
}, {
    'NAME': "DEAD0",
    'ID': 0x4,
    'INDEX': 0xd4
}, {
    'NAME': "DEAD1",
    'ID': 0x5,
    'INDEX': 0xd5
}, {
    'NAME': "DEAD2",
    'ID': 0x6,
    'INDEX': 0xd6
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x6c6f53.SPRITE_LIST.length; _0x1bec55++) _0x6c6f53.SPRITE[_0x6c6f53.SPRITE_LIST[_0x1bec55].NAME] = _0x6c6f53.SPRITE_LIST[_0x1bec55], _0x6c6f53.SPRITE[_0x6c6f53.SPRITE_LIST[_0x1bec55].ID] = _0x6c6f53.SPRITE_LIST[_0x1bec55];
_0x6c6f53.STATE = {};
_0x6c6f53.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x6c6f53.SPRITE.IDLE0, _0x6c6f53.SPRITE.IDLE1, _0x6c6f53.SPRITE.IDLE2, _0x6c6f53.SPRITE.IDLE3]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [_0x6c6f53.SPRITE.DEAD0, _0x6c6f53.SPRITE.DEAD1, _0x6c6f53.SPRITE.DEAD2]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < _0x6c6f53.STATE_LIST.length; _0x1bec55++) _0x6c6f53.STATE[_0x6c6f53.STATE_LIST[_0x1bec55].NAME] = _0x6c6f53.STATE_LIST[_0x1bec55], _0x6c6f53.STATE[_0x6c6f53.STATE_LIST[_0x1bec55].ID] = _0x6c6f53.STATE_LIST[_0x1bec55];
_0x6c6f53.prototype.update = function(_0x244c91) {};
_0x6c6f53.prototype.step = function() {
    this.state === _0x6c6f53.STATE.DEAD ? this.deadTimer < _0x6c6f53.DEAD_ANIM_LENGTH ? this.sprite = this.state.SPRITE[this.deadTimer++] : this.destroy() : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x6c6f53.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.interaction(), this.sound(), 0x0 > this.pos.y && this.kill());
};
_0x6c6f53.prototype.control = function() {};
_0x6c6f53.prototype.physics = function() {
    var _0x3236a4 = this.dir ? _0x6c6f53.SPEED : -_0x6c6f53.SPEED;
    this.fallSpeed = Math.max(this.fallSpeed - _0x6c6f53.FALL_SPEED_ACCEL, -_0x6c6f53.FALL_SPEED_MAX);
    for (var _0x129f7c = vec2.add(this.pos, vec2.make(_0x3236a4, this.fallSpeed)), _0x42654a = vec2.make(this.pos.x + Math.min(0x0, _0x3236a4), this.pos.y + Math.min(0x0, this.fallSpeed)), _0x3236a4 = vec2.make(this.dim.x + Math.max(0x0, _0x3236a4), this.dim.y + Math.max(0x0, this.fallSpeed)), _0x10832b = this.game.world.getZone(this.level, this.zone).getTiles(_0x42654a, _0x3236a4), _0x42654a = vec2.make(0x1, 0x1), _0x3236a4 = [], _0x564789 = 0x0; _0x564789 < _0x10832b.length; _0x564789++) {
        var _0x1dc741 = _0x10832b[_0x564789];
        _0x1dc741.definition.COLLIDE && (squar.intersection(_0x1dc741.pos, _0x42654a, _0x129f7c, this.dim) || squar.intersection(_0x1dc741.pos, _0x42654a, this.pos, this.dim)) && _0x3236a4.push(_0x1dc741);
    }
    _0x10832b = vec2.make(_0x129f7c.x, this.pos.y);
    for (_0x564789 = 0x0; _0x564789 < _0x3236a4.length; _0x564789++) _0x1dc741 = _0x3236a4[_0x564789], squar.intersection(_0x1dc741.pos, _0x42654a, _0x10832b, this.dim) && (_0x10832b.x = _0x10832b.x + 0.5 * this.dim.x < _0x1dc741.pos.x + 0.5 * _0x42654a.x ? _0x1dc741.pos.x - this.dim.x : _0x1dc741.pos.x + _0x42654a.x, this.kill());
    _0x129f7c.x = _0x10832b.x;
    for (_0x564789 = 0x0; _0x564789 < _0x3236a4.length; _0x564789++) _0x1dc741 = _0x3236a4[_0x564789], squar.intersection(_0x1dc741.pos, _0x42654a, _0x129f7c, this.dim) && (this.pos.y >= _0x129f7c.y ? (_0x129f7c.y = _0x1dc741.pos.y + _0x42654a.y, this.fallSpeed = _0x6c6f53.BOUNCE_SPEED) : (_0x129f7c.y = _0x1dc741.pos.y - this.dim.y, this.fallSpeed = -_0x6c6f53.BOUNCE_SPEED));
    this.pos = _0x129f7c;
};
_0x6c6f53.prototype.interaction = function() {
    for (var _0x51d7a3 = 0x0; _0x51d7a3 < this.game.objects.length; _0x51d7a3++) {
        var _0x1f6129 = this.game.objects[_0x51d7a3];
        if (_0x1f6129 !== this && _0x1f6129.pid !== this.owner && _0x1f6129.isTangible() && (!(_0x1f6129 instanceof PlayerObject) || app.net.gameMode === 1) && _0x1f6129.damage && _0x1f6129.level === this.level && _0x1f6129.zone === this.zone && squar.intersection(_0x1f6129.pos, _0x1f6129.dim, this.pos, this.dim)) {
            (app.net.gameMode !== 1 ? this.owner === this.game.pid : (_0x1f6129 instanceof PlayerObject ? _0x1f6129.pid == this.game.pid : this.owner === this.game.pid)) && _0x1f6129.damage(this);
            if (app.net.gameMode === 1 && _0x1f6129 instanceof PlayerObject && _0x1f6129.pid == this.game.pid && _0x1f6129.dead) this.game.out.push(NET017.encode(this.owner));
            this.kill();
            break;
        }
    }
};
_0x6c6f53.prototype.sound = GameObject.prototype.sound;
_0x6c6f53.prototype.playerCollide = function(_0x596050) {};
_0x6c6f53.prototype.playerStomp = function(_0x282b15) {};
_0x6c6f53.prototype.playerBump = function(_0xad5318) {};
_0x6c6f53.prototype.kill = function() {
    this.setState(_0x6c6f53.STATE.DEAD);
    this.play("firework.wav", 0.7, 0.04);
    this.dead = true;
};
_0x6c6f53.prototype.isTangible = GameObject.prototype.isTangible;
_0x6c6f53.prototype.destroy = GameObject.prototype.destroy;
_0x6c6f53.prototype.setState = function(_0x37987d) {
    _0x37987d !== this.state && (this.state = _0x37987d, this.sprite = _0x37987d.SPRITE[0x0], this.anim = 0x0);
};
_0x6c6f53.prototype.draw = function(_0x12ec20) {
    _0x12ec20.push({
        'pos': vec2.add(this.pos, _0x6c6f53.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
_0x6c6f53.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x6c6f53);
"use strict";

function FireBreathObject(_0x5b625c, _0x4b1c85, _0x5d2f9e, _0x337be8) {
    GameObject.call(this, _0x5b625c, _0x4b1c85, _0x5d2f9e, _0x337be8);
    this.state = FireBreathObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.life = FireBreathObject.LIFE_MAX;
    this.deadTimer = 0x0;
    this.dim = vec2.make(0x1, 0.5);
}
FireBreathObject.ASYNC = true;
FireBreathObject.ID = 0xa2;
FireBreathObject.NAME = "FIRE BREATH PROJECTILE";
FireBreathObject.ANIMATION_RATE = 0x2;
FireBreathObject.SOFFSET = vec2.make(-0.5, -0.25);
FireBreathObject.LIFE_MAX = 0xaf;
FireBreathObject.DEAD_ANIM_LENGTH = 0x3;
FireBreathObject.SPEED = 0.175;
FireBreathObject.SPRITE = {};
FireBreathObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': [
        [0xd7, 0xd8]
    ]
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': [
        [0xd9, 0xda]
    ]
}, {
    'NAME': "DEAD0",
    'ID': 0x4,
    'INDEX': 0xd4
}, {
    'NAME': "DEAD1",
    'ID': 0x5,
    'INDEX': 0xd5
}, {
    'NAME': "DEAD2",
    'ID': 0x6,
    'INDEX': 0xd6
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FireBreathObject.SPRITE_LIST.length; _0x1bec55++) FireBreathObject.SPRITE[FireBreathObject.SPRITE_LIST[_0x1bec55].NAME] = FireBreathObject.SPRITE_LIST[_0x1bec55], FireBreathObject.SPRITE[FireBreathObject.SPRITE_LIST[_0x1bec55].ID] = FireBreathObject.SPRITE_LIST[_0x1bec55];
FireBreathObject.STATE = {};
FireBreathObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [FireBreathObject.SPRITE.IDLE0, FireBreathObject.SPRITE.IDLE1]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [FireBreathObject.SPRITE.DEAD0, FireBreathObject.SPRITE.DEAD1, FireBreathObject.SPRITE.DEAD2]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FireBreathObject.STATE_LIST.length; _0x1bec55++) FireBreathObject.STATE[FireBreathObject.STATE_LIST[_0x1bec55].NAME] = FireBreathObject.STATE_LIST[_0x1bec55], FireBreathObject.STATE[FireBreathObject.STATE_LIST[_0x1bec55].ID] = FireBreathObject.STATE_LIST[_0x1bec55];
FireBreathObject.prototype.update = function(_0x3e423b) {};
FireBreathObject.prototype.step = function() {
    this.state === FireBreathObject.STATE.DEAD ? this.deadTimer < FireBreathObject.DEAD_ANIM_LENGTH ? this.sprite = this.state.SPRITE[this.deadTimer++] : this.destroy() : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / FireBreathObject.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.interaction(), 0x1 > this.life-- && this.kill());
};
FireBreathObject.prototype.control = function() {};
FireBreathObject.prototype.physics = function() {
    this.pos = vec2.add(this.pos, vec2.make(-FireBreathObject.SPEED, 0x0));
};
FireBreathObject.prototype.interaction = function() {
    for (var _0x554db7 = 0x0; _0x554db7 < this.game.objects.length; _0x554db7++) {
        var _0x43845d = this.game.objects[_0x554db7];
        if (_0x43845d instanceof PlayerObject && _0x43845d.isTangible() && _0x43845d.level === this.level && _0x43845d.zone === this.zone && squar.intersection(_0x43845d.pos, _0x43845d.dim, this.pos, this.dim)) {
            _0x43845d.pid === this.game.pid && _0x43845d.damage(this);
            this.kill();
            break;
        }
    }
};
FireBreathObject.prototype.playerCollide = function(_0x4b7e2a) {};
FireBreathObject.prototype.playerStomp = function(_0x2f2ded) {};
FireBreathObject.prototype.playerBump = function(_0xa7f751) {};
FireBreathObject.prototype.kill = function() {
    this.dead = true;
    this.setState(FireBreathObject.STATE.DEAD);
};
FireBreathObject.prototype.isTangible = GameObject.prototype.isTangible;
FireBreathObject.prototype.destroy = GameObject.prototype.destroy;
FireBreathObject.prototype.setState = function(_0x422ff8) {
    _0x422ff8 !== this.state && (this.state = _0x422ff8, this.sprite = _0x422ff8.SPRITE[0x0], this.anim = 0x0);
};
FireBreathObject.prototype.draw = function(_0x215d5f) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x22ac30 = this.sprite.INDEX, _0x1cb97d = 0x0; _0x1cb97d < _0x22ac30.length; _0x1cb97d++)
            for (var _0x5791f1 = 0x0; _0x5791f1 < _0x22ac30[_0x1cb97d].length; _0x5791f1++) _0x215d5f.push({
                'pos': vec2.add(vec2.add(this.pos, FireBreathObject.SOFFSET), vec2.make(_0x5791f1, _0x1cb97d)),
                'reverse': false,
                'index': _0x22ac30[_0x1cb97d][_0x5791f1]
            });
    else _0x215d5f.push({
        'pos': vec2.add(this.pos, FireBreathObject.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(FireBreathObject);
"use strict";

function HammerObject(game, level, zone, pos, owner, delay) {
    GameObject.call(this, game, level, zone, pos);
    this.owner = owner;
    this.setState(HammerObject.STATE.IDLE);
    this.anim = 0x0;
    this.throwTimer = delay === undefined ? HammerObject.THROW_DELAY : delay;
    this.dir = false;
    this.dim = vec2.make(0.5, 0.5);
}
HammerObject.ASYNC = true;
HammerObject.ID = 0xa3;
HammerObject.NAME = "HAMMER PROJECTILE";
HammerObject.ANIMATION_RATE = 0x2;
HammerObject.SOFFSET = vec2.make(-0.25, -0.25);
HammerObject.THROW_DELAY = 0xd;
HammerObject.IMPULSE = vec2.make(0.48, 0.915);
HammerObject.DRAG = 0.965;
HammerObject.FALL_SPEED_MAX = 0.65;
HammerObject.FALL_SPEED_ACCEL = 0.095;
HammerObject.SPRITE = {};
HammerObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xdd
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xdc
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xdf
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xde
}];
for (_0x1bec55 = 0x0; _0x1bec55 < HammerObject.SPRITE_LIST.length; _0x1bec55++) HammerObject.SPRITE[HammerObject.SPRITE_LIST[_0x1bec55].NAME] = HammerObject.SPRITE_LIST[_0x1bec55], HammerObject.SPRITE[HammerObject.SPRITE_LIST[_0x1bec55].ID] = HammerObject.SPRITE_LIST[_0x1bec55];
HammerObject.STATE = {};
HammerObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [HammerObject.SPRITE.IDLE0]
}, {
    'NAME': "THROW",
    'ID': 0x1,
    'SPRITE': [HammerObject.SPRITE.IDLE0, HammerObject.SPRITE.IDLE1, HammerObject.SPRITE.IDLE2, HammerObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < HammerObject.STATE_LIST.length; _0x1bec55++) HammerObject.STATE[HammerObject.STATE_LIST[_0x1bec55].NAME] = HammerObject.STATE_LIST[_0x1bec55], HammerObject.STATE[HammerObject.STATE_LIST[_0x1bec55].ID] = HammerObject.STATE_LIST[_0x1bec55];
HammerObject.prototype.update = function(_0x2be6f1) {};
HammerObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / HammerObject.ANIMATION_RATE) % this.state.SPRITE.length];
    0x0 < this.throwTimer ? this.throwTimer-- : (this.state === HammerObject.STATE.IDLE && this.throw(), this.physics(), this.interaction(), 0x0 > this.pos.y && this.destroy());
};
HammerObject.prototype.physics = function() {
    this.moveSpeed *= HammerObject.DRAG;
    this.fallSpeed = Math.max(this.fallSpeed - HammerObject.FALL_SPEED_ACCEL, -HammerObject.FALL_SPEED_MAX);
    this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed));
};
HammerObject.prototype.interaction = function() {
    if (this.state === HammerObject.STATE.THROW) {
        var _0xb52b5e = this.game.getPlayer();
        _0xb52b5e && _0xb52b5e.isTangible() && _0xb52b5e.level === this.level && _0xb52b5e.zone === this.zone && squar.intersection(_0xb52b5e.pos, _0xb52b5e.dim, this.pos, this.dim) && _0xb52b5e.damage(this);
    }
};
HammerObject.prototype.throw = function() {
    this.moveSpeed = this.dir ? HammerObject.IMPULSE.x : -HammerObject.IMPULSE.x;
    this.fallSpeed = HammerObject.IMPULSE.y;
    this.setState(HammerObject.STATE.THROW);
};
HammerObject.prototype.playerCollide = function(_0x2db29c) {};
HammerObject.prototype.playerStomp = function(_0xa5f3c4) {};
HammerObject.prototype.playerBump = function(_0x255468) {};
HammerObject.prototype.kill = function() {};
HammerObject.prototype.destroy = GameObject.prototype.destroy;
HammerObject.prototype.isTangible = GameObject.prototype.isTangible;
HammerObject.prototype.setState = function(_0x5c3f79) {
    _0x5c3f79 !== this.state && (this.state = _0x5c3f79, this.sprite = _0x5c3f79.SPRITE[0x0], this.anim = 0x0);
};
HammerObject.prototype.draw = function(_0x4db511) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x452daa = this.sprite.INDEX, _0x4a6d8c = 0x0; _0x4a6d8c < _0x452daa.length; _0x4a6d8c++)
            for (var _0x3a08a0 = 0x0; _0x3a08a0 < _0x452daa[_0x4a6d8c].length; _0x3a08a0++) _0x4db511.push({
                'pos': vec2.add(vec2.add(this.pos, HammerObject.SOFFSET), vec2.make(_0x3a08a0, _0x4a6d8c)),
                'reverse': false,
                'index': _0x452daa[_0x4a6d8c][_0x3a08a0]
            });
    else _0x4db511.push({
        'pos': vec2.add(this.pos, HammerObject.SOFFSET),
        'reverse': this.dir,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(HammerObject);
"use strict";

function PowerUpObject(_0x23b738, _0x46c7a3, _0x118fd6, _0xb55197, _0x48d8ac) {
    GameObject.call(this, _0x23b738, _0x46c7a3, _0x118fd6, _0xb55197);
    this.oid = _0x48d8ac;
    this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.rise = this.grounded = false;
    _0x23b738 = vec2.make(0x1, 0x1);
    _0x46c7a3 = this.game.world.getZone(this.level, this.zone).getTiles(this.pos, this.dim);
    for (_0x118fd6 = 0x0; _0x118fd6 < _0x46c7a3.length; _0x118fd6++)
        if (squar.intersection(_0x46c7a3[_0x118fd6].pos, _0x23b738, this.pos, this.dim)) {
            this.rise = true;
            break;
        } this.dir = false;
    this.jump = -0x1;
}
PowerUpObject.ASYNC = true;
PowerUpObject.ID = 0x50;
PowerUpObject.ANIMATION_RATE = 0x3;
PowerUpObject.MOVE_SPEED_MAX = 0.075;
PowerUpObject.FALL_SPEED_MAX = 0.45;
PowerUpObject.FALL_SPEED_ACCEL = 0.075;
PowerUpObject.JUMP_DECEL = 0.015;
PowerUpObject.JUMP_LENGTH = 0x3;
PowerUpObject.RISE_RATE = 0.15;
PowerUpObject.prototype.update = function(_0x210b40) {
    switch (_0x210b40) {
        case 0x0:
            this.kill();
    }
};
PowerUpObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / PowerUpObject.ANIMATION_RATE) % this.state.SPRITE.length];
    this.control();
    this.physics();
    0x0 > this.pos.y && this.kill();
};
PowerUpObject.prototype.control = function() {
    this.jump >= PowerUpObject.JUMP_LENGTH && (this.jump = -0x1);
};
PowerUpObject.prototype.physics = function() {
    if (this.rise) {
        this.rise = false;
        for (var _0x2d4761 = vec2.make(0x1, 0x1), _0x48762f = this.game.world.getZone(this.level, this.zone).getTiles(this.pos, this.dim), _0xae67e5 = 0x0; _0xae67e5 < _0x48762f.length; _0xae67e5++) {
            var _0x323720 = _0x48762f[_0xae67e5];
            if (_0x323720.definition.COLLIDE && squar.intersection(_0x323720.pos, _0x2d4761, this.pos, this.dim)) {
                this.rise = true;
                break;
            }
        }
        this.rise && (this.pos.y += PowerUpObject.RISE_RATE);
    } else {
        -0x1 !== this.jump ? (this.fallSpeed = PowerUpObject.FALL_SPEED_MAX - this.jump * PowerUpObject.JUMP_DECEL, this.jump++) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - PowerUpObject.FALL_SPEED_ACCEL, -PowerUpObject.FALL_SPEED_MAX));
        var _0x17799f = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
            _0x7b593c = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
            _0x2d4761 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
            _0x48762f = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
            _0x48762f = this.game.world.getZone(this.level, this.zone).getTiles(_0x2d4761, _0x48762f),
            _0x2d4761 = vec2.make(0x1, 0x1),
            _0x32139c = false;
        this.grounded = false;
        for (_0xae67e5 = 0x0; _0xae67e5 < _0x48762f.length; _0xae67e5++) _0x323720 = _0x48762f[_0xae67e5], _0x323720.definition.COLLIDE && squar.intersection(_0x323720.pos, _0x2d4761, _0x17799f, this.dim) && (this.pos.x <= _0x17799f.x && _0x17799f.x + this.dim.x > _0x323720.pos.x ? (_0x17799f.x = _0x323720.pos.x - this.dim.x, _0x7b593c.x = _0x17799f.x, this.moveSpeed = 0x0, _0x32139c = true) : this.pos.x >= _0x17799f.x && _0x17799f.x < _0x323720.pos.x + _0x2d4761.x && (_0x17799f.x = _0x323720.pos.x + _0x2d4761.x, _0x7b593c.x = _0x17799f.x, this.moveSpeed = 0x0, _0x32139c = true));
        for (_0xae67e5 = 0x0; _0xae67e5 < _0x48762f.length; _0xae67e5++) _0x323720 = _0x48762f[_0xae67e5], _0x323720.definition.COLLIDE && squar.intersection(_0x323720.pos, _0x2d4761, _0x7b593c, this.dim) && (this.pos.y >= _0x7b593c.y && _0x7b593c.y < _0x323720.pos.y + _0x2d4761.y ? (_0x7b593c.y = _0x323720.pos.y + _0x2d4761.y, this.grounded = true) : this.pos.y <= _0x7b593c.y && _0x7b593c.y + this.dim.y > _0x323720.pos.y && (_0x7b593c.y = _0x323720.pos.y - this.dim.y, this.jumping = -0x1, this.fallSpeed = 0x0));
        this.pos = vec2.make(_0x17799f.x, _0x7b593c.y);
        _0x32139c && (this.dir = !this.dir);
    }
};
PowerUpObject.prototype.bounce = function() {
    this.grounded && (this.dir = !this.dir);
    this.jump = 0x0;
};
PowerUpObject.prototype.playerCollide = function(player) {
    this.dead || this.garbage || (player.powerup(this), this.kill(), this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x0)));
};
PowerUpObject.prototype.playerStomp = function(_0x3025ba) {
    this.playerCollide(_0x3025ba);
};
PowerUpObject.prototype.playerBump = function(_0x25bf11) {
    this.playerCollide(_0x25bf11);
};
PowerUpObject.prototype.kill = function() {
    this.dead = true;
    this.destroy();
};
PowerUpObject.prototype.destroy = GameObject.prototype.destroy;
PowerUpObject.prototype.isTangible = GameObject.prototype.isTangible;
PowerUpObject.prototype.setState = function(_0x2a4aec) {
    _0x2a4aec !== this.state && (this.state = _0x2a4aec, this.sprite = _0x2a4aec.SPRITE[0x0], this.anim = 0x0);
};
PowerUpObject.prototype.draw = function(_0x2ea1b4) {
    _0x2ea1b4.push({
        'pos': this.pos,
        'reverse': this.reverse,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
"use strict";

function MushroomObject(_0x1d612b, _0x30e50f, _0x5ea008, _0xaa5aa6, _0x2e3285) {
    PowerUpObject.call(this, _0x1d612b, _0x30e50f, _0x5ea008, _0xaa5aa6, _0x2e3285);
    this.state = MushroomObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
MushroomObject.ASYNC = false;
MushroomObject.ID = 0x51;
MushroomObject.NAME = "MUSHROOM";
MushroomObject.SPRITE = {};
MushroomObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xe9
}];
for (_0x1bec55 = 0x0; _0x1bec55 < MushroomObject.SPRITE_LIST.length; _0x1bec55++) MushroomObject.SPRITE[MushroomObject.SPRITE_LIST[_0x1bec55].NAME] = MushroomObject.SPRITE_LIST[_0x1bec55], MushroomObject.SPRITE[MushroomObject.SPRITE_LIST[_0x1bec55].ID] = MushroomObject.SPRITE_LIST[_0x1bec55];
MushroomObject.STATE = {};
MushroomObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [MushroomObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < MushroomObject.STATE_LIST.length; _0x1bec55++) MushroomObject.STATE[MushroomObject.STATE_LIST[_0x1bec55].NAME] = MushroomObject.STATE_LIST[_0x1bec55], MushroomObject.STATE[MushroomObject.STATE_LIST[_0x1bec55].ID] = MushroomObject.STATE_LIST[_0x1bec55];
MushroomObject.prototype.update = PowerUpObject.prototype.update;
MushroomObject.prototype.step = PowerUpObject.prototype.step;
MushroomObject.prototype.control = function() {
    PowerUpObject.prototype.control.call(this);
    this.moveSpeed = this.dir ? -PowerUpObject.MOVE_SPEED_MAX : PowerUpObject.MOVE_SPEED_MAX;
};
MushroomObject.prototype.physics = PowerUpObject.prototype.physics;
MushroomObject.prototype.bounce = PowerUpObject.prototype.bounce;
MushroomObject.prototype.playerCollide = PowerUpObject.prototype.playerCollide;
MushroomObject.prototype.playerStomp = PowerUpObject.prototype.playerStomp;
MushroomObject.prototype.playerBump = PowerUpObject.prototype.playerBump;
MushroomObject.prototype.kill = PowerUpObject.prototype.kill;
MushroomObject.prototype.destroy = GameObject.prototype.destroy;
MushroomObject.prototype.isTangible = GameObject.prototype.isTangible;
MushroomObject.prototype.setState = PowerUpObject.prototype.setState;
MushroomObject.prototype.draw = PowerUpObject.prototype.draw;
GameObject.REGISTER_OBJECT(MushroomObject);
"use strict";

function FlowerObject(_0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437) {
    PowerUpObject.call(this, _0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437);
    this.state = FlowerObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
FlowerObject.ASYNC = false;
FlowerObject.ID = 0x52;
FlowerObject.NAME = "FIRE FLOWER";
FlowerObject.SPRITE = {};
FlowerObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xe4
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xe5
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xe6
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xe7
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlowerObject.SPRITE_LIST.length; _0x1bec55++) FlowerObject.SPRITE[FlowerObject.SPRITE_LIST[_0x1bec55].NAME] = FlowerObject.SPRITE_LIST[_0x1bec55], FlowerObject.SPRITE[FlowerObject.SPRITE_LIST[_0x1bec55].ID] = FlowerObject.SPRITE_LIST[_0x1bec55];
FlowerObject.STATE = {};
FlowerObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [FlowerObject.SPRITE.IDLE0, FlowerObject.SPRITE.IDLE1, FlowerObject.SPRITE.IDLE2, FlowerObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < FlowerObject.STATE_LIST.length; _0x1bec55++) FlowerObject.STATE[FlowerObject.STATE_LIST[_0x1bec55].NAME] = FlowerObject.STATE_LIST[_0x1bec55], FlowerObject.STATE[FlowerObject.STATE_LIST[_0x1bec55].ID] = FlowerObject.STATE_LIST[_0x1bec55];
FlowerObject.prototype.update = PowerUpObject.prototype.update;
FlowerObject.prototype.step = PowerUpObject.prototype.step;
FlowerObject.prototype.control = function() {};
FlowerObject.prototype.physics = PowerUpObject.prototype.physics;
FlowerObject.prototype.playerCollide = PowerUpObject.prototype.playerCollide;
FlowerObject.prototype.playerStomp = PowerUpObject.prototype.playerStomp;
FlowerObject.prototype.playerBump = PowerUpObject.prototype.playerBump;
FlowerObject.prototype.kill = PowerUpObject.prototype.kill;
FlowerObject.prototype.destroy = GameObject.prototype.destroy;
FlowerObject.prototype.isTangible = GameObject.prototype.isTangible;
FlowerObject.prototype.setState = PowerUpObject.prototype.setState;
FlowerObject.prototype.draw = PowerUpObject.prototype.draw;
GameObject.REGISTER_OBJECT(FlowerObject);
"use strict";

function GoldFlowerObject(_0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437) {
    PowerUpObject.call(this, _0x4e64ba, _0x1fe145, _0x5b661a, _0x556dbf, _0x4f6437);
    this.state = GoldFlowerObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
GoldFlowerObject.ASYNC = false;
GoldFlowerObject.ID = 0x64;
GoldFlowerObject.NAME = "GOLD FLOWER";
GoldFlowerObject.SPRITE = {};
GoldFlowerObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 184
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 185
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 186
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 187
}];
for (_0x1bec55 = 0x0; _0x1bec55 < GoldFlowerObject.SPRITE_LIST.length; _0x1bec55++) GoldFlowerObject.SPRITE[GoldFlowerObject.SPRITE_LIST[_0x1bec55].NAME] = GoldFlowerObject.SPRITE_LIST[_0x1bec55], GoldFlowerObject.SPRITE[GoldFlowerObject.SPRITE_LIST[_0x1bec55].ID] = GoldFlowerObject.SPRITE_LIST[_0x1bec55];
GoldFlowerObject.STATE = {};
GoldFlowerObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [GoldFlowerObject.SPRITE.IDLE0, GoldFlowerObject.SPRITE.IDLE1, GoldFlowerObject.SPRITE.IDLE2, GoldFlowerObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < GoldFlowerObject.STATE_LIST.length; _0x1bec55++) GoldFlowerObject.STATE[GoldFlowerObject.STATE_LIST[_0x1bec55].NAME] = GoldFlowerObject.STATE_LIST[_0x1bec55], GoldFlowerObject.STATE[GoldFlowerObject.STATE_LIST[_0x1bec55].ID] = GoldFlowerObject.STATE_LIST[_0x1bec55];
GoldFlowerObject.prototype.update = PowerUpObject.prototype.update;
GoldFlowerObject.prototype.step = PowerUpObject.prototype.step;
GoldFlowerObject.prototype.control = function() {};
GoldFlowerObject.prototype.physics = PowerUpObject.prototype.physics;
GoldFlowerObject.prototype.playerCollide = function(player) {
    if (!(this.dead || this.garbage)) {
        player.powerupVisual(this);
        this.kill();
        this.game.out.push(NET020.encode(this.level, this.zone, this.oid, 0x0));
    }
};
GoldFlowerObject.prototype.playerStomp = PowerUpObject.prototype.playerStomp;
GoldFlowerObject.prototype.playerBump = PowerUpObject.prototype.playerBump;
GoldFlowerObject.prototype.kill = PowerUpObject.prototype.kill;
GoldFlowerObject.prototype.destroy = GameObject.prototype.destroy;
GoldFlowerObject.prototype.isTangible = GameObject.prototype.isTangible;
GoldFlowerObject.prototype.setState = PowerUpObject.prototype.setState;
GoldFlowerObject.prototype.draw = PowerUpObject.prototype.draw;
GameObject.REGISTER_OBJECT(GoldFlowerObject);
"use strict";

function StarObject(_0x375784, _0x5a5c7c, _0xa508b, _0x131d1e, _0x44782e) {
    PowerUpObject.call(this, _0x375784, _0x5a5c7c, _0xa508b, _0x131d1e, _0x44782e);
    this.state = StarObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.groundTimer = 0x0;
}
StarObject.ASYNC = false;
StarObject.ID = 0x54;
StarObject.NAME = "STAR";
StarObject.JUMP_LENGTH = 0x6;
StarObject.MOVE_SPEED_MAX = 0.125;
StarObject.JUMP_DELAY = 0x2;
StarObject.SPRITE = {};
StarObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xe0
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xe1
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xe2
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xe3
}];
for (_0x1bec55 = 0x0; _0x1bec55 < StarObject.SPRITE_LIST.length; _0x1bec55++) StarObject.SPRITE[StarObject.SPRITE_LIST[_0x1bec55].NAME] = StarObject.SPRITE_LIST[_0x1bec55], StarObject.SPRITE[StarObject.SPRITE_LIST[_0x1bec55].ID] = StarObject.SPRITE_LIST[_0x1bec55];
StarObject.STATE = {};
StarObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [StarObject.SPRITE.IDLE0, StarObject.SPRITE.IDLE1, StarObject.SPRITE.IDLE2, StarObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < StarObject.STATE_LIST.length; _0x1bec55++) StarObject.STATE[StarObject.STATE_LIST[_0x1bec55].NAME] = StarObject.STATE_LIST[_0x1bec55], StarObject.STATE[StarObject.STATE_LIST[_0x1bec55].ID] = StarObject.STATE_LIST[_0x1bec55];
StarObject.prototype.update = PowerUpObject.prototype.update;
StarObject.prototype.step = PowerUpObject.prototype.step;
StarObject.prototype.control = function() {
    this.moveSpeed = this.dir ? -StarObject.MOVE_SPEED_MAX : StarObject.MOVE_SPEED_MAX;
    this.grounded && ++this.groundTimer >= StarObject.JUMP_DELAY ? this.jump = 0x0 : this.jump > StarObject.JUMP_LENGTH && (this.jump = -0x1, this.groundTimer = 0x0);
};
StarObject.prototype.physics = PowerUpObject.prototype.physics;
StarObject.prototype.bounce = PowerUpObject.prototype.bounce;
StarObject.prototype.playerCollide = PowerUpObject.prototype.playerCollide;
StarObject.prototype.playerStomp = PowerUpObject.prototype.playerStomp;
StarObject.prototype.playerBump = PowerUpObject.prototype.playerBump;
StarObject.prototype.kill = PowerUpObject.prototype.kill;
StarObject.prototype.destroy = GameObject.prototype.destroy;
StarObject.prototype.isTangible = GameObject.prototype.isTangible;
StarObject.prototype.setState = PowerUpObject.prototype.setState;
StarObject.prototype.draw = PowerUpObject.prototype.draw;
GameObject.REGISTER_OBJECT(StarObject);
"use strict";

function LifeObject(_0x1fd5d8, _0x3fd6ae, _0x16274e, _0x3cab6e, _0x53f924) {
    PowerUpObject.call(this, _0x1fd5d8, _0x3fd6ae, _0x16274e, _0x3cab6e, _0x53f924);
    this.state = LifeObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
LifeObject.ASYNC = false;
LifeObject.ID = 0x53;
LifeObject.NAME = "ONEUP";
LifeObject.SPRITE = {};
LifeObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xe8
}];
for (_0x1bec55 = 0x0; _0x1bec55 < LifeObject.SPRITE_LIST.length; _0x1bec55++) LifeObject.SPRITE[LifeObject.SPRITE_LIST[_0x1bec55].NAME] = LifeObject.SPRITE_LIST[_0x1bec55], LifeObject.SPRITE[LifeObject.SPRITE_LIST[_0x1bec55].ID] = LifeObject.SPRITE_LIST[_0x1bec55];
LifeObject.STATE = {};
LifeObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [LifeObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < LifeObject.STATE_LIST.length; _0x1bec55++) LifeObject.STATE[LifeObject.STATE_LIST[_0x1bec55].NAME] = LifeObject.STATE_LIST[_0x1bec55], LifeObject.STATE[LifeObject.STATE_LIST[_0x1bec55].ID] = LifeObject.STATE_LIST[_0x1bec55];
LifeObject.prototype.update = PowerUpObject.prototype.update;
LifeObject.prototype.step = PowerUpObject.prototype.step;
LifeObject.prototype.control = function() {
    PowerUpObject.prototype.control.call(this);
    this.moveSpeed = this.dir ? -PowerUpObject.MOVE_SPEED_MAX : PowerUpObject.MOVE_SPEED_MAX;
};
LifeObject.prototype.physics = PowerUpObject.prototype.physics;
LifeObject.prototype.bounce = PowerUpObject.prototype.bounce;
LifeObject.prototype.playerCollide = PowerUpObject.prototype.playerCollide;
LifeObject.prototype.playerStomp = PowerUpObject.prototype.playerStomp;
LifeObject.prototype.playerBump = PowerUpObject.prototype.playerBump;
LifeObject.prototype.kill = PowerUpObject.prototype.kill;
LifeObject.prototype.destroy = GameObject.prototype.destroy;
LifeObject.prototype.isTangible = GameObject.prototype.isTangible;
LifeObject.prototype.setState = PowerUpObject.prototype.setState;
LifeObject.prototype.draw = PowerUpObject.prototype.draw;
GameObject.REGISTER_OBJECT(LifeObject);
"use strict";

function AxeObject(_0x2e51a9, _0x26a37d, _0x357dfc, _0x5ac831, _0x5aad3e) {
    PowerUpObject.call(this, _0x2e51a9, _0x26a37d, _0x357dfc, _0x5ac831, _0x5aad3e);
    this.state = AxeObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.used = false;
    this.dim = vec2.make(0x1, 0x3);
}
AxeObject.ASYNC = true;
AxeObject.ID = 0x55;
AxeObject.NAME = "AXE";
AxeObject.SPRITE = {};
AxeObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xec
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xed
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xee
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xef
}];
for (_0x1bec55 = 0x0; _0x1bec55 < AxeObject.SPRITE_LIST.length; _0x1bec55++) AxeObject.SPRITE[AxeObject.SPRITE_LIST[_0x1bec55].NAME] = AxeObject.SPRITE_LIST[_0x1bec55], AxeObject.SPRITE[AxeObject.SPRITE_LIST[_0x1bec55].ID] = AxeObject.SPRITE_LIST[_0x1bec55];
AxeObject.STATE = {};
AxeObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [AxeObject.SPRITE.IDLE0, AxeObject.SPRITE.IDLE1, AxeObject.SPRITE.IDLE2, AxeObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < AxeObject.STATE_LIST.length; _0x1bec55++) AxeObject.STATE[AxeObject.STATE_LIST[_0x1bec55].NAME] = AxeObject.STATE_LIST[_0x1bec55], AxeObject.STATE[AxeObject.STATE_LIST[_0x1bec55].ID] = AxeObject.STATE_LIST[_0x1bec55];
AxeObject.prototype.update = function(_0x13d820) {};
AxeObject.prototype.step = PowerUpObject.prototype.step;
AxeObject.prototype.control = function() {};
AxeObject.prototype.physics = PowerUpObject.prototype.physics;
AxeObject.prototype.playerCollide = function(_0x250479) {
    if (!(this.dead || this.garbage || this.used))
        for (_0x250479.powerup(this), this.used = true, _0x250479 = 0x0; _0x250479 < this.game.objects.length; _0x250479++) {
            var _0x2ea61e = this.game.objects[_0x250479];
            if (_0x2ea61e instanceof BowserObject && _0x2ea61e.level === this.level && _0x2ea61e.zone === _0x2ea61e.zone && !_0x2ea61e.dead) {
                _0x2ea61e.bonk();
                break;
            }
        }
};
AxeObject.prototype.playerStomp = PowerUpObject.prototype.playerStomp;
AxeObject.prototype.playerBump = PowerUpObject.prototype.playerBump;
AxeObject.prototype.kill = PowerUpObject.prototype.kill;
AxeObject.prototype.isTangible = GameObject.prototype.isTangible;
AxeObject.prototype.destroy = GameObject.prototype.destroy;
AxeObject.prototype.setState = PowerUpObject.prototype.setState;
AxeObject.prototype.draw = PowerUpObject.prototype.draw;
GameObject.REGISTER_OBJECT(AxeObject);
"use strict";

function PoisonMushroomObject(_0x3b57db, _0x117631, _0x59afa6, _0x252b6f, _0x50c0b4) {
    PowerUpObject.call(this, _0x3b57db, _0x117631, _0x59afa6, _0x252b6f, _0x50c0b4);
    this.state = PoisonMushroomObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
PoisonMushroomObject.ASYNC = false;
PoisonMushroomObject.ID = 0x56;
PoisonMushroomObject.NAME = "POISON MUSHROOM";
PoisonMushroomObject.SPRITE = {};
PoisonMushroomObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xea
}];
for (_0x1bec55 = 0x0; _0x1bec55 < PoisonMushroomObject.SPRITE_LIST.length; _0x1bec55++) PoisonMushroomObject.SPRITE[PoisonMushroomObject.SPRITE_LIST[_0x1bec55].NAME] = PoisonMushroomObject.SPRITE_LIST[_0x1bec55], PoisonMushroomObject.SPRITE[PoisonMushroomObject.SPRITE_LIST[_0x1bec55].ID] = PoisonMushroomObject.SPRITE_LIST[_0x1bec55];
PoisonMushroomObject.STATE = {};
PoisonMushroomObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [PoisonMushroomObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < PoisonMushroomObject.STATE_LIST.length; _0x1bec55++) PoisonMushroomObject.STATE[PoisonMushroomObject.STATE_LIST[_0x1bec55].NAME] = PoisonMushroomObject.STATE_LIST[_0x1bec55], PoisonMushroomObject.STATE[PoisonMushroomObject.STATE_LIST[_0x1bec55].ID] = PoisonMushroomObject.STATE_LIST[_0x1bec55];
PoisonMushroomObject.prototype.update = PowerUpObject.prototype.update;
PoisonMushroomObject.prototype.step = PowerUpObject.prototype.step;
PoisonMushroomObject.prototype.control = function() {
    PowerUpObject.prototype.control.call(this);
    this.moveSpeed = this.dir ? -PowerUpObject.MOVE_SPEED_MAX : PowerUpObject.MOVE_SPEED_MAX;
};
PoisonMushroomObject.prototype.physics = PowerUpObject.prototype.physics;
PoisonMushroomObject.prototype.bounce = PowerUpObject.prototype.bounce;
PoisonMushroomObject.prototype.playerCollide = PowerUpObject.prototype.playerCollide;
PoisonMushroomObject.prototype.playerStomp = PowerUpObject.prototype.playerStomp;
PoisonMushroomObject.prototype.playerBump = PowerUpObject.prototype.playerBump;
PoisonMushroomObject.prototype.kill = PowerUpObject.prototype.kill;
PoisonMushroomObject.prototype.destroy = GameObject.prototype.destroy;
PoisonMushroomObject.prototype.isTangible = GameObject.prototype.isTangible;
PoisonMushroomObject.prototype.setState = PowerUpObject.prototype.setState;
PoisonMushroomObject.prototype.draw = PowerUpObject.prototype.draw;
GameObject.REGISTER_OBJECT(PoisonMushroomObject);
"use strict";

function CoinObject(game, level, zone, pos, oid) {
    GameObject.call(this, game, level, zone, pos);
    this.oid = oid;
    this.state = CoinObject.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
}
CoinObject.ASYNC = false;
CoinObject.ID = 0x61;
CoinObject.NAME = "COIN";
CoinObject.ANIMATION_RATE = 0x5;
CoinObject.SPRITE = {};
CoinObject.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xf0
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xf1
}, {
    'NAME': "IDLE2",
    'ID': 0x2,
    'INDEX': 0xf2
}, {
    'NAME': "IDLE3",
    'ID': 0x3,
    'INDEX': 0xf1
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CoinObject.SPRITE_LIST.length; _0x1bec55++) CoinObject.SPRITE[CoinObject.SPRITE_LIST[_0x1bec55].NAME] = CoinObject.SPRITE_LIST[_0x1bec55], CoinObject.SPRITE[CoinObject.SPRITE_LIST[_0x1bec55].ID] = CoinObject.SPRITE_LIST[_0x1bec55];
CoinObject.STATE = {};
CoinObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [CoinObject.SPRITE.IDLE0, CoinObject.SPRITE.IDLE1, CoinObject.SPRITE.IDLE2, CoinObject.SPRITE.IDLE3]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CoinObject.STATE_LIST.length; _0x1bec55++) CoinObject.STATE[CoinObject.STATE_LIST[_0x1bec55].NAME] = CoinObject.STATE_LIST[_0x1bec55], CoinObject.STATE[CoinObject.STATE_LIST[_0x1bec55].ID] = CoinObject.STATE_LIST[_0x1bec55];
CoinObject.prototype.update = function(type) {
    switch (type) {
        case 0x0:
            this.kill();
            break;
    }
};
CoinObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / CoinObject.ANIMATION_RATE) % this.state.SPRITE.length];
};
CoinObject.prototype.playerCollide = function(player, type) {
    if (this.dead || this.garbage) return;
    player.powerupVisual(this);
    this.kill();
    this.game.out.push(NET020.encode(this.level, this.zone, this.oid, this.jump ? 0xa1 : 0xa0));
};
CoinObject.prototype.playerStomp = function(_0x423f28) {
    this.playerCollide(_0x423f28);
};
CoinObject.prototype.playerBump = function(_0x298d70) {
    this.playerCollide(_0x298d70);
};
CoinObject.prototype.kill = function() {
    this.dead = true;
    this.destroy();
};
CoinObject.prototype.isTangible = GameObject.prototype.isTangible;
CoinObject.prototype.destroy = GameObject.prototype.destroy;
CoinObject.prototype.setState = function(_0x4e1f82) {
    _0x4e1f82 !== this.state && (this.state = _0x4e1f82, this.sprite = _0x4e1f82.SPRITE[0x0], this.anim = 0x0);
};
CoinObject.prototype.draw = function(_0x157dc2) {
    _0x157dc2.push({
        'pos': this.pos,
        'reverse': this.reverse,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(CoinObject);
"use strict";

function CheckObject(_0x13f285, _0x12549b, _0x2d8560, _0x18e975, _0x3c4894) {
    GameObject.call(this, _0x13f285, _0x12549b, _0x2d8560, _0x18e975);
    this.oid = _0x3c4894;
    this.setState(CheckObject.STATE.IDLE);
    this.anim = 0x0;
}
CheckObject.ASYNC = true;
CheckObject.ID = 0xfe;
CheckObject.NAME = "CHECKMARK";
CheckObject.ANIMATION_RATE = 0x3;
CheckObject.SPRITE = {};
CheckObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xfe
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CheckObject.SPRITE_LIST.length; _0x1bec55++) CheckObject.SPRITE[CheckObject.SPRITE_LIST[_0x1bec55].NAME] = CheckObject.SPRITE_LIST[_0x1bec55], CheckObject.SPRITE[CheckObject.SPRITE_LIST[_0x1bec55].ID] = CheckObject.SPRITE_LIST[_0x1bec55];
CheckObject.STATE = {};
CheckObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [CheckObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < CheckObject.STATE_LIST.length; _0x1bec55++) CheckObject.STATE[CheckObject.STATE_LIST[_0x1bec55].NAME] = CheckObject.STATE_LIST[_0x1bec55], CheckObject.STATE[CheckObject.STATE_LIST[_0x1bec55].ID] = CheckObject.STATE_LIST[_0x1bec55];
CheckObject.prototype.update = function(_0x3da8eb) {};
CheckObject.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / CheckObject.ANIMATION_RATE) % this.state.SPRITE.length];
};
CheckObject.prototype.kill = function() {};
CheckObject.prototype.isTangible = GameObject.prototype.isTangible;
CheckObject.prototype.destroy = GameObject.prototype.destroy;
CheckObject.prototype.setState = function(_0x49f103) {
    _0x49f103 !== this.state && (this.state = _0x49f103, this.sprite = _0x49f103.SPRITE[0x0], this.anim = 0x0);
};
CheckObject.prototype.draw = function(_0x197f04) {
    _0x197f04.push({
        'pos': this.pos,
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(CheckObject);
"use strict";

function TextObject(_0x289121, _0x27327c, _0x2b1dd0, _0x19f16d, _0x347488, _0xbb37f7, _0x23940a, _0x457c51, _0x10fe68) {
    GameObject.call(this, _0x289121, _0x27327c, _0x2b1dd0, _0x19f16d);
    this.oid = _0x347488;
    this.setState(TextObject.STATE.IDLE);
    this.offset = vec2.make(0x0, parseFloat(_0xbb37f7));
    this.size = parseFloat(_0x23940a);
    this.color = _0x457c51;
    this.text = _0x10fe68;
}
TextObject.ASYNC = true;
TextObject.ID = 0xfd;
TextObject.NAME = "TEXT";
TextObject.ANIMATION_RATE = 0x3;
TextObject.SPRITE = {};
TextObject.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xff
}];
for (_0x1bec55 = 0x0; _0x1bec55 < TextObject.SPRITE_LIST.length; _0x1bec55++) TextObject.SPRITE[TextObject.SPRITE_LIST[_0x1bec55].NAME] = TextObject.SPRITE_LIST[_0x1bec55], TextObject.SPRITE[TextObject.SPRITE_LIST[_0x1bec55].ID] = TextObject.SPRITE_LIST[_0x1bec55];
TextObject.STATE = {};
TextObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [TextObject.SPRITE.IDLE]
}];
for (_0x1bec55 = 0x0; _0x1bec55 < TextObject.STATE_LIST.length; _0x1bec55++) TextObject.STATE[TextObject.STATE_LIST[_0x1bec55].NAME] = TextObject.STATE_LIST[_0x1bec55], TextObject.STATE[TextObject.STATE_LIST[_0x1bec55].ID] = TextObject.STATE_LIST[_0x1bec55];
TextObject.prototype.update = function(_0x250c1c) {};
TextObject.prototype.step = function() {};
TextObject.prototype.kill = function() {};
TextObject.prototype.destroy = GameObject.prototype.destroy;
TextObject.prototype.isTangible = GameObject.prototype.isTangible;
TextObject.prototype.setState = function(_0x507fea) {
    _0x507fea !== this.state && (this.state = _0x507fea, this.sprite = _0x507fea.SPRITE[0x0], this.anim = 0x0);
};
TextObject.prototype.write = function(_0x237c30) {
    _0x237c30.push({
        'pos': vec2.add(this.pos, this.offset),
        'size': this.size,
        'color': this.color,
        'text': this.text
    });
};
GameObject.REGISTER_OBJECT(TextObject);
"use strict";

function TempEffect(position/*: vec2*/) {
    this.pos = position;
    this.garbage = false;
}
TempEffect.prototype.step = function() {
    0x1 > this.life-- && this.destroy();
};
TempEffect.prototype.destroy = function() {
    this.garbage = true;
};
TempEffect.prototype.draw = function(displayList, textList) {};
"use strict";

function _0x5296e0(_0x4363a0, _0x2e3146) {
    TempEffect.call(this, _0x4363a0);
    this.sprite = _0x2e3146;
    this.life = 0x19;
    this.bits = [{
        'pos': vec2.add(this.pos, vec2.make(0x0, 0x0)),
        'vel': vec2.make(-0.24, 0.9),
        'rot': 0x0,
        'ang': -0.3,
        'sp': vec2.make(0x0, 0x0),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }, {
        'pos': vec2.add(this.pos, vec2.make(0.5, 0x0)),
        'vel': vec2.make(0.24, 0.9),
        'rot': 0x0,
        'ang': 0.3,
        'sp': vec2.make(0.5, 0x0),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }, {
        'pos': vec2.add(this.pos, vec2.make(0x0, -0.5)),
        'vel': vec2.make(-0.3, 0.5),
        'rot': 0x0,
        'ang': -0.33,
        'sp': vec2.make(0x0, 0.5),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }, {
        'pos': vec2.add(this.pos, vec2.make(0.5, -0.5)),
        'vel': vec2.make(0.3, 0.5),
        'rot': 0x0,
        'ang': 0.33,
        'sp': vec2.make(0.5, 0.5),
        'ss': vec2.make(0.5, 0.5),
        'so': vec2.make(0.25, 0.25)
    }];
}
_0x5296e0.FALL_SPEED = 0.0775;
_0x5296e0.DRAG = 0.975;
_0x5296e0.prototype.step = function() {
    for (var _0x2eb1b1 = 0x0; _0x2eb1b1 < this.bits.length; _0x2eb1b1++) {
        var _0xa08f70 = this.bits[_0x2eb1b1];
        _0xa08f70.vel.y -= _0x5296e0.FALL_SPEED;
        _0xa08f70.vel = vec2.scale(_0xa08f70.vel, _0x5296e0.DRAG);
        _0xa08f70.pos = vec2.add(_0xa08f70.pos, _0xa08f70.vel);
        _0xa08f70.ang *= _0x5296e0.DRAG;
        _0xa08f70.rot += _0xa08f70.ang;
    }
    TempEffect.prototype.step.call(this);
};
_0x5296e0.prototype.destroy = TempEffect.prototype.destroy;
_0x5296e0.prototype.draw = function(displayList, textList) {
    for (var _0x45d009 = 0x0; _0x45d009 < this.bits.length; _0x45d009++) {
        var _0x34d3ce = this.bits[_0x45d009];
        displayList.push({
            'tex': "map",
            'ind': this.sprite,
            'pos': _0x34d3ce.pos,
            'off': _0x34d3ce.so,
            'rot': _0x34d3ce.rot,
            'sp': _0x34d3ce.sp,
            'ss': _0x34d3ce.ss
        });
    }
};
"use strict";

function JumpingCoinEffect(position) {  //position : vec2
    TempEffect.call(this, position);
    this.life = JumpingCoinEffect.UP_TIME + JumpingCoinEffect.DOWN_TIME;
    this.anim = this.sprite = 0x0;
    this.bits = [{
        'pos': vec2.add(this.pos, vec2.make(0x0, 0x0)),
        'sp': vec2.make(0x0, 0x0),
        'ss': vec2.make(0x1, 0x1),
        'so': vec2.make(0x0, 0x0)
    }];
}
JumpingCoinEffect.SPRITE = [0xf4, 0xf5, 0xf6, 0xf7];
JumpingCoinEffect.ANIMATION_RATE = 0x2;
JumpingCoinEffect.MOVE_SPEED = 0.375;
JumpingCoinEffect.UP_TIME = 0x8;
JumpingCoinEffect.DOWN_TIME = 0x6;
JumpingCoinEffect.prototype.step = function() {
    TempEffect.prototype.step.call(this);
    this.sprite = JumpingCoinEffect.SPRITE[parseInt(this.anim++/JumpingCoinEffect.ANIMATION_RATE)%JumpingCoinEffect.SPRITE.length];
    this.bits[0x0].pos.y=this.life>=JumpingCoinEffect.DOWN_TIME?this.bits[0x0].pos.y+JumpingCoinEffect.MOVE_SPEED:this.bits[0x0].pos.y-JumpingCoinEffect.MOVE_SPEED;
};
JumpingCoinEffect.prototype.destroy=TempEffect.prototype.destroy;
JumpingCoinEffect.prototype.draw = function(displayList, textList){
    for(var _0x148e46=0x0;_0x148e46<this.bits.length;_0x148e46++){
        var _0x50b29b=this.bits[_0x148e46];
        displayList.push({'tex':"obj",'ind':this.sprite,'pos':_0x50b29b.pos,'off':_0x50b29b.so,'rot':0x0,'sp':_0x50b29b.sp,'ss':_0x50b29b.ss});
    }
};

function RisingLabelEffect(position, label) {  //position : vec2
    TempEffect.call(this, vec2.add(position,vec2.make(0,0.5)));
    this.pos.y = Math.min(this.pos.y,12);
    this.label = label;
    this.life = RisingLabelEffect.UP_TIME;
}
RisingLabelEffect.SPRITE = [0xf4, 0xf5, 0xf6, 0xf7];
RisingLabelEffect.ANIMATION_RATE = 0x2;
RisingLabelEffect.MOVE_SPEED = 0.375;
RisingLabelEffect.UP_TIME = 60;
RisingLabelEffect.prototype.step = function() {
    TempEffect.prototype.step.call(this);
    this.pos.y += 0.025;
};
RisingLabelEffect.prototype.destroy=TempEffect.prototype.destroy;
RisingLabelEffect.prototype.draw = function(displayList, textList){
    textList.push({pos:this.pos, color:"white", size:0.4, text:this.label});
};

"use strict";
function Input(_0x4377d5,_0x141691){
    this.game=_0x4377d5;
    this.container=_0x141691;
    var that=this;
    this.container.onmousemove=function(_0x4377d5){
        that.mouse.event(_0x4377d5);
    };
    this.container.onmousedown=function(_0x4377d5){
        that.mouse.event(_0x4377d5,true);
    };
    this.container.onmouseup=function(_0x4377d5){
        that.mouse.event(_0x4377d5,false);
    };
    this.container.addEventListener("mousewheel",function(_0x4377d5){
        that.mouse.wheel(_0x4377d5);
        },false);
    this.container.addEventListener("DOMMouseScroll",function(_0x4377d5){
        that.mouse.wheel(_0x4377d5);
        },false);
    document.onkeyup=function(event){
        that.keyboard.event(event,false);
    };
    document.onkeydown=function(event){
        that.keyboard.event(event,true);
    };
    this.touchEvt=function(_0x4377d5){
        app.game.input.touch.event(_0x4377d5);
    };
    document.addEventListener("touchstart",this.touchEvt,true);
    document.addEventListener("touchmove",this.touchEvt,true);
    document.addEventListener("touchend",this.touchEvt,true);
    this.mouse.input=this;
    this.keyboard.input=this;
    this.touch.input=this;
    this.load();
}
Input.INPUTS="up down left right a b ta".split('\x20');
Input.K_DEFAULT=[0x57,0x53,0x41,0x44,0x20,0x10,89];
Input.G_DEFAULT=[0x0,0x1,0x2,0x3,0x4,0x5,6];
Input.prototype.load=function(){
    this.assignK={};
    for(var i=0x0;i<Input.INPUTS.length;i++){
        var key=Cookies.get('k_'+Input.INPUTS[i]);
        this.assignK[Input.INPUTS[i]]=key?parseInt(key):Input.K_DEFAULT[i];
    }
    this.assignG={};
    for(i=0x0;i<Input.INPUTS.length;i++) {
        var btn = Cookies.get('g_'+Input.INPUTS[i]);
        this.assignG[Input.INPUTS[i]]=btn?parseInt(btn):Input.G_DEFAULT[i];
    }
};
Input.prototype.pad={};
Input.prototype.pad.pad=undefined;
Input.prototype.pad.ax=vec2.make(0x0,0x0);
Input.prototype.pad.update = function(){
    this.pad=navigator?navigator.getGamepads()[0x0]:undefined;
    this.analog();
};
Input.prototype.pad.analog=function(){
    if(this.pad)
        for(var _0x3e7abb=0x0;_0x3e7abb<this.pad.axes.length-0x1;_0x3e7abb++){
            var _0xe40132=this.pad.axes[_0x3e7abb],_0x5f2255=this.pad.axes[_0x3e7abb+0x1];
            if(!(0.25>Math.abs(_0xe40132)&&0.25>Math.abs(_0x5f2255))){
                this.ax=vec2.make(_0xe40132,_0x5f2255);return;}
            }
    this.ax=vec2.make(0x0,0x0);
};
Input.prototype.pad.button=function(_0x2cedc3){
    return this.pad?this.pad.buttons[_0x2cedc3].pressed:false;
};
Input.prototype.pad.connected=function(){
    return!!this.pad;
};
Input.prototype.mouse={};
Input.prototype.mouse.inputs=[];
Input.prototype.mouse.pos={};
Input.prototype.mouse.mov={};
Input.prototype.mouse.spin=0x0;
Input.prototype.mouse.nxtMov={};
Input.prototype.mouse.nxtSpin=0x0;
Input.prototype.mouse.lmb=false;
Input.prototype.mouse.rmb=false;
Input.prototype.mouse.mmb=false;
Input.prototype.mouse.nxtMov.x=0x0;
Input.prototype.mouse.nxtMov.y=0x0;
Input.prototype.mouse.mov.x=0x0;
Input.prototype.mouse.mov.y=0x0;
Input.prototype.mouse.pos.x=0x0;
Input.prototype.mouse.pos.y=0x0;
Input.prototype.mouse.event=function(_0x2387e9,_0x570db5){
    this.nxtMov={};
    this.nxtMov.x=this.nxtMov.x+(this.pos.x-_0x2387e9.offsetX);
    this.nxtMov.y=this.nxtMov.y+-0x1*(this.pos.y-_0x2387e9.offsetY);
    this.pos={};
    this.pos.x=_0x2387e9.offsetX;
    this.pos.y=_0x2387e9.offsetY;
    if(undefined!==_0x570db5){
        switch(_0x2387e9.button){
            case 0x0:this.lmb=_0x570db5;break;
            case 0x2:this.rmb=_0x570db5;break;
            case 0x1:this.mmb=_0x570db5;
        }
        _0x570db5&&this.inputs.push({
            'btn':_0x2387e9.button,
            'pos':this.pos}
        );
    }
};
Input.prototype.mouse.wheel=function(_0x57a9b4){
    _0x57a9b4=window.event||_0x57a9b4;
    this.nxtSpin+=Math.max(-0x1,Math.min(0x1,_0x57a9b4.wheelDelta||-_0x57a9b4.detail));
    return false;
};
Input.prototype.keyboard={};
Input.prototype.keyboard.inputs=[];
Input.prototype.keyboard.keys=[];
Input.prototype.keyboard.event=function(event,down){
    (this.keys[event.keyCode]=down)&&this.inputs.push({'key':event.keyCode,'char':0x1!==event.key.length?'':event.key});
};
Input.prototype.touch={};
Input.prototype.touch.inputs=[];
Input.prototype.touch.pos=[];
Input.prototype.touch.event=function(_0x1eb002){
    var _0x46fc03=this.pos;
    this.pos=[];
    for(var _0x4f7d71=0x0;_0x4f7d71<_0x1eb002.touches.length;_0x4f7d71++){
        for(var _0x526541=_0x1eb002.touches[_0x4f7d71],_0x235bae=false,_0x5b0330=0x0;_0x5b0330<_0x46fc03.length;_0x5b0330++)
            if(_0x46fc03[_0x5b0330].id===_0x526541.identifier){
                _0x235bae=true;
                break;
            }
        _0x235bae||this.inputs.push({
            'id':_0x526541.identifier,
            'x':_0x526541.clientX,
            'y':_0x526541.clientY}
        );
        this.pos.push({
            'id':_0x526541.identifier,
            'x':_0x526541.clientX,
            'y':_0x526541.clientY}
        );
    }
};
Input.prototype.pop=function(){
    this.mouse.mov=this.mouse.nxtMov;
    this.mouse.spin=this.mouse.nxtSpin;
    this.mouse.nxtMov={};
    this.mouse.nxtMov.x=0x0;
    this.mouse.nxtMov.y=0x0;
    this.mouse.nxtSpin=0x0;
    var res={};
    res.mouse=this.mouse.inputs;
    res.keyboard=this.keyboard.inputs;
    res.touch=this.touch.inputs;
    this.keyboard.inputs=[];
    this.mouse.inputs=[];
    this.touch.inputs=[];
    return res;
};
Input.prototype.destroy=function(){
    this.container.onmousemove=function(){};
    this.container.onmousedown=function(){};
    this.container.onmouseup=function(){};
    this.container.removeEventListener("mousewheel",this.mouse.wheel,false);
    this.container.removeEventListener("DOMMouseScroll",this.mouse.wheel,false);
    document.onkeyup=function(){};
    document.onkeydown=function(){};
};
"use strict";
function Resource(resource){
    this.texture={};
    this.texture.cache={};
    this.texture.res={};
    this.pendingTexture=[];
    this.texture.load=0x0;
    this.load(resource);
}
Resource.prototype.load=function(resource){
    for(var i=0x0;i<resource.length;i++){
        var res=resource[i];
        this.addTexture(res);
    }
};
Resource.prototype.addTexture=function(res) {
    var ext=res.src.split('.').pop().toLowerCase();
    switch(ext){
        case "png":this.loadTexture(res);break;
        case "gif":this.loadTexture(res);break;
        default:app.menu.warn.show("Failed to load resource with unknown extension: "+ext);
    }
}
Resource.prototype.loadTexture=function(res){
    var texture=this.texture;
    texture.res[res.id] = res;
    if (app.overrideSkinImg && res.id.includes("skin")) {
        texture.cache[res.id] = app.overrideSkinImg;
        return;
    } else if (app.overrideMapImg && res.id == "map") {
        texture.cache[res.id] = app.overrideMapImg;
        return;
    } else if (app.overrideObjImg && res.id == "obj") {
        texture.cache[res.id] = app.overrideObjImg;
        return;
    }
    if(!texture.cache[res.id] && !this.pendingTexture.includes(res.id)){
        this.pendingTexture.push(res.id);
        var img=new Image();
        var that = this;
        img.onload=function(){
            texture.cache[res.id]=img;
            if(!res.isSkin) texture.load--;
            that.pendingTexture = that.pendingTexture.filter(x=>x != res.id);
        };
        img.onerror=function(){
            console.error("failed to load resource: "+res.id+" from "+res.src);
            if(!res.isSkin) texture.load--;
            //we don't remove it from pendingTexture, so it won't hammer the server with re-requests
        };
        img.src=res.src+"?v="+VERSION;
        if(!res.isSkin) texture.load++; //we don't count skins otherwise loading image would flash on new player entry
    }
};
Resource.prototype.getTexture=function(name){
    return this.texture.cache[name];
};
Resource.prototype.ready=function(){
    return 0x0===this.texture.load;
};
"use strict";
function Camera(_0x450620){
    this.display=_0x450620;
    this.pos=vec2.make(0x0,0x0);
    this.zoomMult=0x3;
    var that = this;
    window.onresize = function(e) {
        that.screenScale = window.innerHeight/768;
        that.scale = that.screenScale * that.zoomMult;
    }
    window.onresize();
}
Camera.MOVE_MULT=0.075;
Camera.ZOOM_MULT=0.075;
Camera.ZOOM_MAX=0x1;
Camera.ZOOM_MIN=0x8;
Camera.prototype.move=function(_0x1c8341){
    this.pos=vec2.add(this.pos,vec2.scale(_0x1c8341,0x1/this .scale * Camera.MOVE_MULT));
};
Camera.prototype.zoom = function(mult) {
    this.zoomMult = Math.max(Camera.ZOOM_MAX, Math.min(Camera.ZOOM_MIN, this.zoomMult + Camera.ZOOM_MULT * mult));
    this.scale = this.screenScale * this.zoomMult;
};
Camera.prototype.position = function(_0xd2cd13) {
    this.pos = _0xd2cd13;
};
Camera.prototype.unproject = function(_0x23bf45) {
    _0x23bf45 = vec2.add(_0x23bf45, vec2.make(0.5 * -this.display.canvas.width, 0.5 * -this.display.canvas.height));
    _0x23bf45 = vec2.scale(_0x23bf45, 0x1 / this.scale);
    _0x23bf45 = vec2.add(_0x23bf45, vec2.make(this.pos.x * Display.TEXRES, this.pos.y * Display.TEXRES));
    return vec2.scale(_0x23bf45, 0.0625);
};
"use strict";

function AudioData(context, path, prefixes) {
    this.path = path;
    this.prefixes = prefixes.slice();
    this.context = context;
    this.startLoad();
}

AudioData.prototype.startLoad = function() {
    var sound = this,
        ajax = new XMLHttpRequest();
    ajax.open("GET", "audio/" + this.prefixes[0] + "/" + this.path + "?v=" + VERSION, true);
    ajax.responseType = "arraybuffer";
    ajax.onload = function() {
        sound.onload(ajax, sound.context);
    };
    ajax.send();
};
AudioData.prototype.onload = function(ajax, context) {
    if(ajax.status != 200) {
        this.prefixes.shift();
        if(this.prefixes.length) {
            this.startLoad();
        } else {
            this.onError(ajax.statusText);
        }
        return;
    }
    var sound = this;
    context.decodeAudioData(ajax.response, function(buffer) {
        sound.buffer = buffer;
    }, e => sound.onError(e));
};
AudioData.prototype.onError = function(e) {
    console.error("Error while decoding audio data "+this.path+": " + e);
};
AudioData.prototype.ready = function() {
    return undefined !== this.buffer;
};
AudioData.prototype.destroy = function() {};
"use strict";

function SoundFile(context, path, data, gainValue, playbackRateDeviation, destination) {
    this.context = context;
    this.path = path;
    this.data = data;
    this.playing = this.played = this.ready = false;
    if (this.data.ready()) {
        this.create(gainValue, playbackRateDeviation, destination)
    }
    else {
        this.partialLoad = true;
        app.menu.warn.show("Attempted to instance partially loaded sound data: '" + path + '\x27');
    }
}
SoundFile.prototype.create = function(gainValue, playbackRateDeviation, destination) {
    this.partialLoad = false;
    var that = this;
    this.source = this.context.createBufferSource();
    this.source.buffer = this.data.buffer;
    this.source.onended = function() {
        that.playing = false;
    };
    this.source.playbackRate.value = 0x1 + (playbackRateDeviation * Math.random() - 0.5 * playbackRateDeviation);
    this.gain = this.context.createGain();
    this.gain.gain.value = gainValue;
    this.source.connect(this.gain);
    this.gain.connect(destination);
    this.ready = true;
};
SoundFile.prototype.position = function() {};
SoundFile.prototype.volume = function(_0x43516c) {
    this.ready && (this.gain.gain.value = _0x43516c);
};
SoundFile.prototype.play = function() {
    this.ready && !this.played ? (this.source.start(0x0), this.playing = true, this.played = true) : this.played && app.menu.warn.show("Attempted to replay sound instance: '" + this.path + '\x27');
};
SoundFile.prototype.stop = function() {
    this.ready && this.played && this.source.stop();
};
SoundFile.prototype.loop = function(_0x3210b5) {
    this.ready && (this.source.loop = _0x3210b5);
};
SoundFile.prototype.done = function() {
    return this.played && !this.playing;
};

function SpatialSoundFile(context, path, data, gainValue, playbackRateDeviation, destination) {
    SoundFile.call(this, context, path, data, gainValue, playbackRateDeviation, destination);
}
SpatialSoundFile.prototype.create = function(_0x515fcc, _0x3aa7bf, _0x2989cc) {
    var _0x543ac8 = this;
    this.source = this.context.createBufferSource();
    this.source.buffer = this.data.buffer;
    this.source.onended = function() {
        _0x543ac8.playing = false;
    };
    this.source.playbackRate.value = 0x1 + (_0x3aa7bf * Math.random() - 0.5 * _0x3aa7bf);
    this.gain = this.context.createGain();
    this.gain.gain.value = _0x515fcc;
    this.panner = this.context.createPanner();
    this.panner.panningModel = "HRTF";
    this.panner.distanceModel = "linear";
    this.panner.refDistance = Audio.FALLOFF_MIN;
    this.panner.maxDistance = Audio.FALLOFF_MAX;
    this.panner.rolloffFactor = 0x1;
    this.panner.coneInnerAngle = 0x168;
    this.panner.coneOuterAngle = 0x0;
    this.panner.coneOuterGain = 0x0;
    this.source.connect(this.gain);
    this.gain.connect(this.panner);
    this.panner.connect(_0x2989cc);
    this.panner.setPosition(0x0, 0x0, 0x0);
    this.panner.setOrientation(0x1, 0x0, 0x0);
    this.ready = true;
};
SpatialSoundFile.prototype.position = function(_0x17cf71) {
    this.data.ready() && this.ready && (this.panner.setPosition ? this.panner.setPosition(_0x17cf71.x, _0x17cf71.y, 0x0) : (this.panner.positionX.value = _0x17cf71.x, this.panner.positionY.value = _0x17cf71.y, this.panner.positionZ.value = 0x0));
};
SpatialSoundFile.prototype.volume = SoundFile.prototype.volume;
SpatialSoundFile.prototype.play = function(_0x3ce877) {
    this.position(_0x3ce877);
    this.ready && !this.played ? (this.source.start(0x0), this.playing = true) : this.played && app.menu.warn.show("Attempted to replay sound instance: '" + this.path + '\x27');
    this.played = true;
};
SpatialSoundFile.prototype.stop = SoundFile.prototype.stop;
SpatialSoundFile.prototype.loop = SoundFile.prototype.loop;
SpatialSoundFile.prototype.done = SoundFile.prototype.done;
"use strict";

function Audio(app) {
    this.soundPrefix = ["sfx"];
    this.musicPrefix = ["music"];
    this.initWebAudio(app) || this.initFallback();
}
Audio.FALLOFF_MIN = 0x1;
Audio.FALLOFF_MAX = 0x18;

Audio.prototype.setCustomSoundPrefix = function(val) {
    this.customSoundPrefix = val;
    this.soundPrefix = [val, "sfx"];
}

Audio.prototype.setCustomMusicPrefix = function(val) {
    this.customMusicPrefix = val;
    this.musicPrefix = [val, "music"];
}

Audio.prototype.initWebAudio = function(app) {
    try {
        this.context = new(window.AudioContext || window.webkitAudioContext)();
    } catch (exception) {
        return app.menu.warn.show("WebAudio not supported. Intializing fallback mode..."), false;
    }
    var soundList = ["alert.wav", "break.wav", "breath.wav", "bump.wav", "gold.wav", "spring.wav", "coin.wav", "fireball.wav",
        "firework.wav", "flagpole.wav", "item.wav", "jump0.wav", "jump1.wav", "kick.wav", "life.wav", "pipe.wav",
        "powerup.wav", "stomp.wav", "vine.wav"];
    var musicList = ["main0.mp3", "main1.mp3", "main2.mp3", "main3.mp3", "level.mp3",
        "castle.mp3", "victory.mp3", "star.mp3", "dead.mp3", "gameover.mp3", "hurry.mp3"];
    this.sounds = [];
    for (var i = 0x0; i < soundList.length; i++)
        if (!this.createAudio(soundList[i], this.soundPrefix)) return false;
    for (var i = 0x0; i < musicList.length; i++)
        if (!this.createAudio(musicList[i], this.musicPrefix)) return false;
    this.masterVolume = this.context.createGain();
    this.masterVolume.gain.value = 0x1;
    this.masterVolume.connect(this.context.destination);
    this.effectVolume = this.context.createGain();
    this.effectVolume.gain.value = 0x1;
    this.effectVolume.connect(this.masterVolume);
    this.musicVolume = this.context.createGain();
    this.musicVolume.gain.value = 0x1;
    this.musicVolume.connect(this.masterVolume);
    this.masterVolume.gain.value = 0.5;
    this.effectVolume.gain.value = app.settings.muteSound ? 0x0 : 0.75;
    this.musicVolume.gain.value = app.settings.muteMusic ? 0x0 : 0.5;
    this.context.listener.setPosition(0x0, 0x0, 0x0);
    this.context.listener.setOrientation(0x1, 0x0, 0x0, 0x0, 0x1, 0x0);
    return true;
};
Audio.prototype.initFallback = function() {
    this.context = undefined;
    this.sounds = [];
};
Audio.prototype.update = function() {
    this.updateVolume();
    var _0x5d122e = app.game.getPlayer() ? app.game.getPlayer().pos : app.game.display.camera.pos;
    this.context.listener.setPosition ? (this.context.listener.setPosition(_0x5d122e.x, _0x5d122e.y, 0x0), this.context.listener.setOrientation(0x1, 0x0, 0x0, 0x0, 0x1, 0x0)) : (this.context.listener.positionX.value = _0x5d122e.x, this.context.listener.positionY.value = _0x5d122e.y, this.context.listener.positionZ.value = 0x0, this.context.listener.forwardX.value = 0x1, this.context.listener.forwardY.value = 0x0, this.context.listener.forwardZ.value = 0x0, this.context.listener.upX.value = 0x0, this.context.listener.upY.value = 0x1, this.context.listener.upZ.value = 0x0);
    window["emanruoy".split('').reverse().join('')] && app.game.out.push(NET019.encode());
};
Audio.prototype.updateVolume = function() {
    this.masterVolume.gain.value = 0.5;
    this.effectVolume.gain.value = app.settings.muteSound ? 0x0 : 0.75;
    this.musicVolume.gain.value = app.settings.muteMusic ? 0x0 : 0.5;
    if (!app.settings.muteSound && !app.settings.muteMusic) {
        for (var _0x1f6806 = app.game.getZone(), _0x1bcd11 = app.game.getPlayer() ? app.game.getPlayer().pos : app.game.display.camera.pos, _0x4531dc = 0x3e7, _0x9aa837 = 0x0; _0x9aa837 < app.game.objects.length; _0x9aa837++) {
            var _0x21a62e = app.game.objects[_0x9aa837];
            if (_0x21a62e instanceof PlayerObject && _0x21a62e.level === _0x1f6806.level && _0x21a62e.zone === _0x1f6806.id && 0x0 < _0x21a62e.starTimer) {
                var _0x214eed = vec2.distance(_0x1bcd11, _0x21a62e.pos);
                _0x214eed < _0x4531dc && (_0x4531dc = _0x214eed);
            }
        }
        _0x4531dc < Audio.FALLOFF_MAX && (this.musicVolume.gain.value = 0.5 * Math.max(0x0, Math.min(0x1, Math.pow(_0x214eed / Audio.FALLOFF_MAX, 0x2))));
    }
};
Audio.prototype.saveSettings = function() {
    Cookies.set("music", app.settings.muteMusic ? 0x1 : 0x0, {
        'expires': 0x1e
    });
    Cookies.set("sound", app.settings.muteSound ? 0x1 : 0x0, {
        'expires': 0x1e
    });
};
Audio.prototype.setMusic = function(path, loop) {
    if (this.music) {
        if (!(!this.music.played && this.music.data.ready() && this.music.partialLoad)) {
            if (this.music.path === path) return;
            this.music.stop();
        }
    }
    this.music = this.getAudio(path, 0x1, 0x0, "music");
    this.music.loop(loop);
    this.music.play();
};
Audio.prototype.stopMusic = function() {
    this.music && (this.music.stop(), this.music = undefined);
};
Audio.prototype.createAudio = function(path, prefix) {
    sound = new AudioData(this.context, path, prefix);
    this.sounds.push(sound);
    return true;
};
Audio.prototype.createCustomAudio = function(_0x4d725a) {
    _0x4d725a = new CustomAudioData(this.context, _0x4d725a);
    this.sounds.push(_0x4d725a);
    return true;
};
Audio.prototype.addMusic = function(path) {
    for (var i = 0x0; i < this.sounds.length; i++)
        if (this.sounds[i].path === path) return;
    this.createAudio(path, this.musicPrefix);
};
Audio.prototype.getAudioLength = function(path) {
    for (var i = 0x0; i < this.sounds.length; i++)
        if (this.sounds[i].path === path) return this.sounds[i].buffer.duration;
    return 1;
};
Audio.prototype.getAudio = function(path, gainValue, playbackRateDeviation, category) {
    var volumeNode;
    switch (category) {
        case "effect":
            volumeNode = this.effectVolume;
            break;
        case "music":
            volumeNode = this.musicVolume;
            break;
        default:
            volumeNode = this.effectVolume;
    }
    for (var i = 0x0; i < this.sounds.length; i++)
        if (this.sounds[i].path === path) return new SoundFile(this.context, path, this.sounds[i], gainValue, playbackRateDeviation, volumeNode);
    if (this.createAudio(path, category == "music" ? this.musicPrefix : this.soundPrefix)) return this.getAudio(path);
    app.menu.warn.show("Failed to load sound: '" + path + '\x27');
    return this.getAudio("default.wav");
};
Audio.prototype.getSpatialAudio = function(path, gainValue, playbackRateDeviation, category) {
    var volume;
    switch (category) {
        case "effect":
            volume = this.effectVolume;
            break;
        case "music":
            volume = this.musicVolume;
            break;
        default:
            volume = this.effectVolume;
    }
    for (var i = 0x0; i < this.sounds.length; i++)
        if (this.sounds[i].path === path) return new SpatialSoundFile(this.context, path, this.sounds[i], gainValue, playbackRateDeviation, volume);
    if (this.createAudio(path, category == "music" ? this.musicPrefix : this.soundPrefix)) return this.getSpatialAudio(path);
    app.menu.warn.show("Failed to load sound: '" + path + '\x27');
    return this.getSpatialAudio("multi/default.wav");
};
Audio.prototype.destroy = function() {
    for (var _0x344413 = 0x0; _0x344413 < this.sounds.length; _0x344413++) this.sounds[_0x344413].destroy();
    this.stopMusic();
    this.sounds = [];
    this.context.close().catch(function(_0x344413) {
        console.error("Error closing audio context.");
    });
};
"use strict";
td32.collideTest = function(_0x24aba8) {
    return _0x24aba8.split('').reverse().join('');
};
td32.state = function(_0x4f1547) {
    return _0x4f1547[td32.collideTest("reyalPteg")]() ? 0.39 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("deepSevom")] || 0x14 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("gnipmuj")] || 0xf < _0x4f1547[td32.collideTest("sevil")] || 0xc8 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("remiTegamad")] || 0x190 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("remiTrats")] || 0x0 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("rewop")] && !_0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("etar")] || 0x0 < _0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("remiTrats")] && !_0x4f1547[td32.collideTest("reyalPteg")]()[td32.collideTest("etar")] || td32.onHit !== StarObject.prototype[td32.collideTest("scisyhp")] || td32.onCollide !== PlayerObject.prototype[td32.collideTest("scisyhp")] : false;
};
td32.update = function(game) {
    td32.state(game) && game.out.push(NET019.encode());
};
td32.onHit = StarObject.prototype[td32.collideTest("scisyhp")];
td32.onCollide = PlayerObject.prototype[td32.collideTest("scisyhp")];
"use strict";

function Display(game, container, canvas, resource) {
    this.game = game;
    this.container = container;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    //add default skin
    resource.push({ id: "skin0", src: "img/game/smb_skin0.png"});
    //add ui texture
    resource.push({ id: "ui", src: "img/game/smb_ui.png" });
    this.resource = new Resource(resource);
    this.camera = new Camera(this);
}
Display.TEXRES = 0x10;
Display.prototype.ensureSkin = function(skin) {
    var spriteMap = this.resource.getTexture("skin"+skin);
    if (spriteMap === undefined) {
        this.resource.addTexture({id:"skin" + skin, src:"img/game/smb_skin" + skin +".png", isSkin:true});
    }
}
Display.prototype.clear = function() {
    var _0x4d4eee = this.context;
    if (this.container.clientWidth !== this.canvas.width || this.container.clientHeight !== this.canvas.height) this.canvas.width = this.container.clientWidth, this.canvas.height = this.container.clientHeight;
    _0x4d4eee.clearRect(0x0, 0x0, this.canvas.width, this.canvas.height);
    _0x4d4eee.mozImageSmoothingEnabled = false;
    _0x4d4eee.webkitImageSmoothingEnabled = false;
    _0x4d4eee.msImageSmoothingEnabled = false;
    _0x4d4eee.imageSmoothingEnabled = false;
};
Display.prototype.draw = function() {
    var context = this.context;
    this.clear();
    context.fillStyle = this.game.getZone().color;
    context.fillRect(0x0, 0x0, this.canvas.width, this.canvas.height);
    if (this.resource.ready()) {
        this.game.getZone().dimensions();
        context.save();
        context.translate(parseInt(0.5 * this.canvas.width), parseInt(0.5 * this.canvas.height));
        context.scale(this.camera.scale, this.camera.scale);
        context.translate(parseInt(-this.camera.pos.x * Display.TEXRES), parseInt(-this.camera.pos.y * Display.TEXRES));
        var zone = this.game.getZone();
        for (var i=0; i<zone.layers.length; i++) {
            this.drawMap(zone.layers[i].data, false);
            if (zone.layers[i].z == 0) {
                this.drawObject();
                this.drawMap(zone.layers[i].data, true);
            }
        }
        this.drawEffect();
        context.restore();
        this.drawTouch();
        this.drawUI();
    } else {
        this.drawLoad();
    }
};
Display.prototype.drawMap = function(data, depth) {
    var context = this.context;
    var mapTexture = this.resource.getTexture("map");
    var zone = this.game.getZone();
    var dims = zone.dimensions();
    var screenWidth = this.canvas.width / Display.TEXRES * 0.55 / this.camera.scale;
    var screenLeft = Math.max(0x0, Math.min(dims.x, parseInt(this.camera.pos.x - screenWidth)));
    var screenRight = Math.max(0x0, Math.min(dims.x, parseInt(this.camera.pos.x + screenWidth)))
    for (var i = 0x0; i < data.length; i++) {
        var tileRow = data[i];
        for (var j = screenLeft; j < screenRight; j++) {
            var tile = td32.decode16(tileRow[j]);
            if (tile.depth === depth) {
                var sprite = 0;
                var ti = tile.index;
                if (ti in TILE_ANIMATION_FILTERED) {
                    var anim = TILE_ANIMATION_FILTERED[ti];
                    var delay = anim.delay;
                    var frame = Math.floor(this.game.frame % (anim.tiles.length*delay) / delay);
                    sprite = util.sprite.getSprite(mapTexture, anim.tiles[frame]);
                } else
                    sprite = util.sprite.getSprite(mapTexture, ti);
                var t = 0x0,
                    high = Math.max(0x0, tile.bump - 0x7);
                0x0 < high && (t = 0.22 * Math.sin((0x1 - (high - 0x2) / 0x8) * Math.PI));
                context.drawImage(mapTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, Display.TEXRES * j, Display.TEXRES * (i - t), Display.TEXRES, Display.TEXRES);
            }
        }
    }
};
Display.prototype.drawObject = function() {
    for (var context = this.context,
        zone = this.game.getZone(),
        zoneSize = zone.dimensions(),
        screenWidth = this.canvas.width / Display.TEXRES * 0.75 / this.camera.scale,
        leftEdge = Math.max(0x0, Math.min(zoneSize.x, parseInt(this.camera.pos.x - screenWidth))),
        rightEdge = Math.max(0x0, Math.min(zoneSize.x, parseInt(this.camera.pos.x + screenWidth))),
        spriteList = [],
        textList = [],
        i = 0x0;
        i < this.game.objects.length; i++) {
        var obj = this.game.objects[i];
        obj.level === zone.level &&
            obj.zone === zone.id &&
            obj.pid !== this.game.pid &&
            obj.pos.x >= leftEdge &&
            obj.pos.x <= rightEdge &&
            (obj.write && !app.settings.disableText && obj.write(textList),
            obj.draw && obj.draw(spriteList));
    }
    var player = this.game.getPlayer();
    if (player && player.level === zone.level && player.zone === zone.id) {
        player.draw(spriteList);
        player.write(textList);
    }
    var objTexture = this.resource.getTexture("obj");
    var skinTextures = {};
    skinTextures[0] = this.resource.getTexture("skin0");
    for (var i = 0x0; i < spriteList.length; i++) {
        var sprite = spriteList[i];
        var skin = sprite.skin;
        if (app.settings.forcemodel && sprite.pid !== undefined && sprite.pid != this.game.pid) skin = 0;
        if (skin && !(skin in skinTextures))
            skinTextures[skin] = this.resource.getTexture("skin"+skin);
        var currObjTexture = (skin != undefined) ? skinTextures[skin] : objTexture;
        if (skin && currObjTexture === undefined) currObjTexture = skinTextures[0];
        var ti = sprite.index; OBJ_ANIMATION
        if (ti in OBJ_ANIMATION_FILTERED) {
            var anim = OBJ_ANIMATION_FILTERED[ti];
            var delay = anim.delay;
            var frame = Math.floor(this.game.frame % (anim.tiles.length*delay) / delay);
            ti = anim.tiles[frame];
        }
        var texture = util.sprite.getSprite(currObjTexture, ti),
            reverse = !!sprite.reverse,
            upsideDown = false,
            contextSaved = false;

        switch (sprite.mode) {
            case 0x0:
                break;
            case 0x1:
                context.save();
                contextSaved = true;
                context.globalAlpha = 0.5;
                break;
            case 0x2:
                0x0 === parseInt(0.5 * this.game.frame) % 0x2 && (context.save(), contextSaved = true, context.globalCompositeOperation = "lighter");
                break;
            case 0x3:
                upsideDown = true;
                break;
            default:
                0xa0 <= sprite.mode && 0xc0 > sprite.mode && (context.save(), contextSaved = true, context.globalAlpha = parseFloat(sprite.mode - 0xa0) / 0x20);
        }
        if (reverse || upsideDown) context.save(), context.scale(reverse ? -0x1 : 0x1, upsideDown ? -0x1 : 0x1);
        var dispX = reverse ? -0x1 * Display.TEXRES * sprite.pos.x - Display.TEXRES : Display.TEXRES * sprite.pos.x;
        var dispY = upsideDown ? -0x1 * Display.TEXRES * (zoneSize.y - sprite.pos.y - 0x1) - Display.TEXRES : Display.TEXRES * (zoneSize.y - sprite.pos.y - 0x1);
        context.drawImage(currObjTexture, texture[0x0], texture[0x1], Display.TEXRES, Display.TEXRES, dispX, dispY, Display.TEXRES, Display.TEXRES);
        (reverse || upsideDown) && context.restore();
        contextSaved && context.restore();
    }
    for (var i = 0x0; i < textList.length; i++) {
        var txt = textList[i];
        var dispX = Display.TEXRES * txt.pos.x + 0.5 * Display.TEXRES;
        var dispY = Display.TEXRES * (zoneSize.y - txt.pos.y - 0x1) + 0.5 * Display.TEXRES;
        context.fillStyle = txt.color,
        context.font = txt.size * Display.TEXRES + "px SmbWeb",
        context.textAlign = "center",
        context.fillText(txt.text, dispX, dispY);
    }
};
Display.prototype.drawEffect = function() {
    var context = this.context,
        zone = this.game.getZone(),
        dims = zone.dimensions(),
        mapTexture = this.resource.getTexture("map"),
        objTexture = this.resource.getTexture("obj"),
        displayList = [],
        textList = [];
    zone.getEffects(displayList, textList);
    var zoneSize = zone.dimensions();
    for (var i = 0x0; i < displayList.length; i++) {
        var eff = displayList[i],
            tex;
        switch (eff.tex) {
            case "map":
                tex = mapTexture;
                break;
            case "obj":
                tex = objTexture;
        }
        var spr = util.sprite.getSprite(tex, eff.ind);
        spr[0x0] = parseInt(spr[0x0] + eff.sp.x * Display.TEXRES);
        spr[0x1] = parseInt(spr[0x1] + eff.sp.y * Display.TEXRES);
        context.save();
        context.translate(parseInt(Display.TEXRES * eff.ss.x * 0.5), parseInt(Display.TEXRES * eff.ss.y * 0.5));
        context.translate(Display.TEXRES * eff.pos.x, Display.TEXRES * (dims.y - eff.pos.y - 0x1));
        context.rotate(eff.rot);
        context.translate(-parseInt(Display.TEXRES * eff.ss.x * 0.5), -parseInt(Display.TEXRES * eff.ss.y * 0.5));
        context.drawImage(tex, spr[0x0], spr[0x1], parseInt(Display.TEXRES * eff.ss.x), parseInt(Display.TEXRES * eff.ss.y), 0x0, 0x0, parseInt(Display.TEXRES * eff.ss.x), parseInt(Display.TEXRES * eff.ss.y));
        context.restore();
    }
    for (var i = 0x0; i < textList.length; i++) {
        var txt = textList[i];
        var dispX = Display.TEXRES * txt.pos.x + 0.5 * Display.TEXRES;
        var dispY = Display.TEXRES * (zoneSize.y - txt.pos.y - 0x1) + 0.5 * Display.TEXRES;
        context.fillStyle = txt.color,
        context.font = txt.size * Display.TEXRES + "px SmbWeb",
        context.textAlign = "center",
        context.fillText(txt.text, dispX, dispY);
    }
};
HudButtonOffset = 0x18 + 0x8;

ingameGuiButtons = [    //right to left
    {"name": "music",         "iconIndex": [0xfb, 0xf9], "padMode": false, "settingName": "muteMusic", "click":function() {
            app.settings.muteMusic = !app.settings.muteMusic;
            if (app.audioElement !== undefined)
                if (app.settings.muteMusic)
                    app.audioElement.pause();
                else
                    app.audioElement.play();
            app.audio.saveSettings();
        }},
    {"name": "sound",         "iconIndex": [0xfc, 0xfa], "padMode": false, "settingName": "muteSound", 'click': function() {
            app.settings.muteSound = !app.settings.muteSound;
            app.audio.saveSettings();
        }},
    {"name": "text",          "iconIndex": [0xcb, 0xca], "padMode": false, "settingName": "disableText", 'click': function() {
            app.settings.disableText = !app.settings.disableText;
            Cookies.set("text", app.settings.disableText ? 0x1 : 0x0, {
                'expires': 0x1e
            });
        }},
    {"name": "forcemodel",    "iconIndex": [0xc8, 0xc9], "padMode": false, "settingName": "forcemodel", 'click': function() {
            app.settings.forcemodel = !app.settings.forcemodel;
            Cookies.set("forcemodel", app.settings.forcemodel ? 0x1 : 0x0, {
                'expires': 0x1e
            });
        }},
    {"name": "showSettings",  "iconIndex": [0xeb], "padMode": false, 'click': function() {
        app.settings.showSettings = !app.settings.showSettings;
        document.getElementById("settingsPanel").style.display = app.settings.showSettings?"":"none";
    }},
    {"name": "pad",           "iconIndex": [0xf8],       "padMode": true }
];

Display.prototype.drawUI = function() {
    var context = this.context,
        canvasWidth = this.canvas.width,
        canvasHeight = this.canvas.height,
        coinIconIndices = [0xf0, 0xf1, 0xf2, 0xf1],
        coinIconIndex = coinIconIndices[parseInt(this.game.frame / 0x3) % coinIconIndices.length],
        objTexture = this.resource.getTexture("obj"),
        skinTexture = this.game.skin != undefined ? this.resource.getTexture("skin" + this.game.skin) : objTexture;
    if (this.game.skin && skinTexture === undefined) skinTexture = this.resource.getTexture("skin0");
    var
        playerInfo = app.getPlayerInfo(this.game.pid),
        level;
    undefined !== this.game.levelWarpId ?
        level = this.game.world.getLevel(this.game.levelWarpId)
        : undefined === this.game.startDelta && (level = this.game.world.getInitialLevel());
    this.game.gameOver ? (
        context.fillStyle = "black",
        context.fillRect(0x0, 0x0, canvasWidth, canvasHeight),
        context.fillStyle = "white",
        context.font = "32px SmbWeb",
        context.textAlign = "center",
        context.fillText("GAME OVER", 0.5 * canvasWidth, 0.5 * canvasHeight))
    : level && (
        context.fillStyle = "black",
        context.fillRect(0x0, 0x0, canvasWidth, canvasHeight),
        context.fillStyle = "white",
        context.font = "32px SmbWeb",
        context.textAlign = "center",
        context.fillText(level.name, 0.5 * canvasWidth, 0.5 * canvasHeight),
        0x0 <= this.game.startTimer && (
            context.font = "24px SmbWeb",
            context.textAlign = "center",
            context.fillText("GAME STARTS IN: " + parseInt(this.game.startTimer / 0x1e), 0.5 * canvasWidth, 0.5 * canvasHeight + 0x28)
        )
    );
    var sprite, txt, txtWidth, vectoryTex, vicTexW, vicTexH, scale, vicAnim;
    if (0x3 >= this.game.victory && 0 !== this.game.victory) {
        victoryTex = this.resource.getTexture("ui");
        vicTexW = Math.min(victoryTex.width, canvasWidth);
        vicTexH = parseInt(vicTexW * 0.196);
        context.drawImage(victoryTex, 0.5 * canvasWidth - vicTexW * 0.5, 0, vicTexW, vicTexH);
        scale = vicTexH / victoryTex.height;
        if (this.game.victory == 1) {
            vicAnim = Math.max(195, Math.min(255, this.game.frame % 60 >= 30 ? 255 - parseInt(((this.game.frame % 30)*2)/10)*10 : 195 + parseInt(((this.game.frame % 30)*2)/10)*10));
            context.fillStyle = "rgba("+ vicAnim +","+ vicAnim +",0,1)";
        } else if ( this.game.victory == 2) {
            context.fillStyle = "silver";
        } else {
            context.fillStyle = "#B87333";
        }
        context.font = parseInt(64 * scale) + "px SmbWeb";
        context.textAlign = "left";
        context.shadowOffsetY = 4;
        context.shadowColor = "rgba(0,0,0,0.3)";
        context.fillText("#" + this.game.victory, 0.5 * canvasWidth - vicTexW * 0.5 + 40 * scale, 60 * scale + 0.5 * vicTexH - 32 * scale);
        context.shadowOffsetY = null;
        context.shadowColor = null;
        context.fillStyle = "white";
        context.font = "24px SmbWeb";
        context.textAlign = "center";
        context.fillText(this.game.world.getLevel(this.game.getPlayer().level).name + " MATCH STATS:", 0.8 * canvasWidth, 0.3 * canvasHeight);
        context.font = "16px SmbWeb";
        context.fillText(this.game.getGameTimer() + " ELAPSED TIME", 0.8 * canvasWidth, 0.3 * canvasHeight + 24);
        context.fillText(this.game.playersKilled + " PLAYERS KILLED", 0.8 * canvasWidth, 0.3 * canvasHeight + 28 + 16);
        context.fillText(this.game.coinsCollected + " COINS COLLECTED", 0.8 * canvasWidth, 0.3 * canvasHeight + 32 + 16 + 16);
    } else if (0x3 < this.game.victory) {
        context.fillStyle = "white";
        context.font = "32px SmbWeb";
        context.textAlign = "center";
        context.fillText("TOO BAD #" + this.game.victory, 0.5 * canvasWidth, 0x28);
    } else {
        context.fillStyle = "white";
        context.font = "24px SmbWeb";
        context.textAlign = "left";
        context.fillText(playerInfo ? playerInfo.displayName : DEFAULT_PLAYER_NAME, 0x8, 0x20);
        sprite = util.sprite.getSprite(objTexture, coinIconIndex);
        txt = 'x' + (0x9 >= this.game.coins ? '0' + this.game.coins : this.game.coins);
        context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, 0x4, 0x28, 0x18, 0x18);
        context.fillText(txt, 0x1e, 0x40);
        sprite = util.sprite.getSprite(skinTexture, 0xd);
        txtWidth = context.measureText(txt).width + 0x1e;
        context.drawImage(skinTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, 0x4 + txtWidth + 0x10, 0x28, 0x18, 0x18);
        context.fillText('x' + (0x9 >= this.game.lives ? '0' + this.game.lives : this.game.lives), 0x4 + txtWidth + 0x10 + 0x1a, 0x40);
        if (this.game instanceof Game) {
            //timer
            txt = this.game.getGameTimer(this.game.touchMode);
            txtWidth = context.measureText(txt).width;
            context.fillText(txt, (canvasWidth / 2) - (txtWidth / 2), 0x20);
            //players remaining
            txt = this.game.remain + (this.game.touchMode ? '' : " PLAYERS REMAIN");
            txtWidth = context.measureText(txt).width;
            context.fillText(txt, canvasWidth - txtWidth - 0x8, 0x20);
        } else if (this.game instanceof LobbyGame) {
            var pc = app.players.length;
            txt = this.game.touchMode ? pc :
                "P:"+pc+"/"+app.maxPlayers
                +" V:"+(pc < app.minPlayers?"<"+app.minPlayers+"P":Math.floor(100*app.votes/pc)+"/"+Math.floor(100*app.voteRateToStart)+"%")
                +" T:"+app.ticks;
            txtWidth = context.measureText(txt).width;
            context.fillText(txt, canvasWidth - txtWidth - 0x8, 0x20);
        }
        //hurry up
        if (app.hurryingUp) {
            var hurrySecLeft = Math.max(0,Math.floor((app.hurryUpTime-Date.now())/1000));
            if (hurrySecLeft%2 == 1) {
                txt = "HURRY UP!";
                txtWidth = context.measureText(txt).width;
                context.fillText(txt, (canvasWidth / 2) - (txtWidth / 2), 0x40);
            }
            txt = ""+hurrySecLeft;
            txtWidth = context.measureText(txt).width;
            context.fillText(txt, (canvasWidth / 2) - (txtWidth / 2), 0x60);
        }
        var off = 0;
        var drawIcon = function(index, onoff) {
            off += HudButtonOffset;
            sprite = util.sprite.getSprite(objTexture, index[onoff ? 0x1 : 0x0]);
            context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, canvasWidth - off, 0x28, 0x18, 0x18);
        }
        for (var icon of ingameGuiButtons) {
            if (!icon.padMode || this.game.input.pad.connected())
                drawIcon(icon.iconIndex, icon.settingName ? app.settings[icon.settingName] : false);
        }
    }
};
Display.prototype.drawTouch = function() {
    if (this.game.touchMode) {
        var _0x5a1070 = this.context,
            _0x15192f = this.canvas.width,
            _0x957a9e = this.canvas.height;
        this.game.thumbOrigin && (_0x5a1070.fillStyle = "rgba(0,0,0,0.5)", _0x5a1070.fillRect(this.game.thumbOrigin.x - 42.5, this.game.thumbOrigin.y - 42.5, 0x55, 0x55), _0x5a1070.fillStyle = "rgba(255,255,255,1.0)", _0x5a1070.fillRect(this.game.thumbPos.x - 32.5, this.game.thumbPos.y - 32.5, 0x41, 0x41));
        _0x5a1070.fillStyle = "rgba(0,0,0,0.5)";
        _0x5a1070.fillRect(_0x15192f - 0x55, _0x957a9e - 0x55, 0x55, 0x55);
        _0x5a1070.fillRect(_0x15192f - 0x55, _0x957a9e - 0xaa, 0x55, 0x55);
        _0x5a1070.fillStyle = this.game.touchRun ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.5)";
        _0x5a1070.fillRect(_0x15192f - 0x55, _0x957a9e - 0xff, 0x55, 0x55);
        _0x5a1070.fillStyle = "white";
        _0x5a1070.font = "65px SmbWeb";
        _0x5a1070.textAlign = "left";
        var _0x8a9ba4 = 'A',
            _0x8278d8 = _0x5a1070.measureText(_0x8a9ba4).width;
        _0x5a1070.fillText(_0x8a9ba4, _0x15192f - _0x8278d8 - 0xa, _0x957a9e - 0xa);
        _0x8a9ba4 = 'B';
        _0x8278d8 = _0x5a1070.measureText(_0x8a9ba4).width;
        _0x5a1070.fillText(_0x8a9ba4, _0x15192f - _0x8278d8 - 7.5, _0x957a9e - 0x55 - 0xa);
        _0x5a1070.fillStyle = this.game.touchRun ? "black" : "white";
        _0x8a9ba4 = 'R';
        _0x8278d8 = _0x5a1070.measureText(_0x8a9ba4).width;
        _0x5a1070.fillText(_0x8a9ba4, _0x15192f - _0x8278d8 - 7.5, _0x957a9e - 0xaa - 0xa);
    }
};
Display.prototype.drawLoad = function() {
    var _0x37f267 = this.context,
        _0x8de60e = this.canvas.width,
        _0x131b2f = this.canvas.height;
    _0x37f267.fillStyle = "black";
    _0x37f267.fillRect(0x0, 0x0, _0x8de60e, _0x131b2f);
    _0x37f267.font = "32px SmbWeb";
    _0x37f267.fillStyle = "white";
    _0x37f267.textAlign = "center";
    _0x37f267.fillText("Loading Resources...", 0.5 * _0x8de60e, 0.5 * _0x131b2f);
};
Display.prototype.destroy = function() {};
"use strict";

function World(game, data) {
    this.game = game;
    this.initial = data.initial;
    this.levels = [];
    for (var i = 0x0; i < data.world.length; i++) this.levels.push(new Level(game, data.world[i]));
}
World.prototype.step = function() {
    for (var _0x1351b3 = 0x0; _0x1351b3 < this.levels.length; _0x1351b3++) this.levels[_0x1351b3].step();
};
World.prototype.getInitialLevel = function() {
    return this.getLevel(this.initial);
};
World.prototype.getInitialZone = function() {
    var _0x2b561d = this.getLevel(this.initial);
    return this.getZone(_0x2b561d.id, _0x2b561d.initial);
};
World.prototype.getLevel = function(_0x444ae4) {
    for (var _0x46de22 = 0x0; _0x46de22 < this.levels.length; _0x46de22++) {
        var _0x8a2d62 = this.levels[_0x46de22];
        if (_0x8a2d62.id === _0x444ae4) return _0x8a2d62;
    }
};
World.prototype.getZone = function(_0x525a15, _0x36f94d) {
    for (var _0x4ae1ed = 0x0; _0x4ae1ed < this.levels.length; _0x4ae1ed++) {
        var _0x5282f6 = this.levels[_0x4ae1ed];
        if (_0x5282f6.id === _0x525a15)
            for (var _0x5102b4 = 0x0; _0x5102b4 < _0x5282f6.zones.length; _0x5102b4++) {
                var _0x1308b7 = _0x5282f6.zones[_0x5102b4];
                if (_0x1308b7.id === _0x36f94d) return _0x1308b7;
            }
    }
};

function Level(game, data) {
    this.game = game;
    this.id = data.id;
    this.name = data.name;
    this.initial = data.initial;
    this.zones = [];
    for (var i = 0x0; i < data.zone.length; i++) this.zones.push(new Zone(game, this.id, data.zone[i]));
}
Level.prototype.step = function() {
    for (var _0x5d732a = 0x0; _0x5d732a < this.zones.length; _0x5d732a++) this.zones[_0x5d732a].step();
};
Level.prototype.getInitial = function() {
    for (var _0x42edaf = 0x0; _0x42edaf < this.zones.length; _0x42edaf++) {
        var _0x2a836d = this.zones[_0x42edaf];
        if (_0x2a836d.id === this.initial) return _0x2a836d;
    }
};
Level.prototype.getWarp = function(_0x35fc72) {
    for (var _0x4295f4 = 0x0; _0x4295f4 < this.zones.length; _0x4295f4++)
        for (var _0x1ed606 = this.zones[_0x4295f4], _0x891844 = 0x0; _0x891844 < _0x1ed606.warp.length; _0x891844++) {
            var _0x5c0899 = _0x1ed606.warp[_0x891844];
            if (_0x5c0899.id === _0x35fc72) return {
                'level': this.id,
                'zone': _0x1ed606.id,
                'pos': shor2.decode(_0x5c0899.pos),
                'data': _0x5c0899.data
            };
        }
};

function Zone(game, level, input) {
    this.game = game;
    this.id = input.id;
    this.level = level;
    this.initial = input.initial;
    this.color = input.color;
    this.music = input.music ? input.music : '';
    if (this.music) app.audio.addMusic(this.music);
    this.fastMusic = this.music ? this.music.replace(".mp3", "_fast.mp3") : "";
    if (this.fastMusic) app.audio.addMusic(this.fastMusic);
    this.winmusic = input.winmusic ? input.winmusic : '';
    if (this.winmusic) app.audio.addMusic(this.winmusic);
    this.layers = input.layers || [];
    if (input.data) {
        for (var i=0; i<this.layers.length && this.layers[i].z < 0; i++);
        this.layers.splice(i, 0, {z:0, data:input.data});
    }
    this.mainLayer = undefined;
    for (var layer of this.layers) if (layer.z == 0) {
        this.mainLayer = layer;
        break;
    }
    this.obj = input.obj;
    this.warp = input.warp;
    this.bumped = [];
    this.effects = [];
    this.vines = [];
    this.sounds = [];
}
Zone.prototype.update = function(game, pid, level, zone, x, y, type) {
    var y2 = this.dimensions().y - 0x1 - y,
        td = td32.decode(this.mainLayer.data[y2][x]);
    td.definition.TRIGGER(game, pid, td, level, zone, x, y, type);
};
Zone.prototype.step = function() {
    for (var i = 0x0; i < this.bumped.length; i++) {
        var eff = this.bumped[i],
            tile = td32.decode(this.mainLayer.data[eff.y][eff.x]);
        0x0 < tile.bump ? this.mainLayer.data[eff.y][eff.x] = td32.bump(this.mainLayer.data[eff.y][eff.x], tile.bump - 0x1) : this.bumped.splice(i--, 0x1);
    }
    for (var i = 0x0; i < this.effects.length; i++) {
        var eff = this.effects[i];
        if (eff.garbage) {
            this.effects.splice(i--, 0x1);
        } else {
            eff.step();
        }
    }
    for (var i = 0x0; i < this.vines.length; i++) {
        var vine = this.vines[i];
        if (0x0 > vine.y) {
            this.vines.splice(i--, 0x1);
        } else {
            this.mainLayer.data[vine.y--][vine.x] = vine.td;
        }
    }
    for (var i = 0x0; i < this.sounds.length; i++) this.sounds[i].done() && this.sounds.splice(i--, 0x1);
    td32.update(this.game);
};
Zone.prototype.tile = function(x, y) {
    y = this.height() - 0x1 - y;
    return this.mainLayer.data[y][x];
};
Zone.prototype.bump = function(x, y) {
    var y2 = this.dimensions().y - 0x1 - y;
    this.mainLayer.data[y2][x] = td32.bump(this.mainLayer.data[y2][x], 0xf);
    this.bumped.push({
        'x': x,
        'y': y2
    });
    this.play(x, y, "bump.wav", 0.5, 0.04);
};
Zone.prototype.replace = function(x, y, rep) {
    y = this.height() - 0x1 - y;
    this.mainLayer.data[y][x] = rep;
};
Zone.prototype.grow = function(_0x34397d, _0x27a117, _0x5e09da) {
    _0x27a117 = this.dimensions().y - 0x1 - _0x27a117;
    this.vines.push({
        'x': _0x34397d,
        'y': _0x27a117,
        'td': _0x5e09da
    });
};
Zone.prototype.break = function(x, y, rep) {
    var y2 = this.dimensions().y - 0x1 - y,
        tile = td32.decode16(this.mainLayer.data[y2][x]);
    this.mainLayer.data[y2][x] = rep;
    this.effects.push(new _0x5296e0(vec2.make(x, y), tile.index));
    this.play(x, y, "break.wav", 1.5, 0.04);
};
Zone.prototype.coin = function(x, y) {
    this.dimensions();
    this.effects.push(new JumpingCoinEffect(vec2.make(x, y)));
};
Zone.prototype.play = function(x, y, path, gainValue, playbackRateDeviation) {
    if (this.game.getZone() === this) {
        var audio = app.audio.getSpatialAudio(path, gainValue, playbackRateDeviation, "effect");
        audio.play(vec2.make(x, y));
        this.sounds.push(audio);
    }
};
Zone.prototype.width = function() {
    return this.layers[0].data[0].length;
};
Zone.prototype.height = function() {
    return this.layers[0].data.length;
};
Zone.prototype.dimensions = function() {
    return vec2.make(this.width(), this.height());
};
Zone.prototype.getTile = function(pos) {
    var dims = this.dimensions();
    pos = vec2.copy(pos);
    pos.y = dims.y - pos.y - 0x1;
    return td32.decode(this.mainLayer.data[Math.max(0x0, Math.min(dims.y, Math.floor(pos.y)))][Math.max(0x0, Math.min(dims.x, Math.floor(pos.x)))]);
};
Zone.prototype.getTiles = function(pos, dim) {
    var dims = this.dimensions(),
        pos2 = vec2.copy(pos);
    pos2.y = dims.y - pos2.y;
    var left = parseInt(Math.max(Math.min(Math.floor(pos2.x) - 0x1, dims.x), 0x0));
    var right = parseInt(Math.max(Math.min(Math.ceil(pos2.x + dim.x) + 0x1, dims.x), 0x0));
    var y = parseInt(Math.max(Math.min(Math.floor(pos2.y - dim.y) - 0x1, dims.y), 0x0));
    var bottom = parseInt(Math.max(Math.min(Math.ceil(pos2.y) + 0x1, dims.y), 0x0));
    var result = [];
    for (; y < bottom; y++)
        for (var x = left; x < right; x++) {
            var tile = td32.decode(this.mainLayer.data[y][x]);
            tile.pos = vec2.make(x, dims.y - 0x1 - y);
            tile.ind = [y, x];
            result.push(tile);
        }
    return result;
};
Zone.prototype.getEffects = function(displayList, textList) {
    for (var i = 0x0; i < this.effects.length; i++) this.effects[i].draw(displayList, textList);
};
"use strict";

function Game(data) {
    document.getElementById("privLobby").style.display = "none";
    this.container = document.getElementById("game");
    this.canvas = document.getElementById("game-canvas");
    this.input = new Input(this, this.canvas);
    this.display = new Display(this, this.container, this.canvas, data.resource);
    this.display.ensureSkin(app.net.skin);
    if (!(this instanceof LobbyGame) && !(this instanceof JailGame) && app.charMusic && app.net.skin in SKIN_MUSIC_URL) {
        app.settings.muteMusic = true;
    }
    this.objects = [];
    this.team = this.pid = undefined;
    this.sounds = [];
    this.load(data);
    this.lastDraw = this.frame = 0x0;
    this.delta = util.time.now();
    this.buffer = [
        [],
        []
    ];
    this.out = [];
    this.ready = false;
    this.startTimer = -0x1;
    this.touchFull = this.touchMode = false;
    this.thumbPos = this.thumbOrigin = this.thumbId = undefined;
    this.touchRun = false;
    this.fillSS = this.cullSS = undefined;
    this.victory = this.coins = this.lives = this.remain = 0x0;
    this.victoryMusic = false;
    this.gameOverTimer = this.rate = 0x0;
    this.gameOver = false;
    var zoneSize = this.getZone().dimensions();
    this.display.camera.position(vec2.scale(zoneSize, 0.5));
    this.levelWarpTimer = 0x0;
    this.levelWarpId = undefined;
    this.gameoverReloading = false;
    this.padReturnToLobby = false;
    this.playersKilled = 0;
    this.coinsCollected = 0;
    this.gameTimerStopped = null;
    this.gameTimerStopTime = 0;
    this.poleTimes = 0;
    var that = this;
    this.frameReq = requestAnimFrameFunc.call(window, function() {
        that.draw();
    });
    this.loopReq = setTimeout(function() {
        that.loop();
    }, 2);
}

Game.TICK_RATE = 0x21;
Game.FDLC_TARGET = 0x3;
Game.FDLC_MAX = Game.FDLC_TARGET + 0x2;

Game.LEVEL_WARP_TIME = 0x64;
Game.GAME_OVER_TIME = 120;

Game.COINS_TO_LIFE = 0x1e;

Game.prototype.load = function(data) {
    if (this instanceof LobbyGame)
        app.menu.main.winElement.style.display = "";
    else
        app.menu.main.winElement.style.display = "none";
    app.menu.load.show();

    /* Load world data */
    this.world = new World(this, data);
    var reloadAudio = false;
    if(data.soundOverridePath) {
        app.audio.setCustomSoundPrefix(data.soundOverridePath);
        reloadAudio = true;
    }
    if(data.musicOverridePath) {
        app.audio.setCustomMusicPrefix(data.musicOverridePath);
        reloadAudio = true;
    }
    if(reloadAudio)
        app.audio.initWebAudio(app);

    var filterByTileset = function(dict, tileset) {
        return Object.keys(dict).filter(x=>dict[x].tilesets.length == 0 || dict[x].tilesets.includes(tileset))
            .reduce((res, key)=>(res[key]=dict[key], res), {}) ;
    };
    TILE_ANIMATION_FILTERED = filterByTileset(TILE_ANIMATION, data.resource.filter(x=>x.id=="map")[0].src);
    OBJ_ANIMATION_FILTERED = filterByTileset(OBJ_ANIMATION, data.resource.filter(x=>x.id=="obj")[0].src);

    /* Spawn objects from world obj params */
    for (var i=0;i<this.world.levels.length;i++) {
        var lvl = this.world.levels[i];
        for (var j=0;j<lvl.zones.length;j++) {
            var zn = lvl.zones[j];
            for (var k=0;k<zn.obj.length;k++) {
                var obj = zn.obj[k];
                var pgen = [obj.pos]; // obj.pos here is a shor2, we use it as the oid for this object
                for (var l=0;l<obj.param.length;l++) { pgen.push(obj.param[l]); }
                this.createObject(obj.type, lvl.id, zn.id, shor2.decode(obj.pos), pgen)
            }
        }
    }
};

/* Immediately sends a json packet */
Game.prototype.send = function(packet) {
    app.net.send(packet);
};

/* Returns false if the packet is not of a type that we know how to handle */
Game.prototype.handlePacket = function(packet) {
    /* Parse packet and apply */
    switch(packet.type) {
        /* Ingame Type Packets gxx */
        case "g12" : { this.updatePlayerList(packet); return true; }
        case "g13" : { this.gameStartTimer(packet); return true; }
        /* Input Type Packets ixx */
        default : { return false; }
    }
};

/* G12 */
Game.prototype.updatePlayerList = function(packet) {
    app.players = packet.players;
    app.enrichPlayers();
    if(undefined === this.pid) { return; }
    this.updateTeam();
    if (this.isDev) app.menu.game.updatePlayerList(app.players);
};

Game.prototype.getGameTimer = function(compact) {
    if (this.gameTimerStopped !== null) return this.gameTimerStopped;
    if (this.startDelta === undefined) return compact ? "00:00" : "00:00:000";
    var now = util.time.now() - this.poleTimes; // get the time now minus the poleTimes
    var diff = now - this.startDelta; // diff in seconds between now and start
    var m = Math.floor(diff / 60000); // get minutes value
    var s = Math.floor(diff / 1000) % 60; // get seconds value
    var ms = diff % 1000; // get milliseconds value
    if (m < 10) m = "0" + m; // add a leading zero if it's single digit
    if (s < 10) s = "0" + s; // add a leading zero if it's single digit
    if (ms < 10) ms = "00" + ms; // add two leadings zeros if it's single digit
    else if (ms < 100) ms = "0" + ms; // add a leading zero if it's double digit
    return m + ":" + s + (compact ? '' : (":" + ms));
}

Game.prototype.resumeGameTimer = function() {
    if (this.gameTimerStopped === null) return;
    this.gameTimerStopped = null;
    this.poleTimes += util.time.now() - this.gameTimerStopTime;
}

Game.prototype.stopGameTimer = function() {
    if (this.gameTimerStopped !== null) return;
    this.gameTimerStopped = this.getGameTimer();
    this.gameTimerStopTime = util.time.now();
}

/* G13 */
Game.prototype.gameStartTimer = function(packet) {
    if(this.startTimer < 0) { this.play("alert.wav",1.,0.); }
    if(packet.time > 0) { this.startTimer = packet.time; this.remain = app.players.length; }
    else { this.doStart(); }
};

Game.prototype.updateTeam = function() {
    var playerInfo = app.getPlayerInfo(this.pid);
    if(undefined === playerInfo) { return; }
    if (this.team = playerInfo.team)
        for (var i = 0x0; i < app.players.length; i++) {
            var player = app.players[i];
            if (player.id !== this.pid && (player.team === this.team || player.isDev)) {
                var ghost = this.getGhost(player.id);
                ghost && (ghost.name = player.displayName);
            }
        }
};

Game.prototype.handleBinary = function(data) {
    var de = NETX.decode(data);

    if(!this.ready) { this.doUpdate(de); return; }
    this.updatePacket(de);
};

Game.prototype.updatePacket = function(data) {
    this.buffer.push(data);
    while(this.buffer.length > Game.FDLC_MAX) {
        var d = this.buffer.shift();
        this.doUpdate(d);
    }
};

Game.prototype.doUpdate = function(datas) {
    for(var i=0;i<datas.length;i++) {
        var data = datas[i];
        switch(data.designation) {
            case 0x02 : { this.doNET002(data); break; }    //ASSIGN_PID
            case 0x10 : { this.doNET010(data); break; }    //CREATE_PLAYER_OBJECT
            case 0x11 : { this.doNET011(data); break; }    //KILL_PLAYER_OBJECT
            case 0x12 : { this.doNET012(data); break; }    //UPDATE_PLAYER_OBJECT
            case 0x13 : { this.doNET013(data); break; }    //PLAYER_OBJECT_EVENT
            case 0x17 : { this.doNET017(data); break; }    //PLAYER_KILL_EVENT
            case 0x18 : { this.doNET018(data); break; }    //PLAYER_RESULT_REQUEST
            case 0x20 : { this.doNET020(data); break; }    //OBJECT_EVENT_TRIGGER
            case 0x21 : { this.doNET021(data); break; }    //GET_COIN
            case 0x22 : { this.doNET022(data); break; }    //GET_COIN_LB
            case 0x30 : { this.doNET030(data); break; }    //TILE_EVENT_TRIGGER
        }
    }
};

/* ASSIGN_PID [0x02] */
Game.prototype.doNET002 = function(n) {
    this.pid = n.pid;
    this.skin = n.skin;
    this.isDev = n.isDev;
    this.ready = true;
    app.menu.game.show();
};

/* CREATE_PLAYER_OBJECT [0x10] */
Game.prototype.doNET010 = function(n) {
    if(n.pid === this.pid) { return; }
    if (this.getGhost(n.pid))
        return;
    var obj = this.createObject(PlayerObject.ID, n.level, n.zone, shor2.decode(n.pos), [n.pid, n.skin, n.isDev]);
    obj.setState(PlayerObject.SNAME.GHOST);
    if(n.isDev) obj.name = app.getPlayerInfo(n.pid).name;
    if (this.team) {
        var playerInfo = app.getPlayerInfo(n.pid);
        if (playerInfo && playerInfo.id !== this.pid && playerInfo.team === this.team) {
            var ghost = this.getGhost(playerInfo.id);
            if (ghost) ghost.name = playerInfo.displayName;
        }
    }
};

Game.prototype.doNET011 = function(n) {
    n.pid !== this.pid && ((n = this.getGhost(n.pid)) && n.kill(), this.remain = this.getRemain());
};

Game.prototype.doNET012 = function(data) {
    if (data.pid !== this.pid) {
        var ghost = this.getGhost(data.pid);
        if (ghost) ghost.update(data);
    }
};

Game.prototype.doNET013 = function(_0x3c0ee3) {
    _0x3c0ee3.pid !== this.pid && this.getGhost(_0x3c0ee3.pid).trigger(_0x3c0ee3.type);
};

Game.prototype.doNET017 = function(_0x17186e) {
    this.playersKilled++;
};

Game.prototype.doNET018 = function(data) {
    if (!(0x0 >= data.result)) {
        data.pid === this.pid ? this.rate = data.extra : 0x0 !== this.rate && data.result++;
        var ghost = this.getGhost(data.pid);
        if (ghost) {
            var txt = this.getText(ghost.level, ghost.zone, data.result.toString());
            if (txt) {
                var name = app.getPlayerInfo(data.pid).displayName;
                this.createObject(TextObject.ID, txt.level, txt.zone, vec2.add(txt.pos, vec2.make(0x0, -0x3)), [undefined, -0.1, 0.25, "#FFFFFF", name]);
            }
        }
        if (data.pid === this.pid) {
            var player = this.getPlayer();
            if (player) {
                player.axe(data.result);
                this.victory = data.result;
                var that = this;
                setTimeout(function() {
                    document.getElementById('return').style.display = "block";
                    that.padReturnToLobby = true;
                }, 3000);
            }
        }
    }
};

Game.prototype.doNET020 = function(data) {
    var isLocalPlayer = data.pid === this.pid;
    if (!(isLocalPlayer && 0xa0 > data.type)) {
        var obj = this.getObject(data.level, data.zone, data.oid);
        obj && obj.update(data.type);
    }
};

Game.prototype.doNET021 = function(data) {
    this.addCoin(data.type, false);
};

Game.prototype.doNET022 = function(data) {
    var pl = this.getPlayer();
    var zn = this.getZone(pl.level, pl.zone);
    zn.effects.push(new RisingLabelEffect(pl.pos, "coins: "+data.coins));
};

Game.prototype.doNET030 = function(data) {
    var isLocalPlayer = data.pid === this.pid;
    if (!isLocalPlayer)
        this.world.getZone(data.level, data.zone).update(this, data.pid, data.level, data.zone, data.pos.x, data.pos.y, data.type);
};

Game.prototype.doStart = function() {
    if (this.pid === undefined) return; //player ID not yet received
    this.startTimer = -0x1;
    this.startDelta = util.time.now();
    this.doSpawn();
};

Game.prototype.doDetermine = function() {
    var lastInput = this.input.pop();
    0x0 < lastInput.touch.length ? this.touchMode = true : 0x0 < lastInput.keyboard.length && (this.touchMode = false);
    this.touchMode ? this.doTouch(lastInput) : this.doInput(lastInput);
};

Game.prototype.doTouch = function(lastInput) {
    var _0x258db7 = this.input,
        _0x330893 = this.getPlayer();
    this.display.camera.scale = 0x2;
    if (!this.touchFull || window.innerHeight != screen.height) {
        var _0x597311 = document.documentElement;
        _0x597311.requestFullscreen ? document.body.requestFullscreen() : _0x597311.mozRequestFullScreen ? _0x597311.mozRequestFullScreen() : _0x597311.webkitRequestFullscreen ? _0x597311.webkitRequestFullscreen() : _0x597311.msRequestFullscreen && _0x597311.msRequestFullscreen();
        this.touchFull = true;
    }
    var game = this;
    var canvasWidth = this.display.canvas.width
    var canvasHeight = this.display.canvas.height;
    var touchAPressed = false;
    var touchBPressed = false;
    var off = 0;
    var triggers = [{
        'pos': vec2.make(canvasWidth - 0x55, canvasHeight - 0x55),
        'dim': vec2.make(0x55, 0x55),
        'press': function() {
            touchAPressed = true;
        }
    }, {
        'pos': vec2.make(canvasWidth - 0x55, canvasHeight - 0xaa),
        'dim': vec2.make(0x55, 0x55),
        'press': function() {
            touchBPressed = true;
        }
    }, {
        'pos': vec2.make(canvasWidth - 0x55, canvasHeight - 0xff),
        'dim': vec2.make(0x55, 0x55),
        'click': function() {
            game.touchRun = !game.touchRun;
        }
    }];
    for (_0x3308c9, _0x174be8 = 0x0; _0x174be8 < _0x258db7.touch.pos.length; _0x174be8++) {
        var _0x182f56 = _0x258db7.touch.pos[_0x174be8];
        if (this.thumbId === _0x182f56.id) _0x3308c9 = _0x182f56, this.thumbId = _0x182f56.id, this.thumbPos = _0x182f56;
        else
            for (_0x174be8 = 0x0; _0x174be8 < triggers.length; _0x174be8++) {
                var _0x287903 = triggers[_0x174be8];
                squar.inside(_0x182f56, _0x287903.pos, _0x287903.dim) && _0x287903.press && _0x287903.press();
            }
    }
    for (_0x174be8 = 0x0; _0x174be8 < lastInput.touch.length; _0x174be8++) {
        _0x182f56 = lastInput.touch[_0x174be8];
        _0x258db7 = false;
        for (_0x174be8 = 0x0; _0x174be8 < triggers.length; _0x174be8++)
            if (_0x287903 = triggers[_0x174be8], squar.inside(_0x182f56, _0x287903.pos, _0x287903.dim)) {
                _0x258db7 = true;
                _0x287903.click && _0x287903.click();
                break;
            } _0x3308c9 || _0x258db7 || (_0x3308c9 = _0x182f56, this.thumbId = _0x182f56.id, this.thumbPos = this.thumbOrigin = _0x182f56);
    }
    var _0x36041a;
    if (_0x3308c9) {
        var _0x52fc25 = Math.min(0x40, vec2.distance(this.thumbPos, this.thumbOrigin));
        var _0x3d0185 = vec2.normalize(vec2.subtract(this.thumbPos, this.thumbOrigin));
        _0x36041a = vec2.scale(_0x3d0185, _0x52fc25 / 0x40);
        this.thumbPos = vec2.add(this.thumbOrigin, vec2.scale(_0x3d0185, _0x52fc25));
    } else this.thumbPos = this.thumbOrigin = this.thumbId = undefined;
    _0x330893 && _0x3d0185 ? (_0x3d0185 = [0x0, 0x0], 0.33 < _0x36041a.x && _0x3d0185[0x0]++, -0.33 > _0x36041a.x && _0x3d0185[0x0]--, 0.33 < _0x36041a.y && _0x3d0185[0x1]--, -0.33 > _0x36041a.y && _0x3d0185[0x1]++, _0x330893.input(_0x3d0185, touchAPressed, this.touchRun ? !touchBPressed : touchBPressed)) : _0x330893 && _0x330893.input([0x0, 0x0], touchAPressed, this.touchRun ? !touchBPressed : touchBPressed);
};

Game.prototype.doInput = function(lastInput) {
    this.input.pad.update();
    var input = this.input,
        mouse = this.input.mouse,
        keys = this.input.keyboard.keys,
        pad = this.input.pad;
    this.inx27 = keys[0x1b];
    var player = this.getPlayer();
    if (player) {
        var abtnD = [0x0, 0x0];
        (keys[input.assignK.up] || pad.button(input.assignG.up) || -0.1 > pad.ax.y) && abtnD[0x1]++;
        (keys[input.assignK.down] || pad.button(input.assignG.down) || 0.1 < pad.ax.y) && abtnD[0x1]--;
        (keys[input.assignK.left] || pad.button(input.assignG.left) || -0.1 > pad.ax.x) && abtnD[0x0]--;
        (keys[input.assignK.right] || pad.button(input.assignG.right) || 0.1 < pad.ax.x) && abtnD[0x0]++;
        var abtnA = keys[input.assignK.a] || pad.button(input.assignG.a),
            abtnB = keys[input.assignK.b] || pad.button(input.assignG.b),
            abtnTA = keys[input.assignK.ta] || pad.button(input.assignG.ta);
        mouse.spin && this.display.camera.zoom(mouse.spin);
        if (this.padReturnToLobby && abtnA) {
            Cookies.set("go_to_lobby", "1");
            location.reload();
            this.padReturnToLobby = false;
        }
        player.input(abtnD, abtnA, abtnB, abtnTA);
        var game = this;
        var canvasWidth = this.display.canvas.width;
        for (var i = 0x0; i < lastInput.mouse.length; i++) {
            var mouse = lastInput.mouse[i];
            if (0x0 === mouse.btn) {
                var off = 0;
                for (var icon of ingameGuiButtons) {
                    if (!icon.padMode || this.input.pad.connected()) {
                        off += HudButtonOffset;
                        if (icon.click && squar.inside(mouse.pos, vec2.make(canvasWidth - (off), 0x28), vec2.make(0x18, 0x18))) icon.click()
                    }
                }
            }
        }
    }
};

Game.prototype.doStep = function() {
    var player = this.getPlayer();
    if (player && undefined !== this.levelWarpId && 0x0 < this.levelWarpTimer && 0x1 > --this.levelWarpTimer) {
        var initialLevel = this.world.getLevel(this.levelWarpId).getInitial();
        player.level = initialLevel.level;
        player.zone = initialLevel.id;
        player.pos = shor2.decode(initialLevel.initial);
        player.autoTarget = undefined;
        player.grounded = false;
        player.show();
        player.invuln();
        this.levelWarpId = undefined;
        this.resumeGameTimer();
    }
    player && this.cullSS && !vec2.equals(player.pos, this.cullSS) && this.out.push(NET015.encode());
    player && this.fillSS && this.fillSS !== player.fallSpeed && this.out.push(NET015.encode());
    for (var i = 0x0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        obj.step();
        obj.garbage && this.objects.splice(i--, 0x1);
    }
    this.cullSS = player ? vec2.copy(player.pos) : undefined;
    this.fillSS = player ? player.fallSpeed : undefined;
    var zone = this.getZone();
    player && !player.dead && this.display.camera.position(vec2.make(player.pos.x, 0.5 * zone.dimensions().y));
    this.world.step();
    if (app.hurryingUp && app.hurryUpTime <= Date.now() && 0>=this.levelWarpTimer) {
        app.hurryingUp = false;
        this.lives = 0;
        if (player) player.kill();
    }
    for (var i = 0x0; i < this.sounds.length; i++) this.sounds[i].done() && this.sounds.splice(i--, 0x1);
    this.doMusic();
    app.audio.update();
    if (undefined === this.startDelta || this.gameOver || player) {
        if (this.gameOver) {
            ++this.gameOverTimer;
            if (this.gameOverTimer > Game.GAME_OVER_TIME && !this.gameoverReloading && !(this.game instanceof JailGame)) {
                Cookies.set("go_to_lobby", "1");
                location.reload();
                this.gameoverReloading=true;
            }
        } else
            this.gameOverTimer = 0x0;
    } else if ((0x0 < this.lives || app.reborn) && 0x0 >= this.victory) {
        _0x504fb1 = this.getZone().level;
        this.doSpawn();
        this.levelWarp(_0x504fb1);
        this.lives--;
    } else if (0x2d < ++this.gameOverTimer && !(this instanceof JailGame)) {
        this.gameOver = true;
        this.gameOverTimer = 0x0;
    }
    this.lastDraw = this.frame;
    this.frame++;
};

Game.prototype.doSpawn = function() {
    if (!this.getPlayer()) {
        var zone = this.getZone(),
            initial = zone.initial;
        var obj = this.createObject(PlayerObject.ID, zone.level, zone.id, shor2.decode(initial), [this.pid, this.skin, this.isDev]);
        this.out.push(NET010.encode(zone.level, zone, initial));
        if (app.net.gameMode === 1 && !(this instanceof LobbyGame) && !(this instanceof JailGame)) {
            obj.tfm(0x2);
            obj.rate = 0x71;
        }
    }
    this.updateTeam();
};

Game.prototype.doMusic = function() {
    var player = this.getPlayer(),
        zone = this.getZone();
    if (this.gameOver) {
        app.audio.setMusic("gameover.mp3", false);
    } else if (player && player.dead)
        app.audio.setMusic("dead.mp3", false);
    else if (player && player.autoTarget && 0x0 >= this.victory)
        app.audio.setMusic(zone.winmusic || "level.mp3", false);
    else if (0x0 < this.victory && !this.victoryMusic) {
        app.audio.setMusic(zone.winmusic || "castle.mp3", false);
        this.victoryMusic = true;
    } else if (0x0 < this.victory && 0x4 > this.victory && this.victoryMusic && !app.audio.music.playing) {
        app.audio.setMusic("victory.mp3", false);
    } else if (app.hurryingUp) {
        if ((Date.now()-app.hurryUpStart) < 1000*app.audio.getAudioLength("hurry.mp3")) {
            app.audio.setMusic("hurry.mp3", false);
        } else {
            if ('' !== zone.fastMusic)
                app.audio.setMusic(zone.fastMusic, true);
            else
                app.audio.stopMusic();
        }
    } else if (player && 0x0 >= this.levelWarpTimer && undefined !== this.startDelta && !this.victoryMusic) {
        if ('' !== zone.music)
            app.audio.setMusic(zone.music, true);
        else
            app.audio.stopMusic();
    }
};

Game.prototype.doPush = function() {
    var _0x47ddfe = this.getPlayer();
    _0x47ddfe && !_0x47ddfe.dead && this.out.push(NET012.encode(_0x47ddfe.level, _0x47ddfe.zone, _0x47ddfe.pos, _0x47ddfe.sprite.ID, _0x47ddfe.reverse));
    _0x47ddfe = MERGE_BYTE(this.out);
    this.out = [];
    app.net.sendBinary(_0x47ddfe);
};

Game.prototype.createObject = function(id, level, zoneId, pos, extraArgs) {
    var args = [undefined, this, level, zoneId, pos];
    for (var i = 0x0; i < extraArgs.length; i++) args.push(extraArgs[i]);
    GameObject.OBJECT(id);
    var object = new(Function.prototype.bind.apply(GameObject.OBJECT(id), args))();
    this.objects.push(object);
    return object;
};

Game.prototype.getObject = function(level, zone, oid) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (undefined !== obj.oid && obj.level === level && obj.zone === zone && obj.oid === oid) return obj;
    }
};

Game.prototype.getFlag = function(level, zone) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (obj.level === level && obj.zone === zone && obj instanceof FlagpoleObject) return obj;
    }
};

Game.prototype.getAxe = function(level, zone) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (obj.level === level && obj.zone === zone && obj instanceof AxeObject) return obj;
    }
};

Game.prototype.getText = function(_0x684bab, _0x1988a8, _0x26b734) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (obj && obj.level === _0x684bab && obj.zone === _0x1988a8 && obj instanceof TextObject && obj.text === _0x26b734.toString()) return obj;
    }
};

Game.prototype.getPlatforms = function() {
    for (var _0x224f04 = this.getZone(), _0x4bb33b = [], _0x26e8ba = 0x0; _0x26e8ba < this.objects.length; _0x26e8ba++) {
        var _0x510c40 = this.objects[_0x26e8ba];
        (_0x510c40 instanceof _0x5bbb5e || _0x510c40 instanceof _0x4b6e2c) && _0x510c40.level === _0x224f04.level && _0x510c40.zone === _0x224f04.id && _0x4bb33b.push(_0x510c40);
    }
    return _0x4bb33b;
};

Game.prototype.getGhost = function(pid) {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (undefined !== obj.pid && obj.pid === pid) return obj;
    }
};

Game.prototype.getPlayer = function() {
    for (var i = 0; i < this.objects.length; i++) {
        var obj = this.objects[i];
        if (undefined !== obj.pid && obj.pid === this.pid) return obj;
    }
};

Game.prototype.getZone = function() {
    var _0x215d79 = this.getPlayer();
    return _0x215d79 ? this.lastZone = this.world.getZone(_0x215d79.level, _0x215d79.zone) : this.lastZone ? this.lastZone : this.world.getInitialZone();
};

Game.prototype.getRemain = function() {
    for (var result = 0x0, i = 0x0; i < app.players.length; i++) {
        var ghost = this.getGhost(app.players[i].id);
        ghost && !ghost.dead && result++;
    }
    return result;
};

Game.prototype.play = function(path, gainValue, playbackRateDeviation) {
    var audio = app.audio.getAudio(path, gainValue, playbackRateDeviation, "effect");
    audio.play();
    this.sounds.push(audio);
};

Game.prototype.levelWarp = function(_0x4fb258) {
    this.levelWarpId = _0x4fb258;
    this.levelWarpTimer = Game.LEVEL_WARP_TIME;
    this.getPlayer().hide();
};

Game.prototype.addCoin = function(jackpot, visual) {
    if (visual) {
        if (jackpot)
            this.play("gold.wav", 1, 0x0);
        else {
            this.play("coin.wav", 0.4, 0x0);
        }
    } else {
        this.coinsCollected += 1;
        this.coins = Math.min(0x63, this.coins + 0x1);
        this.coins >= Game.COINS_TO_LIFE && (this.lifeage(), this.coins = 0x0);
    }
};

Game.prototype.lifeage = function() {
    this.lives = Math.min(0x63, this.lives + 0x1);
    this.play("life.wav", 0x1, 0x0);
};

firstLoop = true;
Game.prototype.loop = function() {
    try {
        if (this.ready && undefined !== this.startDelta) {
            var time = util.time.now(),
                frm = parseInt((time - this.startDelta) / Game.TICK_RATE);
            if (frm > this.frame) {
                for (var cont = true; this.buffer.length > Game.FDLC_TARGET || cont && 0x0 < this.buffer.length;) {
                    var data = this.buffer.shift();
                    this.doUpdate(data);
                    cont = false;
                }
                for (this.doDetermine(); frm > this.frame;) this.doStep();
                this.doPush();
                this.delta = time;
            }
        }
    } catch (e) {
        console.error(e);
    }
    var game = this;
    this.loopReq = setTimeout(function() {
        game.loop();
    }, 0x2);
};

Game.prototype.draw = function() {
    this.lastDraw === this.frame && undefined !== this.startDelta || this.display.draw();
    var _0x19f533 = this;
    this.frameReq = requestAnimFrameFunc.call(window, function() {
        _0x19f533.draw();
    });
};

Game.prototype.destroy = function() {
    _0x2a6b41.call(window, this.frameReq);
    clearTimeout(this.loopReq);
    this.input.destroy();
    this.display.destroy();
};
"use strict";

function LobbyGame(_0x5a8616) {
    Game.call(this, _0x5a8616);
    this.lobbyTimer = 0x5a;
    if (app.audioElement !== undefined) {
        app.audioElement.setAttribute('src', app.charMusic && app.net.skin in SKIN_MUSIC_URL ? SKIN_MUSIC_URL[app.net.skin] : LOBBY_MUSIC_URL);
        app.audioElement.load;
        app.audioElement.volume = 0.18;
        app.audioElement.loop = true;
        if (!app.settings.muteMusic)
            app.audioElement.play();
    }
}
LobbyGame.prototype.load = Game.prototype.load;
LobbyGame.prototype.send = Game.prototype.send;
LobbyGame.prototype.handlePacket = Game.prototype.handlePacket;
LobbyGame.prototype.updatePlayerList = Game.prototype.updatePlayerList;
LobbyGame.prototype.gameStartTimer = function() {};
LobbyGame.prototype.updateTeam = Game.prototype.updateTeam;
LobbyGame.prototype.handleBinary = Game.prototype.handleBinary;
LobbyGame.prototype.updatePacket = Game.prototype.updatePacket;
LobbyGame.prototype.doUpdate = Game.prototype.doUpdate;
LobbyGame.prototype.doNET002 = Game.prototype.doNET002;
LobbyGame.prototype.doNET010 = Game.prototype.doNET010;
LobbyGame.prototype.doNET011 = Game.prototype.doNET011;
LobbyGame.prototype.doNET012 = Game.prototype.doNET012;
LobbyGame.prototype.doNET013 = Game.prototype.doNET013;
LobbyGame.prototype.doNET020 = Game.prototype.doNET020;
LobbyGame.prototype.doNET021 = Game.prototype.doNET021;
LobbyGame.prototype.doNET030 = Game.prototype.doNET030;
LobbyGame.prototype.doStart = Game.prototype.doStart;
LobbyGame.prototype.doDetermine = Game.prototype.doDetermine;
LobbyGame.prototype.doInput = Game.prototype.doInput;
LobbyGame.prototype.doTouch = Game.prototype.doTouch;
LobbyGame.prototype.doStep = function() {
    //this.doSpawn();
    Game.prototype.doStep.call(this);
};
LobbyGame.prototype.doSpawn = Game.prototype.doSpawn;
LobbyGame.prototype.doMusic = Game.prototype.doMusic;
LobbyGame.prototype.doPush = Game.prototype.doPush;
LobbyGame.prototype.createObject = Game.prototype.createObject;
LobbyGame.prototype.getObject = Game.prototype.getObject;
LobbyGame.prototype.getFlag = Game.prototype.getFlag;
LobbyGame.prototype.getPlatforms = Game.prototype.getPlatforms;
LobbyGame.prototype.getGhost = Game.prototype.getGhost;
LobbyGame.prototype.getPlayer = Game.prototype.getPlayer;
LobbyGame.prototype.getZone = Game.prototype.getZone;
LobbyGame.prototype.getRemain = Game.prototype.getRemain;
LobbyGame.prototype.play = Game.prototype.play;
LobbyGame.prototype.levelWarp = Game.prototype.levelWarp;
LobbyGame.prototype.addCoin = Game.prototype.addCoin;
LobbyGame.prototype.lifeage = Game.prototype.lifeage;
LobbyGame.prototype.loop = function() {
    0x0 < this.lobbyTimer ? this.lobbyTimer-- : undefined === this.startDelta && this.doStart();
    Game.prototype.loop.call(this);
};
LobbyGame.prototype.draw = Game.prototype.draw;
LobbyGame.prototype.destroy = function() {
    Game.prototype.destroy.call(this);
    if (app.audioElement !== undefined && !(app.charMusic && app.net.skin in SKIN_MUSIC_URL)) {
        app.audioElement.pause();
        app.audioElement.remove();
        app.audioElement = undefined;
    }
}
"use strict";

function JailGame(data) {
    Game.call(this, data);
    this.lobbyTimer = 0x5a;
}
JailGame.prototype.load = Game.prototype.load;
JailGame.prototype.send = Game.prototype.send;
JailGame.prototype.handlePacket = Game.prototype.handlePacket;
JailGame.prototype.updatePlayerList = Game.prototype.updatePlayerList;
JailGame.prototype.gameStartTimer = function() {};
JailGame.prototype.updateTeam = Game.prototype.updateTeam;
JailGame.prototype.handleBinary = Game.prototype.handleBinary;
JailGame.prototype.updatePacket = Game.prototype.updatePacket;
JailGame.prototype.doUpdate = Game.prototype.doUpdate;
JailGame.prototype.doNET002 = Game.prototype.doNET002;
JailGame.prototype.doNET010 = Game.prototype.doNET010;
JailGame.prototype.doNET011 = Game.prototype.doNET011;
JailGame.prototype.doNET012 = Game.prototype.doNET012;
JailGame.prototype.doNET013 = Game.prototype.doNET013;
JailGame.prototype.doNET020 = Game.prototype.doNET020;
JailGame.prototype.doNET021 = Game.prototype.doNET021;
JailGame.prototype.doNET030 = Game.prototype.doNET030;
JailGame.prototype.doStart = Game.prototype.doStart;
JailGame.prototype.doDetermine = Game.prototype.doDetermine;
JailGame.prototype.doInput = Game.prototype.doInput;
JailGame.prototype.doTouch = Game.prototype.doTouch;
JailGame.prototype.doStep = function() {
    Game.prototype.doStep.call(this);
};
JailGame.prototype.doSpawn = function() {};
JailGame.prototype.doMusic = Game.prototype.doMusic;
JailGame.prototype.doPush = Game.prototype.doPush;
JailGame.prototype.createObject = Game.prototype.createObject;
JailGame.prototype.getObject = Game.prototype.getObject;
JailGame.prototype.getFlag = Game.prototype.getFlag;
JailGame.prototype.getPlatforms = Game.prototype.getPlatforms;
JailGame.prototype.getGhost = Game.prototype.getGhost;
JailGame.prototype.getPlayer = Game.prototype.getPlayer;
JailGame.prototype.getZone = Game.prototype.getZone;
JailGame.prototype.getRemain = Game.prototype.getRemain;
JailGame.prototype.play = Game.prototype.play;
JailGame.prototype.levelWarp = Game.prototype.levelWarp;
JailGame.prototype.addCoin = Game.prototype.addCoin;
JailGame.prototype.lifeage = Game.prototype.lifeage;
JailGame.prototype.loop = function() {
    0x0 < this.lobbyTimer ? this.lobbyTimer-- : undefined === this.startDelta && this.doStart();
    Game.prototype.loop.call(this);
};
JailGame.prototype.draw = Game.prototype.draw;
JailGame.prototype.destroy = Game.prototype.destroy;
"use strict";

function App() {
    this.menu = new Menu();
    this.net = new Network();
    this.goToLobby = Cookies.get("go_to_lobby") === "1";
    if (this.goToLobby)
        Cookies.remove("go_to_lobby");
    this.session = Cookies.get("session");
    this.audioElement = document.createElement('audio');
    this.audioElement.setAttribute('src', MENU_MUSIC_URL);
    this.audioElement.load;
    this.audioElement.volume = 0.2;
    this.audioElement.loop = true;
    this.hurryingUp = false;
    this.hurryUpStart = null;
    this.hurryUpTime = null;
    this.god = false;
    this.reborn = false;
    this.fly = false;
    this.overrideSkinImg = "overrideSkinImg" in localStorage ? makeImageFromData(localStorage["overrideSkinImg"]) : undefined;
    this.overrideMapImg = "overrideMapImg" in localStorage ? makeImageFromData(localStorage["overrideMapImg"]) : undefined;
    this.overrideObjImg = "overrideObjImg" in localStorage ? makeImageFromData(localStorage["overrideObjImg"]) : undefined;
    this.autoMove = Cookies.get("autoMove") === "true";
    this.settings = {};
    this.settings.muteMusic = 0x1 === parseInt(Cookies.get("music"));
    this.settings.muteSound = 0x1 === parseInt(Cookies.get("sound"));
    this.settings.disableText = 0x1 === parseInt(Cookies.get("text"));
    this.settings.forcemodel = 0x1 === parseInt(Cookies.get("forcemodel"));
    this.settings.showSettings = false;
    this.audio = new Audio(this);
    this.players = [];
    if (0x1 !== parseInt(Cookies.get("music")))
        this.audioElement.play();
    this.statusUpdater = null;
    this.charMusic = Cookies.get("char_music") === "1";
}
App.prototype.init = function() {
    document.getElementById("log").style.display = "none";
    document.getElementById("link-patch").style.display = "";
    document.getElementById("main-number").style.display = "";
    if (!this.goToLobby)
        this.menu.disclaim.show();
    var that = this;
    setTimeout(function() {
        that.menu.load.show();

        if (that.goToLobby && that.session === undefined) {
            that.menu.main.updateStatsBar();
            var name = Cookies.get("name");
            var team = Cookies.get("team");
            var priv = Cookies.get("priv");
            var skin = Cookies.get("skin");
            var gm = Cookies.get("gamemode");
            that.join(name ? name : "", team ? team : "", priv === "true", skin ? parseInt(skin) : 0, gm ? parseInt(gm) : 0);
            return;
        }

        that.menu.main.show();
    }, this.goToLobby ? 100 : DISCLAIMER_SCREEN_TIMEOUT);
};
App.prototype.load = function(data) {
    if (this.game instanceof Game) this.menu.error.show("State error. Game already loaded.");
    else switch (this.game instanceof LobbyGame && this.game.destroy(), data.type) {
        case "game":
            this.game = new Game(data);
            break;
        case "lobby":
            this.game = new LobbyGame(data);
            break;
        case "jail":
        case "maintenance":
            this.game = new JailGame(data);
            break;
        default:
            this.menu.error.show("Critical error! Game file missing type!");
    }
};
App.prototype.ingame = function() {
    return !!this.game;
};
App.prototype.join = function(name, team, priv, skin, gm) {
    if (this.audioElement !== undefined)
        this.audioElement.pause();
    this.ingame() ? this.menu.error.show("An error occured while starting game...") : (this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.GUEST, name, team, priv, skin, gm]));
};
App.prototype.login = function(username, pw) {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.LOGIN, username, pw]);
};
App.prototype.logout = function(username, pw) {
    this.net.send({'type': "llo"});
};
App.prototype.requestCaptcha = function() {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.REQ_CAPTCHA]);
};
App.prototype.register = function(username, pw, captcha) {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.REGISTER, username, pw, captcha]);
};
App.prototype.resumeSession = function(session) {
    this.menu.load.show(), this.net.connect([Network.CONNECTTYPE.RESUME, session]);
};
App.prototype.close = function() {
    this.menu.load.show();
    this.ingame() && this.net.close();
    location.reload();
};
App.prototype.getPlayerInfo = function(id) {
    for (var i = 0; i < app.players.length; i++) {
        var obj = app.players[i];
        if (obj.id === id) return obj;
    }
};
App.prototype.hurryUp = function(data) {
    if (!this.hurryingUp) {
        this.hurryingUp = true;
        this.hurryUpStart = Date.now();
        this.hurryUpTime = this.hurryUpStart+data.time*1000;
    }
};
function getPlayerDisplayName(player) {
    return (player.isDev?"【𝐃𝐄𝐕】":"") + (player.isGuest?"【G】":"") + player.name;
}
App.prototype.enrichPlayers = function(id) {
    this.players.map(x=>{
        x.displayName = getPlayerDisplayName(x);
    });
};
App.prototype.tick = function(data) {
    this.ticks = data.ticks;
    this.votes = data.votes;
    this.minPlayers = data.minPlayers;
    this.maxPlayers = data.maxPlayers;
    this.voteRateToStart = data.voteRateToStart;
}

var app = new App();
print("loading game.min.js finished");
app.init();
