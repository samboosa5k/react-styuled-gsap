type Anchor = [number, number];
type BezierAnchors = [Anchor, Anchor, Anchor];
type BezierPoint = { x: number; y: number };

/**
 * "Simple Quadratic Bézier curve"
 * Generated bezier points based on Nathan Rooy python tutorial
 * @link {https://nathanrooy.github.io/posts/2016-09-14/airfoil-manipulation-via-bezier-curves-with-python/}
 * @param points
 * @param anchors
 * @returns
 */
const createBezierValues = (points: number[]) => (anchors: BezierAnchors) => {
    const [[px0, py0], [px1, py1], [px2, py2]] = [...anchors];
    return points.reduce((points: BezierPoint[], _: number, idx: number) => {
        const t = idx / points.length;
        const x =
            (1 - t) * ((1 - t) * px0 + t * px1) + t * ((1 - t) * px1 + t * px2);
        const y =
            (1 - t) * ((1 - t) * py0 + t * py1) + t * ((1 - t) * py1 + t * py2);
        return [...points, { x, y }];
    }, []);
};

const createPoints = (length: number) =>
    Array.from({ length }, (_, idx: number) => idx);
const createBezierCoordinates = (count: number, anchors: BezierAnchors) =>
    createBezierValues(createPoints(count))(anchors);

// const pointsExample = () =>
//     createBezierCoordinates(20, [
//         [0, 0],
//         [0.5, 1],
//         [1, 0],
//     ]);

export { createBezierValues, createBezierCoordinates };
