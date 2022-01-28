import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import App  from './index.svelte';
import API from'../services/Api';

jest.mock('$lib/variables', () => ({ __esModule: true, variables: { basePath: 'localhost:2222' } })); 
jest.mock('../services/Api');


test("says 'hello world!'", async () => {
    API.get.mockResolvedValue({message: "Hello World!"});
    render(App);
    expect(await screen.findByText("Hello World!")).toBeInTheDocument();
})
