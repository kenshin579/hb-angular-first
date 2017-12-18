import {mul, PI, square} from './math';

export function areaOfCircle(r) {
    return mul(PI, square(r));
}

export function areaOOfRectangle(w, h) {
    return mul(w, h);
}