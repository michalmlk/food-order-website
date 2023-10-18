import { rest } from 'msw';
import { MOCKED_MEALS } from '../assets/mockedMeals';

const mockedMeals = (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(MOCKED_MEALS)
    )
};

export const handlers = [
    rest.get('/meals', mockedMeals),
    rest.post('/order', (req, res, ctx) => {
        alert('Order finished');
    })

]