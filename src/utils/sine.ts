import { roundDecimal } from '@/utils/helpers';

/**
 * @Link https://www.w3resource.com/javascript-exercises/javascript-math-exercise-33.php
 * @param degrees
 */
const calculateRadians = (degrees: number) => degrees * (Math.PI / 180);
const calculateCircleY = (radius: number) => (radians: number) =>
    roundDecimal(3)(Math.sin(radians) * radius);

const getCirclePoint = (radius: number) => (degrees: number) =>
    calculateCircleY(radius)(calculateRadians(degrees));

const circle10 = getCirclePoint(10);

const sineWavePoints = (count: number, points: number[] = []): number[] | [] =>
    points.length < count
        ? sineWavePoints(count, [
              ...points,
              roundDecimal(3)(90 * circle10(count - points.length / count)),
          ])
        : points;

export { sineWavePoints };
