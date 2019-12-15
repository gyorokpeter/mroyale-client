const emptyTile = 30;
var util = {},
    vec2 = {
        'make': function(_0x3d014c, _0x1d7fe2) {
            return {
                'x': _0x3d014c,
                'y': _0x1d7fe2
            };
        },
        'random': function() {
            return vec2.normalize({
                'x': 0x2 * Math.random() - 0x1,
                'y': 0x2 * Math.random() - 0x1
            });
        },
        'copy': function(_0x14203e) {
            return {
                'x': _0x14203e.x,
                'y': _0x14203e.y
            };
        },
        'add': function(_0x1c650f, _0x5eeeea) {
            return {
                'x': _0x1c650f.x + _0x5eeeea.x,
                'y': _0x1c650f.y + _0x5eeeea.y
            };
        },
        'subtract': function(_0x20a59b, _0x11620a) {
            return {
                'x': _0x20a59b.x - _0x11620a.x,
                'y': _0x20a59b.y - _0x11620a.y
            };
        },
        'scale': function(_0x370828, _0x396da9) {
            return {
                'x': _0x370828.x * _0x396da9,
                'y': _0x370828.y * _0x396da9
            };
        },
        'multiply': function(_0x585c29, _0x355e18) {
            return {
                'x': _0x585c29.x * _0x355e18.x,
                'y': _0x585c29.y * _0x355e18.y
            };
        },
        'divide': function(_0x1fe531, _0x4a925e) {
            return {
                'x': _0x1fe531.x / _0x4a925e.x,
                'y': _0x1fe531.y / _0x4a925e.y
            };
        },
        'magnitude': function(_0x369808) {
            return Math.sqrt(_0x369808.x * _0x369808.x + _0x369808.y * _0x369808.y);
        },
        'normalize': function(_0x50d010) {
            var _0x37aa23 = vec2.magnitude(_0x50d010);
            return 0x0 !== _0x37aa23 ? {
                'x': _0x50d010.x / _0x37aa23,
                'y': _0x50d010.y / _0x37aa23
            } : {
                'x': 0x0,
                'y': 0x1
            };
        },
        'distance': function(_0x2649b1, _0x1112b0) {
            return vec2.magnitude(vec2.subtract(_0x2649b1, _0x1112b0));
        },
        'dot': function(_0x37903e, _0x50c390) {
            return _0x37903e.x * _0x50c390.x + _0x37903e.y * _0x50c390.y;
        },
        'inverse': function(_0x1133c6) {
            return {
                'x': -0x1 * _0x1133c6.x,
                'y': -0x1 * _0x1133c6.y
            };
        },
        'lerp': function(_0x1459e2, _0x20303e, _0x42cdec) {
            return vec2.add(vec2.scale(_0x1459e2, 0x1 - _0x42cdec), vec2.scale(_0x20303e, _0x42cdec));
        },
        'rotate': function(_0x2ae26c, _0x294ce2) {
            var _0x5b6a89 = Math.cos(_0x294ce2);
            _0x294ce2 = Math.sin(_0x294ce2);
            return {
                'x': _0x2ae26c.x * _0x5b6a89 + _0x2ae26c.y * _0x294ce2,
                'y': _0x2ae26c.x * -_0x294ce2 + _0x2ae26c.y * _0x5b6a89
            };
        },
        'angle': function(_0x3a9c38, _0x2ce336) {
            var _0x41d856 = vec2.dot(_0x3a9c38, _0x2ce336);
            return Math.acos(_0x41d856 / (Math.sqrt(_0x3a9c38.x * _0x3a9c38.x + _0x3a9c38.y * _0x3a9c38.y) * Math.sqrt(_0x2ce336.x * _0x2ce336.x + _0x2ce336.y * _0x2ce336.y)));
        },
        'average': function(_0x5f1e68) {
            for (var _0x2e6906 = vec2.create(), _0x36fdad = 0x0; _0x36fdad < _0x5f1e68.length; _0x36fdad++) _0x2e6906 = vec2.add(_0x2e6906, _0x5f1e68[_0x36fdad]);
            return vec2.scale(_0x2e6906, 0x1 / _0x5f1e68.length);
        },
        'chop': function(_0x390930) {
            return vec2.make(parseInt(_0x390930.x), parseInt(_0x390930.y));
        },
        'equals': function(_0x187e37, _0x1c8519) {
            return _0x187e37.x === _0x1c8519.x && _0x187e37.y === _0x1c8519.y;
        },
        'toArray': function(_0x1f8a37) {
            return [_0x1f8a37.x, _0x1f8a37.y];
        }
    },
    _0x45b3f2 = {};
_0x45b3f2.make = function(_0x4cbdf9, _0x37d7ec, _0x338335, _0x5b0896) {
    return {
        x: _0x4cbdf9,
        y: _0x37d7ec,
        z: _0x338335,
        w: _0x5b0896
    };
};
_0x45b3f2.copy = function(_0x4767d8) {
    return {
        x: _0x4767d8.x,
        y: _0x4767d8.y,
        z: _0x4767d8.z,
        w: _0x4767d8.w
    };
};
_0x45b3f2.add = function(_0xb83aab, _0x29867b) {
    return {
        x: _0xb83aab.x + _0x29867b.x,
        y: _0xb83aab.y + _0x29867b.y,
        z: _0xb83aab.z + _0x29867b.z,
        w: _0xb83aab.w + _0x29867b.w
    };
};
_0x45b3f2.subtract = function(_0x590e95, _0x54a9aa) {
    return {
        x: _0x590e95.x - _0x54a9aa.x,
        y: _0x590e95.y - _0x54a9aa.y,
        z: _0x590e95.z - _0x54a9aa.z,
        w: _0x590e95.w - _0x54a9aa.w
    };
};
_0x45b3f2.scale = function(_0x6868bb, _0x416b4b) {
    return {
        x: _0x6868bb.x * _0x416b4b,
        y: _0x6868bb.y * _0x416b4b,
        z: _0x6868bb.z * _0x416b4b,
        w: _0x6868bb.w * _0x416b4b
    };
};
_0x45b3f2.multiply = function(_0x1a17d5, _0x461af3) {
    return {
        x: _0x1a17d5.x * _0x461af3.x,
        y: _0x1a17d5.y * _0x461af3.y,
        z: _0x1a17d5.z * _0x461af3.z,
        w: _0x1a17d5.w * _0x461af3.w
    };
};
_0x45b3f2.lerp = function(_0x2b1dcd, _0x48d8e8, _0x4dfda5) {
    return _0x45b3f2.add(_0x45b3f2.scale(_0x2b1dcd, 0x1 - _0x4dfda5), _0x45b3f2.scale(_0x48d8e8, _0x4dfda5));
};
_0x45b3f2.toArray = function(_0x126a15) {
    return [_0x126a15.x, _0x126a15.y, _0x126a15.z, _0x126a15.w];
};
util.line2 = {};
util.intersection = {};
util.time = {};
util.sprite = {};
util.line2.normal = function(_0x19c06c) {
    return vec2.normalize({
        'x': _0x19c06c.b.y - _0x19c06c.a.y,
        'y': -0x1 * (_0x19c06c.b.x - _0x19c06c.a.x)
    });
};
util.intersection.pointRectangle = function(_0x360057, _0xed7ed0, _0x54adc4) {
    return _0xed7ed0.x <= _0x360057.x && _0xed7ed0.x + _0x54adc4.x > _0x360057.x && _0xed7ed0.y <= _0x360057.y && _0xed7ed0.y + _0x54adc4.y > _0x360057.y;
};
util.intersection.pointPoly = function(_0x2f892d, _0x471ea5) {
    var _0x3cdcbf, _0x29388e, _0x3d96b2 = false,
        _0x1ee368 = _0x471ea5.length;
    _0x3cdcbf = 0x0;
    for (_0x29388e = _0x1ee368 - 0x1; _0x3cdcbf < _0x1ee368; _0x29388e = _0x3cdcbf++) _0x471ea5[_0x3cdcbf].y > _0x2f892d.y !== _0x471ea5[_0x29388e].y > _0x2f892d.y && _0x2f892d.x < (_0x471ea5[_0x29388e].x - _0x471ea5[_0x3cdcbf].x) * (_0x2f892d.y - _0x471ea5[_0x3cdcbf].y) / (_0x471ea5[_0x29388e].y - _0x471ea5[_0x3cdcbf].y) + _0x471ea5[_0x3cdcbf].x && (_0x3d96b2 = !_0x3d96b2);
    return _0x3d96b2;
};
util.intersection.lineLine = function(_0x42a979, _0x2068d5) {
    var _0x4dfdb6, _0x399d1a, _0x1fe82c, _0x267be0;
    _0x4dfdb6 = _0x42a979.b.x - _0x42a979.a.x;
    _0x399d1a = _0x42a979.b.y - _0x42a979.a.y;
    _0x1fe82c = _0x2068d5.b.x - _0x2068d5.a.x;
    _0x267be0 = _0x2068d5.b.y - _0x2068d5.a.y;
    var _0x35f8fc;
    _0x35f8fc = (-_0x399d1a * (_0x42a979.a.x - _0x2068d5.a.x) + _0x4dfdb6 * (_0x42a979.a.y - _0x2068d5.a.y)) / (-_0x1fe82c * _0x399d1a + _0x4dfdb6 * _0x267be0);
    _0x1fe82c = (_0x1fe82c * (_0x42a979.a.y - _0x2068d5.a.y) - _0x267be0 * (_0x42a979.a.x - _0x2068d5.a.x)) / (-_0x1fe82c * _0x399d1a + _0x4dfdb6 * _0x267be0);
    if (0x0 <= _0x35f8fc && 0x1 >= _0x35f8fc && 0x0 <= _0x1fe82c && 0x1 >= _0x1fe82c) return _0x4dfdb6 = _0x42a979.a.x + _0x1fe82c * _0x4dfdb6, _0x399d1a = _0x42a979.a.y + _0x1fe82c * _0x399d1a, _0x399d1a = {}, _0x2068d5 = util.line2.normal(_0x2068d5), {
        'intersection': _0x399d1a,
        'normal': _0x2068d5,
        'distance': vec2.distance(_0x399d1a, _0x42a979.a)
    };
    _0x399d1a.x = _0x4dfdb6;
    _0x399d1a.y = _0x399d1a;
};
util.intersection.lineCircle = function(_0x36df20, _0xb6e416, _0x367e9c) {
    var _0x5d0be2 = util.intersection.lineNearestPoint(_0x36df20, _0xb6e416);
    if (vec2.equals(_0x5d0be2, _0xb6e416.a)) {
        var _0x20c3e1 = vec2.subtract(_0x36df20, _0xb6e416.a);
        _0x36df20 = vec2.magnitude(_0x20c3e1);
        if (!(_0x36df20 >= _0x367e9c)) return _0x367e9c = vec2.normalize(_0x20c3e1), {
            'intersection': _0xb6e416.a,
            'normal': _0x367e9c,
            'dist': _0x36df20
        };
    } else {
        if (vec2.equals(_0x5d0be2, _0xb6e416.b)) {
            _0x20c3e1 = vec2.subtract(_0x36df20, _0xb6e416.b);
            _0x36df20 = vec2.magnitude(_0x20c3e1);
            if (_0x36df20 >= _0x367e9c) return;
            _0x367e9c = vec2.normalize(_0x20c3e1);
            return {
                'intersection': _0xb6e416.b,
                'normal': _0x367e9c,
                'distance': _0x36df20
            };
        }
        _0x20c3e1 = vec2.subtract(_0x36df20, _0x5d0be2);
        _0x36df20 = vec2.magnitude(_0x20c3e1);
        if (!(_0x36df20 >= _0x367e9c)) return _0x367e9c = vec2.normalize(_0x20c3e1), {
            'intersection': _0x5d0be2,
            'normal': _0x367e9c,
            'distance': _0x36df20
        };
    }
};
util.intersection.polygonLine = function(_0x192c29, _0x4f9cca) {
    for (var _0x3cf204 = [], _0x13702d = 0x0; _0x13702d < _0x4f9cca.v.length; _0x13702d++) {
        var _0x505e71 = util.intersection.lineLine(_0x192c29, {
            'a': _0x4f9cca.v[_0x13702d],
            'b': _0x4f9cca.v[_0x13702d + 0x1 < _0x4f9cca.v.length ? _0x13702d + 0x1 : 0x0]
        });
        _0x505e71 && _0x3cf204.push(_0x505e71);
    }
    if (!(0x1 > _0x3cf204.length)) {
        _0x192c29 = _0x3cf204[0x0];
        for (_0x13702d = 0x1; _0x13702d < _0x3cf204.length; _0x13702d++) _0x3cf204[_0x13702d].distance < _0x192c29.distance && (_0x192c29 = _0x3cf204[_0x13702d]);
        return _0x192c29;
    }
};
util.intersection.polygonCircle = function(_0x471c85, _0x38516e, _0x4923c1) {
    for (var _0x366eb1 = [], _0x3b36da = 0x0; _0x3b36da < _0x38516e.v.length; _0x3b36da++) {
        var _0x18e26a = util.intersection.lineCircle(_0x471c85, {
            'a': _0x38516e.v[_0x3b36da],
            'b': _0x38516e.v[_0x3b36da + 0x1 < _0x38516e.v.length ? _0x3b36da + 0x1 : 0x0]
        }, _0x4923c1);
        _0x18e26a && _0x366eb1.push(_0x18e26a);
    }
    if (!(0x1 > _0x366eb1.length)) {
        _0x471c85 = _0x366eb1[0x0];
        for (_0x3b36da = 0x1; _0x3b36da < _0x366eb1.length; _0x3b36da++) _0x366eb1[_0x3b36da].distance < _0x471c85.distance && (_0x471c85 = _0x366eb1[_0x3b36da]);
        return _0x471c85;
    }
};
util.intersection.lineNearestPoint = function(_0x541ead, _0x5eed58) {
    var _0x41834c = vec2.subtract(_0x5eed58.b, _0x5eed58.a);
    _0x541ead = vec2.subtract(_0x541ead, _0x5eed58.a);
    _0x541ead = vec2.dot(_0x541ead, _0x41834c);
    if (0x0 >= _0x541ead) return _0x5eed58.a;
    var _0x1bd2d4 = vec2.dot(_0x41834c, _0x41834c);
    return _0x1bd2d4 <= _0x541ead ? _0x5eed58.b : vec2.add(_0x5eed58.a, vec2.scale(_0x41834c, _0x541ead / _0x1bd2d4));
};
util.time.now = function() {
    return Date.now();
};
util.sprite.getSprite = function(_0x109cd9, _0x2845f1) {
    var _0xfe9ed4 = _0x109cd9.width;
    _0x109cd9 = _0x109cd9.height;
    _0x2845f1 *= Display.TEXRES;
    var _0x2336ae = parseInt(Math.floor(_0x2845f1 / _0xfe9ed4) * Display.TEXRES);
    return _0x2336ae > _0x109cd9 ? [0x0, 0x0] : [_0x2845f1 % _0xfe9ed4, _0x2336ae];
};
var FrameReq = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(_0x670aa7) {
            window.setTimeout(_0x670aa7, 0x10);
        };
    }(),
    _0x37e7c3 = function() {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    }();
"use strict";
var shor2 = {},
    td32 = {};
td32.encode = function(_0x1bea2b, _0x40d6c6, _0x781c14, _0x2a1dcf, _0x112ed4) {
    return 0x0 | parseInt(_0x1bea2b) & 0x7ff | parseInt(_0x40d6c6) << 0xb & 0x7800 | (_0x781c14 ? 0x1 : 0x0) << 0xf & 0x8000 | parseInt(_0x2a1dcf) << 0x10 & 0xff0000 | parseInt(_0x112ed4) << 0x18 & 0xff000000;
};
td32.decode16 = function(_0xc5d058) {
    return {
        index: _0xc5d058 & 0x7ff,
        bump: _0xc5d058 >> 0xb & 0xf,
        depth: 0x1 === (_0xc5d058 >> 0xf & 0x1)
    };
};
td32.decode = function(_0x767ac) {
    var _0x125fe2 = _0x767ac >> 0x10 & 0xff;
    return {
        index: _0x767ac & 0x7ff,
        bump: _0x767ac >> 0xb & 0xf,
        depth: 0x1 === (_0x767ac >> 0xf & 0x1),
        definition: td32.TILE_PROPERTIES[_0x125fe2] ? td32.TILE_PROPERTIES[_0x125fe2] : td32.TILE_PROPERTIES[0x0],
        data: _0x767ac >> 0x18 & 0xff
    };
};
td32.bump = function(_0x353652, _0x55c714) {
    return _0x353652 & 0xffff87ff | _0x55c714 << 0xb & 0x7800;
};
td32.data = function(_0x5e729b, _0x2b0207) {
    return _0x5e729b & 0xffffff | _0x2b0207 << 0x18 & 0xff000000;
};
td32.asArray = function(_0x1070c1) {
    return [_0x1070c1 & 0x7ff, _0x1070c1 >> 0xb & 0xf, 0x1 === (_0x1070c1 >> 0xf & 0x1), _0x1070c1 >> 0x10 & 0xff, _0x1070c1 >> 0x18 & 0xff];
};
td32.TRIGGER = {};
td32.GEN_FUNC = {};
td32.TRIGGER.TYPE = {};
td32.TRIGGER.TYPE.TOUCH = 0x0;
td32.TRIGGER.TYPE.DOWN = 0x1;
td32.TRIGGER.TYPE.PUSH = 0x2;
td32.TRIGGER.TYPE.SMALL_BUMP = 0x10;
td32.TRIGGER.TYPE.BIG_BUMP = 0x11;
shor2.encode = function(_0x1b0afd, _0x425d73) {
    return 0x0 | parseInt(_0x1b0afd) & 0xffff | parseInt(_0x425d73) << 0x10 & 0xffff0000;
};
shor2.decode = function(_0x4f930f) {
    return vec2.make(_0x4f930f & 0xffff, _0x4f930f >> 0x10 & 0xffff);
};
shor2.asArray = function(_0x29052e) {
    return [_0x29052e & 0xffff, _0x29052e >> 0x10 & 0xffff];
};
td32.GEN_FUNC.BUMP = function(_0x63b26c, _0x1cb6ed, _0xfc6a2a, _0x346ffd, _0x644a9, _0x120c18, _0x57aa61, _0x4432f1) {
    _0x63b26c.world.getZone(_0x346ffd, _0x644a9).bump(_0x120c18, _0x57aa61);
    _0xfc6a2a = vec2.make(0x1, 0.15);
    _0x120c18 = vec2.make(_0x120c18, _0x57aa61 + 0x1);
    for (_0x57aa61 = 0x0; _0x57aa61 < _0x63b26c.objects.length; _0x57aa61++) _0x4432f1 = _0x63b26c.objects[_0x57aa61], !_0x4432f1.dead && _0x4432f1.level === _0x346ffd && _0x4432f1.zone === _0x644a9 && _0x4432f1.dim && _0x65f30e.intersection(_0x120c18, _0xfc6a2a, _0x4432f1.pos, _0x4432f1.dim) && (_0x4432f1 instanceof _0x5e070a ? _0x4432f1.bounce() : _0x4432f1.bounce ? _0x4432f1.bounce() : _0x4432f1.bonk ? _0x4432f1.bonk() : _0x4432f1 instanceof _0x2670fd && (_0x63b26c.pid === _0x1cb6ed && _0x4432f1.playerCollide(_0x63b26c.getPlayer()), _0x63b26c.world.getZone(_0x346ffd, _0x644a9).coin(_0x4432f1.pos.x, _0x4432f1.pos.y)));
};
td32.GEN_FUNC.BREAK = function(_0x1eab01, _0x45fd4f, _0x46e5bb, _0x1f1b15, _0x4b5224, _0x50e408, _0x3019f3, _0x53c7e1) {
    _0x1eab01.world.getZone(_0x1f1b15, _0x4b5224).break(_0x50e408, _0x3019f3, 0x1e);
    _0x46e5bb = vec2.make(0x1, 0.15);
    _0x50e408 = vec2.make(_0x50e408, _0x3019f3 + 0x1);
    for (_0x3019f3 = 0x0; _0x3019f3 < _0x1eab01.objects.length; _0x3019f3++) _0x53c7e1 = _0x1eab01.objects[_0x3019f3], !_0x53c7e1.dead && _0x53c7e1.level === _0x1f1b15 && _0x53c7e1.zone === _0x4b5224 && _0x53c7e1.dim && _0x65f30e.intersection(_0x50e408, _0x46e5bb, _0x53c7e1.pos, _0x53c7e1.dim) && (_0x53c7e1 instanceof _0x5e070a ? _0x53c7e1.bounce() : _0x53c7e1.bounce ? _0x53c7e1.bounce() : _0x53c7e1.bonk ? _0x53c7e1.bonk() : _0x53c7e1 instanceof _0x2670fd && (_0x1eab01.pid === _0x45fd4f && _0x53c7e1.playerCollide(_0x1eab01.getPlayer()), _0x1eab01.world.getZone(_0x1f1b15, _0x4b5224).coin(_0x53c7e1.pos.x, _0x53c7e1.pos.y)));
};
td32.TILE_PROPERTIES = {
    0: {
        'NAME': "AIR",
        'COLLIDE': false,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x254456, _0x1bf7c2, _0x562b63, _0x9c354e, _0x291106, _0x1f74e5, _0x168f82, _0x5dcea8) {}
    },
    1: {
        'NAME': "SOLID STANDARD",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x404d1b, _0x1a20d5, _0x590a66, _0x2f159d, _0x1bd1ae, _0x155132, _0x8b557e, _0x189821) {}
    },
    2: {
        'NAME': "SOLID BUMPABLE",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': false,
        'TRIGGER': function(_0x2961f4, _0x42b8d8, _0x27ab59, _0x3681de, _0x2fac9c, _0x1748fe, _0x3dabbc, _0x52baf5) {
            switch (_0x52baf5) {
                case 0x10:
                    _0x2961f4.pid === _0x42b8d8 && _0x2961f4.out.push(_0x433d2a.encode(_0x3681de, _0x2fac9c, shor2.encode(_0x1748fe, _0x3dabbc), _0x52baf5));
                    td32.GEN_FUNC.BUMP(_0x2961f4, _0x42b8d8, _0x27ab59, _0x3681de, _0x2fac9c, _0x1748fe, _0x3dabbc, _0x52baf5);
                    break;
                case 0x11:
                    _0x2961f4.pid === _0x42b8d8 && _0x2961f4.out.push(_0x433d2a.encode(_0x3681de, _0x2fac9c, shor2.encode(_0x1748fe, _0x3dabbc), _0x52baf5)), td32.GEN_FUNC.BUMP(_0x2961f4, _0x42b8d8, _0x27ab59, _0x3681de, _0x2fac9c, _0x1748fe, _0x3dabbc, _0x52baf5);
            }
        }
    },
    3: {
        'NAME': "SOLID BREAKABLE NORMAL",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': false,
        'TRIGGER': function(_0xc632e8, _0x3f470e, _0x2b792d, _0x473224, _0x8c71fa, _0x1d4c22, _0x5cafdb, _0xbb685e) {
            switch (_0xbb685e) {
                case 0x10:
                    _0xc632e8.pid === _0x3f470e && _0xc632e8.out.push(_0x433d2a.encode(_0x473224, _0x8c71fa, shor2.encode(_0x1d4c22, _0x5cafdb), _0xbb685e));
                    td32.GEN_FUNC.BUMP(_0xc632e8, _0x3f470e, _0x2b792d, _0x473224, _0x8c71fa, _0x1d4c22, _0x5cafdb, _0xbb685e);
                    break;
                case 0x11:
                    _0xc632e8.pid === _0x3f470e && _0xc632e8.out.push(_0x433d2a.encode(_0x473224, _0x8c71fa, shor2.encode(_0x1d4c22, _0x5cafdb), _0xbb685e)), td32.GEN_FUNC.BREAK(_0xc632e8, _0x3f470e, _0x2b792d, _0x473224, _0x8c71fa, _0x1d4c22, _0x5cafdb, _0xbb685e);
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
    17: {
        'NAME': "ITEM BLOCK STANDARD",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': false,
        'TRIGGER': function(_0x26df60, _0xf3e27e, _0x10a65c, _0x332bd9, _0x17bbc0, _0x16690e, _0x47c935, _0x463b16) {
            switch (_0x463b16) {
                case 0x10:
                    _0x26df60.pid === _0xf3e27e && _0x26df60.out.push(_0x433d2a.encode(_0x332bd9, _0x17bbc0, shor2.encode(_0x16690e, _0x47c935), _0x463b16));
                    var _0x505ac5 = 0x1801b;
                    _0x26df60.world.getZone(_0x332bd9, _0x17bbc0).replace(_0x16690e, _0x47c935, _0x505ac5);
                    _0x26df60.createObject(_0x10a65c.data, _0x332bd9, _0x17bbc0, vec2.make(_0x16690e, _0x47c935), [shor2.encode(_0x16690e, _0x47c935)]);
                    td32.GEN_FUNC.BUMP(_0x26df60, _0xf3e27e, _0x10a65c, _0x332bd9, _0x17bbc0, _0x16690e, _0x47c935, _0x463b16);
                    _0x26df60.world.getZone(_0x332bd9, _0x17bbc0).play(_0x16690e, _0x47c935, "sfx/item.wav", 0x1, 0.04);
                    break;
                case 0x11:
                    _0x26df60.pid === _0xf3e27e && _0x26df60.out.push(_0x433d2a.encode(_0x332bd9, _0x17bbc0, shor2.encode(_0x16690e, _0x47c935), _0x463b16)), _0x505ac5 = 0x1801b, _0x26df60.world.getZone(_0x332bd9, _0x17bbc0).replace(_0x16690e, _0x47c935, _0x505ac5), _0x26df60.createObject(_0x10a65c.data, _0x332bd9, _0x17bbc0, vec2.make(_0x16690e, _0x47c935), [shor2.encode(_0x16690e, _0x47c935)]), td32.GEN_FUNC.BUMP(_0x26df60, _0xf3e27e, _0x10a65c, _0x332bd9, _0x17bbc0, _0x16690e, _0x47c935, _0x463b16), _0x26df60.world.getZone(_0x332bd9, _0x17bbc0).play(_0x16690e, _0x47c935, "sfx/item.wav", 0x1, 0.04);
            }
        }
    },
    18: {
        'NAME': "COIN BLOCK STANDARD",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': false,
        'TRIGGER': function(_0x139691, _0x17f753, _0x2564c9, _0x229efe, _0x23e2a3, _0xb12557, _0x4027d5, _0x1b65bb) {
            switch (_0x1b65bb) {
                case 0x10:
                    _0x139691.pid === _0x17f753 && (_0x139691.coinage(), _0x139691.out.push(_0x433d2a.encode(_0x229efe, _0x23e2a3, shor2.encode(_0xb12557, _0x4027d5), _0x1b65bb)));
                    var _0x1b3684 = 0x1801b;
                    _0x139691.world.getZone(_0x229efe, _0x23e2a3).replace(_0xb12557, _0x4027d5, _0x1b3684);
                    _0x139691.world.getZone(_0x229efe, _0x23e2a3).coin(_0xb12557, _0x4027d5 + 0x1);
                    td32.GEN_FUNC.BUMP(_0x139691, _0x17f753, _0x2564c9, _0x229efe, _0x23e2a3, _0xb12557, _0x4027d5, _0x1b65bb);
                    break;
                case 0x11:
                    _0x139691.pid === _0x17f753 && (_0x139691.coinage(), _0x139691.out.push(_0x433d2a.encode(_0x229efe, _0x23e2a3, shor2.encode(_0xb12557, _0x4027d5), _0x1b65bb))), _0x1b3684 = 0x1801b, _0x139691.world.getZone(_0x229efe, _0x23e2a3).replace(_0xb12557, _0x4027d5, _0x1b3684), _0x139691.world.getZone(_0x229efe, _0x23e2a3).coin(_0xb12557, _0x4027d5 + 0x1), td32.GEN_FUNC.BUMP(_0x139691, _0x17f753, _0x2564c9, _0x229efe, _0x23e2a3, _0xb12557, _0x4027d5, _0x1b65bb);
            }
        }
    },
    19: {
        'NAME': "COIN BLOCK MULTI",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': false,
        'TRIGGER': function(_0x5a439a, _0x2da342, _0x46bed3, _0x1f26fb, _0xddd088, _0x186d0d, _0x53c17a, _0x5601df) {
            switch (_0x5601df) {
                case 0x10:
                    _0x5a439a.pid === _0x2da342 && (_0x5a439a.coinage(), _0x5a439a.out.push(_0x433d2a.encode(_0x1f26fb, _0xddd088, shor2.encode(_0x186d0d, _0x53c17a), _0x5601df)));
                    if (0x0 < _0x46bed3.data) var _0x1ea8cd = _0x5a439a.world.getZone(_0x1f26fb, _0xddd088).tile(_0x186d0d, _0x53c17a),
                        _0x1ea8cd = td32.data(_0x1ea8cd, _0x46bed3.data - 0x1);
                    else _0x1ea8cd = 0x1801b;
                    _0x5a439a.world.getZone(_0x1f26fb, _0xddd088).replace(_0x186d0d, _0x53c17a, _0x1ea8cd);
                    _0x5a439a.world.getZone(_0x1f26fb, _0xddd088).coin(_0x186d0d, _0x53c17a + 0x1);
                    td32.GEN_FUNC.BUMP(_0x5a439a, _0x2da342, _0x46bed3, _0x1f26fb, _0xddd088, _0x186d0d, _0x53c17a, _0x5601df);
                    break;
                case 0x11:
                    _0x5a439a.pid === _0x2da342 && (_0x5a439a.coinage(), _0x5a439a.out.push(_0x433d2a.encode(_0x1f26fb, _0xddd088, shor2.encode(_0x186d0d, _0x53c17a), _0x5601df))), 0x0 < _0x46bed3.data ? (_0x1ea8cd = _0x5a439a.world.getZone(_0x1f26fb, _0xddd088).tile(_0x186d0d, _0x53c17a), _0x1ea8cd = td32.data(_0x1ea8cd, _0x46bed3.data - 0x1)) : _0x1ea8cd = 0x1801b, _0x5a439a.world.getZone(_0x1f26fb, _0xddd088).replace(_0x186d0d, _0x53c17a, _0x1ea8cd), _0x5a439a.world.getZone(_0x1f26fb, _0xddd088).coin(_0x186d0d, _0x53c17a + 0x1), td32.GEN_FUNC.BUMP(_0x5a439a, _0x2da342, _0x46bed3, _0x1f26fb, _0xddd088, _0x186d0d, _0x53c17a, _0x5601df);
            }
        }
    },
    24: {
        'NAME': "VINE BLOCK",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': false,
        'TRIGGER': function(_0x5f3225, _0x70f986, _0x155953, _0x55d5b4, _0x55c359, _0x54b6f4, _0x4063a9, _0x22cbf8) {
            switch (_0x22cbf8) {
                case 0x10:
                    _0x5f3225.pid === _0x70f986 && _0x5f3225.out.push(_0x433d2a.encode(_0x55d5b4, _0x55c359, shor2.encode(_0x54b6f4, _0x4063a9), _0x22cbf8));
                    var _0x253462 = 0x1801b,
                        _0x46f3ef = td32.data(0xa50164, _0x155953.data);
                    _0x5f3225.world.getZone(_0x55d5b4, _0x55c359).replace(_0x54b6f4, _0x4063a9, _0x253462);
                    _0x5f3225.world.getZone(_0x55d5b4, _0x55c359).grow(_0x54b6f4, _0x4063a9 + 0x1, _0x46f3ef);
                    td32.GEN_FUNC.BUMP(_0x5f3225, _0x70f986, _0x155953, _0x55d5b4, _0x55c359, _0x54b6f4, _0x4063a9, _0x22cbf8);
                    _0x5f3225.world.getZone(_0x55d5b4, _0x55c359).play(_0x54b6f4, _0x4063a9, "sfx/vine.wav", 0x1, 0.04);
                    break;
                case 0x11:
                    _0x5f3225.pid === _0x70f986 && (_0x5f3225.coinage(), _0x5f3225.out.push(_0x433d2a.encode(_0x55d5b4, _0x55c359, shor2.encode(_0x54b6f4, _0x4063a9), _0x22cbf8))), _0x253462 = 0x1801b, _0x46f3ef = td32.data(0xa50164, _0x155953.data), _0x5f3225.world.getZone(_0x55d5b4, _0x55c359).replace(_0x54b6f4, _0x4063a9, _0x253462), _0x5f3225.world.getZone(_0x55d5b4, _0x55c359).grow(_0x54b6f4, _0x4063a9 + 0x1, _0x46f3ef), td32.GEN_FUNC.BUMP(_0x5f3225, _0x70f986, _0x155953, _0x55d5b4, _0x55c359, _0x54b6f4, _0x4063a9, _0x22cbf8), _0x5f3225.world.getZone(_0x55d5b4, _0x55c359).play(_0x54b6f4, _0x4063a9, "sfx/vine.wav", 0x1, 0.04);
            }
        }
    },
    21: {
        'NAME': "ITEM BLOCK INVISIBLE",
        'COLLIDE': true,
        'HIDDEN': true,
        'ASYNC': false,
        'TRIGGER': function(_0x560ba1, _0x4059fd, _0x297753, _0x19c1f1, _0x5123fd, _0xe0710d, _0x580fce, _0x560044) {
            switch (_0x560044) {
                case 0x10:
                    _0x560ba1.pid === _0x4059fd && _0x560ba1.out.push(_0x433d2a.encode(_0x19c1f1, _0x5123fd, shor2.encode(_0xe0710d, _0x580fce), _0x560044));
                    var _0x423dc6 = 0x1801b;
                    _0x560ba1.world.getZone(_0x19c1f1, _0x5123fd).replace(_0xe0710d, _0x580fce, _0x423dc6);
                    _0x560ba1.createObject(_0x297753.data, _0x19c1f1, _0x5123fd, vec2.make(_0xe0710d, _0x580fce), [shor2.encode(_0xe0710d, _0x580fce)]);
                    td32.GEN_FUNC.BUMP(_0x560ba1, _0x4059fd, _0x297753, _0x19c1f1, _0x5123fd, _0xe0710d, _0x580fce, _0x560044);
                    _0x560ba1.world.getZone(_0x19c1f1, _0x5123fd).play(_0xe0710d, _0x580fce, "sfx/item.wav", 0x1, 0.04);
                    break;
                case 0x11:
                    _0x560ba1.pid === _0x4059fd && _0x560ba1.out.push(_0x433d2a.encode(_0x19c1f1, _0x5123fd, shor2.encode(_0xe0710d, _0x580fce), _0x560044)), _0x423dc6 = 0x1801b, _0x560ba1.world.getZone(_0x19c1f1, _0x5123fd).replace(_0xe0710d, _0x580fce, _0x423dc6), _0x560ba1.createObject(_0x297753.data, _0x19c1f1, _0x5123fd, vec2.make(_0xe0710d, _0x580fce), [shor2.encode(_0xe0710d, _0x580fce)]), td32.GEN_FUNC.BUMP(_0x560ba1, _0x4059fd, _0x297753, _0x19c1f1, _0x5123fd, _0xe0710d, _0x580fce, _0x560044), _0x560ba1.world.getZone(_0x19c1f1, _0x5123fd).play(_0xe0710d, _0x580fce, "sfx/item.wav", 0x1, 0.04);
            }
        }
    },
    22: {
        'NAME': "COIN BLOCK INVISIBLE",
        'COLLIDE': true,
        'HIDDEN': true,
        'ASYNC': false,
        'TRIGGER': function(_0x8902cb, _0x356f39, _0x45b6e4, _0x2cea62, _0x880a71, _0x261bb8, _0x53fbac, _0x290fa8) {
            switch (_0x290fa8) {
                case 0x10:
                    _0x8902cb.pid === _0x356f39 && (_0x8902cb.coinage(), _0x8902cb.out.push(_0x433d2a.encode(_0x2cea62, _0x880a71, shor2.encode(_0x261bb8, _0x53fbac), _0x290fa8)));
                    var _0x2a627c = 0x1801b;
                    _0x8902cb.world.getZone(_0x2cea62, _0x880a71).replace(_0x261bb8, _0x53fbac, _0x2a627c);
                    _0x8902cb.world.getZone(_0x2cea62, _0x880a71).coin(_0x261bb8, _0x53fbac + 0x1);
                    td32.GEN_FUNC.BUMP(_0x8902cb, _0x356f39, _0x45b6e4, _0x2cea62, _0x880a71, _0x261bb8, _0x53fbac, _0x290fa8);
                    break;
                case 0x11:
                    _0x8902cb.pid === _0x356f39 && (_0x8902cb.coinage(), _0x8902cb.out.push(_0x433d2a.encode(_0x2cea62, _0x880a71, shor2.encode(_0x261bb8, _0x53fbac), _0x290fa8))), _0x2a627c = 0x1801b, _0x8902cb.world.getZone(_0x2cea62, _0x880a71).replace(_0x261bb8, _0x53fbac, _0x2a627c), _0x8902cb.world.getZone(_0x2cea62, _0x880a71).coin(_0x261bb8, _0x53fbac + 0x1), td32.GEN_FUNC.BUMP(_0x8902cb, _0x356f39, _0x45b6e4, _0x2cea62, _0x880a71, _0x261bb8, _0x53fbac, _0x290fa8);
            }
        }
    },
    81: {
        'NAME': "WARP TILE",
        'COLLIDE': false,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x5aa70b, _0x3197a6, _0x10db9d, _0x42730a, _0x10a927, _0x35c8fc, _0x233af4, _0x1ce7a1) {
            switch (_0x1ce7a1) {
                case 0x0:
                    _0x5aa70b.pid === _0x3197a6 && _0x5aa70b.getPlayer().warp(_0x10db9d.data);
            }
        }
    },
    82: {
        'NAME': "WARP PIPE SLOW",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x348d74, _0x35653b, _0x49e65a, _0x4ea8cb, _0x33d564, _0x200062, _0x100964, _0x5ef9e3) {
            switch (_0x5ef9e3) {
                case 0x1:
                    if (_0x348d74.pid === _0x35653b) {
                        _0x35653b = _0x348d74.getPlayer();
                        _0x5ef9e3 = _0x348d74.world.getZone(_0x4ea8cb, _0x33d564).getTile(vec2.make(_0x200062 - 0x1, _0x100964));
                        _0x348d74 = _0x348d74.world.getZone(_0x4ea8cb, _0x33d564).getTile(vec2.make(_0x200062 + 0x1, _0x100964));
                        if (_0x5ef9e3.definition !== this)
                            if (_0x348d74.definition === this) _0x200062 += 0x1;
                            else break;
                        0.45 >= Math.abs(_0x35653b.pos.x + 0.5 * _0x35653b.dim.x - _0x200062) && _0x35653b.pipe(0x2, _0x49e65a.data, 0x32);
                    }
            }
        }
    },
    83: {
        'NAME': "WARP PIPE RIGHT SLOW",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x43a4a8, _0x2ac62c, _0x5554b9, _0x48edad, _0x392f21, _0x4808c3, _0x4f6ee6, _0x5d4d6d) {
            switch (_0x5d4d6d) {
                case 0x2:
                    _0x43a4a8.pid === _0x2ac62c && _0x43a4a8.getPlayer().pipe(0x4, _0x5554b9.data, 0x32);
            }
        }
    },
    84: {
        'NAME': "WARP PIPE FAST",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x47196f, _0x335823, _0x3c8791, _0x2aed56, _0x5eb2a3, _0x58f24b, _0x1c3e9e, _0x25ca69) {
            switch (_0x25ca69) {
                case 0x1:
                    if (_0x47196f.pid === _0x335823) {
                        _0x335823 = _0x47196f.getPlayer();
                        _0x25ca69 = _0x47196f.world.getZone(_0x2aed56, _0x5eb2a3).getTile(vec2.make(_0x58f24b - 0x1, _0x1c3e9e));
                        _0x47196f = _0x47196f.world.getZone(_0x2aed56, _0x5eb2a3).getTile(vec2.make(_0x58f24b + 0x1, _0x1c3e9e));
                        if (_0x25ca69.definition !== this)
                            if (_0x47196f.definition === this) _0x58f24b += 0x1;
                            else break;
                        0.45 >= Math.abs(_0x335823.pos.x + 0.5 * _0x335823.dim.x - _0x58f24b) && _0x335823.pipe(0x2, _0x3c8791.data, 0x0);
                    }
            }
        }
    },
    85: {
        'NAME': "WARP PIPE RIGHT FAST",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0xe7e96c, _0x2d51e5, _0x10d9de, _0x120725, _0x134049, _0x370357, _0x503125, _0x4b0dd4) {
            switch (_0x4b0dd4) {
                case 0x2:
                    _0xe7e96c.pid === _0x2d51e5 && _0xe7e96c.getPlayer().pipe(0x4, _0x10d9de.data, 0x0);
            }
        }
    },
    86: {
        'NAME': "LEVEL END WARP",
        'COLLIDE': false,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x4a6ade, _0x4f1d9a, _0x54bd00, _0x1b5610, _0x5d3904, _0x3eee58, _0x393192, _0x5313a2) {
            switch (_0x5313a2) {
                case 0x0:
                    _0x4a6ade.pid === _0x4f1d9a && _0x4a6ade.levelWarp(_0x54bd00.data);
            }
        }
    },
    160: {
        'NAME': "FLAGPOLE",
        'COLLIDE': false,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x555e32, _0x41604c, _0x2e4320, _0x45dbc4, _0x881244, _0x5dcc09, _0x1d3aaf, _0x1ef5b8) {
            switch (_0x1ef5b8) {
                case 0x0:
                    _0x555e32.pid === _0x41604c && (_0x555e32 = _0x555e32.getPlayer(), _0x555e32.pos.x >= _0x5dcc09 && _0x555e32.pole(vec2.make(_0x5dcc09, _0x1d3aaf)));
            }
        }
    },
    165: {
        'NAME': "VINE",
        'COLLIDE': false,
        'HIDDEN': false,
        'ASYNC': true,
        'TRIGGER': function(_0x3725cd, _0x2eb28f, _0x2fb6c5, _0x515ad3, _0x1ba10c, _0x7b22b4, _0x5c73c5, _0x43d708) {
            switch (_0x43d708) {
                case 0x0:
                    _0x3725cd.pid === _0x2eb28f && (_0x3725cd = _0x3725cd.getPlayer(), _0x3725cd.pos.x >= _0x7b22b4 && _0x3725cd.pos.x <= _0x7b22b4 + 0x1 && _0x3725cd.vine(vec2.make(_0x7b22b4, _0x5c73c5), _0x2fb6c5.data));
            }
        }
    },
    240: {
        'NAME': "VOTE BLOCK",
        'COLLIDE': true,
        'HIDDEN': false,
        'ASYNC': false,
        'TRIGGER': function(_0x2853ca, _0x1d574e, _0x2bc9fa, _0x373a87, _0x403154, _0x31d845, _0x409a74, _0x16acb6) {
            switch (_0x16acb6) {
                case 0x10:
                    _0x2853ca.pid === _0x1d574e && _0x2853ca.send({
                        'type': "g50"
                    });
                    var _0x51c835 = 0x1801b;
                    _0x2853ca.world.getZone(_0x373a87, _0x403154).replace(_0x31d845, _0x409a74, _0x51c835);
                    _0x2853ca.createObject(_0xacf9c6.ID, _0x373a87, _0x403154, vec2.make(_0x31d845, _0x409a74 + 0x1), [shor2.encode(_0x31d845, _0x409a74)]);
                    td32.GEN_FUNC.BUMP(_0x2853ca, _0x1d574e, _0x2bc9fa, _0x373a87, _0x403154, _0x31d845, _0x409a74, _0x16acb6);
                    break;
                case 0x11:
                    _0x2853ca.pid === _0x1d574e && _0x2853ca.send({
                        'type': "g50"
                    }), _0x51c835 = 0x1801b, _0x2853ca.world.getZone(_0x373a87, _0x403154).replace(_0x31d845, _0x409a74, _0x51c835), _0x2853ca.createObject(_0xacf9c6.ID, _0x373a87, _0x403154, vec2.make(_0x31d845, _0x409a74 + 0x1), [shor2.encode(_0x31d845, _0x409a74)]), td32.GEN_FUNC.BUMP(_0x2853ca, _0x1d574e, _0x2bc9fa, _0x373a87, _0x403154, _0x31d845, _0x409a74, _0x16acb6);
            }
        }
    }
};
var _0x4215cd = {},
    _0x1667d4 = {
        'DESIGNATION': 0x2,
        'BYTES': 0x3,
        'decode': function(_0x27d4c6) {
            return {
                'designation': _0x1667d4.DESIGNATION,
                'pid': _0x27d4c6[0x1] & 0xff | _0x27d4c6[0x0] << 0x8 & 0xff00
            };
        }
    },
    _0x329ddf = {
        'DESIGNATION': 0x10,
        'BYTES': 0x9,
        'encode': function(_0x46f6ad, _0x8d101b, _0x6b9e7b) {
            return new Uint8Array([_0x329ddf.DESIGNATION, _0x46f6ad, _0x8d101b, _0x6b9e7b >> 0x18 & 0xff, _0x6b9e7b >> 0x10 & 0xff, _0x6b9e7b >> 0x8 & 0xff, _0x6b9e7b & 0xff]);
        },
        'decode': function(_0x375e47) {
            return {
                'designation': _0x329ddf.DESIGNATION,
                'pid': _0x375e47[0x1] & 0xff | _0x375e47[0x0] << 0x8 & 0xff00,
                'level': _0x375e47[0x2],
                'zone': _0x375e47[0x3],
                'pos': _0x375e47[0x7] & 0xff | _0x375e47[0x6] << 0x8 & 0xff00 | _0x375e47[0x5] << 0x10 & 0xff0000 | _0x375e47[0x4] << 0x18 & 0xff0000
            };
        }
    },
    _0x4e2942 = {
        'DESIGNATION': 0x11,
        'BYTES': 0x3,
        'encode': function() {
            return new Uint8Array([_0x4e2942.DESIGNATION]);
        },
        'decode': function(_0x43d252) {
            return {
                'designation': _0x4e2942.DESIGNATION,
                'pid': _0x43d252[0x1] & 0xff | _0x43d252[0x0] << 0x8 & 0xff00
            };
        }
    },
    _0x5a15c1 = {
        'DESIGNATION': 0x12,
        'BYTES': 0xf,
        'encode': function(_0x21a025, _0x4fadc5, _0x4e3ef5, _0x1f59eb, _0x30f932) {
            _0x4e3ef5 = new Float32Array([_0x4e3ef5.x, _0x4e3ef5.y]);
            _0x4e3ef5 = new Uint8Array(_0x4e3ef5.buffer);
            return new Uint8Array([_0x5a15c1.DESIGNATION, _0x21a025, _0x4fadc5, _0x4e3ef5[0x3], _0x4e3ef5[0x2], _0x4e3ef5[0x1], _0x4e3ef5[0x0], _0x4e3ef5[0x7], _0x4e3ef5[0x6], _0x4e3ef5[0x5], _0x4e3ef5[0x4], _0x1f59eb, _0x30f932]);
        },
        'decode': function(_0x51832a) {
            var _0xcaeddd = new Uint8Array([_0x51832a[0x4], _0x51832a[0x5], _0x51832a[0x6], _0x51832a[0x7]]),
                _0x3c2334 = new Uint8Array([_0x51832a[0x8], _0x51832a[0x9], _0x51832a[0xa], _0x51832a[0xb]]),
                _0xcaeddd = new DataView(_0xcaeddd.buffer),
                _0x3c2334 = new DataView(_0x3c2334.buffer);
            return {
                'designation': _0x5a15c1.DESIGNATION,
                'pid': _0x51832a[0x1] & 0xff | _0x51832a[0x0] << 0x8 & 0xff00,
                'level': _0x51832a[0x2],
                'zone': _0x51832a[0x3],
                'pos': vec2.make(_0xcaeddd.getFloat32(0x0), _0x3c2334.getFloat32(0x0)),
                'sprite': _0x51832a[0xc],
                'reverse': 0x0 !== _0x51832a[0xd]
            };
        }
    },
    _0x4b7736 = {
        'DESIGNATION': 0x13,
        'BYTES': 0x4,
        'encode': function(_0x5c7fa3) {
            return new Uint8Array([_0x4b7736.DESIGNATION, _0x5c7fa3]);
        },
        'decode': function(_0x4f1468) {
            return {
                'designation': _0x4b7736.DESIGNATION,
                'pid': _0x4f1468[0x1] & 0xff | _0x4f1468[0x0] << 0x8 & 0xff00,
                'type': _0x4f1468[0x2]
            };
        }
    },
    _0x217712 = {
        'DESIGNATION': 0x15,
        'BYTES': 0x3,
        'encode': function() {
            return new Uint8Array([_0x217712.DESIGNATION]);
        }
    },
    _0x30f5 = {
        'DESIGNATION': 0x17,
        'BYTES': 0x5,
        'encode': function(_0x173ee1) {
            return new Uint8Array([_0x30f5.DESIGNATION, _0x173ee1 >> 0x8 & 0xff, _0x173ee1 & 0xff]);
        },
        'decode': function(_0x532600) {
            return {
                'designation': _0x30f5.DESIGNATION,
                'pid': _0x532600[0x1] & 0xff | _0x532600[0x0] << 0x8 & 0xff00,
                'killer': _0x532600[0x3] & 0xff | _0x532600[0x2] << 0x8 & 0xff00
            };
        }
    },
    _0x33e31f = {
        'DESIGNATION': 0x18,
        'BYTES': 0x5,
        'encode': function() {
            return new Uint8Array([_0x33e31f.DESIGNATION]);
        },
        'decode': function(_0x10dc76) {
            return {
                'designation': _0x33e31f.DESIGNATION,
                'pid': _0x10dc76[0x1] & 0xff | _0x10dc76[0x0] << 0x8 & 0xff00,
                'result': _0x10dc76[0x2],
                'extra': _0x10dc76[0x3]
            };
        }
    },
    _0x7a3a7 = {
        'DESIGNATION': 0x19,
        'BYTES': 0x3,
        'encode': function() {
            return new Uint8Array([_0x7a3a7.DESIGNATION]);
        }
    },
    _0x4e8a16 = {
        'DESIGNATION': 0x20,
        'BYTES': 0xa,
        'encode': function(_0x2879f7, _0x13b8ed, _0x3e53ef, _0x24fbe9) {
            return new Uint8Array([_0x4e8a16.DESIGNATION, _0x2879f7, _0x13b8ed, _0x3e53ef >> 0x18 & 0xff, _0x3e53ef >> 0x10 & 0xff, _0x3e53ef >> 0x8 & 0xff, _0x3e53ef & 0xff, _0x24fbe9]);
        },
        'decode': function(_0x13d2dd) {
            return {
                'designation': _0x4e8a16.DESIGNATION,
                'pid': _0x13d2dd[0x1] & 0xff | _0x13d2dd[0x0] << 0x8 & 0xff00,
                'level': _0x13d2dd[0x2],
                'zone': _0x13d2dd[0x3],
                'oid': _0x13d2dd[0x7] & 0xff | _0x13d2dd[0x6] << 0x8 & 0xff00 | _0x13d2dd[0x5] << 0x10 & 0xff0000 | _0x13d2dd[0x4] << 0x18 & 0xff0000,
                'type': _0x13d2dd[0x8]
            };
        }
    },
    _0x433d2a = {
        'DESIGNATION': 0x30,
        'BYTES': 0xa,
        'encode': function(_0x31abdf, _0x205a42, _0x57709f, _0x40038c) {
            return new Uint8Array([_0x433d2a.DESIGNATION, _0x31abdf, _0x205a42, _0x57709f >> 0x18 & 0xff, _0x57709f >> 0x10 & 0xff, _0x57709f >> 0x8 & 0xff, _0x57709f & 0xff, _0x40038c]);
        },
        'decode': function(_0x3e313d) {
            return {
                'designation': _0x433d2a.DESIGNATION,
                'pid': _0x3e313d[0x1] & 0xff | _0x3e313d[0x0] << 0x8 & 0xff00,
                'level': _0x3e313d[0x2],
                'zone': _0x3e313d[0x3],
                'pos': shor2.decode(_0x3e313d[0x7] & 0xff | _0x3e313d[0x6] << 0x8 & 0xff00 | _0x3e313d[0x5] << 0x10 & 0xff0000 | _0x3e313d[0x4] << 0x18 & 0xff0000),
                'type': _0x3e313d[0x8]
            };
        }
    },
    _0x1f0440 = function(_0x3b5cbc) {
        for (var _0x42e484 = [], _0x16b07e = 0x0; _0x16b07e < _0x3b5cbc.length; _0x16b07e++)
            for (var _0x21ca33 = 0x0; _0x21ca33 < _0x3b5cbc[_0x16b07e].length; _0x21ca33++) _0x42e484.push(_0x3b5cbc[_0x16b07e][_0x21ca33]);
        return new Uint8Array(_0x42e484);
    };
_0x4215cd.decode = function(_0x71aed4) {
    for (var _0x145611 = [], _0x352800 = 0x0; _0x352800 < _0x71aed4.length;) switch (_0x71aed4.slice(_0x352800++, _0x352800)[0x0]) {
        case 0x2:
            _0x145611.push(_0x1667d4.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x1667d4.BYTES - 0x1)));
            break;
        case 0x10:
            _0x145611.push(_0x329ddf.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x329ddf.BYTES - 0x1)));
            break;
        case 0x11:
            _0x145611.push(_0x4e2942.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x4e2942.BYTES - 0x1)));
            break;
        case 0x12:
            _0x145611.push(_0x5a15c1.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x5a15c1.BYTES - 0x1)));
            break;
        case 0x13:
            _0x145611.push(_0x4b7736.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x4b7736.BYTES - 0x1)));
            break;
        case 0x17:
            _0x145611.push(_0x30f5.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x30f5.BYTES - 0x1)));
            break;
        case 0x18:
            _0x145611.push(_0x33e31f.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x33e31f.BYTES - 0x1)));
            break;
        case 0x20:
            _0x145611.push(_0x4e8a16.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x4e8a16.BYTES - 0x1)));
            break;
        case 0x30:
            _0x145611.push(_0x433d2a.decode(_0x71aed4.slice(_0x352800, _0x352800 += _0x433d2a.BYTES - 0x1)));
            break;
        default:
            return app && app.menu.warn.show("Error decoding binary data!"), _0x145611;
    }
    return _0x145611;
};
"use strict";
var _0x65f30e = {};
_0x65f30e.intersection = function(_0x29d23c, _0x5b63eb, _0x1bba1b, _0x196010) {
    return _0x1bba1b.x < _0x29d23c.x + _0x5b63eb.x && _0x1bba1b.x + _0x196010.x > _0x29d23c.x && _0x1bba1b.y < _0x29d23c.y + _0x5b63eb.y && _0x1bba1b.y + _0x196010.y > _0x29d23c.y;
};
_0x65f30e.inside = function(_0x797575, _0x296acc, _0x32e19d) {
    return _0x296acc.x < _0x797575.x && _0x296acc.x + _0x32e19d.x > _0x797575.x && _0x296acc.y < _0x797575.y && _0x296acc.y + _0x32e19d.y > _0x797575.y;
};
"use strict";

function File() {
    this.lastFileName = "untitled_map.json";
}
File.prototype.open = function(e) {
    var file = e.target.files[0x0];
    var that = this;
    this.lastFileName = file.name;
    if (file) {
        this.file = void 0x0;
        var reader = new FileReader();
        reader.onload = function(e) {
            that.file = e.target.result;
        };
        reader.readAsText(file);
        var f = function() {
            void 0x0 === that.file ? setTimeout(function() {
                f();
            }, 0x1f4) : that.parse(that.file);
        };
        f();
    }
};
File.prototype.new = function(){
    app.load({
        type:"game",
        shortname:"",
        mode:"royale",
        resource:[
            { id: "map", src: "img/game/smb_map.png" },
            { id: "obj", src: "img/game/smb_obj.png" }
        ],
        world:[{
            id:0,
            name:"New Level",
            initial:0,
            zone:[{
                id:0,
                initial: 0x30003,
                color:"#6B8CFF",
                layers:[{
                    z:0,
                    data:[
                        [0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002],
                        [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                        [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                        [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                        [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                        [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                        [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                        [0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002]
                    ]
                }],
                obj:[],
                warp:[]
            }]
        }],
        initial:0
    });
};
File.prototype.parse = function(data) {
    data = JSON.parse(data);
    app.load(data);
};
File.prototype.save = function(_0x2baf04) {
    var _0x4c2307 = this.lastFileName;
    _0x2baf04 = new Blob([_0x2baf04], {
        'type': "TEXT"
    });
    if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(_0x2baf04, _0x4c2307);
    else {
        var _0x56694e = document.createElement('a'),
            _0x46fe93 = URL.createObjectURL(_0x2baf04);
        _0x56694e.href = _0x46fe93;
        _0x56694e.download = _0x4c2307;
        document.body.appendChild(_0x56694e);
        _0x56694e.click();
        setTimeout(function() {
            document.body.removeChild(_0x56694e);
            window.URL.revokeObjectURL(_0x46fe93);
        }, 0x0);
    }
};
"use strict";

function Menu() {
    this.body = document.getElementById("body");
    this.warn = new _0x1ad34e();
    this.error = new _0x9e11c1();
    this.editor = document.getElementById("editor");
    this.bar = new _0x3f2a38();
    this.list = new ListPanel();
    this.tool = new ToolPanel();
    this.file = new _0x4f2076();
    this.body.style.display = "block";
}
Menu.prototype.fileMenu = function() {
    this.editor.style.display = "none";
    this.file.show();
};
Menu.prototype.editorMenu = function() {
    this.file.hide();
    this.bar.show();
    this.list.show();
    this.tool.show();
    this.editor.style.display = "flex";
};
"use strict";

function _0x1ad34e() {
    this.element = document.getElementById("warn");
    this.timeout = void 0x0;
    this.hide();
}
_0x1ad34e.prototype.show = function(_0x2db366) {
    this.element.innerHTML = "<img src='img/home/warn.png' class='warn-ico'/> " + _0x2db366;
    console.warn("##WARN## " + _0x2db366);
    this.timeout && clearTimeout(this.timeout);
    var _0x5db31f = this.element;
    this.timeout = setTimeout(function() {
        _0x5db31f.style.display = "none";
    }, 0x1388);
    this.element.style.display = "block";
};
_0x1ad34e.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function _0x9e11c1() {
    this.element = document.getElementById("error");
    this.error = document.getElementById("error-message");
    this.hide();
}
_0x9e11c1.prototype.show = function(_0x4560cc) {
    this.error.innerHTML = _0x4560cc;
    console.warn("##ERROR## " + _0x4560cc);
    this.element.style.display = "block";
};
_0x9e11c1.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function _0x4f2076() {
    this.element = document.getElementById("file");
    this.fileInput = document.getElementById("file-input");
    this.fileError = document.getElementById("file-error");
    this.fileInput.addEventListener("change", function(e) {
        app.file.open(e);
    }, false);
    document.getElementById("file-new").addEventListener("click", function(e) {
        app.file.new();
    });
}
_0x4f2076.prototype.error = function(_0x28d08b) {
    this.fileError.style.display = "block";
    this.fileError.innerHTML = _0x28d08b.stack.replace('\x0a', "<br/>");
};
_0x4f2076.prototype.show = function() {
    this.element.style.display = "block";
    this.fileError.style.display = "none";
};
_0x4f2076.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function _0x3f2a38() {
    this.element = document.getElementById("editor-top");
    this.btnWorld = document.getElementById("editor-top-world");
    this.btnLevel = document.getElementById("editor-top-level");
    this.btnZone = document.getElementById("editor-top-zone");
    this.btnTile = document.getElementById("editor-top-tile");
    this.btnObject = document.getElementById("editor-top-object");
    this.btnWarp = document.getElementById("editor-top-warp");
    this.btnCopy = document.getElementById("editor-top-copy");
    this.btnRep = document.getElementById("editor-top-rep");
    this.btnRef = document.getElementById("editor-top-ref");
    this.btnAbout = document.getElementById("editor-top-about");
    this.btnSave = document.getElementById("editor-top-save");
    this.btnWorld.onclick = function() {
        app.menu.tool.set("world");
    };
    this.btnLevel.onclick = function() {
        app.menu.tool.set("level");
    };
    this.btnZone.onclick = function() {
        app.menu.tool.set("zone");
    };
    this.btnTile.onclick = function() {
        app.menu.tool.set("tile");
    };
    this.btnObject.onclick = function() {
        app.menu.tool.set("object");
    };
    this.btnWarp.onclick = function() {
        app.menu.tool.set("warp");
    };
    this.btnCopy.onclick = function() {
        app.menu.tool.set("copy");
    };
    this.btnRep.onclick = function() {
        app.menu.tool.set("rep");
    };
    this.btnRef.onclick = function() {
        app.menu.tool.set("ref");
    };
    this.btnSave.onclick = function() {
        if (app.editor.tool) app.editor.tool.save();
        app.save();
    };
    this.btnAbout.onclick = function() {
        window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0", "_blank");
    };
}
_0x3f2a38.prototype.show = function() {
    this.element.style.display = "block";
};
_0x3f2a38.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function ListPanel() {
    this.element = document.getElementById("editor-list");
}
ListPanel.prototype.generate = function() {
    if (app.editor) {
        var world = app.editor.world;
        var txt = "<div class='list-header'>World</div>";
        for (var i = 0x0; i < world.levels.length; i++) {
            var level = world.levels[i];
            var txt = txt + ("<div class='list-world'>" + level.name + " :: " + level.id + "</div>");
            for (var j = 0x0; j < level.zones.length; j++) {
                var zone = level.zones[j];
                var itemId = "list-gen-" + i + '-' + j;
                txt = txt + ("<div class='list-zone' id='" + itemId + '\x27>' + zone.id + "</div>");
            }
        }
        this.element.innerHTML = txt;
        var container = document.createElement("div");
        container.setAttribute("id", "layer-list-container");
        var header = document.createElement("div");
        header.setAttribute("class", "list-header");
        header.innerText = "Layers";
        var layerList = document.createElement("div");
        layerList.setAttribute("id", "layer-list");
        container.appendChild(header);
        container.appendChild(layerList);
        this.element.appendChild(container);
        for (var i = 0x0; i < world.levels.length; i++) {
            var level = world.levels[i];
            for (var j = 0x0; j < level.zones.length; j++) {
                var zone = level.zones[j],
                    itemId = "list-gen-" + i + '-' + j,
                    item = document.getElementById(itemId),
                    that = this;
                item.lid = level.id;
                item.zid = zone.id;
                item.onclick = function() {
                    that.select(this.lid, this.zid);
                }
            }
        }
        if (app.editor.currentZone) this.updateLayerList();
    }
};
ListPanel.prototype.updateLayerList = function() {
    var zone = app.editor.currentZone;
    var layerList = document.getElementById("layer-list");
    layerList.innerHTML = "";
    var addLayerItem = function(layer) {
        var item = document.createElement("div");
        item.setAttribute("class", app.editor.currentLayer && layer.z == app.editor.currentLayer.z ? "list-zone-current" : "list-zone");
        item.innerText = ""+layer.z;
        item.layer = layer;
        item.onclick = function() {
            app.editor.setLayer(this.layer);
        }
        layerList.appendChild(item);
    }
    for (var i=0; i<zone.layers.length; i++) {
        addLayerItem(zone.layers[i]);
    }
}
ListPanel.prototype.select = function(levelId, zoneId) {
    var zone = app.editor.world.getZone(levelId, zoneId);
    app.editor && app.editor.setZone(zone);
};
ListPanel.prototype.show = function() {
    this.element.style.display = "block";
};
ListPanel.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function ToolPanel() {
    this.element = document.getElementById("editor-bottom");
}
ToolPanel.prototype.set = function(toolType) {
    app.editor && app.editor.setTool(toolType);
};
ToolPanel.prototype.show = function() {
    this.element.style.display = "block";
};
ToolPanel.prototype.hide = function() {
    this.element.style.display = "none";
};
"use strict";

function WorldTool(editor) {
    this.editor = editor;
    this.element = document.getElementById("editor-tool-world");
    this.valInitial = document.getElementById("editor-tool-world-initial");
    this.valShortname = document.getElementById("editor-tool-world-shortname");
    this.btnNew = document.getElementById("editor-tool-world-new");
    var _0x1bb7eb = this;
    this.btnApply = document.getElementById("editor-tool-world-apply");
    this.btnApply.onclick = function() {
        _0x1bb7eb.reload();
    };
    this.btnNew = document.getElementById("editor-tool-world-new");
    this.btnNew.onclick = function() {
        _0x1bb7eb.addLevel();
    };
}
WorldTool.prototype.addLevel = function() {
    for (var _0x51b0c1 = 0x0, _0x32d1a8 = 0x0; _0x32d1a8 < this.editor.world.levels.length; _0x32d1a8++) this.editor.world.levels[_0x32d1a8].id === _0x51b0c1 && (_0x51b0c1++, _0x32d1a8 = 0x0);
    this.editor.world.levels.push(new Level(this.game, {
        'id': _0x51b0c1,
        'initial': 0x0,
        'name': "new level",
        'zone': [{
            'id': 0x0,
            'initial': 0x30003,
            'color': "#6B8CFF",
            'data': [
                [0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002],
                [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
                [0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002]
            ],
            'obj': [],
            'warp': []
        }]
    }));
    app.menu.list.generate();
};
WorldTool.prototype.reload = function() {
    this.save();
    this.load();
};
WorldTool.prototype.load = function() {
    this.valInitial.value = this.editor.world.initial;
    this.valShortname.value = this.editor.world.shortname;
    this.element.style.display = "block";
};
WorldTool.prototype.save = function() {
    try {
        var initial = parseInt(this.valInitial.value);
        if (isNaN(initial)) throw "invalid value for initial level";
        this.editor.world.initial = initial;
        this.editor.world.shortname = this.valShortname.value;
    } catch (_0x5286c3) {
        app.menu.warn.show("Failed to parse value. Changes not applied.");
    }
    app.menu.list.generate();
};
WorldTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
};
"use strict";

function LevelTool(editor) {
    this.editor = editor;
    this.element = document.getElementById("editor-tool-level");
    this.valId = document.getElementById("editor-tool-level-id");
    this.valName = document.getElementById("editor-tool-level-name");
    this.valInitial = document.getElementById("editor-tool-level-initial");
    var that = this;
    this.btnApply = document.getElementById("editor-tool-level-apply");
    this.btnApply.onclick = function() {
        that.reload();
    };
    this.btnNew = document.getElementById("editor-tool-level-new");
    this.btnNew.onclick = function() {
        that.addZone();
    };
}
LevelTool.prototype.addZone = function() {
    for (var _0x21bd70 = 0x0, _0x5260d4 = 0x0; _0x5260d4 < this.level.zones.length; _0x5260d4++) this.level.zones[_0x5260d4].id === _0x21bd70 && (_0x21bd70++, _0x5260d4 = 0x0);
    this.level.zones.push(new Zone(this.game, this.level, {
        'id': _0x21bd70,
        'initial': 0x30003,
        'color': "#6B8CFF",
        'data': [
            [0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002],
            [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
            [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
            [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
            [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
            [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
            [0x18002, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x18002],
            [0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002, 0x18002]
        ],
        'obj': [],
        'warp': []
    }));
    app.menu.list.generate();
};
LevelTool.prototype.reload = function() {
    this.save();
    this.load();
};
LevelTool.prototype.load = function() {
    this.level = this.editor.world.getLevel(this.editor.currentZone.level);
    this.valId.value = this.level.id;
    this.valName.value = this.level.name;
    this.valInitial.value = this.level.initial;
    this.element.style.display = "block";
};
LevelTool.prototype.save = function() {
    try {
        var _0x368144 = parseInt(this.valId.value),
            _0x4c8518 = parseInt(this.valInitial.value);
        if (void 0x0 === _0x368144 || void 0x0 === _0x4c8518) throw "oof";
        this.level.id = _0x368144;
        this.level.initial = _0x4c8518;
        this.level.name = this.valName.value;
        for (_0x368144 = 0x0; _0x368144 < this.level.zones.length; _0x368144++) this.level.zones[_0x368144].level = this.level.id;
    } catch (_0x382533) {
        app.menu.warn.show("Failed to parse value. Changes not applied.");
    }
    app.menu.list.generate();
};
LevelTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
};
"use strict";

function ZoneTool(editor) {
    this.editor = editor;
    this.element = document.getElementById("editor-tool-zone");
    this.valId = document.getElementById("editor-tool-zone-id");
    this.valInitial = document.getElementById("editor-tool-zone-initial");
    this.valColor = document.getElementById("editor-tool-zone-color");
    this.valMusic = document.getElementById("editor-tool-zone-music");
    this.valWinMusic = document.getElementById("editor-tool-zone-winmusic");
    this.valWidth = document.getElementById("editor-tool-zone-width");
    this.valHeight = document.getElementById("editor-tool-zone-height");
    var that = this;
    this.btnApply = document.getElementById("editor-tool-zone-apply");
    this.btnApply.onclick = function() {
        that.reload();
    };
    this.btnSize = document.getElementById("editor-tool-zone-resize");
    this.btnSize.onclick = function() {
        that.resize();
    };
    this.btnShiftX = document.getElementById("editor-tool-zone-shiftx");
    this.btnShiftX.onclick = function() {
        that.shiftX();
    };
    this.btnUnshiftX = document.getElementById("editor-tool-zone-unshiftx");
    this.btnUnshiftX.onclick = function() {
        that.unshiftX();
    };
    this.btnShiftY = document.getElementById("editor-tool-zone-shifty");
    this.btnShiftY.onclick = function() {
        that.shiftY();
    };
    this.btnUnshiftY = document.getElementById("editor-tool-zone-unshifty");
    this.btnUnshiftY.onclick = function() {
        that.unshiftY();
    };
    document.getElementById("editor-tool-zone-addlayer").onclick = function() {
        that.addLayer();
    }
    document.getElementById("editor-tool-zone-dellayer").onclick = function() {
        that.deleteLayer();
    }
}
ZoneTool.prototype.addLayer = function() {
    var z = parseInt(window.prompt("Z (negative=background, positive=foreground)"));
    if (z === 0) return alert("must not be zero");
    if (!z) return alert("invalid value");
    if (!this.zone.layers) this.zone.layers = [];
    var i=0;
    for (; i<this.zone.layers.length; ++i) {
        if (this.zone.layers[i].z == z) return alert("there is already a layer with the Z value "+z);
        if (this.zone.layers[i].z > z) break;
    }
    var layer = {"z":z};
    var dims = this.zone.dimensions();
    layer.data = Array(dims.y).fill().map(()=>Array(dims.x).fill(30));
    this.zone.layers.splice(i,0,layer);
    app.menu.list.updateLayerList();
    app.editor.setLayer(layer);
}
ZoneTool.prototype.deleteLayer = function() {
    var z = app.editor.currentLayer;
    if (z == 0) return alert("can't delete the primary layer");
    if (!z) return alert("no layer selected?!");
    var i=0;
    for(; i<this.zone.layers.length; ++i) {
        if (this.zone.layers[i].z == z) break;
    }
    if (i == this.zone.layers.length) return alert("non-existing layer selected?!");
    if(!window.confirm("really delete layer "+z+"?")) return;
    this.zone.layers.splice(i,1)
    app.editor.setLayer(app.editor.zone.getLayer(0));
    app.menu.list.updateLayerList();
};
ZoneTool.prototype.resize = function() {
    var newWidth = parseInt(this.valWidth.value);
    if (!newWidth || newWidth <= 0) return alert("width must be greater than 0");
    var newHeight = parseInt(this.valHeight.value);
    if (!newHeight || newHeight <= 0) return alert("height must be greater than 0");
    for (var layer of this.zone.layers) {
        var oldData = layer.data;
        var oldWidth = oldData[0x0].length;
        var oldHeight = oldData.length;
        var newData = [];
        for (i = 0x0; i < newHeight; i++) {
            newData.push([]);
            for (var j = 0x0; j < newWidth; j++)
                newData[i][j] = i < oldHeight && j < oldWidth ? oldData[i][j] : emptyTile;
        }
        layer.data = newData;
    }
};
ZoneTool.prototype.shiftX = function() {
    var obj = this.zone.obj;
    var warp = this.zone.warp;
    for (var layer of this.zone.layers) {
        var zoneData = layer.data;
        for (i = 0x0; i < zoneData.length; i++) zoneData[i].shift();
    }
    for (i = 0x0; i < obj.length; i++) {
        var pos = shor2.decode(obj[i].pos);
        pos.x--; 
        obj[i].pos = shor2.encode(pos.x, pos.y);
    }
    for (i = 0x0; i < warp.length; i++) {
        pos = shor2.decode(warp[i].pos);
        pos.x--;
        warp[i].pos = shor2.encode(pos.x, pos.y);
    }
};
ZoneTool.prototype.unshiftX = function() {
    var obj = this.zone.obj;
    var warp = this.zone.warp;
    for (var layer of this.zone.layers) {
        var zoneData = layer.data;
        for (i = 0x0; i < zoneData.length; i++) zoneData[i].unshift(emptyTile);
    }
    for (i = 0x0; i < obj.length; i++) {
        var pos = shor2.decode(obj[i].pos);
        pos.x++;
        obj[i].pos = shor2.encode(pos.x, pos.y);
    }
    for (i = 0x0; i < warp.length; i++) {
        pos = shor2.decode(warp[i].pos);
        pos.x++;
        warp[i].pos = shor2.encode(pos.x, pos.y);
    }
};
ZoneTool.prototype.shiftY = function() {
    if (1 == this.zone.height()) return alert("can't remove the last row because it would make the level empty");
    for (var layer of this.zone.layers) {
        layer.data.shift();
    }
};
ZoneTool.prototype.unshiftY = function() {
    for (var layer of this.zone.layers) {
        var zoneData = layer.data;
        var newRow = Array(zoneData[0].length).fill(emptyTile);
        zoneData.unshift(newRow);
    }
};
ZoneTool.prototype.reload = function() {
    this.save();
    this.load();
};
ZoneTool.prototype.load = function() {
    this.zone = this.editor.currentZone;
    this.valId.value = this.zone.id;
    this.valInitial.value = this.zone.initial;
    this.valColor.value = this.zone.color;
    this.valMusic.value = this.zone.music;
    this.valWinMusic.value = this.zone.winmusic || "";
    var dims = this.zone.dimensions();
    this.valWidth.value = dims.x;
    this.valHeight.value = dims.y;
    this.element.style.display = "block";
};
ZoneTool.prototype.save = function() {
    try {
        var id = parseInt(this.valId.value),
            initial = parseInt(this.valInitial.value);
        if (isNaN(id) || isNaN(initial)) throw "oof";
        this.zone.id = id;
        this.zone.initial = initial;
        this.zone.color = this.valColor.value;
        this.zone.music = this.valMusic.value;
        this.zone.winmusic = this.valWinMusic.value;
    } catch (e) {
        app.menu.warn.show("Failed to parse value. Changes not applied.");
    }
    app.menu.list.generate();
};
ZoneTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
};
"use strict";

function TileTool(editor) {
    this.editor = editor;
    this.element = document.getElementById("editor-tool-tile");
    this.valRaw = document.getElementById("editor-tool-tile-raw");
    this.valIndex = document.getElementById("editor-tool-tile-index");
    this.valBump = document.getElementById("editor-tool-tile-bump");
    this.valDepth = document.getElementById("editor-tool-tile-depth");
    this.valDef = document.getElementById("editor-tool-tile-def");
    this.valTileData = document.getElementById("editor-tool-tile-data");
    this.valTileDataName = document.getElementById("editor-tool-tile-data-name");
    this.valTileDataObjId = document.getElementById("editor-tool-tile-data-objid");
    this.brushChangeWarning = document.getElementById("editor-tool-tile-brush-change-warning");
    var that = this;
    this.valIndex.onchange = function() {
        that.brushChangeWarning.style.display="";
        that.update();
    };
    this.valBump.onchange = function() {
        that.brushChangeWarning.style.display="";
        that.update();
    };
    this.valDepth.onchange = function() {
        that.brushChangeWarning.style.display="";
        that.update();
    };
    this.valDef.onchange = function() {
        that.brushChangeWarning.style.display="";
        that.update();
    };
    this.valTileData.onchange = function() {
        that.brushChangeWarning.style.display="";
        that.update();
    };
    this.valTileDataObjId.onchange = function() {
        that.brushChangeWarning.style.display="";
        that.valTileData.value = that.valTileDataObjId.value;
        that.update();
    };
    this.brush = emptyTile;
}
TileTool.prototype.input = function(lastInput, mouse, keys) {
    if (mouse.lmb || mouse.mmb) {
        var mapTexture = this.editor.display.resource.getTexture("map");
        var screenWidth = Display.TEXRES * parseInt(this.editor.canvas.width / Display.TEXRES);
        var screenHeight = this.editor.canvas.height;
        var tileCount = mapTexture.width / Display.TEXRES * (mapTexture.height / Display.TEXRES);
        var targetTile = vec2.make(parseInt(mouse.pos.x / Display.TEXRES), parseInt((screenHeight - mouse.pos.y) / Display.TEXRES));
        var targetIndex = screenWidth / Display.TEXRES * targetTile.y + targetTile.x;
        if (targetIndex < tileCount) {
            if (mouse.lmb) {
                this.valIndex.value = targetIndex;
                this.update();
            }
        } else {
            var dims = this.editor.currentZone.dimensions();
            var zoneData = this.editor.currentLayer.data;
            targetTile = vec2.chop(this.editor.display.camera.unproject(mouse.pos));
            if (0x0 > targetTile.x || targetTile.x > dims.x - 0x1 || 0x0 > targetTile.y || targetTile.y > dims.y - 0x1) {
            } else {
                if (mouse.lmb) {
                    this.brushChangeWarning.style.display="none";
                    zoneData[targetTile.y][targetTile.x] = this.brush;
                } else if (mouse.mmb) {
                    this.brushChangeWarning.style.display="none";
                    this.setBrush(zoneData[targetTile.y][targetTile.x]);
                }
            }
        }
    }
};
TileTool.prototype.update = function() {
    try {
        var _0x357177 = Math.max(0x0, Math.min(0x7ff, parseInt(this.valIndex.value))),
            _0x2b097c = Math.max(0x0, Math.min(0xf, parseInt(this.valBump.value))),
            _0x835d38 = Math.max(0x0, Math.min(0x1, parseInt(this.valDepth.value))),
            _0x2de802 = Math.max(0x0, Math.min(0xff, parseInt(this.valDef.value))),
            _0x244c28 = Math.max(0x0, Math.min(0xff, parseInt(this.valTileData.value)));
        if (isNaN(_0x357177) || isNaN(_0x2b097c) || isNaN(_0x835d38) || isNaN(_0x2de802) || isNaN(_0x244c28)) throw "oof";
        this.setBrush(td32.encode(_0x357177, _0x2b097c, _0x835d38, _0x2de802, _0x244c28));
    } catch (_0x379519) {
        this.valRaw.classList.add("red");
    }
};
TileTool.prototype.setBrush = function(newBrush) {
    this.brush = newBrush;
    var brushData = td32.asArray(this.brush);
    this.valIndex.value = brushData[0x0];
    this.valBump.value = brushData[0x1];
    this.valDepth.value = brushData[0x2] ? 0x1 : 0x0;
    var def = brushData[0x3];
    this.valDef.value = def;
    this.valTileData.value = brushData[0x4];
    this.valTileData.style.display = tileDefs[def].extraDataType !== 'objId' ? "" : "none";
    this.valTileDataObjId.value = brushData[0x4];
    this.valTileDataObjId.style.display = tileDefs[def].extraDataType === 'objId' ? "" : "none";
    this.valTileDataName.innerText = 'extraDataName' in tileDefs[def] ? tileDefs[def].extraDataName : 'Unused Data';
    this.valRaw.innerHTML = this.brush;
    this.valRaw.classList.remove("red");
};
TileTool.prototype.reload = function() {
    this.save();
    this.load();
};
TileTool.prototype.load = function() {
    this.zone = this.editor.currentZone;
    this.setBrush(this.brush);
    this.element.style.display = "block";
};
TileTool.prototype.save = function() {};
TileTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
    this.valIndex.onchange = void 0x0;
    this.valBump.onchange = void 0x0;
    this.valDepth.onchange = void 0x0;
    this.valDef.onchange = void 0x0;
    this.valTileData.onchange = void 0x0;
};
"use strict";

function ObjectTool(_0x331a2c) {
    this.editor = _0x331a2c;
    this.element = document.getElementById("editor-tool-object");
    this.valName = document.getElementById("editor-tool-object-name");
    this.valType = document.getElementById("editor-tool-object-type");
    this.valPos = document.getElementById("editor-tool-object-pos");
    this.valParam = document.getElementById("editor-tool-object-param");
    var _0xd714f8 = this;
    this.valType.onchange = function() {
        _0xd714f8.update();
    };
    this.valParam.onchange = function() {
        _0xd714f8.update();
    };
    this.moveTimer = 0x0;
    this.mmbx = false;
    this.obj = {};
    this.obj.type = 0x11;
    this.obj.param = [];
}
ObjectTool.prototype.input = function(lastInput, mouse, keys) {
    if (this.selected && 0x1 > --this.moveTimer) {
        if (keys[0x57] || keys[0x26]) {
            this.move(0x0, 0x1);
            return;
        }
        if (keys[0x53] || keys[0x28]) {
            this.move(0x0, -0x1);
            return;
        }
        if (keys[0x41] || keys[0x25]) {
            this.move(-0x1, 0x0);
            return;
        }
        if (keys[0x44] || keys[0x27]) {
            this.move(0x1, 0x0);
            return;
        }
        if (keys[0x2e]) {
            this.delete();
            return;
        }
    }
    var absMousePos = vec2.chop(this.editor.display.camera.unproject(mouse.pos));
    absMousePos.y = this.zone.height() - absMousePos.y - 0x1;
    if (mouse.lmb) {
        for (var i = 0x0; i < this.zone.obj.length; i++) {
            var obj = this.zone.obj[i]
            if (0.5 > vec2.distance(absMousePos, shor2.decode(obj.pos))) {
                this.select(obj);
                return;
            } 
        }
    } else {
        if (mouse.mmb && !this.mmbx) {
            this.mmbx = true;
            var objPos = shor2.encode(absMousePos.x, absMousePos.y);
            var newObj = {};
            newObj.type = this.obj.type;
            newObj.pos = objPos;
            newObj.param = this.obj.param;
            this.zone.obj.push(newObj);
            this.select(newObj);
        } else {
            if (!mouse.mmb) this.mmbx = false;
        }
    }
};
ObjectTool.prototype.update = function() {
    try {
        var _0x38b1fc = Math.max(0x0, Math.min(0xff, parseInt(this.valType.value))),
            _0x52d1f5 = this.valParam.value.trim().split(',');
        if (isNaN(_0x38b1fc) || void 0x0 === _0x52d1f5) throw "oof";
        this.selected && (this.selected.type = _0x38b1fc, this.selected.param = _0x52d1f5);
        this.obj.type = _0x38b1fc;
        this.obj.param = _0x52d1f5;
        var _0x1a7dd2 = GameObject.OBJECT(_0x38b1fc);
        _0x1a7dd2 && _0x1a7dd2.NAME && (this.valName.innerHTML = _0x1a7dd2.NAME);
    } catch (_0xf73151) {}
};
ObjectTool.prototype.select = function(_0x515869) {
    this.selected = _0x515869;
    this.obj.type = _0x515869.type;
    this.obj.param = _0x515869.param;
    this.valType.value = _0x515869.type;
    this.valPos.innerHTML = _0x515869.pos;
    this.valParam.value = _0x515869.param;
    (_0x515869 = GameObject.OBJECT(_0x515869.type)) && _0x515869.NAME && (this.valName.innerHTML = _0x515869.NAME);
};
ObjectTool.prototype.move = function(dx, dy) {
    var pos = shor2.decode(this.selected.pos);
    pos = vec2.add(pos, vec2.make(dx, dy));
    if (0x0 > pos.x || pos.x > this.zone.width() - 0x1 || pos.y >= this.zone.height() || 0x0 > pos.y) {} else {
        this.selected.pos = shor2.encode(pos.x, pos.y);
        this.moveTimer = 0x4;
    }
};
ObjectTool.prototype.delete = function() {
    for (var _0x59fd56 = 0x0; _0x59fd56 < this.zone.obj.length; _0x59fd56++)
        if (this.zone.obj[_0x59fd56] === this.selected) {
            this.zone.obj.splice(_0x59fd56, 0x1);
            break;
        }
};
ObjectTool.prototype.reload = function() {
    this.save();
    this.load();
};
ObjectTool.prototype.load = function() {
    this.zone = this.editor.currentZone;
    this.selected = void 0x0;
    this.element.style.display = "block";
};
ObjectTool.prototype.save = function() {};
ObjectTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
    this.valType.onchange = void 0x0;
    this.valParam.onchange = void 0x0;
};
"use strict";

function WarpTool(_0x3db2f7) {
    this.editor = _0x3db2f7;
    this.element = document.getElementById("editor-tool-warp");
    this.valId = document.getElementById("editor-tool-warp-id");
    this.valPos = document.getElementById("editor-tool-warp-pos");
    this.valData = document.getElementById("editor-tool-warp-data");
    var _0x1f16e8 = this;
    this.valId.onchange = function() {
        _0x1f16e8.update();
    };
    this.valData.onchange = function() {
        _0x1f16e8.update();
    };
    this.moveTimer = 0x0;
    this.mmbx = false;
    this.vore = "yes";
}
WarpTool.prototype.input = function(lastInput, mouse, keys) {
    if (this.selected && 0x1 > this.moveTimer--) {
        if (keys[0x57] || keys[0x26]) {
            this.move(0x0, 0x1);
            return;
        }
        if (keys[0x53] || keys[0x28]) {
            this.move(0x0, -0x1);
            return;
        }
        if (keys[0x41] || keys[0x25]) {
            this.move(-0x1, 0x0);
            return;
        }
        if (keys[0x44] || keys[0x27]) {
            this.move(0x1, 0x0);
            return;
        }
        if (keys[0x2e]) {
            this.delete();
            return;
        }
    }
    var absMousePos = vec2.chop(this.editor.display.camera.unproject(mouse.pos));
    absMousePos.y = this.zone.height() - absMousePos.y - 0x1;
    if (mouse.lmb) {
        for (var i = 0x0; i < this.zone.warp.length; i++) {
            var warp = this.zone.warp[i]
            if (0.6 > vec2.distance(absMousePos, shor2.decode(warp.pos))) {
                this.select(warp);
                return;
            }
        }
    } else {
        if (mouse.mmb && !this.mmbx) {
            this.mmbx = true;
            var newPos = shor2.encode(absMousePos.x, absMousePos.y);
            var newWarp = {};
            newWarp.id = parseInt(0xff * Math.random());
            newWarp.pos = newPos;
            newWarp.data = 0x0;
            this.zone.warp.push(newWarp);
            this.select(newWarp);
        } else {
            if (!mouse.mmb) this.mmbx = false;
        }
    }
};
WarpTool.prototype.update = function() {
    try {
        var _0x20fe57 = Math.max(0x0, Math.min(0xff, parseInt(this.valId.value))),
            _0x17d535 = Math.max(0x0, Math.min(0xff, parseInt(this.valData.value)));
        if (isNaN(_0x20fe57) || isNaN(_0x17d535)) throw "oof";
        this.selected && (this.selected.id = _0x20fe57, this.selected.data = _0x17d535);
    } catch (_0x3e9769) {}
};
WarpTool.prototype.select = function(_0x295c2c) {
    this.selected = _0x295c2c;
    this.valId.value = _0x295c2c.id;
    this.valPos.innerHTML = _0x295c2c.pos;
    this.valData.value = _0x295c2c.data;
};
WarpTool.prototype.move = function(dx, dy) {
    var pos = shor2.decode(this.selected.pos),
        pos = vec2.add(pos, vec2.make(dx, dy));
    if (0x0 > pos.x || pos.x > this.zone.width() - 0x1 || 0x0 > pos.y || pos.y > this.zone.height() - 0x1) {} else {
        this.selected.pos = shor2.encode(pos.x, pos.y);
        this.moveTimer = 0x4;
    }
};
WarpTool.prototype.delete = function() {
    for (var _0x344d5e = 0x0; _0x344d5e < this.zone.warp.length; _0x344d5e++)
        if (this.zone.warp[_0x344d5e] === this.selected) {
            this.zone.warp.splice(_0x344d5e, 0x1);
            break;
        }
};
WarpTool.prototype.reload = function() {
    this.save();
    this.load();
};
WarpTool.prototype.load = function() {
    this.zone = this.editor.currentZone;
    this.selected = void 0x0;
    this.element.style.display = "block";
};
WarpTool.prototype.save = function() {};
WarpTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
    this.valId.onchange = void 0x0;
};
"use strict";

function CopyTool(_0x5a4fc6) {
    this.editor = _0x5a4fc6;
    this.element = document.getElementById("editor-tool-copy");
    this.valRaw = document.getElementById("editor-tool-copy-raw");
    this.valWidth = document.getElementById("editor-tool-copy-width");
    this.valHeight = document.getElementById("editor-tool-copy-height");
    this.valOver = document.getElementById("editor-tool-copy-over");
    var _0x29b2c0 = this;
    this.valWidth.onchange = function() {
        _0x29b2c0.update();
    };
    this.valHeight.onchange = function() {
        _0x29b2c0.update();
    };
    this.valOver.onchange = function() {
        _0x29b2c0.update();
    };
    this.copyData = void 0x0;
    this.dim = vec2.make(0x2, 0x2);
    this.overwrite = void 0x0;
}
CopyTool.prototype.input = function(lastInput, mouse, keys) {
    if (mouse.lmb || mouse.mmb) {
        var dims = this.zone.dimensions();
        absMousePos = vec2.chop(this.editor.display.camera.unproject(mouse.pos));
        if (0x0 > absMousePos.x || absMousePos.x > dims.x - 0x1 || 0x0 > absMousePos.y || absMousePos.y > dims.y - 0x1) {} else {
            if (mouse.lmb) this.doPaste(absMousePos);
            else if (mouse.mmb) this.doCopy(absMousePos);
        }
    }
};
CopyTool.prototype.doCopy = function(pos) {
    var zoneData = this.editor.currentLayer.data;
    var buffer = [];
    for (var i = 0x0; i < this.dim.y && i + pos.y < zoneData.length; i++) {
        buffer.push([]);
        for (var j = 0x0; j < this.dim.x && j + pos.x < zoneData[0x0].length; j++) buffer[i].push(zoneData[pos.y + i][pos.x + j]);
    }
    this.copyData = buffer;
    this.valRaw.innerHTML = '[' + buffer.length * buffer[0x0].length + ']';
};
CopyTool.prototype.doPaste = function(pos) {
    if (this.copyData) {
        var zoneData = this.editor.currentLayer.data;
        for (var i = 0x0; i < this.copyData.length && i + pos.y < zoneData.length; i++)
            for (var j = 0x0; j < this.copyData[0x0].length && j + pos.x < zoneData[0x0].length; j++) 
                if (this.overwrite === undefined || zoneData[pos.y + i][pos.x + j] === this.overwrite)
                    zoneData[pos.y + i][pos.x + j] = this.copyData[i][j];
    }
};
CopyTool.prototype.update = function() {
    try {
        var _0x257fd1 = Math.max(0x0, Math.min(0x10, parseInt(this.valWidth.value))),
            _0x417879 = Math.max(0x0, Math.min(0x10, parseInt(this.valHeight.value))),
            _0x1ce35d = parseInt(this.valOver.value);
        if (isNaN(_0x257fd1) || isNaN(_0x417879)) throw "oof";
        this.dim = vec2.make(_0x257fd1, _0x417879);
        this.overwrite = isNaN(_0x1ce35d) ? void 0x0 : _0x1ce35d;
    } catch (_0xdf8724) {}
};
CopyTool.prototype.reload = function() {
    this.save();
    this.load();
};
CopyTool.prototype.load = function() {
    this.zone = this.editor.currentZone;
    this.valWidth.value = this.dim.x;
    this.valHeight.value = this.dim.y;
    this.update();
    this.element.style.display = "block";
};
CopyTool.prototype.save = function() {};
CopyTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
    this.valWidth.onchange = void 0x0;
    this.valHeight.onchange = void 0x0;
    this.valOver.onchange = void 0x0;
};
"use strict";

function RepTool(_0x36f946) {
    this.editor = _0x36f946;
    this.element = document.getElementById("editor-tool-rep");
    this.valTarget = document.getElementById("editor-tool-rep-target");
    this.valReplace = document.getElementById("editor-tool-rep-replace");
    var _0x4c079 = this;
    this.btnApply = document.getElementById("editor-tool-rep-apply");
    this.btnApply.onclick = function() {
        _0x4c079.apply();
    };
}
RepTool.prototype.apply = function() {
    var target = parseInt(this.valTarget.value),
        replace = parseInt(this.valReplace.value);
    if (isNaN(target) || isNaN(replace)) app.menu.warn.show("Replace failed. Invalid values.");
    else {
        var zoneData = this.editor.currentLayer.data;
        for (var i = 0x0; i < zoneData.length; i++)
            for (var j = 0x0; j < zoneData[i].length; j++) if (zoneData[i][j] === target) zoneData[i][j] = replace;
    }
};
RepTool.prototype.reload = function() {
    this.save();
    this.load();
};
RepTool.prototype.load = function() {
    this.zone = this.editor.currentZone;
    this.element.style.display = "block";
};
RepTool.prototype.save = function() {};
RepTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
};
"use strict";

function ReferenceTool(_0x4b0f80) {
    this.editor = _0x4b0f80;
    this.element = document.getElementById("editor-tool-ref");
    this.valImg = document.getElementById("editor-tool-ref-img");
    this.valX = document.getElementById("editor-tool-ref-x");
    this.valY = document.getElementById("editor-tool-ref-y");
    var _0x52207c = this;
    this.btnLoad = document.getElementById("editor-tool-ref-load");
    this.btnLoad.onclick = function() {
        _0x52207c.image();
    };
    this.btnApply = document.getElementById("editor-tool-ref-apply");
    this.btnApply.onclick = function() {
        _0x52207c.reload();
    };
}
ReferenceTool.prototype.image = function() {
    var _0xfcc60b = "ref" + parseInt(0x1000 * Math.random());
    this.editor.display.resource.load([{
        'id': _0xfcc60b,
        'src': this.valImg.value
    }]);
    this.editor.reference = _0xfcc60b;
};
ReferenceTool.prototype.reload = function() {
    this.save();
    this.load();
};
ReferenceTool.prototype.load = function() {
    this.zone = this.editor.currentZone;
    this.valImg.value = '';
    this.valX.value = this.editor.offsetRef.x;
    this.valY.value = this.editor.offsetRef.y;
    this.element.style.display = "block";
};
ReferenceTool.prototype.save = function() {
    try {
        var _0x3a8d00 = parseInt(this.valX.value),
            _0x27e93a = parseInt(this.valY.value);
        if (isNaN(_0x3a8d00) || isNaN(_0x27e93a)) throw "oof";
        this.editor.offsetRef = vec2.make(_0x3a8d00, _0x27e93a);
    } catch (_0x1fe389) {
        app.menu.warn.show("Failed to parse value. Changes not applied.");
    }
};
ReferenceTool.prototype.destroy = function() {
    this.element.style.display = "none";
    this.save();
};
"use strict";

function GameObject(_0x38f20b, _0x10e150, _0x1ebbf6, _0x4c2b53) {
    this.game = _0x38f20b;
    this.level = _0x10e150;
    this.zone = _0x1ebbf6;
    this.pos = _0x4c2b53;
    this.sprite = this.state = void 0x0;
    this.garbage = this.dead = this.reverse = false;
    this.sounds = [];
}
GameObject.ASYNC = true;
GameObject.ID = 0x0;
GameObject.prototype.update = function(_0x2193a7) {};
GameObject.prototype.step = function() {};
GameObject.prototype.sound = function() {
    for (var _0x3aa3c5 = 0x0; _0x3aa3c5 < this.sounds.length; _0x3aa3c5++) {
        var _0x411153 = this.sounds[_0x3aa3c5];
        _0x411153.done() ? this.sounds.splice(_0x3aa3c5--, 0x1) : _0x411153.position(this.pos);
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
GameObject.prototype.play = function(_0x4cb3a6, _0x2b86a3, _0x3e7459) {
    var _0x5da5b5 = this.game.getZone();
    if (this.zone === _0x5da5b5.id && this.level === _0x5da5b5.level) return _0x4cb3a6 = this.game.audio.getSpatialAudio(_0x4cb3a6, _0x2b86a3, _0x3e7459, "effect"), _0x4cb3a6.play(this.pos), this.sounds.push(_0x4cb3a6), _0x4cb3a6;
};
GameObject.OBJECT_LIST = [];
GameObject.REGISTER_OBJECT = function(_0x191968) {
    GameObject.OBJECT_LIST.push(_0x191968);
};
GameObject.OBJECT = function(_0x4c8b3b) {
    for (var _0x500c0f = 0x0; _0x500c0f < GameObject.OBJECT_LIST.length; _0x500c0f++) {
        var _0x379dcc = GameObject.OBJECT_LIST[_0x500c0f];
        if (_0x379dcc.ID === _0x4c8b3b) return _0x379dcc;
    }
    app.menu.warn.show("Invalid Object Class ID: " + _0x4c8b3b);
};
"use strict";

function _0x5e070a(_0x2ed984, _0x394e7d, _0x5dfbbc, _0x273d8b, _0x195eca) {
    GameObject.call(this, _0x2ed984, _0x394e7d, _0x5dfbbc, _0x273d8b);
    this.pid = _0x195eca;
    this.anim = 0x0;
    this.reverse = false;
    this.deadTimer = this.deadFreezeTimer = this.arrowFade = 0x0;
    this.lastPos = this.pos;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.jumping = -0x1;
    this.grounded = this.isSpring = this.isBounce = false;
    this.name = void 0x0;
    this.starTimer = this.power = 0x0;
    this.starMusic = void 0x0;
    this.tfmTimer = this.damageTimer = 0x0;
    this.tfmTarget = -0x1;
    this.pipeWarp = void 0x0;
    this.pipeTimer = 0x0;
    this.pipeExt = this.pipeDir = -0x1;
    this.poleTimer = this.pipeDelayLength = this.pipeDelay = 0x0;
    this.poleSound = this.poleWait = false;
    this.vineWarp = void 0x0;
    this.attackCharge = _0x5e070a.MAX_CHARGE;
    this.attackTimer = 0x0;
    this.autoTarget = void 0x0;
    this.btnD = [0x0, 0x0];
    this.btnBde = this.btnBg = this.btnB = this.btnA = false;
    this.setState(_0x5e070a.SNAME.STAND);
}
_0x5e070a.ASYNC = false;
_0x5e070a.ID = 0x1;
_0x5e070a.NAME = "PLAYER";
_0x5e070a.ANIMATION_RATE = 0x3;
_0x5e070a.DIM_OFFSET = vec2.make(-0.05, 0x0);
_0x5e070a.DEAD_FREEZE_TIME = 0x7;
_0x5e070a.DEAD_TIME = 0x46;
_0x5e070a.DEAD_UP_FORCE = 0.65;
_0x5e070a.RUN_SPEED_MAX = 0.315;
_0x5e070a.MOVE_SPEED_MAX = 0.215;
_0x5e070a.MOVE_SPEED_ACCEL = 0.0125;
_0x5e070a.MOVE_SPEED_DECEL = 0.0225;
_0x5e070a.MOVE_SPEED_ACCEL_AIR = 0.0025;
_0x5e070a.STUCK_SLIDE_SPEED = 0.08;
_0x5e070a.FALL_SPEED_MAX = 0.45;
_0x5e070a.FALL_SPEED_ACCEL = 0.085;
_0x5e070a.BOUNCE_LENGTH_MIN = 0x1;
_0x5e070a.SPRING_LENGTH_MIN = 0x5;
_0x5e070a.SPRING_LENGTH_MAX = 0xe;
_0x5e070a.JUMP_LENGTH_MIN = 0x3;
_0x5e070a.JUMP_LENGTH_MAX = 0x7;
_0x5e070a.JUMP_SPEED_INC_THRESHOLD = [0.1, 0.2, 0.25];
_0x5e070a.JUMP_DECEL = 0.005;
_0x5e070a.BLOCK_BUMP_THRESHOLD = 0.12;
_0x5e070a.POWER_INDEX_SIZE = 0x20;
_0x5e070a.GENERIC_INDEX = 0x60;
_0x5e070a.DAMAGE_TIME = 0x2d;
_0x5e070a.TRANSFORM_TIME = 0x12;
_0x5e070a.TRANSFORM_ANIMATION_RATE = 0x2;
_0x5e070a.STAR_LENGTH = 0x168;
_0x5e070a.PROJ_OFFSET = vec2.make(0.7, 1.1);
_0x5e070a.MAX_CHARGE = 0x3c;
_0x5e070a.ATTACK_DELAY = 0x7;
_0x5e070a.ATTACK_CHARGE = 0x19;
_0x5e070a.ATTACK_ANIM_LENGTH = 0x3;
_0x5e070a.PIPE_TIME = 0x1e;
_0x5e070a.PIPE_SPEED = 0.06;
_0x5e070a.PIPE_EXT_OFFSET = vec2.make(0.5, 0x0);
_0x5e070a.WEED_EAT_RADIUS = 0x3;
_0x5e070a.POLE_DELAY = 0xf;
_0x5e070a.POLE_SLIDE_SPEED = 0.15;
_0x5e070a.LEVEL_END_MOVE_OFF = vec2.make(0xa, 0x0);
_0x5e070a.CLIMB_SPEED = 0.125;
_0x5e070a.PLATFORM_SNAP_DIST = 0.15;
_0x5e070a.ARROW_SPRITE = 0xfd;
_0x5e070a.ARROW_TEXT = "YOU";
_0x5e070a.ARROW_OFFSET = vec2.make(0x0, 0.1);
_0x5e070a.TEXT_OFFSET = vec2.make(0x0, 0.55);
_0x5e070a.TEXT_SIZE = 0.65;
_0x5e070a.TEXT_COLOR = "#FFFFFF";
_0x5e070a.ARROW_RAD_IN = 0x3;
_0x5e070a.ARROW_RAD_OUT = 0x7;
_0x5e070a.ARROW_THRESHOLD_MIN = 0x4;
_0x5e070a.ARROW_THRESHOLD_MAX = 0x6;
_0x5e070a.TEAM_OFFSET = vec2.make(0x0, 0x0);
_0x5e070a.TEAM_SIZE = 0.3;
_0x5e070a.TEAM_COLOR = "rgba(255,255,255,0.75)";
_0x5e070a.SPRITE = {};
_0x5e070a.SPRITE_LIST = [{
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
for (var _0x2ea890 = 0x0; _0x2ea890 < _0x5e070a.SPRITE_LIST.length; _0x2ea890++) _0x5e070a.SPRITE[_0x5e070a.SPRITE_LIST[_0x2ea890].NAME] = _0x5e070a.SPRITE_LIST[_0x2ea890], _0x5e070a.SPRITE[_0x5e070a.SPRITE_LIST[_0x2ea890].ID] = _0x5e070a.SPRITE_LIST[_0x2ea890];
_0x5e070a.SNAME = {};
_0x5e070a.SNAME.STAND = "STAND";
_0x5e070a.SNAME.DOWN = "DOWN";
_0x5e070a.SNAME.RUN = "RUN";
_0x5e070a.SNAME.SLIDE = "SLIDE";
_0x5e070a.SNAME.FALL = "FALL";
_0x5e070a.SNAME.POLE = "POLE";
_0x5e070a.SNAME.CLIMB = "CLIMB";
_0x5e070a.SNAME.ATTACK = "ATTACK";
_0x5e070a.SNAME.TRANSFORM = "TRANSFORM";
_0x5e070a.SNAME.DEAD = "DEAD";
_0x5e070a.SNAME.HIDE = "HIDE";
_0x5e070a.SNAME.GHOST = "GHOST";
_0x5e070a.SNAME.DEADGHOST = "DEADGHOST";
var _0x382961 = vec2.make(0.9, 0.95),
    _0x34c3ee = vec2.make(0.9, 1.9);
_0x5e070a.STATE = [{
    'NAME': _0x5e070a.SNAME.STAND,
    'ID': 0x0,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_STAND]
}, {
    'NAME': _0x5e070a.SNAME.DOWN,
    'ID': 0x1,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_STAND]
}, {
    'NAME': _0x5e070a.SNAME.RUN,
    'ID': 0x2,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_RUN2, _0x5e070a.SPRITE.S_RUN1, _0x5e070a.SPRITE.S_RUN0]
}, {
    'NAME': _0x5e070a.SNAME.SLIDE,
    'ID': 0x3,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_SLIDE]
}, {
    'NAME': _0x5e070a.SNAME.FALL,
    'ID': 0x4,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_FALL]
}, {
    'NAME': _0x5e070a.SNAME.TRANSFORM,
    'ID': 0x5,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_STAND]
}, {
    'NAME': _0x5e070a.SNAME.POLE,
    'ID': 0x6,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_CLIMB1]
}, {
    'NAME': _0x5e070a.SNAME.CLIMB,
    'ID': 0x7,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.S_CLIMB0, _0x5e070a.SPRITE.S_CLIMB1]
}, {
    'NAME': _0x5e070a.SNAME.STAND,
    'ID': 0x20,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.B_STAND]
}, {
    'NAME': _0x5e070a.SNAME.DOWN,
    'ID': 0x21,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.B_DOWN]
}, {
    'NAME': _0x5e070a.SNAME.RUN,
    'ID': 0x22,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.B_RUN2, _0x5e070a.SPRITE.B_RUN1, _0x5e070a.SPRITE.B_RUN0]
}, {
    'NAME': _0x5e070a.SNAME.SLIDE,
    'ID': 0x23,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.B_SLIDE]
}, {
    'NAME': _0x5e070a.SNAME.FALL,
    'ID': 0x24,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.B_FALL]
}, {
    'NAME': _0x5e070a.SNAME.TRANSFORM,
    'ID': 0x25,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.B_TRANSFORM]
}, {
    'NAME': _0x5e070a.SNAME.POLE,
    'ID': 0x26,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.B_CLIMB0]
}, {
    'NAME': _0x5e070a.SNAME.CLIMB,
    'ID': 0x27,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.B_CLIMB0, _0x5e070a.SPRITE.B_CLIMB1]
}, {
    'NAME': _0x5e070a.SNAME.STAND,
    'ID': 0x40,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.F_STAND]
}, {
    'NAME': _0x5e070a.SNAME.DOWN,
    'ID': 0x41,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.F_DOWN]
}, {
    'NAME': _0x5e070a.SNAME.RUN,
    'ID': 0x42,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.F_RUN2, _0x5e070a.SPRITE.F_RUN1, _0x5e070a.SPRITE.F_RUN0]
}, {
    'NAME': _0x5e070a.SNAME.SLIDE,
    'ID': 0x43,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.F_SLIDE]
}, {
    'NAME': _0x5e070a.SNAME.FALL,
    'ID': 0x44,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.F_FALL]
}, {
    'NAME': _0x5e070a.SNAME.ATTACK,
    'ID': 0x45,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.F_ATTACK]
}, {
    'NAME': _0x5e070a.SNAME.TRANSFORM,
    'ID': 0x46,
    'DIM': _0x382961,
    'SPRITE': [_0x5e070a.SPRITE.F_TRANSFORM]
}, {
    'NAME': _0x5e070a.SNAME.POLE,
    'ID': 0x47,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.F_CLIMB0]
}, {
    'NAME': _0x5e070a.SNAME.CLIMB,
    'ID': 0x48,
    'DIM': _0x34c3ee,
    'SPRITE': [_0x5e070a.SPRITE.F_CLIMB0, _0x5e070a.SPRITE.F_CLIMB1]
}, {
    'NAME': _0x5e070a.SNAME.DEAD,
    'DIM': _0x382961,
    'ID': 0x60,
    'SPRITE': [_0x5e070a.SPRITE.G_DEAD]
}, {
    'NAME': _0x5e070a.SNAME.HIDE,
    'DIM': _0x382961,
    'ID': 0x70,
    'SPRITE': [_0x5e070a.SPRITE.G_HIDE]
}, {
    'NAME': _0x5e070a.SNAME.GHOST,
    'DIM': _0x382961,
    'ID': 0xff,
    'SPRITE': []
}, {
    'NAME': _0x5e070a.SNAME.DEADGHOST,
    'DIM': _0x382961,
    'ID': 0xfe,
    'SPRITE': [_0x5e070a.SPRITE.G_DEAD]
}];
_0x5e070a.prototype.update = function(_0x1ad537) {
    this.dead || this.garbage || (this.setState(_0x5e070a.SNAME.GHOST), this.level = _0x1ad537.level, this.zone = _0x1ad537.zone, this.pos = _0x1ad537.pos, this.sprite = _0x5e070a.SPRITE[_0x1ad537.sprite], this.reverse = _0x1ad537.reverse);
};
_0x5e070a.prototype.trigger = function(_0x147895) {
    switch (_0x147895) {
        case 0x1:
            this.attack();
            break;
        case 0x2:
            this.star();
    }
};
_0x5e070a.prototype.step = function() {
    0x0 < this.starTimer ? this.starTimer-- : this.starMusic && (this.starMusic.stop(), this.starMusic = void 0x0);
    if (this.isState(_0x5e070a.SNAME.GHOST)) this.sound();
    else if (!this.isState(_0x5e070a.SNAME.HIDE))
        if (this.isState(_0x5e070a.SNAME.POLE))
            if (0x0 < this.poleTimer && !this.poleWait) this.poleTimer--;
            else {
                this.poleSound || (this.poleSound = true, this.play("sfx/flagpole.wav", 0x1, 0x0));
                if (!this.poleWait)
                    if (0x0 >= this.poleTimer && this.autoTarget) this.setState(_0x5e070a.SNAME.STAND);
                    else {
                        for (var _0x2d9f9a = vec2.add(this.pos, vec2.make(0x0, -0.15)), _0x1df458 = vec2.make(this.pos.x, this.pos.y - 0.15), _0x2c2052 = vec2.make(this.dim.x, this.dim.y + 0.15), _0x1df458 = this.game.world.getZone(this.level, this.zone).getTiles(_0x1df458, _0x2c2052), _0x2c2052 = vec2.make(0x1, 0x1), _0x1d4d93 = false, _0x5731e2 = 0x0; _0x5731e2 < _0x1df458.length; _0x5731e2++) {
                            var _0x397266 = _0x1df458[_0x5731e2];
                            if (_0x65f30e.intersection(_0x397266.pos, _0x2c2052, _0x2d9f9a, this.dim) && _0x397266.definition.COLLIDE) {
                                _0x1d4d93 = true;
                                break;
                            }
                        }
                        _0x1d4d93 ? (this.poleTimer = 0xf, this.autoTarget = vec2.add(_0x2d9f9a, _0x5e070a.LEVEL_END_MOVE_OFF), this.poleWait = true) : this.pos = _0x2d9f9a;
                    } _0x2d9f9a = this.game.getFlag(this.level, this.zone);
                _0x2d9f9a.pos.y - 0.15 >= this.pos.y ? _0x2d9f9a.pos.y -= 0.15 : (_0x2d9f9a.pos.y = this.pos.y, this.poleWait = false);
            }
    else if (this.isState(_0x5e070a.SNAME.RUN) ? this.anim += Math.max(0.5, Math.abs(0x5 * this.moveSpeed)) : this.anim++, this.sprite = this.state.SPRITE[parseInt(parseInt(this.anim) / _0x5e070a.ANIMATION_RATE) % this.state.SPRITE.length], this.isState(_0x5e070a.SNAME.CLIMB)) this.pos.y += _0x5e070a.CLIMB_SPEED, this.pos.y >= this.game.world.getZone(this.level, this.zone).height() && (this.warp(this.vineWarp), this.setState(_0x5e070a.SNAME.FALL));
    else if (this.isState(_0x5e070a.SNAME.DEAD) || this.isState(_0x5e070a.SNAME.DEADGHOST)) 0x0 < this.deadFreezeTimer ? this.deadFreezeTimer-- : 0x0 < this.deadTimer ? (this.deadTimer--, this.pos.y += this.fallSpeed, this.fallSpeed = Math.max(this.fallSpeed - 0.085, -0.45)) : this.destroy();
    else if (this.isState(_0x5e070a.SNAME.TRANSFORM))
        if (0x0 < --this.tfmTimer) switch (_0x2d9f9a = parseInt(this.anim / _0x5e070a.TRANSFORM_ANIMATION_RATE) % 0x3, _0x1df458 = this.power > this.tfmTarget ? this.power : this.tfmTarget, _0x2d9f9a) {
            case 0x0:
                this.sprite = this.getStateByPowerIndex(_0x5e070a.SNAME.STAND, this.power).SPRITE[0x0];
                break;
            case 0x1:
                this.sprite = this.getStateByPowerIndex(_0x5e070a.SNAME.TRANSFORM, _0x1df458).SPRITE[0x0];
                break;
            case 0x2:
                this.sprite = this.getStateByPowerIndex(_0x5e070a.SNAME.STAND, this.tfmTarget).SPRITE[0x0];
        } else this.power = this.tfmTarget, this.tfmTarget = -0x1, this.setState(_0x5e070a.SNAME.STAND), this.collisionTest(this.pos, this.dim) && this.setState(_0x5e070a.SNAME.DOWN), this.damageTimer = _0x5e070a.DAMAGE_TIME;
        else if (0x0 < this.pipeDelay) this.pipeDelay--;
    else if (0x0 < this.pipeTimer && 0x0 >= this.pipeDelay) {
        0x1e <= this.pipeTimer && this.play("sfx/pipe.wav", 0x1, 0.04);
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
            this.pipeWarp = void 0x0;
            switch (this.pipeExt) {
                case 0x1:
                    this.pos.y -= 1.74;
                    this.setState(_0x5e070a.SNAME.STAND);
                    this.pos = vec2.add(this.pos, _0x5e070a.PIPE_EXT_OFFSET);
                    break;
                case 0x2:
                    this.pos.y += 1.74;
                    this.setState(_0x5e070a.SNAME.STAND);
                    this.pos = vec2.add(this.pos, _0x5e070a.PIPE_EXT_OFFSET);
                    break;
                case 0x3:
                    this.pos.x -= 1.74;
                    this.setState(_0x5e070a.SNAME.RUN);
                    break;
                case 0x4:
                    this.pos.x += 1.74;
                    this.setState(_0x5e070a.SNAME.RUN);
                    break;
                default:
                    return;
            }
            this.pipeTimer = 0x1e;
            this.pipeDir = this.pipeExt;
            this.pipeDelay = this.pipeDelayLength;
        }
    } else this.lastPos = this.pos, 0x0 < this.damageTimer && this.damageTimer--, this.attackCharge < _0x5e070a.MAX_CHARGE && this.attackCharge++, 0x0 < this.attackTimer && this.attackTimer--, this.autoTarget && this.autoMove(), this.control(), this.physics(), this.interaction(), this.arrow(), this.sound(), 0x0 > this.pos.y && this.kill();
};
_0x5e070a.prototype.input = function(_0x50bee7, _0x44e3da, _0x263951) {
    this.btnD = _0x50bee7;
    this.btnA = _0x44e3da;
    this.btnB = _0x263951;
};
_0x5e070a.prototype.autoMove = function() {
    this.btnD = [0x0, 0x0];
    this.btnB = this.btnA = false;
    0.1 <= Math.abs(this.pos.x - this.autoTarget.x) ? this.btnD = [0x0 >= this.pos.x - this.autoTarget.x ? 0x1 : -0x1, 0x0] : 0.01 > Math.abs(this.moveSpeed) && (this.btnA = -0.5 > this.pos.y - this.autoTarget.y);
};
_0x5e070a.prototype.control = function() {
    this.grounded && (this.btnBg = this.btnB);
    if (this.isState(_0x5e070a.SNAME.DOWN) && this.collisionTest(this.pos, this.getStateByPowerIndex(_0x5e070a.SNAME.STAND, this.power).DIM)) - 0x1 !== this.btnD[0x1] && (this.moveSpeed = 0.5 * (this.moveSpeed + _0x5e070a.STUCK_SLIDE_SPEED)), this.moveSpeed = Math.sign(this.moveSpeed) * Math.max(Math.abs(this.moveSpeed) - _0x5e070a.MOVE_SPEED_DECEL, 0x0);
    else {
        0x0 !== this.btnD[0x0] ? (0.01 < Math.abs(this.moveSpeed) && !(0x0 <= this.btnD[0x0] ^ 0x0 > this.moveSpeed) ? (this.moveSpeed += _0x5e070a.MOVE_SPEED_DECEL * this.btnD[0x0], this.setState(_0x5e070a.SNAME.SLIDE)) : (this.moveSpeed = this.btnD[0x0] * Math.min(Math.abs(this.moveSpeed) + 0.0125, this.btnBg ? 0.315 : 0.215), this.setState(_0x5e070a.SNAME.RUN)), this.grounded && (this.reverse = 0x0 <= this.btnD[0x0])) : (0.01 < Math.abs(this.moveSpeed) ? (this.moveSpeed = Math.sign(this.moveSpeed) * Math.max(Math.abs(this.moveSpeed) - _0x5e070a.MOVE_SPEED_DECEL, 0x0), this.setState(_0x5e070a.SNAME.RUN)) : (this.moveSpeed = 0x0, this.setState(_0x5e070a.SNAME.STAND)), -0x1 === this.btnD[0x1] && this.setState(_0x5e070a.SNAME.DOWN));
        for (var _0x4a5f8d = this.isSpring ? 0xe : 0x7, _0x560946 = this.isSpring ? _0x5e070a.SPRING_LENGTH_MIN : this.isBounce ? _0x5e070a.BOUNCE_LENGTH_MIN : _0x5e070a.JUMP_LENGTH_MIN, _0x1e429a = 0x0; _0x1e429a < _0x5e070a.JUMP_SPEED_INC_THRESHOLD.length && Math.abs(this.moveSpeed) >= _0x5e070a.JUMP_SPEED_INC_THRESHOLD[_0x1e429a]; _0x1e429a++) _0x4a5f8d++;
        this.btnA ? (this.grounded && (this.jumping = 0x0, this.play(0x0 < this.power ? "sfx/jump1.wav" : "sfx/jump0.wav", 0.7, 0.04)), this.jumping > _0x4a5f8d && (this.jumping = -0x1)) : this.jumping > _0x560946 && (this.jumping = -0x1);
        this.grounded || this.setState(_0x5e070a.SNAME.FALL);
        this.btnB && !this.btnBde && 0x2 === this.power && !this.isState(_0x5e070a.SNAME.DOWN) && !this.isState(_0x5e070a.SNAME.SLIDE) && 0x1 > this.attackTimer && this.attackCharge >= _0x5e070a.ATTACK_CHARGE && (this.attack(), this.game.out.push(_0x4b7736.encode(0x1)));
        this.btnBde = this.btnB;
        0x0 < this.attackTimer && 0x2 === this.power && (this.isState(_0x5e070a.SNAME.STAND) || this.isState(_0x5e070a.SNAME.RUN)) && this.setState(_0x5e070a.SNAME.ATTACK);
    }
};
_0x5e070a.prototype.physics = function() {
    -0x1 !== this.jumping ? (this.fallSpeed = 0.45 - 0.005 * this.jumping, this.jumping++, this.grounded = false) : (this.isSpring = this.isBounce = false, this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - 0.085, -0.45));
    for (var _0x3e47af = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), _0x3ce8a1 = vec2.make(this.pos.x + Math.min(0x0, this.moveSpeed), this.pos.y + Math.min(0x0, this.fallSpeed)), _0x18c17e = vec2.make(this.dim.x + Math.max(0x0, this.moveSpeed), this.dim.y + Math.max(0x0, this.fallSpeed)), _0x3ce8a1 = this.game.world.getZone(this.level, this.zone).getTiles(_0x3ce8a1, _0x18c17e), _0x1858e8 = this.game.getPlatforms(), _0x18c17e = vec2.make(0x1, 0x1), _0x1e1bf5 = false, _0x1fbfd1 = [], _0x294f81 = [], _0x6b9742 = [], _0x568951 = [], _0x593e7e = [], _0x28b146, _0x18d82d = 0x0; _0x18d82d < _0x3ce8a1.length; _0x18d82d++) {
        var _0x4c3bfe = _0x3ce8a1[_0x18d82d];
        if (_0x4c3bfe.definition.COLLIDE)
            if (_0x4c3bfe.definition.HIDDEN) _0x1fbfd1.push(_0x4c3bfe);
            else if (_0x65f30e.intersection(_0x4c3bfe.pos, _0x18c17e, _0x3e47af, this.dim) || _0x65f30e.intersection(_0x4c3bfe.pos, _0x18c17e, this.pos, this.dim)) 0.01 < Math.abs(this.moveSpeed) && this.grounded && this.pos.y <= _0x4c3bfe.pos.y && _0x6b9742.push(_0x4c3bfe), _0x1fbfd1.push(_0x4c3bfe);
    }
    for (_0x18d82d = 0x0; _0x18d82d < _0x1858e8.length; _0x18d82d++) _0x4c3bfe = _0x1858e8[_0x18d82d], _0x65f30e.intersection(_0x4c3bfe.pos, _0x4c3bfe.dim, _0x3e47af, this.dim) && _0x593e7e.push(_0x4c3bfe);
    _0x1858e8 = vec2.make(_0x3e47af.x, this.pos.y);
    for (_0x18d82d = 0x0; _0x18d82d < _0x1fbfd1.length; _0x18d82d++) _0x4c3bfe = _0x1fbfd1[_0x18d82d], !_0x4c3bfe.definition.HIDDEN && _0x65f30e.intersection(_0x4c3bfe.pos, _0x18c17e, _0x1858e8, this.dim) && (_0x1858e8.x = _0x1858e8.x + 0.5 * this.dim.x < _0x4c3bfe.pos.x + 0.5 * _0x18c17e.x ? _0x4c3bfe.pos.x - this.dim.x : _0x4c3bfe.pos.x + _0x18c17e.x, this.moveSpeed *= 0.33);
    _0x3e47af.x = _0x1858e8.x;
    for (_0x18d82d = 0x0; _0x18d82d < _0x1fbfd1.length; _0x18d82d++) _0x4c3bfe = _0x1fbfd1[_0x18d82d], _0x65f30e.intersection(_0x4c3bfe.pos, _0x18c17e, _0x3e47af, this.dim) && (this.fallSpeed > _0x5e070a.BLOCK_BUMP_THRESHOLD && _0x568951.push(_0x4c3bfe), 0x0 > this.fallSpeed && this.pos.y >= _0x4c3bfe.pos.y && _0x294f81.push(_0x4c3bfe));
    for (_0x18d82d = 0x0; _0x18d82d < _0x1fbfd1.length; _0x18d82d++) _0x4c3bfe = _0x1fbfd1[_0x18d82d], _0x65f30e.intersection(_0x4c3bfe.pos, _0x18c17e, _0x3e47af, this.dim) && (this.pos.y >= _0x3e47af.y ? _0x4c3bfe.definition.HIDDEN || (_0x3e47af.y = _0x4c3bfe.pos.y + _0x18c17e.y, this.fallSpeed = 0x0, _0x1e1bf5 = true) : (_0x3e47af.y = _0x4c3bfe.pos.y - this.dim.y, this.fallSpeed = 0x0));
    for (_0x18d82d = 0x0; _0x18d82d < _0x593e7e.length; _0x18d82d++)
        if (_0x4c3bfe = _0x593e7e[_0x18d82d], this.pos.y >= _0x3e47af.y && _0x4c3bfe.pos.y + _0x4c3bfe.dim.y - this.pos.y < _0x5e070a.PLATFORM_SNAP_DIST) {
            _0x3e47af.y = _0x4c3bfe.pos.y + _0x4c3bfe.dim.y;
            _0x1e1bf5 = true;
            _0x28b146 = _0x4c3bfe;
            break;
        } this.grounded = _0x1e1bf5;
    this.pos = _0x3e47af;
    _0x28b146 && _0x28b146.riding(this);
    for (_0x18d82d = 0x0; _0x18d82d < _0x3ce8a1.length; _0x18d82d++) _0x4c3bfe = _0x3ce8a1[_0x18d82d], _0x65f30e.intersection(_0x4c3bfe.pos, _0x18c17e, _0x3e47af, this.dim) && _0x4c3bfe.definition.TRIGGER(this.game, this.pid, _0x4c3bfe, this.level, this.zone, _0x4c3bfe.pos.x, _0x4c3bfe.pos.y, td32.TRIGGER.TYPE.TOUCH);
    if (this.isState(_0x5e070a.SNAME.DOWN) && 0.05 > this.moveSpeed)
        for (_0x18d82d = 0x0; _0x18d82d < _0x294f81.length; _0x18d82d++) _0x4c3bfe = _0x294f81[_0x18d82d], _0x4c3bfe.definition.TRIGGER(this.game, this.pid, _0x4c3bfe, this.level, this.zone, _0x4c3bfe.pos.x, _0x4c3bfe.pos.y, td32.TRIGGER.TYPE.DOWN);
    if (this.isState(_0x5e070a.SNAME.RUN))
        for (_0x18d82d = 0x0; _0x18d82d < _0x6b9742.length; _0x18d82d++) _0x4c3bfe = _0x6b9742[_0x18d82d], _0x4c3bfe.definition.TRIGGER(this.game, this.pid, _0x4c3bfe, this.level, this.zone, _0x4c3bfe.pos.x, _0x4c3bfe.pos.y, td32.TRIGGER.TYPE.PUSH);
    for (_0x18d82d = 0x0; _0x18d82d < _0x568951.length; _0x18d82d++) _0x4c3bfe = _0x568951[_0x18d82d], _0x4c3bfe.definition.TRIGGER(this.game, this.pid, _0x4c3bfe, this.level, this.zone, _0x4c3bfe.pos.x, _0x4c3bfe.pos.y, 0x0 < this.power ? td32.TRIGGER.TYPE.BIG_BUMP : td32.TRIGGER.TYPE.SMALL_BUMP), this.jumping = -0x1, this.fallSpeed = -_0x5e070a.BLOCK_BUMP_THRESHOLD;
};
_0x5e070a.prototype.collisionTest = function(_0x2f6aca, _0x45caca) {
    for (var _0x32770a = vec2.make(0x1, 0x1), _0x2380d9 = this.game.world.getZone(this.level, this.zone).getTiles(_0x2f6aca, _0x45caca), _0x44c536 = 0x0; _0x44c536 < _0x2380d9.length; _0x44c536++) {
        var _0x3a4913 = _0x2380d9[_0x44c536];
        if (_0x3a4913.definition.COLLIDE && _0x65f30e.intersection(_0x3a4913.pos, _0x32770a, _0x2f6aca, _0x45caca)) return true;
    }
    return false;
};
_0x5e070a.prototype.interaction = function() {
    for (var _0x2a66e8 = 0x0; _0x2a66e8 < this.game.objects.length; _0x2a66e8++) {
        var _0x2ffd85 = this.game.objects[_0x2a66e8];
        _0x2ffd85 !== this && !this.dead && _0x2ffd85.level === this.level && _0x2ffd85.zone === this.zone && _0x2ffd85.isTangible() && _0x65f30e.intersection(_0x2ffd85.pos, _0x2ffd85.dim, this.pos, this.dim) && (0x0 < this.starTimer && _0x2ffd85.bonk && (_0x2ffd85.bonk(), this.game.out.push(_0x4e8a16.encode(_0x2ffd85.level, _0x2ffd85.zone, _0x2ffd85.oid, 0x1))), _0x2ffd85 instanceof _0x5e070a && 0x0 < _0x2ffd85.starTimer && !this.autoTarget && (this.damage(_0x2ffd85), this.dead && this.game.out.push(_0x30f5.encode(_0x2ffd85.pid))), this.lastPos.y > _0x2ffd85.pos.y + 0.66 * _0x2ffd85.dim.y - Math.max(0x0, _0x2ffd85.fallSpeed) ? _0x2ffd85.playerStomp && _0x2ffd85.playerStomp(this) : this.lastPos.y < _0x2ffd85.pos.y ? _0x2ffd85.playerBump && _0x2ffd85.playerBump(this) : _0x2ffd85.playerCollide && _0x2ffd85.playerCollide(this));
    }
};
_0x5e070a.prototype.arrow = function() {
    for (var _0x4cd515 = 0x0, _0x3e71d6 = 0x0; _0x3e71d6 < this.game.objects.length; _0x3e71d6++) {
        var _0x1e6741 = this.game.objects[_0x3e71d6];
        _0x1e6741 !== this && _0x1e6741 instanceof _0x5e070a && _0x1e6741.level === this.level && _0x1e6741.zone === this.zone && (_0x4cd515 += 0x1 - Math.min(_0x5e070a.ARROW_RAD_OUT, Math.max(0x0, vec2.distance(this.pos, _0x1e6741.pos) - _0x5e070a.ARROW_RAD_IN)) / _0x5e070a.ARROW_RAD_OUT);
    }
    this.arrowFade = Math.min(_0x5e070a.ARROW_THRESHOLD_MAX, Math.max(0x0, _0x4cd515 - _0x5e070a.ARROW_THRESHOLD_MIN)) / _0x5e070a.ARROW_THRESHOLD_MAX;
};
_0x5e070a.prototype.sound = GameObject.prototype.sound;
_0x5e070a.prototype.attack = function() {
    this.attackTimer = _0x5e070a.ATTACK_DELAY;
    this.attackCharge -= _0x5e070a.ATTACK_CHARGE;
    var _0x4ccce4 = this.reverse ? vec2.add(this.pos, _0x5e070a.PROJ_OFFSET) : vec2.add(this.pos, vec2.multiply(_0x5e070a.PROJ_OFFSET, vec2.make(-0x1, 0x1)));
    this.game.createObject(_0x4e79bb.ID, this.level, this.zone, _0x4ccce4, [this.reverse, this.pid]);
    this.play("sfx/fireball.wav", 0x1, 0.04);
};
_0x5e070a.prototype.bounce = function() {
    this.jumping = 0x0;
    this.isBounce = true;
};
_0x5e070a.prototype.damage = function(_0x2a0ee9) {
    0x0 < this.damageTimer || 0x0 < this.starTimer || this.isState(_0x5e070a.SNAME.TRANSFORM) || this.isState(_0x5e070a.SNAME.CLIMB) || this.isState(_0x5e070a.SNAME.POLE) || this.pipeWarp || 0x0 < this.pipeTimer || 0x0 < this.pipeDelay || this.autoTarget || (0x0 < this.power ? (this.tfm(0x0), this.damageTimer = _0x5e070a.DAMAGE_TIME) : this.kill());
};
_0x5e070a.prototype.invuln = function() {
    this.damageTimer = _0x5e070a.DAMAGE_TIME;
};
_0x5e070a.prototype.powerup = function(_0x7f87c9) {
    _0x7f87c9 instanceof _0x383ded && 0x1 > this.power ? (this.tfm(0x1), this.rate = 0x73) : _0x7f87c9 instanceof _0x2358ba && 0x2 > this.power ? (this.tfm(0x2), this.rate = 0x71) : _0x7f87c9 instanceof _0x28762a ? (this.star(), this.game.out.push(_0x4b7736.encode(0x2)), this.rate = 0x43) : _0x7f87c9 instanceof _0x5225c7 ? this.game.lifeage() : _0x7f87c9 instanceof _0x2670fd ? this.game.coinage() : _0x7f87c9 instanceof _0x5621ae ? this.game.out.push(_0x33e31f.encode()) : _0x7f87c9 instanceof _0x4ca0fe && this.damage(_0x7f87c9);
};
_0x5e070a.prototype.axe = function(_0x1889d2) {
    (_0x1889d2 = this.game.getText(this.level, this.zone, _0x1889d2.toString())) || (_0x1889d2 = this.game.getText(this.level, this.zone, "too bad"));
    _0x1889d2 && (this.autoTarget = vec2.add(_0x1889d2.pos, vec2.make(0x0, -1.6)));
};
_0x5e070a.prototype.star = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = void 0x0);
    this.starTimer = _0x5e070a.STAR_LENGTH;
    (this.starMusic = this.play("music/star.mp3", 0x1, 0.04)) && this.starMusic.loop(true);
};
_0x5e070a.prototype.tfm = function(_0x24f8a7) {
    this.power < _0x24f8a7 ? this.play("sfx/powerup.wav", 0x1, 0.04) : this.play("sfx/pipe.wav", 0x1, 0.04);
    this.tfmTarget = _0x24f8a7;
    this.tfmTimer = _0x5e070a.TRANSFORM_TIME;
    this.setState(_0x5e070a.SNAME.TRANSFORM);
};
_0x5e070a.prototype.warp = function(_0x303c93) {
    if (_0x303c93 = this.game.world.getLevel(this.level).getWarp(_0x303c93)) this.level = _0x303c93.level, this.zone = _0x303c93.zone, this.pos = _0x303c93.pos, this.autoTarget = void 0x0, this.grounded = false;
};
_0x5e070a.prototype.pipe = function(_0xe3f699, _0x54c1f5, _0x50b89f) {
    0x1 !== _0xe3f699 && 0x2 !== _0xe3f699 || this.setState(_0x5e070a.SNAME.STAND);
    var _0x323cd9 = this.game.world.getLevel(this.level).getWarp(_0x54c1f5);
    this.pipeWarp = _0x54c1f5;
    this.pipeTimer = 0x1e;
    this.pipeDir = _0xe3f699;
    this.pipeExt = _0x323cd9.data;
    this.pipeDelayLength = _0x50b89f;
};
_0x5e070a.prototype.weedeat = function() {
    for (var _0x543c43 = 0x0; _0x543c43 < this.game.objects.length; _0x543c43++) {
        var _0x323e3c = this.game.objects[_0x543c43];
        _0x323e3c instanceof _0x451da7 && !_0x323e3c.dead && vec2.distance(this.pos, _0x323e3c.pos) < _0x5e070a.WEED_EAT_RADIUS && _0x323e3c.destroy();
    }
};
_0x5e070a.prototype.pole = function(_0x5102d5) {
    this.autoTarget || (this.setState(_0x5e070a.SNAME.POLE), this.fallSpeed = this.moveSpeed = 0x0, this.pos.x = _0x5102d5.x, this.poleTimer = 0xf, this.poleSound = false);
};
_0x5e070a.prototype.vine = function(_0x27e20c, _0x60e90e) {
    this.setState(_0x5e070a.SNAME.CLIMB);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.pos.x = _0x27e20c.x;
    this.vineWarp = _0x60e90e;
};
_0x5e070a.prototype.hide = function() {
    this.setState(_0x5e070a.SNAME.HIDE);
};
_0x5e070a.prototype.show = function() {
    this.setState(_0x5e070a.SNAME.STAND);
};
_0x5e070a.prototype.kill = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = void 0x0, this.starTimer = 0x0);
    this.isState(_0x5e070a.SNAME.GHOST) ? this.setState(_0x5e070a.SNAME.DEADGHOST) : this.setState(_0x5e070a.SNAME.DEAD);
    this.dead = true;
    this.deadTimer = _0x5e070a.DEAD_TIME;
    this.deadFreezeTimer = _0x5e070a.DEAD_FREEZE_TIME;
    this.fallSpeed = _0x5e070a.DEAD_UP_FORCE;
    this.game.getPlayer() === this && this.game.out.push(_0x4e2942.encode());
};
_0x5e070a.prototype.destroy = function() {
    this.starMusic && (this.starMusic.stop(), this.starMusic = void 0x0, this.starTimer = 0x0);
    GameObject.prototype.destroy.call(this);
};
_0x5e070a.prototype.isTangible = function() {
    return GameObject.prototype.isTangible.call(this) && !this.isState(_0x5e070a.SNAME.HIDE) && 0x0 >= this.pipeDelay;
};
_0x5e070a.prototype.setState = function(_0x31045d) {
    _0x31045d = this.getStateByPowerIndex(_0x31045d, this.power);
    _0x31045d !== this.state && (this.state = _0x31045d, 0x0 < _0x31045d.SPRITE.length && (this.sprite = _0x31045d.SPRITE[0x0]), this.dim = _0x31045d.DIM, this.anim = 0x0);
};
_0x5e070a.prototype.getStateByPowerIndex = function(_0x36277b, _0x5e4cd7) {
    for (var _0x9117f3 = 0x0; _0x9117f3 < _0x5e070a.STATE.length; _0x9117f3++) {
        var _0x36cf4a = _0x5e070a.STATE[_0x9117f3];
        if (_0x36cf4a.NAME === _0x36277b && (_0x36cf4a.ID >= _0x5e070a.GENERIC_INDEX || _0x36cf4a.ID >= _0x5e070a.POWER_INDEX_SIZE * _0x5e4cd7 && _0x36cf4a.ID < _0x5e070a.POWER_INDEX_SIZE * (_0x5e4cd7 + 0x1))) return _0x36cf4a;
    }
};
_0x5e070a.prototype.isState = function(_0x3c1848) {
    return _0x3c1848 === this.state.NAME;
};
_0x5e070a.prototype.draw = function(_0x3a990b) {
    if (!(this.isState(_0x5e070a.SNAME.HIDE) || 0x0 < this.pipeDelay || 0x0 < this.damageTimer && 0x1 < this.damageTimer % 0x3)) {
        var _0x3d2d78;
        _0x3d2d78 = 0x0 < this.starTimer ? 0x2 : this.isState(_0x5e070a.SNAME.GHOST) || this.isState(_0x5e070a.SNAME.DEADGHOST) ? 0x1 : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x123f11 = this.sprite.INDEX, _0x382c19 = 0x0; _0x382c19 < _0x123f11.length; _0x382c19++)
                for (var _0x8e874a = 0x0; _0x8e874a < _0x123f11[_0x382c19].length; _0x8e874a++) 0x2 === _0x3d2d78 && _0x3a990b.push({
                    'pos': vec2.add(vec2.add(this.pos, _0x5e070a.DIM_OFFSET), vec2.make(this.reverse ? _0x8e874a : -_0x8e874a, _0x382c19)),
                    'reverse': this.reverse,
                    'index': _0x123f11[_0x382c19][_0x8e874a],
                    'mode': 0x0
                }), _0x3a990b.push({
                    'pos': vec2.add(vec2.add(this.pos, _0x5e070a.DIM_OFFSET), vec2.make(this.reverse ? _0x8e874a : -_0x8e874a, _0x382c19)),
                    'reverse': this.reverse,
                    'index': _0x123f11[_0x382c19][_0x8e874a],
                    'mode': _0x3d2d78
                });
        else 0x2 === _0x3d2d78 && _0x3a990b.push({
            'pos': vec2.add(this.pos, _0x5e070a.DIM_OFFSET),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': 0x0
        }), _0x3a990b.push({
            'pos': vec2.add(this.pos, _0x5e070a.DIM_OFFSET),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': _0x3d2d78
        });
        0x0 < this.arrowFade && (_0x3d2d78 = 0xa0 + parseInt(0x20 * this.arrowFade), _0x3a990b.push({
            'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.dim.y)), _0x5e070a.ARROW_OFFSET),
            'reverse': false,
            'index': _0x5e070a.ARROW_SPRITE,
            'mode': _0x3d2d78
        }));
    }
};
_0x5e070a.prototype.write = function(_0x371c57) {
    0x0 < this.arrowFade ? _0x371c57.push({
        'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.dim.y)), _0x5e070a.TEXT_OFFSET),
        'size': _0x5e070a.TEXT_SIZE,
        'color': "rgba(255,255,255," + this.arrowFade + ')',
        'text': _0x5e070a.ARROW_TEXT
    }) : this.name && _0x371c57.push({
        'pos': vec2.add(vec2.add(this.pos, vec2.make(0x0, this.sprite.INDEX instanceof Array ? 0x2 : 0x1)), _0x5e070a.TEAM_OFFSET),
        'size': _0x5e070a.TEAM_SIZE,
        'color': _0x5e070a.TEAM_COLOR,
        'text': this.name
    });
};
_0x5e070a.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x5e070a);
"use strict";

function _0x5350a4(_0x2f20ad, _0x286e08, _0x27e6a8, _0x18779f, _0x19191e, _0x3b1adb) {
    GameObject.call(this, _0x2f20ad, _0x286e08, _0x27e6a8, _0x18779f);
    this.oid = _0x19191e;
    this.variant = isNaN(parseInt(_0x3b1adb)) ? 0x0 : parseInt(_0x3b1adb);
    this.setState(_0x5350a4.STATE.RUN);
    this.bonkTimer = this.deadTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = false;
    this.disabledTimer = 0x0;
    this.proxHit = false;
    this.dir = true;
    this.disable();
}
_0x5350a4.ASYNC = false;
_0x5350a4.ID = 0x11;
_0x5350a4.NAME = "GOOMBA";
_0x5350a4.ANIMATION_RATE = 0x5;
_0x5350a4.VARIANT_OFFSET = 0x70;
_0x5350a4.ENABLE_FADE_TIME = 0xf;
_0x5350a4.ENABLE_DIST = 0x1a;
_0x5350a4.DEAD_TIME = 0x3c;
_0x5350a4.BONK_TIME = 0x5a;
_0x5350a4.BONK_IMP = vec2.make(0.25, 0.4);
_0x5350a4.BONK_DECEL = 0.925;
_0x5350a4.BONK_FALL_SPEED = 0.5;
_0x5350a4.MOVE_SPEED_MAX = 0.075;
_0x5350a4.FALL_SPEED_MAX = 0.35;
_0x5350a4.FALL_SPEED_ACCEL = 0.085;
_0x5350a4.SPRITE = {};
_0x5350a4.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x5350a4.SPRITE_LIST.length; _0x2ea890++) _0x5350a4.SPRITE[_0x5350a4.SPRITE_LIST[_0x2ea890].NAME] = _0x5350a4.SPRITE_LIST[_0x2ea890], _0x5350a4.SPRITE[_0x5350a4.SPRITE_LIST[_0x2ea890].ID] = _0x5350a4.SPRITE_LIST[_0x2ea890];
_0x5350a4.STATE = {};
_0x5350a4.STATE_LIST = [{
    'NAME': "RUN",
    'ID': 0x0,
    'SPRITE': [_0x5350a4.SPRITE.RUN0, _0x5350a4.SPRITE.RUN1]
}, {
    'NAME': "FALL",
    'ID': 0x1,
    'SPRITE': [_0x5350a4.SPRITE.FALL]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [_0x5350a4.SPRITE.DEAD]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x5350a4.STATE_LIST.length; _0x2ea890++) _0x5350a4.STATE[_0x5350a4.STATE_LIST[_0x2ea890].NAME] = _0x5350a4.STATE_LIST[_0x2ea890], _0x5350a4.STATE[_0x5350a4.STATE_LIST[_0x2ea890].ID] = _0x5350a4.STATE_LIST[_0x2ea890];
_0x5350a4.prototype.update = function(_0x1c8fd5) {
    switch (_0x1c8fd5) {
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
_0x5350a4.prototype.step = function() {
    this.disabled ? this.proximity() : (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0x5350a4.STATE.BONK ? this.bonkTimer++ > _0x5350a4.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x5350a4.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x5350a4.FALL_SPEED_ACCEL, -_0x5350a4.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x5350a4.ANIMATION_RATE) % this.state.SPRITE.length], this.state === _0x5350a4.STATE.DEAD ? this.deadTimer++ < _0x5350a4.DEAD_TIME || this.destroy() : (this.control(), this.physics(), this.sound(), 0x0 > this.pos.y && this.destroy())));
};
_0x5350a4.prototype.control = function() {
    this.moveSpeed = this.dir ? -_0x5350a4.MOVE_SPEED_MAX : _0x5350a4.MOVE_SPEED_MAX;
    this.grounded ? this.setState(_0x5350a4.STATE.RUN) : this.setState(_0x5350a4.STATE.FALL);
};
_0x5350a4.prototype.physics = function() {
    this.grounded && (this.fallSpeed = 0x0);
    this.fallSpeed = Math.max(this.fallSpeed - _0x5350a4.FALL_SPEED_ACCEL, -_0x5350a4.FALL_SPEED_MAX);
    var _0x2328bd = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0xb199a4 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x3f2674 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0xf16a82 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x3f2674 = this.game.world.getZone(this.level, this.zone).getTiles(_0x3f2674, _0xf16a82),
        _0xf16a82 = vec2.make(0x1, 0x1),
        _0x2c065e = false;
    this.grounded = false;
    for (var _0x23b4f7 = 0x0; _0x23b4f7 < _0x3f2674.length; _0x23b4f7++) {
        var _0x9632ad = _0x3f2674[_0x23b4f7];
        _0x9632ad.definition.COLLIDE && _0x65f30e.intersection(_0x9632ad.pos, _0xf16a82, _0x2328bd, this.dim) && (this.pos.x <= _0x2328bd.x && _0x2328bd.x + this.dim.x > _0x9632ad.pos.x ? (_0x2328bd.x = _0x9632ad.pos.x - this.dim.x, _0xb199a4.x = _0x2328bd.x, this.moveSpeed = 0x0, _0x2c065e = true) : this.pos.x >= _0x2328bd.x && _0x2328bd.x < _0x9632ad.pos.x + _0xf16a82.x && (_0x2328bd.x = _0x9632ad.pos.x + _0xf16a82.x, _0xb199a4.x = _0x2328bd.x, this.moveSpeed = 0x0, _0x2c065e = true));
    }
    for (_0x23b4f7 = 0x0; _0x23b4f7 < _0x3f2674.length; _0x23b4f7++) _0x9632ad = _0x3f2674[_0x23b4f7], _0x9632ad.definition.COLLIDE && _0x65f30e.intersection(_0x9632ad.pos, _0xf16a82, _0xb199a4, this.dim) && (this.pos.y >= _0xb199a4.y && _0xb199a4.y < _0x9632ad.pos.y + _0xf16a82.y ? (_0xb199a4.y = _0x9632ad.pos.y + _0xf16a82.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y <= _0xb199a4.y && _0xb199a4.y + this.dim.y > _0x9632ad.pos.y && (_0xb199a4.y = _0x9632ad.pos.y - this.dim.y, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x2328bd.x, _0xb199a4.y);
    _0x2c065e && (this.dir = !this.dir);
};
_0x5350a4.prototype.sound = GameObject.prototype.sound;
_0x5350a4.prototype.proximity = function() {
    var _0x2a6d5e = this.game.getPlayer();
    _0x2a6d5e && !_0x2a6d5e.dead && _0x2a6d5e.level === this.level && _0x2a6d5e.zone === this.zone && !this.proxHit && vec2.distance(_0x2a6d5e.pos, this.pos) < _0x5350a4.ENABLE_DIST && (this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = true);
};
_0x5350a4.prototype.enable = function() {
    this.disabled && (this.disabled = false, this.disabledTimer = _0x5350a4.ENABLE_FADE_TIME);
};
_0x5350a4.prototype.disable = function() {
    this.disabled = true;
};
_0x5350a4.prototype.damage = function(_0x18a44b) {
    this.dead || (this.bonk(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x5350a4.prototype.bonk = function() {
    this.dead || (this.setState(_0x5350a4.STATE.BONK), this.moveSpeed = _0x5350a4.BONK_IMP.x, this.fallSpeed = _0x5350a4.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x5350a4.prototype.playerCollide = function(_0x16343f) {
    this.dead || this.garbage || _0x16343f.damage(this);
};
_0x5350a4.prototype.playerStomp = function(_0x38ee2a) {
    this.dead || this.garbage || (this.kill(), _0x38ee2a.bounce(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x0)));
};
_0x5350a4.prototype.playerBump = function(_0x498777) {
    this.dead || this.garbage || _0x498777.damage(this);
};
_0x5350a4.prototype.kill = function() {
    this.dead = true;
    this.setState(_0x5350a4.STATE.DEAD);
    this.play("sfx/stomp.wav", 0x1, 0.04);
};
_0x5350a4.prototype.destroy = GameObject.prototype.destroy;
_0x5350a4.prototype.isTangible = GameObject.prototype.isTangible;
_0x5350a4.prototype.setState = function(_0x1fcdc4) {
    _0x1fcdc4 !== this.state && (this.state = _0x1fcdc4, 0x0 < _0x1fcdc4.SPRITE.length && (this.sprite = _0x1fcdc4.SPRITE[0x0]), this.anim = 0x0);
};
_0x5350a4.prototype.draw = function(_0x44aa51) {
    if (!this.disabled) {
        var _0x25cf91;
        _0x25cf91 = this.state === _0x5350a4.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0x5350a4.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x56edb2 = this.sprite.INDEX, _0x2f3a39 = 0x0; _0x2f3a39 < _0x56edb2.length; _0x2f3a39++)
                for (var _0x1df4ed = 0x0; _0x1df4ed < _0x56edb2[_0x2f3a39].length; _0x1df4ed++) {
                    var _0x54e944 = _0x56edb2[_0x25cf91 ? _0x56edb2.length - 0x1 - _0x2f3a39 : _0x2f3a39][_0x1df4ed];
                    switch (this.variant) {
                        case 0x1:
                            _0x54e944 += _0x5350a4.VARIANT_OFFSET;
                    }
                    _0x44aa51.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x1df4ed, _0x2f3a39)),
                        'reverse': !this.dir,
                        'index': _0x54e944,
                        'mode': _0x25cf91
                    });
                } else {
                    _0x54e944 = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x54e944 += _0x5350a4.VARIANT_OFFSET;
                    }
                    _0x44aa51.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x54e944,
                        'mode': _0x25cf91
                    });
                }
    }
};
_0x5350a4.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x5350a4);
"use strict";

function _0xcb6c5(_0x3786e0, _0x10994b, _0x44f41b, _0x3d70b8, _0xb16c1, _0x3ee054, _0x5dbd37) {
    GameObject.call(this, _0x3786e0, _0x10994b, _0x44f41b, _0x3d70b8);
    this.oid = _0xb16c1;
    this.variant = isNaN(parseInt(_0x5dbd37)) ? 0x0 : parseInt(_0x5dbd37);
    this.setState(parseInt(_0x3ee054) ? _0xcb6c5.STATE.FLY : _0xcb6c5.STATE.RUN);
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
_0xcb6c5.ASYNC = false;
_0xcb6c5.ID = 0x12;
_0xcb6c5.NAME = "KOOPA";
_0xcb6c5.ANIMATION_RATE = 0x3;
_0xcb6c5.VARIANT_OFFSET = 0x20;
_0xcb6c5.ENABLE_FADE_TIME = 0xf;
_0xcb6c5.ENABLE_DIST = 0x1a;
_0xcb6c5.BONK_TIME = 0x5a;
_0xcb6c5.BONK_IMP = vec2.make(0.25, 0.4);
_0xcb6c5.BONK_DECEL = 0.925;
_0xcb6c5.BONK_FALL_SPEED = 0.5;
_0xcb6c5.PLAYER_IMMUNE_TIME = 0x6;
_0xcb6c5.MOVE_SPEED_MAX = 0.075;
_0xcb6c5.SHELL_MOVE_SPEED_MAX = 0.35;
_0xcb6c5.FALL_SPEED_MAX = 0.35;
_0xcb6c5.FALL_SPEED_ACCEL = 0.085;
_0xcb6c5.JUMP_LENGTH_MAX = 0x14;
_0xcb6c5.JUMP_DECEL = 0.025;
_0xcb6c5.TRANSFORM_TIME = 0xaf;
_0xcb6c5.TRANSFORM_THRESHOLD = 0x4b;
_0xcb6c5.SPRITE = {};
_0xcb6c5.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0xcb6c5.SPRITE_LIST.length; _0x2ea890++) _0xcb6c5.SPRITE[_0xcb6c5.SPRITE_LIST[_0x2ea890].NAME] = _0xcb6c5.SPRITE_LIST[_0x2ea890], _0xcb6c5.SPRITE[_0xcb6c5.SPRITE_LIST[_0x2ea890].ID] = _0xcb6c5.SPRITE_LIST[_0x2ea890];
_0xcb6c5.STATE = {};
_0xcb6c5.STATE_LIST = [{
    'NAME': "FLY",
    'ID': 0x0,
    'SPRITE': [_0xcb6c5.SPRITE.FLY0, _0xcb6c5.SPRITE.FLY1]
}, {
    'NAME': "RUN",
    'ID': 0x1,
    'SPRITE': [_0xcb6c5.SPRITE.RUN0, _0xcb6c5.SPRITE.RUN1]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x2,
    'SPRITE': [_0xcb6c5.SPRITE.SHELL, _0xcb6c5.SPRITE.TRANSFORM]
}, {
    'NAME': "SHELL",
    'ID': 0x3,
    'SPRITE': [_0xcb6c5.SPRITE.SHELL]
}, {
    'NAME': "SPIN",
    'ID': 0x4,
    'SPRITE': [_0xcb6c5.SPRITE.SHELL]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0xcb6c5.STATE_LIST.length; _0x2ea890++) _0xcb6c5.STATE[_0xcb6c5.STATE_LIST[_0x2ea890].NAME] = _0xcb6c5.STATE_LIST[_0x2ea890], _0xcb6c5.STATE[_0xcb6c5.STATE_LIST[_0x2ea890].ID] = _0xcb6c5.STATE_LIST[_0x2ea890];
_0xcb6c5.prototype.update = function(_0x570ec1) {
    switch (_0x570ec1) {
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
_0xcb6c5.prototype.step = function() {
    if (this.disabled) this.proximity();
    else if (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0xcb6c5.STATE.BONK) this.bonkTimer++ > _0xcb6c5.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0xcb6c5.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0xcb6c5.FALL_SPEED_ACCEL, -_0xcb6c5.BONK_FALL_SPEED));
    else {
        this.anim++;
        this.sprite = this.state.SPRITE[parseInt(this.anim / _0xcb6c5.ANIMATION_RATE) % this.state.SPRITE.length];
        if (this.state === _0xcb6c5.STATE.SHELL || this.state === _0xcb6c5.STATE.TRANSFORM) --this.transformTimer < _0xcb6c5.TRANSFORM_THRESHOLD && this.setState(_0xcb6c5.STATE.TRANSFORM), 0x0 >= this.transformTimer && this.setState(_0xcb6c5.STATE.RUN);
        0x0 < this.immuneTimer && this.immuneTimer--;
        this.control();
        this.physics();
        this.interaction();
        this.sound();
        0x0 > this.pos.y && this.destroy();
    }
};
_0xcb6c5.prototype.control = function() {
    if (this.state === _0xcb6c5.STATE.FLY) this.moveSpeed = this.dir ? -_0xcb6c5.MOVE_SPEED_MAX : _0xcb6c5.MOVE_SPEED_MAX, this.grounded && (this.jump = 0x0);
    else if (this.state === _0xcb6c5.STATE.RUN) this.moveSpeed = this.dir ? -_0xcb6c5.MOVE_SPEED_MAX : _0xcb6c5.MOVE_SPEED_MAX;
    else if (this.state === _0xcb6c5.STATE.SPIN) this.moveSpeed = this.dir ? -_0xcb6c5.SHELL_MOVE_SPEED_MAX : _0xcb6c5.SHELL_MOVE_SPEED_MAX;
    else if (this.state === _0xcb6c5.STATE.SHELL || this.state === _0xcb6c5.STATE.TRANSFORM) this.moveSpeed = 0x0;
    this.jump > _0xcb6c5.JUMP_LENGTH_MAX && (this.jump = -0x1);
};
_0xcb6c5.prototype.physics = function() {
    -0x1 !== this.jump ? (this.fallSpeed = _0xcb6c5.FALL_SPEED_MAX - this.jump * _0xcb6c5.JUMP_DECEL, this.jump++, this.grounded = false) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0xcb6c5.FALL_SPEED_ACCEL, -_0xcb6c5.FALL_SPEED_MAX));
    this.grounded && (this.fallSpeed = 0x0);
    this.fallSpeed = Math.max(this.fallSpeed - _0xcb6c5.FALL_SPEED_ACCEL, -_0xcb6c5.FALL_SPEED_MAX);
    var _0x1d6612 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x120f7c = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x338cc1 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0xac57a4 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x338cc1 = this.game.world.getZone(this.level, this.zone).getTiles(_0x338cc1, _0xac57a4),
        _0xac57a4 = vec2.make(0x1, 0x1),
        _0x418cc4 = false;
    this.grounded = false;
    for (var _0x386461 = 0x0; _0x386461 < _0x338cc1.length; _0x386461++) {
        var _0xe9bd9b = _0x338cc1[_0x386461];
        _0xe9bd9b.definition.COLLIDE && _0x65f30e.intersection(_0xe9bd9b.pos, _0xac57a4, _0x1d6612, this.dim) && (this.pos.x + this.dim.x <= _0xe9bd9b.pos.x && _0x1d6612.x + this.dim.x > _0xe9bd9b.pos.x ? (_0x1d6612.x = _0xe9bd9b.pos.x - this.dim.x, _0x120f7c.x = _0x1d6612.x, this.moveSpeed = 0x0, _0x418cc4 = true) : this.pos.x >= _0xe9bd9b.pos.x + _0xac57a4.x && _0x1d6612.x < _0xe9bd9b.pos.x + _0xac57a4.x && (_0x1d6612.x = _0xe9bd9b.pos.x + _0xac57a4.x, _0x120f7c.x = _0x1d6612.x, this.moveSpeed = 0x0, _0x418cc4 = true));
    }
    for (_0x386461 = 0x0; _0x386461 < _0x338cc1.length; _0x386461++) _0xe9bd9b = _0x338cc1[_0x386461], _0xe9bd9b.definition.COLLIDE && _0x65f30e.intersection(_0xe9bd9b.pos, _0xac57a4, _0x120f7c, this.dim) && (this.pos.y >= _0xe9bd9b.pos.y + _0xac57a4.y && _0x120f7c.y < _0xe9bd9b.pos.y + _0xac57a4.y ? (_0x120f7c.y = _0xe9bd9b.pos.y + _0xac57a4.y, this.grounded = true) : this.pos.y + this.dim.y <= _0xe9bd9b.pos.y && _0x120f7c.y + this.dim.y > _0xe9bd9b.pos.y && (_0x120f7c.y = _0xe9bd9b.pos.y - this.dim.y, this.jump = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x1d6612.x, _0x120f7c.y);
    _0x418cc4 && (this.dir = !this.dir);
};
_0xcb6c5.prototype.interaction = function() {
    if (this.state === _0xcb6c5.STATE.SPIN)
        for (var _0x3137c1 = 0x0; _0x3137c1 < this.game.objects.length; _0x3137c1++) {
            var _0x4713dd = this.game.objects[_0x3137c1];
            _0x4713dd === this || _0x4713dd instanceof _0x5e070a || !_0x4713dd.isTangible() || !_0x4713dd.damage || _0x4713dd.level === this.level && _0x4713dd.zone === this.zone && _0x65f30e.intersection(_0x4713dd.pos, _0x4713dd.dim, this.pos, this.dim) && _0x4713dd.damage(this);
        }
};
_0xcb6c5.prototype.proximity = function() {
    var _0x487e7b = this.game.getPlayer();
    _0x487e7b && !_0x487e7b.dead && _0x487e7b.level === this.level && _0x487e7b.zone === this.zone && !this.proxHit && vec2.distance(_0x487e7b.pos, this.pos) < _0xcb6c5.ENABLE_DIST && (this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = true);
};
_0xcb6c5.prototype.sound = GameObject.prototype.sound;
_0xcb6c5.prototype.enable = function() {
    this.disabled && (this.disabled = false, this.disabledTimer = _0xcb6c5.ENABLE_FADE_TIME);
};
_0xcb6c5.prototype.disable = function() {
    this.disabled = true;
};
_0xcb6c5.prototype.damage = function(_0x447de0) {
    this.dead || (this.bonk(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x1)));
};
_0xcb6c5.prototype.bonk = function() {
    this.dead || (this.setState(_0xcb6c5.STATE.BONK), this.moveSpeed = _0xcb6c5.BONK_IMP.x, this.fallSpeed = _0xcb6c5.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0xcb6c5.prototype.stomped = function(_0x12e7ea) {
    if (this.state === _0xcb6c5.STATE.FLY) this.setState(_0xcb6c5.STATE.RUN), this.jump = -0x1;
    else if (this.state === _0xcb6c5.STATE.RUN) this.setState(_0xcb6c5.STATE.SHELL), this.transformTimer = _0xcb6c5.TRANSFORM_TIME;
    else if (this.state === _0xcb6c5.STATE.SPIN) this.setState(_0xcb6c5.STATE.SHELL), this.transformTimer = _0xcb6c5.TRANSFORM_TIME;
    else if (this.state === _0xcb6c5.STATE.SHELL || this.state === _0xcb6c5.STATE.TRANSFORM) this.setState(_0xcb6c5.STATE.SPIN), this.dir = _0x12e7ea;
    this.play("sfx/stomp.wav", 0x1, 0.04);
};
_0xcb6c5.prototype.playerCollide = function(_0x261cab) {
    this.dead || this.garbage || (this.state === _0xcb6c5.STATE.SHELL || this.state === _0xcb6c5.STATE.TRANSFORM ? (_0x261cab = 0x0 < _0x261cab.pos.x - this.pos.x, this.stomped(_0x261cab), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, _0x261cab ? 0x10 : 0x11)), this.immuneTimer = _0xcb6c5.PLAYER_IMMUNE_TIME) : 0x0 >= this.immuneTimer && _0x261cab.damage(this));
};
_0xcb6c5.prototype.playerStomp = function(_0xb3f1e3) {
    if (!this.dead && !this.garbage) {
        var _0x1441c8 = 0x0 < _0xb3f1e3.pos.x - this.pos.x;
        _0xb3f1e3.bounce();
        this.stomped(_0x1441c8);
        this.immuneTimer = _0xcb6c5.PLAYER_IMMUNE_TIME;
        this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, _0x1441c8 ? 0x10 : 0x11));
    }
};
_0xcb6c5.prototype.playerBump = function(_0x579d7a) {
    this.dead || this.garbage || _0x579d7a.damage(this);
};
_0xcb6c5.prototype.kill = function() {};
_0xcb6c5.prototype.destroy = GameObject.prototype.destroy;
_0xcb6c5.prototype.isTangible = GameObject.prototype.isTangible;
_0xcb6c5.prototype.setState = function(_0x1533ad) {
    _0x1533ad !== this.state && (this.state = _0x1533ad, 0x0 < _0x1533ad.SPRITE.length && (this.sprite = _0x1533ad.SPRITE[0x0]), this.anim = 0x0);
};
_0xcb6c5.prototype.draw = function(_0x7634c3) {
    if (!this.disabled) {
        var _0x1b076d;
        _0x1b076d = this.state === _0xcb6c5.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0xcb6c5.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x589673 = this.sprite.INDEX, _0x3fd6ce = 0x0; _0x3fd6ce < _0x589673.length; _0x3fd6ce++)
                for (var _0x40181b = 0x0; _0x40181b < _0x589673[_0x3fd6ce].length; _0x40181b++) {
                    var _0x47e3c4 = _0x589673[0x3 !== _0x1b076d ? _0x3fd6ce : _0x589673.length - 0x1 - _0x3fd6ce][_0x40181b];
                    switch (this.variant) {
                        case 0x1:
                            _0x47e3c4 += _0xcb6c5.VARIANT_OFFSET;
                    }
                    _0x7634c3.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x40181b, _0x3fd6ce)),
                        'reverse': !this.dir,
                        'index': _0x47e3c4,
                        'mode': _0x1b076d
                    });
                } else {
                    _0x47e3c4 = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x47e3c4 += _0xcb6c5.VARIANT_OFFSET;
                    }
                    _0x7634c3.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x47e3c4,
                        'mode': _0x1b076d
                    });
                }
    }
};
_0xcb6c5.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0xcb6c5);
"use strict";

function _0x28400d(_0x4d2eb1, _0x303ad6, _0x4c3d4d, _0x2f8454, _0x161065, _0xbc9919, _0x538c43) {
    GameObject.call(this, _0x4d2eb1, _0x303ad6, _0x4c3d4d, _0x2f8454);
    this.oid = _0x161065;
    this.variant = isNaN(parseInt(_0x538c43)) ? 0x0 : parseInt(_0x538c43);
    this.setState(parseInt(_0xbc9919) ? _0x28400d.STATE.FLY : _0x28400d.STATE.RUN);
    this.bonkTimer = this.anim = 0x0;
    this.loc = [this.pos.y + 0.5 * _0x28400d.FLY_DISTANCE, this.pos.y - 0.5 * _0x28400d.FLY_DISTANCE];
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
_0x28400d.ASYNC = false;
_0x28400d.ID = 0x13;
_0x28400d.NAME = "KOOPA TROOPA";
_0x28400d.FLY_DISTANCE = 0x3;
_0x28400d.FLY_ACCEL = 0.0025;
_0x28400d.FLY_SPEED_MAX = 0.075;
_0x28400d.CHECK_DIST = 0.1;
_0x28400d.SPRITE = {};
_0x28400d.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x28400d.SPRITE_LIST.length; _0x2ea890++) _0x28400d.SPRITE[_0x28400d.SPRITE_LIST[_0x2ea890].NAME] = _0x28400d.SPRITE_LIST[_0x2ea890], _0x28400d.SPRITE[_0x28400d.SPRITE_LIST[_0x2ea890].ID] = _0x28400d.SPRITE_LIST[_0x2ea890];
_0x28400d.STATE = {};
_0x28400d.STATE_LIST = [{
    'NAME': "FLY",
    'ID': 0x0,
    'SPRITE': [_0x28400d.SPRITE.FLY0, _0x28400d.SPRITE.FLY1]
}, {
    'NAME': "RUN",
    'ID': 0x1,
    'SPRITE': [_0x28400d.SPRITE.RUN0, _0x28400d.SPRITE.RUN1]
}, {
    'NAME': "TRANSFORM",
    'ID': 0x2,
    'SPRITE': [_0x28400d.SPRITE.SHELL, _0x28400d.SPRITE.TRANSFORM]
}, {
    'NAME': "SHELL",
    'ID': 0x3,
    'SPRITE': [_0x28400d.SPRITE.SHELL]
}, {
    'NAME': "SPIN",
    'ID': 0x4,
    'SPRITE': [_0x28400d.SPRITE.SHELL]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x28400d.STATE_LIST.length; _0x2ea890++) _0x28400d.STATE[_0x28400d.STATE_LIST[_0x2ea890].NAME] = _0x28400d.STATE_LIST[_0x2ea890], _0x28400d.STATE[_0x28400d.STATE_LIST[_0x2ea890].ID] = _0x28400d.STATE_LIST[_0x2ea890];
_0x28400d.prototype.update = _0xcb6c5.prototype.update;
_0x28400d.prototype.step = function() {
    if (this.disabled) this.proximity();
    else if (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0x28400d.STATE.BONK) this.bonkTimer++ > _0xcb6c5.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0xcb6c5.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0xcb6c5.FALL_SPEED_ACCEL, -_0xcb6c5.BONK_FALL_SPEED));
    else {
        this.anim++;
        this.sprite = this.state.SPRITE[parseInt(this.anim / _0xcb6c5.ANIMATION_RATE) % this.state.SPRITE.length];
        if (this.state === _0x28400d.STATE.SHELL || this.state === _0x28400d.STATE.TRANSFORM) --this.transformTimer < _0xcb6c5.TRANSFORM_THRESHOLD && this.setState(_0x28400d.STATE.TRANSFORM), 0x0 >= this.transformTimer && this.setState(_0x28400d.STATE.RUN);
        0x0 < this.immuneTimer && this.immuneTimer--;
        this.control();
        this.physics();
        this.interaction();
        this.sound();
        0x0 > this.pos.y && this.destroy();
    }
};
_0x28400d.prototype.control = function() {
    this.state === _0x28400d.STATE.FLY && (this.moveSpeed = this.dir ? -_0xcb6c5.MOVE_SPEED_MAX : _0xcb6c5.MOVE_SPEED_MAX);
    this.state === _0x28400d.STATE.RUN && (this.grounded && !this.checkGround() && (this.dir = !this.dir), this.moveSpeed = this.dir ? -_0xcb6c5.MOVE_SPEED_MAX : _0xcb6c5.MOVE_SPEED_MAX);
    this.state === _0x28400d.STATE.SPIN && (this.moveSpeed = this.dir ? -_0xcb6c5.SHELL_MOVE_SPEED_MAX : _0xcb6c5.SHELL_MOVE_SPEED_MAX);
    if (this.state === _0x28400d.STATE.SHELL || this.state === _0x28400d.STATE.TRANSFORM) this.moveSpeed = 0x0;
};
_0x28400d.prototype.physics = function() {
    if (this.state === _0x28400d.STATE.FLY) this.rev ? (this.fallSpeed = Math.min(_0x28400d.FLY_SPEED_MAX, this.fallSpeed + _0x28400d.FLY_ACCEL), this.pos.y += this.fallSpeed, this.pos.y >= this.loc[0x0] && (this.rev = false)) : (this.fallSpeed = Math.max(-_0x28400d.FLY_SPEED_MAX, this.fallSpeed - _0x28400d.FLY_ACCEL), this.pos.y += this.fallSpeed, this.pos.y <= this.loc[0x1] && (this.rev = true));
    else {
        this.grounded && (this.fallSpeed = 0x0);
        this.fallSpeed = Math.max(this.fallSpeed - _0xcb6c5.FALL_SPEED_ACCEL, -_0xcb6c5.FALL_SPEED_MAX);
        var _0x760784 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
            _0x1ddcce = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
            _0x1708e7 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
            _0x19fb70 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
            _0x1708e7 = this.game.world.getZone(this.level, this.zone).getTiles(_0x1708e7, _0x19fb70),
            _0x19fb70 = vec2.make(0x1, 0x1),
            _0x3fa533 = false;
        this.grounded = false;
        for (var _0x30e039 = 0x0; _0x30e039 < _0x1708e7.length; _0x30e039++) {
            var _0x1742cc = _0x1708e7[_0x30e039];
            _0x1742cc.definition.COLLIDE && _0x65f30e.intersection(_0x1742cc.pos, _0x19fb70, _0x760784, this.dim) && (this.pos.x + this.dim.x <= _0x1742cc.pos.x && _0x760784.x + this.dim.x > _0x1742cc.pos.x ? (_0x760784.x = _0x1742cc.pos.x - this.dim.x, _0x1ddcce.x = _0x760784.x, this.moveSpeed = 0x0, _0x3fa533 = true) : this.pos.x >= _0x1742cc.pos.x + _0x19fb70.x && _0x760784.x < _0x1742cc.pos.x + _0x19fb70.x && (_0x760784.x = _0x1742cc.pos.x + _0x19fb70.x, _0x1ddcce.x = _0x760784.x, this.moveSpeed = 0x0, _0x3fa533 = true));
        }
        for (_0x30e039 = 0x0; _0x30e039 < _0x1708e7.length; _0x30e039++) _0x1742cc = _0x1708e7[_0x30e039], _0x1742cc.definition.COLLIDE && _0x65f30e.intersection(_0x1742cc.pos, _0x19fb70, _0x1ddcce, this.dim) && (this.pos.y >= _0x1742cc.pos.y + _0x19fb70.y && _0x1ddcce.y < _0x1742cc.pos.y + _0x19fb70.y ? (_0x1ddcce.y = _0x1742cc.pos.y + _0x19fb70.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y + this.dim.y <= _0x1742cc.pos.y && _0x1ddcce.y + this.dim.y > _0x1742cc.pos.y && (_0x1ddcce.y = _0x1742cc.pos.y - this.dim.y, this.fallSpeed = 0x0));
        this.pos = vec2.make(_0x760784.x, _0x1ddcce.y);
        _0x3fa533 && (this.dir = !this.dir);
    }
};
_0x28400d.prototype.interaction = function() {
    if (this.state === _0x28400d.STATE.SPIN)
        for (var _0x11e791 = 0x0; _0x11e791 < this.game.objects.length; _0x11e791++) {
            var _0x52b476 = this.game.objects[_0x11e791];
            _0x52b476 === this || _0x52b476 instanceof _0x5e070a || !_0x52b476.isTangible() || !_0x52b476.damage || _0x52b476.level === this.level && _0x52b476.zone === this.zone && _0x65f30e.intersection(_0x52b476.pos, _0x52b476.dim, this.pos, this.dim) && _0x52b476.damage();
        }
};
_0x28400d.prototype.sound = GameObject.prototype.sound;
_0x28400d.prototype.checkGround = function() {
    var _0x39bd43 = this.dir ? vec2.add(this.pos, vec2.make(-_0x28400d.CHECK_DIST, 0x0)) : vec2.add(this.pos, vec2.make(_0x28400d.CHECK_DIST + this.dim.x, 0x0));
    _0x39bd43.y -= 1.5;
    return this.game.world.getZone(this.level, this.zone).getTile(_0x39bd43).definition.COLLIDE;
};
_0x28400d.prototype.proximity = _0xcb6c5.prototype.proximity;
_0x28400d.prototype.enable = _0xcb6c5.prototype.enable;
_0x28400d.prototype.disable = _0xcb6c5.prototype.disable;
_0x28400d.prototype.damage = _0xcb6c5.prototype.damage;
_0x28400d.prototype.bonk = function() {
    this.dead || (this.setState(_0x28400d.STATE.BONK), this.moveSpeed = _0xcb6c5.BONK_IMP.x, this.fallSpeed = _0xcb6c5.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x28400d.prototype.stomped = function(_0x457707) {
    if (this.state === _0x28400d.STATE.FLY) this.setState(_0x28400d.STATE.RUN);
    else if (this.state === _0x28400d.STATE.RUN) this.setState(_0x28400d.STATE.SHELL), this.transformTimer = _0xcb6c5.TRANSFORM_TIME;
    else if (this.state === _0x28400d.STATE.SPIN) this.setState(_0x28400d.STATE.SHELL), this.transformTimer = _0xcb6c5.TRANSFORM_TIME;
    else if (this.state === _0x28400d.STATE.SHELL || this.state === _0x28400d.STATE.TRANSFORM) this.setState(_0x28400d.STATE.SPIN), this.dir = _0x457707;
    this.play("sfx/stomp.wav", 0x1, 0.04);
};
_0x28400d.prototype.playerCollide = function(_0x12bf46) {
    this.dead || this.garbage || (this.state === _0x28400d.STATE.SHELL || this.state === _0x28400d.STATE.TRANSFORM ? (_0x12bf46 = 0x0 < _0x12bf46.pos.x - this.pos.x, this.stomped(_0x12bf46), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, _0x12bf46 ? 0x10 : 0x11)), this.immuneTimer = _0xcb6c5.PLAYER_IMMUNE_TIME) : 0x0 >= this.immuneTimer && _0x12bf46.damage(this));
};
_0x28400d.prototype.playerStomp = _0xcb6c5.prototype.playerStomp;
_0x28400d.prototype.playerBump = _0xcb6c5.prototype.playerBump;
_0x28400d.prototype.kill = _0xcb6c5.prototype.kill;
_0x28400d.prototype.destroy = _0xcb6c5.prototype.destroy;
_0x28400d.prototype.isTangible = _0xcb6c5.prototype.isTangible;
_0x28400d.prototype.setState = _0xcb6c5.prototype.setState;
_0x28400d.prototype.draw = function(_0x585cff) {
    if (!this.disabled) {
        var _0x4d0594;
        _0x4d0594 = this.state === _0x28400d.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0xcb6c5.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x48a505 = this.sprite.INDEX, _0x5b8328 = 0x0; _0x5b8328 < _0x48a505.length; _0x5b8328++)
                for (var _0x46740f = 0x0; _0x46740f < _0x48a505[_0x5b8328].length; _0x46740f++) {
                    var _0x5916e1 = _0x48a505[0x3 !== _0x4d0594 ? _0x5b8328 : _0x48a505.length - 0x1 - _0x5b8328][_0x46740f];
                    switch (this.variant) {
                        case 0x1:
                            _0x5916e1 += _0xcb6c5.VARIANT_OFFSET;
                    }
                    _0x585cff.push({
                        'pos': vec2.add(this.pos, vec2.make(_0x46740f, _0x5b8328)),
                        'reverse': !this.dir,
                        'index': _0x5916e1,
                        'mode': _0x4d0594
                    });
                } else {
                    _0x5916e1 = this.sprite.INDEX;
                    switch (this.variant) {
                        case 0x1:
                            _0x5916e1 += _0xcb6c5.VARIANT_OFFSET;
                    }
                    _0x585cff.push({
                        'pos': this.pos,
                        'reverse': !this.dir,
                        'index': _0x5916e1,
                        'mode': _0x4d0594
                    });
                }
    }
};
_0x28400d.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x28400d);
"use strict";

function _0x451da7(_0x436b1b, _0x266aca, _0x5d6944, _0xf70e01, _0xc2c5dc, _0x1b8d54) {
    GameObject.call(this, _0x436b1b, _0x266aca, _0x5d6944, vec2.add(_0xf70e01, vec2.make(0.6, 0x0)));
    this.oid = _0xc2c5dc;
    this.variant = isNaN(parseInt(_0x1b8d54)) ? 0x0 : parseInt(_0x1b8d54);
    this.setState(_0x451da7.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.loc = [vec2.copy(this.pos), vec2.add(this.pos, vec2.make(0x0, -1.5))];
    this.dim = vec2.make(0.8, 0x1);
    this.dir = this.fallSpeed = this.moveSpeed = 0x0;
}
_0x451da7.ASYNC = false;
_0x451da7.ID = 0x16;
_0x451da7.NAME = "UNSPELLABLE PLANT";
_0x451da7.ANIMATION_RATE = 0x3;
_0x451da7.VARIANT_OFFSET = 0x20;
_0x451da7.SOFFSET = vec2.make(-0.1, 0x0);
_0x451da7.BONK_TIME = 0x5a;
_0x451da7.BONK_IMP = vec2.make(0.25, 0.4);
_0x451da7.BONK_DECEL = 0.925;
_0x451da7.BONK_FALL_SPEED = 0.5;
_0x451da7.FALL_SPEED_ACCEL = 0.085;
_0x451da7.WAIT_TIME = 0x19;
_0x451da7.TRAVEL_SPEED = 0.05;
_0x451da7.SPRITE = {};
_0x451da7.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x451da7.SPRITE_LIST.length; _0x2ea890++) _0x451da7.SPRITE[_0x451da7.SPRITE_LIST[_0x2ea890].NAME] = _0x451da7.SPRITE_LIST[_0x2ea890], _0x451da7.SPRITE[_0x451da7.SPRITE_LIST[_0x2ea890].ID] = _0x451da7.SPRITE_LIST[_0x2ea890];
_0x451da7.STATE = {};
_0x451da7.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x451da7.SPRITE.IDLE0, _0x451da7.SPRITE.IDLE1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x451da7.STATE_LIST.length; _0x2ea890++) _0x451da7.STATE[_0x451da7.STATE_LIST[_0x2ea890].NAME] = _0x451da7.STATE_LIST[_0x2ea890], _0x451da7.STATE[_0x451da7.STATE_LIST[_0x2ea890].ID] = _0x451da7.STATE_LIST[_0x2ea890];
_0x451da7.prototype.update = function(_0x2933c2) {
    switch (_0x2933c2) {
        case 0x1:
            this.bonk();
    }
};
_0x451da7.prototype.step = function() {
    this.state === _0x451da7.STATE.BONK ? this.bonkTimer++ > _0x451da7.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x451da7.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x451da7.FALL_SPEED_ACCEL, -_0x451da7.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x451da7.ANIMATION_RATE) % this.state.SPRITE.length], 0x0 < --this.waitTimer || (this.control(), this.physics(), this.sound()));
};
_0x451da7.prototype.control = function() {};
_0x451da7.prototype.physics = function() {
    var _0x5cb016 = this.loc[this.dir ? 0x0 : 0x1];
    vec2.distance(this.pos, _0x5cb016) <= _0x451da7.TRAVEL_SPEED ? (this.pos = _0x5cb016, this.dir = !this.dir, this.waitTimer = _0x451da7.WAIT_TIME) : this.pos = vec2.add(this.pos, vec2.scale(vec2.normalize(vec2.subtract(_0x5cb016, this.pos)), _0x451da7.TRAVEL_SPEED));
};
_0x451da7.prototype.sound = GameObject.prototype.sound;
_0x451da7.prototype.damage = function(_0x47d0a9) {
    this.dead || (this.bonk(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x451da7.prototype.bonk = function() {
    this.dead || (this.setState(_0x451da7.STATE.BONK), this.moveSpeed = _0x451da7.BONK_IMP.x, this.fallSpeed = _0x451da7.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x451da7.prototype.playerCollide = function(_0x4a6683) {
    this.dead || this.garbage || _0x4a6683.damage(this);
};
_0x451da7.prototype.playerStomp = function(_0x3a23eb) {
    this.dead || this.garbage || _0x3a23eb.damage(this);
};
_0x451da7.prototype.playerBump = function(_0x498b2f) {
    this.dead || this.garbage || _0x498b2f.damage(this);
};
_0x451da7.prototype.kill = function() {};
_0x451da7.prototype.destroy = GameObject.prototype.destroy;
_0x451da7.prototype.isTangible = GameObject.prototype.isTangible;
_0x451da7.prototype.setState = function(_0xf68e0e) {
    _0xf68e0e !== this.state && (this.state = _0xf68e0e, 0x0 < _0xf68e0e.SPRITE.length && (this.sprite = _0xf68e0e.SPRITE[0x0]), this.anim = 0x0);
};
_0x451da7.prototype.draw = function(_0x1592aa) {
    var _0x590a14;
    _0x590a14 = this.state === _0x451da7.STATE.BONK ? 0x3 : 0x0;
    if (this.sprite.INDEX instanceof Array)
        for (var _0xb9552d = this.sprite.INDEX, _0x219fff = 0x0; _0x219fff < _0xb9552d.length; _0x219fff++)
            for (var _0x5b271e = 0x0; _0x5b271e < _0xb9552d[_0x219fff].length; _0x5b271e++) {
                var _0x7a85c2 = _0xb9552d[_0x590a14 ? _0xb9552d.length - 0x1 - _0x219fff : _0x219fff][_0x5b271e];
                switch (this.variant) {
                    case 0x1:
                        _0x7a85c2 += _0x451da7.VARIANT_OFFSET;
                }
                _0x1592aa.push({
                    'pos': vec2.add(vec2.add(this.pos, vec2.make(_0x5b271e, _0x219fff)), _0x451da7.SOFFSET),
                    'reverse': !this.dir,
                    'index': _0x7a85c2,
                    'mode': _0x590a14
                });
            } else {
                _0x7a85c2 = this.sprite.INDEX;
                switch (this.variant) {
                    case 0x1:
                        _0x7a85c2 += _0x451da7.VARIANT_OFFSET;
                }
                _0x1592aa.push({
                    'pos': vec2.add(this.pos, _0x451da7.SOFFSET),
                    'reverse': !this.dir,
                    'index': _0x7a85c2,
                    'mode': _0x590a14
                });
            }
};
_0x451da7.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x451da7);
"use strict";

function _0x2a1a8d(_0x110431, _0x5d4bae, _0x195df2, _0xf42f2, _0x110ae4, _0x4d6244, _0x59823d) {
    GameObject.call(this, _0x110431, _0x5d4bae, _0x195df2, _0xf42f2);
    this.oid = _0x110ae4;
    this.setState(_0x2a1a8d.STATE.IDLE);
    this.delay = isNaN(parseInt(_0x4d6244)) ? _0x2a1a8d.DELAY_DEFAULT : parseInt(_0x4d6244);
    this.impulse = isNaN(parseFloat(_0x59823d)) ? 0x1 : parseFloat(_0x59823d);
    this.anim = 0x0;
    this.disabled = false;
    this.delayTimer = this.delay;
    this.bonkTimer = 0x0;
    this.pos.x += _0x2a1a8d.SOFFSET.x;
    this.loc = vec2.copy(this.pos);
    this.moveSpeed = this.fallSpeed = 0x0;
    this.dim = vec2.make(0.7, 0.7);
    this.dir = true;
}
_0x2a1a8d.ASYNC = false;
_0x2a1a8d.ID = 0x15;
_0x2a1a8d.NAME = "FLYING FISH";
_0x2a1a8d.ANIMATION_RATE = 0x3;
_0x2a1a8d.BONK_TIME = 0x5a;
_0x2a1a8d.BONK_IMP = vec2.make(0.25, 0.4);
_0x2a1a8d.BONK_DECEL = 0.925;
_0x2a1a8d.BONK_FALL_SPEED = 0.5;
_0x2a1a8d.BONK_FALL_ACCEL = 0.085;
_0x2a1a8d.DELAY_DEFAULT = 0x96;
_0x2a1a8d.IMPULSE = vec2.make(0.225, 0.335);
_0x2a1a8d.DRAG = 0.996;
_0x2a1a8d.FALL_SPEED_ACCEL = 0.0055;
_0x2a1a8d.SOFFSET = vec2.make(0.15, 0.15);
_0x2a1a8d.SPRITE = {};
_0x2a1a8d.SPRITE_LIST = [{
    'NAME': "IDLE0",
    'ID': 0x0,
    'INDEX': 0xce
}, {
    'NAME': "IDLE1",
    'ID': 0x1,
    'INDEX': 0xcf
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x2a1a8d.SPRITE_LIST.length; _0x2ea890++) _0x2a1a8d.SPRITE[_0x2a1a8d.SPRITE_LIST[_0x2ea890].NAME] = _0x2a1a8d.SPRITE_LIST[_0x2ea890], _0x2a1a8d.SPRITE[_0x2a1a8d.SPRITE_LIST[_0x2ea890].ID] = _0x2a1a8d.SPRITE_LIST[_0x2ea890];
_0x2a1a8d.STATE = {};
_0x2a1a8d.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x2a1a8d.SPRITE.IDLE0, _0x2a1a8d.SPRITE.IDLE1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x2a1a8d.STATE_LIST.length; _0x2ea890++) _0x2a1a8d.STATE[_0x2a1a8d.STATE_LIST[_0x2ea890].NAME] = _0x2a1a8d.STATE_LIST[_0x2ea890], _0x2a1a8d.STATE[_0x2a1a8d.STATE_LIST[_0x2ea890].ID] = _0x2a1a8d.STATE_LIST[_0x2ea890];
_0x2a1a8d.prototype.update = function(_0x2d03f5) {
    switch (_0x2d03f5) {
        case 0x1:
            this.bonk();
    }
};
_0x2a1a8d.prototype.step = function() {
    this.state === _0x2a1a8d.STATE.BONK ? this.bonkTimer++ > _0x2a1a8d.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x2a1a8d.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x2a1a8d.BONK_FALL_ACCEL, -_0x2a1a8d.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x2a1a8d.ANIMATION_RATE) % this.state.SPRITE.length], 0x0 < this.delayTimer ? this.delayTimer-- : this.jump(), this.physics(), this.sound());
};
_0x2a1a8d.prototype.physics = function() {
    this.pos.y > this.loc.y || 0x0 < this.fallSpeed ? (this.fallSpeed = (this.fallSpeed - _0x2a1a8d.FALL_SPEED_ACCEL) * _0x2a1a8d.DRAG, this.pos.x += this.moveSpeed * _0x2a1a8d.DRAG, this.pos.y += this.fallSpeed) : this.disable();
};
_0x2a1a8d.prototype.sound = GameObject.prototype.sound;
_0x2a1a8d.prototype.jump = function() {
    this.enable();
    this.pos = vec2.copy(this.loc);
    this.fallSpeed = _0x2a1a8d.IMPULSE.y * this.impulse;
    this.moveSpeed = _0x2a1a8d.IMPULSE.x * this.impulse;
    this.delayTimer = this.delay;
};
_0x2a1a8d.prototype.disable = function() {
    this.disabled = true;
};
_0x2a1a8d.prototype.enable = function() {
    this.disabled = false;
};
_0x2a1a8d.prototype.damage = function(_0x5e3523) {
    this.dead || (this.bonk(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x2a1a8d.prototype.bonk = function() {
    this.dead || (this.setState(_0x2a1a8d.STATE.BONK), this.moveSpeed = _0x2a1a8d.BONK_IMP.x, this.fallSpeed = _0x2a1a8d.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x2a1a8d.prototype.playerCollide = function(_0x51896c) {
    this.dead || this.garbage || _0x51896c.damage(this);
};
_0x2a1a8d.prototype.playerStomp = function(_0x160f5a) {
    this.dead || this.garbage || (this.bonk(), _0x160f5a.bounce(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x2a1a8d.prototype.playerBump = function(_0x11d418) {
    this.playerCollide(_0x11d418);
};
_0x2a1a8d.prototype.kill = function() {};
_0x2a1a8d.prototype.isTangible = GameObject.prototype.isTangible;
_0x2a1a8d.prototype.destroy = GameObject.prototype.destroy;
_0x2a1a8d.prototype.setState = function(_0x29f510) {
    _0x29f510 !== this.state && (this.state = _0x29f510, 0x0 < _0x29f510.SPRITE.length && (this.sprite = _0x29f510.SPRITE[0x0]), this.anim = 0x0);
};
_0x2a1a8d.prototype.draw = function(_0x36d990) {
    if (!this.disabled) {
        var _0x365032;
        _0x365032 = this.state === _0x2a1a8d.STATE.BONK ? 0x3 : 0x0;
        _0x36d990.push({
            'pos': vec2.subtract(this.pos, _0x2a1a8d.SOFFSET),
            'reverse': this.dir,
            'index': this.sprite.INDEX,
            'mode': _0x365032
        });
    }
};
_0x2a1a8d.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x2a1a8d);
"use strict";

function _0x34a9a5(_0x694ac5, _0x5d220a, _0x18a406, _0xc2a06a, _0x4a9bf3, _0x203a31) {
    GameObject.call(this, _0x694ac5, _0x5d220a, _0x18a406, _0xc2a06a);
    this.oid = _0x4a9bf3;
    this.setState(_0x34a9a5.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0x1, 1.5);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.disabled = this.grounded = false;
    this.disabledTimer = 0x0;
    this.proxHit = false;
    this.hammer = void 0x0;
    this.loc = 0x1 === parseInt(_0x203a31) ? [this.pos.x + _0x34a9a5.MOVE_AREA, this.pos.x] : [this.pos.x, this.pos.x - _0x34a9a5.MOVE_AREA];
    this.groundTimer = this.double = this.attackAnimTimer = this.attackTimer = 0x0;
    this.jumpTimer = -0x1;
    this.reverse = false;
    this.dir = true;
    this.disable();
}
_0x34a9a5.ASYNC = false;
_0x34a9a5.ID = 0x31;
_0x34a9a5.NAME = "HAMMER BRO";
_0x34a9a5.ANIMATION_RATE = 0x5;
_0x34a9a5.ENABLE_FADE_TIME = 0xf;
_0x34a9a5.ENABLE_DIST = 0x21;
_0x34a9a5.BONK_TIME = 0x5a;
_0x34a9a5.BONK_IMP = vec2.make(0.25, 0.4);
_0x34a9a5.BONK_DECEL = 0.925;
_0x34a9a5.BONK_FALL_SPEED = 0.5;
_0x34a9a5.MOVE_SPEED_MAX = 0.095;
_0x34a9a5.JUMP_DELAY = 0x37;
_0x34a9a5.MOVE_AREA = 0x4;
_0x34a9a5.JUMP_LENGTH = 0x8;
_0x34a9a5.JUMP_DECEL = 0.009;
_0x34a9a5.ATTACK_DELAY = 0x4b;
_0x34a9a5.DOUBLE_RATE = 0x5;
_0x34a9a5.ATTACK_ANIM_LENGTH = 0xd;
_0x34a9a5.PROJ_OFFSET = vec2.make(0.5, 1.25);
_0x34a9a5.FALL_SPEED_MAX = 0.3;
_0x34a9a5.FALL_SPEED_ACCEL = 0.085;
_0x34a9a5.SPRITE = {};
_0x34a9a5.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x34a9a5.SPRITE_LIST.length; _0x2ea890++) _0x34a9a5.SPRITE[_0x34a9a5.SPRITE_LIST[_0x2ea890].NAME] = _0x34a9a5.SPRITE_LIST[_0x2ea890], _0x34a9a5.SPRITE[_0x34a9a5.SPRITE_LIST[_0x2ea890].ID] = _0x34a9a5.SPRITE_LIST[_0x2ea890];
_0x34a9a5.STATE = {};
_0x34a9a5.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x34a9a5.SPRITE.IDLE0, _0x34a9a5.SPRITE.IDLE1]
}, {
    'NAME': "FALL",
    'ID': 0x1,
    'SPRITE': [_0x34a9a5.SPRITE.IDLE1]
}, {
    'NAME': "ATTACK",
    'ID': 0x2,
    'SPRITE': [_0x34a9a5.SPRITE.ATTACK]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x34a9a5.STATE_LIST.length; _0x2ea890++) _0x34a9a5.STATE[_0x34a9a5.STATE_LIST[_0x2ea890].NAME] = _0x34a9a5.STATE_LIST[_0x2ea890], _0x34a9a5.STATE[_0x34a9a5.STATE_LIST[_0x2ea890].ID] = _0x34a9a5.STATE_LIST[_0x2ea890];
_0x34a9a5.prototype.update = function(_0x5c7129) {
    switch (_0x5c7129) {
        case 0x1:
            this.bonk();
            break;
        case 0xa0:
            this.enable();
    }
};
_0x34a9a5.prototype.step = function() {
    this.disabled ? this.proximity() : (0x0 < this.disabledTimer && this.disabledTimer--, this.state === _0x34a9a5.STATE.BONK ? this.bonkTimer++ > _0x34a9a5.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x34a9a5.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x34a9a5.FALL_SPEED_ACCEL, -_0x34a9a5.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x34a9a5.ANIMATION_RATE) % this.state.SPRITE.length], this.face(), this.control(), this.physics(), this.sound(), 0x0 < this.attackAnimTimer ? (this.setState(_0x34a9a5.STATE.ATTACK), this.attach(), this.attackAnimTimer--) : this.attackTimer++ > _0x34a9a5.ATTACK_DELAY ? this.attack() : this.hammer = void 0x0, 0x0 > this.pos.y && this.destroy()));
};
_0x34a9a5.prototype.control = function() {
    this.grounded ? (_0x34a9a5.JUMP_DELAY < this.groundTimer++ && (this.groundTimer = this.jumpTimer = 0x0), this.pos.x > this.loc[0x0] ? this.reverse = true : this.pos.x < this.loc[0x1] && (this.reverse = false)) : this.jumpTimer > _0x34a9a5.JUMP_LENGTH && (this.jumpTimer = -0x1);
    this.grounded ? this.setState(_0x34a9a5.STATE.IDLE) : this.setState(_0x34a9a5.STATE.FALL);
    this.moveSpeed = 0.75 * this.moveSpeed + 0.25 * (this.reverse ? -_0x34a9a5.MOVE_SPEED_MAX : _0x34a9a5.MOVE_SPEED_MAX);
};
_0x34a9a5.prototype.physics = function() {
    -0x1 !== this.jumpTimer ? (this.fallSpeed = _0x34a9a5.FALL_SPEED_MAX - this.jumpTimer * _0x34a9a5.JUMP_DECEL, this.jumpTimer++, this.grounded = false) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0x34a9a5.FALL_SPEED_ACCEL, -_0x34a9a5.FALL_SPEED_MAX));
    var _0x1aab92 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x1abf90 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x1f6880 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x1dc046 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x1f6880 = this.game.world.getZone(this.level, this.zone).getTiles(_0x1f6880, _0x1dc046),
        _0x1dc046 = vec2.make(0x1, 0x1);
    this.grounded = false;
    for (var _0x470429 = 0x0; _0x470429 < _0x1f6880.length; _0x470429++) {
        var _0x5892cf = _0x1f6880[_0x470429];
        _0x5892cf.definition.COLLIDE && _0x65f30e.intersection(_0x5892cf.pos, _0x1dc046, _0x1aab92, this.dim) && (this.pos.x + this.dim.x <= _0x5892cf.pos.x && _0x1aab92.x + this.dim.x > _0x5892cf.pos.x ? (_0x1aab92.x = _0x5892cf.pos.x - this.dim.x, _0x1abf90.x = _0x1aab92.x, this.moveSpeed = 0x0) : this.pos.x >= _0x5892cf.pos.x + _0x1dc046.x && _0x1aab92.x < _0x5892cf.pos.x + _0x1dc046.x && (_0x1aab92.x = _0x5892cf.pos.x + _0x1dc046.x, _0x1abf90.x = _0x1aab92.x, this.moveSpeed = 0x0));
    }
    for (_0x470429 = 0x0; _0x470429 < _0x1f6880.length; _0x470429++) _0x5892cf = _0x1f6880[_0x470429], _0x5892cf.definition.COLLIDE && _0x65f30e.intersection(_0x5892cf.pos, _0x1dc046, _0x1abf90, this.dim) && (this.pos.y >= _0x5892cf.pos.y + _0x1dc046.y && _0x1abf90.y < _0x5892cf.pos.y + _0x1dc046.y ? (_0x1abf90.y = _0x5892cf.pos.y + _0x1dc046.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y + this.dim.y <= _0x5892cf.pos.y && _0x1abf90.y + this.dim.y > _0x5892cf.pos.y && (_0x1abf90.y = _0x5892cf.pos.y - this.dim.y, this.jumpTimer = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x1aab92.x, _0x1abf90.y);
};
_0x34a9a5.prototype.proximity = function() {
    var _0x2427c8 = this.game.getPlayer();
    _0x2427c8 && !_0x2427c8.dead && _0x2427c8.level === this.level && _0x2427c8.zone === this.zone && !this.proxHit && vec2.distance(_0x2427c8.pos, this.pos) < _0x34a9a5.ENABLE_DIST && (this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0xa0)), this.proxHit = true);
};
_0x34a9a5.prototype.face = function() {
    for (var _0xd5bf08, _0x588e7b = 0x0; _0x588e7b < this.game.objects.length; _0x588e7b++) {
        var _0x4dfa34 = this.game.objects[_0x588e7b];
        _0x4dfa34 instanceof _0x5e070a && _0x4dfa34.level === this.level && _0x4dfa34.zone === this.zone && _0x4dfa34.isTangible() && (!_0xd5bf08 || Math.abs(_0xd5bf08) > vec2.distance(_0x4dfa34.pos, this.pos)) && (_0xd5bf08 = _0x4dfa34.pos.x - this.pos.x);
    }
    this.dir = _0xd5bf08 ? 0x0 > _0xd5bf08 : true;
};
_0x34a9a5.prototype.sound = GameObject.prototype.sound;
_0x34a9a5.prototype.enable = function() {
    this.disabled && (this.disabled = false, this.disabledTimer = _0x34a9a5.ENABLE_FADE_TIME);
};
_0x34a9a5.prototype.disable = function() {
    this.disabled = true;
};
_0x34a9a5.prototype.attack = function() {
    this.attackAnimTimer = _0x34a9a5.ATTACK_ANIM_LENGTH;
    this.attackTimer = 0x0;
    this.hammer = this.game.createObject(_0x1cc566.ID, this.level, this.zone, vec2.add(this.pos, _0x34a9a5.PROJ_OFFSET), [this]);
    ++this.double > _0x34a9a5.DOUBLE_RATE && (this.double = 0x0, this.attackTimer = _0x34a9a5.ATTACK_DELAY);
};
_0x34a9a5.prototype.attach = function() {
    this.hammer && (this.hammer.pos = vec2.add(this.pos, _0x34a9a5.PROJ_OFFSET), this.hammer.dir = !this.dir);
};
_0x34a9a5.prototype.playerCollide = function(_0x434be7) {
    this.dead || this.garbage || _0x434be7.damage(this);
};
_0x34a9a5.prototype.playerStomp = function(_0x3aef8f) {
    this.dead || this.garbage || (this.bonk(), _0x3aef8f.bounce(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x34a9a5.prototype.playerBump = _0x34a9a5.prototype.playerCollide;
_0x34a9a5.prototype.damage = function(_0x3013a5) {
    this.dead || (this.bonk(), _0x4e8a16.encode(this.level, this.zone, this.oid, 0x1));
};
_0x34a9a5.prototype.bonk = function() {
    this.dead || (this.setState(_0x34a9a5.STATE.BONK), this.moveSpeed = _0x34a9a5.BONK_IMP.x, this.fallSpeed = _0x34a9a5.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x34a9a5.prototype.kill = function() {};
_0x34a9a5.prototype.isTangible = GameObject.prototype.isTangible;
_0x34a9a5.prototype.destroy = GameObject.prototype.destroy;
_0x34a9a5.prototype.setState = function(_0x36983d) {
    _0x36983d !== this.state && (this.state = _0x36983d, 0x0 < _0x36983d.SPRITE.length && (this.sprite = _0x36983d.SPRITE[0x0]), this.anim = 0x0);
};
_0x34a9a5.prototype.draw = function(_0x222bbb) {
    if (!this.disabled) {
        var _0x4ffc52;
        _0x4ffc52 = this.state === _0x34a9a5.STATE.BONK ? 0x3 : 0x0 < this.disabledTimer ? 0xa0 + parseInt(0x20 * (0x1 - this.disabledTimer / _0x34a9a5.ENABLE_FADE_TIME)) : 0x0;
        if (this.sprite.INDEX instanceof Array)
            for (var _0x580e47 = this.sprite.INDEX, _0x5ae444 = 0x0; _0x5ae444 < _0x580e47.length; _0x5ae444++)
                for (var _0x311626 = 0x0; _0x311626 < _0x580e47[_0x5ae444].length; _0x311626++) _0x222bbb.push({
                    'pos': vec2.add(this.pos, vec2.make(_0x311626, _0x5ae444)),
                    'reverse': !this.dir,
                    'index': _0x580e47[0x3 !== _0x4ffc52 ? _0x5ae444 : _0x580e47.length - 0x1 - _0x5ae444][_0x311626],
                    'mode': _0x4ffc52
                });
        else _0x222bbb.push({
            'pos': this.pos,
            'reverse': !this.dir,
            'index': this.sprite.INDEX,
            'mode': _0x4ffc52
        });
    }
};
_0x34a9a5.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x34a9a5);
"use strict";

function _0x31c6a5(_0x554387, _0x2d3627, _0x4f29d5, _0x5a294e, _0x972d27) {
    GameObject.call(this, _0x554387, _0x2d3627, _0x4f29d5, _0x5a294e);
    this.oid = _0x972d27;
    this.state = _0x31c6a5.STATE.RUN;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.health = _0x31c6a5.HEALTH;
    this.bonkTimer = 0x0;
    this.dim = vec2.make(0x2, 0x2);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.grounded = false;
    this.loc = [this.pos.x, this.pos.x - _0x31c6a5.MOVE_AREA];
    this.groundTimer = this.attackAnimTimer = this.attackTimer = 0x0;
    this.jumpTimer = -0x1;
    this.reverse = false;
    this.dir = true;
}
_0x31c6a5.ASYNC = true;
_0x31c6a5.ID = 0x19;
_0x31c6a5.NAME = "BOWSER";
_0x31c6a5.ANIMATION_RATE = 0x5;
_0x31c6a5.HEALTH = 0x5;
_0x31c6a5.BONK_TIME = 0x5a;
_0x31c6a5.BONK_IMP = vec2.make(0.25, 0.4);
_0x31c6a5.BONK_DECEL = 0.925;
_0x31c6a5.BONK_FALL_SPEED = 0.5;
_0x31c6a5.MOVE_SPEED_MAX = 0.095;
_0x31c6a5.JUMP_DELAY = 0x2d;
_0x31c6a5.MOVE_AREA = 0x5;
_0x31c6a5.JUMP_LENGTH = 0x6;
_0x31c6a5.JUMP_DECEL = 0.009;
_0x31c6a5.ATTACK_DELAY = 0x4b;
_0x31c6a5.ATTACK_ANIM_LENGTH = 0xf;
_0x31c6a5.PROJ_OFFSET = vec2.make(-0.25, 0.25);
_0x31c6a5.FALL_SPEED_MAX = 0.3;
_0x31c6a5.FALL_SPEED_ACCEL = 0.085;
_0x31c6a5.SPRITE = {};
_0x31c6a5.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x31c6a5.SPRITE_LIST.length; _0x2ea890++) _0x31c6a5.SPRITE[_0x31c6a5.SPRITE_LIST[_0x2ea890].NAME] = _0x31c6a5.SPRITE_LIST[_0x2ea890], _0x31c6a5.SPRITE[_0x31c6a5.SPRITE_LIST[_0x2ea890].ID] = _0x31c6a5.SPRITE_LIST[_0x2ea890];
_0x31c6a5.STATE = {};
_0x31c6a5.STATE_LIST = [{
    'NAME': "RUN",
    'ID': 0x0,
    'SPRITE': [_0x31c6a5.SPRITE.RUN0, _0x31c6a5.SPRITE.RUN1]
}, {
    'NAME': "ATTACK",
    'ID': 0x1,
    'SPRITE': [_0x31c6a5.SPRITE.ATTACK0, _0x31c6a5.SPRITE.ATTACK1]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x31c6a5.STATE_LIST.length; _0x2ea890++) _0x31c6a5.STATE[_0x31c6a5.STATE_LIST[_0x2ea890].NAME] = _0x31c6a5.STATE_LIST[_0x2ea890], _0x31c6a5.STATE[_0x31c6a5.STATE_LIST[_0x2ea890].ID] = _0x31c6a5.STATE_LIST[_0x2ea890];
_0x31c6a5.prototype.update = function(_0x3c5a5d) {};
_0x31c6a5.prototype.step = function() {
    this.state === _0x31c6a5.STATE.BONK ? this.bonkTimer++ > _0x31c6a5.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x31c6a5.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x31c6a5.FALL_SPEED_ACCEL, -_0x31c6a5.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x31c6a5.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.sound(), this.attackTimer++ > _0x31c6a5.ATTACK_DELAY && this.attack(), 0x0 < this.attackAnimTimer ? (this.setState(_0x31c6a5.STATE.ATTACK), this.attackAnimTimer--) : this.setState(_0x31c6a5.STATE.RUN), 0x0 > this.pos.y && this.destroy());
};
_0x31c6a5.prototype.control = function() {
    this.grounded ? (_0x31c6a5.JUMP_DELAY < this.groundTimer++ && (this.groundTimer = this.jumpTimer = 0x0), this.pos.x > this.loc[0x0] ? this.reverse = true : this.pos.x < this.loc[0x1] && (this.reverse = false)) : this.jumpTimer > _0x31c6a5.JUMP_LENGTH && (this.jumpTimer = -0x1);
    this.moveSpeed = 0.75 * this.moveSpeed + 0.25 * (this.reverse ? -_0x31c6a5.MOVE_SPEED_MAX : _0x31c6a5.MOVE_SPEED_MAX);
};
_0x31c6a5.prototype.physics = function() {
    -0x1 !== this.jumpTimer ? (this.fallSpeed = _0x31c6a5.FALL_SPEED_MAX - this.jumpTimer * _0x31c6a5.JUMP_DECEL, this.jumpTimer++, this.grounded = false) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0x31c6a5.FALL_SPEED_ACCEL, -_0x31c6a5.FALL_SPEED_MAX));
    var _0x17cdb9 = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
        _0x28cf57 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
        _0x3c851d = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
        _0x1f4b27 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
        _0x3c851d = this.game.world.getZone(this.level, this.zone).getTiles(_0x3c851d, _0x1f4b27),
        _0x1f4b27 = vec2.make(0x1, 0x1);
    this.grounded = false;
    for (var _0x1c0ec4 = 0x0; _0x1c0ec4 < _0x3c851d.length; _0x1c0ec4++) {
        var _0x4d776a = _0x3c851d[_0x1c0ec4];
        _0x4d776a.definition.COLLIDE && _0x65f30e.intersection(_0x4d776a.pos, _0x1f4b27, _0x17cdb9, this.dim) && (this.pos.x + this.dim.x <= _0x4d776a.pos.x && _0x17cdb9.x + this.dim.x > _0x4d776a.pos.x ? (_0x17cdb9.x = _0x4d776a.pos.x - this.dim.x, _0x28cf57.x = _0x17cdb9.x, this.moveSpeed = 0x0) : this.pos.x >= _0x4d776a.pos.x + _0x1f4b27.x && _0x17cdb9.x < _0x4d776a.pos.x + _0x1f4b27.x && (_0x17cdb9.x = _0x4d776a.pos.x + _0x1f4b27.x, _0x28cf57.x = _0x17cdb9.x, this.moveSpeed = 0x0));
    }
    for (_0x1c0ec4 = 0x0; _0x1c0ec4 < _0x3c851d.length; _0x1c0ec4++) _0x4d776a = _0x3c851d[_0x1c0ec4], _0x4d776a.definition.COLLIDE && _0x65f30e.intersection(_0x4d776a.pos, _0x1f4b27, _0x28cf57, this.dim) && (this.pos.y >= _0x4d776a.pos.y + _0x1f4b27.y && _0x28cf57.y < _0x4d776a.pos.y + _0x1f4b27.y ? (_0x28cf57.y = _0x4d776a.pos.y + _0x1f4b27.y, this.fallSpeed = 0x0, this.grounded = true) : this.pos.y + this.dim.y <= _0x4d776a.pos.y && _0x28cf57.y + this.dim.y > _0x4d776a.pos.y && (_0x28cf57.y = _0x4d776a.pos.y - this.dim.y, this.jumpTimer = -0x1, this.fallSpeed = 0x0));
    this.pos = vec2.make(_0x17cdb9.x, _0x28cf57.y);
};
_0x31c6a5.prototype.sound = GameObject.prototype.sound;
_0x31c6a5.prototype.attack = function() {
    this.attackAnimTimer = _0x31c6a5.ATTACK_ANIM_LENGTH;
    this.attackTimer = 0x0;
    this.game.createObject(_0x544a2a.ID, this.level, this.zone, vec2.add(this.pos, _0x31c6a5.PROJ_OFFSET), []);
    this.play("sfx/breath.wav", 1.5, 0.04);
};
_0x31c6a5.prototype.playerCollide = function(_0x28acd2) {
    this.dead || this.garbage || _0x28acd2.damage(this);
};
_0x31c6a5.prototype.playerStomp = _0x31c6a5.prototype.playerCollide;
_0x31c6a5.prototype.playerBump = _0x31c6a5.prototype.playerCollide;
_0x31c6a5.prototype.damage = function(_0x48714e) {
    this.dead || 0x0 >= --this.health && this.bonk();
};
_0x31c6a5.prototype.bonk = function() {
    this.dead || (this.setState(_0x31c6a5.STATE.BONK), this.moveSpeed = _0x31c6a5.BONK_IMP.x, this.fallSpeed = _0x31c6a5.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x31c6a5.prototype.kill = function() {};
_0x31c6a5.prototype.isTangible = GameObject.prototype.isTangible;
_0x31c6a5.prototype.destroy = GameObject.prototype.destroy;
_0x31c6a5.prototype.setState = function(_0x3ecc50) {
    _0x3ecc50 !== this.state && (this.state = _0x3ecc50, 0x0 < _0x3ecc50.SPRITE.length && (this.sprite = _0x3ecc50.SPRITE[0x0]), this.anim = 0x0);
};
_0x31c6a5.prototype.draw = function(_0x416c80) {
    var _0x430e06;
    _0x430e06 = this.state === _0x31c6a5.STATE.BONK ? 0x3 : 0x0;
    if (this.sprite.INDEX instanceof Array)
        for (var _0x46879a = this.sprite.INDEX, _0x575c40 = 0x0; _0x575c40 < _0x46879a.length; _0x575c40++)
            for (var _0x45051c = 0x0; _0x45051c < _0x46879a[_0x575c40].length; _0x45051c++) _0x416c80.push({
                'pos': vec2.add(this.pos, vec2.make(_0x45051c, _0x575c40)),
                'reverse': !this.dir,
                'index': _0x46879a[_0x430e06 ? _0x46879a.length - 0x1 - _0x575c40 : _0x575c40][_0x45051c],
                'mode': _0x430e06
            });
    else _0x416c80.push({
        'pos': this.pos,
        'reverse': !this.dir,
        'index': this.sprite.INDEX,
        'mode': _0x430e06
    });
};
_0x31c6a5.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x31c6a5);
"use strict";

function _0x4d3b6a(_0x194956, _0x59fc86, _0x9e0036, _0x43c9ba, _0x2d7724, _0x2fab65, _0x233483, _0x3e9fca, _0x4ded53, _0x18c3ff, _0x195b4d, _0x563ae7) {
    GameObject.call(this, _0x194956, _0x59fc86, _0x9e0036, _0x43c9ba);
    this.oid = _0x2d7724;
    this.setState(_0x4d3b6a.STATE.IDLE);
    this.loc = 0x0 === parseInt(_0x563ae7) ? [_0x43c9ba, vec2.add(_0x43c9ba, vec2.make(parseInt(_0x233483), parseInt(_0x3e9fca)))] : [vec2.add(_0x43c9ba, vec2.make(parseInt(_0x233483), parseInt(_0x3e9fca))), _0x43c9ba];
    this.anim = 0x0;
    this.dim = vec2.make(parseInt(_0x2fab65), 0.5);
    this.speed = parseFloat(_0x4ded53);
    this.riders = [];
    this.dir = false;
    this.loop = 0x0 === parseInt(_0x18c3ff) ? false : true;
    this.delay = parseInt(_0x195b4d);
}
_0x4d3b6a.ASYNC = true;
_0x4d3b6a.ID = 0x91;
_0x4d3b6a.NAME = "PLATFORM";
_0x4d3b6a.ANIMATION_RATE = 0x3;
_0x4d3b6a.SPRITE = {};
_0x4d3b6a.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xa0
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4d3b6a.SPRITE_LIST.length; _0x2ea890++) _0x4d3b6a.SPRITE[_0x4d3b6a.SPRITE_LIST[_0x2ea890].NAME] = _0x4d3b6a.SPRITE_LIST[_0x2ea890], _0x4d3b6a.SPRITE[_0x4d3b6a.SPRITE_LIST[_0x2ea890].ID] = _0x4d3b6a.SPRITE_LIST[_0x2ea890];
_0x4d3b6a.STATE = {};
_0x4d3b6a.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4d3b6a.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4d3b6a.STATE_LIST.length; _0x2ea890++) _0x4d3b6a.STATE[_0x4d3b6a.STATE_LIST[_0x2ea890].NAME] = _0x4d3b6a.STATE_LIST[_0x2ea890], _0x4d3b6a.STATE[_0x4d3b6a.STATE_LIST[_0x2ea890].ID] = _0x4d3b6a.STATE_LIST[_0x2ea890];
_0x4d3b6a.prototype.update = function(_0x915f3b) {};
_0x4d3b6a.prototype.step = function() {
    0x0 < this.delay-- || (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4d3b6a.ANIMATION_RATE) % this.state.SPRITE.length], this.physics());
};
_0x4d3b6a.prototype.physics = function() {
    var _0x451cab = vec2.normalize(vec2.subtract(this.loc[this.dir ? 0x0 : 0x1], this.pos)),
        _0x1195ee = vec2.distance(this.pos, this.loc[this.dir ? 0x0 : 0x1]);
    if (_0x1195ee < this.speed)
        if (this.loop) this.dir = !this.dir;
        else {
            this.pos = this.loc[0x0];
            this.riders = [];
            return;
        } _0x451cab = vec2.scale(_0x451cab, Math.min(this.speed, _0x1195ee));
    this.pos = vec2.add(this.pos, _0x451cab);
    for (_0x1195ee = 0x0; _0x1195ee < this.riders.length; _0x1195ee++) {
        var _0xead911 = this.riders[0x0];
        _0xead911.pos = vec2.add(_0xead911.pos, _0x451cab);
    }
    this.riders = [];
};
_0x4d3b6a.prototype.riding = function(_0x48b6af) {
    this.riders.push(_0x48b6af);
};
_0x4d3b6a.prototype.kill = function() {};
_0x4d3b6a.prototype.destroy = GameObject.prototype.destroy;
_0x4d3b6a.prototype.isTangible = GameObject.prototype.isTangible;
_0x4d3b6a.prototype.setState = function(_0x52f542) {
    _0x52f542 !== this.state && (this.state = _0x52f542, this.sprite = _0x52f542.SPRITE[0x0], this.anim = 0x0);
};
_0x4d3b6a.prototype.draw = function(_0x258943) {
    if (!(0x0 < this.delay))
        for (var _0x482867 = 0x0; _0x482867 < this.dim.x; _0x482867++) _0x258943.push({
            'pos': vec2.add(this.pos, vec2.make(_0x482867, 0x0)),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': 0x0
        });
};
GameObject.REGISTER_OBJECT(_0x4d3b6a);
"use strict";

function _0x4458a2(_0x28097d, _0x5b40b9, _0x345c40, _0x50aa5e, _0xb6457f, _0x206986, _0x1c1dd9, _0x1dbf0c, _0x922e0d) {
    GameObject.call(this, _0x28097d, _0x5b40b9, _0x345c40, _0x50aa5e);
    this.oid = _0xb6457f;
    this.setState(_0x4458a2.STATE.IDLE);
    this.loc = [_0x50aa5e, vec2.add(_0x50aa5e, vec2.make(parseInt(_0x1c1dd9), parseInt(_0x1dbf0c)))];
    this.anim = 0x0;
    this.dim = vec2.make(parseInt(_0x206986), 0.5);
    this.speed = parseFloat(_0x922e0d);
    this.riders = [];
    this.dir = this.go = false;
}
_0x4458a2.ASYNC = false;
_0x4458a2.ID = 0x92;
_0x4458a2.NAME = "BUS PLATFORM";
_0x4458a2.ANIMATION_RATE = 0x3;
_0x4458a2.SPRITE = {};
_0x4458a2.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xa0
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4458a2.SPRITE_LIST.length; _0x2ea890++) _0x4458a2.SPRITE[_0x4458a2.SPRITE_LIST[_0x2ea890].NAME] = _0x4458a2.SPRITE_LIST[_0x2ea890], _0x4458a2.SPRITE[_0x4458a2.SPRITE_LIST[_0x2ea890].ID] = _0x4458a2.SPRITE_LIST[_0x2ea890];
_0x4458a2.STATE = {};
_0x4458a2.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4458a2.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4458a2.STATE_LIST.length; _0x2ea890++) _0x4458a2.STATE[_0x4458a2.STATE_LIST[_0x2ea890].NAME] = _0x4458a2.STATE_LIST[_0x2ea890], _0x4458a2.STATE[_0x4458a2.STATE_LIST[_0x2ea890].ID] = _0x4458a2.STATE_LIST[_0x2ea890];
_0x4458a2.prototype.update = function(_0x5107ca) {
    switch (_0x5107ca) {
        case 0xa1:
            this.start();
    }
};
_0x4458a2.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4458a2.ANIMATION_RATE) % this.state.SPRITE.length];
    this.physics();
};
_0x4458a2.prototype.physics = function() {
    if (this.go) {
        var _0xc37f88 = vec2.normalize(vec2.subtract(this.loc[this.dir ? 0x0 : 0x1], this.pos)),
            _0x56c183 = vec2.distance(this.pos, this.loc[this.dir ? 0x0 : 0x1]),
            _0xc37f88 = vec2.scale(_0xc37f88, Math.min(this.speed, _0x56c183));
        this.pos = vec2.add(this.pos, _0xc37f88);
        for (_0x56c183 = 0x0; _0x56c183 < this.riders.length; _0x56c183++) {
            var _0x5ab202 = this.riders[0x0];
            _0x5ab202.pos = vec2.add(_0x5ab202.pos, _0xc37f88);
        }
    }
    this.riders = [];
};
_0x4458a2.prototype.start = function() {
    this.go = true;
};
_0x4458a2.prototype.riding = function(_0x16dbf9) {
    _0x16dbf9.pid !== this.game.pid || this.go || this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0xa1));
    this.riders.push(_0x16dbf9);
};
_0x4458a2.prototype.kill = function() {};
_0x4458a2.prototype.isTangible = GameObject.prototype.isTangible;
_0x4458a2.prototype.destroy = GameObject.prototype.destroy;
_0x4458a2.prototype.setState = function(_0x54d3fe) {
    _0x54d3fe !== this.state && (this.state = _0x54d3fe, this.sprite = _0x54d3fe.SPRITE[0x0], this.anim = 0x0);
};
_0x4458a2.prototype.draw = function(_0x266895) {
    if (!(0x0 < this.delay))
        for (var _0x57dc3f = 0x0; _0x57dc3f < this.dim.x; _0x57dc3f++) _0x266895.push({
            'pos': vec2.add(this.pos, vec2.make(_0x57dc3f, 0x0)),
            'reverse': this.reverse,
            'index': this.sprite.INDEX,
            'mode': 0x0
        });
};
GameObject.REGISTER_OBJECT(_0x4458a2);
"use strict";

function _0x3ea684(_0x1725c1, _0x56d1c0, _0x1edac1, _0x335997, _0x331fd0) {
    GameObject.call(this, _0x1725c1, _0x56d1c0, _0x1edac1, _0x335997);
    this.oid = _0x331fd0;
    this.setState(_0x3ea684.STATE.EXTEND);
    this.anim = 0x0;
    this.pos = vec2.add(this.pos, _0x3ea684.SOFFSET);
    this.dim = vec2.make(0.8, 0x2);
}
_0x3ea684.ASYNC = true;
_0x3ea684.ID = 0x95;
_0x3ea684.NAME = "SPRING";
_0x3ea684.ANIMATION_RATE = 0x3;
_0x3ea684.SOFFSET = vec2.make(0.1, 0x0);
_0x3ea684.THRESHOLD = [0x1, 0.5];
_0x3ea684.POWER = 0.45;
_0x3ea684.SPRITE = {};
_0x3ea684.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x3ea684.SPRITE_LIST.length; _0x2ea890++) _0x3ea684.SPRITE[_0x3ea684.SPRITE_LIST[_0x2ea890].NAME] = _0x3ea684.SPRITE_LIST[_0x2ea890], _0x3ea684.SPRITE[_0x3ea684.SPRITE_LIST[_0x2ea890].ID] = _0x3ea684.SPRITE_LIST[_0x2ea890];
_0x3ea684.STATE = {};
_0x3ea684.STATE_LIST = [{
    'NAME': "EXTEND",
    'ID': 0x0,
    'SPRITE': [_0x3ea684.SPRITE.STAGE0]
}, {
    'NAME': "HALF",
    'ID': 0x1,
    'SPRITE': [_0x3ea684.SPRITE.STAGE1]
}, {
    'NAME': "COMPRESS",
    'ID': 0x2,
    'SPRITE': [_0x3ea684.SPRITE.STAGE2]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x3ea684.STATE_LIST.length; _0x2ea890++) _0x3ea684.STATE[_0x3ea684.STATE_LIST[_0x2ea890].NAME] = _0x3ea684.STATE_LIST[_0x2ea890], _0x3ea684.STATE[_0x3ea684.STATE_LIST[_0x2ea890].ID] = _0x3ea684.STATE_LIST[_0x2ea890];
_0x3ea684.prototype.update = function(_0x5f11fe) {};
_0x3ea684.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x3ea684.ANIMATION_RATE) % this.state.SPRITE.length];
    this.interaction();
};
_0x3ea684.prototype.interaction = function() {
    var _0x4b85bd = this.game.getPlayer();
    if (_0x4b85bd && _0x4b85bd.level === this.level && _0x4b85bd.zone === this.zone && _0x4b85bd.isTangible() && _0x65f30e.intersection(this.pos, this.dim, _0x4b85bd.pos, _0x4b85bd.dim)) {
        var _0x123f2a = Math.pow(0x1 - 0.5 * Math.min(Math.max(0x0, _0x4b85bd.pos.y - this.pos.y), 0x2), 0x2);
        _0x4b85bd.fallSpeed >= 0.75 * _0x5e070a.FALL_SPEED_MAX && _0x4b85bd.btnA && (_0x4b85bd.jumping = 0x0, _0x4b85bd.isSpring = true);
        _0x4b85bd.fallSpeed += Math.min(0x2 * _0x5e070a.FALL_SPEED_MAX, _0x123f2a * _0x3ea684.POWER);
        _0x4b85bd.grounded = false;
    }
    _0x4b85bd = 0x2;
    for (_0x123f2a = 0x0; _0x123f2a < this.game.objects.length; _0x123f2a++) {
        var _0x5959a6 = this.game.objects[_0x123f2a];
        _0x5959a6 instanceof _0x5e070a && _0x5959a6.level === this.level && _0x5959a6.zone === this.zone && _0x5959a6.isTangible() && _0x65f30e.intersection(this.pos, this.dim, _0x5959a6.pos, _0x5959a6.dim) && (_0x5959a6 = Math.min(Math.max(0x0, _0x5959a6.pos.y - this.pos.y), 0x2), _0x5959a6 < _0x4b85bd && (_0x4b85bd = _0x5959a6));
    }
    _0x4b85bd < _0x3ea684.THRESHOLD[0x1] ? this.setState(_0x3ea684.STATE.COMPRESS) : _0x4b85bd < _0x3ea684.THRESHOLD[0x0] ? this.setState(_0x3ea684.STATE.HALF) : this.setState(_0x3ea684.STATE.EXTEND);
};
_0x3ea684.prototype.kill = function() {};
_0x3ea684.prototype.destroy = GameObject.prototype.destroy;
_0x3ea684.prototype.isTangible = GameObject.prototype.isTangible;
_0x3ea684.prototype.setState = function(_0x244b0) {
    _0x244b0 !== this.state && (this.state = _0x244b0, this.sprite = _0x244b0.SPRITE[0x0], this.anim = 0x0);
};
_0x3ea684.prototype.draw = function(_0x3c664b) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x371bb7 = this.sprite.INDEX, _0x17a77b = 0x0; _0x17a77b < _0x371bb7.length; _0x17a77b++)
            for (var _0x5993a9 = 0x0; _0x5993a9 < _0x371bb7[_0x17a77b].length; _0x5993a9++) _0x3c664b.push({
                'pos': vec2.subtract(vec2.add(this.pos, vec2.make(_0x5993a9, _0x17a77b)), _0x3ea684.SOFFSET),
                'reverse': false,
                'index': _0x371bb7[_0x17a77b][_0x5993a9]
            });
    else _0x3c664b.push({
        'pos': vec2.subtract(this.pos, _0x3ea684.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x3ea684);
"use strict";

function _0x1e99cd(_0x8208b4, _0x465755, _0xbbc096, _0x3cf4ad, _0x59912a) {
    GameObject.call(this, _0x8208b4, _0x465755, _0xbbc096, _0x3cf4ad);
    this.oid = _0x59912a;
    this.setState(_0x1e99cd.STATE.IDLE);
    this.anim = 0x0;
}
_0x1e99cd.ASYNC = true;
_0x1e99cd.ID = 0xb1;
_0x1e99cd.NAME = "FLAG";
_0x1e99cd.ANIMATION_RATE = 0x3;
_0x1e99cd.OFFSET = vec2.make(-0.5, 0x0);
_0x1e99cd.SPRITE = {};
_0x1e99cd.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0x90
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x1e99cd.SPRITE_LIST.length; _0x2ea890++) _0x1e99cd.SPRITE[_0x1e99cd.SPRITE_LIST[_0x2ea890].NAME] = _0x1e99cd.SPRITE_LIST[_0x2ea890], _0x1e99cd.SPRITE[_0x1e99cd.SPRITE_LIST[_0x2ea890].ID] = _0x1e99cd.SPRITE_LIST[_0x2ea890];
_0x1e99cd.STATE = {};
_0x1e99cd.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x1e99cd.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x1e99cd.STATE_LIST.length; _0x2ea890++) _0x1e99cd.STATE[_0x1e99cd.STATE_LIST[_0x2ea890].NAME] = _0x1e99cd.STATE_LIST[_0x2ea890], _0x1e99cd.STATE[_0x1e99cd.STATE_LIST[_0x2ea890].ID] = _0x1e99cd.STATE_LIST[_0x2ea890];
_0x1e99cd.prototype.update = function(_0x3eccc2) {};
_0x1e99cd.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x1e99cd.ANIMATION_RATE) % this.state.SPRITE.length];
};
_0x1e99cd.prototype.kill = function() {};
_0x1e99cd.prototype.isTangible = GameObject.prototype.isTangible;
_0x1e99cd.prototype.destroy = GameObject.prototype.destroy;
_0x1e99cd.prototype.setState = function(_0x3f30a0) {
    _0x3f30a0 !== this.state && (this.state = _0x3f30a0, this.sprite = _0x3f30a0.SPRITE[0x0], this.anim = 0x0);
};
_0x1e99cd.prototype.draw = function(_0x223354) {
    _0x223354.push({
        'pos': vec2.add(this.pos, _0x1e99cd.OFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x1e99cd);
"use strict";

function _0x3b86a5(_0x50dcf4, _0x54aae0, _0x9f2a35, _0x2920da, _0x53a0a7, _0xf2fafc, _0x1f77f1) {
    GameObject.call(this, _0x50dcf4, _0x54aae0, _0x9f2a35, _0x2920da);
    this.oid = _0x53a0a7;
    this.state = _0x3b86a5.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x1 === parseInt(_0xf2fafc) ? 0x2 * _0x3b86a5.SPIN_RATE : 0x0;
    this.dim = vec2.make(0.5, 0.5);
    this.size = isNaN(parseInt(_0x1f77f1)) ? _0x3b86a5.PARTS : parseInt(_0x1f77f1);
}
_0x3b86a5.ASYNC = true;
_0x3b86a5.ID = 0x21;
_0x3b86a5.NAME = "FIRE TRAP";
_0x3b86a5.ANIMATION_RATE = 0x2;
_0x3b86a5.OFFSET = vec2.make(0.25, 0.25);
_0x3b86a5.PARTS = 0x6;
_0x3b86a5.SPACING = 0.5;
_0x3b86a5.SPIN_RATE = 0x17;
_0x3b86a5.SPRITE = {};
_0x3b86a5.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x3b86a5.SPRITE_LIST.length; _0x2ea890++) _0x3b86a5.SPRITE[_0x3b86a5.SPRITE_LIST[_0x2ea890].NAME] = _0x3b86a5.SPRITE_LIST[_0x2ea890], _0x3b86a5.SPRITE[_0x3b86a5.SPRITE_LIST[_0x2ea890].ID] = _0x3b86a5.SPRITE_LIST[_0x2ea890];
_0x3b86a5.STATE = {};
_0x3b86a5.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x3b86a5.SPRITE.IDLE0, _0x3b86a5.SPRITE.IDLE1, _0x3b86a5.SPRITE.IDLE2, _0x3b86a5.SPRITE.IDLE3]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x3b86a5.STATE_LIST.length; _0x2ea890++) _0x3b86a5.STATE[_0x3b86a5.STATE_LIST[_0x2ea890].NAME] = _0x3b86a5.STATE_LIST[_0x2ea890], _0x3b86a5.STATE[_0x3b86a5.STATE_LIST[_0x2ea890].ID] = _0x3b86a5.STATE_LIST[_0x2ea890];
_0x3b86a5.prototype.update = function() {};
_0x3b86a5.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x3b86a5.ANIMATION_RATE) % this.state.SPRITE.length];
    this.control();
    this.interaction();
};
_0x3b86a5.prototype.control = function() {
    this.rot += _0x3b86a5.SPIN_RATE;
};
_0x3b86a5.prototype.interaction = function() {
    var _0x11a2ec = vec2.normalize(vec2.make(Math.sin(-this.anim / _0x3b86a5.SPIN_RATE), Math.cos(-this.anim / _0x3b86a5.SPIN_RATE))),
        _0x5fc02 = this.game.getPlayer();
    if (_0x5fc02 && _0x5fc02.isTangible() && _0x5fc02.level === this.level && _0x5fc02.zone === this.zone)
        for (var _0x3e4695 = 0x0; _0x3e4695 < this.size; _0x3e4695++) {
            var _0x4b6ba6 = vec2.add(vec2.add(this.pos, _0x3b86a5.OFFSET), vec2.scale(_0x11a2ec, _0x3b86a5.SPACING * _0x3e4695));
            _0x65f30e.intersection(_0x5fc02.pos, _0x5fc02.dim, _0x4b6ba6, this.dim) && _0x5fc02.damage(this);
        }
};
_0x3b86a5.prototype.playerCollide = function(_0x2eb021) {};
_0x3b86a5.prototype.playerStomp = function(_0x1ec896) {};
_0x3b86a5.prototype.playerBump = function(_0xc59c16) {};
_0x3b86a5.prototype.kill = function() {};
_0x3b86a5.prototype.isTangible = GameObject.prototype.isTangible;
_0x3b86a5.prototype.destroy = GameObject.prototype.destroy;
_0x3b86a5.prototype.setState = function(_0x68d75e) {
    _0x68d75e !== this.state && (this.state = _0x68d75e, this.sprite = _0x68d75e.SPRITE[0x0], this.anim = 0x0);
};
_0x3b86a5.prototype.draw = function(_0x860deb) {
    for (var _0x3effe4 = vec2.normalize(vec2.make(Math.sin(-this.anim / _0x3b86a5.SPIN_RATE), Math.cos(-this.anim / _0x3b86a5.SPIN_RATE))), _0x549302 = 0x0; _0x549302 < this.size; _0x549302++) _0x860deb.push({
        'pos': vec2.add(this.pos, vec2.scale(_0x3effe4, _0x3b86a5.SPACING * _0x549302)),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x3b86a5);
"use strict";

function _0x304bc0(_0xca01a8, _0x3aa68c, _0x6d91e7, _0x5ae6a9, _0x4631b2, _0x3186df, _0x2aac56) {
    GameObject.call(this, _0xca01a8, _0x3aa68c, _0x6d91e7, _0x5ae6a9);
    this.oid = _0x4631b2;
    this.setState(_0x304bc0.STATE.IDLE);
    this.delay = isNaN(parseInt(_0x3186df)) ? _0x304bc0.DELAY_DEFAULT : parseInt(_0x3186df);
    this.impulse = isNaN(parseFloat(_0x2aac56)) ? 0x1 : parseFloat(_0x2aac56);
    this.anim = 0x0;
    this.delayTimer = this.delay;
    this.pos.x += _0x304bc0.SOFFSET.x;
    this.loc = vec2.copy(this.pos);
    this.fallSpeed = 0x0;
    this.dim = vec2.make(0.7, 0.7);
}
_0x304bc0.ASYNC = true;
_0x304bc0.ID = 0x22;
_0x304bc0.NAME = "FIRE BLAST";
_0x304bc0.ANIMATION_RATE = 0x3;
_0x304bc0.DELAY_DEFAULT = 0x5a;
_0x304bc0.IMPULSE = 1.35;
_0x304bc0.DRAG = 0.95;
_0x304bc0.FALL_SPEED_ACCEL = 0.055;
_0x304bc0.SOFFSET = vec2.make(0.15, 0.15);
_0x304bc0.SPRITE = {};
_0x304bc0.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xdb
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x304bc0.SPRITE_LIST.length; _0x2ea890++) _0x304bc0.SPRITE[_0x304bc0.SPRITE_LIST[_0x2ea890].NAME] = _0x304bc0.SPRITE_LIST[_0x2ea890], _0x304bc0.SPRITE[_0x304bc0.SPRITE_LIST[_0x2ea890].ID] = _0x304bc0.SPRITE_LIST[_0x2ea890];
_0x304bc0.STATE = {};
_0x304bc0.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x304bc0.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x304bc0.STATE_LIST.length; _0x2ea890++) _0x304bc0.STATE[_0x304bc0.STATE_LIST[_0x2ea890].NAME] = _0x304bc0.STATE_LIST[_0x2ea890], _0x304bc0.STATE[_0x304bc0.STATE_LIST[_0x2ea890].ID] = _0x304bc0.STATE_LIST[_0x2ea890];
_0x304bc0.prototype.update = function(_0x36e305) {};
_0x304bc0.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x304bc0.ANIMATION_RATE) % this.state.SPRITE.length];
    0x0 < this.delayTimer ? this.delayTimer-- : this.blast();
    this.physics();
};
_0x304bc0.prototype.physics = function() {
    if (this.pos.y > this.loc.y || 0x0 < this.fallSpeed) this.fallSpeed = (this.fallSpeed - _0x304bc0.FALL_SPEED_ACCEL) * _0x304bc0.DRAG, this.pos.y += this.fallSpeed;
};
_0x304bc0.prototype.blast = function() {
    this.pos = vec2.copy(this.loc);
    this.fallSpeed = _0x304bc0.IMPULSE * this.impulse;
    this.delayTimer = this.delay;
};
_0x304bc0.prototype.playerCollide = function(_0x3d810c) {
    this.dead || this.garbage || _0x3d810c.damage(this);
};
_0x304bc0.prototype.playerStomp = function(_0x112d37) {
    this.playerCollide(_0x112d37);
};
_0x304bc0.prototype.playerBump = function(_0x26d8e0) {
    this.playerCollide(_0x26d8e0);
};
_0x304bc0.prototype.kill = function() {};
_0x304bc0.prototype.isTangible = GameObject.prototype.isTangible;
_0x304bc0.prototype.destroy = GameObject.prototype.destroy;
_0x304bc0.prototype.setState = function(_0x4c15d1) {
    _0x4c15d1 !== this.state && (this.state = _0x4c15d1, this.sprite = _0x4c15d1.SPRITE[0x0], this.anim = 0x0);
};
_0x304bc0.prototype.draw = function(_0x2f2eb7) {
    var _0x3f134f = 0x0 <= this.fallSpeed ? 0x0 : 0x3;
    _0x2f2eb7.push({
        'pos': vec2.subtract(this.pos, _0x304bc0.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': _0x3f134f
    });
};
GameObject.REGISTER_OBJECT(_0x304bc0);
"use strict";

function _0x4a9323(_0x350c68, _0x57b212, _0x16fee9, _0x16208e, _0x3db030, _0x56607d) {
    GameObject.call(this, _0x350c68, _0x57b212, _0x16fee9, _0x16208e);
    this.oid = _0x3db030;
    this.setState(_0x4a9323.STATE.IDLE);
    this.fireTimer = 0x0;
    this.delay = isNaN(parseInt(_0x56607d)) ? _0x4a9323.FIRE_DELAY_DEFAULT : parseInt(_0x56607d);
}
_0x4a9323.ASYNC = true;
_0x4a9323.ID = 0x23;
_0x4a9323.NAME = "LAUNCHER";
_0x4a9323.ANIMATION_RATE = 0x3;
_0x4a9323.FIRE_DELAY_DEFAULT = 0x96;
_0x4a9323.SPRITE = {};
_0x4a9323.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xff
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4a9323.SPRITE_LIST.length; _0x2ea890++) _0x4a9323.SPRITE[_0x4a9323.SPRITE_LIST[_0x2ea890].NAME] = _0x4a9323.SPRITE_LIST[_0x2ea890], _0x4a9323.SPRITE[_0x4a9323.SPRITE_LIST[_0x2ea890].ID] = _0x4a9323.SPRITE_LIST[_0x2ea890];
_0x4a9323.STATE = {};
_0x4a9323.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4a9323.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4a9323.STATE_LIST.length; _0x2ea890++) _0x4a9323.STATE[_0x4a9323.STATE_LIST[_0x2ea890].NAME] = _0x4a9323.STATE_LIST[_0x2ea890], _0x4a9323.STATE[_0x4a9323.STATE_LIST[_0x2ea890].ID] = _0x4a9323.STATE_LIST[_0x2ea890];
_0x4a9323.prototype.update = function(_0x508f40) {};
_0x4a9323.prototype.step = function() {
    ++this.fireTimer > this.delay && this.fire();
    this.sound();
};
_0x4a9323.prototype.sound = GameObject.prototype.sound;
_0x4a9323.prototype.fire = function() {
    this.fireTimer = 0x0;
    this.game.createObject(_0x4d9001.ID, this.level, this.zone, vec2.copy(this.pos), []);
    this.play("sfx/firework.wav", 0x1, 0.04);
};
_0x4a9323.prototype.kill = function() {};
_0x4a9323.prototype.isTangible = GameObject.prototype.isTangible;
_0x4a9323.prototype.destroy = GameObject.prototype.destroy;
_0x4a9323.prototype.setState = function(_0x1907b2) {
    _0x1907b2 !== this.state && (this.state = _0x1907b2, this.sprite = _0x1907b2.SPRITE[0x0], this.anim = 0x0);
};
_0x4a9323.prototype.draw = function(_0x452199) {};
_0x4a9323.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x4a9323);
"use strict";

function _0x4d9001(_0x3ed398, _0x8c6a89, _0x231e95, _0x4af9d7, _0x39284f) {
    GameObject.call(this, _0x3ed398, _0x8c6a89, _0x231e95, _0x4af9d7);
    this.oid = _0x39284f;
    this.setState(_0x4d9001.STATE.IDLE);
    this.bonkTimer = this.anim = 0x0;
    this.dim = vec2.make(0.8, 0.8);
    this.fallSpeed = this.moveSpeed = 0x0;
}
_0x4d9001.ASYNC = true;
_0x4d9001.ID = 0x24;
_0x4d9001.NAME = "BULLET";
_0x4d9001.ANIMATION_RATE = 0x3;
_0x4d9001.SPEED = 0.215;
_0x4d9001.BONK_TIME = 0x5a;
_0x4d9001.BONK_IMP = vec2.make(0.25, 0.4);
_0x4d9001.BONK_DECEL = 0.925;
_0x4d9001.BONK_FALL_SPEED = 0.5;
_0x4d9001.BONK_FALL_ACCEL = 0.085;
_0x4d9001.DELAY_DEFAULT = 0x113;
_0x4d9001.IMPULSE = vec2.make(0.225, 0.335);
_0x4d9001.DRAG = 0.996;
_0x4d9001.FALL_SPEED_ACCEL = 0.0055;
_0x4d9001.SOFFSET = vec2.make(0.15, 0.15);
_0x4d9001.SPRITE = {};
_0x4d9001.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xcd
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4d9001.SPRITE_LIST.length; _0x2ea890++) _0x4d9001.SPRITE[_0x4d9001.SPRITE_LIST[_0x2ea890].NAME] = _0x4d9001.SPRITE_LIST[_0x2ea890], _0x4d9001.SPRITE[_0x4d9001.SPRITE_LIST[_0x2ea890].ID] = _0x4d9001.SPRITE_LIST[_0x2ea890];
_0x4d9001.STATE = {};
_0x4d9001.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4d9001.SPRITE.IDLE]
}, {
    'NAME': "BONK",
    'ID': 0x51,
    'SPRITE': []
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4d9001.STATE_LIST.length; _0x2ea890++) _0x4d9001.STATE[_0x4d9001.STATE_LIST[_0x2ea890].NAME] = _0x4d9001.STATE_LIST[_0x2ea890], _0x4d9001.STATE[_0x4d9001.STATE_LIST[_0x2ea890].ID] = _0x4d9001.STATE_LIST[_0x2ea890];
_0x4d9001.prototype.update = function(_0x5cebc5) {};
_0x4d9001.prototype.step = function() {
    this.state === _0x4d9001.STATE.BONK ? this.bonkTimer++ > _0x4d9001.BONK_TIME || 0x0 > this.pos.y + this.dim.y ? this.destroy() : (this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)), this.moveSpeed *= _0x4d9001.BONK_DECEL, this.fallSpeed = Math.max(this.fallSpeed - _0x4d9001.BONK_FALL_ACCEL, -_0x4d9001.BONK_FALL_SPEED)) : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4d9001.ANIMATION_RATE) % this.state.SPRITE.length], this.physics(), this.sound());
};
_0x4d9001.prototype.physics = function() {
    0x0 < this.pos.x ? this.pos.x -= _0x4d9001.SPEED : this.destroy();
};
_0x4d9001.prototype.sound = GameObject.prototype.sound;
_0x4d9001.prototype.disable = function() {
    this.disabled = true;
};
_0x4d9001.prototype.enable = function() {
    this.disabled = false;
};
_0x4d9001.prototype.damage = function(_0x10421e) {};
_0x4d9001.prototype.bonk = function() {
    this.dead || (this.setState(_0x4d9001.STATE.BONK), this.moveSpeed = _0x4d9001.BONK_IMP.x, this.fallSpeed = _0x4d9001.BONK_IMP.y, this.dead = true, this.play("sfx/kick.wav", 0x1, 0.04));
};
_0x4d9001.prototype.playerCollide = function(_0x5e202e) {
    this.dead || this.garbage || _0x5e202e.damage(this);
};
_0x4d9001.prototype.playerStomp = function(_0x615959) {
    this.dead || this.garbage || (_0x615959.bounce(), this.play("sfx/stomp.wav", 0x1, 0.04), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x1)));
};
_0x4d9001.prototype.playerBump = function(_0x50d582) {
    this.playerCollide(_0x50d582);
};
_0x4d9001.prototype.kill = function() {};
_0x4d9001.prototype.isTangible = GameObject.prototype.isTangible;
_0x4d9001.prototype.destroy = GameObject.prototype.destroy;
_0x4d9001.prototype.setState = function(_0x20397c) {
    _0x20397c !== this.state && (this.state = _0x20397c, 0x0 < _0x20397c.SPRITE.length && (this.sprite = _0x20397c.SPRITE[0x0]), this.anim = 0x0);
};
_0x4d9001.prototype.draw = function(_0x161a6f) {
    var _0x3a9927;
    _0x3a9927 = this.state === _0x4d9001.STATE.BONK ? 0x3 : 0x0;
    _0x161a6f.push({
        'pos': vec2.subtract(this.pos, _0x4d9001.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': _0x3a9927
    });
};
_0x4d9001.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x4d9001);
"use strict";

function _0x4e79bb(_0x410886, _0x5c420a, _0x434957, _0x1826a7, _0x4af8e5, _0xf0beec) {
    GameObject.call(this, _0x410886, _0x5c420a, _0x434957, _0x1826a7);
    this.owner = _0xf0beec;
    this.state = _0x4e79bb.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.deadTimer = this.anim = 0x0;
    this.dim = vec2.make(0.5, 0.5);
    this.fallSpeed = -_0x4e79bb.FALL_SPEED_MAX;
    this.dir = _0x4af8e5;
}
_0x4e79bb.ASYNC = true;
_0x4e79bb.ID = 0xa1;
_0x4e79bb.NAME = "FIREBALL PROJECTILE";
_0x4e79bb.ANIMATION_RATE = 0x2;
_0x4e79bb.SOFFSET = vec2.make(-0.25, -0.25);
_0x4e79bb.DEAD_ANIM_LENGTH = 0x3;
_0x4e79bb.SPEED = 0.475;
_0x4e79bb.BOUNCE_SPEED = 0.375;
_0x4e79bb.FALL_SPEED_MAX = 0.425;
_0x4e79bb.FALL_SPEED_ACCEL = 0.065;
_0x4e79bb.SPRITE = {};
_0x4e79bb.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4e79bb.SPRITE_LIST.length; _0x2ea890++) _0x4e79bb.SPRITE[_0x4e79bb.SPRITE_LIST[_0x2ea890].NAME] = _0x4e79bb.SPRITE_LIST[_0x2ea890], _0x4e79bb.SPRITE[_0x4e79bb.SPRITE_LIST[_0x2ea890].ID] = _0x4e79bb.SPRITE_LIST[_0x2ea890];
_0x4e79bb.STATE = {};
_0x4e79bb.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4e79bb.SPRITE.IDLE0, _0x4e79bb.SPRITE.IDLE1, _0x4e79bb.SPRITE.IDLE2, _0x4e79bb.SPRITE.IDLE3]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [_0x4e79bb.SPRITE.DEAD0, _0x4e79bb.SPRITE.DEAD1, _0x4e79bb.SPRITE.DEAD2]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4e79bb.STATE_LIST.length; _0x2ea890++) _0x4e79bb.STATE[_0x4e79bb.STATE_LIST[_0x2ea890].NAME] = _0x4e79bb.STATE_LIST[_0x2ea890], _0x4e79bb.STATE[_0x4e79bb.STATE_LIST[_0x2ea890].ID] = _0x4e79bb.STATE_LIST[_0x2ea890];
_0x4e79bb.prototype.update = function(_0x49f498) {};
_0x4e79bb.prototype.step = function() {
    this.state === _0x4e79bb.STATE.DEAD ? this.deadTimer < _0x4e79bb.DEAD_ANIM_LENGTH ? this.sprite = this.state.SPRITE[this.deadTimer++] : this.destroy() : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x4e79bb.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.interaction(), this.sound(), 0x0 > this.pos.y && this.kill());
};
_0x4e79bb.prototype.control = function() {};
_0x4e79bb.prototype.physics = function() {
    var _0x40a57d = this.dir ? _0x4e79bb.SPEED : -_0x4e79bb.SPEED;
    this.fallSpeed = Math.max(this.fallSpeed - _0x4e79bb.FALL_SPEED_ACCEL, -_0x4e79bb.FALL_SPEED_MAX);
    for (var _0x4d8386 = vec2.add(this.pos, vec2.make(_0x40a57d, this.fallSpeed)), _0x2eb6a3 = vec2.make(this.pos.x + Math.min(0x0, _0x40a57d), this.pos.y + Math.min(0x0, this.fallSpeed)), _0x40a57d = vec2.make(this.dim.x + Math.max(0x0, _0x40a57d), this.dim.y + Math.max(0x0, this.fallSpeed)), _0x58af3b = this.game.world.getZone(this.level, this.zone).getTiles(_0x2eb6a3, _0x40a57d), _0x2eb6a3 = vec2.make(0x1, 0x1), _0x40a57d = [], _0x3f2ea9 = 0x0; _0x3f2ea9 < _0x58af3b.length; _0x3f2ea9++) {
        var _0x478fe9 = _0x58af3b[_0x3f2ea9];
        _0x478fe9.definition.COLLIDE && (_0x65f30e.intersection(_0x478fe9.pos, _0x2eb6a3, _0x4d8386, this.dim) || _0x65f30e.intersection(_0x478fe9.pos, _0x2eb6a3, this.pos, this.dim)) && _0x40a57d.push(_0x478fe9);
    }
    _0x58af3b = vec2.make(_0x4d8386.x, this.pos.y);
    for (_0x3f2ea9 = 0x0; _0x3f2ea9 < _0x40a57d.length; _0x3f2ea9++) _0x478fe9 = _0x40a57d[_0x3f2ea9], _0x65f30e.intersection(_0x478fe9.pos, _0x2eb6a3, _0x58af3b, this.dim) && (_0x58af3b.x = _0x58af3b.x + 0.5 * this.dim.x < _0x478fe9.pos.x + 0.5 * _0x2eb6a3.x ? _0x478fe9.pos.x - this.dim.x : _0x478fe9.pos.x + _0x2eb6a3.x, this.kill());
    _0x4d8386.x = _0x58af3b.x;
    for (_0x3f2ea9 = 0x0; _0x3f2ea9 < _0x40a57d.length; _0x3f2ea9++) _0x478fe9 = _0x40a57d[_0x3f2ea9], _0x65f30e.intersection(_0x478fe9.pos, _0x2eb6a3, _0x4d8386, this.dim) && (this.pos.y >= _0x4d8386.y ? (_0x4d8386.y = _0x478fe9.pos.y + _0x2eb6a3.y, this.fallSpeed = _0x4e79bb.BOUNCE_SPEED) : (_0x4d8386.y = _0x478fe9.pos.y - this.dim.y, this.fallSpeed = -_0x4e79bb.BOUNCE_SPEED));
    this.pos = _0x4d8386;
};
_0x4e79bb.prototype.interaction = function() {
    for (var _0x27a365 = 0x0; _0x27a365 < this.game.objects.length; _0x27a365++) {
        var _0x420c69 = this.game.objects[_0x27a365];
        if (_0x420c69 !== this && _0x420c69.pid !== this.owner && _0x420c69.isTangible() && !(_0x420c69 instanceof _0x5e070a) && _0x420c69.damage && _0x420c69.level === this.level && _0x420c69.zone === this.zone && _0x65f30e.intersection(_0x420c69.pos, _0x420c69.dim, this.pos, this.dim)) {
            this.owner === this.game.pid && _0x420c69.damage(this);
            this.kill();
            break;
        }
    }
};
_0x4e79bb.prototype.sound = GameObject.prototype.sound;
_0x4e79bb.prototype.playerCollide = function(_0xbf87f1) {};
_0x4e79bb.prototype.playerStomp = function(_0x58ddcb) {};
_0x4e79bb.prototype.playerBump = function(_0xc6a3d4) {};
_0x4e79bb.prototype.kill = function() {
    this.setState(_0x4e79bb.STATE.DEAD);
    this.play("sfx/firework.wav", 0.7, 0.04);
    this.dead = true;
};
_0x4e79bb.prototype.isTangible = GameObject.prototype.isTangible;
_0x4e79bb.prototype.destroy = GameObject.prototype.destroy;
_0x4e79bb.prototype.setState = function(_0x44a73b) {
    _0x44a73b !== this.state && (this.state = _0x44a73b, this.sprite = _0x44a73b.SPRITE[0x0], this.anim = 0x0);
};
_0x4e79bb.prototype.draw = function(_0x5440d4) {
    _0x5440d4.push({
        'pos': vec2.add(this.pos, _0x4e79bb.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
_0x4e79bb.prototype.play = GameObject.prototype.play;
GameObject.REGISTER_OBJECT(_0x4e79bb);
"use strict";

function _0x544a2a(_0x33b06e, _0xa8d9e7, _0x3a9a9c, _0x52a8b4) {
    GameObject.call(this, _0x33b06e, _0xa8d9e7, _0x3a9a9c, _0x52a8b4);
    this.state = _0x544a2a.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.life = _0x544a2a.LIFE_MAX;
    this.deadTimer = 0x0;
    this.dim = vec2.make(0x1, 0.5);
}
_0x544a2a.ASYNC = true;
_0x544a2a.ID = 0xa2;
_0x544a2a.NAME = "FIRE BREATH PROJECTILE";
_0x544a2a.ANIMATION_RATE = 0x2;
_0x544a2a.SOFFSET = vec2.make(-0.5, -0.25);
_0x544a2a.LIFE_MAX = 0xaf;
_0x544a2a.DEAD_ANIM_LENGTH = 0x3;
_0x544a2a.SPEED = 0.175;
_0x544a2a.SPRITE = {};
_0x544a2a.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x544a2a.SPRITE_LIST.length; _0x2ea890++) _0x544a2a.SPRITE[_0x544a2a.SPRITE_LIST[_0x2ea890].NAME] = _0x544a2a.SPRITE_LIST[_0x2ea890], _0x544a2a.SPRITE[_0x544a2a.SPRITE_LIST[_0x2ea890].ID] = _0x544a2a.SPRITE_LIST[_0x2ea890];
_0x544a2a.STATE = {};
_0x544a2a.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x544a2a.SPRITE.IDLE0, _0x544a2a.SPRITE.IDLE1]
}, {
    'NAME': "DEAD",
    'ID': 0x50,
    'SPRITE': [_0x544a2a.SPRITE.DEAD0, _0x544a2a.SPRITE.DEAD1, _0x544a2a.SPRITE.DEAD2]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x544a2a.STATE_LIST.length; _0x2ea890++) _0x544a2a.STATE[_0x544a2a.STATE_LIST[_0x2ea890].NAME] = _0x544a2a.STATE_LIST[_0x2ea890], _0x544a2a.STATE[_0x544a2a.STATE_LIST[_0x2ea890].ID] = _0x544a2a.STATE_LIST[_0x2ea890];
_0x544a2a.prototype.update = function(_0x3869bf) {};
_0x544a2a.prototype.step = function() {
    this.state === _0x544a2a.STATE.DEAD ? this.deadTimer < _0x544a2a.DEAD_ANIM_LENGTH ? this.sprite = this.state.SPRITE[this.deadTimer++] : this.destroy() : (this.anim++, this.sprite = this.state.SPRITE[parseInt(this.anim / _0x544a2a.ANIMATION_RATE) % this.state.SPRITE.length], this.control(), this.physics(), this.interaction(), 0x1 > this.life-- && this.kill());
};
_0x544a2a.prototype.control = function() {};
_0x544a2a.prototype.physics = function() {
    this.pos = vec2.add(this.pos, vec2.make(-_0x544a2a.SPEED, 0x0));
};
_0x544a2a.prototype.interaction = function() {
    for (var _0x1bf138 = 0x0; _0x1bf138 < this.game.objects.length; _0x1bf138++) {
        var _0x3d7ef2 = this.game.objects[_0x1bf138];
        if (_0x3d7ef2 instanceof _0x5e070a && _0x3d7ef2.isTangible() && _0x3d7ef2.level === this.level && _0x3d7ef2.zone === this.zone && _0x65f30e.intersection(_0x3d7ef2.pos, _0x3d7ef2.dim, this.pos, this.dim)) {
            _0x3d7ef2.pid === this.game.pid && _0x3d7ef2.damage(this);
            this.kill();
            break;
        }
    }
};
_0x544a2a.prototype.playerCollide = function(_0x53068e) {};
_0x544a2a.prototype.playerStomp = function(_0x4a3fea) {};
_0x544a2a.prototype.playerBump = function(_0xb521c) {};
_0x544a2a.prototype.kill = function() {
    this.dead = true;
    this.setState(_0x544a2a.STATE.DEAD);
};
_0x544a2a.prototype.isTangible = GameObject.prototype.isTangible;
_0x544a2a.prototype.destroy = GameObject.prototype.destroy;
_0x544a2a.prototype.setState = function(_0x55e2c3) {
    _0x55e2c3 !== this.state && (this.state = _0x55e2c3, this.sprite = _0x55e2c3.SPRITE[0x0], this.anim = 0x0);
};
_0x544a2a.prototype.draw = function(_0x3594d8) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x56b86b = this.sprite.INDEX, _0x129e32 = 0x0; _0x129e32 < _0x56b86b.length; _0x129e32++)
            for (var _0x2591b8 = 0x0; _0x2591b8 < _0x56b86b[_0x129e32].length; _0x2591b8++) _0x3594d8.push({
                'pos': vec2.add(vec2.add(this.pos, _0x544a2a.SOFFSET), vec2.make(_0x2591b8, _0x129e32)),
                'reverse': false,
                'index': _0x56b86b[_0x129e32][_0x2591b8]
            });
    else _0x3594d8.push({
        'pos': vec2.add(this.pos, _0x544a2a.SOFFSET),
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x544a2a);
"use strict";

function _0x1cc566(_0xacda83, _0x22c50a, _0x15dfdf, _0x55bbd1, _0x7bdf2d) {
    GameObject.call(this, _0xacda83, _0x22c50a, _0x15dfdf, _0x55bbd1);
    this.owner = _0x7bdf2d;
    this.setState(_0x1cc566.STATE.IDLE);
    this.anim = 0x0;
    this.throwTimer = _0x1cc566.THROW_DELAY;
    this.dir = false;
    this.dim = vec2.make(0.5, 0.5);
}
_0x1cc566.ASYNC = true;
_0x1cc566.ID = 0xa3;
_0x1cc566.NAME = "HAMMER PROJECTILE";
_0x1cc566.ANIMATION_RATE = 0x2;
_0x1cc566.SOFFSET = vec2.make(-0.25, -0.25);
_0x1cc566.THROW_DELAY = 0xd;
_0x1cc566.IMPULSE = vec2.make(0.48, 0.915);
_0x1cc566.DRAG = 0.965;
_0x1cc566.FALL_SPEED_MAX = 0.65;
_0x1cc566.FALL_SPEED_ACCEL = 0.095;
_0x1cc566.SPRITE = {};
_0x1cc566.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x1cc566.SPRITE_LIST.length; _0x2ea890++) _0x1cc566.SPRITE[_0x1cc566.SPRITE_LIST[_0x2ea890].NAME] = _0x1cc566.SPRITE_LIST[_0x2ea890], _0x1cc566.SPRITE[_0x1cc566.SPRITE_LIST[_0x2ea890].ID] = _0x1cc566.SPRITE_LIST[_0x2ea890];
_0x1cc566.STATE = {};
_0x1cc566.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x1cc566.SPRITE.IDLE0]
}, {
    'NAME': "THROW",
    'ID': 0x1,
    'SPRITE': [_0x1cc566.SPRITE.IDLE0, _0x1cc566.SPRITE.IDLE1, _0x1cc566.SPRITE.IDLE2, _0x1cc566.SPRITE.IDLE3]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x1cc566.STATE_LIST.length; _0x2ea890++) _0x1cc566.STATE[_0x1cc566.STATE_LIST[_0x2ea890].NAME] = _0x1cc566.STATE_LIST[_0x2ea890], _0x1cc566.STATE[_0x1cc566.STATE_LIST[_0x2ea890].ID] = _0x1cc566.STATE_LIST[_0x2ea890];
_0x1cc566.prototype.update = function(_0x34f305) {};
_0x1cc566.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x1cc566.ANIMATION_RATE) % this.state.SPRITE.length];
    0x0 < this.throwTimer ? this.throwTimer-- : (this.state === _0x1cc566.STATE.IDLE && this.throw(), this.physics(), this.interaction(), 0x0 > this.pos.y && this.destroy());
};
_0x1cc566.prototype.physics = function() {
    this.moveSpeed *= _0x1cc566.DRAG;
    this.fallSpeed = Math.max(this.fallSpeed - _0x1cc566.FALL_SPEED_ACCEL, -_0x1cc566.FALL_SPEED_MAX);
    this.pos = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed));
};
_0x1cc566.prototype.interaction = function() {
    if (this.state === _0x1cc566.STATE.THROW) {
        var _0xfd6aa5 = this.game.getPlayer();
        _0xfd6aa5 && _0xfd6aa5.isTangible() && _0xfd6aa5.level === this.level && _0xfd6aa5.zone === this.zone && _0x65f30e.intersection(_0xfd6aa5.pos, _0xfd6aa5.dim, this.pos, this.dim) && _0xfd6aa5.damage(this);
    }
};
_0x1cc566.prototype.throw = function() {
    this.moveSpeed = this.dir ? _0x1cc566.IMPULSE.x : -_0x1cc566.IMPULSE.x;
    this.fallSpeed = _0x1cc566.IMPULSE.y;
    this.setState(_0x1cc566.STATE.THROW);
};
_0x1cc566.prototype.playerCollide = function(_0xb92700) {};
_0x1cc566.prototype.playerStomp = function(_0x52c1db) {};
_0x1cc566.prototype.playerBump = function(_0x516907) {};
_0x1cc566.prototype.kill = function() {};
_0x1cc566.prototype.destroy = GameObject.prototype.destroy;
_0x1cc566.prototype.isTangible = GameObject.prototype.isTangible;
_0x1cc566.prototype.setState = function(_0x1cef61) {
    _0x1cef61 !== this.state && (this.state = _0x1cef61, this.sprite = _0x1cef61.SPRITE[0x0], this.anim = 0x0);
};
_0x1cc566.prototype.draw = function(_0x2e9e48) {
    if (this.sprite.INDEX instanceof Array)
        for (var _0x325915 = this.sprite.INDEX, _0x1919b1 = 0x0; _0x1919b1 < _0x325915.length; _0x1919b1++)
            for (var _0x59501e = 0x0; _0x59501e < _0x325915[_0x1919b1].length; _0x59501e++) _0x2e9e48.push({
                'pos': vec2.add(vec2.add(this.pos, _0x1cc566.SOFFSET), vec2.make(_0x59501e, _0x1919b1)),
                'reverse': false,
                'index': _0x325915[_0x1919b1][_0x59501e]
            });
    else _0x2e9e48.push({
        'pos': vec2.add(this.pos, _0x1cc566.SOFFSET),
        'reverse': this.dir,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x1cc566);
"use strict";

function _0x179ca2(_0x2df3e0, _0x54aee0, _0x2d15a6, _0x5de54f, _0x2b2818) {
    GameObject.call(this, _0x2df3e0, _0x54aee0, _0x2d15a6, _0x5de54f);
    this.oid = _0x2b2818;
    this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
    this.fallSpeed = this.moveSpeed = 0x0;
    this.rise = this.grounded = false;
    _0x2df3e0 = vec2.make(0x1, 0x1);
    _0x54aee0 = this.game.world.getZone(this.level, this.zone).getTiles(this.pos, this.dim);
    for (_0x2d15a6 = 0x0; _0x2d15a6 < _0x54aee0.length; _0x2d15a6++)
        if (_0x65f30e.intersection(_0x54aee0[_0x2d15a6].pos, _0x2df3e0, this.pos, this.dim)) {
            this.rise = true;
            break;
        } this.dir = false;
    this.jump = -0x1;
}
_0x179ca2.ASYNC = true;
_0x179ca2.ID = 0x50;
_0x179ca2.ANIMATION_RATE = 0x3;
_0x179ca2.MOVE_SPEED_MAX = 0.075;
_0x179ca2.FALL_SPEED_MAX = 0.45;
_0x179ca2.FALL_SPEED_ACCEL = 0.075;
_0x179ca2.JUMP_DECEL = 0.015;
_0x179ca2.JUMP_LENGTH = 0x3;
_0x179ca2.RISE_RATE = 0.15;
_0x179ca2.prototype.update = function(_0x30d009) {
    switch (_0x30d009) {
        case 0x0:
            this.kill();
    }
};
_0x179ca2.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x179ca2.ANIMATION_RATE) % this.state.SPRITE.length];
    this.control();
    this.physics();
    0x0 > this.pos.y && this.kill();
};
_0x179ca2.prototype.control = function() {
    this.jump >= _0x179ca2.JUMP_LENGTH && (this.jump = -0x1);
};
_0x179ca2.prototype.physics = function() {
    if (this.rise) {
        this.rise = false;
        for (var _0x132fa1 = vec2.make(0x1, 0x1), _0x2a87f5 = this.game.world.getZone(this.level, this.zone).getTiles(this.pos, this.dim), _0x494110 = 0x0; _0x494110 < _0x2a87f5.length; _0x494110++) {
            var _0x2dd5a3 = _0x2a87f5[_0x494110];
            if (_0x2dd5a3.definition.COLLIDE && _0x65f30e.intersection(_0x2dd5a3.pos, _0x132fa1, this.pos, this.dim)) {
                this.rise = true;
                break;
            }
        }
        this.rise && (this.pos.y += _0x179ca2.RISE_RATE);
    } else {
        -0x1 !== this.jump ? (this.fallSpeed = _0x179ca2.FALL_SPEED_MAX - this.jump * _0x179ca2.JUMP_DECEL, this.jump++) : (this.grounded && (this.fallSpeed = 0x0), this.fallSpeed = Math.max(this.fallSpeed - _0x179ca2.FALL_SPEED_ACCEL, -_0x179ca2.FALL_SPEED_MAX));
        var _0x58255e = vec2.add(this.pos, vec2.make(this.moveSpeed, 0x0)),
            _0x9a4b68 = vec2.add(this.pos, vec2.make(this.moveSpeed, this.fallSpeed)),
            _0x132fa1 = vec2.make(0x0 <= this.moveSpeed ? this.pos.x : this.pos.x + this.moveSpeed, 0x0 >= this.fallSpeed ? this.pos.y : this.pos.y + this.fallSpeed),
            _0x2a87f5 = vec2.make(this.dim.y + Math.abs(this.moveSpeed), this.dim.y + Math.abs(this.fallSpeed)),
            _0x2a87f5 = this.game.world.getZone(this.level, this.zone).getTiles(_0x132fa1, _0x2a87f5),
            _0x132fa1 = vec2.make(0x1, 0x1),
            _0x3d6ca6 = false;
        this.grounded = false;
        for (_0x494110 = 0x0; _0x494110 < _0x2a87f5.length; _0x494110++) _0x2dd5a3 = _0x2a87f5[_0x494110], _0x2dd5a3.definition.COLLIDE && _0x65f30e.intersection(_0x2dd5a3.pos, _0x132fa1, _0x58255e, this.dim) && (this.pos.x <= _0x58255e.x && _0x58255e.x + this.dim.x > _0x2dd5a3.pos.x ? (_0x58255e.x = _0x2dd5a3.pos.x - this.dim.x, _0x9a4b68.x = _0x58255e.x, this.moveSpeed = 0x0, _0x3d6ca6 = true) : this.pos.x >= _0x58255e.x && _0x58255e.x < _0x2dd5a3.pos.x + _0x132fa1.x && (_0x58255e.x = _0x2dd5a3.pos.x + _0x132fa1.x, _0x9a4b68.x = _0x58255e.x, this.moveSpeed = 0x0, _0x3d6ca6 = true));
        for (_0x494110 = 0x0; _0x494110 < _0x2a87f5.length; _0x494110++) _0x2dd5a3 = _0x2a87f5[_0x494110], _0x2dd5a3.definition.COLLIDE && _0x65f30e.intersection(_0x2dd5a3.pos, _0x132fa1, _0x9a4b68, this.dim) && (this.pos.y >= _0x9a4b68.y && _0x9a4b68.y < _0x2dd5a3.pos.y + _0x132fa1.y ? (_0x9a4b68.y = _0x2dd5a3.pos.y + _0x132fa1.y, this.grounded = true) : this.pos.y <= _0x9a4b68.y && _0x9a4b68.y + this.dim.y > _0x2dd5a3.pos.y && (_0x9a4b68.y = _0x2dd5a3.pos.y - this.dim.y, this.jumping = -0x1, this.fallSpeed = 0x0));
        this.pos = vec2.make(_0x58255e.x, _0x9a4b68.y);
        _0x3d6ca6 && (this.dir = !this.dir);
    }
};
_0x179ca2.prototype.bounce = function() {
    this.grounded && (this.dir = !this.dir);
    this.jump = 0x0;
};
_0x179ca2.prototype.playerCollide = function(_0x3e39fd) {
    this.dead || this.garbage || (_0x3e39fd.powerup(this), this.kill(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x0)));
};
_0x179ca2.prototype.playerStomp = function(_0x4b8dff) {
    this.playerCollide(_0x4b8dff);
};
_0x179ca2.prototype.playerBump = function(_0x723e6b) {
    this.playerCollide(_0x723e6b);
};
_0x179ca2.prototype.kill = function() {
    this.dead = true;
    this.destroy();
};
_0x179ca2.prototype.destroy = GameObject.prototype.destroy;
_0x179ca2.prototype.isTangible = GameObject.prototype.isTangible;
_0x179ca2.prototype.setState = function(_0x7aa95a) {
    _0x7aa95a !== this.state && (this.state = _0x7aa95a, this.sprite = _0x7aa95a.SPRITE[0x0], this.anim = 0x0);
};
_0x179ca2.prototype.draw = function(_0x58baa1) {
    _0x58baa1.push({
        'pos': this.pos,
        'reverse': this.reverse,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
"use strict";

function _0x383ded(_0x3770e1, _0x508e6c, _0x552f4e, _0x2875bf, _0xcf715a) {
    _0x179ca2.call(this, _0x3770e1, _0x508e6c, _0x552f4e, _0x2875bf, _0xcf715a);
    this.state = _0x383ded.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
_0x383ded.ASYNC = false;
_0x383ded.ID = 0x51;
_0x383ded.NAME = "MUSHROOM";
_0x383ded.SPRITE = {};
_0x383ded.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xe9
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x383ded.SPRITE_LIST.length; _0x2ea890++) _0x383ded.SPRITE[_0x383ded.SPRITE_LIST[_0x2ea890].NAME] = _0x383ded.SPRITE_LIST[_0x2ea890], _0x383ded.SPRITE[_0x383ded.SPRITE_LIST[_0x2ea890].ID] = _0x383ded.SPRITE_LIST[_0x2ea890];
_0x383ded.STATE = {};
_0x383ded.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x383ded.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x383ded.STATE_LIST.length; _0x2ea890++) _0x383ded.STATE[_0x383ded.STATE_LIST[_0x2ea890].NAME] = _0x383ded.STATE_LIST[_0x2ea890], _0x383ded.STATE[_0x383ded.STATE_LIST[_0x2ea890].ID] = _0x383ded.STATE_LIST[_0x2ea890];
_0x383ded.prototype.update = _0x179ca2.prototype.update;
_0x383ded.prototype.step = _0x179ca2.prototype.step;
_0x383ded.prototype.control = function() {
    _0x179ca2.prototype.control.call(this);
    this.moveSpeed = this.dir ? -_0x179ca2.MOVE_SPEED_MAX : _0x179ca2.MOVE_SPEED_MAX;
};
_0x383ded.prototype.physics = _0x179ca2.prototype.physics;
_0x383ded.prototype.bounce = _0x179ca2.prototype.bounce;
_0x383ded.prototype.playerCollide = _0x179ca2.prototype.playerCollide;
_0x383ded.prototype.playerStomp = _0x179ca2.prototype.playerStomp;
_0x383ded.prototype.playerBump = _0x179ca2.prototype.playerBump;
_0x383ded.prototype.kill = _0x179ca2.prototype.kill;
_0x383ded.prototype.destroy = GameObject.prototype.destroy;
_0x383ded.prototype.isTangible = GameObject.prototype.isTangible;
_0x383ded.prototype.setState = _0x179ca2.prototype.setState;
_0x383ded.prototype.draw = _0x179ca2.prototype.draw;
GameObject.REGISTER_OBJECT(_0x383ded);
"use strict";

function _0x2358ba(_0x3e22cc, _0x2e5ea9, _0x329264, _0x5d111d, _0x36bf4f) {
    _0x179ca2.call(this, _0x3e22cc, _0x2e5ea9, _0x329264, _0x5d111d, _0x36bf4f);
    this.state = _0x2358ba.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
_0x2358ba.ASYNC = false;
_0x2358ba.ID = 0x52;
_0x2358ba.NAME = "FIRE FLOWER";
_0x2358ba.SPRITE = {};
_0x2358ba.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x2358ba.SPRITE_LIST.length; _0x2ea890++) _0x2358ba.SPRITE[_0x2358ba.SPRITE_LIST[_0x2ea890].NAME] = _0x2358ba.SPRITE_LIST[_0x2ea890], _0x2358ba.SPRITE[_0x2358ba.SPRITE_LIST[_0x2ea890].ID] = _0x2358ba.SPRITE_LIST[_0x2ea890];
_0x2358ba.STATE = {};
_0x2358ba.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x2358ba.SPRITE.IDLE0, _0x2358ba.SPRITE.IDLE1, _0x2358ba.SPRITE.IDLE2, _0x2358ba.SPRITE.IDLE3]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x2358ba.STATE_LIST.length; _0x2ea890++) _0x2358ba.STATE[_0x2358ba.STATE_LIST[_0x2ea890].NAME] = _0x2358ba.STATE_LIST[_0x2ea890], _0x2358ba.STATE[_0x2358ba.STATE_LIST[_0x2ea890].ID] = _0x2358ba.STATE_LIST[_0x2ea890];
_0x2358ba.prototype.update = _0x179ca2.prototype.update;
_0x2358ba.prototype.step = _0x179ca2.prototype.step;
_0x2358ba.prototype.control = function() {};
_0x2358ba.prototype.physics = _0x179ca2.prototype.physics;
_0x2358ba.prototype.playerCollide = _0x179ca2.prototype.playerCollide;
_0x2358ba.prototype.playerStomp = _0x179ca2.prototype.playerStomp;
_0x2358ba.prototype.playerBump = _0x179ca2.prototype.playerBump;
_0x2358ba.prototype.kill = _0x179ca2.prototype.kill;
_0x2358ba.prototype.destroy = GameObject.prototype.destroy;
_0x2358ba.prototype.isTangible = GameObject.prototype.isTangible;
_0x2358ba.prototype.setState = _0x179ca2.prototype.setState;
_0x2358ba.prototype.draw = _0x179ca2.prototype.draw;
GameObject.REGISTER_OBJECT(_0x2358ba);
"use strict";

function GoldFlowerObject(_0x3e22cc, _0x2e5ea9, _0x329264, _0x5d111d, _0x36bf4f) {
    _0x179ca2.call(this, _0x3e22cc, _0x2e5ea9, _0x329264, _0x5d111d, _0x36bf4f);
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
for (_0x2ea890 = 0x0; _0x2ea890 < GoldFlowerObject.SPRITE_LIST.length; _0x2ea890++) GoldFlowerObject.SPRITE[GoldFlowerObject.SPRITE_LIST[_0x2ea890].NAME] = GoldFlowerObject.SPRITE_LIST[_0x2ea890], GoldFlowerObject.SPRITE[GoldFlowerObject.SPRITE_LIST[_0x2ea890].ID] = GoldFlowerObject.SPRITE_LIST[_0x2ea890];
GoldFlowerObject.STATE = {};
GoldFlowerObject.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [GoldFlowerObject.SPRITE.IDLE0, GoldFlowerObject.SPRITE.IDLE1, GoldFlowerObject.SPRITE.IDLE2, GoldFlowerObject.SPRITE.IDLE3]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < GoldFlowerObject.STATE_LIST.length; _0x2ea890++) GoldFlowerObject.STATE[GoldFlowerObject.STATE_LIST[_0x2ea890].NAME] = GoldFlowerObject.STATE_LIST[_0x2ea890], GoldFlowerObject.STATE[GoldFlowerObject.STATE_LIST[_0x2ea890].ID] = GoldFlowerObject.STATE_LIST[_0x2ea890];
GoldFlowerObject.prototype.update = _0x179ca2.prototype.update;
GoldFlowerObject.prototype.step = _0x179ca2.prototype.step;
GoldFlowerObject.prototype.control = function() {};
GoldFlowerObject.prototype.physics = _0x179ca2.prototype.physics;
GoldFlowerObject.prototype.playerCollide = _0x179ca2.prototype.playerCollide;
GoldFlowerObject.prototype.playerStomp = _0x179ca2.prototype.playerStomp;
GoldFlowerObject.prototype.playerBump = _0x179ca2.prototype.playerBump;
GoldFlowerObject.prototype.kill = _0x179ca2.prototype.kill;
GoldFlowerObject.prototype.destroy = GameObject.prototype.destroy;
GoldFlowerObject.prototype.isTangible = GameObject.prototype.isTangible;
GoldFlowerObject.prototype.setState = _0x179ca2.prototype.setState;
GoldFlowerObject.prototype.draw = _0x179ca2.prototype.draw;
GameObject.REGISTER_OBJECT(GoldFlowerObject);
"use strict";

function _0x28762a(_0xdcdc93, _0x1745c4, _0x28fe86, _0x2a5f5e, _0x4f845e) {
    _0x179ca2.call(this, _0xdcdc93, _0x1745c4, _0x28fe86, _0x2a5f5e, _0x4f845e);
    this.state = _0x28762a.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.groundTimer = 0x0;
}
_0x28762a.ASYNC = false;
_0x28762a.ID = 0x54;
_0x28762a.NAME = "STAR";
_0x28762a.JUMP_LENGTH = 0x6;
_0x28762a.MOVE_SPEED_MAX = 0.125;
_0x28762a.JUMP_DELAY = 0x2;
_0x28762a.SPRITE = {};
_0x28762a.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x28762a.SPRITE_LIST.length; _0x2ea890++) _0x28762a.SPRITE[_0x28762a.SPRITE_LIST[_0x2ea890].NAME] = _0x28762a.SPRITE_LIST[_0x2ea890], _0x28762a.SPRITE[_0x28762a.SPRITE_LIST[_0x2ea890].ID] = _0x28762a.SPRITE_LIST[_0x2ea890];
_0x28762a.STATE = {};
_0x28762a.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x28762a.SPRITE.IDLE0, _0x28762a.SPRITE.IDLE1, _0x28762a.SPRITE.IDLE2, _0x28762a.SPRITE.IDLE3]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x28762a.STATE_LIST.length; _0x2ea890++) _0x28762a.STATE[_0x28762a.STATE_LIST[_0x2ea890].NAME] = _0x28762a.STATE_LIST[_0x2ea890], _0x28762a.STATE[_0x28762a.STATE_LIST[_0x2ea890].ID] = _0x28762a.STATE_LIST[_0x2ea890];
_0x28762a.prototype.update = _0x179ca2.prototype.update;
_0x28762a.prototype.step = _0x179ca2.prototype.step;
_0x28762a.prototype.control = function() {
    this.moveSpeed = this.dir ? -_0x28762a.MOVE_SPEED_MAX : _0x28762a.MOVE_SPEED_MAX;
    this.grounded && ++this.groundTimer >= _0x28762a.JUMP_DELAY ? this.jump = 0x0 : this.jump > _0x28762a.JUMP_LENGTH && (this.jump = -0x1, this.groundTimer = 0x0);
};
_0x28762a.prototype.physics = _0x179ca2.prototype.physics;
_0x28762a.prototype.bounce = _0x179ca2.prototype.bounce;
_0x28762a.prototype.playerCollide = _0x179ca2.prototype.playerCollide;
_0x28762a.prototype.playerStomp = _0x179ca2.prototype.playerStomp;
_0x28762a.prototype.playerBump = _0x179ca2.prototype.playerBump;
_0x28762a.prototype.kill = _0x179ca2.prototype.kill;
_0x28762a.prototype.destroy = GameObject.prototype.destroy;
_0x28762a.prototype.isTangible = GameObject.prototype.isTangible;
_0x28762a.prototype.setState = _0x179ca2.prototype.setState;
_0x28762a.prototype.draw = _0x179ca2.prototype.draw;
GameObject.REGISTER_OBJECT(_0x28762a);
"use strict";

function _0x5225c7(_0x45efeb, _0x4e234f, _0x47722b, _0x4ad8a3, _0x405f20) {
    _0x179ca2.call(this, _0x45efeb, _0x4e234f, _0x47722b, _0x4ad8a3, _0x405f20);
    this.state = _0x5225c7.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
_0x5225c7.ASYNC = false;
_0x5225c7.ID = 0x53;
_0x5225c7.NAME = "ONEUP";
_0x5225c7.SPRITE = {};
_0x5225c7.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xe8
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x5225c7.SPRITE_LIST.length; _0x2ea890++) _0x5225c7.SPRITE[_0x5225c7.SPRITE_LIST[_0x2ea890].NAME] = _0x5225c7.SPRITE_LIST[_0x2ea890], _0x5225c7.SPRITE[_0x5225c7.SPRITE_LIST[_0x2ea890].ID] = _0x5225c7.SPRITE_LIST[_0x2ea890];
_0x5225c7.STATE = {};
_0x5225c7.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x5225c7.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x5225c7.STATE_LIST.length; _0x2ea890++) _0x5225c7.STATE[_0x5225c7.STATE_LIST[_0x2ea890].NAME] = _0x5225c7.STATE_LIST[_0x2ea890], _0x5225c7.STATE[_0x5225c7.STATE_LIST[_0x2ea890].ID] = _0x5225c7.STATE_LIST[_0x2ea890];
_0x5225c7.prototype.update = _0x179ca2.prototype.update;
_0x5225c7.prototype.step = _0x179ca2.prototype.step;
_0x5225c7.prototype.control = function() {
    _0x179ca2.prototype.control.call(this);
    this.moveSpeed = this.dir ? -_0x179ca2.MOVE_SPEED_MAX : _0x179ca2.MOVE_SPEED_MAX;
};
_0x5225c7.prototype.physics = _0x179ca2.prototype.physics;
_0x5225c7.prototype.bounce = _0x179ca2.prototype.bounce;
_0x5225c7.prototype.playerCollide = _0x179ca2.prototype.playerCollide;
_0x5225c7.prototype.playerStomp = _0x179ca2.prototype.playerStomp;
_0x5225c7.prototype.playerBump = _0x179ca2.prototype.playerBump;
_0x5225c7.prototype.kill = _0x179ca2.prototype.kill;
_0x5225c7.prototype.destroy = GameObject.prototype.destroy;
_0x5225c7.prototype.isTangible = GameObject.prototype.isTangible;
_0x5225c7.prototype.setState = _0x179ca2.prototype.setState;
_0x5225c7.prototype.draw = _0x179ca2.prototype.draw;
GameObject.REGISTER_OBJECT(_0x5225c7);
"use strict";

function _0x2670fd(_0x11382b, _0x408fe1, _0x245656, _0x54f237, _0xcf6f5c) {
    GameObject.call(this, _0x11382b, _0x408fe1, _0x245656, _0x54f237);
    this.oid = _0xcf6f5c;
    this.state = _0x2670fd.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.anim = 0x0;
    this.dim = vec2.make(0x1, 0x1);
}
_0x2670fd.ASYNC = false;
_0x2670fd.ID = 0x61;
_0x2670fd.NAME = "COIN";
_0x2670fd.ANIMATION_RATE = 0x5;
_0x2670fd.SPRITE = {};
_0x2670fd.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x2670fd.SPRITE_LIST.length; _0x2ea890++) _0x2670fd.SPRITE[_0x2670fd.SPRITE_LIST[_0x2ea890].NAME] = _0x2670fd.SPRITE_LIST[_0x2ea890], _0x2670fd.SPRITE[_0x2670fd.SPRITE_LIST[_0x2ea890].ID] = _0x2670fd.SPRITE_LIST[_0x2ea890];
_0x2670fd.STATE = {};
_0x2670fd.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x2670fd.SPRITE.IDLE0, _0x2670fd.SPRITE.IDLE1, _0x2670fd.SPRITE.IDLE2, _0x2670fd.SPRITE.IDLE3]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x2670fd.STATE_LIST.length; _0x2ea890++) _0x2670fd.STATE[_0x2670fd.STATE_LIST[_0x2ea890].NAME] = _0x2670fd.STATE_LIST[_0x2ea890], _0x2670fd.STATE[_0x2670fd.STATE_LIST[_0x2ea890].ID] = _0x2670fd.STATE_LIST[_0x2ea890];
_0x2670fd.prototype.update = function(_0x3a5c2d) {
    switch (_0x3a5c2d) {
        case 0x0:
            this.kill();
    }
};
_0x2670fd.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0x2670fd.ANIMATION_RATE) % this.state.SPRITE.length];
};
_0x2670fd.prototype.playerCollide = function(_0x330af7) {
    this.dead || this.garbage || (_0x330af7.powerup(this), this.kill(), this.game.out.push(_0x4e8a16.encode(this.level, this.zone, this.oid, 0x0)));
};
_0x2670fd.prototype.playerStomp = function(_0x511b6f) {
    this.playerCollide(_0x511b6f);
};
_0x2670fd.prototype.playerBump = function(_0x1acb6c) {
    this.playerCollide(_0x1acb6c);
};
_0x2670fd.prototype.kill = function() {
    this.dead = true;
    this.destroy();
};
_0x2670fd.prototype.isTangible = GameObject.prototype.isTangible;
_0x2670fd.prototype.destroy = GameObject.prototype.destroy;
_0x2670fd.prototype.setState = function(_0x241cf1) {
    _0x241cf1 !== this.state && (this.state = _0x241cf1, this.sprite = _0x241cf1.SPRITE[0x0], this.anim = 0x0);
};
_0x2670fd.prototype.draw = function(_0x18cdfb) {
    _0x18cdfb.push({
        'pos': this.pos,
        'reverse': this.reverse,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0x2670fd);
"use strict";

function _0x5621ae(_0x1142ef, _0x303e83, _0x4ebfc5, _0x5baa42, _0x1b6f2b) {
    _0x179ca2.call(this, _0x1142ef, _0x303e83, _0x4ebfc5, _0x5baa42, _0x1b6f2b);
    this.state = _0x5621ae.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
    this.used = false;
    this.dim = vec2.make(0x1, 0x3);
}
_0x5621ae.ASYNC = true;
_0x5621ae.ID = 0x55;
_0x5621ae.NAME = "AXE";
_0x5621ae.SPRITE = {};
_0x5621ae.SPRITE_LIST = [{
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
for (_0x2ea890 = 0x0; _0x2ea890 < _0x5621ae.SPRITE_LIST.length; _0x2ea890++) _0x5621ae.SPRITE[_0x5621ae.SPRITE_LIST[_0x2ea890].NAME] = _0x5621ae.SPRITE_LIST[_0x2ea890], _0x5621ae.SPRITE[_0x5621ae.SPRITE_LIST[_0x2ea890].ID] = _0x5621ae.SPRITE_LIST[_0x2ea890];
_0x5621ae.STATE = {};
_0x5621ae.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x5621ae.SPRITE.IDLE0, _0x5621ae.SPRITE.IDLE1, _0x5621ae.SPRITE.IDLE2, _0x5621ae.SPRITE.IDLE3]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x5621ae.STATE_LIST.length; _0x2ea890++) _0x5621ae.STATE[_0x5621ae.STATE_LIST[_0x2ea890].NAME] = _0x5621ae.STATE_LIST[_0x2ea890], _0x5621ae.STATE[_0x5621ae.STATE_LIST[_0x2ea890].ID] = _0x5621ae.STATE_LIST[_0x2ea890];
_0x5621ae.prototype.update = function(_0x1a1524) {};
_0x5621ae.prototype.step = _0x179ca2.prototype.step;
_0x5621ae.prototype.control = function() {};
_0x5621ae.prototype.physics = _0x179ca2.prototype.physics;
_0x5621ae.prototype.playerCollide = function(_0x31f9f0) {
    if (!(this.dead || this.garbage || this.used))
        for (_0x31f9f0.powerup(this), this.used = true, _0x31f9f0 = 0x0; _0x31f9f0 < this.game.objects.length; _0x31f9f0++) {
            var _0x504f42 = this.game.objects[_0x31f9f0];
            if (_0x504f42 instanceof _0x31c6a5 && _0x504f42.level === this.level && _0x504f42.zone === _0x504f42.zone && !_0x504f42.dead) {
                _0x504f42.bonk();
                break;
            }
        }
};
_0x5621ae.prototype.playerStomp = _0x179ca2.prototype.playerStomp;
_0x5621ae.prototype.playerBump = _0x179ca2.prototype.playerBump;
_0x5621ae.prototype.kill = _0x179ca2.prototype.kill;
_0x5621ae.prototype.isTangible = GameObject.prototype.isTangible;
_0x5621ae.prototype.destroy = GameObject.prototype.destroy;
_0x5621ae.prototype.setState = _0x179ca2.prototype.setState;
_0x5621ae.prototype.draw = _0x179ca2.prototype.draw;
GameObject.REGISTER_OBJECT(_0x5621ae);
"use strict";

function _0x4ca0fe(_0x234a56, _0x5a16b8, _0x1f29a1, _0x10aec2, _0x4829ec) {
    _0x179ca2.call(this, _0x234a56, _0x5a16b8, _0x1f29a1, _0x10aec2, _0x4829ec);
    this.state = _0x4ca0fe.STATE.IDLE;
    this.sprite = this.state.SPRITE[0x0];
}
_0x4ca0fe.ASYNC = false;
_0x4ca0fe.ID = 0x56;
_0x4ca0fe.NAME = "POISON MUSHROOM";
_0x4ca0fe.SPRITE = {};
_0x4ca0fe.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xea
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4ca0fe.SPRITE_LIST.length; _0x2ea890++) _0x4ca0fe.SPRITE[_0x4ca0fe.SPRITE_LIST[_0x2ea890].NAME] = _0x4ca0fe.SPRITE_LIST[_0x2ea890], _0x4ca0fe.SPRITE[_0x4ca0fe.SPRITE_LIST[_0x2ea890].ID] = _0x4ca0fe.SPRITE_LIST[_0x2ea890];
_0x4ca0fe.STATE = {};
_0x4ca0fe.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x4ca0fe.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x4ca0fe.STATE_LIST.length; _0x2ea890++) _0x4ca0fe.STATE[_0x4ca0fe.STATE_LIST[_0x2ea890].NAME] = _0x4ca0fe.STATE_LIST[_0x2ea890], _0x4ca0fe.STATE[_0x4ca0fe.STATE_LIST[_0x2ea890].ID] = _0x4ca0fe.STATE_LIST[_0x2ea890];
_0x4ca0fe.prototype.update = _0x179ca2.prototype.update;
_0x4ca0fe.prototype.step = _0x179ca2.prototype.step;
_0x4ca0fe.prototype.control = function() {
    _0x179ca2.prototype.control.call(this);
    this.moveSpeed = this.dir ? -_0x179ca2.MOVE_SPEED_MAX : _0x179ca2.MOVE_SPEED_MAX;
};
_0x4ca0fe.prototype.physics = _0x179ca2.prototype.physics;
_0x4ca0fe.prototype.bounce = _0x179ca2.prototype.bounce;
_0x4ca0fe.prototype.playerCollide = _0x179ca2.prototype.playerCollide;
_0x4ca0fe.prototype.playerStomp = _0x179ca2.prototype.playerStomp;
_0x4ca0fe.prototype.playerBump = _0x179ca2.prototype.playerBump;
_0x4ca0fe.prototype.kill = _0x179ca2.prototype.kill;
_0x4ca0fe.prototype.destroy = GameObject.prototype.destroy;
_0x4ca0fe.prototype.isTangible = GameObject.prototype.isTangible;
_0x4ca0fe.prototype.setState = _0x179ca2.prototype.setState;
_0x4ca0fe.prototype.draw = _0x179ca2.prototype.draw;
GameObject.REGISTER_OBJECT(_0x4ca0fe);
"use strict";

function _0xacf9c6(_0x5da122, _0x35734b, _0x5d6bb2, _0x26679c, _0x3be4f7) {
    GameObject.call(this, _0x5da122, _0x35734b, _0x5d6bb2, _0x26679c);
    this.oid = _0x3be4f7;
    this.setState(_0xacf9c6.STATE.IDLE);
    this.anim = 0x0;
}
_0xacf9c6.ASYNC = true;
_0xacf9c6.ID = 0xfe;
_0xacf9c6.NAME = "CHECKMARK";
_0xacf9c6.ANIMATION_RATE = 0x3;
_0xacf9c6.SPRITE = {};
_0xacf9c6.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xfe
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0xacf9c6.SPRITE_LIST.length; _0x2ea890++) _0xacf9c6.SPRITE[_0xacf9c6.SPRITE_LIST[_0x2ea890].NAME] = _0xacf9c6.SPRITE_LIST[_0x2ea890], _0xacf9c6.SPRITE[_0xacf9c6.SPRITE_LIST[_0x2ea890].ID] = _0xacf9c6.SPRITE_LIST[_0x2ea890];
_0xacf9c6.STATE = {};
_0xacf9c6.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0xacf9c6.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0xacf9c6.STATE_LIST.length; _0x2ea890++) _0xacf9c6.STATE[_0xacf9c6.STATE_LIST[_0x2ea890].NAME] = _0xacf9c6.STATE_LIST[_0x2ea890], _0xacf9c6.STATE[_0xacf9c6.STATE_LIST[_0x2ea890].ID] = _0xacf9c6.STATE_LIST[_0x2ea890];
_0xacf9c6.prototype.update = function(_0x40ff82) {};
_0xacf9c6.prototype.step = function() {
    this.anim++;
    this.sprite = this.state.SPRITE[parseInt(this.anim / _0xacf9c6.ANIMATION_RATE) % this.state.SPRITE.length];
};
_0xacf9c6.prototype.kill = function() {};
_0xacf9c6.prototype.isTangible = GameObject.prototype.isTangible;
_0xacf9c6.prototype.destroy = GameObject.prototype.destroy;
_0xacf9c6.prototype.setState = function(_0x4f8d24) {
    _0x4f8d24 !== this.state && (this.state = _0x4f8d24, this.sprite = _0x4f8d24.SPRITE[0x0], this.anim = 0x0);
};
_0xacf9c6.prototype.draw = function(_0x38c8c1) {
    _0x38c8c1.push({
        'pos': this.pos,
        'reverse': false,
        'index': this.sprite.INDEX,
        'mode': 0x0
    });
};
GameObject.REGISTER_OBJECT(_0xacf9c6);
"use strict";

function _0x52ebfd(_0x2096f8, _0x13dd8d, _0x38b65c, _0x23047e, _0x349dca, _0x2f271c, _0x206fcd, _0x44377d, _0x167ec8) {
    GameObject.call(this, _0x2096f8, _0x13dd8d, _0x38b65c, _0x23047e);
    this.oid = _0x349dca;
    this.setState(_0x52ebfd.STATE.IDLE);
    this.offset = vec2.make(0x0, parseFloat(_0x2f271c));
    this.size = parseFloat(_0x206fcd);
    this.color = _0x44377d;
    this.text = _0x167ec8;
}
_0x52ebfd.ASYNC = true;
_0x52ebfd.ID = 0xfd;
_0x52ebfd.NAME = "TEXT";
_0x52ebfd.ANIMATION_RATE = 0x3;
_0x52ebfd.SPRITE = {};
_0x52ebfd.SPRITE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'INDEX': 0xff
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x52ebfd.SPRITE_LIST.length; _0x2ea890++) _0x52ebfd.SPRITE[_0x52ebfd.SPRITE_LIST[_0x2ea890].NAME] = _0x52ebfd.SPRITE_LIST[_0x2ea890], _0x52ebfd.SPRITE[_0x52ebfd.SPRITE_LIST[_0x2ea890].ID] = _0x52ebfd.SPRITE_LIST[_0x2ea890];
_0x52ebfd.STATE = {};
_0x52ebfd.STATE_LIST = [{
    'NAME': "IDLE",
    'ID': 0x0,
    'SPRITE': [_0x52ebfd.SPRITE.IDLE]
}];
for (_0x2ea890 = 0x0; _0x2ea890 < _0x52ebfd.STATE_LIST.length; _0x2ea890++) _0x52ebfd.STATE[_0x52ebfd.STATE_LIST[_0x2ea890].NAME] = _0x52ebfd.STATE_LIST[_0x2ea890], _0x52ebfd.STATE[_0x52ebfd.STATE_LIST[_0x2ea890].ID] = _0x52ebfd.STATE_LIST[_0x2ea890];
_0x52ebfd.prototype.update = function(_0x1442a5) {};
_0x52ebfd.prototype.step = function() {};
_0x52ebfd.prototype.kill = function() {};
_0x52ebfd.prototype.destroy = GameObject.prototype.destroy;
_0x52ebfd.prototype.isTangible = GameObject.prototype.isTangible;
_0x52ebfd.prototype.setState = function(_0x279010) {
    _0x279010 !== this.state && (this.state = _0x279010, this.sprite = _0x279010.SPRITE[0x0], this.anim = 0x0);
};
_0x52ebfd.prototype.write = function(_0x25c669) {
    _0x25c669.push({
        'pos': vec2.add(this.pos, this.offset),
        'size': this.size,
        'color': this.color,
        'text': this.text
    });
};
GameObject.REGISTER_OBJECT(_0x52ebfd);
"use strict";

function _0x36ce61(_0x494eff) {
    this.pos = _0x494eff;
    this.garbage = false;
}
_0x36ce61.prototype.step = function() {
    0x1 > this.life-- && this.destroy();
};
_0x36ce61.prototype.destroy = function() {
    this.garbage = true;
};
_0x36ce61.prototype.draw = function(_0x1511d8) {};
"use strict";

function _0x49484c(_0x240450, _0x145e8d) {
    _0x36ce61.call(this, _0x240450);
    this.sprite = _0x145e8d;
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
_0x49484c.FALL_SPEED = 0.0775;
_0x49484c.DRAG = 0.975;
_0x49484c.prototype.step = function() {
    for (var _0x5102d8 = 0x0; _0x5102d8 < this.bits.length; _0x5102d8++) {
        var _0x2ee7cd = this.bits[_0x5102d8];
        _0x2ee7cd.vel.y -= _0x49484c.FALL_SPEED;
        _0x2ee7cd.vel = vec2.scale(_0x2ee7cd.vel, _0x49484c.DRAG);
        _0x2ee7cd.pos = vec2.add(_0x2ee7cd.pos, _0x2ee7cd.vel);
        _0x2ee7cd.ang *= _0x49484c.DRAG;
        _0x2ee7cd.rot += _0x2ee7cd.ang;
    }
    _0x36ce61.prototype.step.call(this);
};
_0x49484c.prototype.destroy = _0x36ce61.prototype.destroy;
_0x49484c.prototype.draw = function(_0x3a211e) {
    for (var _0xcce4ae = 0x0; _0xcce4ae < this.bits.length; _0xcce4ae++) {
        var _0x33aee2 = this.bits[_0xcce4ae];
        _0x3a211e.push({
            'tex': "map",
            'ind': this.sprite,
            'pos': _0x33aee2.pos,
            'off': _0x33aee2.so,
            'rot': _0x33aee2.rot,
            'sp': _0x33aee2.sp,
            'ss': _0x33aee2.ss
        });
    }
};
"use strict";

function _0x4d17cb(_0xdc36a0) {
    _0x36ce61.call(this, _0xdc36a0);
    this.life = _0x4d17cb.UP_TIME + _0x4d17cb.DOWN_TIME;
    this.anim = this.sprite = 0x0;
    this.bits = [{
        'pos': vec2.add(this.pos, vec2.make(0x0, 0x0)),
        'sp': vec2.make(0x0, 0x0),
        'ss': vec2.make(0x1, 0x1),
        'so': vec2.make(0x0, 0x0)
    }];
}
_0x4d17cb.SPRITE = [0xf4, 0xf5, 0xf6, 0xf7];
_0x4d17cb.ANIMATION_RATE = 0x2;
_0x4d17cb.MOVE_SPEED = 0.375;
_0x4d17cb.UP_TIME = 0x8;
_0x4d17cb.DOWN_TIME = 0x6;
_0x4d17cb.prototype.step = function () {
_0x36ce61.prototype.step.call(this);
this.sprite = _0x4d17cb.SPRITE[parseInt(this.anim++ / _0x4d17cb.ANIMATION_RATE) % _0x4d17cb.SPRITE.length];
this.bits[0].pos.y = this.life >= _0x4d17cb.DOWN_TIME ? this.bits[0].pos.y + _0x4d17cb.MOVE_SPEED : this.bits[0].pos.y - _0x4d17cb.MOVE_SPEED;
};
_0x4d17cb.prototype.destroy = _0x36ce61.prototype.destroy;
_0x4d17cb.prototype.draw = function (_0x53eebf) {
for (var _0x2c08a7 = 0; _0x2c08a7 < this.bits.length; _0x2c08a7++) {
  var _0x259a9d = this.bits[_0x2c08a7];
  _0x53eebf.push({
    'tex': 'obj',
    'ind': this.sprite,
    'pos': _0x259a9d.pos,
    'off': _0x259a9d.so,
    'rot': 0,
    'sp': _0x259a9d.sp,
    'ss': _0x259a9d.ss
  });
}
};
'use strict';
function Input(game, container) {
    this.game = game;
    this.container = container;
    var that = this;
    this.container.onmousemove = function (e) {
        that.mouse.event(e);
    };
    this.container.onmousedown = function (e) {
        that.mouse.event(e, true);
    };
    this.container.onmouseup = function (e) {
        that.mouse.event(e, false);
    };
    this.container.addEventListener('mousewheel', function (e) {
        that.mouse.wheel(e);
    }, false);
    this.container.addEventListener('DOMMouseScroll', function (e) {
        that.mouse.wheel(e);
    }, false);
    document.onkeyup = function (e) {
        that.keyboard.event(e, false);
    };
    document.onkeydown = function (e) {
        that.keyboard.event(e, true);
    };
    this.mouse.input = this;
    this.keyboard.input = this;
}
Input.prototype.mouse = {};
Input.prototype.mouse.inputs = [];
Input.prototype.mouse.pos = {};
Input.prototype.mouse.mov = {};
Input.prototype.mouse.spin = 0;
Input.prototype.mouse.nxtMov = {};
Input.prototype.mouse.nxtSpin = 0;
Input.prototype.mouse.lmb = false;
Input.prototype.mouse.rmb = false;
Input.prototype.mouse.mmb = false;
Input.prototype.mouse.nxtMov.x = 0;
Input.prototype.mouse.nxtMov.y = 0;
Input.prototype.mouse.mov.x = 0;
Input.prototype.mouse.mov.y = 0;
Input.prototype.mouse.pos.x = 0;
Input.prototype.mouse.pos.y = 0;
Input.prototype.mouse.event = function (_0x14e913, _0x3ec557) {
    var _0x105247 = vec2.subtract(this.pos, vec2.make(_0x14e913.offsetX, _0x14e913.offsetY));
    _0x105247.y *= - 1;
    this.nxtMov = vec2.add(this.nxtMov, _0x105247);
    this.pos = {
    };
    this.pos.x = _0x14e913.offsetX;
    this.pos.y = _0x14e913.offsetY;
    if (void 0 !== _0x3ec557) {
      switch (_0x14e913.button) {
        case 0:
          this.lmb = _0x3ec557;
          break;
        case 2:
          this.rmb = _0x3ec557;
          break;
        case 1:
          this.mmb = _0x3ec557;
      }
      _0x3ec557 && this.inputs.push({
        'btn': _0x14e913.button,
        'pos': this.pos
      });
    }
};
Input.prototype.mouse.wheel = function (_0x4b5b3a) {
    _0x4b5b3a = window.event || _0x4b5b3a;
    this.nxtSpin += Math.max( - 1, Math.min(1, _0x4b5b3a.wheelDelta || - _0x4b5b3a.detail));
    return false;
};
Input.prototype.keyboard = {};
Input.prototype.keyboard.inputs = [];
Input.prototype.keyboard.keys = [];
Input.prototype.keyboard.event = function (_0x850595, _0x1aeebe) {
    (this.keys[_0x850595.keyCode] = _0x1aeebe) && this.inputs.push({
      'key': _0x850595.keyCode,
      'char': 1 !== _0x850595.key.length ? '' : _0x850595.key
    });
};
Input.prototype.pop = function () {
    this.mouse.mov = this.mouse.nxtMov;
    this.mouse.spin = this.mouse.nxtSpin;
    this.mouse.nxtMov = {};
    this.mouse.nxtMov.x = 0;
    this.mouse.nxtMov.y = 0;
    this.mouse.nxtSpin = 0;
    var result = {};
    result.mouse = this.mouse.inputs;
    result.keyboard = this.keyboard.inputs;
    this.keyboard.inputs = [];
    this.mouse.inputs = [];
    return result;
};
Input.prototype.destroy = function () {
    this.container.onmousemove = function () {};
    this.container.onmousedown = function () {};
    this.container.onmouseup = function () {};
    this.container.removeEventListener('mousewheel', this.mouse.wheel, false);
    this.container.removeEventListener('DOMMouseScroll', this.mouse.wheel, false);
    document.onkeyup = function () {};
    document.onkeydown = function () {};
};
'use strict';
function Resource(resource) {
    this.texture = {};
    this.texture.cache = {};
    this.texture.load = 0;
    this.load(resource);
}
Resource.prototype.load = function (resource) {
    for (var i = 0; i < resource.length; i++) {
      var _0x44cdab = resource[i],
      _0x387b2b = _0x44cdab.src.split('.').pop().toLowerCase();
      switch (_0x387b2b) {
        case 'png':
          this.loadTexture(_0x44cdab);
          break;
        case 'gif':
          this.loadTexture(_0x44cdab);
          break;
        default:
          app.menu.warn.show('Failed to load resource with unknown extension: ' + _0x387b2b);
      }
    }
};
Resource.prototype.loadTexture = function (_0x1a5f56) {
    var _0x38fab9 = this.texture;
    if (!_0x38fab9.cache[_0x1a5f56.id]) {
      var _0x24d029 = new Image();
      _0x24d029.onload = function () {
        _0x38fab9.cache[_0x1a5f56.id] = _0x24d029;
        _0x38fab9.load--;
      };
      _0x24d029.src = _0x1a5f56.src + '?v=2.1.0';
      _0x38fab9.load++;
    }
};
Resource.prototype.getTexture = function (_0x3b3f47) {
    return this.texture.cache[_0x3b3f47];
};
Resource.prototype.ready = function () {
    return 0 === this.texture.load;
};
'use strict';
function _0x565112(_0x24b602) {
    this.display = _0x24b602;
    this.pos = vec2.make(0, 0);
    this.scale = 3;
}
_0x565112.MOVE_MULT = 0.075;
_0x565112.ZOOM_MULT = 0.075;
_0x565112.ZOOM_MAX = 1;
_0x565112.ZOOM_MIN = 8;
_0x565112.prototype.move = function (_0x1a6f06) {
    this.pos = vec2.add(this.pos, vec2.scale(_0x1a6f06, 1 / this.scale * _0x565112.MOVE_MULT));
};
_0x565112.prototype.zoom = function(_0x45cdfa) {
    this.scale = Math.max(_0x565112.ZOOM_MAX, Math.min(_0x565112.ZOOM_MIN, this.scale + _0x565112.ZOOM_MULT * _0x45cdfa));
};
_0x565112.prototype.position = function(_0x1a1f2c) {
    this.pos = _0x1a1f2c;
};
_0x565112.prototype.unproject = function(_0x10f793) {
    _0x10f793 = vec2.add(_0x10f793, vec2.make(0.5 * -this.display.canvas.width, 0.5 * -this.display.canvas.height));
    _0x10f793 = vec2.scale(_0x10f793, 0x1 / this.scale);
    _0x10f793 = vec2.add(_0x10f793, vec2.make(this.pos.x * Display.TEXRES, this.pos.y * Display.TEXRES));
    return vec2.scale(_0x10f793, 0.0625);
};
"use strict";

function Display(_0x2c912b, _0x5f5c17, _0x580fa4, resource) {
    this.game = _0x2c912b;
    this.container = _0x5f5c17;
    this.canvas = _0x580fa4;
    this.context = this.canvas.getContext('2d');
    this.resource = new Resource(resource);
    this.camera = new _0x565112(this);
}
Display.TEXRES = 0x10;
Display.prototype.clear = function() {
    var _0x8880ce = this.context;
    if (this.container.clientWidth !== this.canvas.width || this.container.clientHeight !== this.canvas.height) this.canvas.width = this.container.clientWidth, this.canvas.height = this.container.clientHeight;
    _0x8880ce.clearRect(0x0, 0x0, this.canvas.width, this.canvas.height);
    _0x8880ce.mozImageSmoothingEnabled = false;
    _0x8880ce.webkitImageSmoothingEnabled = false;
    _0x8880ce.msImageSmoothingEnabled = false;
    _0x8880ce.imageSmoothingEnabled = false;
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
    var drawAll = data.z != 0;
    var context = this.context;
    var mapTexture = this.resource.getTexture("map");
    var zone = this.game.getZone();
    var width = zone.width();
    var screenWidth = this.canvas.width / Display.TEXRES * 0.55 / this.camera.scale;
    var screenLeft = Math.max(0x0, Math.min(width, parseInt(this.camera.pos.x - screenWidth)));
    var screenRight = Math.max(0x0, Math.min(width, parseInt(this.camera.pos.x + screenWidth)));
    for (i = 0x0; i < data.length; i++) {
        var tileRow = data[i];
        for (var j = screenLeft; j < screenRight; j++) {
            var tile = td32.decode16(tileRow[j]);
            if (drawAll || tile.depth === depth) {
                var sprite = util.sprite.getSprite(mapTexture, tile.index),
                    t = 0x0,
                    high = Math.max(0x0, tile.bump - 0x7);
                if (0x0 < high)
                    t = 0.22 * Math.sin((0x1 - (high - 0x2) / 0x8) * Math.PI);
                context.drawImage(mapTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, Display.TEXRES * j, Display.TEXRES * (i - t), Display.TEXRES, Display.TEXRES);
            }
        }
    }
};
Display.prototype.drawObject = function() {
    for (var _0x1383ee = this.context, _0x59e855 = this.game.getZone(), _0x48dacd = _0x59e855.dimensions(), _0x19005f = this.canvas.width / Display.TEXRES * 0.75 / this.camera.scale, _0x4775a7 = Math.max(0x0, Math.min(_0x48dacd.x, parseInt(this.camera.pos.x - _0x19005f))), _0xf1085e = Math.max(0x0, Math.min(_0x48dacd.x, parseInt(this.camera.pos.x + _0x19005f))), _0x1a3274 = [], _0x19005f = [], _0x1d56bc = 0x0; _0x1d56bc < this.game.objects.length; _0x1d56bc++) {
        var _0x599e6f = this.game.objects[_0x1d56bc];
        _0x599e6f.level === _0x59e855.level && _0x599e6f.zone === _0x59e855.id && _0x599e6f.pid !== this.game.pid && _0x599e6f.pos.x >= _0x4775a7 && _0x599e6f.pos.x <= _0xf1085e && (_0x599e6f.write && !this.game.disableText && _0x599e6f.write(_0x19005f), _0x599e6f.draw && _0x599e6f.draw(_0x1a3274));
    }(_0x1d56bc = this.game.getPlayer()) && _0x1d56bc.level === _0x59e855.level && _0x1d56bc.zone === _0x59e855.id && (_0x1d56bc.draw(_0x1a3274), _0x1d56bc.write(_0x19005f));
    _0x4775a7 = this.resource.getTexture("obj");
    for (_0x1d56bc = 0x0; _0x1d56bc < _0x1a3274.length; _0x1d56bc++) {
        var _0x585958 = _0x1a3274[_0x1d56bc],
            _0xf1085e = util.sprite.getSprite(_0x4775a7, _0x585958.index),
            _0x599e6f = !!_0x585958.reverse,
            _0x4d5276 = false,
            _0x33dc7d = false;
        switch (_0x585958.mode) {
            case 0x0:
                break;
            case 0x1:
                _0x1383ee.save();
                _0x33dc7d = true;
                _0x1383ee.globalAlpha = 0.5;
                break;
            case 0x2:
                0x0 === parseInt(0.5 * this.game.frame) % 0x2 && (_0x1383ee.save(), _0x33dc7d = true, _0x1383ee.globalCompositeOperation = "lighter");
                break;
            case 0x3:
                _0x4d5276 = true;
                break;
            default:
                0xa0 <= _0x585958.mode && 0xc0 > _0x585958.mode && (_0x1383ee.save(), _0x33dc7d = true, _0x1383ee.globalAlpha = parseFloat(_0x585958.mode - 0xa0) / 0x20);
        }
        if (_0x599e6f || _0x4d5276) _0x1383ee.save(), _0x1383ee.scale(_0x599e6f ? -0x1 : 0x1, _0x4d5276 ? -0x1 : 0x1);
        _0x59e855 = _0x599e6f ? -0x1 * Display.TEXRES * _0x585958.pos.x - Display.TEXRES : Display.TEXRES * _0x585958.pos.x;
        _0x585958 = _0x4d5276 ? -0x1 * Display.TEXRES * (_0x48dacd.y - _0x585958.pos.y - 0x1) - Display.TEXRES : Display.TEXRES * (_0x48dacd.y - _0x585958.pos.y - 0x1);
        _0x1383ee.drawImage(_0x4775a7, _0xf1085e[0x0], _0xf1085e[0x1], Display.TEXRES, Display.TEXRES, _0x59e855, _0x585958, Display.TEXRES, Display.TEXRES);
        (_0x599e6f || _0x4d5276) && _0x1383ee.restore();
        _0x33dc7d && _0x1383ee.restore();
    }
    for (_0x1d56bc = 0x0; _0x1d56bc < _0x19005f.length; _0x1d56bc++) _0x1a3274 = _0x19005f[_0x1d56bc], _0x59e855 = Display.TEXRES * _0x1a3274.pos.x + 0.5 * Display.TEXRES, _0x585958 = Display.TEXRES * (_0x48dacd.y - _0x1a3274.pos.y - 0x1) + 0.5 * Display.TEXRES, _0x1383ee.fillStyle = _0x1a3274.color, _0x1383ee.font = _0x1a3274.size * Display.TEXRES + "px SmbWeb", _0x1383ee.textAlign = "center", _0x1383ee.fillText(_0x1a3274.text, _0x59e855, _0x585958);
};
Display.prototype.drawEffect = function() {
    var _0x41c662 = this.context,
        _0xf999e4 = this.game.getZone(),
        _0x332d39 = _0xf999e4.dimensions(),
        _0x21821e = this.resource.getTexture("map"),
        _0x23eb37 = this.resource.getTexture("obj"),
        _0x248c55 = [];
    _0xf999e4.getEffects(_0x248c55);
    for (_0xf999e4 = 0x0; _0xf999e4 < _0x248c55.length; _0xf999e4++) {
        var _0x3f918f = _0x248c55[_0xf999e4],
            _0x170b31;
        switch (_0x3f918f.tex) {
            case "map":
                _0x170b31 = _0x21821e;
                break;
            case "obj":
                _0x170b31 = _0x23eb37;
        }
        var _0xa71008 = util.sprite.getSprite(_0x170b31, _0x3f918f.ind);
        _0xa71008[0x0] = parseInt(_0xa71008[0x0] + _0x3f918f.sp.x * Display.TEXRES);
        _0xa71008[0x1] = parseInt(_0xa71008[0x1] + _0x3f918f.sp.y * Display.TEXRES);
        _0x41c662.save();
        _0x41c662.translate(parseInt(Display.TEXRES * _0x3f918f.ss.x * 0.5), parseInt(Display.TEXRES * _0x3f918f.ss.y * 0.5));
        _0x41c662.translate(Display.TEXRES * _0x3f918f.pos.x, Display.TEXRES * (_0x332d39.y - _0x3f918f.pos.y - 0x1));
        _0x41c662.rotate(_0x3f918f.rot);
        _0x41c662.translate(-parseInt(Display.TEXRES * _0x3f918f.ss.x * 0.5), -parseInt(Display.TEXRES * _0x3f918f.ss.y * 0.5));
        _0x41c662.drawImage(_0x170b31, _0xa71008[0x0], _0xa71008[0x1], parseInt(Display.TEXRES * _0x3f918f.ss.x), parseInt(Display.TEXRES * _0x3f918f.ss.y), 0x0, 0x0, parseInt(Display.TEXRES * _0x3f918f.ss.x), parseInt(Display.TEXRES * _0x3f918f.ss.y));
        _0x41c662.restore();
    }
};
Display.prototype.drawUI = function() {
    var _0x42fbc7 = this.context,
        _0x253025 = this.canvas.width,
        _0x3f5bfe = this.canvas.height,
        _0x55d34e = [0xf0, 0xf1, 0xf2, 0xf1],
        _0x497ff3 = [0xfc, 0xfa],
        _0x4b1ee4 = [0xfb, 0xf9],
        _0x5495b4 = [0xcb, 0xca],
        _0x26af95 = _0x55d34e[parseInt(this.game.frame / 0x3) % _0x55d34e.length],
        _0x55d34e = this.resource.getTexture("obj"),
        _0x5b6014 = this.game.getPlayerInfo(this.game.pid),
        _0x2302e9;
    void 0x0 !== this.game.levelWarpId ? _0x2302e9 = this.game.world.getLevel(this.game.levelWarpId) : void 0x0 === this.game.startDelta && (_0x2302e9 = this.game.world.getInitialLevel());
    this.game.gameOver ? (_0x42fbc7.fillStyle = "black", _0x42fbc7.fillRect(0x0, 0x0, _0x253025, _0x3f5bfe), _0x42fbc7.fillStyle = "white", _0x42fbc7.font = "32px SmbWeb", _0x42fbc7.textAlign = "center", _0x42fbc7.fillText("GAME OVER", 0.5 * _0x253025, 0.5 * _0x3f5bfe)) : _0x2302e9 && (_0x42fbc7.fillStyle = "black", _0x42fbc7.fillRect(0x0, 0x0, _0x253025, _0x3f5bfe), _0x42fbc7.fillStyle = "white", _0x42fbc7.font = "32px SmbWeb", _0x42fbc7.textAlign = "center", _0x42fbc7.fillText(_0x2302e9.name, 0.5 * _0x253025, 0.5 * _0x3f5bfe), 0x0 <= this.game.startTimer && (_0x42fbc7.font = "24px SmbWeb", _0x42fbc7.textAlign = "center", _0x42fbc7.fillText("GAME STARTS IN: " + parseInt(this.game.startTimer / 0x1e), 0.5 * _0x253025, 0.5 * _0x3f5bfe + 0x28)));
    0x0 < this.game.victory ? (_0x42fbc7.fillStyle = "white", _0x42fbc7.font = "32px SmbWeb", _0x42fbc7.textAlign = "center", _0x42fbc7.fillText((0x3 >= this.game.victory ? "VICTORY ROYALE #" : "TOO BAD #") + this.game.victory, 0.5 * _0x253025, 0x28)) : (_0x42fbc7.fillStyle = "white", _0x42fbc7.font = "24px SmbWeb", _0x42fbc7.textAlign = "left", _0x42fbc7.fillText(_0x5b6014 ? _0x5b6014.name : "INFRINGIO", 0x8, 0x20), _0x3f5bfe = util.sprite.getSprite(_0x55d34e, _0x26af95), _0x2302e9 = 'x' + (0x9 >= this.game.coins ? '0' + this.game.coins : this.game.coins), _0x42fbc7.drawImage(_0x55d34e, _0x3f5bfe[0x0], _0x3f5bfe[0x1], Display.TEXRES, Display.TEXRES, 0x4, 0x28, 0x18, 0x18), _0x42fbc7.fillText(_0x2302e9, 0x1e, 0x40), _0x3f5bfe = util.sprite.getSprite(_0x55d34e, 0xd), _0x2302e9 = _0x42fbc7.measureText(_0x2302e9).width + 0x1e, _0x42fbc7.drawImage(_0x55d34e, _0x3f5bfe[0x0], _0x3f5bfe[0x1], Display.TEXRES, Display.TEXRES, 0x4 + _0x2302e9 + 0x10, 0x28, 0x18, 0x18), _0x42fbc7.fillText('x' + (0x9 >= this.game.lives ? '0' + this.game.lives : this.game.lives), 0x4 + _0x2302e9 + 0x10 + 0x1a, 0x40), this.game instanceof Game ? (_0x2302e9 = this.game.remain + " PLAYERS REMAIN", _0x3f5bfe = _0x42fbc7.measureText(_0x2302e9).width, _0x42fbc7.fillText(_0x2302e9, _0x253025 - _0x3f5bfe - 0x8, 0x20)) : this.game instanceof Lobby && (_0x2302e9 = this.game.players.length + (this.game.touchMode ? '' : " / 75 PLAYERS"), _0x3f5bfe = _0x42fbc7.measureText(_0x2302e9).width, _0x42fbc7.fillText(_0x2302e9, _0x253025 - _0x3f5bfe - 0x8, 0x20)), _0x3f5bfe = util.sprite.getSprite(_0x55d34e, _0x4b1ee4[this.game.audio.muteMusic ? 0x1 : 0x0]), _0x42fbc7.drawImage(_0x55d34e, _0x3f5bfe[0x0], _0x3f5bfe[0x1], Display.TEXRES, Display.TEXRES, _0x253025 - 0x18 - 0x8, 0x28, 0x18, 0x18), _0x3f5bfe = util.sprite.getSprite(_0x55d34e, _0x497ff3[this.game.audio.muteSound ? 0x1 : 0x0]), _0x42fbc7.drawImage(_0x55d34e, _0x3f5bfe[0x0], _0x3f5bfe[0x1], Display.TEXRES, Display.TEXRES, _0x253025 - 0x18 - 0x8 - 0x18 - 0x8, 0x28, 0x18, 0x18), _0x3f5bfe = util.sprite.getSprite(_0x55d34e, _0x5495b4[this.game.disableText ? 0x1 : 0x0]), _0x42fbc7.drawImage(_0x55d34e, _0x3f5bfe[0x0], _0x3f5bfe[0x1], Display.TEXRES, Display.TEXRES, _0x253025 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28, 0x18, 0x18), this.game.input.pad.connected() && (_0x3f5bfe = util.sprite.getSprite(_0x55d34e, 0xf8), _0x42fbc7.drawImage(_0x55d34e, _0x3f5bfe[0x0], _0x3f5bfe[0x1], Display.TEXRES, Display.TEXRES, _0x253025 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8 - 0x18 - 0x8, 0x28, 0x18, 0x18)));
};
Display.prototype.drawTouch = function() {
    if (this.game.touchMode) {
        var _0x52379a = this.context,
            _0x2f1a08 = this.canvas.width,
            _0x24bcb5 = this.canvas.height;
        this.game.thumbOrigin && (_0x52379a.fillStyle = "rgba(0,0,0,0.5)", _0x52379a.fillRect(this.game.thumbOrigin.x - 42.5, this.game.thumbOrigin.y - 42.5, 0x55, 0x55), _0x52379a.fillStyle = "rgba(255,255,255,1.0)", _0x52379a.fillRect(this.game.thumbPos.x - 32.5, this.game.thumbPos.y - 32.5, 0x41, 0x41));
        _0x52379a.fillStyle = "rgba(0,0,0,0.5)";
        _0x52379a.fillRect(_0x2f1a08 - 0x55, _0x24bcb5 - 0x55, 0x55, 0x55);
        _0x52379a.fillRect(_0x2f1a08 - 0x55, _0x24bcb5 - 0xaa, 0x55, 0x55);
        _0x52379a.fillStyle = this.game.touchRun ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.5)";
        _0x52379a.fillRect(_0x2f1a08 - 0x55, _0x24bcb5 - 0xff, 0x55, 0x55);
        _0x52379a.fillStyle = "white";
        _0x52379a.font = "65px SmbWeb";
        _0x52379a.textAlign = "left";
        var _0x7d72e9 = 'A',
            _0x5f36c5 = _0x52379a.measureText(_0x7d72e9).width;
        _0x52379a.fillText(_0x7d72e9, _0x2f1a08 - _0x5f36c5 - 0xa, _0x24bcb5 - 0xa);
        _0x7d72e9 = 'B';
        _0x5f36c5 = _0x52379a.measureText(_0x7d72e9).width;
        _0x52379a.fillText(_0x7d72e9, _0x2f1a08 - _0x5f36c5 - 7.5, _0x24bcb5 - 0x55 - 0xa);
        _0x52379a.fillStyle = this.game.touchRun ? "black" : "white";
        _0x7d72e9 = 'R';
        _0x5f36c5 = _0x52379a.measureText(_0x7d72e9).width;
        _0x52379a.fillText(_0x7d72e9, _0x2f1a08 - _0x5f36c5 - 7.5, _0x24bcb5 - 0xaa - 0xa);
    }
};
Display.prototype.drawLoad = function() {
    var _0x501bf4 = this.context,
        _0x32a663 = this.canvas.width,
        _0x20d987 = this.canvas.height;
    _0x501bf4.fillStyle = "black";
    _0x501bf4.fillRect(0x0, 0x0, _0x32a663, _0x20d987);
    _0x501bf4.font = "32px SmbWeb";
    _0x501bf4.fillStyle = "white";
    _0x501bf4.textAlign = "center";
    _0x501bf4.fillText("Loading Resources...", 0.5 * _0x32a663, 0.5 * _0x20d987);
};
Display.prototype.destroy = function() {};
"use strict";

function EditorDisplay(_0x354c73, _0xc922a2, _0x27051f, resource) {
    Display.call(this, _0x354c73, _0xc922a2, _0x27051f, resource);
}
EditorDisplay.prototype.clear = Display.prototype.clear;
EditorDisplay.prototype.draw = function() {
    var context = this.context;
    this.container.style.height = this.game.middle.clientHeight;
    this.clear();
    context.fillStyle = this.game.getZone().color;
    context.fillRect(0x0, 0x0, this.canvas.width, this.canvas.height);
    if (this.resource.ready()) {
        this.game.getZone().dimensions();
        context.save();
        context.translate(0.5 * this.canvas.width, 0.5 * this.canvas.height);
        context.scale(this.camera.scale, this.camera.scale);
        context.translate(-this.camera.pos.x * Display.TEXRES, -this.camera.pos.y * Display.TEXRES);
        this.drawReference();
        var zone = this.game.getZone();
        for (var i=0; i<zone.layers.length; i++) {
            this.drawMap(zone.layers[i].data, false);
            if (zone.layers[i].z == 0) {
                this.drawMap(zone.layers[i].data, true);
            }
        }
        this.drawBorder();
        this.drawCursor();
        this.drawCopyBlock();
        this.drawObjectTool();
        this.drawWarp();
        context.restore();
        this.drawPallete();
    } else {
        this.drawLoad();
    }
};
EditorDisplay.prototype.drawReference = function() {
    var _0x2f7f82 = this.context;
    if (this.game.reference && this.game.showRef) {
        var _0x1582a2 = this.resource.getTexture(this.game.reference);
        _0x1582a2 && _0x2f7f82.drawImage(_0x1582a2, 0x0, 0x0, _0x1582a2.width, _0x1582a2.height, this.game.offsetRef.x, this.game.offsetRef.y, _0x1582a2.width, _0x1582a2.height);
    }
};
EditorDisplay.prototype.drawMap = Display.prototype.drawMap;
EditorDisplay.prototype.drawObject = Display.prototype.drawObject;
EditorDisplay.prototype.drawEffect = Display.prototype.drawEffect;
EditorDisplay.prototype.drawUI = Display.prototype.drawUI;
EditorDisplay.prototype.drawBorder = function() {
    var _0x5c5cf9 = this.context,
        _0x5de87f = vec2.scale(this.game.getZone().dimensions(), Display.TEXRES);
    _0x5c5cf9.lineWidth = 0x1;
    _0x5c5cf9.strokeStyle = "#FFFFFF";
    _0x5c5cf9.beginPath();
    _0x5c5cf9.moveTo(-(0.1 * Display.TEXRES), -(0.1 * Display.TEXRES));
    _0x5c5cf9.lineTo(_0x5de87f.x + 0.1 * Display.TEXRES, -(0.1 * Display.TEXRES));
    _0x5c5cf9.lineTo(_0x5de87f.x + 0.1 * Display.TEXRES, _0x5de87f.y + 0.1 * Display.TEXRES);
    _0x5c5cf9.lineTo(-(0.1 * Display.TEXRES), _0x5de87f.y + 0.1 * Display.TEXRES);
    _0x5c5cf9.lineTo(-(0.1 * Display.TEXRES), -(0.1 * Display.TEXRES));
    _0x5c5cf9.stroke();
};
EditorDisplay.prototype.drawCursor = function() {
    if (this.game.tool && void 0x0 !== this.game.tool.brush) {
        var _0x3cfc29 = this.context,
            _0x5bb372 = this.game.getZone().dimensions(),
            _0x550bd3 = vec2.chop(this.camera.unproject(this.game.input.mouse.pos));
        0x0 > _0x550bd3.x || _0x550bd3.x >= _0x5bb372.x || 0x0 > _0x550bd3.y || _0x550bd3.y >= _0x5bb372.y || (_0x3cfc29.fillStyle = "rgba(255,255,255,0.5)", _0x3cfc29.fillRect(_0x550bd3.x * Display.TEXRES, _0x550bd3.y * Display.TEXRES, Display.TEXRES, Display.TEXRES));
    }
};
EditorDisplay.prototype.drawCopyBlock = function() {
    if (this.game.tool && this.game.tool.dim) {
        var _0x23fd99 = this.context,
            _0x2ec9bc = this.game.getZone().dimensions(),
            _0x31dc63 = vec2.chop(this.camera.unproject(this.game.input.mouse.pos));
        0x0 > _0x31dc63.x || _0x31dc63.x >= _0x2ec9bc.x || 0x0 > _0x31dc63.y || _0x31dc63.y >= _0x2ec9bc.y || (_0x23fd99.fillStyle = "rgba(255,255,255,0.5)", _0x23fd99.fillRect(_0x31dc63.x * Display.TEXRES, _0x31dc63.y * Display.TEXRES, Display.TEXRES * this.game.tool.dim.x, Display.TEXRES * this.game.tool.dim.y));
    }
};
EditorDisplay.prototype.drawPallete = function() {
    if (this.game.tool && void 0x0 !== this.game.tool.brush) {
        var _0x3196cf = this.context,
            _0x193ce3 = this.resource.getTexture("map"),
            _0x33f8cb = _0x193ce3.width / Display.TEXRES * (_0x193ce3.height / Display.TEXRES),
            _0x113ca2 = this.canvas.height - (parseInt(_0x33f8cb / parseInt(this.canvas.width / Display.TEXRES)) + 0x1) * Display.TEXRES;
        _0x3196cf.fillStyle = "rgba(0,0,0,0.5)";
        _0x3196cf.fillRect(0x0, _0x113ca2, this.canvas.width, this.canvas.height);
        for (var _0x5bd92e = 0x0, _0x113ca2 = Display.TEXRES, _0x8278cd = 0x0; _0x8278cd < _0x33f8cb; _0x8278cd++) {
            var _0x2db7a8 = util.sprite.getSprite(_0x193ce3, _0x8278cd);
            _0x3196cf.drawImage(_0x193ce3, _0x2db7a8[0x0], _0x2db7a8[0x1], Display.TEXRES, Display.TEXRES, _0x5bd92e, this.canvas.height - _0x113ca2, Display.TEXRES, Display.TEXRES);
            _0x5bd92e += Display.TEXRES;
            _0x5bd92e >= this.canvas.width - Display.TEXRES && (_0x5bd92e = 0x0, _0x113ca2 += Display.TEXRES);
        }
        _0x3196cf.fillStyle = "black";
        _0x3196cf.fillRect(0x0, this.canvas.height - (_0x113ca2 + Display.TEXRES), this.canvas.width, Display.TEXRES);
        _0x3196cf.font = Display.TEXRES + "px Arial";
        _0x3196cf.fillStyle = "white";
        _0x3196cf.textAlign = "left";
        _0x3196cf.fillText("  SPRITE SHEET  ", 0x2, this.canvas.height - (_0x113ca2 + 0x2));
        _0x33f8cb = td32.decode(this.game.tool.brush);
        _0x2db7a8 = util.sprite.getSprite(_0x193ce3, _0x33f8cb.index);
        for (_0x33f8cb = 0x90; _0x33f8cb < this.canvas.width; _0x33f8cb += Display.TEXRES) _0x3196cf.drawImage(_0x193ce3, _0x2db7a8[0x0], _0x2db7a8[0x1], Display.TEXRES, Display.TEXRES, _0x33f8cb, this.canvas.height - (_0x113ca2 + Display.TEXRES), Display.TEXRES, Display.TEXRES);
    }
};
EditorDisplay.prototype.drawObjectTool = function() {
    if (this.game.tool && void 0x0 !== this.game.tool.obj) {
        var context = this.context;
        var objTexture = this.resource.getTexture("obj");
        var zone = this.game.getZone()
        var height = zone.height();
        for (var i = 0x0; i < zone.obj.length; i++) {
            var obj = zone.obj[i],
                objType = GameObject.OBJECT(obj.type),
                pos = shor2.decode(obj.pos);
            context.fillStyle = obj === this.game.tool.selected ? "rgba(0,255,0,0.5)" : "rgba(255,0,0,0.5)";
            context.fillRect(pos.x * Display.TEXRES, (height - pos.y - 0x1) * Display.TEXRES, Display.TEXRES, Display.TEXRES);
            if (objType && objType.SPRITE && objType.SPRITE[0x0]) {
                var sprite = util.sprite.getSprite(objTexture, objType.SPRITE[0x0].INDEX);
                context.drawImage(objTexture, sprite[0x0], sprite[0x1], Display.TEXRES, Display.TEXRES, pos.x * Display.TEXRES, (height - pos.y - 0x1) * Display.TEXRES, Display.TEXRES, Display.TEXRES);
            }
        }
    }
};
EditorDisplay.prototype.drawWarp = function() {
    if (this.game.tool && void 0x0 !== this.game.tool.vore) {
        var context = this.context;
        var zone = this.game.getZone();
        for (var i = 0x0; i < zone.warp.length; i++) {
            var warp = zone.warp[i],
                pos = shor2.decode(warp.pos);
            context.fillStyle = warp === this.game.tool.selected ? "rgba(0,0,255,0.5)" : "rgba(255,0,0,0.5)";
            context.fillRect(pos.x * Display.TEXRES, (zone.height() - pos.y - 0x1) * Display.TEXRES, Display.TEXRES, Display.TEXRES);
        }
    }
};
EditorDisplay.prototype.drawLoad = Display.prototype.drawLoad;
"use strict";

function World(editor, data) {
    this.game = editor;
    this.initial = data.initial;
    this.mode = data.mode;
    this.shortname = data.shortname;
    this.levels = [];
    for (var i = 0x0; i < data.world.length; i++) this.levels.push(new Level(editor, data.world[i]));
}
World.prototype.step = function() {
    for (var _0x110c7b = 0x0; _0x110c7b < this.levels.length; _0x110c7b++) this.levels[_0x110c7b].step();
};
World.prototype.getInitialLevel = function() {
    return this.getLevel(this.initial);
};
World.prototype.getInitialZone = function() {
    var level = this.getLevel(this.initial);
    return this.getZone(level.id, level.initial);
};
World.prototype.getLevel = function(_0x58a42b) {
    for (var _0x3c4f4d = 0x0; _0x3c4f4d < this.levels.length; _0x3c4f4d++) {
        var _0x5c127d = this.levels[_0x3c4f4d];
        if (_0x5c127d.id === _0x58a42b) return _0x5c127d;
    }
};
World.prototype.getZone = function(levelId, zoneId) {
    for (var i = 0x0; i < this.levels.length; i++) {
        var level = this.levels[i];
        if (level.id === levelId)
            for (var j = 0x0; j < level.zones.length; j++) {
                var zone = level.zones[j];
                if (zone.id === zoneId) return zone;
            }
    }
};

function Level(game, level) {
    this.game = game;
    this.id = level.id;
    this.name = level.name;
    this.initial = level.initial;
    this.zones = [];
    for (var i = 0x0; i < level.zone.length; i++) this.zones.push(new Zone(game, this.id, level.zone[i]));
}
Level.prototype.step = function() {
    for (var _0x53d873 = 0x0; _0x53d873 < this.zones.length; _0x53d873++) this.zones[_0x53d873].step();
};
Level.prototype.getInitial = function() {
    for (var _0x40a592 = 0x0; _0x40a592 < this.zones.length; _0x40a592++) {
        var _0x2ccf67 = this.zones[_0x40a592];
        if (_0x2ccf67.id === this.initial) return _0x2ccf67;
    }
};
Level.prototype.getWarp = function(_0x2da888) {
    for (var _0x4984c3 = 0x0; _0x4984c3 < this.zones.length; _0x4984c3++)
        for (var _0x384861 = this.zones[_0x4984c3], _0x22f4a9 = 0x0; _0x22f4a9 < _0x384861.warp.length; _0x22f4a9++) {
            var _0x325935 = _0x384861.warp[_0x22f4a9];
            if (_0x325935.id === _0x2da888) return {
                'level': this.id,
                'zone': _0x384861.id,
                'pos': shor2.decode(_0x325935.pos),
                'data': _0x325935.data
            };
        }
};

function Zone(game, level, data) {
    this.game = game;
    this.id = data.id;
    this.level = level;
    this.initial = data.initial;
    this.color = data.color;
    this.music = data.music ? data.music : '';
    this.winmusic = data.winmusic ? data.winmusic : '';
    this.layers = data.layers || [];
    if (data.data) {
        for (var i=0; i<this.layers.length && this.layers[i].z < 0; i++);
        this.layers.splice(i, 0, {z:0, data:data.data});
    }
    this.obj = data.obj;
    this.warp = data.warp;
    this.bumped = [];
    this.effects = [];
    this.vines = [];
    this.sounds = [];
};
Zone.prototype.getLayer = function(z) {
    for (var i=0; i<this.layers.length; i++)
        if (this.layers[i].z == z) return this.layers[i];
};
Zone.prototype.update = function(_0x35b5e4, _0x3eda45, _0x46e601, _0x4a8300, _0x22ebd2, _0x790db8, _0x18a2da) {
    var _0x37cb89 = this.height() - 0x1 - _0x790db8,
        _0x37cb89 = td32.decode(this.data[_0x37cb89][_0x22ebd2]);
    _0x37cb89.definition.TRIGGER(_0x35b5e4, _0x3eda45, _0x37cb89, _0x46e601, _0x4a8300, _0x22ebd2, _0x790db8, _0x18a2da);
};
Zone.prototype.step = function() {
    for (var _0x3cb5b8 = 0x0; _0x3cb5b8 < this.bumped.length; _0x3cb5b8++) {
        var _0x27281a = this.bumped[_0x3cb5b8],
            _0x2551d7 = td32.decode(this.data[_0x27281a.y][_0x27281a.x]);
        0x0 < _0x2551d7.bump ? this.data[_0x27281a.y][_0x27281a.x] = td32.bump(this.data[_0x27281a.y][_0x27281a.x], _0x2551d7.bump - 0x1) : this.bumped.splice(_0x3cb5b8--, 0x1);
    }
    for (_0x3cb5b8 = 0x0; _0x3cb5b8 < this.effects.length; _0x3cb5b8++) _0x27281a = this.effects[_0x3cb5b8], _0x27281a.garbage ? this.effects.splice(_0x3cb5b8--, 0x1) : _0x27281a.step();
    for (_0x3cb5b8 = 0x0; _0x3cb5b8 < this.vines.length; _0x3cb5b8++) _0x27281a = this.vines[_0x3cb5b8], 0x0 > _0x27281a.y ? this.vines.splice(_0x3cb5b8--, 0x1) : this.data[_0x27281a.y--][_0x27281a.x] = _0x27281a.td;
    for (_0x3cb5b8 = 0x0; _0x3cb5b8 < this.sounds.length; _0x3cb5b8++) this.sounds[_0x3cb5b8].done() && this.sounds.splice(_0x3cb5b8--, 0x1);
    td32.update(this.game);
};
Zone.prototype.tile = function(_0x540f3a, _0x52dcb9) {
    _0x52dcb9 = this.height() - 0x1 - _0x52dcb9;
    return this.data[_0x52dcb9][_0x540f3a];
};
Zone.prototype.bump = function(_0x203d86, _0x453d76) {
    var _0x107074 = this.height() - 0x1 - _0x453d76;
    this.data[_0x107074][_0x203d86] = td32.bump(this.data[_0x107074][_0x203d86], 0xf);
    this.bumped.push({
        'x': _0x203d86,
        'y': _0x107074
    });
    this.play(_0x203d86, _0x453d76, "sfx/bump.wav", 0.5, 0.04);
};
Zone.prototype.replace = function(_0xc07f50, _0x2f093, _0x129bea) {
    _0x2f093 = this.height() - 0x1 - _0x2f093;
    this.data[_0x2f093][_0xc07f50] = _0x129bea;
};
Zone.prototype.grow = function(_0x244631, _0x169cf6, _0x1d27fe) {
    _0x169cf6 = this.height() - 0x1 - _0x169cf6;
    this.vines.push({
        'x': _0x244631,
        'y': _0x169cf6,
        'td': _0x1d27fe
    });
};
Zone.prototype.break = function(_0x228fa9, _0x107a48, _0x1b5b00) {
    var _0x19bcf3 = this.height() - 0x1 - _0x107a48,
        _0x156fc0 = td32.decode16(this.data[_0x19bcf3][_0x228fa9]);
    this.data[_0x19bcf3][_0x228fa9] = _0x1b5b00;
    this.effects.push(new _0x49484c(vec2.make(_0x228fa9, _0x107a48), _0x156fc0.index));
    this.play(_0x228fa9, _0x107a48, "sfx/break.wav", 1.5, 0.04);
};
Zone.prototype.coin = function(_0x57aaef, _0x5aff63) {
    this.dimensions();
    this.effects.push(new _0x4d17cb(vec2.make(_0x57aaef, _0x5aff63)));
};
Zone.prototype.play = function(_0x4de458, _0x5a5d1b, _0x2e80cf, _0x172cdb, _0x361cc4) {
    this.game.getZone() === this && (_0x2e80cf = this.game.audio.getSpatialAudio(_0x2e80cf, _0x172cdb, _0x361cc4, "effect"), _0x2e80cf.play(vec2.make(_0x4de458, _0x5a5d1b)), this.sounds.push(_0x2e80cf));
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
Zone.prototype.getTile = function(_0x24bebe) {
    var _0x3e3f49 = this.dimensions();
    _0x24bebe = vec2.copy(_0x24bebe);
    _0x24bebe.y = _0x3e3f49.y - _0x24bebe.y - 0x1;
    return td32.decode(this.data[Math.max(0x0, Math.min(_0x3e3f49.y, Math.floor(_0x24bebe.y)))][Math.max(0x0, Math.min(_0x3e3f49.x, Math.floor(_0x24bebe.x)))]);
};
Zone.prototype.getTiles = function(_0x5c9b8a, _0x323201) {
    var _0x124dff = this.dimensions(),
        _0x4dd211 = vec2.copy(_0x5c9b8a);
    _0x4dd211.y = _0x124dff.y - _0x4dd211.y;
    _0x5c9b8a = parseInt(Math.max(Math.min(Math.floor(_0x4dd211.x) - 0x1, _0x124dff.x), 0x0));
    var _0x3374ce = parseInt(Math.max(Math.min(Math.ceil(_0x4dd211.x + _0x323201.x) + 0x1, _0x124dff.x), 0x0)),
        _0x5e83fd = parseInt(Math.max(Math.min(Math.floor(_0x4dd211.y - _0x323201.y) - 0x1, _0x124dff.y), 0x0));
    _0x323201 = parseInt(Math.max(Math.min(Math.ceil(_0x4dd211.y) + 0x1, _0x124dff.y), 0x0));
    for (_0x4dd211 = []; _0x5e83fd < _0x323201; _0x5e83fd++)
        for (var _0x4a7d10 = _0x5c9b8a; _0x4a7d10 < _0x3374ce; _0x4a7d10++) {
            var _0x1e996e = td32.decode(this.data[_0x5e83fd][_0x4a7d10]);
            _0x1e996e.pos = vec2.make(_0x4a7d10, _0x124dff.y - 0x1 - _0x5e83fd);
            _0x1e996e.ind = [_0x5e83fd, _0x4a7d10];
            _0x4dd211.push(_0x1e996e);
        }
    return _0x4dd211;
};
Zone.prototype.getEffects = function(_0x5f1367) {
    for (var _0x1f23f3 = 0x0; _0x1f23f3 < this.effects.length; _0x1f23f3++) this.effects[_0x1f23f3].draw(_0x5f1367);
};
"use strict";

function Editor(data) {
    this.middle = document.getElementById("editor-middle");
    this.container = document.getElementById("editor-display");
    this.canvas = document.getElementById("editor-display-canvas");
    var tileDef = document.getElementById("editor-tool-tile-def");
    for (var x in tileDefs) {
        var elem = document.createElement("option");
        elem.value = x;
        elem.innerText = x+" - "+tileDefs[x].name;
        tileDef.appendChild(elem);
    }
    var tileDataObjId = document.getElementById("editor-tool-tile-data-objid");
    for (var x in objDefs) {
        var elem = document.createElement("option");
        elem.value = x;
        elem.innerText = x+" - "+objDefs[x].name;
        tileDataObjId.appendChild(elem);
    }
    this.input = new Input(this, this.canvas);
    this.display = new EditorDisplay(this, this.container, this.canvas, data.resource);
    this.load(data);
    this.frame = 0x0;
    this.delta = util.time.now();
    this.dataRaw = data;
    this.showRef = false;
    this.offsetRef = vec2.make(0x0, 0x0);
    this.reference = void 0x0;
    var _0x5f5a9a = this;
    this.frameReq = FrameReq.call(window, function() {
        _0x5f5a9a.draw();
    });
}
Editor.TICK_RATE = 0x21;
Editor.prototype.load = function(data) {
    this.world = new World(this, data);
    this.ready = true;
};
Editor.prototype.compile = function() {
    var outData = {};
    outData.type = this.dataRaw.type;
    outData.mode = this.world.mode;
    outData.shortname = this.world.shortname;
    outData.resource = this.dataRaw.resource;
    outData.initial = this.world.initial;
    outData.world = [];
    for (var i = 0x0; i < this.world.levels.length; i++) {
        var level = this.world.levels[i],
            outLevel = {};
        outLevel.id = level.id;
        outLevel.name = level.name;
        outLevel.initial = level.initial;
        outLevel.zone = [];
        for (var j = 0x0; j < level.zones.length; j++) {
            var zone = level.zones[j],
                outZone = {};
            outZone.id = zone.id;
            outZone.initial = zone.initial;
            outZone.color = zone.color;
            outZone.music = zone.music;
            outZone.winmusic = zone.winmusic;
            outZone.layers = zone.layers;
            outZone.obj = zone.obj;
            outZone.warp = zone.warp;
            outLevel.zone.push(outZone);
        }
        outData.world.push(outLevel);
    }
    return JSON.stringify(outData);
};
Editor.prototype.setTool = function(toolType) {
    this.tool && this.tool.destroy();
    var showLayers = true;
    switch (toolType) {
        case "world":
            this.tool = new WorldTool(this);
            this.tool.load();
            break;
        case "level":
            this.tool = new LevelTool(this);
            this.tool.load();
            break;
        case "zone":
            this.tool = new ZoneTool(this);
            this.tool.load();
            break;
        case "tile":
            this.tool = new TileTool(this);
            this.tool.load();
            break;
        case "object":
            this.tool = new ObjectTool(this);
            this.tool.load();
            showLayers = false;
            break;
        case "warp":
            this.tool = new WarpTool(this);
            this.tool.load();
            showLayers = false;
            break;
        case "copy":
            this.tool = new CopyTool(this);
            this.tool.load();
            break;
        case "rep":
            this.tool = new RepTool(this);
            this.tool.load();
            break;
        case "ref":
            this.tool = new ReferenceTool(this), this.tool.load();
    }
    document.getElementById("layer-list-container").style.display = showLayers ? "" : "none";
};
Editor.prototype.doInput = function() {
    var lastInput = this.input.pop(),
        mouse = this.input.mouse,
        keys = this.input.keyboard.keys;
    if (this.tool && this.tool.input) this.tool.input(lastInput, mouse, keys);
    if (mouse.rmb) this.display.camera.move(vec2.make(mouse.mov.x, -mouse.mov.y));
    if (mouse.spin) this.display.camera.zoom(mouse.spin);
    if (keys[0x47] && !this.inx71) {
        this.showRef = !this.showRef;
        this.inx71 = true;
    }
    this.inx71 = keys[0x47];
};
Editor.prototype.doStep = function() {};
Editor.prototype.setZone = function(zone) {
    this.currentZone = zone;
    this.tool && this.tool.reload();
    var dims = zone.dimensions();
    this.display.camera.position(vec2.scale(dims, 0.5));
    app.menu.list.updateLayerList();
    this.setLayer(zone.getLayer(0));
};
Editor.prototype.setLayer = function(layer) {
    this.currentLayer = layer;
    var list = document.getElementById("layer-list");
    for (var item of list.children) {
        item.setAttribute("class", item.layer.z == layer.z ? "list-zone-current" : "list-zone");
    }
};
Editor.prototype.getZone = function() {
    this.currentZone || this.setZone(this.world.getInitialZone());
    return this.currentZone;
};
Editor.prototype.draw = function() {
    if (this.ready) {
        var time = util.time.now();
        if (0.75 < (time - this.delta) / Editor.TICK_RATE) {
            this.doInput();
            this.doStep();
            this.display.draw();
            this.frame++;
            this.delta = time;
        }
    }
    var that = this;
    this.frameReq = FrameReq.call(window, function() {
        that.draw();
    });
};
Editor.prototype.destroy = function() {
    _0x37e7c3.call(window, this.frameReq);
};
"use strict";

function App() {
    this.menu = new Menu();
    this.file = new File();
}
App.prototype.init = function() {
    this.menu.fileMenu();
};
App.prototype.load = function(data) {
    this.menu.editorMenu();
    this.editor = new Editor(data);
    this.menu.list.generate();
};
App.prototype.save = function() {
    if (this.editor) {
        var data = this.editor.compile();
        this.file.save(data);
    }
};
App.prototype.close = function() {
    this.editor && this.editor.destroy();
    location.reload();
};
var app = new App();
app.init();
