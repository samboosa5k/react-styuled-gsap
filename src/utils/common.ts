const createNumberArray = (
    length: number,
    callback: (arrayItem: unknown, index: number) => number
): number[] => Array.from({ length }, callback);

type Anchor = [number, number];
type BezierAnchors = [Anchor, Anchor, Anchor];
type BezierPoint = { x: number; y: number };

/**
 * "Simple Quadratic Bézier curve"
 * Generated bezier points based on Nathan Rooy python tutorial
 * @link {https://nathanrooy.github.io/posts/2016-09-14/airfoil-manipulation-via-bezier-curves-with-python/}
 * @param numberArray
 * @param anchors
 * @returns
 */
const createBezierValues = (
    numberArray: number[],
    anchors: BezierAnchors
): any => {
    const [[px0, py0], [px1, py1], [px2, py2]] = [...anchors];
    const interpolated = numberArray.reduce(
        (points: BezierPoint[], _: number, idx: number) => {
            const t = idx / numberArray.length;
            const x =
                (1 - t) * ((1 - t) * px0 + t * px1) +
                t * ((1 - t) * px1 + t * px2);
            const y =
                (1 - t) * ((1 - t) * py0 + t * py1) +
                t * ((1 - t) * py1 + t * py2);
            return [...points, { x, y }];
        },
        []
    );
    return interpolated;
};

const pointsExample = () =>
    createBezierValues(
        createNumberArray(20, (_, idx: number) => idx),
        [
            [0, 0],
            [0.5, 1],
            [1, 0],
        ]
    );

export { pointsExample, createNumberArray, createBezierValues };
