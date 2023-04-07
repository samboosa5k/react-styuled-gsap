import { Card, ExportedCard } from './Card';

export default {
    title: 'Card',
    component: Card
}

export const Default = () => Card(<h1>Example</h1>)

export const ResultCard = () => <ExportedCard/>